import Link from "next/link";
import React, { Component } from "react";
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
        {data.map((value: any) => {
          return (
            <Link href={`/${value.id}`} key={value.id}>
              <button className="bg-primary-red text-white w-full px-5 py-3 rounded-lg flex flex-row items-center gap-x-3 ">
                <div className="icon">
                  <MdSportsSoccer className="text-xl" />
                </div>
                <p>{value.title}</p>
              </button>
            </Link>
          );
        })}
      </div>
    </>
  );
}
