"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Popup() {
  const [data, setData] = useState({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  async function postData(e: React.FormEvent) {
    e.preventDefault();
    const post = await fetch("http://localhost:4002/api/v1/category", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json", Authentication: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4MjgxNDM2OCwiZXhwIjoxNjgyODI1MTY4fQ.LXEWQSJJ4v8F0KQLBqOeS-k8DDLAQhC-H4SaztUNeaU" },
    });
    const res = await post.json();
    window.location.reload();
    if (!res.ok) console.log(res);
  }

  return (
    <>
      <div className="h-screen w-full bg-opacity-20   flex justify-center z-50">
        <div className="bg-white mt-20 p-8 h-64 w-[400px] rounded-xl flex flex-col">
          <h1 className="font-semibold mb-8 text-lg">Tambah kategori</h1>
          <h2 className="font-bold text-xs opensans-bold">NAMA ASLI</h2>
          <form className="flex flex-col" onSubmit={postData}>
            <input
              type="text"
              id="category_name"
              onChange={(e) => {
                handleChange(e);
              }}
              name="category_name"
              placeholder="e.g Sepak Bola"
              value={
                // @ts-ignore
                data.category_name || ""
              }
              className=" bg-[#F2F3F7] h-10 border-none focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
            />
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
