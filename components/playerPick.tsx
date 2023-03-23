import Link from "next/link";
import React from "react";
import { GrFormNext } from "react-icons/gr";
import PlayerMatchDetail from "./client/match/playerMatchDetail";

type PageProps = {
  params: {
    player: string;
  };
};

function PlayerPick({ params: player }: PageProps) {
  return (
    <div className="px-8">
      <div className="bg-white w-full rounded-xl px-10 py-10 ">
        <Link href={`/${player.category}/${player.team}/new_match/`}>
          <button className="bg-[#137403] px-4 py-2 text-white mb-10 rounded-lg">Kembali</button>
        </Link>
        <div>
          <h1 className="opensans font-bold text-xl">Tambah Match </h1>
          <h4 className="font-semibold">
            Lengkapi data di bawah,jika ada ( <span className="text-[#D00D00] ">* </span>) maka wajib diisi{" "}
          </h4>
        </div>
        <div className="mt-8">
          <ul className=" flex text-gray-600 font-semibold justify-around max-w-[384px] h-12 items-center bg-[#F2F3F7]      drop-shadow-md rounded-lg  capitalize    ">
            <li className="bg-[#D00D00] text-white px-4 py-1 rounded-lg">player pick</li>
          </ul>
        </div>
        <h1 className="capitalize font-semibold flex opensans mt-6 text-sm text-gray-400">
          Player pick{" "}
          <span className="flex items-center ">
            <GrFormNext />
          </span>
          <span className="text-black capitalize">{decodeURI(player.player)}</span>
        </h1>
        <div className="bg-white max-w-full p-2 rounded-lg mt-8  gap-5 mb-4 capitalize items-center h-12 w- flex">
          <h1 className="text-5xl font-bold  text-[#D00D00]">18</h1>
          <div>
            <p className="text-xs text-gray-400 font-semibold">golkiper</p>
            <h2 className="text-lg font-semibold  ">dimas setiawan surya</h2>
          </div>
        </div>
        <PlayerMatchDetail />
      </div>
    </div>
  );
}
export default PlayerPick;
