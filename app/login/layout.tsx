import React from "react";
export const metadata = {
  title: "STAPA",
  description: "For better performance stats",
  icons: { icon: "" },
};
export default function layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
