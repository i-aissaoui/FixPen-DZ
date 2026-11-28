export type PixelEventName =
  | "PageView"
  | "ViewContent"
  | "AddToCart"
  | "InitiateCheckout"
  | "Purchase"
  | "Lead";

type PixelParamValue =
  | string
  | number
  | boolean
  | string[]
  | Array<{ id: string; quantity: number }>;

type PixelParams = Record<string, PixelParamValue>;

type Fbq = ((...args: unknown[]) => void) & {
  queue?: unknown[][];
  callMethod?: (...args: unknown[]) => void;
  loaded?: boolean;
  version?: string;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: unknown;
    __fixpenPixelQueue?: unknown[][];
  }
}

function queuedEvents() {
  if (typeof window === "undefined") return [];
  if (!window.__fixpenPixelQueue) window.__fixpenPixelQueue = [];
  return window.__fixpenPixelQueue;
}

function track(event: PixelEventName, params: PixelParams = {}, eventId?: string) {
  if (typeof window === "undefined") return;

  const args: unknown[] = eventId
    ? ["track", event, params, { eventID: eventId }]
    : ["track", event, params];

  if (typeof window.fbq === "function") window.fbq(...args);
  else queuedEvents().push(args);
}

export function flushPixelQueue() {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  const pending = window.__fixpenPixelQueue ?? [];
  window.__fixpenPixelQueue = [];
  for (const args of pending) window.fbq(...args);
}

export const pixelEvents = {
  viewContent: (shadeCodes: string[]) =>
    track("ViewContent", {
      content_name: "Fix Pen",
      content_type: "product",
      content_ids: shadeCodes,
      contents: shadeCodes.map((id) => ({ id, quantity: 1 })),
      value: 1300,
      currency: "DZD",
    }),
  addToCart: (shadeCodes: string[], value: number) =>
    track("AddToCart", {
      content_name: "Fix Pen",
      content_type: "product",
      content_ids: shadeCodes,
      contents: shadeCodes.map((id) => ({ id, quantity: 1 })),
      value,
      currency: "DZD",
    }),
  initiateCheckout: (shadeCodes: string[], value: number) =>
    track("InitiateCheckout", {
      content_name: "Fix Pen",
      content_type: "product",
      content_ids: shadeCodes,
      value,
      currency: "DZD",
    }),
  purchase: ({
    orderId,
    shadeCodes,
    value,
    quantity,
    eventId,
  }: {
    orderId: string;
    shadeCodes: string[];
    value: number;
    quantity: number;
    eventId?: string;
  }) =>
    track(
      "Purchase",
      {
        content_name: "Fix Pen",
        content_type: "product",
        content_ids: shadeCodes,
        contents: shadeCodes.map((id) => ({ id, quantity: Math.max(1, Math.floor(quantity / shadeCodes.length || 1)) })),
        num_items: quantity,
        value,
        currency: "DZD",
        order_id: orderId,
      },
      eventId,
    ),
};
