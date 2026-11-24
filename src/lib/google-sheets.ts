import type { Order, OrderStatus } from "./types";

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

export function sendOrderToGoogleSheets(order: Order) {
  return postToSheets(order);
}

export function updateGoogleSheetStatus(id: string, status: OrderStatus) {
  return postToSheets({ action: "update_status", id, status });
}
