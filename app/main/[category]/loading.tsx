import React from "react";

export default function Loading() {
  const element = [1, 2, 3];
  return (
    <div className="flex gap-x-5 w-full px-7">
      {element.map((e:number) => {
        return (
          <div key={e} className="bg-white w-full animate-pulse rounded-lg shadow-md">
            <div className="h-64"></div>
            <div className="p-6">
              <div className="h-6 bg-gray-200 mb-4"></div>
              <div className="h-4 bg-gray-200 mb-2"></div>
              <div className="h-4 bg-gray-200 mb-2"></div>
              <div className="h-4 bg-gray-200 mb-2"></div>
              <div className="h-4 bg-gray-200 mb-2"></div>
              <div className="h-4 bg-gray-200"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
