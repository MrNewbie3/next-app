import React from "react";

function TeamCard() {
  return (
    <>
      <div className="bg-slate-200 px-10 w-full rounded-lg py-4 mx-16">
        <div className="head flex justify-between  items-center ">
          <h1 className="capitalize font-bold opensans text-3xl">
            Telkom shool soccer club
          </h1>
          <button className="bg-[#D00D00] rounded-lg  text-white px-12 py-2">
            Edit Club
          </button>
        </div>

        <div className="card flex justify-between mt-8 ">
          <div className="flex  gap-4">
            <img
              src={"../images/team_img.png"}
              width={'128px'}
              height={'150px'}
              alt=""
              className="object-cover rounded-2xl w-[128px] h-auto "
            />
            <div>
              <h1 className="font-semibold mt-8 text-[#9d9d9d] text-base">
                kategori
              </h1>
              <h1 className="font-bold capitalize mt-1 text-2xl text-gray-900">
                nama Tim
              </h1>
            </div>
          </div>
          <div className="data_tim  uppercase grid grid-cols-3 mt-8 gap-6 ">
            <div>
              <label className="text-xs font-bold">nama asli</label>
              <p className=" capitalize bg-white h-10 w-[180px] p-2 rounded-lg">
                smktelkom malang
              </p>
            </div>
            <div>
              <label className="text-xs font-bold" >tanggal berdiri</label>
              <p className=" capitalize bg-white h-10 w-[180px] p-2 rounded-lg">
                19 juni 1992 (30)
              </p>
            </div>
            <div>
              <label className="text-xs font-bold">asal club</label>
              <p className=" capitalize bg-white h-10 w-[180px] p-2 rounded-lg">
                malang
              </p>
            </div>
            <div>
              <label className="text-xs font-bold">jumlah pemain</label>
              <p className=" capitalize bg-white h-10 w-[180px] p-2 rounded-lg">
                0
              </p>
            </div>{" "}
            <div>
              <label className="text-xs font-bold">jumlah staf</label>
              <p className=" capitalize bg-white h-10 w-[180px] p-2 rounded-lg">
                0
              </p>
            </div>
            <div>
              <label className="text-xs font-bold">jumlah trofi</label>
              <p className=" capitalize bg-white h-10 w-[180px] p-2 rounded-lg">
                0
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamCard;
