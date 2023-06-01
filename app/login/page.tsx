"use client";

import { login, logout } from "@/hooks/action";
import { getAuthTokenClient, setAuthToken } from "../../config/cookie";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Login = ({ status, token, data, login }: any) => {
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
  const router = useRouter();
  if (status && data !== null) {
    return router.push("/main");
  }
  const [datas, setData] = useState({
    username: "",
    password: "",
  });
  async function postData(e: any) {
    const { username, password } = e;
    setData({ username, password });

    const post = await fetch(`${process.env.NEXT_PUBLIC_URL}/user/login`, {
      method: "POST",
      body: JSON.stringify(datas),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await post.json();
    if (!res.success) return alert(res.message);
    await login(res);
    localStorage.setItem("login", JSON.stringify(res));
    localStorage.setItem("token", JSON.stringify(res.data.token));
    if (res.success) {
      alert("berhasil login");
      setAuthToken(res.data.token);
      return router.push("/main");
    }
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
              <input
                className="w-full h-10 ring-2 rounded-sm bg-slate-100 ring-red-600 outline-none p-2"
                type="text"
                // name="username"
                // onChange={(e) => {
                //   handleChange(e);
                // }}
                // value={datas.username}
                {...register("username")}
                placeholder="username"
              />
              <p className="text-red-600 text-sm text-start">{errors.username?.message}</p>
            </div>
            <div className="mb-10">
              <h1 className="text-xl text-start font-semibold capitalize mb-1">password</h1>
              <input
                className="w-full h-10 ring-2  bg-slate-100 rounded-sm ring-red-600 outline-none p-2"
                type="password"
                // name="password"
                // onChange={(e) => {
                //   handleChange(e);
                // }}
                // value={datas.password}
                {...register("password")}
                placeholder="password"
              />
              <p className="text-red-600 text-sm text-start">{errors.password?.message}</p>
            </div>
            {/* <p className="text-end text-sky-500 mt-1">
              <NavLink to="/forgotPass">lupa password?</NavLink>
            </p> */}

            <button type="submit" className="btn-login bg-red-600  transition  delay-150 duration-300 ease-in-out   w-full   max-w-xs min-w-fit py-2 mt-10   text-white font-semibold rounded-sm hover:">
              LOGIN
            </button>
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
