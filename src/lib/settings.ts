import { DEFAULT_SETTINGS } from "./pricing";
import type { StoreSettings } from "./types";

export function mergeSettings(value?: Partial<StoreSettings> | null): StoreSettings {
  return {
    prices: { ...DEFAULT_SETTINGS.prices, ...value?.prices },
    tariffs: { ...DEFAULT_SETTINGS.tariffs, ...value?.tariffs },
  };
}
