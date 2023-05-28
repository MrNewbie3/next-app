"use client";
import { instance } from "@/config/axios";
import { useEffect, useState } from "react";
import { login, logout } from "@/hooks/action";
import { connect } from "react-redux";
import { useRouter } from "next/navigation";
function UserAuth({ logout, login }: any) {
  const router = useRouter();
  const [data, setData] = useState(null);
  useEffect(() => {
    instance
      .get("user/auth")
      .then((result: any) => {
        setData(result.data);
      })
      .catch((err: any) => {
        if (err.response.status === 401) {
          localStorage.setItem("login", JSON.stringify({ data: { token: null } }));
          logout();
          //   @ts-ignore
          setData({ success: false });
          return router.push("/login");
        }
      });
  }, [router]);
  if (data !== null) {
    return <></>;
  }
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 z-[999]">
      <div className="flex items-center mb-4">
        <p className="text-white text-lg font-semibold tracking-wide animate-fade-in mx-5">Authenticating user</p>
        <div className="h-4 w-4 bg-white rounded-full mr-1 animate-bounce"></div>
        <div className="h-4 w-4 bg-white rounded-full mr-1 animate-bounce"></div>
        <div className="h-4 w-4 bg-white rounded-full mr-1 animate-bounce"></div>
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
