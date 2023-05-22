import React from 'react'



const fouls = () => {
  return (
    <div className=" md:max-w-md lg:max-w-lg w-full bg-white mt-6 lg:mt-0  rounded-lg px-6 py-4 ">
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
 
  )
}

export default fouls