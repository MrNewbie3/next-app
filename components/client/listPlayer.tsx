"use client";
import Link from "next/link";
  import React from "react";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

type PageProps = {
  params: {
    category: string;
    team: string;
    detail: string;
  };
};

function ListPlayer({ params: query }: PageProps) {
  return (
    <>
      <div className="bg-white w-full  rounded-xl py-10">
        <div className="mb-8">
          <select name="" id="" className="bg-transparent  focus:outline-none ">
            <option value="" selected disabled>
              Search By Position
            </option>
            <option value="list1">jenis 1</option>
            <option value="list2">jenis 2</option>
            <option value="list3">jenis 3</option>
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2  gap-5">
          {data.map((key) => {
            return (
              <Link key={key} href={query.detail === "player" ? `/${query.category}/${query.team}/player_detail/${key}` : `/${query.category}/${query.team}/new_match/${key}`}>
                <div className="flex flex-col w-full capitalize">
                  <div className="bg-[#F2F3F7] py-2 rounded-lg flex justify-between px-8 w-full items-center  ">
                    <div className="gap-5 items-center h-12 w- flex">
                      <h1 className="text-2xl font-bold  text-[#D00D00]">18</h1>
                      <div>
                        <p className="text-xs text-gray-400">golkiper</p>
                        <h2 className="text-md font-semibold   ">dimas setiawan surya</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ListPlayer;
