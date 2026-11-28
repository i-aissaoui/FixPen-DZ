import { createHash } from "node:crypto";
import type { Order } from "./types";

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "1456060756089112";
const ACCESS_TOKEN =
  process.env.META_CAPI_ACCESS_TOKEN || process.env.META_ACCESS_TOKEN || "";
const GRAPH_VERSION = process.env.META_GRAPH_VERSION || "v23.0";

function sha256(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

function normalizedPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits.startsWith("0") ? `216${digits.slice(1)}` : digits;
}

export function isMetaCapiConfigured() {
  return Boolean(ACCESS_TOKEN.trim() && PIXEL_ID.trim());
}

export async function sendServerPurchase({
  eventId,
  order,
  userAgent,
  ip,
  fbp,
  fbc,
  sourceUrl,
}: {
  eventId: string;
  order: Order;
  userAgent: string;
  ip: string;
  fbp?: string;
  fbc?: string;
  sourceUrl: string;
}) {
  if (!isMetaCapiConfigured() || !eventId) return false;

  const userData: Record<string, string> = {};
  const phone = normalizedPhone(order.phone);
  if (phone) userData.ph = sha256(phone);
  if (ip) userData.client_ip = sha256(ip);
  if (userAgent) userData.client_user_agent = userAgent;
  if (fbp) userData.fbp = fbp;
  if (fbc) userData.fbc = fbc;

  try {
    const response = await fetch(
      `https://graph.facebook.com/${GRAPH_VERSION}/${PIXEL_ID}/events?access_token=${encodeURIComponent(ACCESS_TOKEN)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [
            {
              event_name: "Purchase",
              event_time: Math.floor(Date.now() / 1000),
              event_id: eventId,
              event_source_url: sourceUrl,
              action_source: "website",
              user_data: userData,
              custom_data: {
                currency: "DZD",
                value: order.grandTotal,
                content_name: "Fix Pen",
                content_type: "product",
                content_ids: order.shadeCodes,
                contents: order.shadeCodes.map((id) => ({
                  id,
                  quantity: Math.max(1, Math.floor(order.penCount / order.shadeCodes.length || 1)),
                })),
                num_items: order.penCount,
                order_id: order.id,
              },
            },
          ],
        }),
        signal: AbortSignal.timeout(10000),
      },
    );
    if (!response.ok) return false;
    const data = (await response.json()) as { events_received?: number };
    return Boolean(data.events_received && data.events_received > 0);
  } catch {
    return false;
  }
}
