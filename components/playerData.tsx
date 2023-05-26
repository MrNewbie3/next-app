"use client";
import General from "./dataplayer/general";
import Goalkeping from "./dataplayer/goalkeping";
import Passing_ball from "./dataplayer/passing_ball";
import Saves from "./dataplayer/saves";
import Fouls from "./dataplayer/fouls";
import Defending from "./dataplayer/defending";
import { Tab } from "@headlessui/react";
import PlayerPage from "./playerPage";
import HistoryPlayer from "./HistoryPlayer";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

type PageProps = {
  params: {
    category: String;
    team: String;
    id_player: String;
    detail: string;
  };
};

function PlayerData({ params: query }: PageProps) {
  return (
    <div className="px-10 w-full">
      <Tab.Group>
        <Tab.List className={"flex text-gray-600 font-semibold justify-around max-w-[550px] h-12  items-center bg-white drop-shadow-md rounded-lg  capitalize"}>
          <Tab className={({ selected }) => classNames(!selected ? "transition-all capitalize  duration-300 ease-out" : "bg-[#D00D00] capitalize  text-white px-4 py-1 focus:outline-none rounded-lg")}>last match</Tab>
          <Tab className={({ selected }) => classNames(!selected ? "transition-all capitalize  duration-300 ease-out" : "bg-[#D00D00] capitalize  text-white px-4 py-1 focus:outline-none rounded-lg")}>season stats</Tab>
          <Tab className={({ selected }) => classNames(!selected ? "transition-all capitalize  duration-300 ease-out" : "bg-[#D00D00] capitalize  text-white px-4 py-1 focus:outline-none rounded-lg")}>history</Tab>
          <Tab className={({ selected }) => classNames(!selected ? "transition-all capitalize  duration-300 ease-out" : "bg-[#D00D00] capitalize  text-white px-4 py-1 focus:outline-none rounded-lg")}>medis</Tab>
          <Tab className={({ selected }) => classNames(!selected ? "transition-all capitalize  duration-300 ease-out" : "bg-[#D00D00] capitalize  text-white px-4 py-1 focus:outline-none rounded-lg")}>measurement</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <PlayerPage />
          </Tab.Panel>
          <Tab.Panel>
            <PlayerPage />
          </Tab.Panel>
          <Tab.Panel>
            <HistoryPlayer params={query} />
          </Tab.Panel>
          <Tab.Panel>
            <HistoryPlayer params={query} />
          </Tab.Panel>
          <Tab.Panel></Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
export default PlayerData;
