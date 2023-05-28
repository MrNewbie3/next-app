import { NextApiRequest } from "next";
import Cookies from "universal-cookie";
const cookie = new Cookies();

export function setAuthToken(token: string) {
  cookie.set("token", token, { path: "/" });
}

export function getAuthTokenServer(req: NextApiRequest): string | undefined {
  const cookies = req.headers.cookie;
  if (!cookies) {
    return undefined;
  }

  const cookiePairs = cookies.split(";");
  for (let i = 0; i < cookiePairs.length; i++) {
    const [name, value] = cookiePairs[i].trim().split("=");
    if (name === "token") {
      return decodeURIComponent(value);
    }
  }

  return undefined;
}
("use client");
export function getAuthTokenClient() {
  // const cookies = document.cookie;
  // if (!cookies) {
  //   return undefined;
  // }
  return cookie.get("token");
  // const cookiePairs = cookies.split(";");
  // for (let i = 0; i < cookiePairs.length; i++) {
  //   const [name, value] = cookiePairs[i].trim().split("=");
  //   if (name === "token") {
  //     return decodeURIComponent(value);
  //   }
  // }

  // return undefined;
}

export function removeAuthToken() {
  cookie.remove("token", { path: "/" });
}
