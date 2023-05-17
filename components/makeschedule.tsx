import Link from "next/link";
import React from "react";
type PageProps = {
  params: {
    team: any;
    category: any;
    query: string;
  };
};

function MakeSchedule({ params: query }: PageProps) {
  return (
    <>
      <div className="flex justify-between  mx-0 w-full items-center ">
        <div className="h-16 max-w-[650px] px-10 py-2 w-[650px] rounded-lg drop-shadow-md  bg-white">
          <div className="flex text-xs font-semibold capitalize ">
            <p>
              Hari ini <span className="text-[#D00D00] font-semibold">2 februari 2023</span>
            </p>
          </div>
          <h1 className="text-xl font-bold ">MOKLET&apos;S Player</h1>
        </div>
        <div className="flex justify-between gap-8">
          <Link href={`/main/${query.category}/${query.team}/schedule/`}>
            <button className="hover:bg-[#D00D00] bg-white ring-1 capitalize font-semibold ring-[#D00D00] text-[#D00D00] px-4  rounded-lg h-9 hover:text-white  active:bg-[#D00D00] active:text-white  ">full schedule</button>
          </Link>
          <Link href={`/main/${query.category}/${query.team}/new_exercise/`}>
            <button className="hover:bg-[#D00D00] bg-white ring-1 capitalize font-semibold ring-[#D00D00] text-[#D00D00] px-4 rounded-lg h-9 hover:text-white  active:bg-[#D00D00] active:text-white  ">add schedule</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MakeSchedule;
