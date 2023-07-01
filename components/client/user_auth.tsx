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
  const tokenUser = getAuthTokenClient();
  const [data, setData] = useState(null);
  useEffect(() => {
    instance
      .get("user/auth")
      .then((result: any) => {
        const currentPath = path.replace("/", "");
        setData(result.data.data);
        localStorage.setItem("login", JSON.stringify({ data: { token: tokenUser, user: result.data.data } }));
        if (currentPath.toLocaleLowerCase() === "login") return router.push("/main");
      })
      .catch((err: any) => {
        if (err.response.status === 401) {
          localStorage.setItem("login", JSON.stringify({ data: { token: null } }));
          logout();
          //   @ts-ignore
          setData({ success: false });
          return router.push("/login");
        }
        throw new Error(err);
      });
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
