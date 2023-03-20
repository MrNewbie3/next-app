import React from "react";
import { FiDownload } from "react-icons/fi";
function AddExercise() {
  return (
    <>
      <div className="bg-white w-full rounded-xl px-10 py-10">
      <div className=" flex gap-4">
          <button className="bg-[#137403] px-4  py-2 text-white mb-10 rounded-lg">
            Kembali
          </button>
          <button className="bg-[#1790FF] px-8   py-2 text-white mb-10 rounded-lg">
            Edit
          </button>
          <button className="bg-[#2846AF] flex items-center gap-2 px-4 py-2 text-white mb-10 rounded-lg">
            Download
            <FiDownload />
          </button>
        </div>
        <div>
          <h4 className="font-semibold capitalize">
          Jumat <span>3 Februari 2023</span>
          </h4>
          <h1 className="opensans font-bold text-xl">Latihan Fisik</h1>
        </div>

        <div className=" input_file_div mt-10 grid grid-cols-1 md:grid-cols-2 gap-5   max-md:flex-col ">
          <div>
            <div className="  flex flex-col justify-start mt-4">
              <label
                htmlFor="label"
                className=" uppercase  opensans font-bold text-sm "
              >
                Nama Latihan
              </label>
              <input
                type="text"
                placeholder="e.g Mancester United"
                value={""}
                className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>

            <div className="flex flex-col justify-start mt-4 text-sm">
              <label
                htmlFor="label"
                className=" uppercase  opensans font-bold "
              >
                Kategori
              </label>
              <input
                type="text"
                placeholder="e.g Red Devil"
                value={""}
                className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
            <div className="flex flex-col justify-start mt-4 text-sm">
              <label htmlFor="label" className=" uppercase opensans font-bold ">
                identitas
              </label>
              <input
                type="text"
                placeholder="e.g MU "
                value={""}
                className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
            <div className="flex flex-col justify-start mt-4 text-sm">
              <label htmlFor="label" className="uppercase opensans font-bold ">
                durasi (menit)
              </label>
              <input
                type="number"
                placeholder="e.g Manchester"
                value={""}
                className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
              
            </div>
            <div className="flex flex-col justify-start mt-4 text-sm">
              <label htmlFor="label" className="uppercase opensans font-bold ">
                Jurnal repetesi
              </label>
              <input
                type="text"
                placeholder="e.g Manchester"
                value={""}
                className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-start mt-4 text-sm">
              <label htmlFor="label" className="uppercase opensans font-bold ">
                deskripsi
              </label>
              <textarea
                
            
                className=" bg-[#F2F3F7] h-32 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              ></textarea>

            </div>
            <div className="flex flex-col justify-start mt-3 text-sm">
              <label htmlFor="label" className="uppercase opensans font-bold ">
                jumlah pemain <span className="lowercase text-xs">(cm)</span> 
              </label>
              <input
                type="number"
                value={""}
                placeholder="e.g 58"
                className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
        
            <div className="flex flex-col justify-start mt-4 text-sm  ">
              <label htmlFor="label" className="uppercase opensans font-bold ">
                foto latihan
              </label>
              <input
                type="file"
                value={""}
                className=" block w-full outline-none file:h-full file:bg-[#dddddd] file:border-none file:w-[118px] h-10 mt-2 text-gray-900 border rounded-lg cursor-pointer bg-[#F2F3F7] focus:outline-none  "
              />
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
}

export default AddExercise;
