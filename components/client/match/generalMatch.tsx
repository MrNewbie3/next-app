"use client";
import React, { useState } from "react";


export default function GeneralMatch() {

  const [data, setData] = useState({
    name: "",
    liga: "",
    date: "",
    position: "",
    lost_ball: "",
    corner: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <form>
      <div className=" input_file_div mt-10 uper flex gap-x-5 justify-between  max-lg:flex-col ">
        <div className="w-full">
          <div className="  flex flex-col justify-start mt-4">
            <label htmlFor="label" className=" uppercase  opensans font-bold ">
              Nama lawan<span className="text-[#D00D00]">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="e.g Mancester United"
              onChange={(e) => {
                handleChange(e);
              }}
              value={data.name}
              className=" bg-[#F2F3F7] h-10 border-none w-full   focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
            />
          </div>

          <div className="flex flex-col justify-start mt-4">
            <label htmlFor="label" className=" uppercase  opensans font-bold ">
              liga <span className="text-[#D00D00]">*</span>
            </label>
            <input
              type="text"
              name="liga"
              placeholder="e.g Red Devil"
              onChange={(e) => {
                handleChange(e);
              }}
              value={data.liga}
              className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
            />
          </div>
          <div className="flex flex-col justify-start mt-4">
            <label htmlFor="label" className=" uppercase opensans font-bold ">
              tanggal tanding
            </label>
            <input
              type="date"
              name="date"
              placeholder="e.g MU "
              onChange={(e) => {
                handleChange(e);
              }}
              value={data.date}
              className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
            />
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col justify-start mt-4">
            <label htmlFor="label" className="uppercase opensans font-bold ">
              ball position <span className="lowercase text-xs">(%)</span>
              <span className="text-[#D00D00]">*</span>
            </label>
            <input
              type="number"
              name="position"
              placeholder="e.g 180"
              onChange={(e) => {
                handleChange(e);
              }}
              value={data.position}
              className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
            />
          </div>
          <div className="flex flex-col justify-start mt-4">
            <label htmlFor="label" className="uppercase opensans font-bold ">
              lost ball position <span className="lowercase text-xs">(%)</span>{" "}
              <span className="text-[#D00D00]">*</span>
            </label>
            <input
              type="number"
              name="lost_ball"
              onChange={(e) => {
                handleChange(e);
              }}
              value={data.lost_ball}
              placeholder="e.g 58"
              className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
            />
          </div>
          <div className="flex flex-col justify-start mt-4">
            <label htmlFor="label" className="uppercase opensans font-bold ">
              corner kick
              <span className="text-[#D00D00]">*</span>
            </label>
            <input
              type="number"
              name="corner"
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="e.g 58"
              value={data.corner}
              className=" bg-[#F2F3F7]  h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
            />
          </div>
        </div>
      </div>
      <button className="bg-[#D00D00] h-10 rounded-lg mt-10 text-white opensans w-full">
        Simpan
      </button>
    </form>
  );
}
