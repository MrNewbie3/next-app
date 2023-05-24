"use client";
import Navbar from "@/components/server/navbar";
import "./globals.css";

import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/800.css";
import reducer from "@/hooks/reducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
export const metadata = {
  title: "STAPA",
  description: "For better performance stats",
  icons: { icon: "" },
};
// @ts-ignore
const store = createStore(reducer, applyMiddleware(thunk));
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head></head>
      <body className="bg-light-grey ">
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
