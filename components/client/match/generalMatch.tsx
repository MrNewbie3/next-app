"use client";
import { instance } from "@/config/axios";
import React, { useEffect, useState } from "react";

type PageProps = {
  params: {
    category: String;
    team: String;
  };
};

export default function GeneralMatch({ params: detail }: PageProps) {
  const [data, setData] = useState({
    opponent_name: "",
    referee: "",
    match_time: 0,
    location: "",
    league_name: "",
    ball_position: "",
    lost_ball_position: "",
    corner_kick_position: "",
    match_date: "",
    clubId: detail.team,
    detailMatch: 0,
    opponent_score: 0,
    score: 0,
  });

  async function postData(e: React.FormEvent) {
    e.preventDefault();
    if (data.opponent_name === "") {
      return alert("data tidak boleh kosong");
    }
    localStorage.setItem("match", JSON.stringify(data));
    return alert("berhasil menyimpan data");
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData((prevState) => ({
      ...prevState,
      [name]: name.toLowerCase() === "opponent_score" || name.toLowerCase() === "score" ? Number(value) : value,
    }));
  };

  return (
    <>
      {data.clubId !== null ? (
        <form
          onSubmit={(e) => {
            postData(e);
          }}
        >
          <div className=" input_file_div mt-10 uper flex gap-x-5 justify-between  max-lg:flex-col ">
            <div className="w-full">
              <div className="  flex flex-col justify-start mt-4">
                <label htmlFor="label" className=" uppercase  opensans font-bold ">
                  Nama lawan<span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="text"
                  name="opponent_name"
                  placeholder="e.g Mancester United"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.opponent_name}
                  className=" bg-[#F2F3F7] h-10 border-none w-full   focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>

              <div className="flex flex-col justify-start mt-4">
                <label htmlFor="label" className=" uppercase  opensans font-bold ">
                  liga <span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="text"
                  name="league_name"
                  placeholder="e.g Red Devil"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.league_name}
                  className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>
              <div className="flex flex-col justify-start mt-4">
                <label htmlFor="label" className=" uppercase  opensans font-bold ">
                  skor <span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="number"
                  name="score"
                  placeholder="e.g Red Devil"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.score}
                  className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>
              <div className="flex flex-col justify-start mt-4">
                <label htmlFor="label" className=" uppercase  opensans font-bold ">
                  skor lawan <span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="number"
                  name="opponent_score"
                  placeholder="e.g Red Devil"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.opponent_score}
                  className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>
              <div className="flex flex-col justify-start mt-4">
                <label htmlFor="label" className=" uppercase opensans font-bold ">
                  tanggal tanding
                </label>
                <input
                  type="datetime-local"
                  step={"1"}
                  name="match_date"
                  placeholder="e.g MU "
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.match_date}
                  className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-col justify-start mt-4">
                <label htmlFor="label" className="uppercase opensans font-bold ">
                  referee
                  <span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="text"
                  name="referee"
                  placeholder="e.g 180"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.referee}
                  className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>
              <div className="flex flex-col justify-start mt-4">
                <label htmlFor="label" className="uppercase opensans font-bold ">
                  match time
                  <span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="number"
                  name="match_time"
                  placeholder="e.g 180"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.match_time}
                  className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>
              <div className="flex flex-col justify-start mt-4">
                <label htmlFor="label" className="uppercase opensans font-bold ">
                  location
                  <span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="e.g City"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.location}
                  className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>
              <div className="flex flex-col justify-start mt-4">
                <label htmlFor="label" className="uppercase opensans font-bold ">
                  ball position <span className="lowercase text-xs">(%)</span>
                  <span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="number"
                  name="ball_position"
                  placeholder="e.g 180"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.ball_position}
                  className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>
              <div className="flex flex-col justify-start mt-4">
                <label htmlFor="label" className="uppercase opensans font-bold ">
                  lost ball position <span className="lowercase text-xs">(%)</span> <span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="number"
                  name="lost_ball_position"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.lost_ball_position}
                  placeholder="e.g 58"
                  className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>
              <div className="flex flex-col justify-start mt-4">
                <label htmlFor="label" className="uppercase opensans font-bold ">
                  corner kick
                  <span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="number"
                  name="corner_kick_position"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  placeholder="e.g 58"
                  value={data.corner_kick_position}
                  className=" bg-[#F2F3F7]  h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>
            </div>
          </div>
          <button className="bg-[#D00D00] h-10 rounded-lg mt-10 text-white opensans w-full" type="submit">
            Simpan
          </button>
        </form>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
}
