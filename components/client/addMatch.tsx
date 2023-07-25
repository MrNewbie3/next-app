"use client";
import { Tab } from "@headlessui/react";
import React from "react";
import ListPlayer from "./listPlayer";
import PlayerList from "./match/playerList";
import GeneralMatch from "./match/generalMatch";
import { usePathname, useRouter } from "next/navigation";
import ImportExcel from "./match/importExcel";
import localStorage from "redux-persist/es/storage";
import { type } from "os";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

type PageProps = {
  params: {
    category: string;
    team: string;
    query: string;
  };
};

function AddMatch({ params: query }: PageProps) {
  const navigate = useRouter();
  // @ts-ignore

  const router = usePathname().replace("new_match", "");

  return (
    <div className="">
      <div className="bg-white w-full rounded-xl px-10 py-10">
        <div className="button-group flex gap-x-5">
          <button
            className="bg-[#137403] px-4 py-2 text-white mb-10 rounded-lg"
            onClick={() => {
              navigate.push(router);
            }}
          >
            Kembali
          </button>
          <button
            className="bg-[#D00D00] px-4 py-2 text-white mb-10 rounded-lg"
            onClick={() => {
              localStorage.removeItem("match");
              localStorage.removeItem("data_player");
              typeof window != "undefined" ? window.location.reload() : null;
            }}
          >
            Hapus Data
          </button>
        </div>
        <div>
          <h1 className="opensans font-bold text-xl">Tambah Match </h1>
          <h4 className="font-semibold">
            Lengkapi data di bawah,jika ada ( <span className="text-[#D00D00] ">* </span>) maka wajib diisi
          </h4>
        </div>
        <Tab.Group>
          <Tab.List className=" flex text-gray-600 font-semibold justify-around min-w-[384px] w-fit h-12 gap-x-10 px-2 mt-8 items-center bg-[#F2F3F7]      drop-shadow-md rounded-lg  capitalize    ">
            <Tab className={({ selected }) => classNames(!selected ? "transition-all duration-300 ease-out capitalize" : "bg-[#D00D00] uppercase text-white px-4 py-1 focus:outline-none rounded-lg")}>General match</Tab>
            <Tab className={({ selected }) => classNames(!selected ? "transition-all duration-300 ease-out capitalize" : "bg-[#D00D00] uppercase text-white px-4 py-1 focus:outline-none rounded-lg")}>player pick</Tab>
            <Tab className={({ selected }) => classNames(!selected ? "transition-all duration-300 ease-out capitalize" : "bg-[#D00D00] uppercase text-white px-4 py-1 focus:outline-none rounded-lg")}>player list</Tab>
            <Tab className={({ selected }) => classNames(!selected ? "transition-all duration-300 ease-out capitalize" : "bg-[#D00D00] uppercase text-white px-4 py-1 focus:outline-none rounded-lg")}>import data</Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <GeneralMatch params={query} />
            </Tab.Panel>
            <Tab.Panel>
              {/* @ts-ignore */}
              <ListPlayer params={{ category: query.category, team: query.team, detail: "new_match" }} />
            </Tab.Panel>
            <Tab.Panel>
              {/* @ts-ignore */}
              <PlayerList
                params={{
                  category: query.category,
                  team: query.team,
                  detail: "new_match",
                }}
              />
            </Tab.Panel>
            <Tab.Panel>
              <ImportExcel />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
export default AddMatch;
