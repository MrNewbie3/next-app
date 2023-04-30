import Link from "next/link";
import React from "react";
import { MdSportsSoccer } from "react-icons/md";

async function getData() {
  const res = await fetch("http://localhost:4002/api/v1/category", {
    cache: "no-store",
    next: {
      revalidate: 10,
    },
    headers: { Authentication: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4MjgxNDM2OCwiZXhwIjoxNjgyODI1MTY4fQ.LXEWQSJJ4v8F0KQLBqOeS-k8DDLAQhC-H4SaztUNeaU" },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data = " + res.statusText);
  }
  return res.json();
}

export default async function Side_Comps() {
  let data = await getData();

  return (
    <>
      {
        // @ts-ignore
        data.success ? "" : (data = [])
      }
      <div className="flex flex-col gap-y-4 ">
        {data.data.length > 0 ? <h1 className="font-bold ">Kategori</h1> : <></>}
        {data.data.map((value: any) => {
          return (
            <Link href={`/${value.id}`} key={value.id}>
              <button className="text-grey flex px-7 gap-4 items-center w-[170px] font-semibold py-2 rounded-md ">
                <div className="icon">
                  <MdSportsSoccer className="text-2xl" />
                </div>
                <p className="capitalize font-semibold truncate hover:text-clip">{value.category_name}</p>
              </button>
            </Link>
          );
        })}
      </div>
    </>
  );
}
