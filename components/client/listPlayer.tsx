import Link from "next/link";
import React from "react";
type PageProps = {
  params: {
    category: string;
    team: string;
    detail: string;
  };
};

async function getData() {
  const res = await fetch("http://localhost:4002/api/v1/player/f3641710-14df-4a75-84a1-0169a765e94b", {
    cache: "no-store",
    next: {
      revalidate: 10,
    },
    headers: {
      Authentication: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4MjkxMzM5NSwiZXhwIjoxNjgyOTI0MTk1fQ.Bq7WIOm_4V9g_yNsNlgKYT1rQFZz7rCEEGRQVa3RmbI",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data = " + res.statusText);
  }
  return res.json();
}

async function ListPlayer({ params: query }: PageProps) {
  let data = await getData();

  return (
    <div>
      {
        // @ts-ignore
        data.success ? "" : (data = [])
      }
      <div className="bg-white w-full  rounded-xl py-10">
        <div className="mb-8">
          <select name="" id="" className="bg-transparent  focus:outline-none ">
            <option value="" selected disabled>
              Search By Position
            </option>
            <option value="list1">jenis 1</option>
            <option value="list2">jenis 2</option>
            <option value="list3">jenis 3</option>
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2  gap-5">
          {data.data.players.map((value: any) => {
            return (
              <Link key={value} href={query.detail === "player" ? `/${query.category}/${query.team}/player_detail/${value.id}` : `/${query.category}/${query.team}/new_match/${value.id}`}>
                <div className="flex flex-col w-full capitalize">
                  <div className="bg-[#F2F3F7] py-2 rounded-lg flex justify-between px-8 w-full items-center  ">
                    <div className="gap-5 items-center h-12 w- flex">
                      <h1 className="text-2xl font-bold  text-[#D00D00]">{value.number_of_player}</h1>
                      <div>
                        <p className="text-xs text-gray-400">golkiper</p>
                        <h2 className="text-md font-semibold   ">{value.fullname}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div />
    </div>
  );
}

export default ListPlayer;
