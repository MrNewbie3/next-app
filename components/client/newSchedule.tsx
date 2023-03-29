"use client";
import React, { useState } from "react";
type PageProps = {
  params: { query: string };
};
function TambahLatihan() {
  const [data, setData] = useState({
    jenis_latihan: "",
    name_match: "",
    date: "",
    category: "",
    intensitas: "",
    duration: "",
    description: "",
    journal: "",
    amount_player: "",
    pict: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
              <select
                name="jenis_latihan"
                onChange={(e) => {
                  handleOption(e);
                }}
                id=""
                className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              >
                <option value="Taktik">Taktik</option>
                <option value="Fitnes">Fitnes</option>
                <option value="Fisik">Fisik</option>
              </select>
            </div>

            <div className="flex flex-col justify-start mt-4 text-sm">
              <label htmlFor="label" className=" uppercase  opensans font-bold ">
                Nama Latihan<span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="text"
                name="name_match"
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="e.g Red Devil"
                value={data.name_match}
                className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
            <div className="flex flex-col justify-start mt-4 text-sm">
              <label htmlFor="label" className=" uppercase opensans font-bold ">
                Tanggal latihan <span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="date"
                name="date"
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="e.g MU "
                value={data.date}
                className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
            <div className="flex flex-col justify-start mt-4 text-sm ">
              <label htmlFor="label" className="uppercase opensans font-bold ">
                Kategori<span className="text-[#D00D00]">*</span>
              </label>
              <select
                name="category"
                id=""
                onChange={(e) => {
                  handleOption(e);
                }}
                className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="Hight">Hight</option>
              </select>
            </div>
            <div className="flex flex-col justify-start mt-4 text-sm ">
              <label htmlFor="label" className="uppercase opensans font-bold ">
                Intensitas<span className="text-[#D00D00]">*</span>
              </label>
              <select
                name="intensitas"
                onChange={(e) => {
                  handleOption(e);
                }}
                id=""
                className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="Hight">Hight</option>
              </select>
            </div>
            <div className="flex flex-col justify-start mt-4 text-sm">
              <label htmlFor="label" className=" uppercase  opensans font-bold ">
                Durasi (menit)<span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="number"
                name="duration"
                onChange={(e) => {
                  handleChange(e);
                }}
                placeholder="e.g 60"
                value={data.duration}
                className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-start mt-4 text-sm">
              <label htmlFor="label" className="uppercase opensans font-bold ">
                deskripsi<span className="text-[#D00D00]">*</span>
              </label>
              <textarea
                name="description"
                onChange={(e) => {
                  handleChangeText(e);
                }}
                value={data.description}
                className=" bg-[#F2F3F7] h-32 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              ></textarea>
            </div>
            <div className="flex flex-col justify-start mt-3 text-sm">
              <label htmlFor="label" className="uppercase opensans font-bold ">
                jurnal repitisi <span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="text"
                name="journal"
                onChange={(e) => {
                  handleChange(e);
                }}
                value={data.journal}
                placeholder="e.g 58"
                className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>
            <div className="flex flex-col justify-start mt-3 text-sm">
              <label htmlFor="label" className="uppercase opensans font-bold ">
                jumlah pemain<span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="text"
                name="amount_player"
                onChange={(e) => {
                  handleChange(e);
                }}
                value={data.amount_player}
                placeholder="e.g 12"
                className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
              />
            </div>

            <div className="flex flex-col justify-start mt-4 text-sm  ">
              <label htmlFor="label" className="uppercase opensans font-bold ">
                foto latihan<span className="text-[#D00D00]">*</span>
              </label>
              <input
                type="file"
                name="pict"
                onChange={(e) => {
                  handleChange(e);
                }}
                value={""}
                className=" block w-full outline-none file:h-full file:bg-[#dddddd] file:border-none file:w-[118px] h-10 mt-2 text-gray-900 border rounded-lg cursor-pointer bg-[#F2F3F7] focus:outline-none  "
              />
            </div>
          </div>
        </div>
        <button className="bg-[#D00D00] h-10 rounded-lg mt-10 text-white opensans w-full">Simpan</button>
      </div>
    </>
  );
}

export default TambahLatihan;
