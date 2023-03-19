import React from "react";

function MakeMatch() {
  return (
    <>
      <div className="flex justify-between w-full items-center ">
        <div className="h-16 max-w-[650px] px-10 py-2 w-[650px] rounded-lg drop-shadow-md  bg-white">
          <div className="flex text-xs font-semibold  ">
            <p> 2 februari 2023</p>
           
          </div>
          <h1 className="text-xl font-bold ">Belum pernah bertanding season ini!</h1>
        </div>

        <button className="hover:bg-[#D00D00] bg-white ring-1 capitalize font-semibold ring-[#D00D00] text-[#D00D00] px-4 rounded-lg h-9 hover:text-white active:bg-[#D00D00] active:text-white   ">
          {" "}
          Add Match
        </button>
      </div>
    </>
  );
}

export default MakeMatch;
