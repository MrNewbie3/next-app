"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
function Navbar() {
  // @ts-ignore
  const data = JSON.parse(localStorage.getItem("login"));
  const user = data.data.user;

  return (
    <>
      <nav className="flex flex-row justify-between  items-center h-24 drop-shadow-xl px-10 bg-[#F2F3F7] mb-6 w-full">
        <Link href={"/"}>
          <Image className="bg-sky-100 font-bold " alt="stapa-logo.png" src="/images/STAPA.png " height={29} width={85}></Image>
        </Link>
        <div className="flex justify-between items-center font-medium gap-2">
          <div className="flex gap-2 items-center">
            <div className="capitalize font-semibold text-base">{user === undefined ? "user" : user.name}</div>
            <div className="">
              <AiFillCaretDown />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}k

export default Navbar;
