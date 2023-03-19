import React from "react";

function ListPlayer() {
  return (
    <>
      <div className="bg-white w-full   rounded-xl px-10 py-10">
        <div className="mb-8">
          <label htmlFor="name" className="font-semibold">
            Search By Position
          </label>
          <select name="" id="" className="bg-transparent  focus:outline-none ">
            <option value="list1">jenis 1</option>
            <option value="list2">jenis 2</option>
            <option value="list3">jenis 3</option>
          </select>
        </div>

        <div className="grid grid-cols-2 after: ">
          <div className="bg-[#F2F3F7] max-w-[470px] p-2 rounded-lg  gap-5 mb-4   items-center h-12 w- flex">
            <h1 className="text-2xl font-bold  text-[#D00D00]">18</h1>
            <div>
              <p className="text-xs text-gray-400">golkiper</p>
              <h2 className="text-lg font-medium  ">dimas setiawan surya</h2>
            </div>
          </div>
          <div className="bg-[#F2F3F7] max-w-[470px] p-2 rounded-lg  gap-5 mb-4   items-center h-12 w- flex">
            <h1 className="text-2xl font-bold  text-[#D00D00]">18</h1>
            <div>
              <p className="text-xs text-gray-400">golkiper</p>
              <h2 className="text-lg font-medium  ">dimas setiawan surya</h2>
            </div>
          </div>

          <div className="bg-[#F2F3F7] max-w-[470px] p-2 rounded-lg  gap-5 mb-4   items-center h-12 w- flex">
            <h1 className="text-2xl font-bold  text-[#D00D00]">18</h1>
            <div>
              <p className="text-xs text-gray-400">golkiper</p>
              <h2 className="text-lg font-medium  ">dimas setiawan surya</h2>
            </div>
          </div>

          <div className="bg-[#F2F3F7] max-w-[470px] p-2 rounded-lg  gap-5 mb-4   items-center h-12 w- flex">
            <h1 className="text-2xl font-bold  text-[#D00D00]">18</h1>
            <div>
              <p className="text-xs text-gray-400">golkiper</p>
              <h2 className="text-lg font-medium  ">dimas setiawan surya</h2>
            </div>
          </div>

          <div className="bg-[#F2F3F7] max-w-[470px] p-2 rounded-lg  gap-5 mb-4   items-center h-12 w- flex">
            <h1 className="text-2xl font-bold  text-[#D00D00]">18</h1>
            <div>
              <p className="text-xs text-gray-400">golkiper</p>
              <h2 className="text-lg font-medium  ">dimas setiawan surya</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListPlayer;
