import { cookies } from "next/headers";
import { ADMIN_COOKIE, isAdminToken } from "@/lib/admin-auth";
import { readOrdersFromGoogleSheets, updateGoogleSheetStatus } from "@/lib/google-sheets";
import { readOrdersFromCsv, updateOrderStatusInCsv } from "@/lib/order-store";
import type { OrderStatus } from "@/lib/types";

const STATUSES: OrderStatus[] = ["new", "confirmed", "shipped", "delivered", "cancelled"];

async function isAuthorized() {
  const token = (await cookies()).get(ADMIN_COOKIE)?.value;
  return isAdminToken(token);
}

async function getOrders() {
  const sheetOrders = await readOrdersFromGoogleSheets();
  if (sheetOrders) return { orders: sheetOrders, source: "google" as const };
  return { orders: await readOrdersFromCsv(), source: "csv" as const };
}

export async function GET() {
  if (!(await isAuthorized())) {
    return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { orders, source } = await getOrders();
    return Response.json({ ok: true, orders, source });
  } catch {
    return Response.json({ ok: false, error: "Unable to read orders" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  if (!(await isAuthorized())) {
    return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  const payload = body as { id?: unknown; status?: unknown };
  if (
    typeof payload.id !== "string" ||
    !payload.id ||
    typeof payload.status !== "string" ||
    !STATUSES.includes(payload.status as OrderStatus)
  ) {
    return Response.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  try {
    await updateOrderStatusInCsv(payload.id, payload.status as OrderStatus);
    const googleSheet = await updateGoogleSheetStatus(payload.id, payload.status as OrderStatus);
    const { orders, source } = await getOrders();
    return Response.json({ ok: true, orders, source, googleSheetUpdated: googleSheet.sent });
  } catch {
    return Response.json({ ok: false, error: "Unable to update order" }, { status: 500 });
  }
}
