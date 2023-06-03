import React from "react";
import { PacmanLoader } from "react-spinners";

export default function loading() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 z-[999]">
      <div className="flex items-center mb-4">
        <PacmanLoader color={"#ffffff"} />
      </div>
    </div>
  );
}
