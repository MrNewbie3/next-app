import React from "react";
function AddTeam() {
  return (
    <>
      <div className="bg-white w-full  rounded-xl px-10 py-10">
        <div>
          <h1 className="opensans font-bold text-xl">Tambah Tim </h1>
          <h4 className="font-semibold">
            Lengkapi data di bawah,jika ada ({" "}
            <span className="text-[#D00D00]">* </span>) maka wajib diisi{" "}
          </h4>
        </div>

        <div className=" input_file_div mt-10 uper flex  justify-between    max-lg:flex-col ">
          <div>
            <div className="  flex flex-col justify-start mt-4">
              <label htmlFor="label" className=" opensans font-bold uppercase text-sm">
                Nama Asli <span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g Mancester United"
                value={""}
                className=" bg-[#F2F3F7] h-10 border-none w-[470px]  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>

            <div className="flex flex-col justify-start mt-4">
              <label htmlFor="label" className="opensans font-bold uppercase text-sm">
                Nama Julukan <span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g Red Devil"
                value={""}
                className=" bg-[#F2F3F7] h-10 border-none w-[470px] focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
            <div className="flex flex-col justify-start mt-4">
              <label htmlFor="label" className="opensans font-bold uppercase text-sm">
                Nama Lain
              </label>
              <input
                type="text"
                placeholder="e.g MU "
                value={""}
                className=" bg-[#F2F3F7] h-10 border-none w-[470px] focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
            <div className="flex flex-col justify-start mt-4">
              <label htmlFor="label" className="opensans font-bold uppercase text-sm">
                Asal <span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g Manchester"
                value={""}
                className=" bg-[#F2F3F7] h-10 border-none w-[470px] focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-start mt-4">
              <label htmlFor="label" className="opensans font-bold uppercase text-sm">
                Tanggal Berdiri <span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="date"
                value={""}
                className=" bg-[#F2F3F7] h-10 border-none w-[470px] focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
            <div className="flex flex-col justify-start mt-4">
              <label htmlFor="label" className="opensans font-bold uppercase text-sm">
                season dimulai <span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="date"
                value={""}
                className=" bg-[#F2F3F7] h-10 border-none w-[470px] focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
            <div className="flex flex-col justify-start mt-4">
              <label htmlFor="label" className="opensans font-bold uppercase text-sm">
                season berakhir <span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="date"
                value={""}
                className=" bg-[#F2F3F7]  h-10 border-none w-[470px] focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
            <div className="flex flex-col justify-start mt-4">
              <label htmlFor="label" className="opensans font-bold uppercase text-sm">
                logo tim <span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="file"
                value={""}
                className=" block w-[470px] outline-none file:h-full file:bg-[#dddddd] file:border-none file:w-[118px] h-10 mt-2 text-gray-900 border rounded-lg cursor-pointer bg-[#F2F3F7] focus:outline-none  "
              />
            </div>
          </div>
        </div>
        <button className="bg-[#D00D00] h-10 rounded-lg mt-10 text-white opensans w-full">
          Submit
        </button>
      </div>
    </>
  );
}

export default AddTeam;
