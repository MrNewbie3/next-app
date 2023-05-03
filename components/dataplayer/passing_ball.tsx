import React from "react";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const succesfull_passes = 2;
const unsuccesfull_passes = 10;
const Hasil_Passes = Math.floor(
  (succesfull_passes / unsuccesfull_passes) * 100
);
const unsuccelfull_final_thirdpasses = 4;
const succesfull_final_third_passes = 7;
const Hasil_Third = Math.floor(
  (unsuccelfull_final_thirdpasses / succesfull_final_third_passes) * 100
);

const hasil_pass =
  unsuccesfull_passes +
  unsuccesfull_passes +
  succesfull_final_third_passes +
  unsuccelfull_final_thirdpasses;

const Chartthirdpasses = () => {
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
                data: [succesfull_passes, unsuccesfull_passes],
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
                data: [
                  unsuccelfull_final_thirdpasses,
                  succesfull_final_third_passes,
                ],
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
    <div>
      <div className="flex max-md:flex-col w-full gap-20">
        <div className="md:max-w-sm w-full">
          <div className="flex justify-between w-full mb-4">
            <div className="relative  flex gap-2 items-center ">
              <div className="inset-0 bg-red-500 h-2 w-2 rounded-full"></div>
              <h1 className="font-semibold">Succesful pases</h1>
            </div>
            <p className="font-bold text-base">{succesfull_passes}</p>
          </div>
          <div className="flex justify-between mb-4">
            <div className="relative  flex gap-2 items-center ">
              <div className="inset-0 bg-blue-500 h-2 w-2 rounded-full"></div>
              <h1 className="font-semibold">Unsuccesful pases</h1>
            </div>
            <p className="font-bold text-base">{unsuccesfull_passes}</p>
          </div>
          <div className="flex justify-between mb-4">
            <div className="relative  flex gap-2 items-center ">
              <div className="inset-0 bg-yellow-500 h-2 w-2 rounded-full"></div>
              <h1 className="font-semibold">Succelful final third passes</h1>
            </div>
            <p className="font-bold text-base">{unsuccesfull_passes}</p>
          </div>
          <div className="flex  justify-between mb-4">
            <div className="relative  flex gap-2 items-center ">
              <div className="inset-0 bg-green-500 h-2 w-2 rounded-full"></div>
              <h1 className="font-semibold">Unsuccelful final third passes</h1>
            </div>
            <p className="font-bold text-base">25</p>
          </div>
        </div>
        <div className="flex justify-center flex-col w-full items-center">
          <div className="flex  gap-8">
            <div className="flex justify-center items-center ">
              <h2 className="z-0 absolute mt-3 font-semibold">
                {Hasil_Passes} <span>%</span>
              </h2>
              <div className=" w-32 h-32 z-10">
                <ChartPasses />
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <h2 className="z-0 absolute mt-3 font-semibold">
                {Hasil_Third}
                <span>%</span>
              </h2>
              <div className=" w-32 h-32 z-10">
                {" "}
                <Chartthirdpasses />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-xl text-[#D00D00] ">{hasil_pass}</h1>
            <p className="font-semibold">Total Passes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default passing_ball;
