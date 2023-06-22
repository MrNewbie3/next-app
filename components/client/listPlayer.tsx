"use client";
import { instance } from "../../config/axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsPencil, BsPencilFill, BsTrash2Fill, BsTrashFill } from "react-icons/bs";
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
  const handleDelete = (e: string) => {
    instance
      .delete("player/" + e)
      .then((result: any) => {
        setTimeout(() => {
          typeof window != undefined ? window.location.reload() : undefined;
        }, 3000);
        return alert("success delete data");
      })
      .catch((err: any) => {
        alert("failed to delete data: " + err.message);
        return alert("please try again");
      });
  };
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
                <div className="flex flex-col w-full capitalize">
                  <div className="bg-[#F2F3F7] py-2 rounded-lg flex gap-5 px-8 w-full items-center  ">
                    <Link
                      key={index}
                      href={query.detail === "player" ? `/main/${query.category}/${query.team}/player_detail/${value.uuid}` : `/main/${query.category}/${query.team}/new_match/${value.uuid}`}
                      className="w-full flex items-center gap-x-5"
                    >
                      <h1 className="text-3xl font-bold  text-[#D00D00]">{value.number_of_player}</h1>
                      <div className="gap-5 items-center h-12 w-full flex">
                        <div>
                          <p className="text-xs text-gray-400">{value.position}</p>
                          <h2 className="text-md font-semibold   ">{value.fullname}</h2>
                        </div>
                      </div>
                    </Link>
                    <div className="flex flex-row gap-x-5 justify-end items-center">
                      <Link href={`/main/${query.category}/${query.team}/edit_player/${value.uuid}`} className=" cursor-pointer">
                        <BsPencilFill />
                      </Link>
                      <div
                        className=" cursor-pointer"
                        onClick={() => {
                          handleDelete(value.uuid);
                        }}
                      >
                        <BsTrashFill />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="wrapper px-5 bg-black"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListPlayer;
