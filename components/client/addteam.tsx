"use client";

import { useRouter } from "next/navigation";
// to: @lakyulakyu
// file upload still not working, remind me later @MrNewbie3

import React, { useState } from "react";
type Props = {
  params: String;
};
function AddTeam({ params }: Props) {
  const [data, setData] = useState({
    name: "",
    alias: "",
    aka: "",
    origin: "",
    founded: "",
    season_start: "",
    last_season: "",
    logo: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((state) => ({
      ...state,
      [name]: value,
    }));
    console.log(data);
  };

  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/${params}`);
  };
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
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
                value={data.name}
                onChange={(e) => {
                  handleChange(e);
                }}
                name={"name"}
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
                value={data.alias}
                onChange={(e) => {
                  handleChange(e);
                }}
                name={"alias"}
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
                value={data.aka}
                onChange={(e) => {
                  handleChange(e);
                }}
                name={"aka"}
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
                value={data.origin}
                onChange={(e) => {
                  handleChange(e);
                }}
                name={"origin"}
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
                value={data.founded}
                onChange={(e) => {
                  handleChange(e);
                }}
                name={"founded"}
                className=" bg-[#F2F3F7] h-10 border-none w-full max-w-2xl focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
            <div className="flex flex-col justify-start mt-4">
              <label htmlFor="label" className="opensans font-bold uppercase text-sm">
                season dimulai <span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="date"
                value={data.season_start}
                onChange={(e) => {
                  handleChange(e);
                }}
                name={"season_start"}
                className=" bg-[#F2F3F7] h-10 border-none w-full max-w-2xl focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
            <div className="flex flex-col justify-start mt-4">
              <label htmlFor="label" className="opensans font-bold uppercase text-sm">
                season berakhir <span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="date"
                value={data.last_season}
                onChange={(e) => {
                  handleChange(e);
                }}
                name={"last_season"}
                className=" bg-[#F2F3F7]  h-10 border-none w-full max-w-2xl focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
            <div className="flex flex-col justify-start mt-4">
              <label htmlFor="label" className="opensans font-bold uppercase text-sm">
                logo tim <span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="file"
                value={data.logo}
                onChange={(e) => {}}
                name={"logo"}
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
