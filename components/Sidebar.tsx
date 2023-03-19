import React from "react";
import { FaPlus } from "react-icons/fa";
import { IoIosFootball } from "react-icons/io";

function popup() {
  return (
    <>
      <div className="bg-[#F2F3F7] w-[218px] h-screen">
        <div className=" pt-32 flex flex-col items-center">
          {" "}
          <button className="flex pl-7 gap-4 items-center bg-white font-semibold py-2 w-[170px] rounded-md ">
            <span className="text-[#D00D00]">
              {" "}
              <FaPlus />
            </span>
            Tambah
          </button>
        </div>
        <div>
          <h1 className="font-bold text-lg mt-6 ml-6 ">Kategori</h1>
          <div className="mt-6">
            <button className="flex justify-start px-4 py-2 mt-4  w-[170px] gap-4 ml-6 text-xl font-medium rounded-lg items-center bg-[#D00D00] text-white ">
              <IoIosFootball />
              <h1>sepak bola</h1>
            </button>
            <button className="flex justify-start px-4 py-2 mt-4 w-[170px] gap-4 ml-6 text-xl font-medium rounded-lg items-center bg-[#D00D00] text-white ">
              <IoIosFootball />
              <h1>sepak bola</h1>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default popup;
