import React from "react";
import { GrFormNext } from "react-icons/gr";

function EditPlayer() {
  return (
    <div className="w-full rounded-xl px-10 py-10">
      <div className="head flex justify-between  items-center ">
        <h1 className="capitalize font-semibold flex opensans text-xs text-gray-600">
          Futsal{" "}
          <span className="flex items-center">
            <GrFormNext />
            player <GrFormNext />
          </span>
          <span className="text-black"> agung dwi min1</span>
        </h1>
      </div>

      <div className="w-full mt-16 lg:mt-0  rounded-lg  py-4">
        <h1 className="mb-6 text-[20px]  font-semibold">Identitas Umum</h1>

<div className="flex w-full gap-6">
        <div className="max-w-sm w-full grid grid-cols-1 gap-6">
          <div className="  flex flex-col justify-start ">
            <label
              htmlFor="label"
              className=" uppercase  opensans font-bold text-sm "
            >
              Nama lengkap
            </label>
            <input
              type="text"
              value={"adi"}
              className=" bg-white h-10 border-none w-full  focus:outline-none  p-2  rounded-lg font-semibold "
            />
          </div>
          <div className="  flex flex-col justify-start ">
            <label
              htmlFor="label"
              className=" uppercase  opensans font-bold text-sm "
            >
              Posisi
            </label>
            <input
              type="text"
              value={"desain ui/ux"}
              className=" bg-white h-10 border-none w-full  focus:outline-none  p-2  rounded-lg font-semibold "
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="  flex flex-col justify-start ">
            <label
              htmlFor="label"
              className=" uppercase  opensans font-bold text-sm "
            >
              Nama Tampilan
            </label>
            <input
              type="text"
              value={"adi"}
              className=" bg-white h-10 border-none w-full  focus:outline-none  p-2  rounded-lg font-semibold "
            />
          </div>
          <div className="  flex flex-col justify-start ">
            <label
              htmlFor="label"
              className=" uppercase  opensans font-bold text-sm "
            >
              Nama lengkap
            </label>
            <input
              type="text"
              value={"adi"}
              className=" bg-white h-10 border-none w-full  focus:outline-none  p-2  rounded-lg font-semibold "
            />
          </div>
          <div className="  flex flex-col justify-start ">
            <label
              htmlFor="label"
              className=" uppercase  opensans font-bold text-sm "
            >
              Nama lengkap
            </label>
            <input
              type="text"
              value={"adi"}
              className=" bg-white h-10 border-none w-full  focus:outline-none  p-2  rounded-lg font-semibold "
            />
          </div>
          <div className="  flex flex-col justify-start ">
            <label
              htmlFor="label"
              className=" uppercase  opensans font-bold text-sm "
            >
              Nama lengkap
            </label>
            <input
              type="text"
              value={"adi"}
              className=" bg-white h-10 border-none w-full  focus:outline-none  p-2  rounded-lg font-semibold "
            />
          </div>
          <div className="  flex flex-col justify-start ">
            <label
              htmlFor="label"
              className=" uppercase  opensans font-bold text-sm "
            >
              Nama lengkap
            </label>
            <input
              type="text"
              value={"adi"}
              className=" bg-white h-10 border-none w-full  focus:outline-none  p-2  rounded-lg font-semibold "
            />
          </div>
          <div className="  flex flex-col justify-start ">
            <label
              htmlFor="label"
              className=" uppercase  opensans font-bold text-sm "
            >
              Nama lengkap
            </label>
            <input
              type="text"
              value={"adi"}
              className=" bg-white h-10 border-none w-full  focus:outline-none  p-2  rounded-lg font-semibold "
            />
          </div>
          </div>
      </div>
    </div>
    </div>
  );
}
export default EditPlayer;
