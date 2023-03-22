import React from "react";

// untuk memasukkan data pada range===!!
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

function MatchRekap() {
  return (
    <div className="container my-8">
      <div className="flex max-lg:flex-col gap-5">
        <div className="lg:max-w-md w-full bg-white mt-16 lg:mt-0  rounded-lg px-6 py-4 ">
          <div className="mb-6 text-[20px] font-semibold">Shooting</div>

          <div className="flex justify-between mb-4">
            <h1 className="font-semibold">Total shots</h1>
            <p className="font-bold text-base">25</p>
          </div>
          <div className="flex justify-between mb-4">
            <h1 className="font-semibold">Shots on target</h1>
            <p className="font-bold text-base">25</p>
          </div>
          <div className="flex justify-between mb-4">
            <h1 className="font-semibold">Shots of target</h1>
            <p className="font-bold text-base">25</p>
          </div>
          <div className="flex justify-between">
            <h1 className="font-semibold">Corner kick</h1>
            <p className="font-bold text-base">25</p>
          </div>
        </div>

        <div className="max-w-4xl w-full  bg-white  rounded-lg px-6 py-4 ">
          <div className="mb-6 text-[20px] font-semibold">Passing & Ball Position </div>
          <div className="flex  max-lg:flex-col lg:gap-20">
            <div className="lg:max-w-sm w-full">
              <div className="flex justify-between mb-4">
                <div className="  flex gap-2 items-center ">
                  <div className="inset-0 bg-red-500 h-2 w-2 rounded-full"></div>
                  <h1 className="font-semibold">Succesful pases</h1>
                </div>
                <p className="font-bold text-base">25</p>
              </div>
              <div className="flex justify-between mb-4">
                <div className="  flex gap-2 items-center ">
                  <div className="inset-0 bg-blue-500 h-2 w-2 rounded-full"></div>
                  <h1 className="font-semibold">Unsuccesful pases</h1>
                </div>
                <p className="font-bold text-base">25</p>
              </div>
              <div className="flex justify-between mb-4">
                <div className="  flex gap-2 items-center ">
                  <div className="inset-0 bg-yellow-500 h-2 w-2 rounded-full"></div>
                  <h1 className="font-semibold">Succelful final third passes</h1>
                </div>

                <p className="font-bold text-base">
                  25<span>%</span>
                </p>
              </div>
              <div className="flex  justify-between mb-4">
                <div className="  flex gap-2 items-center ">
                  <div className="inset-0 bg-green-500 h-2 w-2 rounded-full"></div>
                  <h1 className="font-semibold">Unsuccelful final third passes</h1>
                </div>

                <p className="font-bold text-base">
                  25<span>%</span>
                </p>
              </div>
            </div>
            <div className="flex justify-center flex-col w-full items-center">
              <div className="flex  gap-8">
                <div className="relative w-20  h-20 ">
                  <div className="absolute inset-0 bg-gray-100 rounded-full"></div>
                  <div className="absolute inset-0 bg-sky-500  rounded-full border-3"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold rounded-full">
                    <span className="text-xl text-black-main z-20 ">50%</span>
                  </div>
                  <div className="absolute inset-1.5 bg-white rounded-full"></div>
                  <div className="absolute inset-10 bg-transparent rounded-full"></div>
                </div>
                <div className="relative w-20  h-20 ">
                  <div className="absolute inset-0 bg-gray-100 rounded-full"></div>
                  <div className="absolute inset-0 bg-sky-500  rounded-full border-3"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold rounded-full">
                    <span className="text-xl text-black-main z-20 ">50%</span>
                  </div>
                  <div className="absolute inset-1.5 bg-white rounded-full"></div>
                  <div className="absolute inset-10 bg-transparent rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-xl text-[#D00D00] ">344</h1>
                <p className="font-semibold">Total Passes</p>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>

      {/* Defending and fouls  */}

      <div className="lg:flex gap-5  mt-6">
        {/* ===================== DEFENDING ======================*/}

        <div className="max-w-4xl w-full bg-white  rounded-lg px-6 py-4 ">
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
              <div className="w-full md:max-w-[226px] ">
                {/* range tracking */}
                <label htmlFor="range" className="flex font-bold h-6 justify-end  text-red-500">
                  <h1>{valuetackle}</h1>
                  <h1>/15</h1>
                </label>
                {/* range */}
                <div className="w-full bg-gray-200  rounded-full h-2.5  ">
                  <div className="bg-red-600 h-2.5 rounded-full " style={{ width: `${tackle_won}%` }}></div>
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
              <div className="w-full md:max-w-[226px] ">
                {/* range tracking */}
                <label htmlFor="range" className="flex font-bold h-6 justify-end  text-red-500">
                  <h1>{valueduel}</h1>
                  <h1>/9</h1>
                </label>
                {/* range */}
                <div className="w-full bg-gray-200  rounded-full h-2.5  ">
                  <div className="bg-red-600 h-2.5 rounded-full " style={{ width: `${duel_won}%` }}></div>
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
              <div className="w-full md:max-w-[226px] ">
                {/* range tracking */}
                <label htmlFor="range" className="flex font-bold h-6 justify-end  text-red-500">
                  <h1>{value50_50s}</h1>
                  <h1>/1</h1>
                </label>
                {/* range */}
                <div className="w-full bg-gray-200  rounded-full h-2.5  ">
                  <div className="bg-red-600 h-2.5 rounded-full " style={{ width: `${swon}%` }}></div>
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
              <div className="w-full md:max-w-[226px] ">
                {/* range tracking */}
                <label htmlFor="range" className="flex font-bold h-6 justify-end  text-red-500">
                  <h1>{valueiwon}</h1>
                  <h1>/7</h1>
                </label>
                {/* range */}
                <div className="w-full bg-gray-200  rounded-full h-2.5  ">
                  <div className="bg-red-600 h-2.5 rounded-full " style={{ width: `${iwon}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== FOULS ======================*/}
        <div className=" lg:max-w-md w-full bg-white mt-6 lg:mt-0  rounded-lg px-6 py-4 ">
          <div className="mb-6 text-[20px] font-semibold">Fouls</div>
          <div className=" ">
            <div className="flex justify-between mb-2">
              <h1 className="font-semibold">Touches in opo box</h1>
              <p className="font-bold text-base">25</p>
            </div>
            <div className="flex justify-between mb-2">
              <h1 className="font-semibold">Changes created</h1>
              <p className="font-bold text-base">25</p>
            </div>
            <div className="flex justify-between mb-2">
              <h1 className="font-semibold">Assit</h1>
              <p className="font-bold text-base">25</p>
            </div>
            <div className="flex justify-between mb-2">
              <h1 className="font-semibold">Forward passes</h1>
              <p className="font-bold text-base">25</p>
            </div>
            <div className="flex justify-between mb-2">
              <h1 className="font-semibold">Trought-balls</h1>
              <p className="font-bold text-base">25</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchRekap;
