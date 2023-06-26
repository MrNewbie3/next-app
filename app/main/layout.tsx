import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/800.css";
import Navbar from "../../components/server/navbar";
import "../globals.css";
import Sidebar from "../../components/client/sidebar";
import Side_Comps from "../../components/server/Side_Comps";
import { cookies } from "next/headers";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookiesStore = cookies();
  return (
    <>
      <Navbar />
      <div className="flex flex-row  ">
        {cookiesStore.get("role")?.value === "SUPERADMIN" ? (
          <Sidebar>
            {/* @ts-ignore */}
            <Side_Comps />
          </Sidebar>
        ) : (
          <></>
        )}
        <Side_Comps />
        {children}
      </div>
    </>
  );
}
