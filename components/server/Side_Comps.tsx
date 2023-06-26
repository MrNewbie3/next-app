import { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";
import { MdSportsSoccer } from "react-icons/md";

async function getData() {
  const cookieStore = cookies();
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/category`, {
    cache: "no-store",
    headers: { Authorization: `Bearer ${cookieStore.get("token")?.value}` },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data = " + res.statusText);
  }
  return res.json();
}

export default async function Side_Comps() {
  let data = await getData();

  const cookieStore = cookies();

  const league = ["solo premiere league", "batu premiere league"];
  return (
    <>
      {
        // @ts-ignore
        data.success ? "" : (data = [])
      }
      <div className="flex flex-col gap-y-4 ">
        {/* {data.data.length > 0 ? <h1 className="font-bold ">Solo Premiere League</h1> : <></>} */}
        {data.data.map((value: any, index: number) => {
          return (
            <div className="wrapper">
              <h1 className="font-bold capitalize">{league[index]}</h1>
              <Link href={`/main/${value.slug}`} key={value.id}>
                <button className="text-grey flex px-7 gap-4 items-center w-[170px] font-semibold py-2 rounded-md ">
                  <div className="icon">
                    <MdSportsSoccer className="text-2xl" />
                  </div>
                  <p className="capitalize font-semibold truncate hover:text-clip">{value.category_name}</p>
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
