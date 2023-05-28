"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

type PageProps = {
  data: any;
};
ChartJS.register(ArcElement, Tooltip, Legend);

const passing_ball = (props: PageProps) => {
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
    <div>
      <div className="flex max-md:flex-col w-full gap-20">
        <div className="md:max-w-sm w-full">
          <div className="flex justify-between w-full mb-4">
            <div className="relative  flex gap-2 items-center ">
              <div className="inset-0 bg-red-500 h-2 w-2 rounded-full"></div>
              <h1 className="font-semibold">Succesful pases</h1>
            </div>
            <p className="font-bold text-base">{success}</p>
          </div>
          <div className="flex justify-between mb-4">
            <div className="relative  flex gap-2 items-center ">
              <div className="inset-0 bg-blue-500 h-2 w-2 rounded-full"></div>
              <h1 className="font-semibold">Unsuccesful pases</h1>
            </div>
            <p className="font-bold text-base">{unsuccess}</p>
          </div>
          <div className="flex justify-between mb-4">
            <div className="relative  flex gap-2 items-center ">
              <div className="inset-0 bg-yellow-500 h-2 w-2 rounded-full"></div>
              <h1 className="font-semibold">Succelful final third passes</h1>
            </div>
            <p className="font-bold text-base">{success_final}</p>
          </div>
          <div className="flex  justify-between mb-4">
            <div className="relative  flex gap-2 items-center ">
              <div className="inset-0 bg-green-500 h-2 w-2 rounded-full"></div>
              <h1 className="font-semibold">Unsuccelful final third passes</h1>
            </div>
            <p className="font-bold text-base">{unsuccess_final}</p>
          </div>
        </div>
        <div className="flex justify-center flex-col w-full items-center">
          <div className="flex  gap-8">
            <div className="flex justify-center items-center ">
              <h2 className="z-0 absolute mt-3 font-semibold">
                {100} <span>%</span>
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
                {" "}
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

export default passing_ball;
