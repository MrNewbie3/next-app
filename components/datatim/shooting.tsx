import React from "react";

const shooting = () => {
  return (
    <div className="lg:max-w-lg md:max-w-md w-full bg-white mt-16 lg:mt-0  rounded-lg px-6 py-4  ">
      <h1 className="mb-6 text-[20px] font-semibold">Shooting</h1>
        <div className="flex justify-between mb-4">
          <h1 className="font-semibold">Total shots</h1>
          <p className="font-bold text-base">25</p>
        </div>
        <div className="flex justify-between mb-4 ">
          <h1 className="font-semibold">Shots on target</h1>
          <p className="font-bold text-base">25</p>
        </div>
        <div className="flex justify-between mb-4 ">
          <h1 className="font-semibold">Shots of target</h1>
          <p className="font-bold text-base">25</p>
        </div>
        <div className="flex justify-between">
          <h1 className="font-semibold">Corner kick</h1>
          <p className="font-bold text-base">25</p>
      </div>
    </div>
  );
};

export default shooting;
