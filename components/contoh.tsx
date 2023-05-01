
"use client";
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";


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

//untuk memasukkan data pada  passing & ball position
const SuccesfulPass=2
const UnsuccelfulPass=  10
const HasilPass=Math.floor((SuccesfulPass/UnsuccelfulPass)*100);

const SuccesfulFinal=4
const UnsuccelfulFinal=7
const HasilFinal= Math.floor((SuccesfulFinal/UnsuccelfulFinal)*100);


const ChartPosition = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        new Chart(ctx, {
          type: "doughnut",
          data: {
            datasets: [
              {
                data: [SuccesfulPass, UnsuccelfulPass],
                backgroundColor: ["#EFE616", "#137403"],
                hoverBackgroundColor: ["#EFE616", "#137403"],
                borderWidth: 10,
              },
            ],
          },
          options: {
            spacing: 1,
          },
        });
      }
    }
  }, []);

  return <canvas ref={chartRef} />;
};

const ChartPasses = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        new Chart(ctx, {
          type: "doughnut",
          data: {
            datasets: [
              {
                data: [78, 10],
                backgroundColor: ["#D00D00", "#2846AF"],
                hoverBackgroundColor: ["#D00D00", "#2846AF"],
                borderWidth: 10,
              },
            ],
          },
          options: {
            spacing: 1,
          },
        });
      }
    }
  }, []);

  return <canvas ref={chartRef} />;
};

function MatchRekap() {
  return (
    <div className="container ">
      <div className="flex justify-between w-full mb-6 items-center ">
        <div className="h-16 max-w-[650px] px-10 py-2 w-[650px] rounded-lg drop-shadow-md  bg-white">
          <div className="flex text-xs font-semibold  ">
            <p> 16 juni 2023 -</p>
            <p>Sekarang</p>
          </div>
          <h1 className="text-xl font-bold ">MOKLET</h1>
        </div>

        <button className="hover:bg-[#D00D00] flex items-center gap-2 bg-white ring-1 capitalize font-semibold ring-[#D00D00] text-[#D00D00] px-4 rounded-lg h-9 hover:text-white active:bg-[#D00D00] active:text-white   ">
          2023/2024 <IoMdArrowDropdown />
        </button>
      </div>
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
          <div className="mb-6 text-[20px] font-semibold">
            Passing & Ball Position{" "}
          </div>
          <div className="flex  max-lg:flex-col lg:gap-20 gap-0">
            <div className="lg:max-w-sm w-full">
              <div className="flex justify-between mb-4">
                <div className="  flex gap-2 items-center ">
                  <div className="inset-0 bg-red-500 h-2 w-2 rounded-full"></div>
                  <h1 className="font-semibold">Succesful pases</h1>
                </div>
                <p className="font-bold text-base">{SuccesfulPass}</p>
              </div>
              <div className="flex justify-between mb-4">
                <div className="  flex gap-2 items-center ">
                  <div className="inset-0 bg-blue-500 h-2 w-2 rounded-full"></div>
                  <h1 className="font-semibold">Unsuccesful pases</h1>
                </div>
                <p className="font-bold text-base">{UnsuccelfulPass }</p>
              </div>
              <div className="flex justify-between mb-4">
                <div className="  flex gap-2 items-center ">
                  <div className="inset-0 bg-yellow-500 h-2 w-2 rounded-full"></div>
                  <h1 className="font-semibold">
                    Succelful final third passes
                  </h1>
                </div>

                <p className="font-bold text-base">
                  {SuccesfulFinal}<span>%</span>
                </p>
              </div>
              <div className="flex  justify-between mb-4">
                <div className="  flex gap-2 items-center ">
                  <div className="inset-0 bg-green-500 h-2 w-2 rounded-full"></div>
                  <h1 className="font-semibold">
                    Unsuccelful final third passes
                  </h1>
                </div>

                <p className="font-bold text-base">
                  {UnsuccelfulFinal}<span>%</span>
                </p>
              </div>
            </div>
            <div className="flex justify-center flex-col w-full items-center">
              <div className="flex  gap-8">
                <div className="flex justify-center items-center ">
                  <h2 className="z-0 absolute mt-3 font-semibold">{HasilPass} <span>%</span></h2>
                  <div className=" w-32 h-32 z-10"><ChartPasses /></div>
                </div>
                <div className="flex justify-center items-center ">
                  <h2 className="z-0 absolute mt-3 font-semibold">{HasilFinal}<span>%</span></h2>
                  <div className=" w-32 h-32 z-10">  <ChartPosition /></div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-xl text-[#D00D00] ">{SuccesfulPass+UnsuccelfulPass}</h1>
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
              <div className="w-full md:max-w-[226px] ">
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
              <div className="w-full md:max-w-[226px] ">
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
              <div className="w-full md:max-w-[226px] ">
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