"use client";
import { Tab } from "@headlessui/react";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const arr = ["last match", "season stats", "history", "medis", "measurement"];
type PageProps = {
  params: {
    team: String;
    category: String;
    id_player: String;
  };
};
function PlayerDetails({ params: query }: PageProps) {
  const path = usePathname();
  const decode = decodeURI(path);
  return (
    <div>
      <ul className=" flex text-gray-600 font-semibold justify-around w-fit h-12 px-8 gap-x-8 items-center bg-white drop-shadow-md rounded-lg ">
        {arr.map((data, index) => {
          return (
            <Link key={index} href={`/main/${query.category}/${query.team}/player_detail/${query.id_player}/${data}`}>
              <li key={index} className={!decode.includes(arr[index]) ? "capitalize " : "bg-[#D00D00] text-white px-4 py-1 rounded-lg focus:outline-none capitalize "}>
                {data}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default PlayerDetails;
