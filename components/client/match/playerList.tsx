"use client";
import React, { useState, useEffect } from "react";
import { instance } from "@/config/axios";
import { useRouter } from "next/navigation";
import { BounceLoader } from "react-spinners";

type PageProps = {
  params: {
    category: string;
    team: string;
    detail: string;
  };
};

function PlayerList({ params: query }: PageProps) {
  const router = useRouter();
  const arr = [1, 2, 3, 4, 5, 6];
  console.log(arr.includes(2));
  // @ts-ignore
  const id_player = JSON.parse(localStorage.getItem("data_player"));
  const setPlayerPicked: String[] = [];
  const [dataLoading, setDataLoading] = useState(false);
  if (id_player !== null) {
    id_player.map((e: any) => {
      setPlayerPicked.push(e.playerId);
    });
  }
  const [data, setData] = useState({ data: { players: [] } });
  const importData = () => {
    setDataLoading(true);
    // @ts-ignore
    const playerData = JSON.parse(localStorage.getItem("data_player"));
    // @ts-ignore
    const match = JSON.parse(localStorage.getItem("match"));
    const matchData = { ...match, detailMatch: playerData };
    instance
      .post("/match", matchData)
      .then((result: Object) => {
        localStorage.removeItem("data_player");
        localStorage.removeItem("match");
        setDataLoading(false);
        alert("ok");
        router.push("/main");
      })
      .catch((err: Object) => {
        setDataLoading(false);
        alert("failed to import data");
        console.log(err);
      });
  };

  useEffect(() => {
    instance
      .get("club/p/" + query.team)
      .then((result: any) => {
        const res = result.data.data.players.filter((e: any) => {
          return e.role === "PLAYER" ? e : "";
        });
        // @ts-ignore
        setData({ data: { players: res } });
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="bg-white w-full  rounded-xl py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-5">
          {data.data.players.length > 0 &&
            data.data.players.map((value: any) => {
              return (
                <div key={value.id} className="flex flex-col w-full capitalize">
                  <div className="bg-[#F2F3F7] py-2 rounded-lg flex justify-between px-8 w-full items-center  ">
                    <div className="gap-5 items-center h-12 w- flex">
                      <h1 className="text-2xl font-bold  text-[#D00D00]">{value.number_of_player}</h1>
                      <div>
                        <p className="text-xs text-gray-400">golkiper</p>
                        <h2 className="text-md font-semibold   ">{value.fullname}</h2>
                      </div>
                    </div>
                    <input
                      id="green-checkbox"
                      type="checkbox"
                      checked={setPlayerPicked.includes(value.id)}
                      onChange={() => {
                        return 0;
                      }}
                      className="w-6 h-6 text-green-800 ring-green-800  border-green-800 rounded focus:ring-green-500"
                    />
                  </div>
                </div>
              );
            })}
        </div>
        {dataLoading ? (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center">
            <BounceLoader color="gray" size={20} />
          </div>
        ) : (
          <button className="bg-[#D00D00] h-10 rounded-lg mt-10 text-white opensans w-full" onClick={importData}>
            Import Data
          </button>
        )}
      </div>
    </>
  );
}

export default PlayerList;
