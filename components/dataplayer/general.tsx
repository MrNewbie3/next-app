"use client";
import React, { useEffect } from "react";

type PageProps = {
  data: any;
};

const general = (props: PageProps) => {
  const { data } = props;
  console.log(data);

  useEffect(() => {}, [data]);

  return (
    <div className="md:max-w-md w-full bg-white rounded-lg px-6 py-4 ">
      <div className="mb-6 text-[20px] font-semibold">General</div>
      <div>
        <div className="flex justify-between mb-4">
          <h1 className="font-semibold">Minutes played</h1>
          <p className="font-bold text-base">{data.minutes}</p>
        </div>
        <div className="flex justify-between mb-4">
          <h1 className="font-semibold">Fouls</h1>
          <p className="font-bold text-base">{data.fouls}</p>
        </div>
        <div className="flex justify-between mb-4">
          <h1 className="font-semibold">Red Cards</h1>
          <p className="font-bold text-base">{data.red_cards}</p>
        </div>
        <div className="flex justify-between mb-4">
          <h1 className="font-semibold">Yellow Crads</h1>
          <p className="font-bold text-base">{data.yellow_cards}</p>
        </div>
      </div>
    </div>
  );
};
export default general;
