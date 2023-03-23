import React from "react";

export default function GeneralMatch() {
  return (
    <form>
      <div className=" input_file_div mt-10 uper flex gap-x-5 justify-between  max-lg:flex-col ">
        <div className="w-full">
          <div className="  flex flex-col justify-start mt-4">
            <label htmlFor="label" className=" uppercase  opensans font-bold ">
              Nama lawan<span className="text-[#D00D00]">*</span>
            </label>
            <input type="text" placeholder="e.g Mancester United" value={""} className=" bg-[#F2F3F7] h-10 border-none w-full   focus:outline-none  p-2 mt-2 rounded-lg font-semibold " />
          </div>

          <div className="flex flex-col justify-start mt-4">
            <label htmlFor="label" className=" uppercase  opensans font-bold ">
              liga <span className="text-[#D00D00]">*</span>
            </label>
            <input type="text" placeholder="e.g Red Devil" value={""} className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold " />
          </div>
          <div className="flex flex-col justify-start mt-4">
            <label htmlFor="label" className=" uppercase opensans font-bold ">
              tanggal tanding
            </label>
            <input type="date" placeholder="e.g MU " value={""} className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold " />
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col justify-start mt-4">
            <label htmlFor="label" className="uppercase opensans font-bold ">
              ball position <span className="lowercase text-xs">(%)</span>
              <span className="text-[#D00D00]">*</span>
            </label>
            <input type="number" placeholder="e.g 180" value={""} className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold " />
          </div>
          <div className="flex flex-col justify-start mt-4">
            <label htmlFor="label" className="uppercase opensans font-bold ">
              lost ball position <span className="lowercase text-xs">(%)</span> <span className="text-[#D00D00]">*</span>
            </label>
            <input type="number" value={""} placeholder="e.g 58" className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold " />
          </div>
          <div className="flex flex-col justify-start mt-4">
            <label htmlFor="label" className="uppercase opensans font-bold ">
              corner kick
              <span className="text-[#D00D00]">*</span>
            </label>
            <input type="number" placeholder="e.g 58" value={""} className=" bg-[#F2F3F7]  h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold " />
          </div>
        </div>
      </div>
      <button className="bg-[#D00D00] h-10 rounded-lg mt-10 text-white opensans w-full">Simpan</button>
    </form>
  );
}
