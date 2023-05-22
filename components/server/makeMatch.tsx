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
  const res = await fetch("http://localhost:4002/api/v1/club/" + params, {
    cache: "no-store",
    next: {
      revalidate: 10,
    },
    headers: { Authentication: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4Mjg3MDMzNiwiZXhwIjoxNjgyODgxMTM2fQ.7Ip3UXTm966u3F5IKZVW8hnsF4I1swm3Dx1AhN_RN4M" },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data = " + res.statusText);
  }
  return res.json();
}

async function getLastPlayed(params: String) {}

async function MakeMatch({ params: query }: PageProps) {
  const dataTim = await getData(query.team);
  console.log(dataTim);

  return (
    <>
    <div className="pb-20"><div className="flex justify-between w-full items-center  ">
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
      <div className="flex max-lg:flex-col gap-5 mt-5">
        <Shooting />
        <Passing_ball />
      </div>
      <div className="lg:flex gap-5  mt-6">
        <Defending />
        <Fouls />
      </div></div>
      
    </>
  );
}

export default MakeMatch;
