
import React from 'react'

const max = 2;
const value = 1;
const percent1 = (value / max) * 100;
const max2 = 3;
const value2 = 2;
const percent3 = (value2 / max2) * 100;

const defending = () => {
  return (
    <div>
               <div className=" w-full ">
              <div className="flex max-md:flex-col  justify-between mb-1">
                <div className="flex justify-between items-center md:max-w-sm w-full">
                  <div className="relative  flex gap-2 items-center ">
                    <div className="inset-0 bg-blue-500 h-2 w-2 rounded-full"></div>
                    <h1 className="font-semibold">Tackle won</h1>
                  </div>
                  <p className="font-bold text-base">25</p>
                </div>
                <div className="w-full md:max-w-[226px] ">
                  {/* range tracking */}
                  <label
                    htmlFor="range"
                    className="flex font-bold h-6 justify-end  text-red-500"
                  >
                    <h1>0</h1>
                  </label>
                  {/* range */}
                  <div className="w-full bg-gray-200  rounded-full h-2.5  "></div>
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
                  <p className="font-bold text-base">25</p>
                </div>
                <div className="w-full md:max-w-[226px] ">
                  {/* range tracking */}
                  <label
                    htmlFor="range"
                    className="flex font-bold h-6 justify-end  text-red-500"
                  >
                    <h1>1</h1>
                    <h1>/2</h1>
                  </label>
                  {/* range */}
                  <div className="w-full bg-gray-200  rounded-full h-2.5  ">
                    <div
                      className="bg-red-600 h-2.5 rounded-full "
                      style={{ width: `${percent1}%` }}
                    ></div>
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
                  <p className="font-bold text-base">25</p>
                </div>
                <div className="w-full md:max-w-[226px] ">
                  {/* range tracking */}
                  <label
                    htmlFor="range"
                    className="flex font-bold h-6 justify-end  text-red-500"
                  >
                    <h1>1</h1>
                    <h1>/3</h1>
                  </label>
                  {/* range */}
                  <div className="w-full bg-gray-200  rounded-full h-2.5  ">
                    <div
                      className="bg-red-600 h-2.5 rounded-full "
                      style={{ width: `${percent3}%` }}
                    ></div>
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
                  <p className="font-bold text-base">25</p>
                </div>
                <div className="w-full md:max-w-[226px] ">
                  {/* range tracking */}
                  <label
                    htmlFor="range"
                    className="flex font-bold h-6 justify-end  text-red-500"
                  >
                    <h1>0</h1>
                  </label>
                  {/* range */}
                  <div className="w-full bg-gray-200  rounded-full h-2.5  "></div>
                </div>
              </div>
            </div>
            
    </div>
  )
}

export default defending