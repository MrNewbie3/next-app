import TeamCard from "@/components/server/teamcard";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { FaPlus } from "react-icons/fa";

type PageProps = {
  params: {
    category: string;
  };
};

async function getData(params: string) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos/" + params
  );
  if (!res) {
    return "Error";
  }
  return res.json();
}

export default async function page({ params: { category } }: PageProps) {
  const data = [await getData(category)];
  return (
    <div className="w-full px-8">
      {data.length < 1 ? (
        <Link
          href={`${category}/new_team`}
          className="flex pl-7 gap-4 items-center bg-white font-semibold py-2 w-[170px] rounded-md "
        >
          <span className="text-[#D00D00]">
            <FaPlus />
          </span>
          Tambah
        </Link>
      ) : (
        redirect(`/${category}/${data[0].id}`)
      )}
    </div>
  );
}
