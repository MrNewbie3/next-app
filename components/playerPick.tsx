"use client";
import Link from "next/link";
import { GrFormNext } from "react-icons/gr";
import React, { useState } from "react";

type PageProps = {
  params: {
    category: any;
    team: any;
    player: string;
  };
};

function PlayerPick({ params: player }: PageProps) {
  const [data, setData] = useState({
    minute_played: "",
    red_cards: "",
    fouls: "",
    yellow_cards: "",
    total_saves: "",
    goal_conceded_saves: "",
    punched_saves: "",
    insider_saves: "",
    caught_saves: "",
    outsider_saves: "",
    parried_saves: "",
    succes_passes: "",
    succes_final_third_passes: "",
    unsuccesful_passes: "",
    unsuccesful_final_thirf_passes: "",
    takle_won: "",
    fifty_won: "",
    duel_won: "",
    interception_won: "",
    touches_in_opponent_box: "",
    forward_passes: "",
    changes_created: "",
    throught_balls: "",
    assist: "",
    matchId: 1,
    playerId: 1,
  });
  async function postData(e: React.FormEvent) {
    e.preventDefault();
    const post = await fetch("http://localhost:4002/api/v1/match/d/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authentication:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImlhdCI6MTY4MzI1MzkxMiwiZXhwIjoxNjgzMjY0NzEyfQ.xsXBdEXHOxU8oETAfjA8opHefznxJNQOBD5rlCd5sbU",
      },
    });
    alert("tes");
    const res = await post.json();
    console.log(res);

    window.location.reload();
    if (!res.ok) console.log(res);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="px-8">
      <div className="bg-white w-full rounded-xl px-10 py-10 ">
        <Link href={`/${player.category}/${player.team}/new_match/`}>
          <button className="bg-[#137403] px-4 py-2 text-white mb-10 rounded-lg">
            Kembali
          </button>
        </Link>
        <div>
          <h1 className="opensans font-bold text-xl">Tambah Match </h1>
          <h4 className="font-semibold">
            Lengkapi data di bawah,jika ada ({" "}
            <span className="text-[#D00D00] ">* </span>) maka wajib diisi{" "}
          </h4>
        </div>
        <div className="mt-8">
          <ul className=" flex text-gray-600 font-semibold justify-around max-w-[384px] h-12 items-center bg-[#F2F3F7]      drop-shadow-md rounded-lg  capitalize    ">
            <li className="bg-[#D00D00] text-white px-4 py-1 rounded-lg">
              player pick
            </li>
          </ul>
        </div>

        <h1 className="capitalize font-semibold flex mt-8 opensans text-xs text-gray-600">
          Payer Pick{" "}
          <span className="flex items-center">
            {" "}
            <GrFormNext />
          </span>
          <span className="text-black"> agung dwi min1</span>
        </h1>

        <div className="bg-white max-w-full p-2 rounded-lg mt-8  gap-5 mb-4   items-center h-12 w- flex">
          <h1 className="text-2xl font-bold  text-[#D00D00]">18</h1>
          <div>
            <p className="text-xs text-gray-400 font-semibold">golkiper</p>
            <h2 className="text-lg font-semibold  ">dimas setiawan surya</h2>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            postData(e);
          }}
        >
          <div className=" input_file_div mt-10   max-lg:flex-col ">
            <h1 className="font-bold text-lg">General</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
              <div className="  flex flex-col justify-start mt-4">
                <label
                  htmlFor="label"
                  className=" uppercase  opensans font-bold text-sm "
                >
                  Minutes played<span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="number"
                  name="minute_played"
                  placeholder="e.g 180"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.minute_played}
                  className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>

              <div className="  flex flex-col justify-start mt-4">
                <label
                  htmlFor="label"
                  className=" uppercase  opensans font-bold text-sm "
                >
                  Red card<span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="number"
                  name="red_cards"
                  placeholder="e.g 90"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.red_cards}
                  className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>

              <div className="  flex flex-col justify-start mt-4">
                <label
                  htmlFor="label"
                  className=" uppercase  opensans font-bold text-sm "
                >
                  fouls<span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="number"
                  name="fouls"
                  placeholder="e.g 90"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.fouls}
                  className=" bg-[#F2F3F7]  h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>
              <div className="  flex flex-col justify-start mt-4">
                <label
                  htmlFor="label"
                  className=" uppercase  opensans font-bold text-sm "
                >
                  yellow card<span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="number"
                  name="yellow_cards"
                  placeholder="e.g 90"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.yellow_cards}
                  className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>
            </div>

            <h1 className="font-bold text-lg mt-8">Goalkeeping</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="  flex flex-col justify-start mt-4">
                <label
                  htmlFor="label"
                  className=" uppercase  opensans font-bold text-sm "
                >
                  total saves<span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="number"
                  name="total_saves"
                  placeholder="e.g 90"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.total_saves}
                  className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>

              <div className="  flex flex-col justify-start mt-4">
                <label
                  htmlFor="label"
                  className=" uppercase  opensans font-bold text-sm "
                >
                  goal conceded<span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="number"
                  name="goal_conceded_saves"
                  placeholder="e.g 90"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.goal_conceded_saves}
                  className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>

              <div className="  flex flex-col justify-start mt-4">
                <label
                  htmlFor="label"
                  className=" uppercase  opensans font-bold text-sm "
                >
                  punced_saves<span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="number"
                  name="punched_saves"
                  placeholder="e.g 90"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.punched_saves}
                  className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>
            </div>

            <h1 className="font-bold text-lg mt-8">Saves</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="  flex flex-col justify-start mt-4">
                <label
                  htmlFor="label"
                  className=" uppercase  opensans font-bold text-sm "
                >
                  inside the box<span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="number"
                  name="insider_saves"
                  placeholder="e.g 90"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.insider_saves}
                  className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>

              <div className="  flex flex-col justify-start mt-4">
                <label
                  htmlFor="label"
                  className=" uppercase  opensans font-bold text-sm "
                >
                  save caught<span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="number"
                  name="caught_saves"
                  placeholder="e.g 90"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.caught_saves}
                  className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>

              <div className="  flex flex-col justify-start mt-4">
                <label
                  htmlFor="label"
                  className=" uppercase  opensans font-bold text-sm "
                >
                  outside the box<span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="number"
                  name="outsider_saves"
                  placeholder="e.g 90"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.outsider_saves}
                  className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>

              <div className="  flex flex-col justify-start mt-4">
                <label
                  htmlFor="label"
                  className=" uppercase  opensans font-bold text-sm "
                >
                  save parried<span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="number"
                  name="parried_saves"
                  placeholder="e.g 90"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.parried_saves}
                  className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>
            </div>

            <h1 className="font-bold text-lg mt-8">Passing</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="  flex flex-col justify-start mt-4">
                <label
                  htmlFor="label"
                  className=" uppercase  opensans font-bold text-sm "
                >
                  succesful Passing<span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="number"
                  name="succes_passes"
                  placeholder="e.g 90"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.succes_passes}
                  className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>

              <div className="  flex flex-col justify-start mt-4">
                <label
                  htmlFor="label"
                  className=" uppercase  opensans font-bold text-sm "
                >
                  succesful final third Passes
                  <span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="number"
                  name="succes_final_third_passes"
                  placeholder="e.g 90"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.succes_final_third_passes}
                  className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>

              <div className="  flex flex-col justify-start mt-4">
                <label
                  htmlFor="label"
                  className=" uppercase  opensans font-bold text-sm "
                >
                  unsuccesful passes<span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="number"
                  name="unsuccesful_passes"
                  placeholder="e.g 90"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.unsuccesful_passes}
                  className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>

              <div className="  flex flex-col justify-start mt-4">
                <label
                  htmlFor="label"
                  className=" uppercase  opensans font-bold text-sm "
                >
                  unsuccesful final third passes
                  <span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="number"
                  name="unsuccesful_final_thirf_passes"
                  placeholder="e.g 90"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.unsuccesful_final_thirf_passes}
                  className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>
            </div>

            <h1 className="font-bold text-lg mt-8">Defending</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="  flex flex-col justify-start mt-4">
                <label
                  htmlFor="label"
                  className=" uppercase  opensans font-bold text-sm "
                >
                  takle won<span className="text-[#D00D00]">*</span>
                </label>
                <input
                  name="takle_won"
                  type="number"
                  placeholder="e.g 90"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.takle_won}
                  className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>

              <div className="  flex flex-col justify-start mt-4">
                <label
                  htmlFor="label"
                  className=" uppercase  opensans font-bold text-sm "
                >
                  50-50s won<span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="number"
                  name="fifty_won"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  placeholder="e.g 90"
                  value={data.fifty_won}
                  className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>

              <div className="  flex flex-col justify-start mt-4">
                <label
                  htmlFor="label"
                  className=" uppercase  opensans font-bold text-sm "
                >
                  duel won<span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="number"
                  name="duel_won"
                  placeholder="e.g 90"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.duel_won}
                  className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>

              <div className="  flex flex-col justify-start mt-4">
                <label
                  htmlFor="label"
                  className=" uppercase  opensans font-bold text-sm "
                >
                  interceptions won<span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="number"
                  name="interception_won"
                  placeholder="e.g 90"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.interception_won}
                  className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>
            </div>

            <h1 className="font-bold text-lg mt-8">Attacking</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="  flex flex-col justify-start mt-4">
                <label
                  htmlFor="label"
                  className=" uppercase  opensans font-bold text-sm "
                >
                  touches in oppo box<span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="number"
                  name="touches_in_opponent_box"
                  placeholder="e.g 90"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.touches_in_opponent_box}
                  className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>

              <div className="  flex flex-col justify-start mt-4">
                <label
                  htmlFor="label"
                  className=" uppercase  opensans font-bold text-sm "
                >
                  forward passes<span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="number"
                  name="forward_passes"
                  placeholder="e.g 90"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.forward_passes}
                  className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>

              <div className="  flex flex-col justify-start mt-4">
                <label
                  htmlFor="label"
                  className=" uppercase  opensans font-bold text-sm "
                >
                  change created<span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="number"
                  name="changes_created"
                  placeholder="e.g 90"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.changes_created}
                  className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>

              <div className="  flex flex-col justify-start mt-4">
                <label
                  htmlFor="label"
                  className=" uppercase  opensans font-bold text-sm "
                >
                  throught-balls<span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="number"
                  name="throught_balls"
                  placeholder="e.g 90"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.throught_balls}
                  className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>
              <div className="  flex flex-col justify-start mt-4">
                <label
                  htmlFor="label"
                  className=" uppercase  opensans font-bold text-sm "
                >
                  assist<span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="number"
                  name="assist"
                  placeholder="e.g 90"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.assist}
                  className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>
            </div>
            <button className="bg-[#D00D00] h-10 rounded-lg mt-10 text-white opensans w-full">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default PlayerPick;
