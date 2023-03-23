import Link from "next/link";
import React from "react";
import { FiDownload } from "react-icons/fi";

const data = [1, 2, 3, 4, 5, 6, 7, 8];
type PageProps = {
  params: {
    team: any;
    category: any; query: string 
};
};
function PraticeTime({ params: query }: PageProps) {
  return (
    <>
      <div className="bg-white w-full  rounded-xl px-10 py-10">
        <div className=" flex gap-4">
          <button className="bg-[#137403] px-4  py-2 text-white mb-10 rounded-lg">Kembali</button>
          <button className="bg-[#1790FF] px-8   py-2 text-white mb-10 rounded-lg">Edit</button>
          <button className="bg-[#2846AF] flex items-center gap-2 px-4 py-2 text-white mb-10 rounded-lg">
            Download
            <FiDownload />
          </button>
        </div>
        <div>
          <h1 className="opensans font-bold text-xl capitalize">Jadwal lengkap program latihan </h1>
          <h4 className="font-semibold">Data di bawah berisi data yang sudah lewat dan yang akan datang</h4>
        </div>

        <div>
          <ul className=" flex text-gray-600 font-semibold justify-around gap-x-4 w-fit px-3 py-2 box-content mt-8 items-center bg-[#F2F3F7] rounded-lg  capitalize    ">
            <li className="bg-[#D00D00] text-white px-4 py-2 rounded-lg ">History</li>
            <li className=" px-4 py-2">Upcomming</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-4 mt-8">
          {data.map((params) => {
            return (
              <Link key={params} href={`/${query.category}/${query.team}/schedule/${params}`}>
                <div className="bg-[#F2F3F7]  px-4 py-2 rounded-lg  gap-5   items-center  flex">
                  <h1 className="text-2xl font-bold  text-[#D00D00]">{params}</h1>
                  <div>
                    <div className="flex gap-1">
                      <p className="text-xs text-[#137403] font-bold -mb-1">Fisik</p>
                      <p className="text-xs text-yellow-400 font-bold -mb-1">Fitnes</p>
                      <p className="text-xs text-blue-700 font-bold -mb-1">Teknik</p>
                    </div>

                    <h2 className="text-base font-medium  capitalize">
                      Jumat,<span>10 Maret 2023</span>
                    </h2>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default PraticeTime;
