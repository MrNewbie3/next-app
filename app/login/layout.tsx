import { Metadata } from "next";
import React from "react";
// export const metadata: Metadata = {
//   title: "STAPA",
//   description: "For better performance stats",
//   icons: { icon: "" },
// };
export default function layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
