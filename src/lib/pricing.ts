import { WILAYAS, type DeliveryType } from "./wilayas";
import type { PriceSettings, StoreSettings } from "./types";

export const MAX_PENS = 5;

export const DEFAULT_PRICES: PriceSettings = {
  one: 2200,
  two: 4200,
  three: 6000,
  four: 7700,
  five: 9300,
};

export const DEFAULT_SETTINGS: StoreSettings = {
  prices: DEFAULT_PRICES,
  tariffs: Object.fromEntries(
    WILAYAS.map((wilaya) => [
      wilaya.id,
      { stopDesk: wilaya.stopDesk, home: wilaya.home },
    ]),
  ),
};

export function formatDA(value: number, lang: "ar" | "fr" = "ar") {
  const formatted = new Intl.NumberFormat("fr-FR").format(value);
  return lang === "fr" ? `${formatted} DA` : `${formatted} دج`;
}

export function getProductSubtotal(penCount: number, prices: PriceSettings = DEFAULT_PRICES) {
  const count = Math.max(0, Math.min(penCount, MAX_PENS));
  if (count === 0) return 0;
  if (count === 1) return prices.one;
  if (count === 2) return prices.two;
  if (count === 3) return prices.three;
  if (count === 4) return prices.four;
  return prices.five;
}

export function calculateTotals({
  penCount,
  wilayaId,
  deliveryType,
  settings = DEFAULT_SETTINGS,
}: {
  penCount: number;
  wilayaId: string;
  deliveryType: DeliveryType;
  settings?: StoreSettings;
}) {
  const safeCount = Math.max(0, Math.min(penCount, MAX_PENS));
  const productSubtotal = getProductSubtotal(safeCount, settings.prices);
  const tariff = settings.tariffs[wilayaId];
  const hasFreeStopDesk = safeCount >= 3 && deliveryType === "stopDesk";
  const deliveryFee = !tariff || safeCount === 0 || hasFreeStopDesk ? 0 : tariff[deliveryType];
  const grandTotal = productSubtotal + deliveryFee;
  const savedVsSingle = Math.max(0, safeCount * settings.prices.one - productSubtotal);

  return {
    productSubtotal,
    deliveryFee,
    grandTotal,
    hasFreeStopDesk,
    savedVsSingle,
  };
}

export function getTierLabel(penCount: number, lang: "ar" | "fr" = "ar") {
  if (penCount <= 0) return lang === "fr" ? "No pen selected" : "ما كاينش قلم مختار";
  const price = new Intl.NumberFormat("fr-FR").format(getProductSubtotal(penCount));
  return lang === "fr"
    ? `${penCount} pen(s) · ${price} DA`
    : `${penCount} قلم · ${price} دج`;
}
