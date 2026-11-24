import { access, appendFile, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { csvToOrders, orderToCsvLine, ordersCsvHeader, ordersToCsv } from "./csv";
import type { Order, OrderStatus } from "./types";

const DATA_DIR = path.join(process.cwd(), "data");
const ORDERS_FILE = path.join(DATA_DIR, "orders.csv");
let queue: Promise<unknown> = Promise.resolve();

function enqueue<T>(task: () => Promise<T>) {
  const result = queue.then(task, task);
  queue = result.catch(() => undefined);
  return result;
}

async function ensureFile() {
  await mkdir(DATA_DIR, { recursive: true });
  try {
    await access(ORDERS_FILE);
  } catch {
    await writeFile(ORDERS_FILE, `${ordersCsvHeader()}\r\n`, "utf8");
  }
}

export function appendOrderToCsv(order: Order) {
  return enqueue(async () => {
    await ensureFile();
    const current = await readFile(ORDERS_FILE, "utf8");
    const prefix = current.trim() ? "" : `${ordersCsvHeader()}\r\n`;
    await appendFile(ORDERS_FILE, `${prefix}${orderToCsvLine(order)}\r\n`, "utf8");
  });
}

export async function readOrdersFromCsv(): Promise<Order[]> {
  await ensureFile();
  const content = await readFile(ORDERS_FILE, "utf8");
  return csvToOrders(content);
}

export function replaceOrdersInCsv(orders: Order[]) {
  return enqueue(async () => {
    await ensureFile();
    await writeFile(ORDERS_FILE, ordersToCsv(orders), "utf8");
  });
}

export function updateOrderStatusInCsv(id: string, status: OrderStatus) {
  return enqueue(async () => {
    const orders = await readOrdersFromCsv();
    const next = orders.map((order) => (order.id === id ? { ...order, status } : order));
    await writeFile(ORDERS_FILE, ordersToCsv(next), "utf8");
    return next;
  });
}
