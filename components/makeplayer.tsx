import Link from "next/link";
import React from "react";
import ListPlayer from "./client/listPlayer";
import { cookies } from "next/headers";
type PageProps = {
  params: {
    category: string;
    team: string;
    detail: string;
  };
};

async function getData(params: String) {
  const cookieStore = cookies();

  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/club/` + params, {
    headers: {
      Authorization: `Bearer ${cookieStore.get("token")?.value}`,
    },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data = " + res.statusText);
  }
  return res.json();
}

async function MakePlayer({ params: query }: PageProps) {
  const data = await getData(query.team);

  return (
    <>
      <div className="flex justify-between w-full items-center ">
        <div className="h-16 max-w-[650px] px-10 py-2 w-[650px] rounded-lg drop-shadow-md  bg-white">
          <div className="flex text-xs font-semibold  ">
            <p>{data.data.club_established}</p>
          </div>
          <h1 className="text-xl font-bold uppercase">{data.data.club_name}'s player</h1>
        </div>
        <Link href={`/main/${query.category}/${query.team}/new_player`}>
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
