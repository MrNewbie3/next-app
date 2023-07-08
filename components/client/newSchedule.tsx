"use client";
import { getAuthTokenClient } from "@/config/cookie";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
type PageProps = {
  params: { category: string; team: string };
};
function TambahLatihan({ params: query }: PageProps) {
  const router = useRouter();

  const [data, setData] = useState({
    name_exercise: "",
    type: "",
    description_exercise: "",
    category: "",
    intensity: "",
    date_exercise: "",
    time_exercise: "",
    repetition: "",
    number_player: "",
    club: query.team,
    photo_exercise: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;
    setData((prevState) => ({
      ...prevState,
      // @ts-ignore
      [name]: type === "file" ? files[0] : value,
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cookieStore = getAuthTokenClient();

    let formData = new FormData();
    for (const key in data) {
      // @ts-ignore
      formData.append(key, data[key]);
    }
    const post = await fetch(`${process.env.NEXT_PUBLIC_URL}/periodisasi/`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${cookieStore}`,
      },
    });
    const res = await post.json();
    if (!post.ok) {
      alert("failed to post");
      return alert(res.message);
    }

    alert("sukses menyimpan data");
    return router.push(`/main/${query.category}/${query.team}`);
  };
  return (
    <>
      <button
        onClick={() => {
          router.push(`/main/${query.category}/${query.team}/periodisasi`);
        }}
        className="bg-[#137403] px-4  py-2 text-white mb-10 rounded-lg"
      >
        Kembali
      </button>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="bg-white w-full rounded-xl px-10 py-10">
          <div className=" flex gap-4"></div>
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
                  name="type"
                  onChange={(e) => {
                    handleOption(e);
                  }}
                  id=""
                  defaultValue={""}
                  className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                >
                  <option value="" disabled>
                    Pilih Jenis Latihan
                  </option>
                  <option value="Taktik">Taktik</option>
                  <option value="Taktik">Teknik</option>
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
                  name="name_exercise"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  placeholder="e.g Red Devil"
                  value={data.name_exercise}
                  className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>
              <div className="flex flex-col justify-start mt-4 text-sm">
                <label htmlFor="label" className=" uppercase opensans font-bold ">
                  Tanggal latihan <span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="date"
                  name="date_exercise"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  placeholder="e.g MU "
                  value={data.date_exercise}
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
                  defaultValue={""}
                  onChange={(e) => {
                    handleOption(e);
                  }}
                  className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                >
                  <option value="" disabled>
                    Kategori
                  </option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="Hight">Hight</option>
                </select>
              </div>
              <div className="flex flex-col justify-start mt-4 text-sm ">
                <label htmlFor="label" className="uppercase opensans font-bold ">
                  intensitas<span className="text-[#D00D00]">*</span>
                </label>
                <select
                  name="intensity"
                  onChange={(e) => {
                    handleOption(e);
                  }}
                  id=""
                  defaultValue={""}
                  className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                >
                  <option value="">Intensitas</option>
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
                  name="time_exercise"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  placeholder="e.g 60"
                  value={data.time_exercise}
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
                  name="description_exercise"
                  onChange={(e) => {
                    handleChangeText(e);
                  }}
                  value={data.description_exercise}
                  className=" bg-[#F2F3F7] h-32 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                ></textarea>
              </div>
              <div className="flex flex-col justify-start mt-3 text-sm">
                <label htmlFor="label" className="uppercase opensans font-bold ">
                  jurnal repitisi <span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="text"
                  name="repetition"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.repetition}
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
                  name="number_player"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.number_player}
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
                  name="photo_exercise"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  className=" block w-full outline-none file:h-full file:bg-[#dddddd] file:border-none file:w-[118px] h-10 mt-2 text-gray-900 border rounded-lg cursor-pointer bg-[#F2F3F7] focus:outline-none  "
                />
              </div>
            </div>
          </div>
          <button type="submit" className="bg-[#D00D00] h-10 rounded-lg mt-10 text-white opensans w-full">
            Simpan
          </button>
        </div>
      </form>
    </>
  );
}

export default TambahLatihan;
