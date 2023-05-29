"use client";

import { getAuthTokenClient } from "@/config/cookie";
import { cookies } from "next/headers";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

type Props = {
  params: String;
};
function AddTeam({ params }: Props) {
  const [data, setData] = useState({
    club_name: "",
    club_shortname: "",
    club_nickname: "",
    club_origin: "",
    club_established: "",
    start_season: "",
    end_season: "",
    userId: "",
    categoryId: params,
    club_image: null,
  });

  const cookieStore = getAuthTokenClient();
  async function getUserId() {
    const user = await fetch("https://api-stapa-app.vercel.app/api/v1/user/auth", {
      headers: { Authorization: `Bearer ${cookieStore}` },
    });
    const response = await user.json();
    if (!response.success) {
      return alert(response.message);
    }
    setData((prevState) => ({
      ...prevState,
      userId: response.data.uuid,
    }));
  }
  const router = useRouter();
  async function postData(e: React.FormEvent) {
    e.preventDefault();
    const formData = new FormData();
    await getUserId();
    for (const key in data) {
      // @ts-ignore
      formData.append(key, data[key]);
    }
    console.log(data);

    const post = await fetch("https://api-stapa-app.vercel.app/api/v1/club", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${cookieStore}`,
      },
    });
    const res = await post.json();

    if (!res.success) return alert(res.message);
    window.location.reload();
    return router.push(`/main/${params}`);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setData({
      ...data,
      [name]: files ? files[0] : value,
    });
  };

  return (
    <form
      onSubmit={(e) => {
        postData(e);
      }}
    >
      <div className="bg-white w-full  rounded-xl px-10 py-10">
        <div>
          <h1 className="opensans font-bold text-xl">Tambah Tim </h1>
          <h4 className="font-semibold">
            Lengkapi data di bawah,jika ada ( <span className="text-[#D00D00]">* </span>) maka wajib diisi{" "}
          </h4>
        </div>

        <div className=" input_file_div mt-10 uper flex w-full lg:gap-5    max-lg:flex-col ">
          <div className="w-full">
            <div className="  flex flex-col  justify-start mt-4">
              <label htmlFor="label" className=" opensans font-bold uppercase text-sm">
                Nama Asli <span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g Mancester United"
                value={data.club_name}
                onChange={(e) => {
                  handleChange(e);
                }}
                name={"club_name"}
                className=" bg-[#F2F3F7] h-10 border-none w-full max-w-2xl  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>

            <div className="flex flex-col justify-start mt-4">
              <label htmlFor="label" className="opensans font-bold uppercase text-sm">
                Nama Julukan <span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g Red Devil"
                value={data.club_shortname}
                onChange={(e) => {
                  handleChange(e);
                }}
                name={"club_shortname"}
                className=" bg-[#F2F3F7] h-10 border-none w-full max-w-2xl focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
            <div className="flex flex-col justify-start mt-4">
              <label htmlFor="label" className="opensans font-bold uppercase text-sm">
                Nama Lain
              </label>
              <input
                type="text"
                placeholder="e.g MU "
                value={data.club_nickname}
                onChange={(e) => {
                  handleChange(e);
                }}
                name={"club_nickname"}
                className=" bg-[#F2F3F7] h-10 border-none w-full max-w-2xl focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
            <div className="flex flex-col justify-start mt-4">
              <label htmlFor="label" className="opensans font-bold uppercase text-sm">
                Asal <span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g Manchester"
                value={data.club_origin}
                onChange={(e) => {
                  handleChange(e);
                }}
                name={"club_origin"}
                className=" bg-[#F2F3F7] h-10 border-none w-full max-w-2xl focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
          </div>
          <div className="w-full ">
            <div className="flex flex-col justify-start mt-4">
              <label htmlFor="label" className="opensans font-bold uppercase text-sm">
                Tanggal Berdiri <span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="date"
                value={data.club_established}
                onChange={(e) => {
                  handleChange(e);
                }}
                name={"club_established"}
                className=" bg-[#F2F3F7] h-10 border-none w-full max-w-2xl focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
            <div className="flex flex-col justify-start mt-4">
              <label htmlFor="label" className="opensans font-bold uppercase text-sm">
                season dimulai <span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="date"
                value={data.start_season}
                onChange={(e) => {
                  handleChange(e);
                }}
                name={"start_season"}
                className=" bg-[#F2F3F7] h-10 border-none w-full max-w-2xl focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
            <div className="flex flex-col justify-start mt-4">
              <label htmlFor="label" className="opensans font-bold uppercase text-sm">
                season berakhir <span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="date"
                value={data.end_season}
                onChange={(e) => {
                  handleChange(e);
                }}
                name={"end_season"}
                className=" bg-[#F2F3F7]  h-10 border-none w-full max-w-2xl focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
            <div className="flex flex-col justify-start mt-4">
              <label htmlFor="label" className="opensans font-bold uppercase text-sm">
                club image tim <span className="text-[#D00D00]">maks 2mb photo file*</span>
              </label>
              <input
                type="file"
                // @ts-ignore
                onChange={(e) => {
                  handleChange(e);
                }}
                name={"club_image"}
                className=" block w-full max-w-2xl outline-none file:h-full file:bg-[#dddddd] file:border-none file:w-[118px] h-10 mt-2 text-gray-900 border rounded-lg cursor-pointer bg-[#F2F3F7] focus:outline-none  "
              />
            </div>
          </div>
        </div>
        <button type="submit" className="bg-[#D00D00] h-10 rounded-lg mt-10 text-white opensans w-full">
          Submit
        </button>
      </div>
    </form>
  );
}

export default AddTeam;
