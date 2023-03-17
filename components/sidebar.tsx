import React from "react";
import { MdOutlineAdd } from "react-icons/md";
import Side_Comps from "./side_comps/Side_Comps";

export default function Sidebar() {
  return (
    <aside className="w-2/12 flex flex-col px-8 gap-y-6">
      <div className="plus-button">
        <button className="flex flex-row w-full items-center gap-4 text-base pl-4 pr-14 font-medium py-2 bg-white rounded-md">
          <div className="icon">
            <MdOutlineAdd className="text-xl text-primary-red" />
          </div>
          <p>Tambah</p>
        </button>
      </div>
      <div className="category">
        <div className="title">
          <p className="font-bold text-base ">Kategori</p>
        </div>
      </div>
      {/* @ts-ignore */}
      <Side_Comps />
    </aside>
  );
}
