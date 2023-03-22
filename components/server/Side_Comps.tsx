import Link from "next/link";
import React from "react";
import { MdSportsSoccer } from "react-icons/md";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos?_start=10&_limit=5");
  if (!res.ok) {
    throw new Error("Failed to fetch data = " + res.statusText);
  }
  return res.json();
}

export default async function Side_Comps() {
  const data = await getData();
  return (
    <>
      <div className="flex flex-col gap-y-4 ">
        {data.length > 1 ? <h1 className="font-bold ">Kategori</h1> : <></>}
        {data.map((value: any) => {
          return (
            <Link href={`/${value.id}`} key={value.id}>
              <button className="text-grey flex px-7 gap-4 items-center font-semibold py-2 w-[170px] rounded-md ">
                <div className="icon">
                  <MdSportsSoccer className="text-2xl" />
                </div>
                <p className="capitalize font-semibold">{String(value.completed)}</p>
              </button>
            </Link>
          );
        })}
      </div>
    </>
  );
}
