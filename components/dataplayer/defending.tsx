import React from "react";

type PageProps = {
  data: any;
};

const defending = (props: PageProps) => {
  const { tackle, fifty_fifty, interception, duel } = props.data;
  const max = 4;
  const value = tackle;
  const percent = (value / max) * 100;
  const max2 = 4;
  const value2 = fifty_fifty;
  const percent2 = (value2 / max2) * 100;
  const max3 = 4;
  const value3 = interception;
  const percent3 = (value3 / max3) * 100;
  const max4 = 4;
  const value4 = duel;
  const percent4 = (value4 / max4) * 100;

  return (
    <div>
      <div className=" w-full ">
        <div className="flex max-md:flex-col  justify-between mb-1">
          <div className="flex justify-between items-center md:max-w-sm w-full">
            <div className="relative  flex gap-2 items-center ">
              <div className="inset-0 bg-blue-500 h-2 w-2 rounded-full"></div>
              <h1 className="font-semibold">Tackle won</h1>
            </div>
            <p className="font-bold text-base">{value}</p>
          </div>
          <div className="w-full md:max-w-[226px] ">
            {/* range tracking */}
            <label htmlFor="range" className="flex font-bold h-6 justify-end  text-red-500">
              <h1>{value}</h1>
              <h1>/{max}</h1>
            </label>
            {/* range */}
            <div className="w-full bg-gray-200  rounded-full h-2.5  ">
              <div className="bg-red-600 h-2.5 rounded-full " style={{ width: `${percent}%` }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full ">
        <div className="flex max-md:flex-col justify-between mb-1">
          <div className="flex justify-between items-center md:max-w-sm w-full">
            <div className="relative  flex gap-2 items-center ">
              <div className="inset-0 bg-red-600 h-2 w-2 rounded-full"></div>
              <h1 className="font-semibold">Duel won</h1>
            </div>
            <p className="font-bold text-base">{value4}</p>
          </div>
          <div className="w-full md:max-w-[226px] ">
            {/* range tracking */}
            <label htmlFor="range" className="flex font-bold h-6 justify-end  text-red-500">
              <h1>{value4}</h1>
              <h1>/{max4}</h1>
            </label>
            {/* range */}
            <div className="w-full bg-gray-200  rounded-full h-2.5  ">
              <div className="bg-red-600 h-2.5 rounded-full " style={{ width: `${percent4}%` }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full   ">
        <div className="flex max-md:flex-col justify-between mb-1">
          <div className="flex justify-between items-center md:max-w-sm w-full">
            <div className="relative  flex gap-2 items-center ">
              <div className="inset-0 bg-yellow-300 h-2 w-2 rounded-full"></div>
              <h1 className="font-semibold">50-50s won </h1>
            </div>
            <p className="font-bold text-base">{value2}</p>
          </div>
          <div className="w-full md:max-w-[226px] ">
            {/* range tracking */}
            <label htmlFor="range" className="flex font-bold h-6 justify-end  text-red-500">
              <h1>{value2}</h1>
              <h1>/{max2}</h1>
            </label>
            {/* range */}
            <div className="w-full bg-gray-200  rounded-full h-2.5  ">
              <div className="bg-red-600 h-2.5 rounded-full " style={{ width: `${percent2}%` }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full ">
        <div className="flex max-md:flex-col justify-between mb-1">
          <div className="flex justify-between items-center md:max-w-sm w-full">
            <div className="relative  flex gap-2 items-center ">
              <div className="inset-0 bg-blue-500 h-2 w-2 rounded-full"></div>
              <h1 className="font-semibold">Interception won</h1>
            </div>
            <p className="font-bold text-base">{value3}</p>
          </div>
          <div className="w-full md:max-w-[226px] ">
            {/* range tracking */}
            <label htmlFor="range" className="flex font-bold h-6 justify-end  text-red-500">
              <h1>{value3}</h1>
              <h1>/{max3}</h1>
            </label>
            {/* range */}
            <div className="w-full bg-gray-200  rounded-full h-2.5  ">
              <div className="bg-red-600 h-2.5 rounded-full " style={{ width: `${percent3}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default defending;
