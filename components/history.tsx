import Link from "next/link";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import { IoMdArrowDropdown } from "react-icons/io";
type PageProps = {
  params: {
    detail: any;
    team: any;
    category: any;
    query: string;
  };
};

async function getData() {
  const res = await fetch("http://localhost:4002/api/v1/match/", {
    cache: "no-store",
    next: {
      revalidate: 10,
    },
    headers: {
      Authentication:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjYsImlhdCI6MTY4MzM3NDk5MywiZXhwIjoxNjgzMzg1NzkzfQ.hqLAUaJbFsfLY_p0BivmTdFiBvFE8NQmVaOK__q5ilM",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data = " + res.statusText);
  }
  return res.json();
}

async function History({ params: query }: PageProps) {
  let data = await getData();

  return (
    <div className=" mb-6 w-full">
      {
        // @ts-ignore
        data.success ? "" : (data = [])
      }
      <div className="flex justify-between w-full  items-center ">
        <div className="h-16 max-w-[650px] px-10 py-2 w-[650px] rounded-lg drop-shadow-md  bg-white">
          <div className="flex text-xs font-semibold  ">
            <p> 16 juni 2023 -</p>
            <p>Sekarang</p>
          </div>
          <h1 className="text-xl font-bold ">MOKLET</h1>
        </div>

        <button className="hover:bg-[#D00D00] flex items-center gap-2 bg-white ring-1 capitalize font-semibold ring-[#D00D00] text-[#D00D00] px-4 rounded-lg h-9 hover:text-white active:bg-[#D00D00] active:text-white   ">
          2023/2024 <IoMdArrowDropdown />
        </button>
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
          {data.data.map((value: any, index: number) => (
            <tbody className="font-semibold capitalize">
              <tr>
                <td className=" py-2">{index + 1}</td>
                <td className=" py-2">{value.match_date}</td>
                <td className=" py-2">Chelsea vs.{value.opponent_name}</td>
                <td className=" py-2">{value.league_name}</td>
                <td className=" py-2">2-1</td>
                <td className=" py-2">
                  <Link
                    href={`/${query.category}/${query.team}/${query.detail}/league`}
                  >
                    <BsThreeDotsVertical />
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
        </table>b
      </div>
    </div>
  );
}

export default History;
