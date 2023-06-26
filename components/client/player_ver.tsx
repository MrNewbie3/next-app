"use client";
import React, { useState, useEffect } from "react";
import { instance } from "@/config/axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ClipLoader } from "react-spinners";

type PageProps = {
  params: {
    category: string;
    team: string;
    detail: string;
  };
};

function PlayerVer({ params: query }: PageProps) {
  const router = useRouter();
  const [data, setData] = useState({ data: { players: [] } });
  const [loading, setLoading] = useState(false);
  const [datas, setDatas] = useState({ data: {} });
  const importData = (data: Object) => {
    setLoading(true);
    instance
      .put("/player/verify/player", data)
      .then((result: Object) => {
        setLoading(false);
        alert("success verify player");
      })
      .catch((err: Object) => {
        setLoading(false);
        alert("failed to verify player");
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
    instance
      .get("club/" + query.team)
      .then((result: any) => {
        // @ts-ignore
        setDatas(result.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed z-20 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-white">
            <ClipLoader color="#ffffff" loading={true} size={50} />
          </div>
        </div>
      )}
      <div className="flex justify-between w-full items-center mb-5">
        <div className="h-16  px-10 py-2 min-w-[650px] w-fit rounded-lg drop-shadow-md  bg-white">
          <div className="flex text-xs font-semibold  ">
            {/* @ts-ignore */}
            <p>{datas.data.club_established}</p>
          </div>
          {/* @ts-ignore */}
          <h1 className="text-xl font-bold uppercase">{datas.data.club_name}'s player verification</h1>
        </div>
        <Link href={`/main/${query.category}/${query.team}/verification/pdf`}>
          <button className="hover:bg-[#D00D00] bg-white ring-1 capitalize font-semibold ring-[#D00D00] text-[#D00D00] px-8 rounded-lg h-9 hover:text-white active:bg-[#D00D00] active:text-white   "> Download PDF</button>
        </Link>
      </div>
      <div className="bg-white w-full  rounded-xl p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-5">
          {data.data.players.length > 0 &&
            data.data.players.map((value: any) => {
              return (
                <div key={value.id} className="flex flex-col w-full capitalize">
                  <div className="bg-[#F2F3F7] py-2 rounded-lg flex justify-between px-8 w-full items-center  ">
                    <div className="gap-5 items-center h-12 w- flex">
                      <h1 className="text-2xl font-bold  text-[#D00D00]">{value.number_of_player}</h1>
                      <p className="text-xs text-gray-400">{value.position}</p>
                      <div>
                        <h2 className="text-md font-semibold">{value.fullname}</h2>
                        <Link target="_blank" href={"https://instagram.com/" + value.nickname.replace("@", "")}>
                          <h2 className="text-md font-semibold lowercase">{value.nickname}</h2>
                        </Link>
                      </div>
                      <h2 className="font-semibold text-xs text-gray-500">{value.is_verified ? "terverifikasi" : "belum di verifikasi"}</h2>
                      <h2 className="font-semibold text-xs lowercase text-gray-500">{value.is_league ? "eks liga" : ""}</h2>
                    </div>
                    <input
                      id="green-checkbox"
                      type="checkbox"
                      checked={value.is_verified}
                      onChange={(e) => {
                        if (e.target.checked) {
                          importData({
                            playerIds: [value.uuid],
                            isVerified: true,
                          });
                        }
                      }}
                      className="w-6 h-6 text-green-800 ring-green-800  border-green-800 rounded focus:ring-green-500"
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default PlayerVer;
