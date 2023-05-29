import { cookies } from "next/headers";
import Link from "next/link";
import { NextRequest } from "next/server";
import React from "react";
import { FaPlus } from "react-icons/fa";

interface PageProps {
  params: {
    category: string;
  };
}

async function getData(category: string) {
  const cookieStore = cookies();
  const res = await fetch("https://api-stapa-app.vercel.app/api/v1/club/c/" + category, {
    headers: {
      Authorization: `Bearer ${cookieStore.get("token")?.value}`,
    },
    cache: "no-store",
  });

  if (!res) {
    return "Error";
  }

  return res.json();
}

export default async function Page({ params }: PageProps) {
  const data = await getData(params.category);

  return (
    <div className="w-full px-8">
      {data.data.length < 1 ? (
        <Link href={`main/${params.category}/new_team`} className="flex pl-7 gap-4 items-center bg-white font-semibold py-2 w-[170px] rounded-md ">
          <span className="text-[#D00D00]">
            <FaPlus />
          </span>
          Tambah
        </Link>
      ) : (
        <div className="wrapper flex flex-row gap-x-8">
          {data.data.map((data: any) => {
            return (
              <Link key={data.id} href={`/main/${params.category}/${data.uuid}`} className=" px-7 text-center bg-white font-semibold py-2 w-fit rounded-md ">
                {data.club_shortname}
              </Link>
            );
          })}
          <Link href={`/main/${params.category}/new_team`} className="flex pl-7 gap-4 items-center bg-white font-semibold py-2 w-[170px] rounded-md ">
            <span className="text-[#D00D00]">
              <FaPlus />
            </span>
            Tambah
          </Link>
        </div>
        // redirect(`/${category}/${data.data.id}`)
      )}
    </div>
  );
}
