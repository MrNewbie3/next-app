import Image from "next/image";
import React from "react";

function TeamCard() {
  return (
    <>
      <div className=" w-full rounded-lg py-4 ">
        <div className=" flex  justify-between max-lg:flex-col  items-center ">
          <h1 className="capitalize font-bold opensans text-3xl">Telkom school soccer club</h1>
          <button className="bg-[#D00D00] max-lg:mt-4 rounded-lg  text-white px-12 py-2">Edit Club</button>
        </div>

        <div className="card flex max-lg:flex-col  justify-between mt-8 ">
          <div className="flex w-3/4 gap-4">
            <Image src={"/images/team_img.png"} width={"128"} height={"150"} alt="" className="object-cover rounded-2xl w-[128px] h-auto "></Image>
            <div>
              <h1 className="font-semibold mt-8 text-[#9d9d9d] text-base">kategori</h1>
              <h1 className="font-bold capitalize mt-1 text-2xl text-gray-900">nama Tim</h1>
            </div>
          </div>
          <div className="data_tim w-full uppercase grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-6 font-semibold">
            <div>
              <label className="text-xs font-bold">nama asli</label>
              <p className=" capitalize bg-white h-10 w-full  p-2 rounded-lg">smk telkom malang</p>
            </div>
            <div>
              <label className="text-xs font-bold">tanggal berdiri</label>
              <p className=" capitalize bg-white h-10 w-full  p-2 rounded-lg">19 juni 1992 (30)</p>
            </div>
            <div>
              <label className="text-xs font-bold">asal club</label>
              <p className=" capitalize bg-white h-10 w-full  p-2 rounded-lg">malang</p>
            </div>
            <div>
              <label className="text-xs font-bold">jumlah pemain</label>
              <p className=" capitalize bg-white h-10 w-full  p-2 rounded-lg">0</p>
            </div>{" "}
            <div>
              <label className="text-xs font-bold">jumlah staf</label>
              <p className=" capitalize bg-white h-10 w-full  p-2 rounded-lg">0</p>
            </div>
            <div>
              <label className="text-xs font-bold">jumlah trofi</label>
              <p className=" capitalize bg-white h-10 w-full  p-2 rounded-lg">0</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamCard;
