import { promises as fs } from "node:fs";
import path from "node:path";
import { DEFAULT_SETTINGS } from "./pricing";
import { mergeSettings } from "./settings";
import type { StockMap, StoreSettings } from "./types";

const DATA_DIR = path.join(process.cwd(), "data");
const SETTINGS_FILE = path.join(DATA_DIR, "settings.json");
const STOCK_FILE = path.join(DATA_DIR, "stock.json");

export async function readSettingsFromFile(): Promise<StoreSettings> {
  try {
    const raw = await fs.readFile(SETTINGS_FILE, "utf8");
    return mergeSettings(JSON.parse(raw) as Partial<StoreSettings>);
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export async function writeSettingsToFile(settings: StoreSettings): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(SETTINGS_FILE, `${JSON.stringify(mergeSettings(settings), null, 2)}\n`, "utf8");
}

export async function readStockFromFile(): Promise<StockMap> {
  try {
    const raw = await fs.readFile(STOCK_FILE, "utf8");
    const value = JSON.parse(raw) as StockMap;
    return value && typeof value === "object" && !Array.isArray(value) ? value : {};
  } catch {
    return {};
  }
}

export async function writeStockToFile(stock: StockMap): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(STOCK_FILE, `${JSON.stringify(stock, null, 2)}\n`, "utf8");
}
