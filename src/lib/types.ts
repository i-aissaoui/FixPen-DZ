import type { DeliveryType } from "./wilayas";

export type OrderStatus = "new" | "confirmed" | "shipped" | "delivered" | "cancelled";

export type ShadeQuantity = {
  id: string;
  code: string;
  quantity: number;
};

export type Order = {
  id: string;
  createdAt: string;
  fullName: string;
  phone: string;
  wilayaId: string;
  wilayaName: string;
  commune: string;
  deliveryType: DeliveryType;
  shadeIds: string[];
  shadeCodes: string[];
  shadeQuantities?: ShadeQuantity[];
  penCount: number;
  productSubtotal: number;
  deliveryFee: number;
  grandTotal: number;
  status: OrderStatus;
  needHelp?: boolean;
  notes?: string;
};

export type PriceSettings = {
  one: number;
  two: number;
  three: number;
  four: number;
  five: number;
};

export type TariffSettings = Record<string, { stopDesk: number; home: number }>;

export type StoreSettings = {
  prices: PriceSettings;
  tariffs: TariffSettings;
};

export type StockMap = Record<string, boolean>;

export type OrderDraft = {
  fullName: string;
  phone: string;
  wilayaId: string;
  commune: string;
  deliveryType: DeliveryType;
  needHelp: boolean;
  notes: string;
};

export function createOrderId() {
  const stamp = Date.now().toString(36).toUpperCase().slice(-6);
  const random = Math.random().toString(36).toUpperCase().slice(2, 5);
  return `FP-${stamp}-${random}`;
}
