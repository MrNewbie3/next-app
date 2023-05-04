import Link from "next/link";
import React from "react";
import ListPlayer from "./client/listPlayer";
type PageProps = {
  params: {
    category: string;
    team: string;
    detail: string;
  };
};

function MakePlayer({ params: query }: PageProps) {
  return (
    <>
      <div className="flex justify-between w-full items-center ">
        <div className="h-16 max-w-[650px] px-10 py-2 w-[650px] rounded-lg drop-shadow-md  bg-white">
          <div className="flex text-xs font-semibold  ">
            <p> 16 juni 2023 -</p>
            <p>18 juni 2023</p>
          </div>
          <h1 className="text-xl font-bold ">MOKLET&apos;S Player</h1>
        </div>
        <Link href={`${query.category}/${query.team}/new_player`}>
          <button className="hover:bg-[#D00D00] bg-white ring-1 capitalize font-semibold ring-[#D00D00] text-[#D00D00] px-8 rounded-lg h-9 hover:text-white active:bg-[#D00D00] active:text-white   "> Add player</button>
        </Link>
      </div>
      <div className="px-8 mt-6 bg-white rounded-xl">
        {/* @ts-ignore */}
        <ListPlayer params={query} />
      </div>
    </>
  );
}

export default MakePlayer;
