import { NextApiRequest } from "next";
import Cookies from "universal-cookie";
// @ts-ignore
const cookie = new Cookies();

export function setAuthToken(token: string) {
  cookie.set("token", token, { path: "/" });
}

export function getAuthTokenClient() {
  return cookie.get("token");
}

export function removeAuthToken() {
  cookie.remove("token", { path: "/" });
}
