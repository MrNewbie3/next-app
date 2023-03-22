import Navbar from "@/components/server/navbar";
import "./globals.css";

import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/800.css";

import Sidebar from "../components/client/sidebar";
import Side_Comps from "@/components/server/Side_Comps";
export const metadata = {
  title: "STAPA",
  description: "For better performance stats",
  icons: { icon: "" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head></head>
      <body className="bg-light-grey ">
        <Navbar />
        <div className="flex flex-row  ">
          <Sidebar>
            {/* @ts-ignore */}
            <Side_Comps />
          </Sidebar>
          {children}
        </div>
      </body>
    </html>
  );
}
