import React from "react";

function MatchRekap() {
  return (
    <div className="container mx-10">
      <div className="flex gap-5">
        <div className="max-w-sm w-full bg-white rounded-lg px-6 py-4 ">
          <div className="mb-6 text-[20px] font-semibold">Shooting</div>
          <div>
            <div className="flex justify-between mb-4">
              <h1 className="font-semibold">Total shots</h1>
              <p className="font-bold text-base">25</p>
            </div>
            <div className="flex justify-between mb-4">
              <h1 className="font-semibold">Shots on target</h1>
              <p className="font-bold text-base">25</p>
            </div>
            <div className="flex justify-between mb-4">
              <h1 className="font-semibold">Shots of target</h1>
              <p className="font-bold text-base">25</p>
            </div>
            <div className="flex justify-between mb-4">
              <h1 className="font-semibold">Corner kick</h1>
              <p className="font-bold text-base">25</p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl w-full  bg-white rounded-lg px-6 py-4 ">
          <div className="mb-6 text-[20px] font-semibold">
            Passing & Ball Position{" "}
          </div>
          <div className="flex gap-20">
            <div className="max-w-sm w-full">
              <div className="flex justify-between mb-4">
                <div className="relative  flex gap-2 items-center ">
                  <div className="inset-0 bg-red-500 h-2 w-2 rounded-full"></div>
                  <h1 className="font-semibold">Succesful pases</h1>
                </div>
                <p className="font-bold text-base">25</p>
              </div>
              <div className="flex justify-between mb-4">
                <div className="relative  flex gap-2 items-center ">
                  <div className="inset-0 bg-blue-500 h-2 w-2 rounded-full"></div>
                  <h1 className="font-semibold">Unsuccesful pases</h1>
                </div>
                <p className="font-bold text-base">25</p>
              </div>
              <div className="flex justify-between mb-4">
                <div className="relative  flex gap-2 items-center ">
                  <div className="inset-0 bg-yellow-500 h-2 w-2 rounded-full"></div>
                  <h1 className="font-semibold">Ball positon</h1>
                </div>

                <p className="font-bold text-base">
                  25<span>%</span>
                </p>
              </div>
              <div className="flex justify-between mb-4">
                <div className="relative  flex gap-2 items-center ">
                  <div className="inset-0 bg-green-500 h-2 w-2 rounded-full"></div>
                  <h1 className="font-semibold">Lost ball position</h1>
                </div>

                <p className="font-bold text-base">
                  25<span>%</span>
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-8">
                <div className="relative w-20  h-20 ">
                  <div className="absolute inset-0 bg-gray-100 rounded-full"></div>
                  <div className="absolute inset-0 bg-sky-500  rounded-full border-3"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold rounded-full">
                    <span className="text-xl text-black-main z-20 ">50%</span>
                  </div>
                  <div className="absolute inset-1.5 bg-white rounded-full"></div>
                  <div className="absolute inset-10 bg-transparent rounded-full"></div>
                </div>
                <div className="relative w-20  h-20 ">
                  <div className="absolute inset-0 bg-gray-100 rounded-full"></div>
                  <div className="absolute inset-0 bg-sky-500  rounded-full border-3"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold rounded-full">
                    <span className="text-xl text-black-main z-20 ">50%</span>
                  </div>
                  <div className="absolute inset-1.5 bg-white rounded-full"></div>
                  <div className="absolute inset-10 bg-transparent rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-xl text-[#D00D00] ">344</h1>
                <p className="font-semibold">Total Passes</p>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>

      {/* Defending and fouls  */}

      <div className="flex gap-5 mt-5">
        {/* ===================== DEFENDING ======================*/}

        <div className="max-w-3xl w-full  bg-white rounded-lg px-6 py-4 ">
          <div className="mb-6 text-[20px] font-semibold">Defending</div>

         

          <div className=" w-full ">
            <div className="flex justify-between mb-1">
              <div className="flex justify-between items-center max-w-sm w-full">
                <div className="relative  flex gap-2 items-center ">
                  <div className="inset-0 bg-red-500 h-2 w-2 rounded-full"></div>
                  <h1 className="font-semibold">Tackle won</h1>
                </div>
                <p className="font-bold text-base">25</p>
              </div>
              <div className="w-full max-w-[226px] ">
                {/* range tracking */}
                <label
                  htmlFor="range"
                  className="flex font-bold h-6 justify-end -mb-3 text-red-500"
                >
                  <h1>12</h1>
                  <h1>/15</h1>
                </label>
                <input
                  type="range"
                  value={3}
                  min={0}
                  max={15}
                  className="w-full h-1.5 border-red-500 rounded-full accent-current    border-4 appearance-none"
                />
              </div>
            </div> 
          </div>


          <div className=" w-full ">
            <div className="flex justify-between mb-1">
              <div className="flex justify-between items-center max-w-sm w-full">
                <div className="relative  flex gap-2 items-center ">
                  <div className="inset-0 bg-blue-500 h-2 w-2 rounded-full"></div>
                  <h1 className="font-semibold">Duel won</h1>
                </div>
                <p className="font-bold text-base">25</p>
              </div>
              <div className="w-full max-w-[226px] ">
                {/* range tracking */}
                <label
                  htmlFor="range"
                  className="flex font-bold h-6 justify-end -mb-3 text-red-500"
                >
                  <h1>8</h1>
                  <h1>/9</h1>
                </label>
                <input
                  type="range"
                  value={3}
                  min={0}
                  max={9}
                  className="w-full h-1.5 border-red-500 rounded-full accent-current    border-4 appearance-none"
                />
              </div>
            </div> 
          </div>


          <div className=" w-full ">
            <div className="flex justify-between mb-1">
              <div className="flex justify-between items-center max-w-sm w-full">
                <div className="relative  flex gap-2 items-center ">
                  <div className="inset-0 bg-yellow-500 h-2 w-2 rounded-full"></div>
                  <h1 className="font-semibold">50-50s won</h1>
                </div>
                <p className="font-bold text-base">25</p>
              </div>
              <div className="w-full max-w-[226px] ">
                {/* range tracking */}
                <label
                  htmlFor="range"
                  className="flex font-bold h-6 justify-end -mb-3 text-red-500"
                >
                  <h1>1</h1>
                  <h1>/1</h1>
                </label>
                <input
                  type="range"
                  value={0  }
                  min={0}
                  max={1}
                  className="w-full h-1.5 border-red-500 rounded-full accent-current    border-4 appearance-none"
                />
              </div>
            </div> 
          </div>
          <div className=" w-full ">
            <div className="flex justify-between mb-1">
              <div className="flex justify-between items-center max-w-sm w-full">
                <div className="relative  flex gap-2 items-center ">
                  <div className="inset-0 bg-yellow-500 h-2 w-2 rounded-full"></div>
                  <h1 className="font-semibold">Interseption won</h1>
                </div>
                <p className="font-bold text-base">25</p>
              </div>
              <div className="w-full max-w-[226px] ">
                {/* range tracking */}
                <label
                  htmlFor="range"
                  className="flex font-bold h-6 justify-end -mb-3 text-red-500"
                >
                  <h1>5</h1>
                  <h1>/7</h1>
                </label>
                <input
                  type="range"
                  value={3}
                  min={0}
                  max={7}
                  className="w-full h-1.5 border-red-500 rounded-full accent-current    border-4 appearance-none"
                />
              </div>
            </div> 
          </div>


        </div>

          {/* ===================== FOULS ======================*/}
        <div className="max-w-sm w-full bg-white  rounded-lg px-6 py-4 ">
          <div className="mb-6 text-[20px] font-semibold">Fouls</div>
          <div className=" ">
            <div className="flex justify-between mb-4">
              <h1 className="font-semibold">Total fouls</h1>
              <p className="font-bold text-base">25</p>
            </div>
            <div className="flex justify-between mb-4">
              <h1 className="font-semibold">Offside</h1>
              <p className="font-bold text-base">25</p>
            </div>
            <div className="flex justify-between mb-4">
              <h1 className="font-semibold">Red card</h1>
              <p className="font-bold text-base">25</p>
            </div>
            <div className="flex justify-between mb-4">
              <h1 className="font-semibold">Yellow card</h1>
              <p className="font-bold text-base">25</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchRekap;
