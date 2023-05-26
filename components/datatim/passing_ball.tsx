"use client";
import React from "react";
import { useEffect, useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type PageProps = {
  data: { success: number; unsuccess: number; success_final: number; unsuccess_final: number };
};

const Passing_ball = (props: PageProps) => {
  const { success, success_final, unsuccess, unsuccess_final } = props.data;
  const dataSuccess = {
    datasets: [
      {
        label: "\t \t pass",
        data: [success, unsuccess],
        backgroundColor: ["#D00D00", "#2846AF"],
        borderWidth: 20,
      },
    ],
  };
  const dataSuccessFinal = {
    datasets: [
      {
        label: "\t \t pass",
        data: [success_final, unsuccess_final],
        backgroundColor: ["#EFE616", "#137403"],
        borderWidth: 20,
      },
    ],
  };

  return (
    <div className="max-w-4xl w-full lg:max-w-5xl bg-white  rounded-lg px-6 py-4 ">
      <div className="mb-6 text-[20px] font-semibold">Passing & Ball Position</div>
      <div className="flex  max-lg:flex-col lg:gap-20 gap-0">
        <div className="lg:max-w-sm w-full">
          <div className="flex justify-between mb-4">
            <div className="  flex gap-2 items-center ">
              <div className="inset-0 bg-red-500 h-2 w-2 rounded-full"></div>
              <h1 className="font-semibold">Successful pases</h1>
            </div>
            <p className="font-bold text-base">{success}</p>
          </div>
          <div className="flex justify-between mb-4">
            <div className="  flex gap-2 items-center ">
              <div className="inset-0 bg-blue-500 h-2 w-2 rounded-full"></div>
              <h1 className="font-semibold">Unsuccessful pases</h1>
            </div>
            <p className="font-bold text-base">{unsuccess}</p>
          </div>
          <div className="flex justify-between mb-4">
            <div className="  flex gap-2 items-center ">
              <div className="inset-0 bg-yellow-500 h-2 w-2 rounded-full"></div>
              <h1 className="font-semibold">Successful final third passes</h1>
            </div>
            <p className="font-bold text-base">{success_final}</p>
          </div>
          <div className="flex  justify-between mb-4">
            <div className="  flex gap-2 items-center ">
              <div className="inset-0 bg-green-500 h-2 w-2 rounded-full"></div>
              <h1 className="font-semibold">Unsuccessful final third passes</h1>
            </div>

            <p className="font-bold text-base">{unsuccess_final}</p>
          </div>
        </div>
        <div className="flex justify-center flex-col w-full items-center">
          <div className="flex  gap-8">
            <div className="flex justify-center items-center ">
              <h2 className="z-0 absolute mt-3 font-semibold">
                {100}
                <span>%</span>
              </h2>
              <div className=" w-40 h-40 z-10">
                <Doughnut data={dataSuccess} />
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <h2 className="z-0 absolute mt-3 font-semibold">
                {100}
                <span>%</span>
              </h2>
              <div className=" w-40 h-40 z-10">
                <Doughnut data={dataSuccessFinal} />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-xl text-[#D00D00] ">{success + success_final + unsuccess + unsuccess_final}</h1>
            <p className="font-semibold">Total Passes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passing_ball;
