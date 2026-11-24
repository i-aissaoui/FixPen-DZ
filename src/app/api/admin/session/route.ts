import type { NextRequest } from "next/server";
import { ADMIN_COOKIE, isAdminToken } from "@/lib/admin-auth";

export async function GET(request: NextRequest) {
  const authenticated = isAdminToken(request.cookies.get(ADMIN_COOKIE)?.value);
  return Response.json({ authenticated });
}
