import React, { cache } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Shooting from "./datatim/shooting";
import Passing_ball from "./datatim/passing_ball";
import Fouls from "./datatim/fouls";
import Defending from "./datatim/defending";

type PageProps = {
  params: {
    category: string;
    team: string;
  };
};

const getClubData = async (params: string) => {
  const data = await fetch("http://localhost:4002/api/v1/club/" + params, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH}`,
    },
    cache: "no-cache",
  });
  const res = await data.json();
  if (!res.success) {
    throw new Error("Error: " + res.message);
  }
  return res;
};

async function MatchRekap({ params: query }: PageProps) {
  const getClub = await getClubData(query.team);
  return (
    <div className=" pb-20 ">
      <div className="flex justify-between w-full mb-6 items-center ">
        <div className="h-16 max-w-[650px] px-10 py-2 w-[650px] rounded-lg drop-shadow-md  bg-white">
          <div className="flex text-xs font-semibold  ">
            <p> {getClub.data.start_season} -</p>
            <p>{getClub.data.end_season}</p>
          </div>
          <h1 className="text-xl font-bold ">{getClub.data.club_name}</h1>
        </div>

        <button className="hover:bg-[#D00D00] flex items-center gap-2 bg-white ring-1 capitalize font-semibold ring-[#D00D00] text-[#D00D00] px-4 rounded-lg h-9 hover:text-white active:bg-[#D00D00] active:text-white   ">
          2023/2024 <IoMdArrowDropdown />
        </button>
      </div>
      <div className="flex max-lg:flex-col gap-5">
        <Shooting data={undefined} />
        <Passing_ball data={undefined} />
      </div>
      <div className="lg:flex gap-5  mt-6">
        <Defending data={undefined} />
        <Fouls data={undefined} />
      </div>
    </div>
  );
}

export default MatchRekap;
