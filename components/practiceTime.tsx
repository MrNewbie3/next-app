"use client";
import { instance } from "@/config/axios";
import { Tab } from "@headlessui/react";
import { format, getTime, parseISO } from "date-fns";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiDownload, FiTrash } from "react-icons/fi";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
type PageProps = {
  params: {
    team: any;
    category: any;
  };
};
function PraticeTime({ params: query }: PageProps) {
  const [data, setData] = useState(null);
  let upcoming: any = [];
  let history: any = [];
  useEffect(() => {
    instance
      .get("/periodisasi")
      .then((result: any) => {
        setData(result.data.data);
      })
      .catch((err: any) => {
        throw new Error(err);
      });
  }, []);
  const handleDelete = (params: string) => {
    instance
      .delete("periodisasi/" + params)
      .then((result: any) => {
        alert("success delete");
        typeof window != "undefined" ? window.location.reload() : 0;
      })
      .catch((err: any) => {
        alert("failed to delete");
        return alert(err);
      });
  };
  if (data !== null) {
    // @ts-ignore
    data.map((params) => {
      const getDate = getTime(parseISO(params.date_exercise));
      getDate >= Date.now() ? upcoming.push(params) : history.push(params);
    });
  }
  return (
    <>
      {data === null && <h1>Loading</h1>}
      {data !== null && (
        <div className="bg-white w-full  rounded-xl px-10 py-10">
          <div className=" flex gap-4">
            <Link href={`/main/${query.category}/${query.team}/periodisasi`}>
              <button className="bg-[#137403] px-4  py-2 text-white mb-10 rounded-lg">Kembali</button>
            </Link>
            <button className="bg-[#1790FF] px-8   py-2 text-white mb-10 rounded-lg">Edit</button>
            <button className="bg-[#2846AF] flex items-center gap-2 px-4 py-2 text-white mb-10 rounded-lg">
              Download
              <FiDownload />
            </button>
          </div>
          <div>
            <h1 className="opensans font-bold text-xl capitalize">Jadwal lengkap program latihan </h1>
            <h4 className="font-semibold">Data di bawah berisi data yang sudah lewat dan yang akan datang</h4>
          </div>
          <Tab.Group>
            <Tab.List className=" flex text-gray-600 font-semibold justify-around gap-x-4 w-fit px-3 py-2 box-content mt-8 items-center bg-[#F2F3F7] rounded-lg  capitalize    ">
              <Tab className={({ selected }) => classNames(!selected ? "transition-all duration-300 ease-out" : "bg-[#D00D00]  text-white px-4 py-1 focus:outline-none rounded-lg")}>History</Tab>
              <Tab className={({ selected }) => classNames(!selected ? "transition-all duration-300 ease-out" : "bg-[#D00D00]  text-white px-4 py-1 focus:outline-none rounded-lg")}>Upcomming</Tab>
            </Tab.List>

            <Tab.Panels>
              <Tab.Panel className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-4 mt-8">
                {history.map((params: any, index: number) => {
                  return (
                    <div key={index} className="justify-between bg-[#F2F3F7] items-center px-4 py-2 rounded-lg  flex">
                      <Link href={`/main/${query.category}/${query.team}/schedule/${index}`} className=" ">
                        <div className="wrapper flex gap-5">
                          <h1 className="text-2xl font-bold  text-[#D00D00]">{index + 1}</h1>
                          <div>
                            <div className="flex gap-1">
                              <p className="text-xs text-[#137403] font-bold -mb-1">{params.type}</p>
                            </div>
                            <h2 className="text-base font-medium  capitalize">{new Date(params.date_exercise).toLocaleDateString("ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" }) || "belum terjadwal"}</h2>
                          </div>
                        </div>
                      </Link>
                      <button
                        onClick={() => {
                          handleDelete(params.uuid);
                        }}
                        className="delete text-[#D00D00]"
                      >
                        <FiTrash size={20} />
                      </button>
                    </div>
                  );
                })}
              </Tab.Panel>
              <Tab.Panel className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-4 mt-8">
                {upcoming.map((params: any, index: number) => {
                  return (
                    <div key={index} className="justify-between bg-[#F2F3F7] items-center px-4 py-2 rounded-lg  flex">
                      <Link href={`/main/${query.category}/${query.team}/schedule/${index}`} className=" ">
                        <div className="wrapper flex gap-5">
                          <h1 className="text-2xl font-bold  text-[#D00D00]">{index + 1}</h1>
                          <div>
                            <div className="flex gap-1">
                              <p className="text-xs text-[#137403] font-bold -mb-1">{params.type}</p>
                            </div>
                            <h2 className="text-base font-medium  capitalize">{new Date(params.date_exercise).toLocaleDateString("ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" }) || "belum terjadwal"}</h2>
                          </div>
                        </div>
                      </Link>
                      <button
                        onClick={() => {
                          handleDelete(params.uuid);
                        }}
                        className="delete text-[#D00D00]"
                      >
                        <FiTrash size={20} />
                      </button>
                    </div>
                  );
                })}
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      )}
    </>
  );
}

export default PraticeTime;
