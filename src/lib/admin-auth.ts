import { createHmac, timingSafeEqual } from "node:crypto";

export const ADMIN_COOKIE = "fixpen_admin_session";
const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET ?? "fixpendz-local-dev-secret-change-me";
const SESSION_HOURS = 8;

function sign(payload: string) {
  return createHmac("sha256", SESSION_SECRET).update(payload).digest("hex");
}

export function createAdminToken() {
  const issuedAt = Date.now().toString();
  return `${issuedAt}.${sign(issuedAt)}`;
}

export function isAdminToken(token: string | undefined | null) {
  if (!token) return false;
  const [issuedAt, signature] = token.split(".");
  if (!issuedAt || !signature) return false;

  const age = Date.now() - Number(issuedAt);
  if (!Number.isFinite(age) || age < 0 || age > SESSION_HOURS * 60 * 60 * 1000) return false;

  const expected = Buffer.from(sign(issuedAt), "hex");
  const received = Buffer.from(signature, "hex");
  if (expected.length !== received.length) return false;

  return timingSafeEqual(expected, received);
}

export function getAdminPassword() {
  return process.env.ADMIN_PASSWORD ?? "fixpen2026";
}

export const adminCookieOptions = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: SESSION_HOURS * 60 * 60,
};
