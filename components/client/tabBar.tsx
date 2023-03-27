"use client";
import { Tab } from "@headlessui/react";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const arr = ["player", "last match", "season stats", "history", "periodisasi"];
type PageProps = {
  params: {
    team: any;
    category: any;
  };
};
function TeamDetails({ params: query }: PageProps) {
  const path = usePathname();
  const decode = decodeURI(path);
  return (
    <Tab.Group>
      <Tab.List className=" flex text-gray-600 font-semibold justify-around w-fit h-12 px-8 gap-x-8 items-center bg-white drop-shadow-md rounded-lg ">
        {arr.map((data, index) => {
          return (
            <Link key={index} href={`/${query.category}/${query.team}/${data}`}>
              <Tab key={index} className={({ selected }) => classNames(!decode.includes(arr[index]) ? "capitalize " : "bg-[#D00D00] text-white px-4 py-1 rounded-lg focus:outline-none capitalize ")}>
                {data}
              </Tab>
            </Link>
          );
        })}
      </Tab.List>
    </Tab.Group>
  );
}

export default TeamDetails;
