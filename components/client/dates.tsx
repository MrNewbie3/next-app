"use client";
import { useEffect, useState } from "react";
import { format, addDays, subDays } from "date-fns";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { instance } from "@/config/axios";
import { PulseLoader } from "react-spinners";
import Link from "next/link";

type PageProps = {
  params: {
    category: String;
    team: String;
  };
};

const DatePicker = ({ params: query }: PageProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      try {
        const [periodisasiRes, teamRes] = await Promise.all([instance.get("/periodisasi"), instance.get("/club/" + query.team)]);
        const periodisasiData = periodisasiRes.data.data;
        const teamData = teamRes.data.data;
        const filterData = periodisasiData.filter((val: { clubId: number }) => {
          return val.clubId === teamData.id;
        });
        setData(filterData);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        throw new Error(error);
      }
    })();
  }, []);
  const handlePrevDay = () => {
    setCurrentDate((prev) => subDays(prev, 7));
  };

  const handleNextDay = () => {
    setCurrentDate((prev) => addDays(prev, 7));
  };

  const renderDates = () => {
    const dates = [];
    const color: String[] = ["#137403", "#D00D00", "#2846AF"];
    for (let i = 0; i <= 6; i++) {
      const date = addDays(currentDate, i);
      dates.push(
        <div key={i} className={` w-full border-t-2 py-4  border-black text-4xl  font-bold justify-start `}>
          <div className="wrapper flex flex-col">
            {format(date, "dd")}
            {data != undefined
              ? // @ts-ignore
                data.map((e: any, index: number) => {
                  const date_exer = new Date(e.date_exercise);
                  return format(date_exer, "MM") == format(date, "MM") && format(date_exer, "dd") == format(date, "dd") ? (
                    <Link href={"./schedule/" + e.uuid}>
                      <div className={`text-base hover:cursor-pointer mt-5 font-semibold px-3 py-1 capitalize rounded-sm h-fit text-white w-fit bg-[${color[index % 3]}]`}>{e.type}</div>
                    </Link>
                  ) : (
                    ""
                  );
                })
              : ""}
          </div>

          {/* @ts-ignore */}
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
      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-[120px]">
          <PulseLoader color="#D00D00" size={15} />
        </div>
      ) : (
        <>
          <div className="flex justify-center space-x-4 w-full h-64 overflow-auto ">{renderDates()}</div>
        </>
      )}
    </div>
  );
};

export default DatePicker;
