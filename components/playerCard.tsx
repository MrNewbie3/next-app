import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GrFormNext } from "react-icons/gr";

type PageProps = {
  params: {
    category: String;
    team: String;
    id_player: String;
  };
};

async function getData(params: String) {
  const cookieStore = cookies();

  const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/player/` + params, {
    headers: {
      Authorization: `Bearer ${cookieStore.get("token")?.value}`,
    },
  });
  if (!data.ok) {
    return console.log(data.json());
  }
  return data.json();
}

async function PlayerCard({ params: query }: PageProps) {
  const data = await getData(query.id_player);

  return (
    <>
      <div className="w-full rounded-xl px-10 py-10">
        <div className="head flex justify-between  items-center ">
          <Link href={`/main/${query.category}/${query.team}/player`}>
            <h1 className="capitalize font-semibold flex opensans text-xs text-gray-600">
              player
              <span className="flex items-center">
                <GrFormNext />
                {data.data.position}
                <GrFormNext />
              </span>
              <span className="text-black"> {data.data.nickname}</span>
            </h1>
          </Link>
          <button className="bg-[#D00D00] rounded-lg  text-white px-6 py-1.5">Edit Pemain</button>
        </div>

        <div className="card flex w-full  max-md:flex-col gap-20 mt-8 ">
          <div className="flex w-2/4  gap-4">
            <Image
              src={
                data.data.photo_player ||
                "https://static.vecteezy.com/system/resources/previews/002/534/006/original/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg"
              }
              width={"128"}
              height={"150"}
              alt=""
              className="object-cover rounded-2xl w-[150px] h-[192px] "
            ></Image>
            <div className="">
              <h1 className="font-semibold mt-8 text-[#9d9d9d] text-base capitalize">{data.data.fullname}</h1>
              <h1 className="font-bold capitalize mt-1 text-2xl text-gray-900 ">{data.data.nickname}</h1>
              <h1 className="font-bold capitalize mt-1 text-primary-red text-5xl ">
                <span>#</span>
                {data.data.number_of_player}
              </h1>
            </div>
          </div>
          <div className="data_tim  uppercase grid  w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-6 ">
            <div>
              <label className="text-xs font-bold">Tanggal Lahir</label>
              <p className=" capitalize bg-white h-10 w-full p-2 rounded-lg font-semibold">{data.data.date_of_birth}</p>
            </div>
            <div>
              <label className="text-xs font-bold">Jenis Kelamin</label>
              <p className=" capitalize bg-white h-10 w-full p-2 rounded-lg font-semibold">{data.data.gender}</p>
            </div>
            <div>
              <label className="text-xs font-bold">posisi</label>
              <p className=" capitalize bg-white h-10 w-full p-2 rounded-lg font-semibold">{data.data.position}</p>
            </div>
            <div>
              <label className="text-xs font-bold">Tempat Lahir</label>
              <p className=" capitalize bg-white h-10 w-full p-2 rounded-lg font-semibold">{data.data.place_of_birth}</p>
            </div>{" "}
            <div>
              <label className="text-xs font-bold">Berat Badan</label>
              <p className=" capitalize bg-white h-10 w-full p-2 rounded-lg font-semibold">{data.data.weight} Kg</p>
            </div>
            <div>
              <label className="text-xs font-bold">Tinggi Badan</label>
              <p className=" capitalize bg-white h-10 w-full p-2 rounded-lg font-semibold">{data.data.height} cm</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayerCard;
