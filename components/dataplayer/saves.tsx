"use client";
import React from "react";
import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

type PageProps = {
  data: any;
};
ChartJS.register(ArcElement, Tooltip, Legend);

const saves = (props: PageProps) => {
  const { cought, inside, outside, paried } = props.data;
  const inside_out = {
    datasets: [
      {
        label: "\t \t pass",
        data: [inside, outside],
        backgroundColor: ["#D00D00", "#2846AF"],
        borderWidth: 20,
      },
    ],
  };
  const parried_cought = {
    datasets: [
      {
        label: "\t \t pass",
        data: [cought, paried],
        backgroundColor: ["#EFE616", "#137403"],
        borderWidth: 20,
      },
    ],
  };
  console.log(props);

  return (
    <div>
      {" "}
      <div className="h-full md:flex md:gap-20 lg:flex-col  md-w-full">
        <div className="md:max-w-sm w-full">
          <div className="flex justify-between mb-4">
            <div className="relative  flex gap-2 items-center ">
              <div className="inset-0 bg-red-500 h-2 w-2 rounded-full"></div>
              <h1 className="font-semibold">Inside the box</h1>
            </div>
            <p className="font-bold text-base">{inside}</p>
          </div>
          <div className="flex justify-between mb-4">
            <div className="relative  flex gap-2 items-center ">
              <div className="inset-0 bg-blue-500 h-2 w-2 rounded-full"></div>
              <h1 className="font-semibold">Outside the box</h1>
            </div>
            <p className="font-bold text-base">{outside}</p>
          </div>
          <div className="flex justify-between mb-4">
            <div className="relative  flex gap-2 items-center ">
              <div className="inset-0 bg-yellow-500 h-2 w-2 rounded-full"></div>
              <h1 className="font-semibold">Save cought</h1>
            </div>

            <p className="font-bold text-base">{cought}</p>
          </div>
          <div className="flex justify-between mb-4">
            <div className="relative  flex gap-2 items-center ">
              <div className="inset-0 bg-green-500 h-2 w-2 rounded-full"></div>
              <h1 className="font-semibold">Save paried</h1>
            </div>

            <p className="font-bold text-base">{paried}</p>
          </div>
        </div>

        <div className="flex flex-col items-center lg:mt-12 sm:mt-12 md:mt-0  md:justify-center  w-full">
          <div className="flex gap-8 ">
            <div className="flex justify-center items-center ">
              <h2 className="z-0 absolute mt-3 font-semibold">
                {100} <span>%</span>
              </h2>
              <div className=" w-40 h-40 z-10">
                <Doughnut data={inside_out} />
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <h2 className="z-0 absolute mt-3 font-semibold">
                {100}
                <span>%</span>
              </h2>
              <div className=" w-40 h-40 z-10">
                {" "}
                <Doughnut data={parried_cought} />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-xl text-[#D00D00] ">{cought + inside + outside + paried}</h1>
            <p className="font-semibold">Total Saves</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default saves;
