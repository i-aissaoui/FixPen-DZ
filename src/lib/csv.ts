import type { Order, OrderStatus } from "./types";

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

export function ordersCsvHeader() {
  return ordersToCsv([]).replace(/^\uFEFF/, "");
}

export function orderToCsvLine(order: Order) {
  const [, line] = ordersToCsv([order]).replace(/^\uFEFF/, "").split("\r\n");
  return line ?? "";
}

function parseCsvRows(text: string) {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let quoted = false;
  const source = text.replace(/^\uFEFF/, "");

  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    if (char === '"') {
      if (quoted && source[index + 1] === '"') {
        field += '"';
        index += 1;
      } else {
        quoted = !quoted;
      }
    } else if (char === "," && !quoted) {
      row.push(field);
      field = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && source[index + 1] === "\n") index += 1;
      row.push(field);
      if (row.some((cell) => cell.trim())) rows.push(row);
      row = [];
      field = "";
    } else {
      field += char;
    }
  }

  row.push(field);
  if (row.some((cell) => cell.trim())) rows.push(row);
  return rows;
}

function parseQuantity(text: string) {
  const match = /^(#?\d+)x(\d+)$/i.exec(text.trim());
  if (!match) return null;
  const code = `#${match[1].replace("#", "").padStart(2, "0")}`;
  return {
    id: code.replace("#", ""),
    code,
    quantity: Number(match[2]),
  };
}

export function csvToOrders(text: string): Order[] {
  const [headerRow, ...dataRows] = parseCsvRows(text);
  if (!headerRow) return [];

  const headers = headerRow.map((cell) => cell.trim());
  const index = (name: string) => headers.indexOf(name);

  return dataRows.flatMap((cells) => {
    const value = (name: string) => cells[index(name)] ?? "";
    const id = value("order_id").trim();
    const createdAt = value("created_at").trim();
    const fullName = value("full_name").trim();
    const phone = value("phone").trim();
    const wilayaId = value("wilaya_code").trim();
    const commune = value("commune").trim();
    if (!id || !createdAt || !fullName || !phone || !wilayaId || !commune) return [];

    const quantityText = value("color_quantities");
    const shadeQuantities = quantityText
      .split("|")
      .map(parseQuantity)
      .filter((item): item is NonNullable<typeof item> => Boolean(item));
    const shadeCodes = shadeQuantities.map((item) => item.code);
    const fallbackCodes = value("color_codes")
      .split("|")
      .map((code) => code.trim())
      .filter(Boolean)
      .map((code) => (code.startsWith("#") ? code : `#${code}`));
    const codes = shadeCodes.length ? shadeCodes : fallbackCodes;
    const deliveryType = value("stop_desk_or_home").toLowerCase().includes("stop")
      ? "stopDesk"
      : "home";

    return [{
      id,
      createdAt,
      fullName,
      phone,
      wilayaId,
      wilayaName: value("wilaya").trim(),
      commune,
      deliveryType,
      shadeIds: codes.map((code) => code.replace("#", "")),
      shadeCodes: codes,
      shadeQuantities: shadeQuantities.length ? shadeQuantities : undefined,
      penCount: Number(value("pen_count")) || codes.length,
      productSubtotal: Number(value("product_subtotal_da")) || 0,
      deliveryFee: Number(value("delivery_fee_da")) || 0,
      grandTotal: Number(value("grand_total_da")) || 0,
      status: (value("status").trim() || "new") as OrderStatus,
      needHelp: value("needs_help").trim().toLowerCase() === "yes",
      notes: value("notes").trim() || undefined,
    }];
  });
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
