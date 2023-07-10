"use client";
import { FiDownload } from "react-icons/fi";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { instance } from "@/config/axios";
import LoadingComponent from "@/components/loading/formLoading";

type PageProps = {
  params: {
    category: string;
    team: string;
    date: string;
  };
};
function AddExercise({ params: query }: PageProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
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
    clubId: query.team,
    periodisasi_photo: null,
  });
  useEffect(() => {
    instance
      .get("/periodisasi/" + query.date)
      .then((result: any) => {
        setData(result.data.data);
        setLoading(false);
      })
      .catch((err: any) => {
        setLoading(false);
        throw new Error(err);
      });
  }, []);
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // @ts-ignore
    router.push(`/main/${query.category}/${query.team}/schedule`);
  };

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <div className="bg-white w-full rounded-xl px-10 py-10">
          <div className=" flex gap-4 px-10">
            <button
              onClick={() => {
                router.push("./");
              }}
              className="bg-[#137403] px-4  py-2 text-white mb-10 rounded-lg"
            >
              Kembali
            </button>
            <button className="bg-[#1790FF] px-8   py-2 text-white mb-10 rounded-lg">Edit</button>
            <button className="bg-[#2846AF] flex items-center gap-2 px-4 py-2 text-white mb-10 rounded-lg">
              Download
              <FiDownload />
            </button>
          </div>
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
                      value={data.type}
                      defaultValue={""}
                      className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                    >
                      <option value="" disabled>
                        Pilih Jenis Latihan
                      </option>
                      <option value="taktik">Taktik</option>
                      <option value="taktik">Teknik</option>
                      <option value="fitnes">Fitnes</option>
                      <option value="fisik">Fisik</option>
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
                      value={data.category}
                      onChange={(e) => {
                        handleOption(e);
                      }}
                      className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                    >
                      <option value="" disabled>
                        Kategori
                      </option>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
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
                      value={data.intensity}
                      className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                    >
                      <option value="">Intensitas</option>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
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
                      name="periodisasi_photo"
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
        </div>
      )}
    </>
  );
}

export default AddExercise;
