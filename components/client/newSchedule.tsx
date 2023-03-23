import React from "react";
import { FiDownload } from "react-icons/fi";
function TambahLatihan() {
  return (
    <>
      <div className="bg-white w-full rounded-xl px-10 py-10">
        <div className=" flex gap-4">
          <button className="bg-[#137403] px-4  py-2 text-white mb-10 rounded-lg">Kembali</button>
        </div>
        <div>
          <h1 className="opensans font-bold text-xl">Tambah program latihan</h1>
          <div>
            <h4 className="font-semibold">
              Lengkapi data di bawah,jika ada ( <span className="text-[#D00D00]">* </span>) maka wajib diisi{" "}
            </h4>
          </div>
        </div>

        <div className=" input_file_div mt-10 grid grid-cols-1 md:grid-cols-2 gap-5   max-md:flex-col ">
          <div>
            <div className="flex flex-col justify-start mt-4 text-sm ">
              <label htmlFor="label" className="uppercase opensans font-bold ">
                Jenis latihan<span className="text-[#D00D00]">*</span>
              </label>
              <select name="jenis latihan" id="" className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold ">
                <option value="Taktik">Taktik</option>
                <option value="Fitnes">Fitnes</option>
                <option value="Fisik">Fisik</option>
              </select>
            </div>

            <div className="flex flex-col justify-start mt-4 text-sm">
              <label htmlFor="label" className=" uppercase  opensans font-bold ">
                Nama Latihan<span className="text-[#D00D00]">*</span>
              </label>
              <input type="text" placeholder="e.g Red Devil" value={""} className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold " />
            </div>
            <div className="flex flex-col justify-start mt-4 text-sm">
              <label htmlFor="label" className=" uppercase opensans font-bold ">
                Tanggal latihan <span className="text-[#D00D00]">*</span>
              </label>
              <input type="date" placeholder="e.g MU " value={""} className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold " />
            </div>
            <div className="flex flex-col justify-start mt-4 text-sm ">
              <label htmlFor="label" className="uppercase opensans font-bold ">
                Kategori<span className="text-[#D00D00]">*</span>
              </label>
              <select name="kategori" id="" className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold ">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="Hight">Hight</option>
              </select>
            </div>
            <div className="flex flex-col justify-start mt-4 text-sm ">
              <label htmlFor="label" className="uppercase opensans font-bold ">
                Intensitas<span className="text-[#D00D00]">*</span>
              </label>
              <select name="intensitas" id="" className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold ">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="Hight">Hight</option>
              </select>
            </div>
            <div className="flex flex-col justify-start mt-4 text-sm">
              <label htmlFor="label" className=" uppercase  opensans font-bold ">
                Durasi (menit)<span className="text-[#D00D00]">*</span>
              </label>
              <input type="number" placeholder="e.g 60" value={""} className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold " />
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-start mt-4 text-sm">
              <label htmlFor="label" className="uppercase opensans font-bold ">
                deskripsi<span className="text-[#D00D00]">*</span>
              </label>
              <textarea className=" bg-[#F2F3F7] h-32 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "></textarea>
            </div>
            <div className="flex flex-col justify-start mt-3 text-sm">
              <label htmlFor="label" className="uppercase opensans font-bold ">
                jurnal repitisi <span className="text-[#D00D00]">*</span>
              </label>
              <input type="text" value={""} placeholder="e.g 58" className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold " />
            </div>
            <div className="flex flex-col justify-start mt-3 text-sm">
              <label htmlFor="label" className="uppercase opensans font-bold ">
                jumlah pemain<span className="text-[#D00D00]">*</span>
              </label>
              <input type="text" value={""} placeholder="e.g 12" className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold " />
            </div>

            <div className="flex flex-col justify-start mt-4 text-sm  ">
              <label htmlFor="label" className="uppercase opensans font-bold ">
                foto latihan<span className="text-[#D00D00]">*</span>
              </label>
              <input type="file" value={""} className=" block w-full outline-none file:h-full file:bg-[#dddddd] file:border-none file:w-[118px] h-10 mt-2 text-gray-900 border rounded-lg cursor-pointer bg-[#F2F3F7] focus:outline-none  " />
            </div>
          </div>
        </div>
        <button className="bg-[#D00D00] h-10 rounded-lg mt-10 text-white opensans w-full">Simpan</button>
      </div>
    </>
  );
}

export default TambahLatihan;
