"use client";
import { instance } from "../../config/axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
type PageProps = {
  params: {
    category: String;
    team: String;
    detail: String;
  };
};

function ListPlayer({ params: query }: PageProps) {
  let [data, setData] = useState({ success: null, data: { players: [] } });
  useEffect(() => {
    instance
      .get("club/p/" + query.team)
      .then((datas: any) => {
        const res = datas.data.data.players.filter((e: any) => {
          return e.role === "PLAYER" ? e : "";
        });

        // @ts-ignore
        setData((prevstate) => ({
          ...prevstate,
          success: true,
          data: { players: res },
        }));
      })
      .catch((err: any) => {
        throw new Error(err);
      });
  }, []);

  return (
    <div>
      {data.success === null && <h1>Loading</h1>}
      {!(data !== null && data.success && data.data.players.length !== 0) ? (
        ""
      ) : (
        <div className="bg-white w-full  rounded-xl py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-5">
            {/* @ts-ignore */}
            {data.data.players.map((value: any, index: number) => {
              return (
                <Link key={index} href={query.detail === "player" ? `/main/${query.category}/${query.team}/player_detail/${value.uuid}` : `/main/${query.category}/${query.team}/new_match/${value.uuid}`}>
                  <div className="flex flex-col w-full capitalize">
                    <div className="bg-[#F2F3F7] py-2 rounded-lg flex gap-5 px-8 w-full items-center  ">
                      <h1 className="text-3xl font-bold  text-[#D00D00]">{value.number_of_player}</h1>
                      <div className="gap-5 items-center h-12 w- flex">
                        <div>
                          <p className="text-xs text-gray-400">{value.position}</p>
                          <h2 className="text-md font-semibold   ">{value.fullname}</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default ListPlayer;
