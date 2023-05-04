import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillCaretDown } from "react-icons/ai";

function Navbar() {
  return (
    <>
      <nav className="flex flex-row justify-between  items-center h-24 drop-shadow-xl px-10 bg-[#F2F3F7] mb-6 w-full">
        <Link href={"/"}>
          <Image className="bg-sky-100 font-bold " alt="stapa-logo.png" src="/images/STAPA.png " height={29} width={85}></Image>
        </Link>
        <div className="flex justify-between items-center font-medium gap-2">
          <img className="rounded-full h-10  w-10 object-cover " src="https://w7.pngwing.com/pngs/99/33/png-transparent-apple-logo-mac-os-heart-logo-computer-wallpaper.png" alt="" />
          <div className="flex gap-2 items-center">
            <div className="capitalize font-semibold text-base">nama ku persija</div>
            <div className="">
              <AiFillCaretDown />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
