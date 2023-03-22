"use client";
import { Tab } from "@headlessui/react";
import React from "react";
import ExerciseTime from "../exerciseTime";
import History from "../history";
import MakeMatch from "../makeMatch";
import MakePlayer from "../makeplayer";
import MatchRekap from "../matchRekap";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const arr = ["player", "last match", "season stats", "history", "periodisasi"];
type PageProps = {
  params: {
    query: string;
  };
};
function TeamDetails({ params: query }: PageProps) {
  return (
    <Tab.Group>
      <Tab.List className=" flex text-gray-600 font-semibold justify-around w-fit h-12 px-8 gap-x-8 items-center bg-white drop-shadow-md rounded-lg ">
        {arr.map((data, index) => {
          return (
            <Tab key={index} className={({ selected }) => classNames(!selected ? "capitalize transition-all duration-300 ease-in-out" : "bg-[#D00D00] text-white px-4 py-1 rounded-lg focus:outline-none capitalize ")}>
              {data}
            </Tab>
          );
        })}
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          {/* @ts-ignore */}
          <MakePlayer params={query} />
        </Tab.Panel>
        <Tab.Panel>
          <MakeMatch />
        </Tab.Panel>
        <Tab.Panel>
          <MatchRekap />
        </Tab.Panel>
        <Tab.Panel>
          <History />
        </Tab.Panel>
        <Tab.Panel>
          <ExerciseTime />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default TeamDetails;
