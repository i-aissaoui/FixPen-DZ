const SPREADSHEET_ID = "";

const HEADERS = [
  "order_id",
  "created_at",
  "full_name",
  "phone",
  "wilaya_code",
  "wilaya",
  "commune",
  "delivery_type",
  "stop_desk_or_home",
  "color_codes",
  "color_quantities",
  "pen_count",
  "product_subtotal_da",
  "delivery_fee_da",
  "grand_total_da",
  "payment_method",
  "status",
  "needs_help",
  "notes",
];

function sheet() {
  if (SPREADSHEET_ID.trim()) {
    return SpreadsheetApp.openById(SPREADSHEET_ID.trim()).getActiveSheet();
  }
  return SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
}

function json(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON);
}

function setupHeaders() {
  sheet().getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
}

function quantityText(order) {
  if (Array.isArray(order.shadeQuantities) && order.shadeQuantities.length) {
    return order.shadeQuantities.map((item) => `${item.code}x${item.quantity}`).join(" | ");
  }
  return (order.shadeCodes || []).join(" | ");
}

function orderRow(order) {
  return [
    order.id || "",
    order.createdAt || "",
    order.fullName || "",
    order.phone || "",
    order.wilayaId || "",
    order.wilayaName || "",
    order.commune || "",
    order.deliveryType || "",
    order.deliveryType === "stopDesk" ? "Stop-Desk" : "À domicile",
    (order.shadeCodes || []).join(" | "),
    quantityText(order),
    order.penCount || 0,
    order.productSubtotal || 0,
    order.deliveryFee || 0,
    order.grandTotal || 0,
    "Cash on Delivery",
    order.status || "new",
    order.needHelp ? "yes" : "no",
    order.notes || "",
  ];
}

function doGet() {
  return json({
    ok: true,
    service: "FixPen DZ Google Sheets",
    configured: Boolean(SPREADSHEET_ID.trim()),
  });
}

function doPost(event) {
  try {
    const payload = JSON.parse(event.postData.contents);

    if (payload.action === "update_status") {
      const rows = sheet().getDataRange().getValues();
      for (let index = 1; index < rows.length; index += 1) {
        if (String(rows[index][0]) === String(payload.id)) {
          sheet().getRange(index + 1, 17).setValue(payload.status);
          return json({ ok: true, updated: true });
        }
      }
      return json({ ok: true, updated: false });
    }

    sheet().appendRow(orderRow(payload));
    return json({ ok: true, saved: true });
  } catch (error) {
    return json({ ok: false, error: String(error) });
  }
}
