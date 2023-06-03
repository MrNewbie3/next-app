"use client";

import { login, logout } from "@/hooks/action";
import { getAuthTokenClient, setAuthToken } from "../../config/cookie";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ClipLoader } from "react-spinners";

const Login = ({ status, token, data, login }: any) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const schema = yup
    .object({
      username: yup.string().required(),
      password: yup.string().required(),
    })
    .required();
  type FormData = yup.InferType<typeof schema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  if (status && data !== null) {
    return router.push("/main");
  }

  async function postData(e: any) {
    setLoading(true);
    const { username, password } = e;
    const post = await fetch(`${process.env.NEXT_PUBLIC_URL}/user/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await post.json();
    if (!res.success) {
      setLoading(false);
      return alert(res.message);
    }
    await login(res);
    localStorage.setItem("login", JSON.stringify(res));
    localStorage.setItem("token", JSON.stringify(res.data.token));
    alert("berhasil login");
    setLoading(false);
    setAuthToken(res.data.token);
    return router.push("/main");
  }

  return (
    <>
      <form onSubmit={handleSubmit(postData)}>
        <div className="flex justify-center  bg-white items-center  h-screen w-screen text-slate-600">
          {" "}
          <div className=" w-full px-6 py-10  bg-slate-100  text-center max-w-sm min-w-fit">
            <div className="">{/* <img className="w-fit h-8 px-36" src={Logo} width={0} height={0} alt="" /> */}</div>
            <h1 className="text-center text-lg font-semibold mt-2 mb-6">LOGIN</h1>
            <div className="mb-2 w-full ">
              <h1 className="text-xl text-start font-semibold capitalize mb-1">username</h1>
              <input className="w-full h-10 ring-2 rounded-sm bg-slate-100 ring-red-600 outline-none p-2" type="text" {...register("username")} placeholder="username" />
              <p className="text-red-600 text-sm text-start">{errors.username?.message}</p>
            </div>
            <div className="mb-10">
              <h1 className="text-xl text-start font-semibold capitalize mb-1">password</h1>
              <input className="w-full h-10 ring-2  bg-slate-100 rounded-sm ring-red-600 outline-none p-2" type="password" {...register("password")} placeholder="password" />
              <p className="text-red-600 text-sm text-start">{errors.password?.message}</p>
            </div>
            {!loading && (
              <button type="submit" className="btn-login bg-red-600  transition  delay-150 duration-300 ease-in-out   w-full   max-w-xs min-w-fit py-2 mt-10   text-white font-semibold rounded-sm hover:">
                LOGIN
              </button>
            )}
            {loading && (
              <button type="submit" className="btn-login bg-gray-300  transition  delay-150 duration-300 ease-in-out   w-full   max-w-xs min-w-fit py-2 mt-10   text-white font-semibold rounded-sm hover:">
                <ClipLoader color="#000000" size={20} />
              </button>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  status: state.status,
  token: state.token,
  data: state.data,
});

const mapDispatchToProps = {
  login,
  logout,
};
// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(Login);
