import Image from "next/image";
import React from "react";

import { GrFormNext } from "react-icons/gr";
function PlayerCard() {
  return (
    <>
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
          <button className="bg-[#D00D00] rounded-lg  text-white px-6 py-1.5">Edit Pemain</button>
        </div>

        <div className="card flex w-full  max-md:flex-col gap-20 mt-8 ">
          <div className="flex w-2/4  gap-4">
            <Image src={"/images/team_img.png"} width={"128"} height={"150"} alt="" className="object-cover rounded-2xl w-[128px] h-auto "></Image>
            <div className="">
              <h1 className="font-semibold mt-8 text-[#9d9d9d] text-base capitalize">agung dwi</h1>
              <h1 className="font-bold capitalize mt-1 text-2xl text-gray-900 ">Adi Setyawan</h1>
              <h1 className="font-bold capitalize mt-1 text-primary-red text-5xl ">
                <span>#</span>
                23
              </h1>
            </div>
          </div>
          <div className="data_tim  uppercase grid  w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-6 ">
            <div>
              <label className="text-xs font-bold">Tanggal Lahir</label>
              <p className=" capitalize bg-white h-10 w-full p-2 rounded-lg font-semibold">16-06-2005</p>
            </div>
            <div>
              <label className="text-xs font-bold">Jenis Kelamin</label>
              <p className=" capitalize bg-white h-10 w-full p-2 rounded-lg font-semibold">laki-Laki</p>
            </div>
            <div>
              <label className="text-xs font-bold">posisi</label>
              <p className=" capitalize bg-white h-10 w-full p-2 rounded-lg font-semibold">GoalKeeper</p>
            </div>
            <div>
              <label className="text-xs font-bold">Tempat Lahir</label>
              <p className=" capitalize bg-white h-10 w-full p-2 rounded-lg font-semibold">Kediri</p>
            </div>{" "}
            <div>
              <label className="text-xs font-bold">Berat Badan</label>
              <p className=" capitalize bg-white h-10 w-full p-2 rounded-lg font-semibold">50 Kg</p>
            </div>
            <div>
              <label className="text-xs font-bold">Tinggi Badan</label>
              <p className=" capitalize bg-white h-10 w-full p-2 rounded-lg font-semibold">170 cm</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayerCard;