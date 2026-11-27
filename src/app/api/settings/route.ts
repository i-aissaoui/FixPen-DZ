import { cookies } from "next/headers";
import { ADMIN_COOKIE, isAdminToken } from "@/lib/admin-auth";
import { readSettingsFromGoogleSheets, saveSettingsToGoogleSheets } from "@/lib/google-sheets";
import { readSettingsFromFile, writeSettingsToFile } from "@/lib/server-store";
import { mergeSettings } from "@/lib/settings";
import type { StoreSettings } from "@/lib/types";

export async function GET() {
  try {
    const fromSheets = await readSettingsFromGoogleSheets();
    if (fromSheets) {
      return Response.json({ ok: true, settings: fromSheets, source: "google" });
    }
    return Response.json({ ok: true, settings: await readSettingsFromFile(), source: "file" });
  } catch {
    return Response.json({ ok: false, error: "Unable to read settings" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const token = (await cookies()).get(ADMIN_COOKIE)?.value;
  if (!isAdminToken(token)) {
    return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const payload = (await request.json().catch(() => null)) as { settings?: Partial<StoreSettings> } | null;
  if (!payload?.settings || typeof payload.settings !== "object") {
    return Response.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  try {
    const settings = mergeSettings(payload.settings);
    await writeSettingsToFile(settings);
    const google = await saveSettingsToGoogleSheets(settings);
    return Response.json({ ok: true, settings, googleSaved: google.sent });
  } catch {
    return Response.json({ ok: false, error: "Unable to save settings" }, { status: 500 });
  }
}
