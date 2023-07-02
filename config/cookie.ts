import { NextApiRequest } from "next";
import Cookies from "universal-cookie";
// @ts-ignore
const cookie = new Cookies();

export function setAuthToken(token: string, role?: string) {
  cookie.set("token", token, { path: "/" });
  cookie.set("role", role, { path: "/" });
}

export function getAuthTokenClient() {
  return cookie.get("token");
}

export function getUserRole() {
  return cookie.get("role");
}

export function removeAuthToken() {
  cookie.remove("token", { path: "/" });
}
