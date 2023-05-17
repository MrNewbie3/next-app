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
        .get("player/" + query.team)
        .then((result: any) => {
          setData(result.data);
        })
        .catch((err: any) => {
          console.log(err);
        });
    }
  });

  return (
    <div>
      {data === null && <h1>Loading</h1>}
      {!(data !== null && data.success && data.data.players.length !== 0) ? (
        ""
      ) : (
        <div className="bg-white w-full  rounded-xl py-10">
          <div className="mb-8">
            <select
              name=""
              id=""
              className="bg-transparent  focus:outline-none "
            >
              <option value="" selected disabled>
                Search By Position
              </option>
              <option value="list1">jenis 1</option>
              <option value="list2">jenis 2</option>
              <option value="list3">jenis 3</option>
            </select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2  gap-5">
            {data.data.players.map((value: any) => {
              return (
                <Link key={value} href={query.detail === "player" ? `/main/${query.category}/${query.team}/player_detail/${value.uuid}` : `/main/${query.category}/${query.team}/new_match/${value.uuid}`}>
                  <div className="flex flex-col w-full capitalize">
                    <div className="bg-[#F2F3F7] py-2 rounded-lg flex justify-between px-8 w-full items-center  ">
                      <div className="gap-5 items-center h-12 w- flex">
                        <div><Image
                          src={value.photo_player}
                          alt="My Image"
                          width={50}
                          height={50}
                        /></div>
                        
                        
                        <div>
                          <p className="text-xs text-gray-400">golkiper</p>
                          <h2 className="text-md font-semibold   ">
                            {value.fullname}
                          </h2>
                          <h1 className="text-2xl font-bold  text-[#D00D00]">
                          {value.number_of_player}
                        </h1> 
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
