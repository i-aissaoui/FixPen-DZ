import { NextResponse, type NextRequest } from "next/server";
import { ADMIN_COOKIE, adminCookieOptions, createAdminToken, getAdminPassword } from "@/lib/admin-auth";

export async function POST(request: NextRequest) {
  let password = "";

  try {
    const body = (await request.json()) as { password?: string };
    password = body.password ?? "";
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  if (password !== getAdminPassword()) {
    return NextResponse.json({ ok: false, error: "Incorrect password" }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, "", { path: "/", maxAge: 0 });
  response.cookies.set(ADMIN_COOKIE, createAdminToken(), adminCookieOptions);
  return response;
}
