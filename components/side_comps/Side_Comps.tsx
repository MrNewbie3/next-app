import Link from "next/link";
import React, { Component } from "react";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!res.ok) {
    throw new Error("Failed to fetch data = " + res.statusText);
  }
  return res.json();
}

export default async function Side_Comps() {
  const data = await getData();
  console.log(data);
  return (
    <>
      <div className="flex flex-col gap-y-4 ">
        {data.map((value: any) => {
          return (
            <Link href={`/${value.userId}`} key={value.id}>
              <button className="bg-primary-red text-white w-full px-5 py-3 rounded-lg ">{value.title}</button>
            </Link>
          );
        })}
      </div>
    </>
  );
}
