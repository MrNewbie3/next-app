'use client'
import React from 'react'
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";


const SuccesfulPass = 2;
const UnsuccelfulPass = 10;
const HasilPass = Math.floor((SuccesfulPass / UnsuccelfulPass) * 100);

const SuccesfulFinal = 4;
const UnsuccelfulFinal = 7;
const HasilFinal = Math.floor((SuccesfulFinal / UnsuccelfulFinal) * 100);

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


const passing_ball = () => {
  return (
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
          <p className="font-bold text-base">{UnsuccelfulPass}</p>
        </div>
        <div className="flex justify-between mb-4">
          <div className="  flex gap-2 items-center ">
            <div className="inset-0 bg-yellow-500 h-2 w-2 rounded-full"></div>
            <h1 className="font-semibold">
              Succelful final third passes
            </h1>
          </div>

          <p className="font-bold text-base">
            {SuccesfulFinal}
            <span>%</span>
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
            {UnsuccelfulFinal}
            <span>%</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center flex-col w-full items-center">
        <div className="flex  gap-8">
          <div className="flex justify-center items-center ">
            <h2 className="z-0 absolute mt-3 font-semibold">
              {HasilPass} <span>%</span>
            </h2>
            <div className=" w-32 h-32 z-10">
              <ChartPasses />
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <h2 className="z-0 absolute mt-3 font-semibold">
              {HasilFinal}
              <span>%</span>
            </h2>
            <div className=" w-32 h-32 z-10">
              {" "}
              <ChartPosition />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-xl text-[#D00D00] ">
            {SuccesfulPass + UnsuccelfulPass}
          </h1>
          <p className="font-semibold">Total Passes</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default passing_ball