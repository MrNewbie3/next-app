import React from "react";
function AddPlayer() {
  return (
    <>
      <div className="bg-white w-full mx-16 rounded-xl px-10 py-10">
        <button className="bg-[#137403] px-4 py-2 text-white mb-10 rounded-lg">
          Kembali
        </button>
        <div>
          <h1 className="opensans font-bold text-xl">Tambah Player </h1>
          <h4 className="font-semibold">
            Lengkapi data di bawah,jika ada ({" "}
            <span className="text-[#D00D00]">* </span>) maka wajib diisi{" "}
          </h4>
        </div>

        <div className=" input_file_div mt-10 uper flex  justify-between    max-lg:flex-col ">
          <div>
            <div className="  flex flex-col justify-start mt-4">
              <label
                htmlFor="label"
                className=" uppercase  opensans font-bold "
              >
                Nama lengkap <span className="text-[#D00D00]">*</span>
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
                Nama tampilan <span className="text-[#D00D00]">*</span>
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
                nomor punggung
              </label>
              <input
                type="text"
                placeholder="e.g MU "
                value={""}
                className=" bg-[#F2F3F7] h-10 border-none w-[470px] focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
            <div className="flex flex-col justify-start mt-4">
              <label htmlFor="label" className="uppercase opensans font-bold ">
                jenis kelamin <span className="text-[#D00D00]">*</span>
              </label>
              <select name="jenis_kelamin" id=""   className=" bg-[#F2F3F7] h-10 border-none w-[470px] focus:outline-none  p-2 mt-2 rounded-lg font-semibold "  >
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">perempuan</option>
              </select>
            </div>
            <div className="flex flex-col justify-start mt-4">
              <label htmlFor="label" className="uppercase opensans font-bold ">
                tempat lahir <span className="text-[#D00D00]">*</span>
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
              <label htmlFor="label" className="uppercase opensans font-bold ">
                Tanggal lahir <span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="date"
                value={""}
                className=" bg-[#F2F3F7] h-10 border-none w-[470px] focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
            <div className="flex flex-col justify-start mt-4">
              <label htmlFor="label" className="uppercase opensans font-bold ">
                tinggi badan <span className="lowercase text-xs">(cm)</span> <span className="text-[#D00D00]">*</span>
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
                berat badan <span className="lowercase text-xs">(Kg)</span><span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="number"
                placeholder="e.g 58"
                value={""}
                className=" bg-[#F2F3F7]  h-10 border-none w-[470px] focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
            <div className="flex flex-col justify-start mt-4">
              <label htmlFor="label" className="uppercase opensans font-bold ">
                foto pemain <span className="text-[#D00D00]">*</span>
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
          Simpan
        </button>
      </div>
    </>
  );
}

export default AddPlayer;
