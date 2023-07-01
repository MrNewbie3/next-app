"use client";
import { instance } from "@/config/axios";
import { useEffect, useState } from "react";
import { login, logout } from "@/hooks/action";
import { connect } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { PacmanLoader } from "react-spinners";
import { getAuthTokenClient } from "@/config/cookie";
function UserAuth({ logout, login }: any) {
  const router = useRouter();
  const path = usePathname();
  // @ts-ignore
  const tokenUser = localStorage.getItem("login") != null ? JSON.parse(localStorage.getItem("token")) : undefined;
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await fetch(process.env.NEXT_PUBLIC_URL + "/user/auth", {
        headers: {
          Authorization: `Bearer ${tokenUser}`,
        },
      });
      const res = await data.json();
      if (!data.ok) {
        localStorage.setItem("login", JSON.stringify({ data: { token: null } }));
        logout();
        //   @ts-ignore
        setData({ success: false });
        return router.push("/login");
      }
      const currentPath = path.replace("/", "");
      setData(res.data);
      localStorage.setItem("login", JSON.stringify({ data: { token: tokenUser, user: res.data } }));
      if (currentPath.toLocaleLowerCase() === "login") return router.push("/main");
      return res;
    })();
  }, [path]);
  if (data !== null) {
    return <></>;
  }
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 z-[999]">
      <div className="flex items-center mb-4">
        <PacmanLoader color="#ffffff" />
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  status: state.status,
  token: state.token,
  data: state.data,
});

const mapDispatchToProps = {
  login,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAuth);
