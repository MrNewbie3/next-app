"use client";
import { redirect, useRouter } from "next/navigation";
import React, { Suspense, useState } from "react";
// to: @lakyulakyu
// remind me to repair file input form @MrNewbie3
type PageProps = {
  params: { query: string };
};
function AddPlayer({ params: query }: PageProps) {
  const router = useRouter();
  const [data, setData] = useState({
    fullname: "",
    nickname: "",
    number_of_player: "",
    gender: "",
    place_of_birth: "",
    date_of_birth: "",
    height: "",
    weight: "",
    username: "marties 2",
    password: "rahasia123",
    photo_player: null,
    // @ts-ignore
    clubId: parseInt(query.category),
  });
  async function postData(e: React.FormEvent) {
    e.preventDefault();
    const dataForm = new FormData();
    dataForm.append("fullname", data.fullname);
    dataForm.append("nickname", data.nickname);
    dataForm.append("photo_player", data.photo_player);
    dataForm.append("number_of_player", data.number_of_player);
    dataForm.append("gender", data.gender);
    dataForm.append("place_of_birth", data.place_of_birth);
    dataForm.append("date_of_birth", data.date_of_birth);
    dataForm.append("height", data.height);
    dataForm.append("weight", data.weight);
    dataForm.append("username", data.username);
    dataForm.append("password", data.password);
    dataForm.append("clubId", data.clubId);
    alert("oke");

    const post = await fetch("http://localhost:4002/api/v1/player/", {
      method: "POST",
      body: dataForm,

      headers: {
        Authentication:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY4MjkwNDM5MCwiZXhwIjoxNjgyOTE1MTkwfQ.OE-PDGMS6u4km8ZDyvtPmyNv2jef2oYdkaDpbFrIVzY",
      },
    });
    const res = await post.json();
    console.log(post.formData);

    // window.location.reload();
    if (!res.ok) console.log(res);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setData({
      ...data,
      [name]: files ? files[0] : value,
    });
  };
  const handleOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // @ts-ignore
    router.push(`/${query.category}/${query.team}`);
  };
  return (
    <>
      <div className="bg-white w-full  rounded-xl px-10 py-10">
        <button
          className="bg-[#137403] px-4 py-2 text-white mb-10 rounded-lg"
          onClick={() => {
            router.back();
          }}
        >
          Kembali
        </button>
        <div>
          <h1 className="opensans font-bold text-xl">Tambah Player </h1>
          <h4 className="font-semibold">
            Lengkapi data di bawah,jika ada ({" "}
            <span className="text-[#D00D00]">* </span>) maka wajib diisi
          </h4>
        </div>
        <form
          encType="multipart/form-data"
          onSubmit={(e) => {
            postData(e);
          }}
          className=" input_file_div mt-10 flex  justify-between flex-col "
        >
          <div className="wrapper flex flex-row gap-x-5">
            <div className="w-full">
              <div className="  flex flex-col justify-start mt-4">
                <label
                  htmlFor="label"
                  className=" uppercase  opensans font-bold text-sm "
                >
                  Nama lengkap <span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="text"
                  name="fullname"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  placeholder="e.g Mancester United"
                  value={data.fullname}
                  className=" bg-[#F2F3F7] h-10 border-none w-full  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>

              <div className="flex flex-col justify-start mt-4 text-sm">
                <label
                  htmlFor="label"
                  className=" uppercase  opensans font-bold "
                >
                  Nama tampilan <span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="text"
                  name="nickname"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  placeholder="e.g Red Devil"
                  value={data.nickname}
                  className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>
              <div className="flex flex-col justify-start mt-4 text-sm">
                <label
                  htmlFor="label"
                  className=" uppercase opensans font-bold "
                >
                  nomor punggung
                </label>
                <input
                  type="number"
                  name="number_of_player"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  placeholder="e.g 58"
                  value={data.number_of_player}
                  className=" bg-[#F2F3F7]  h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>
              <div className="flex flex-col justify-start mt-4 text-sm">
                <label
                  htmlFor="label"
                  className="uppercase opensans font-bold "
                >
                  jenis kelamin <span className="text-[#D00D00]">*</span>
                </label>
                <select
                  name="gender"
                  onChange={(e) => {
                    handleOption(e);
                  }}
                  id=""
                  className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                >
                  <option disabled selected>
                    Pilih jenis kelamin
                  </option>
                  <option value="laki-laki">Laki-laki</option>
                  <option value="perempuan">perempuan</option>
                </select>
              </div>
              <div className="flex flex-col justify-start mt-4 text-sm">
                <label
                  htmlFor="label"
                  className="uppercase opensans font-bold "
                >
                  tempat lahir <span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="text"
                  name="place_of_birth"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  placeholder="e.g Manchester"
                  value={data.place_of_birth}
                  className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-col justify-start mt-4 text-sm">
                <label
                  htmlFor="label"
                  className="uppercase opensans font-bold "
                >
                  Tanggal lahir <span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="date"
                  name="date_of_birth"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  value={data.date_of_birth}
                  className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>
              <div className="flex flex-col justify-start mt-4 text-sm">
                <label
                  htmlFor="label"
                  className="uppercase opensans font-bold "
                >
                  tinggi badan <span className="lowercase text-xs">(cm)</span>{" "}
                  <span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="number"
                  value={data.height}
                  name="height"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  placeholder="e.g 58"
                  className=" bg-[#F2F3F7] h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>
              <div className="flex flex-col justify-start mt-4 text-sm">
                <label
                  htmlFor="label"
                  className="uppercase opensans font-bold "
                >
                  berat badan <span className="lowercase text-xs">(Kg)</span>
                  <span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="number"
                  name="weight"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  placeholder="e.g 58"
                  value={data.weight}
                  className=" bg-[#F2F3F7]  h-10 border-none w-full focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                />
              </div>
              <div className="flex flex-col justify-start mt-4 text-sm  ">
                <label
                  htmlFor="label"
                  className="uppercase opensans font-bold "
                >
                  foto pemain <span className="text-[#D00D00]">*</span>
                </label>
                <input
                  type="file"
                  name="photo_player"
                  onChange={(e) => {
                    // @ts-ignore
                    handleChange(e);
                  }}
                  className=" block w-full outline-none file:h-full file:bg-[#dddddd] file:border-none file:w-[118px] h-10 mt-2 text-gray-900 border rounded-lg cursor-pointer bg-[#F2F3F7] focus:outline-none  "
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#D00D00] h-10 rounded-lg mt-10 text-white opensans w-full"
          >
            Simpan
          </button>
        </form>
      </div>
    </>
  );
}

export default AddPlayer;
