"use client";
import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";

type Props = {
  children?: React.ReactNode;
};

export default function popup({ children }: Props) {
  return (
    <>
      <div className="bg-[#F2F3F7] min-w-[218px] h-full">
        <div className="flex flex-col items-center">
          <Link href={"/new_sport"} className="flex pl-7 gap-4 items-center bg-white font-semibold py-2 w-[170px] rounded-md ">
            <span className="text-[#D00D00]">
              <FaPlus />
            </span>
            Tambah
          </Link>
          <div className="mt-6">{children}</div>
        </div>
      </div>
    </>
  );
}
