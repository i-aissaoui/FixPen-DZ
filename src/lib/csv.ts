import type { Order } from "./types";

function escapeCsv(value: string | number | undefined) {
  const raw = String(value ?? "");
  return `"${raw.replace(/"/g, '""')}"`;
}

export function ordersToCsv(orders: Order[]) {
  const headers = [
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

  const rows = orders.map((order) => [
    order.id,
    order.createdAt,
    order.fullName,
    order.phone,
    order.wilayaId,
    order.wilayaName,
    order.commune,
    order.deliveryType,
    order.deliveryType === "stopDesk" ? "Stop-Desk" : "À domicile",
    order.shadeCodes.join(" | "),
    order.shadeQuantities?.length
      ? order.shadeQuantities.map((item) => `${item.code}x${item.quantity}`).join(" | ")
      : order.shadeCodes.join(" | "),
    order.penCount,
    order.productSubtotal,
    order.deliveryFee,
    order.grandTotal,
    "Cash on Delivery",
    order.status,
    order.needHelp ? "yes" : "no",
    order.notes ?? "",
  ]);

  const lines = [headers, ...rows].map((row) => row.map(escapeCsv).join(","));
  return `\uFEFF${lines.join("\r\n")}`;
}

export function downloadCsv(orders: Order[], filename = "fixpendz-orders.csv") {
  if (typeof window === "undefined") return;
  const blob = new Blob([ordersToCsv(orders)], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
