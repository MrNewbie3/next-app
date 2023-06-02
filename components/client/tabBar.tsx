"use client";
import { Tab } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { instance } from "@/config/axios";

const arr = ["player", "last match", "season stats", "history", "periodisasi", "staff"];
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
    instance
      .get("user/auth")
      .then((result: { data: React.SetStateAction<null> }) => {
        setData(result.data);
      })
      .catch((err: string | undefined) => {
        throw new Error(err);
      });
  }, []);

  const decode = decodeURI(path);
  return (
    <div className="wrapper">
      {data === null ? (
        <h1>loading</h1>
      ) : (
        <div>
          <ul className=" flex text-gray-600 font-semibold justify-around w-fit h-12 px-8 gap-x-8 items-center bg-white drop-shadow-md rounded-lg ">
            {/* @ts-ignore */}
            {data.data.role.toLowerCase() === "superadmin"
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
