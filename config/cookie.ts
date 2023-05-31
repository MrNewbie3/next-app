import { NextApiRequest } from "next";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export function setAuthToken(token: string) {
  cookie.set("token", token, { path: "/" });
}

("use client");
export function getAuthTokenClient() {
  return cookie.get("token");
}

export function removeAuthToken() {
  cookie.remove("token", { path: "/" });
}
