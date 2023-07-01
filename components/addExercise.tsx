"use client";
import { FiDownload } from "react-icons/fi";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";

type PageProps = {
  params: { query: string };
};
function AddExercise({ params: query }: PageProps) {

  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    category: "",
    number: "",
    identity: "",
    minute: "",
    journal: "",
    amount: "",
    description: "",
    pict: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // @ts-ignore
    router.push(`/${query.category}/${query.team}`);
  };

  return (
    <>
      <div className="bg-white w-full rounded-xl px-10 py-10">
        <div className=" flex gap-4">
          <button
            onClick={() => {
              router.back();
            }}
            className="bg-[#137403] px-4  py-2 text-white mb-10 rounded-lg"
          >
            Kembali
          </button>
          <button className="bg-[#1790FF] px-8   py-2 text-white mb-10 rounded-lg">Edit</button>
          <button className="bg-[#2846AF] flex items-center gap-2 px-4 py-2 text-white mb-10 rounded-lg">
            Download
            <FiDownload />
          </button>
        </div>
        <div>
          <h4 className="font-semibold capitalize">
            Jumat <span>3 Februari 2023</span>
          </h4>
          <h1 className="opensans font-bold text-xl">Latihan Fisik</h1>
        </div>

        <div className=" input_file_div mt-10 grid grid-cols-1 md:grid-cols-2 gap-5   max-md:flex-col ">
          <div>
            <div className="  flex flex-col justify-start mt-4">
              <label htmlFor="label" className=" uppercase  opensans font-bold text-sm ">
                Nama Latihan
              </label>
              <input
                type="text"
                name="name"
                placeholder="e.g Mancester United"
                onChange={(e) => {
                  handleChange(e);
                }}
                value={data.name}
                className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>

            <div className="flex flex-col justify-start mt-4 text-sm">
              <label htmlFor="label" className=" uppercase  opensans font-bold ">
                Kategori
              </label>
              <input
                type="text"
                name="category"
                placeholder="e.g Red Devil"
                onChange={(e) => {
                  handleChange(e);
                }}
                value={data.category}
                className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
            <div className="flex flex-col justify-start mt-4 text-sm">
              <label htmlFor="label" className=" uppercase opensans font-bold ">
                identitas
              </label>
              <input
                type="text"
                name="identity"
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="e.g MU "
                value={data.identity}
                className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
            <div className="flex flex-col justify-start mt-4 text-sm">
              <label htmlFor="label" className="uppercase opensans font-bold ">
                durasi (menit)
              </label>
              <input
                type="number"
                name="minute"
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="e.g Manchester"
                value={data.minute}
                className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
            <div className="flex flex-col justify-start mt-4 text-sm">
              <label htmlFor="label" className="uppercase opensans font-bold ">
                Jurnal repetesi
              </label>
              <input
                type="text"
                name="journal"
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="e.g Manchester"
                value={data.journal}
                className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-start mt-4 text-sm">
              <label htmlFor="label" className="uppercase opensans font-bold ">
                deskripsi
              </label>
              <textarea
                name="description"
                onChange={(e) => {
                  handleChangeText(e);
                }}
                value={data.description}
                className=" bg-[#F2F3F7] h-32 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              ></textarea>
            </div>
            <div className="flex flex-col justify-start mt-3 text-sm">
              <label htmlFor="label" className="uppercase opensans font-bold ">
                jumlah pemain <span className="lowercase text-xs">(cm)</span>
              </label>
              <input
                type="number"
                name="amount"
                onChange={(e) => {
                  handleChange(e);
                }}
                value={data.amount}
                placeholder="e.g 58"
                className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>

            <div className="flex flex-col justify-start mt-4 text-sm  ">
              <label htmlFor="label" className="uppercase opensans font-bold ">
                foto latihan
              </label>
              <input
                type="file"
                name="pict"
                onChange={(e) => {
                  handleChange(e);
                }}
                value={data.pict}
                className=" block w-full outline-none file:h-full file:bg-[#dddddd] file:border-none file:w-[118px] h-10 mt-2 text-gray-900 border rounded-lg cursor-pointer bg-[#F2F3F7] focus:outline-none  "
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="bg-[#D00D00] h-10 rounded-lg mt-10 text-white opensans w-full"
        >
          Simpan
        </button>
      </div>
    </>
  );
}

export default AddExercise;
