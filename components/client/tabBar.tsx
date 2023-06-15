"use client";
import { Tab } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { instance } from "@/config/axios";
import { login } from "@/hooks/action";

const arr = ["player", "last match", "season stats", "history", "periodisasi", "staff", "verification"];
const notSuperAdmin = ["player", "staff"];
type PageProps = {
  params: {
    team: String;
    category: String;
  };
};

function TeamDetails({ params: query }: PageProps) {
  const path = usePathname();
  const [data, setData] = useState(null);

  useEffect(() => {
    // @ts-ignore
    setData(JSON.parse(localStorage.getItem("login")));
  }, []);

  const decode = decodeURI(path);
  return (
    <div className="wrapper">
      {data === null ? (
        <div className={` flex text-gray-600 font-semibold justify-around w-fit h-12 px-8 gap-x-8 items-center bg-white drop-shadow-md rounded-lg animate-pulse `}>
          <div className="bg-gray-200 text-white px-3 py-2 rounded-md text-sm font-medium w-20" />
          <div className="bg-gray-200 text-white px-3 py-2 rounded-md text-sm font-medium w-20" />
          <div className="bg-gray-200 text-white px-3 py-2 rounded-md text-sm font-medium w-20" />
          <div className="bg-gray-200 text-white px-3 py-2 rounded-md text-sm font-medium w-20" />
          <div className="bg-gray-200 text-white px-3 py-2 rounded-md text-sm font-medium w-20" />
          <div className="bg-gray-200 text-white px-3 py-2 rounded-md text-sm font-medium w-20" />
        </div>
      ) : (
        <div>
          <ul className=" flex text-gray-600 font-semibold justify-around w-fit h-12 px-8 gap-x-8 items-center bg-white drop-shadow-md rounded-lg ">
            {/* @ts-ignore */}
            {data.data.user.role.toLowerCase() === "superadmin"
              ? arr.map((data, index) => {
                  return (
                    <Link key={index} href={`/main/${query.category}/${query.team}/${data}`}>
                      <li key={index} className={!decode.includes(arr[index]) ? "capitalize " : "bg-[#D00D00] text-white px-4 py-1 rounded-lg focus:outline-none uppercase "}>
                        {data}
                      </li>
                    </Link>
                  );
                })
              : notSuperAdmin.map((data, index) => {
                  return (
                    <Link key={index} href={`/main/${query.category}/${query.team}/${data}`}>
                      <li key={index} className={!decode.includes(arr[index]) ? "capitalize " : "bg-[#D00D00] text-white px-4 py-1 rounded-lg focus:outline-none uppercase "}>
                        {data}
                      </li>
                    </Link>
                  );
                })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TeamDetails;
