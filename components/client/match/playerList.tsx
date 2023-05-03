import React from "react";
import Link from "next/link";
type PageProps = {
  params: {
    category: string;
    team: string;
    detail: string;
  };
};

async function getData() {
  const res = await fetch(
    "http://localhost:4002/api/v1/player/f3641710-14df-4a75-84a1-0169a765e94b",
    {
      cache: "no-store",
      next: {
        revalidate: 10,
      },
      headers: {
        Authentication:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4Mjg3MDMzNiwiZXhwIjoxNjgyODgxMTM2fQ.7Ip3UXTm966u3F5IKZVW8hnsF4I1swm3Dx1AhN_RN4M",
      },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data = " + res.statusText);
  }
  return res.json();
}

async function PlayerList({ params: query }: PageProps) {
  let data = await getData();
  return (
    <>
      {
        // @ts-ignore
        data.success ? "" : (data = [])
      }
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
          {data.data.players.map((value: any) => {
            return (
              <Link
                key={value}
                href={
                  query.detail === "player"
                    ? `/${query.category}/${query.team}/player_detail/${value.id}`
                    : `/${query.category}/${query.team}/new_match/${value.id}`
                }
              >
                <div key={value} className="flex flex-col w-full capitalize">
                  <div className="bg-[#F2F3F7] py-2 rounded-lg flex justify-between px-8 w-full items-center  ">
                    <div className="gap-5 items-center h-12 w- flex">
                      <h1 className="text-2xl font-bold  text-[#D00D00]">
                        {value.number_of_player}
                      </h1>
                      <div>
                        <p className="text-xs text-gray-400">golkiper</p>
                        <h2 className="text-md font-semibold   ">
                          {value.fullname}
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
              </Link>
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
