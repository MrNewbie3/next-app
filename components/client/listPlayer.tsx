"use client";
import axios from "../../config/axios";
import Link from "next/link";
import Image from "next/image";
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
    if (data.success === null) {
      axios
        .get("club/p/" + query.team)
        .then((datas: any) => {
          setData(datas.data);
        })
        .catch((err: any) => {
          console.log(err);
        });
    }
  });

  return (
    <div>
      {data.success === null && <h1>Loading</h1>}
      {!(data !== null && data.success && data.data.players.length !== 0) ? (
        ""
      ) : (
        <div className="bg-white w-full  rounded-xl py-10">
          <div className="mb-8">
            <select name="" id="" defaultValue={"Search By Position"} className="bg-transparent  focus:outline-none ">
              <option value="list1">jenis 1</option>
              <option value="list2">jenis 2</option>
              <option value="list3">jenis 3</option>
            </select>
          </div>

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
                          <p className="text-xs text-gray-400">golkiper</p>
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
