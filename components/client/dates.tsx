"use client";
import { useState } from "react";
import { format, addDays, subDays } from "date-fns";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const DatePicker = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevDay = () => {
    setCurrentDate((prev) => subDays(prev, 7));
  };

  const handleNextDay = () => {
    setCurrentDate((prev) => addDays(prev, 7));
  };

  const renderDates = () => {
    const dates = [];
    for (let i = 0; i <= 6; i++) {
      const date = addDays(currentDate, i);
      dates.push(
        <div key={i} className={` w-full border-t-4 text-4xl bg-grey font-bold justify-start `}>
          {format(date, "dd")}
          {new Date(Date.now()).getDate() == format(date, "dd") ? "1" : "2"}
        </div>
      );
    }
    return dates;
  };

  return (
    <div className="flex flex-col px-8 rounded-md mb-5 bg-white items-center justify-center space-y-4">
      <div className="flex items-center justify-between  w-full mt-4 mb-6">
        <button className=" px-4 py-2 rounded-full focus:outline-none" onClick={handlePrevDay}>
          <FiChevronLeft />
        </button>
        <div>
          <div className="text-2xl uppercase font-bold">{format(currentDate, "MMMM yyyy")}</div>
        </div>
        <button className=" px-4 py-2 rounded-full focus:outline-none" onClick={handleNextDay}>
          <FiChevronRight />
        </button>
      </div>
      <div className="flex justify-center space-x-4 w-full h-64 ">{renderDates()}</div>
    </div>
  );
};

export default DatePicker;
