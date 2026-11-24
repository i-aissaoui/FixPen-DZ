import { appendOrderToCsv } from "@/lib/order-store";
import { MAX_PENS } from "@/lib/pricing";
import type { Order } from "@/lib/types";

function isOrder(value: unknown): value is Order {
  if (!value || typeof value !== "object") return false;
  const order = value as Partial<Order>;
  return (
    typeof order.id === "string" &&
    typeof order.createdAt === "string" &&
    typeof order.fullName === "string" &&
    typeof order.phone === "string" &&
    typeof order.wilayaId === "string" &&
    typeof order.commune === "string" &&
    (order.deliveryType === "stopDesk" || order.deliveryType === "home") &&
    Array.isArray(order.shadeIds) &&
    Array.isArray(order.shadeCodes) &&
    (order.shadeQuantities === undefined ||
      (Array.isArray(order.shadeQuantities) &&
        order.shadeQuantities.every(
          (item) =>
            typeof item?.id === "string" &&
            typeof item?.code === "string" &&
            typeof item?.quantity === "number" &&
            item.quantity > 0,
        ))) &&
    typeof order.penCount === "number" &&
    order.penCount > 0 &&
    order.penCount <= MAX_PENS &&
    typeof order.grandTotal === "number"
  );
}

export async function GET() {
  return Response.json({
    ok: true,
    service: "fixpendz-orders",
    webhookConfigured: Boolean(process.env.ORDERS_WEBHOOK_URL),
  });
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  if (!isOrder(body)) {
    return Response.json({ ok: false, error: "Invalid order payload" }, { status: 400 });
  }

  let csvSaved = false;
  try {
    await appendOrderToCsv(body);
    csvSaved = true;
  } catch {
    csvSaved = false;
  }

  const webhookUrl = process.env.ORDERS_WEBHOOK_URL;
  let forwarded = false;

  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(process.env.ORDERS_WEBHOOK_SECRET
            ? { "X-Webhook-Secret": process.env.ORDERS_WEBHOOK_SECRET }
            : {}),
        },
        body: JSON.stringify({ ...body, source: "FixPen DZ" }),
      });
      forwarded = response.ok;
    } catch {
      forwarded = false;
    }
  }

  return Response.json(
    { ok: true, orderId: body.id, csvSaved, forwarded, webhookConfigured: Boolean(webhookUrl) },
    { status: 201 },
  );
}
