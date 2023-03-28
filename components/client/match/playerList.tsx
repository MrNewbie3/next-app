import React from "react";

const data = [1, 2, 3, 4, 5, 6, 7, 9, 10];
function PlayerList() {
  return (
    <>
      <div className="bg-white w-full  rounded-xl py-10">
        <div className="mb-8">
          <select
            name=""
            id=""
            className="bg-transparent font-semibold focus:outline-none "
          >
            <option value="" disabled selected>
              Search By Position
            </option>
            <option value="list1">jenis 1</option>
            <option value="list2">jenis 2</option>
            <option value="list3">jenis 3</option>
          </select>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-5">
          {data.map((key) => {
            return (
              <div key={key} className="flex flex-col w-full capitalize">
                <div className="bg-[#F2F3F7] py-2 rounded-lg flex justify-between px-8 w-full items-center  ">
                  <div className="gap-5 items-center h-12 w- flex">
                    <h1 className="text-2xl font-bold  text-[#D00D00]">18</h1>
                    <div>
                      <p className="text-xs text-gray-400">golkiper</p>
                      <h2 className="text-md font-semibold   ">
                        dimas setiawan surya
                      </h2>
                    </div>
                  </div>
                  <input
                    id="green-checkbox"
                    type="checkbox"
                    value=""
                    className="w-6 h-6 text-green-800 ring-green-800  border-green-800 rounded focus:ring-green-500"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <button className="bg-[#D00D00] h-10 rounded-lg mt-10 text-white opensans w-full">
          Import Data
        </button>
      </div>
    </>
  );
}

export default PlayerList;
