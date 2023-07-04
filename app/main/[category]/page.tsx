import Authentication from "@/components/client/authentication";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { NextRequest } from "next/server";
import React from "react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";

interface PageProps {
  params: {
    category: string;
  };
}

async function getData(category: string) {
  const cookieStore = cookies();
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/club/c/` + category, {
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
      <Authentication />
      {data.data.length < 1 ? (
        <Link href={`${params.category}/new_team`} className="flex pl-7 gap-4 items-center bg-white font-semibold py-2 w-[170px] rounded-md ">
          <span className="text-[#D00D00]">
            <FaPlus />
          </span>
          Tambah
        </Link>
      ) : (
        <div className="wrapper grid grid-cols-3 gap-5  ">
          <Link href={`/main/${params.category}/new_team`} className="flex flex-col justify-center active:bg-zinc-400 active:scale-75 transition duration-50 gap-4 items-center shadow-md bg-white font-semibold py-2 w-full rounded-md ">
            <span className="text-gray-300">
              <FaPlus className="text-9xl" />
            </span>
            Tambah Team
          </Link>
          {data.data.map((data: any) => {
            return (
              <div key={data.id} className="max-w-md mx-auto hover:translate-y-[-20px] transition-all duration-300 bg-white min-w-full rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <Image className="object-cover w-full h-64" width={"430"} height={"430"} src={data.club_image || "https://naurok-test2.nyc3.digitaloceanspaces.com/248846/images/897517_1666207808.jpg"} alt={data.club_name} />
                <div className="p-6">
                  <Link href={`/main/${params.category}/${data.uuid}`} className="hover:cursor-pointer hover:underline">
                    <h2 className="text-2xl font-bold mb-4 uppercase">{data.club_name}</h2>
                  </Link>
                  <p className="text-gray-600 mb-2 capitalize">
                    <strong>Nickname:</strong> {data.club_nickname}
                  </p>
                  <p className="text-gray-600 mb-2 capitalize">
                    <strong>Short Name:</strong> {data.club_shortname}
                  </p>
                  <p className="text-gray-600 mb-2 capitalize">
                    <strong>Origin:</strong> {data.club_origin}
                  </p>
                  <p className="text-gray-600 mb-2 capitalize">
                    <strong>Established:</strong> {data.club_established}
                  </p>
                  <p className="text-gray-600 capitalize">
                    <strong>Season:</strong> {data.start_season} - {data.end_season}
                  </p>
                  <div className="flex justify-end mt-4">
                    <button className="text-blue-500 hover:text-blue-700 mr-2">
                      <Link href={`/main/${params.category}/detail_team/${data.uuid}/`} className="hover:cursor-pointer hover:underline">
                        <FaEdit />
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        // redirect(`/${category}/${data.data.id}`)
      )}
    </div>
  );
}
