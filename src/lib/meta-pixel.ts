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

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "1456060756089112";
let initialized = false;

export function initPixel() {
  if (!PIXEL_ID || typeof window === "undefined" || initialized) return;
  initialized = true;

  const w = window;
  if (!w.fbq) {
    type Fbq = ((...args: unknown[]) => void) & {
      queue?: unknown[][];
      callMethod?: (...args: unknown[]) => void;
      loaded?: boolean;
      version?: string;
    };
    const fbq = function (...args: unknown[]) {
      const queue = fbq as Fbq;
      if (queue.callMethod) queue.callMethod(...args);
      else queue.queue?.push(args);
    } as Fbq;
    fbq.queue = [];
    fbq.loaded = true;
    fbq.version = "2.0";
    w.fbq = fbq;
    w._fbq = fbq;
  }

  w.fbq?.("init", PIXEL_ID);

  if (!document.getElementById("meta-pixel-script")) {
    const script = document.createElement("script");
    script.id = "meta-pixel-script";
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }
}

export function trackPixel(event: PixelEventName, params: PixelParams = {}) {
  if (!PIXEL_ID || typeof window === "undefined") return;
  initPixel();
  window.fbq?.("track", event, params);
}

export const pixelEvents = {
  pageView: () => trackPixel("PageView"),
  viewContent: (shadeCodes: string[]) =>
    trackPixel("ViewContent", {
      content_name: "FixPen DZ Paint & Scratch Repair Pen",
      content_type: "product",
      content_ids: shadeCodes,
      contents: shadeCodes.map((id) => ({ id, quantity: 1 })),
      value: 1300,
      currency: "DZD",
    }),
  addToCart: (shadeCodes: string[], value: number) =>
    trackPixel("AddToCart", {
      content_name: "FixPen DZ Paint & Scratch Repair Pen",
      content_type: "product",
      content_ids: shadeCodes,
      contents: shadeCodes.map((id) => ({ id, quantity: 1 })),
      value,
      currency: "DZD",
    }),
  initiateCheckout: (shadeCodes: string[], value: number) =>
    trackPixel("InitiateCheckout", {
      content_name: "FixPen DZ COD Order",
      content_type: "product",
      content_ids: shadeCodes,
      value,
      currency: "DZD",
    }),
  purchase: (orderId: string, shadeCodes: string[], value: number, eventId?: string) => {
    if (!eventId) {
      trackPixel("Purchase", {
        content_name: "FixPen DZ COD Order",
        content_type: "product",
        content_ids: shadeCodes,
        value,
        currency: "DZD",
        order_id: orderId,
      });
      return;
    }

    initPixel();
    window.fbq?.(
      "track",
      "Purchase",
      {
        content_name: "FixPen DZ COD Order",
        content_type: "product",
        content_ids: shadeCodes,
        value,
        currency: "DZD",
        order_id: orderId,
      },
      { eventID: eventId },
    );
  },
};
