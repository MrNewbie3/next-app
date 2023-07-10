import React from "react";
// Loading Component
const LoadingComponent = () => {
  return (
    <div className="bg-white w-full rounded-xl px-10 py-10 animate-pulse">
      <div className=" flex gap-4 mb-20">
        <div className="w-24 h-6 bg-gray-200 rounded"></div>
        <div className="w-24 h-6 bg-gray-200 rounded"></div>
        {/* Skeleton elements */}
      </div>
      <div className="animate-pulse">
        <div className="h-8 w-64 bg-gray-200 rounded-lg mb-4"></div>
        <div className="h-4 w-48 bg-gray-200 rounded-lg"></div>
      </div>

      <div className="input_file_div mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-md:flex-col">
        <div>
          <div className="flex flex-col justify-start mt-4 text-sm">
            <label htmlFor="label" className="uppercase opensans font-bold">
              <div className="bg-gray-200 h-10 w-full rounded-lg"></div>
            </label>
          </div>
          <div className="flex flex-col justify-start mt-4 text-sm">
            <label htmlFor="label" className="uppercase opensans font-bold">
              <div className="bg-gray-200 h-10 w-full rounded-lg"></div>
            </label>
          </div>
          <div className="flex flex-col justify-start mt-4 text-sm">
            <label htmlFor="label" className="uppercase opensans font-bold">
              <div className="bg-gray-200 h-10 w-full rounded-lg"></div>
            </label>
          </div>
          <div className="flex flex-col justify-start mt-4 text-sm">
            <label htmlFor="label" className="uppercase opensans font-bold">
              <div className="bg-gray-200 h-10 w-full rounded-lg"></div>
            </label>
          </div>
          <div className="flex flex-col justify-start mt-4 text-sm">
            <label htmlFor="label" className="uppercase opensans font-bold">
              <div className="bg-gray-200 h-10 w-full rounded-lg"></div>
            </label>
          </div>
          <div className="flex flex-col justify-start mt-4 text-sm">
            <label htmlFor="label" className="uppercase opensans font-bold">
              <div className="bg-gray-200 h-10 w-full rounded-lg"></div>
            </label>
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-start mt-4 text-sm">
            <label htmlFor="label" className="uppercase opensans font-bold">
              <div className="bg-gray-200 h-32 w-full rounded-lg"></div>
            </label>
          </div>
          <div className="flex flex-col justify-start mt-3 text-sm">
            <label htmlFor="label" className="uppercase opensans font-bold">
              <div className="bg-gray-200 h-10 w-full rounded-lg"></div>
            </label>
          </div>
          <div className="flex flex-col justify-start mt-3 text-sm">
            <label htmlFor="label" className="uppercase opensans font-bold">
              <div className="bg-gray-200 h-10 w-full rounded-lg"></div>
            </label>
          </div>
        </div>
      </div>
      <button type="submit" className="bg-gray-200 h-10 rounded-lg mt-10 text-white opensans w-full" disabled></button>
    </div>
  );
};

export default LoadingComponent;
