import { csvToOrders } from "./csv";
import { mergeSettings } from "./settings";
import type { Order, OrderStatus, StockMap, StoreSettings } from "./types";

export const GOOGLE_SHEETS_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbyzFmOl0TiQbSh3OEJC1wJmdC2psZ958wML7ky3OdQ4btTxpnMj3bT8CMRx1wAyRi7r/exec";

type SheetResult = {
  sent: boolean;
  skipped: boolean;
};

async function postToSheets(payload: Record<string, unknown>): Promise<SheetResult> {
  if (!GOOGLE_SHEETS_WEBHOOK_URL.trim()) {
    return { sent: false, skipped: true };
  }

  try {
    const response = await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10000),
    });
    return { sent: response.ok, skipped: false };
  } catch {
    return { sent: false, skipped: false };
  }
}

async function getFromSheets(action: string): Promise<Record<string, unknown> | null> {
  if (!GOOGLE_SHEETS_WEBHOOK_URL.trim()) return null;

  try {
    const response = await fetch(`${GOOGLE_SHEETS_WEBHOOK_URL}?action=${action}`, {
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) return null;
    const data = (await response.json()) as Record<string, unknown>;
    return data.ok === true ? data : null;
  } catch {
    return null;
  }
}

export function sendOrderToGoogleSheets(order: Order) {
  return postToSheets(order);
}

export function updateGoogleSheetStatus(id: string, status: OrderStatus) {
  return postToSheets({ action: "update_status", id, status });
}

export async function readOrdersFromGoogleSheets(): Promise<Order[] | null> {
  if (!GOOGLE_SHEETS_WEBHOOK_URL.trim()) return null;

  try {
    const response = await fetch(`${GOOGLE_SHEETS_WEBHOOK_URL}?action=read`, {
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) return null;
    const text = await response.text();
    if (!text.trimStart().startsWith('"order_id"')) return null;
    return csvToOrders(text);
  } catch {
    return null;
  }
}

export async function readSettingsFromGoogleSheets(): Promise<StoreSettings | null> {
  const data = await getFromSheets("read_settings");
  const settings = data?.settings;
  return settings && typeof settings === "object" ? mergeSettings(settings as Partial<StoreSettings>) : null;
}

export async function saveSettingsToGoogleSheets(settings: StoreSettings): Promise<SheetResult> {
  const capability = await getFromSheets("read_settings");
  if (capability?.supported !== true) return { sent: false, skipped: true };
  return postToSheets({ action: "save_settings", settings: mergeSettings(settings) });
}

export async function readStockFromGoogleSheets(): Promise<StockMap | null> {
  const data = await getFromSheets("read_stock");
  const stock = data?.stock;
  return stock && typeof stock === "object" && !Array.isArray(stock) ? (stock as StockMap) : null;
}

export async function saveStockToGoogleSheets(stock: StockMap): Promise<SheetResult> {
  const capability = await getFromSheets("read_stock");
  if (capability?.supported !== true) return { sent: false, skipped: true };
  return postToSheets({ action: "save_stock", stock });
}
