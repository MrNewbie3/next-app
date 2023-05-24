import Link from "next/link";
import React from "react";
import Shooting from "../datatim/shooting";
import Passing_ball from "../datatim/passing_ball";
import Fouls from "../datatim/fouls";
import Defending from "../datatim/defending";

type PageProps = {
  params: {
    team: any;
    category: any;
    query: string;
  };
};

async function getData(params: String) {
  const res = await fetch("http://localhost:4002/api/v1/match/c/" + params, {
    cache: "no-store",
    next: {
      revalidate: 10,
    },
    headers: { Authorization: `Bearer ${process.env.AUTH}` },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data = " + res.statusText);
  }
  return res.json();
}

async function MakeMatch({ params: query }: PageProps) {
  const dataTim = await getData(query.team);
  return (
    <>
      <div className="pb-20">
        {dataTim.data.length < 1 ? (
          <div className="flex justify-between w-full items-center  ">
            <div className="h-16 max-w-[650px] px-10 py-2 w-[650px] rounded-lg drop-shadow-md  bg-white">
              <div className="flex text-xs font-semibold  ">
                <p>{new Date().toLocaleDateString()}</p>
              </div>
              <h1 className="text-xl font-bold ">Belum pernah bertanding season ini!</h1>
            </div>
            <Link href={`/main/${query.category}/${query.team}/new_match`}>
              <button className="hover:bg-[#D00D00] bg-white ring-1 capitalize font-semibold ring-[#D00D00] text-[#D00D00] px-4 rounded-lg h-9 hover:text-white active:bg-[#D00D00] active:text-white   ">Add Match</button>
            </Link>
          </div>
        ) : (
          <>
            <div className="flex justify-between w-full items-center  ">
              <div className="h-16 max-w-[650px] px-10 py-2 w-[650px] rounded-lg drop-shadow-md  bg-white">
                <div className="flex text-xs font-semibold  ">
                  <p>{dataTim.data[dataTim.data.length - 1].match_date}</p>
                </div>
                <h1 className="text-xl font-bold uppercase ">
                  {dataTim.data[dataTim.data.length - 1].club.club_name} vs {dataTim.data[dataTim.data.length - 1].opponent_name}
                </h1>
              </div>
              <Link href={`/main/${query.category}/${query.team}/new_match`}>
                <button className="hover:bg-[#D00D00] bg-white ring-1 capitalize font-semibold ring-[#D00D00] text-[#D00D00] px-4 rounded-lg h-9 hover:text-white active:bg-[#D00D00] active:text-white   ">Add Match</button>
              </Link>
            </div>
            <div className="flex max-lg:flex-col gap-5 mt-5">
              <Shooting data={dataTim.data[dataTim.data.length - 1]} />
              <Passing_ball data={dataTim.data[dataTim.data.length - 1]} />
            </div>
            <div className="lg:flex gap-5  mt-6">
              <Defending data={dataTim.data[dataTim.data.length - 1]} />
              <Fouls data={dataTim.data[dataTim.data.length - 1]} />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default MakeMatch;
