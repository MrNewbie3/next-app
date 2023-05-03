import React from 'react'



const fouls = () => {
  return (
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
 
  )
}

export default fouls