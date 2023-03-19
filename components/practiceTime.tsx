import React from "react";
import { FiDownload } from "react-icons/fi";

function PraticeTime() {
  return (
    <>
      <div className="bg-white w-full  rounded-xl px-10 py-10">
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
          <h1 className="opensans font-bold text-xl capitalize">
            Jadwal lengkap program latihan{" "}
          </h1>
          <h4 className="font-semibold">
            Data di bawah berisi data yang sudah lewat dan yang akan datang
          </h4>
        </div>

        <div>
          <ul className=" flex text-gray-600 font-semibold justify-around max-w-[214px] h-12 mt-8 items-center bg-[#F2F3F7] rounded-lg  capitalize    ">
            <li className="bg-[#D00D00] text-white px-4 py-1 rounded-lg">
              History
            </li>
            <li>Upcomming</li>
          </ul>
        </div>

        <div className="grid grid-cols-2 mt-8">
          <div className="bg-[#F2F3F7] max-w-[470px] p-2 rounded-lg  gap-5 mb-4   items-center h-12 w- flex">
            <h1 className="text-2xl font-bold  text-[#D00D00]">18</h1>
            <div>
              <div className="flex gap-1">
                <p className="text-xs text-[#137403] font-bold -mb-1">Fisik</p>
                <p className="text-xs text-yellow-400 font-bold -mb-1">
                  Fitnes
                </p>
                <p className="text-xs text-blue-700 font-bold -mb-1">Teknik</p>
              </div>

              <h2 className="text-base font-medium  capitalize">
                Jumat,<span>10 Maret 2023</span>
              </h2>
            </div>
          </div>
          <div className="bg-[#F2F3F7] max-w-[470px] p-2 rounded-lg  gap-5 mb-4   items-center h-12 w- flex">
            <h1 className="text-2xl font-bold  text-[#D00D00]">18</h1>
            <div>
              <div className="flex gap-1">
                <p className="text-xs text-[#137403] font-bold -mb-1">Fisik</p>
                <p className="text-xs text-yellow-400 font-bold -mb-1">
                  Fitnes
                </p>
                <p className="text-xs text-blue-700 font-bold -mb-1">Teknik</p>
              </div>

              <h2 className="text-base font-medium  capitalize">
                Jumat,<span>10 Maret 2023</span>
              </h2>
            </div>
          </div>
          <div className="bg-[#F2F3F7] max-w-[470px] p-2 rounded-lg  gap-5 mb-4   items-center h-12 w- flex">
            <h1 className="text-2xl font-bold  text-[#D00D00]">18</h1>
            <div>
              <div className="flex gap-1">
                <p className="text-xs text-[#137403] font-bold -mb-1">Fisik</p>
                <p className="text-xs text-yellow-400 font-bold -mb-1">
                  Fitnes
                </p>
                <p className="text-xs text-blue-700 font-bold -mb-1">Teknik</p>
              </div>

              <h2 className="text-base font-medium  capitalize">
                Jumat,<span>10 Maret 2023</span>
              </h2>
            </div>
          </div>
          <div className="bg-[#F2F3F7] max-w-[470px] p-2 rounded-lg  gap-5 mb-4   items-center h-12 w- flex">
            <h1 className="text-2xl font-bold  text-[#D00D00]">18</h1>
            <div>
              <div className="flex gap-1">
                <p className="text-xs text-[#137403] font-bold -mb-1">Fisik</p>
                <p className="text-xs text-yellow-400 font-bold -mb-1">
                  Fitnes
                </p>
                <p className="text-xs text-blue-700 font-bold -mb-1">Teknik</p>
              </div>

              <h2 className="text-base font-medium  capitalize">
                Jumat,<span>10 Maret 2023</span>
              </h2>
            </div>
          </div>
          <div className="bg-[#F2F3F7] max-w-[470px] p-2 rounded-lg  gap-5 mb-4   items-center h-12 w- flex">
            <h1 className="text-2xl font-bold  text-[#D00D00]">18</h1>
            <div>
              <div className="flex gap-1">
                <p className="text-xs text-[#137403] font-bold -mb-1">Fisik</p>
                <p className="text-xs text-yellow-400 font-bold -mb-1">
                  Fitnes
                </p>
                <p className="text-xs text-blue-700 font-bold -mb-1">Teknik</p>
              </div>

              <h2 className="text-base font-medium  capitalize">
                Jumat,<span>10 Maret 2023</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PraticeTime;
