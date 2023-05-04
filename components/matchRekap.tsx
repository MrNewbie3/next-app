
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Shooting from "./datatim/shooting";
import Passing_ball from "./datatim/passing_ball";
import Fouls from "./datatim/fouls";
import Defending from "./datatim/defending";

function MatchRekap() {
  return (
    <div className="container ">
      <div className="flex justify-between w-full mb-6 items-center ">
        <div className="h-16 max-w-[650px] px-10 py-2 w-[650px] rounded-lg drop-shadow-md  bg-white">
          <div className="flex text-xs font-semibold  ">
            <p> 16 juni 2023 -</p>
            <p>Sekarang</p>
          </div>
          <h1 className="text-xl font-bold ">MOKLET</h1>
        </div>

        <button className="hover:bg-[#D00D00] flex items-center gap-2 bg-white ring-1 capitalize font-semibold ring-[#D00D00] text-[#D00D00] px-4 rounded-lg h-9 hover:text-white active:bg-[#D00D00] active:text-white   ">
          2023/2024 <IoMdArrowDropdown />
        </button>
      </div>
      <div className="flex max-lg:flex-col gap-5">
        <Shooting />
        <Passing_ball />

        <div></div>
      </div>

      <div className="lg:flex gap-5  mt-6">
        <Defending />
        <Fouls />
      </div>
    </div>
  );
}

export default MatchRekap;
