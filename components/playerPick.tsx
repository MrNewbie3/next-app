import React from "react";
import {GrFormNext} from 'react-icons/gr'

function PlayerPick() {
  return (
    <>
      <div className="bg-white px-10 w-full rounded-xl ">
        <div>
          <ul className=" flex text-gray-600 font-semibold justify-around max-w-[384px] h-12 items-center bg-[#F2F3F7]      drop-shadow-md rounded-lg  capitalize    ">
            <li>General match</li>
            <li className="bg-[#D00D00] text-white px-4 py-1 rounded-lg">
              player pick
            </li>
            <li>player list</li>
          </ul>
        </div>

        <h1 className="capitalize font-semibold flex mt-8 opensans text-xs text-gray-600">
           Payer Pick <span className="flex items-center"> <GrFormNext/></span><span className="text-black"> agung dwi min1</span>
          </h1>

        <div className="bg-white max-w-full p-2 rounded-lg mt-8  gap-5 mb-4   items-center h-12 w- flex">
          <h1 className="text-2xl font-bold  text-[#D00D00]">18</h1>
          <div>
            <p className="text-xs text-gray-400">golkiper</p>
            <h2 className="text-lg font-medium  ">dimas setiawan surya</h2>
          </div>
        </div>
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
                placeholder="e.g 90"
                value={""}
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
                placeholder="e.g 90"
                value={""}
                className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>

            <div className="  flex flex-col justify-start mt-4">
              <label
                htmlFor="label"
                className=" uppercase  opensans font-bold text-sm "
              >
                Fouls<span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="number"
                placeholder="e.g 90"
                value={""}
                className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
            <div className="  flex flex-col justify-start mt-4">
              <label
                htmlFor="label"
                className=" uppercase  opensans font-bold text-sm "
              >
                Yellow card<span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="number"
                placeholder="e.g 90"
                value={""}
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
                Total saves<span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="number"
                placeholder="e.g 90"
                value={""}
                className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>

            <div className="  flex flex-col justify-start mt-4">
              <label
                htmlFor="label"
                className=" uppercase  opensans font-bold text-sm "
              >
                Goal conceded<span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="number"
                placeholder="e.g 90"
                value={""}
                className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>

            <div className="  flex flex-col justify-start mt-4">
              <label
                htmlFor="label"
                className=" uppercase  opensans font-bold text-sm "
              >
                Punches<span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="number"
                placeholder="e.g 90"
                value={""}
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
                placeholder="e.g 90"
                value={""}
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
                placeholder="e.g 90"
                value={""}
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
                placeholder="e.g 90"
                value={""}
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
                placeholder="e.g 90"
                value={""}
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
                succesful passes<span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="number"
                placeholder="e.g 90"
                value={""}
                className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>

            <div className="  flex flex-col justify-start mt-4">
              <label
                htmlFor="label"
                className=" uppercase  opensans font-bold text-sm "
              >
                succesfull final third passes<span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="number"
                placeholder="e.g 90"
                value={""}
                className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>

            <div className="  flex flex-col justify-start mt-4">
              <label
                htmlFor="label"
                className=" uppercase  opensans font-bold text-sm "
              >
                Unsuccelful passes<span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="number"
                placeholder="e.g 90"
                value={""}
                className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>

            <div className="  flex flex-col justify-start mt-4">
              <label
                htmlFor="label"
                className=" uppercase  opensans font-bold text-sm "
              >
                Unsuccelful final third passes<span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="number"
                placeholder="e.g 90"
                value={""}
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
                tackle won<span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="number"
                placeholder="e.g 90"
                value={""}
                className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>

            <div className="  flex flex-col justify-start mt-4">
              <label
                htmlFor="label"
                className=" uppercase  opensans font-bold text-sm "
              >
                50 50s won<span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="number"
                placeholder="e.g 90"
                value={""}
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
                placeholder="e.g 90"
                value={""}
                className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>

            <div className="  flex flex-col justify-start mt-4">
              <label
                htmlFor="label"
                className=" uppercase  opensans font-bold text-sm "
              >
                Interception won<span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="number"
                placeholder="e.g 90"
                value={""}
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
                placeholder="e.g 90"
                value={""}
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
                placeholder="e.g 90"
                value={""}
                className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>

            <div className="  flex flex-col justify-start mt-4">
              <label
                htmlFor="label"
                className=" uppercase  opensans font-bold text-sm "
              >
                changes created<span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="number"
                placeholder="e.g 90"
                value={""}
                className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>

            <div className="  flex flex-col justify-start mt-4">
              <label
                htmlFor="label"
                className=" uppercase  opensans font-bold text-sm "
              >
                trought-balls<span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="number"
                placeholder="e.g 90"
                value={""}
                className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
            <div className="  flex flex-col justify-start mt-4">
              <label
                htmlFor="label"
                className=" uppercase  opensans font-bold text-sm "
              >
              assists<span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="number"
                placeholder="e.g 90"
                value={""}
                className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
          </div>
        </div>
        <button className="bg-[#D00D00] h-10 rounded-lg mt-10 text-white opensans w-full">
          Simpan
        </button>
      </div>
    </>
  );
}
export default PlayerPick;
