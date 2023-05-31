import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import { IoMdArrowDropdown } from "react-icons/io";
type PageProps = {
  params: {
    detail: string;
    team: string;
    category: string;
    detail_player: string;
    id_player: string;
  };
};
const getData = async (params: string) => {
  const cookieStore = cookies();

  const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/match/c/` + params, {
    headers: {
      Authorization: `Bearer ${cookieStore.get("token")?.value}`,
    },
    cache: "no-cache",
  });
  const res = await data.json();
  if (!res.success) {
    throw new Error("error: " + res.message);
  }
  return res;
};

const getPlayers = async (params: string) => {
  const cookieStore = cookies();

  const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/player/` + params, {
    headers: {
      Authorization: `Bearer ${cookieStore.get("token")?.value}`,
    },
    cache: "no-cache",
  });
  const res = await data.json();
  if (!res.success) {
    throw new Error("error: " + res.message);
  }
  return res;
};

async function HistoryPlayer({ params: query }: PageProps) {
  const data = await getData(query.team);
  const dataPlayer = await getPlayers(query.id_player);
  let value: any = [];
  data.data.map((params: any) => {
    params.DetailMatch.find((data: any) => {
      return data.playerId === dataPlayer.data.id ? value.push(params) : 0;
    });
  });

  return (
    <div className=" mb-6 w-full">
      {
        // @ts-ignore
        // data.success ? "" : (data = [])
      }
      <div className="flex justify-between w-full  items-center ">
        <div className="flex justify-between w-full mt-6 items-center ">
          <div className="h-16 max-w-[650px] px-10 py-2 w-[650px] rounded-lg drop-shadow-md  bg-white">
            <div className="flex text-xs font-semibold  ">
              <p> 16 juni 2023 -</p>
              <p>18 juni 2023</p>
            </div>
            <h1 className="text-xl font-bold ">
              MOKLET <span>VS</span> Telkom Purwokerto
            </h1>
          </div>
          <button className="hover:bg-[#D00D00] flex items-center gap-2 bg-white ring-1 capitalize font-semibold ring-[#D00D00] text-[#D00D00] px-4 rounded-lg h-9 hover:text-white active:bg-[#D00D00] active:text-white   ">
            2023/2024 <IoMdArrowDropdown />
          </button>
        </div>
      </div>

      <div className="last_match  w-full bg-white rounded-lg mt-6 px-6 py-4">
        <h1 className="font-bold text-lg">Pertandingan Terakhir</h1>
        <table className="table-auto w-full capitalize   ">
          <thead>
            <tr className="">
              <th className="text-left py-2">No.</th>
              <th className="text-left py-2">Tanggal</th>
              <th className="text-left py-2">Tanding</th>
              <th className="text-left py-2">Liga</th>
              <th className="text-left py-2">Score</th>
              <th className="text-left py-2">Details</th>
            </tr>
          </thead>
          <tbody className="font-semibold capitalize">
            {value.map((params: any, index: number) => {
              return (
                <tr key={index}>
                  <td className=" py-2">{index + 1}</td>
                  <td className=" py-2">{params.match_date}</td>
                  <td className=" py-2">
                    {params.club.club_name} vs {params.opponent_name}
                  </td>
                  <td className=" py-2">{params.league_name}</td>
                  <td className=" py-2">
                    {params.score} - {params.opponent_score}
                  </td>
                  <td className=" py-2">
                    <a href={`/main/${query.category}/${query.team}/player_detail/${query.id_player}/history/` + params.uuid}>
                      <BsThreeDotsVertical />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HistoryPlayer;
