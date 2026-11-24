import { DEFAULT_SETTINGS } from "./pricing";
import type { Order, StockMap, StoreSettings } from "./types";

export const STORAGE_KEYS = {
  orders: "fixpendz.orders.v1",
  stock: "fixpendz.stock.v1",
  settings: "fixpendz.settings.v1",
  lang: "fixpendz.lang.v1",
} as const;

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    return;
  }
}

export function loadOrders() {
  return read<Order[]>(STORAGE_KEYS.orders, []);
}

export function saveOrder(order: Order) {
  const orders = loadOrders();
  write(STORAGE_KEYS.orders, [order, ...orders].slice(0, 500));
}

export function replaceOrders(orders: Order[]) {
  write(STORAGE_KEYS.orders, orders);
}

export function loadStock() {
  return read<StockMap>(STORAGE_KEYS.stock, {});
}

export function saveStock(stock: StockMap) {
  write(STORAGE_KEYS.stock, stock);
}

export function loadSettings(): StoreSettings {
  const stored = read<Partial<StoreSettings>>(STORAGE_KEYS.settings, {});
  return {
    prices: { ...DEFAULT_SETTINGS.prices, ...stored.prices },
    tariffs: { ...DEFAULT_SETTINGS.tariffs, ...stored.tariffs },
  };
}

export function saveSettings(settings: StoreSettings) {
  write(STORAGE_KEYS.settings, settings);
}

export function loadLang(): "ar" | "fr" {
  return read<"ar" | "fr">(STORAGE_KEYS.lang, "ar");
}

export function saveLang(lang: "ar" | "fr") {
  write(STORAGE_KEYS.lang, lang);
}
