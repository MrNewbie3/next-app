"use client";

import { getAuthTokenClient } from "@/config/cookie";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
function Popup() {
  const schema = yup
    .object({
      category_name: yup.string().required("kategori tidak boleh kosong"),
    })
    .required();
  type FormData = yup.InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const cookieStore = getAuthTokenClient();

  async function postData(e: FormData) {
    console.log(e);

    const post = await fetch(`${process.env.NEXT_PUBLIC_URL}/category`, {
      method: "POST",
      body: JSON.stringify(e),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookieStore}`,
      },
    });
    const res = await post.json();
    if (!res.success) return alert(res.message);
    return typeof window != undefined ? window.location.reload() : undefined;
  }

  return (
    <>
      <div className="h-screen w-full bg-opacity-20   flex justify-center z-50">
        <div className="bg-white mt-20 p-8 h-64 w-[400px] rounded-xl flex flex-col">
          <h1 className="font-semibold mb-8 text-lg">Tambah kategori</h1>
          <h2 className="font-bold text-xs opensans-bold">NAMA KATEGORI</h2>
          <form className="flex flex-col" onSubmit={handleSubmit(postData)}>
            <input type="text" {...register("category_name")} placeholder="e.g Sepak Bola" className=" bg-[#F2F3F7] h-10 border-none focus:outline-none  p-2 mt-2 rounded-lg font-semibold " />
            <p className="text-red-600">{errors.category_name?.message}</p>
            <button className="bg-[#D00D00] rounded-lg opensans-bold h-10  text-white mt-6 " type="submit">
              Simpan
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Popup;
