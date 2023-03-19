import react from "react";

// untuk memasukkan data pada range===!!
const max = 2;
const value = 1;
const percent1 = (value / max) * 100;
const max2 = 3;
const value2 = 2;
const percent3 = (value2 / max2) * 100;

function PlayerData() {
  return (
    <>
      <div className="px-10 w-full">
        <ul className=" flex text-gray-600 font-semibold justify-around max-w-[550px] h-12  items-center bg-white drop-shadow-md rounded-lg  capitalize    ">
          <li className="bg-[#D00D00] text-white px-4 py-1 rounded-lg">
            last match
          </li>
          <li>season stats</li>
          <li>history</li>
          <li>medis</li>
          <li>measurement</li>
        </ul>

        <div className="flex justify-between w-full mt-6 items-center ">
          <div className="h-16 max-w-[650px] px-10 py-2 w-[650px] rounded-lg drop-shadow-md  bg-white">
            <div className="flex text-xs font-semibold  ">
              <p> 16 juni 2023 -</p>
              <p>18 juni 2023</p>
            </div>
            <h1 className="text-xl font-bold ">
              MOKLET <span>VS</span> Telkom Purwokerto
            </h1>
          </div>

          <button className="hover:bg-[#D00D00] bg-white ring-1 capitalize font-semibold ring-[#D00D00] text-[#D00D00] px-4 rounded-lg h-9 hover:text-white active:bg-[#D00D00] active:text-white   ">
            {" "}
            Add player
          </button>
        </div>
        <div className="lg:flex gap-6">
          <div className="w-full max-w-4xl">
            <div className="flex gap-5 mt-6">
              <div className="max-w-md w-full bg-white rounded-lg px-6 py-4 ">
                <div className="mb-6 text-[20px] font-semibold">General</div>
                <div>
                  <div className="flex justify-between mb-4">
                    <h1 className="font-semibold">Minutes played</h1>
                    <p className="font-bold text-base">25</p>
                  </div>
                  <div className="flex justify-between mb-4">
                    <h1 className="font-semibold">Fouls</h1>
                    <p className="font-bold text-base">25</p>
                  </div>
                  <div className="flex justify-between mb-4">
                    <h1 className="font-semibold">Red Cards</h1>
                    <p className="font-bold text-base">25</p>
                  </div>
                  <div className="flex justify-between mb-4">
                    <h1 className="font-semibold">Yellow Crads</h1>
                    <p className="font-bold text-base">25</p>
                  </div>
                </div>
              </div>

              <div className="max-w-md w-full bg-white rounded-lg px-6 py-4 ">
                <div className="mb-6 text-[20px] font-semibold">Goalkeping</div>
                <div>
                  <div className="flex justify-between mb-4">
                    <h1 className="font-semibold">Total Saves</h1>
                    <p className="font-bold text-base">25</p>
                  </div>
                  <div className="flex justify-between mb-4">
                    <h1 className="font-semibold">Punches</h1>
                    <p className="font-bold text-base">25</p>
                  </div>
                  <div className="flex justify-between mb-4">
                    <h1 className="font-semibold">Goals Conceded</h1>
                    <p className="font-bold text-base">25</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-4xl w-full mt-6 bg-white  rounded-lg px-6 py-4 ">
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
                      <h1 className="font-semibold">
                        Succelful final third passes
                      </h1>
                    </div>

                    <p className="font-bold text-base">
                      25<span>%</span>
                    </p>
                  </div>
                  <div className="flex  justify-between mb-4">
                    <div className="relative  flex gap-2 items-center ">
                      <div className="inset-0 bg-green-500 h-2 w-2 rounded-full"></div>
                      <h1 className="font-semibold">
                        Unsuccelful final third passes
                      </h1>
                    </div>

                    <p className="font-bold text-base">
                      25<span>%</span>
                    </p>
                  </div>
                </div>
                <div className="flex justify-center flex-col w-full items-center">
                  <div className="flex  gap-8">
                    <div className="relative w-20  h-20 ">
                      <div className="absolute inset-0 bg-gray-100 rounded-full"></div>
                      <div className="absolute inset-0 bg-sky-500  rounded-full border-3"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-white font-bold rounded-full">
                        <span className="text-xl text-black-main z-20 ">
                          50%
                        </span>
                      </div>
                      <div className="absolute inset-1.5 bg-white rounded-full"></div>
                      <div className="absolute inset-10 bg-transparent rounded-full"></div>
                    </div>
                    <div className="relative w-20  h-20 ">
                      <div className="absolute inset-0 bg-gray-100 rounded-full"></div>
                      <div className="absolute inset-0 bg-sky-500  rounded-full border-3"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-white font-bold rounded-full">
                        <span className="text-xl text-black-main z-20 ">
                          50%
                        </span>
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
          </div>

          {/* RIGHT DATAS */}

          <div className="lg:max-w-md w-full mt-6 bg-white rounded-lg px-6 py-4 ">
            <div className="mb-6 text-[20px] font-semibold">Saves </div>
            <div className="h-full md:flex md:gap-20 lg:flex-col  md-w-full">
              <div className="max-w-sm w-full">
                <div className="flex justify-between mb-4">
                  <div className="relative  flex gap-2 items-center ">
                    <div className="inset-0 bg-red-500 h-2 w-2 rounded-full"></div>
                    <h1 className="font-semibold">Inside the box</h1>
                  </div>
                  <p className="font-bold text-base">25</p>
                </div>
                <div className="flex justify-between mb-4">
                  <div className="relative  flex gap-2 items-center ">
                    <div className="inset-0 bg-blue-500 h-2 w-2 rounded-full"></div>
                    <h1 className="font-semibold">Outside the box</h1>
                  </div>
                  <p className="font-bold text-base">25</p>
                </div>
                <div className="flex justify-between mb-4">
                  <div className="relative  flex gap-2 items-center ">
                    <div className="inset-0 bg-yellow-500 h-2 w-2 rounded-full"></div>
                    <h1 className="font-semibold">Save cought</h1>
                  </div>

                  <p className="font-bold text-base">
                    25<span>%</span>
                  </p>
                </div>
                <div className="flex justify-between mb-4">
                  <div className="relative  flex gap-2 items-center ">
                    <div className="inset-0 bg-green-500 h-2 w-2 rounded-full"></div>
                    <h1 className="font-semibold">Save paried</h1>
                  </div>

                  <p className="font-bold text-base">
                    25<span>%</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center lg:mt-12 sm:mt-12 md:mt-0  md:justify-center  w-full">
                <div className="flex gap-8 ">
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
        </div>

        <div className="lg:flex gap-5  mt-6">
          {/* ===================== DEFENDING ======================*/}

          <div className="max-w-4xl w-full bg-white  rounded-lg px-6 py-4 ">
            <div className="mb-6 text-[20px] font-semibold">Defending</div>

            <div className=" w-full ">
              <div className="flex justify-between mb-1">
                <div className="flex justify-between items-center max-w-sm w-full">
                  <div className="relative  flex gap-2 items-center ">
                    <div className="inset-0 bg-blue-500 h-2 w-2 rounded-full"></div>
                    <h1 className="font-semibold">Tackle won</h1>
                  </div>
                  <p className="font-bold text-base">25</p>
                </div>
                <div className="w-full max-w-[226px] ">
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
              <div className="flex justify-between mb-1">
                <div className="flex justify-between items-center max-w-sm w-full">
                  <div className="relative  flex gap-2 items-center ">
                    <div className="inset-0 bg-red-600 h-2 w-2 rounded-full"></div>
                    <h1 className="font-semibold">Duel won</h1>
                  </div>
                  <p className="font-bold text-base">25</p>
                </div>
                <div className="w-full max-w-[226px] ">
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
              <div className="flex justify-between mb-1">
                <div className="flex justify-between items-center max-w-sm w-full">
                  <div className="relative  flex gap-2 items-center ">
                    <div className="inset-0 bg-yellow-300 h-2 w-2 rounded-full"></div>
                    <h1 className="font-semibold">50-50s won </h1>
                  </div>
                  <p className="font-bold text-base">25</p>
                </div>
                <div className="w-full max-w-[226px] ">
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
              <div className="flex justify-between mb-1">
                <div className="flex justify-between items-center max-w-sm w-full">
                  <div className="relative  flex gap-2 items-center ">
                    <div className="inset-0 bg-blue-500 h-2 w-2 rounded-full"></div>
                    <h1 className="font-semibold">Interception won</h1>
                  </div>
                  <p className="font-bold text-base">25</p>
                </div>
                <div className="w-full max-w-[226px] ">
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

          {/* ===================== FOULS ======================*/}
          <div className=" lg:max-w-md w-full bg-white mt-6 lg:mt-0  rounded-lg px-6 py-4 ">
            <div className="mb-6 text-[20px] font-semibold">Fouls</div>
            <div className=" ">
              <div className="flex justify-between mb-2">
                <h1 className="font-semibold">Touches in opo box</h1>
                <p className="font-bold text-base">25</p>
              </div>
              <div className="flex justify-between mb-2">
                <h1 className="font-semibold">Changes created</h1>
                <p className="font-bold text-base">25</p>
              </div>
              <div className="flex justify-between mb-2">
                <h1 className="font-semibold">Assit</h1>
                <p className="font-bold text-base">25</p>
              </div>
              <div className="flex justify-between mb-2">
                <h1 className="font-semibold">Forward passes</h1>
                <p className="font-bold text-base">25</p>
              </div>
              <div className="flex justify-between mb-2">
                <h1 className="font-semibold">Trought-balls</h1>
                <p className="font-bold text-base">25</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PlayerData;
