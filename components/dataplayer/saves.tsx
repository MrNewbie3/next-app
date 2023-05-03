"use client";
import React from 'react'
import { useEffect, useRef } from "react";
import {Chart} from 'chart.js/auto';

const inside_the_box = 2;
const outside_the_box = 10;
const Hasil_box = Math.floor((inside_the_box / outside_the_box) * 100);

const save_caught = 4;
const save_parried = 7;
const Hasil_save = Math.floor((save_caught / save_parried) * 100);
const hasil_saves =
  inside_the_box + outside_the_box + save_caught + save_parried;



const Chartbox = () => {
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
                data: [inside_the_box, outside_the_box],
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

const Chartsave = () => {
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
                data: [save_caught, save_parried],
               
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


const saves = () => {
  return (
    <div>       <div className="h-full md:flex md:gap-20 lg:flex-col  md-w-full">
    <div className="md:max-w-sm w-full">
      <div className="flex justify-between mb-4">
        <div className="relative  flex gap-2 items-center ">
          <div className="inset-0 bg-red-500 h-2 w-2 rounded-full"></div>
          <h1 className="font-semibold">Inside the box</h1>
        </div>
        <p className="font-bold text-base">{inside_the_box}</p>
      </div>
      <div className="flex justify-between mb-4">
        <div className="relative  flex gap-2 items-center ">
          <div className="inset-0 bg-blue-500 h-2 w-2 rounded-full"></div>
          <h1 className="font-semibold">Outside the box</h1>
        </div>
        <p className="font-bold text-base">{outside_the_box}</p>
      </div>
      <div className="flex justify-between mb-4">
        <div className="relative  flex gap-2 items-center ">
          <div className="inset-0 bg-yellow-500 h-2 w-2 rounded-full"></div>
          <h1 className="font-semibold">Save cought</h1>
        </div>

        <p className="font-bold text-base">{save_caught}</p>
      </div>
      <div className="flex justify-between mb-4">
        <div className="relative  flex gap-2 items-center ">
          <div className="inset-0 bg-green-500 h-2 w-2 rounded-full"></div>
          <h1 className="font-semibold">Save paried</h1>
        </div>

        <p className="font-bold text-base">{save_parried}</p>
      </div>
    </div>

    <div className="flex flex-col items-center lg:mt-12 sm:mt-12 md:mt-0  md:justify-center  w-full">
      <div className="flex gap-8 ">
        <div className="flex justify-center items-center ">
          <h2 className="z-0 absolute mt-3 font-semibold">
            {Hasil_box} <span>%</span>
          </h2>
          <div className=" w-32 h-32 z-10">
            <Chartbox />
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <h2 className="z-0 absolute mt-3 font-semibold">
            {Hasil_save}
            <span>%</span>
          </h2>
          <div className=" w-32 h-32 z-10">
            {" "}
            <Chartsave />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-xl text-[#D00D00] ">
          {hasil_saves}
        </h1>
        <p className="font-semibold">Total Saves</p>
      </div>
    </div>
  </div></div>
  )
}

export default saves