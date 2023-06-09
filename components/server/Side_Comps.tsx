import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";

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

  return (
    <>
      {
        // @ts-ignore
        data.success ? "" : (data = [])
      }
      <div className="flex flex-col gap-y-4 ">
        {data.data.map((value: any) => {
          return (
            <div className="wrapper">
              <Link href={`/main/${value.uuid}`} key={value.id}>
                <button className="text-grey flex px- gap-4 items-center w-[170px] font-semibold py-2 rounded-md ">
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
