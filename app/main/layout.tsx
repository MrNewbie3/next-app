import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/800.css";

import Navbar from "../../components/server/navbar";
import "../globals.css";
import Sidebar from "../../components/client/sidebar";
import Side_Comps from "../../components/server/Side_Comps";
import { cookies } from "next/headers";
export const metadata = {
  title: "LMSS",
  description: "For better performance stats",
  icons: { icon: "" },
};

async function getUserData() {
  const cookieStore = cookies();
  const data = await fetch(process.env.NEXT_PUBLIC_URL + "/user/auth", {
    headers: {
      Authorization: `Bearer ${cookieStore.get("token")?.value}`,
    },
  });
  const res = await data.json();
  if (!res.success) {
    throw new Error(res.message);
  }
  return res;
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const dataUser = await getUserData();

  return (
    <>
      <Navbar />
      <div className="flex flex-row  ">
        {dataUser.data.role !== "SUPERADMIN" ? (
          <></>
        ) : (
          <Sidebar>
            {/* @ts-ignore */}
            <Side_Comps />
          </Sidebar>
        )}
        {children}
      </div>
    </>
  );
}
