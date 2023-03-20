import React from "react"

import {GrFormNext} from 'react-icons/gr'
function PlayerCard(){

   
      return (
        <>
          <div className="w-full rounded-xl px-10 py-10">
          <div className="head flex justify-between  items-center ">
          <h1 className="capitalize font-semibold flex opensans text-xs text-gray-600">
           Futsal <span className="flex items-center"><GrFormNext/>player <GrFormNext/></span><span className="text-black"> agung dwi min1</span>
          </h1>
          <button className="bg-[#D00D00] rounded-lg  text-white px-6 py-1.5">
            Edit Pemain
          </button>
        </div>

        <div className="card flex w-full  max-md:flex-col gap-20 mt-8 ">   
          <div className="flex w-full  gap-4">
            <img
              src={"../images/team_img.png"}
              width={'128px'}
              height={'150px'}
              alt=""
              className="object-cover rounded-2xl w-[128px] h-auto "
            />
            <div>
              <h1 className="font-semibold mt-8 text-[#9d9d9d] text-base">
                agung dwi
              </h1>
              <h1 className="font-bold capitalize mt-1 text-2xl text-gray-900">
                mas cecep
              </h1>
              <h1 className="font-bold capitalize mt-1 text-red-600 text-2xl ">
              <span>#</span>
              23
              </h1>
            </div>
          </div>
          <div className="data_tim  uppercase grid  w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-6 ">
            <div>
              <label className="text-xs font-bold">nama asli</label>
              <p className=" capitalize bg-white h-10 w-full p-2 rounded-lg">
                smktelkom malang
              </p>
            </div>
            <div>
              <label className="text-xs font-bold" >tanggal berdiri</label>
              <p className=" capitalize bg-white h-10 w-full p-2 rounded-lg">
                19 juni 1992 (30)
              </p>
            </div>
            <div>
              <label className="text-xs font-bold">asal club</label>
              <p className=" capitalize bg-white h-10 w-full p-2 rounded-lg">
                malang
              </p>
            </div>
            <div>
              <label className="text-xs font-bold">jumlah pemain</label>
              <p className=" capitalize bg-white h-10 w-full p-2 rounded-lg">
                0
              </p>
            </div>{" "}
            <div>
              <label className="text-xs font-bold">jumlah staf</label>
              <p className=" capitalize bg-white h-10 w-full p-2 rounded-lg">
                0
              </p>
            </div>
            <div>
              <label className="text-xs font-bold">jumlah trofi</label>
              <p className=" capitalize bg-white h-10 w-full p-2 rounded-lg">
                0
              </p>
            </div>
          </div>
        </div>
          </div>
        </>
      );
 
    

}

export default PlayerCard;