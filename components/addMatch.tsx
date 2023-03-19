import React from "react";

function AddMatch() {
  return (
    <>
      <div className="bg-white w-full mx-16 rounded-xl px-10 py-10">
        <button className="bg-[#137403] px-4 py-2 text-white mb-10 rounded-lg">
          Kembali
        </button>
        <div>
          <h1 className="opensans font-bold text-xl">Tambah Match </h1>
          <h4 className="font-semibold">
            Lengkapi data di bawah,jika ada ({" "}
            <span className="text-[#D00D00]">* </span>) maka wajib diisi{" "}
          </h4>
        </div>

        <div>
          <ul className=" flex text-gray-600 font-semibold justify-around max-w-[384px] h-12 mt-8 items-center bg-[#F2F3F7]      drop-shadow-md rounded-lg  capitalize    ">
            <li className="bg-[#D00D00] text-white px-4 py-1 rounded-lg">
              General match
            </li>
            <li>player pick</li>
            <li>player list</li>
          </ul>
        </div>

        <div className=" input_file_div mt-10 uper flex  justify-between    max-lg:flex-col ">
          <div>
            <div className="  flex flex-col justify-start mt-4">
              <label
                htmlFor="label"
                className=" uppercase  opensans font-bold "
              >
                Nama lawan<span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g Mancester United"
                value={""}
                className=" bg-[#F2F3F7] h-10 border-none w-[470px]  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>

            <div className="flex flex-col justify-start mt-4">
              <label
                htmlFor="label"
                className=" uppercase  opensans font-bold "
              >
                liga <span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g Red Devil"
                value={""}
                className=" bg-[#F2F3F7] h-10 border-none w-[470px] focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
            <div className="flex flex-col justify-start mt-4">
              <label htmlFor="label" className=" uppercase opensans font-bold ">
                tanggal tanding
              </label>
              <input
                type="date"
                placeholder="e.g MU "
                value={""}
                className=" bg-[#F2F3F7] h-10 border-none w-[470px] focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-start mt-4">
              <label htmlFor="label" className="uppercase opensans font-bold ">
                ball position <span className="lowercase text-xs">(%)</span><span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="number"
                placeholder="e.g 180"
                value={""}
                className=" bg-[#F2F3F7] h-10 border-none w-[470px] focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
            <div className="flex flex-col justify-start mt-4">
              <label htmlFor="label" className="uppercase opensans font-bold ">
                lost ball position <span className="lowercase text-xs">(%)</span>{" "}
                <span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="number"
                value={""}
                placeholder="e.g 58"
                className=" bg-[#F2F3F7] h-10 border-none w-[470px] focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
            <div className="flex flex-col justify-start mt-4">
              <label htmlFor="label" className="uppercase opensans font-bold ">
                corner kick 
                <span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="number"
                placeholder="e.g 58"
                value={""}
                className=" bg-[#F2F3F7]  h-10 border-none w-[470px] focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
          </div>
        </div>
        <button className="bg-[#D00D00] h-10 rounded-lg mt-10 text-white opensans w-full">
          Simpan
        </button>
      </div>
    </>
  );
}
export default AddMatch;
