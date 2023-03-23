"use client";
import { Tab } from "@headlessui/react";
import React from "react";
import ListPlayer from "../server/listPlayer";
import PlayerList from "./match/playerList";
import GeneralMatch from "./match/generalMatch";
import { usePathname, useRouter } from "next/navigation";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
function AddMatch() {
  const navigate = useRouter();
  const router = usePathname().replace("new_match", "");

  return (
    <div className="">
      <div className="bg-white w-full rounded-xl px-10 py-10">
        <button
          className="bg-[#137403] px-4 py-2 text-white mb-10 rounded-lg"
          onClick={() => {
            navigate.push(router);
          }}
        >
          Kembali
        </button>
        <div>
          <h1 className="opensans font-bold text-xl">Tambah Match </h1>
          <h4 className="font-semibold">
            Lengkapi data di bawah,jika ada ( <span className="text-[#D00D00] ">* </span>) maka wajib diisi{" "}
          </h4>
        </div>
        <Tab.Group>
          <Tab.List className=" flex text-gray-600 font-semibold justify-around max-w-[384px] h-12 mt-8 items-center bg-[#F2F3F7]      drop-shadow-md rounded-lg  capitalize    ">
            <Tab className={({ selected }) => classNames(!selected ? "transition-all duration-300 ease-out" : "bg-[#D00D00]  text-white px-4 py-1 focus:outline-none rounded-lg")}>General match</Tab>
            <Tab className={({ selected }) => classNames(!selected ? "transition-all duration-300 ease-out" : "bg-[#D00D00]  text-white px-4 py-1 focus:outline-none rounded-lg")}>player pick</Tab>
            <Tab className={({ selected }) => classNames(!selected ? "transition-all duration-300 ease-out" : "bg-[#D00D00]  text-white px-4 py-1 focus:outline-none rounded-lg")}>player list</Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <GeneralMatch />
            </Tab.Panel>
            <Tab.Panel>
              <ListPlayer />
            </Tab.Panel>
            <Tab.Panel>
              <PlayerList />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
export default AddMatch;
