"use client";
import React, { useState } from "react";

export default function PlayerMatchDetail() {
  const [data, setData] = useState({
    minutes_played: "",
    red_card: "",
    fouls: "",
    yellow_card: "",
    total_saves: "",
    goal_conceded: "",
    punches: "",
    inside_the_box: "",
    save_caught: "",
    outside_the_box: "",
    save_parried: "",
    succesful_pass: "",
    succesful_final: "",
    unsuccesful_pass: "",
    unsuccesful_final: "",
    takle_won: "",
    s_won: "",
    duel: "",
    interception: "",
    touches: "",
    forward: "",
    change: "",
    throught: "",
    assist: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form>
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
              name="minutes_played"
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="e.g 90"
              value={data.minutes_played}
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
              name="red_card"
              placeholder="e.g 90"
              onChange={(e) => {
                handleChange(e);
              }}
              value={data.red_card}
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
              className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
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
              name="yellow_card"
              placeholder="e.g 90"
              onChange={(e) => {
                handleChange(e);
              }}
              value={data.yellow_card}
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
              name="goal_conceded"
              placeholder="e.g 90"
              onChange={(e) => {
                handleChange(e);
              }}
              value={data.goal_conceded}
              className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
            />
          </div>

          <div className="  flex flex-col justify-start mt-4">
            <label
              htmlFor="label"
              className=" uppercase  opensans font-bold text-sm "
            >
              punches<span className="text-[#D00D00]">*</span>
            </label>
            <input
              type="number"
              name="punches"
              placeholder="e.g 90"
              onChange={(e) => {
                handleChange(e);
              }}
              value={data.punches}
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
              name="inside_the_box"
              placeholder="e.g 90"
              onChange={(e) => {
                handleChange(e);
              }}
              value={data.inside_the_box}
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
              name="save_caught"
              placeholder="e.g 90"
              onChange={(e) => {
                handleChange(e);
              }}
              value={data.save_caught}
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
              name="outside_the_box"
              placeholder="e.g 90"
              onChange={(e) => {
                handleChange(e);
              }}
              value={data.outside_the_box}
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
              name="save_parried"
              placeholder="e.g 90"
              onChange={(e) => {
                handleChange(e);
              }}
              value={data.save_parried}
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
              name="succesful_pass"
              placeholder="e.g 90"
              onChange={(e) => {
                handleChange(e);
              }}
              value={data.succesful_pass}
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
              name="succesful_final"
              placeholder="e.g 90"
              onChange={(e) => {
                handleChange(e);
              }}
              value={data.succesful_final}
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
              name="unsuccesful_pass"
              placeholder="e.g 90"
              onChange={(e) => {
                handleChange(e);
              }}
              value={data.unsuccesful_pass}
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
              name="unsuccesful_final"
              placeholder="e.g 90"
              onChange={(e) => {
                handleChange(e);
              }}
              value={data.unsuccesful_final}
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
              name="s_won"
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="e.g 90"
              value={data.s_won}
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
              name="duel"
              placeholder="e.g 90"
              onChange={(e) => {
                handleChange(e);
              }}
              value={data.duel}
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
              name="interception"
              placeholder="e.g 90"
              onChange={(e) => {
                handleChange(e);
              }}
              value={data.interception}
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
              name="touches"
              placeholder="e.g 90"
              onChange={(e) => {
                handleChange(e);
              }}
              value={data.touches}
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
              name="forward"
              placeholder="e.g 90"
              onChange={(e) => {
                handleChange(e);
              }}
              value={data.forward}
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
              name="change"
              placeholder="e.g 90"
              onChange={(e) => {
                handleChange(e);
              }}
              value={data.change}
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
              name="throught"
              placeholder="e.g 90"
              onChange={(e) => {
                handleChange(e);
              }}
              value={data.throught}
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
  );
}
