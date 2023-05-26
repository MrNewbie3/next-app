import React from "react";

type PageProps = {
  data: { tackle_won: number; duel_won: number; fifty_won: number; interception_won: number };
};

const defending = (props: PageProps) => {
  const { tackle_won, duel_won, fifty_won, interception_won } = props.data;

  const maxtackle = 30;
  const valuetackle = tackle_won;
  const tackle_wons = (valuetackle / maxtackle) * 100;
  const maxduel = 30;
  const valueduel = duel_won;
  const duel_wons = (valueduel / maxduel) * 100;
  const max50_50s = 30;
  const value50_50s = fifty_won;
  const swon = (value50_50s / max50_50s) * 100;
  const maxiwon = 30;
  const valueiwon = interception_won;
  const iwon = (valueiwon / maxiwon) * 100;
  return (
    <div className="max-w-4xl lg:max-w-5xl w-full bg-white  rounded-lg px-6 py-4 ">
      <div className="mb-6 text-[20px] font-semibold">Defending</div>

      <div className=" w-full max-md:mb-4 ">
        <div className="md:flex md:justify-between mb-1">
          <div className="flex justify-between items-center md:max-w-sm w-full">
            <div className="relative  flex gap-2 items-center ">
              <div className="inset-0 bg-blue-500 h-2 w-2 rounded-full"></div>
              <h1 className="font-semibold">Tackle won</h1>
            </div>
            <p className="font-bold text-base">{valuetackle}</p>
          </div>
          <div className="w-full md:max-w-[226px] lg:max-w-sm">
            {/* range tracking */}
            <label htmlFor="range" className="flex font-bold h-6 justify-end  text-red-500">
              <h1>{valuetackle}</h1>
              <h1>/{maxtackle}</h1>
            </label>
            {/* range */}
            <div className="w-full bg-gray-200  rounded-full h-2.5  ">
              <div className="bg-red-600 h-2.5 rounded-full " style={{ width: `${tackle_wons}%` }}></div>
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
            <p className="font-bold text-base">{valueduel}</p>
          </div>
          <div className="w-full md:max-w-[226px] lg:max-w-sm">
            {/* range tracking */}
            <label htmlFor="range" className="flex font-bold h-6 justify-end  text-red-500">
              <h1>{valueduel}</h1>
              <h1>/{maxduel}</h1>
            </label>
            {/* range */}
            <div className="w-full bg-gray-200  rounded-full h-2.5  ">
              <div className="bg-red-600 h-2.5 rounded-full " style={{ width: `${duel_wons}%` }}></div>
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
            <p className="font-bold text-base">{value50_50s}</p>
          </div>
          <div className="w-full md:max-w-[226px] lg:max-w-sm ">
            {/* range tracking */}
            <label htmlFor="range" className="flex font-bold h-6 justify-end  text-red-500">
              <h1>{value50_50s}</h1>
              <h1>/{max50_50s}</h1>
            </label>
            {/* range */}
            <div className="w-full bg-gray-200  rounded-full h-2.5  ">
              <div className="bg-red-600 h-2.5 rounded-full " style={{ width: `${swon}%` }}></div>
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
            <p className="font-bold text-base">{valueiwon}</p>
          </div>
          <div className="w-full md:max-w-[226px] lg:max-w-sm ">
            {/* range tracking */}
            <label htmlFor="range" className="flex font-bold h-6 justify-end  text-red-500">
              <h1>{valueiwon}</h1>
              <h1>/{maxiwon}</h1>
            </label>
            {/* range */}
            <div className="w-full bg-gray-200  rounded-full h-2.5  ">
              <div className="bg-red-600 h-2.5 rounded-full " style={{ width: `${iwon}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default defending;
