import React from "react";
import Link from "next/link";
function TabBar() {
  return (
    <ul className=" flex text-gray-600 font-semibold justify-around max-w-[550px] h-12 mx-16 items-center bg-slate-200 rounded-lg  capitalize    ">
      <li className="bg-[#D00D00] text-white px-4 py-1 rounded-lg">player</li>
      <li>last match</li>
      <li> season stats</li>
      <li>history</li>
      <li>periodesasi</li>
    </ul>
  );
}

export default TabBar;
