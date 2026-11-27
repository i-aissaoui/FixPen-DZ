import { cookies } from "next/headers";
import { ADMIN_COOKIE, isAdminToken } from "@/lib/admin-auth";
import { readStockFromGoogleSheets, saveStockToGoogleSheets } from "@/lib/google-sheets";
import { readStockFromFile, writeStockToFile } from "@/lib/server-store";
import type { StockMap } from "@/lib/types";

export async function GET() {
  try {
    const fromSheets = await readStockFromGoogleSheets();
    if (fromSheets) {
      return Response.json({ ok: true, stock: fromSheets, source: "google" });
    }
    return Response.json({ ok: true, stock: await readStockFromFile(), source: "file" });
  } catch {
    return Response.json({ ok: false, error: "Unable to read stock" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const token = (await cookies()).get(ADMIN_COOKIE)?.value;
  if (!isAdminToken(token)) {
    return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const payload = (await request.json().catch(() => null)) as { stock?: StockMap } | null;
  if (!payload?.stock || typeof payload.stock !== "object" || Array.isArray(payload.stock)) {
    return Response.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  try {
    await writeStockToFile(payload.stock);
    const google = await saveStockToGoogleSheets(payload.stock);
    return Response.json({ ok: true, stock: payload.stock, googleSaved: google.sent });
  } catch {
    return Response.json({ ok: false, error: "Unable to save stock" }, { status: 500 });
  }
}
