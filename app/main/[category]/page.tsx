import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";

type PageProps = {
  params: {
    category: string;
  };
};

async function getData(params: string) {
  const res = await fetch("http://localhost:4002/api/v1/club/c/" + params, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH}`,
    },
    cache: "no-store",
  });

  if (!res) {
    return "Error";
  }

  return res.json();
}

export default async function page({ params: { category } }: PageProps) {
  const data = await getData(category);

  return (
    <div className="w-full px-8">
      {data.data.length < 1 ? (
        <Link
          href={`main/${category}/new_team`}
          className="flex pl-7 gap-4 items-center bg-white font-semibold py-2 w-[170px] rounded-md "
        >
          <span className="text-[#D00D00]">
            <FaPlus />
          </span>
          Tambah
        </Link>
      ) : (
        <div className="wrapper flex flex-row gap-x-8">
          {data.data.map((data: any) => {
            return (
              <Link
                key={data.id}
                href={`/main/${category}/${data.uuid}`}
                className=" px-7 text-center bg-white font-semibold py-2 w-fit rounded-md "
              >
                {data.club_shortname}
              </Link>
            );
          })}
          <Link
            href={`/main/${category}/new_team`}
            className="flex pl-7 gap-4 items-center bg-white font-semibold py-2 w-[170px] rounded-md "
          >
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
