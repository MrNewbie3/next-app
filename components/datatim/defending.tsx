import React from 'react'

const maxtackle = 15;
const valuetackle = 4;
const tackle_won = (valuetackle / maxtackle) * 100;
const maxduel = 9;
const valueduel = 2;
const duel_won = (valueduel / maxduel) * 100;
const max50_50s = 1;
const value50_50s = 1;
const swon = (value50_50s / max50_50s) * 100;
const maxiwon = 7;
const valueiwon = 2;
const iwon = (valueiwon / maxiwon) * 100;


const defending = () => {
  return (
      <div className="max-w-4xl lg:max-w-5xl w-full bg-white  rounded-lg px-6 py-4 ">
    <div className="mb-6 text-[20px] font-semibold">Defending</div>

    <div className=" w-full max-md:mb-4 ">
      <div className="md:flex md:justify-between mb-1">
        <div className="flex justify-between items-center md:max-w-sm w-full">
          <div className="relative  flex gap-2 items-center ">
            <div className="inset-0 bg-blue-500 h-2 w-2 rounded-full"></div>
            <h1 className="font-semibold">Tackle won</h1>
          </div>
          <p className="font-bold text-base">25</p>
        </div>
        <div className="w-full md:max-w-[226px] lg:max-w-sm">
          {/* range tracking */}
          <label
            htmlFor="range"
            className="flex font-bold h-6 justify-end  text-red-500"
          >
            <h1>{valuetackle}</h1>
            <h1>/15</h1>
          </label>
          {/* range */}
          <div className="w-full bg-gray-200  rounded-full h-2.5  ">
            <div
              className="bg-red-600 h-2.5 rounded-full "
              style={{ width: `${tackle_won}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div className=" w-full max-md:mb-4 ">
      <div className="md:flex md:justify-between mb-1">
        <div className="flex justify-between items-center md:max-w-sm w-full">
          <div className="relative  flex gap-2 items-center ">
            <div className="inset-0 bg-red-600 h-2 w-2 rounded-full"></div>
            <h1 className="font-semibold">Duel won</h1>
          </div>
          <p className="font-bold text-base">25</p>
        </div>
        <div className="w-full md:max-w-[226px] lg:max-w-sm">
          {/* range tracking */}
          <label
            htmlFor="range"
            className="flex font-bold h-6 justify-end  text-red-500"
          >
            <h1>{valueduel}</h1>
            <h1>/9</h1>
          </label>
          {/* range */}
          <div className="w-full bg-gray-200  rounded-full h-2.5  ">
            <div
              className="bg-red-600 h-2.5 rounded-full "
              style={{ width: `${duel_won}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div className=" w-full  max-md:mb-4 ">
      <div className="md:flex md:justify-between mb-1">
        <div className="flex justify-between items-center md:max-w-sm w-full">
          <div className="relative  flex gap-2 items-center ">
            <div className="inset-0 bg-yellow-300 h-2 w-2 rounded-full"></div>
            <h1 className="font-semibold">50-50s won </h1>
          </div>
          <p className="font-bold text-base">25</p>
        </div>
        <div className="w-full md:max-w-[226px] lg:max-w-sm ">
          {/* range tracking */}
          <label
            htmlFor="range"
            className="flex font-bold h-6 justify-end  text-red-500"
          >
            <h1>{value50_50s}</h1>
            <h1>/1</h1>
          </label>
          {/* range */}
          <div className="w-full bg-gray-200  rounded-full h-2.5  ">
            <div
              className="bg-red-600 h-2.5 rounded-full "
              style={{ width: `${swon}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div className=" w-full max-md:mb-4 ">
      <div className="md:flex md:justify-between mb-1">
        <div className="flex justify-between items-center md:max-w-sm w-full">
          <div className="relative  flex gap-2 items-center ">
            <div className="inset-0 bg-blue-500 h-2 w-2 rounded-full"></div>
            <h1 className="font-semibold">Interception won</h1>
          </div>
          <p className="font-bold text-base">25</p>
        </div>
        <div className="w-full md:max-w-[226px] lg:max-w-sm ">
          {/* range tracking */}
          <label
            htmlFor="range"
            className="flex font-bold h-6 justify-end  text-red-500"
          >
            <h1>{valueiwon}</h1>
            <h1>/7</h1>
          </label>
          {/* range */}
          <div className="w-full bg-gray-200  rounded-full h-2.5  ">
            <div
              className="bg-red-600 h-2.5 rounded-full "
              style={{ width: `${iwon}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default defending