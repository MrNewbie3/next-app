import Logo from "../public/images/STAPA.png";
import Image from "next/image";
import React, { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <section>
      <div className="flex justify-center  bg-white items-center  h-screen w-screen text-slate-600">
        {" "}
        <div className=" w-full px-6 py-10  bg-slate-100  text-center max-w-sm min-w-fit">
          <div className="">
            <Image className="w-fit h-8 px-36" src={Logo} width={0} height={0} alt="" />
          </div>
          <h1 className="text-center text-lg font-semibold mt-2 mb-6">LOGIN</h1>
          <div className="mb-2 w-full ">
            <h1 className="text-xl text-start font-semibold capitalize mb-1">email</h1>
            <input
              className="w-full h-10 ring-2 rounded-sm bg-slate-100 ring-red-600 outline-none p-2"
              type="emai"
              name="email"
              onChange={(e) => {
                handleChange(e);
              }}
              value={data.email}
              placeholder="email"
            />
          </div>
          <div>
            <h1 className="text-xl text-start font-semibold capitalize mb-1">password</h1>
            <input
              className="w-full h-10 ring-2 mb-10 bg-slate-100 rounded-sm ring-red-600 outline-none p-2"
              type="password"
              name="password"
              onChange={(e) => {
                handleChange(e);
              }}
              value={data.password}
              placeholder="password"
            />
          </div>
          {/* <p className="text-end text-sky-500 mt-1">
              <NavLink to="/forgotPass">lupa password?</NavLink>
            </p> */}

          <button className="btn-login bg-red-600  transition  delay-150 duration-300 ease-in-out   w-full   max-w-xs min-w-fit py-2 mt-10   text-white font-semibold rounded-sm hover:">LOGIN</button>
        </div>
      </div>
    </section>
  );
};

export default Login;