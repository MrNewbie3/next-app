import React from "react";

export default function loading() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 z-[999]">
      <div className="flex items-center mb-4">
        <div className="h-4 w-4 bg-white rounded-full mr-1 animate-bounce"></div>
        <div className="h-4 w-4 bg-white rounded-full mr-1 animate-bounce"></div>
        <div className="h-4 w-4 bg-white rounded-full mr-1 animate-bounce"></div>
      </div>
    </div>
  );
}
