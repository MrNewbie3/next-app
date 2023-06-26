"use client";

import { instance } from "@/config/axios";
import { getAuthTokenClient } from "@/config/cookie";
import { cookies } from "next/headers";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

type Props = {
  params: {
    category: string;
    id_team: string;
  };
};
function AddTeam({ params }: Props) {
  const [data, setData] = useState({
    club_name: "",
    club_shortname: "",
    club_nickname: "",
    club_origin: "",
    club_established: "",
    start_season: "",
    end_season: "",
    // @ts-ignore
    userId: JSON.parse(localStorage.getItem("login")).data.user.uuid,
    categoryId: params,
    club_image: null,
  });
  const [coach, setCoach] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const cookieStore = getAuthTokenClient();
  const router = useRouter();

  useEffect(() => {
    instance
      .get("user/?quantity=100")
      .then((result: any) => {
        setCoach(result.data.data);
      })
      .catch((err: any) => {
        throw new Error(err);
      });
    instance
      .get("club/" + params.id_team)
      .then((result: any) => {
        setData(result.data.data);
        setLoading(false);
      })
      .catch((err: any) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  async function postData(e: React.FormEvent) {
    e.preventDefault();
    setLoadingSubmit(true);
    const formData = new FormData();
    for (const key in data) {
      // @ts-ignore
      formData.append(key, data[key]);
    }

    const post = await fetch(`${process.env.NEXT_PUBLIC_URL}/club/` + params.id_team, {
      method: "PUT",
      body: formData,
      headers: {
        Authorization: `Bearer ${cookieStore}`,
      },
    });
    const res = await post.json();

    if (!res.success) {
      alert(res.message);
      return alert("failed to update, try again");
    }
    alert("ok");
    window.location.reload();
    return router.push(`/main/${params.category}`);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setData({
      ...data,
      [name]: files ? files[0] : value,
    });
  };
  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div className="bg-white w-full  rounded-xl px-10 py-10">
      <button
        className="bg-[#137403] px-4 py-2 text-white mb-10 rounded-lg"
        onClick={() => {
          router.push(`/main/${params.category}/`);
        }}
      >
        Kembali
      </button>
      <form
        encType="multipart/form-data"
        onSubmit={(e) => {
          postData(e);
        }}
      >
        {loading ? (
          <div className="w-full mx-auto bg-white rounded-xl shadow-md p-6">
            <div className="animate-pulse space-y-4">
              <h1 className="opensans font-bold text-xl bg-gray-200 h-6 rounded"></h1>
              <h4 className="font-semibold bg-gray-200 h-6 rounded"></h4>

              <div className="input_file_div mt-10 uper flex w-full lg:gap-5 max-lg:flex-col">
                <div className="w-full">
                  <div className="flex flex-col justify-start mt-4">
                    <label htmlFor="label" className="opensans font-bold uppercase text-sm bg-gray-200 h-6 rounded"></label>
                    <div className="bg-gray-200 h-10 rounded-lg"></div>
                  </div>

                  <div className="flex flex-col justify-start mt-4">
                    <label htmlFor="label" className="opensans font-bold uppercase text-sm bg-gray-200 h-6 rounded"></label>
                    <div className="bg-gray-200 h-10 rounded-lg"></div>
                  </div>

                  <div className="flex flex-col justify-start mt-4">
                    <label htmlFor="label" className="opensans font-bold uppercase text-sm bg-gray-200 h-6 rounded"></label>
                    <div className="bg-gray-200 h-10 rounded-lg"></div>
                  </div>

                  <div className="flex flex-col justify-start mt-4">
                    <label htmlFor="label" className="opensans font-bold uppercase text-sm bg-gray-200 h-6 rounded"></label>
                    <div className="bg-gray-200 h-10 rounded-lg"></div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex flex-col justify-start mt-4">
                    <label htmlFor="label" className="opensans font-bold uppercase text-sm bg-gray-200 h-6 rounded"></label>
                    <div className="bg-gray-200 h-10 rounded-lg"></div>
                  </div>

                  <div className="flex flex-col justify-start mt-4">
                    <label htmlFor="label" className="opensans font-bold uppercase text-sm bg-gray-200 h-6 rounded"></label>
                    <div className="bg-gray-200 h-10 rounded-lg"></div>
                  </div>

                  <div className="flex flex-col justify-start mt-4">
                    <label htmlFor="label" className="opensans font-bold uppercase text-sm bg-gray-200 h-6 rounded"></label>
                    <div className="bg-gray-200 h-10 rounded-lg"></div>
                  </div>

                  <div className="flex flex-col justify-start mt-4">
                    <label htmlFor="label" className="opensans font-bold uppercase text-sm bg-gray-200 h-6 rounded"></label>
                    <div className="bg-gray-200 h-10 rounded-lg"></div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-10">
                <div className="bg-gray-200 h-10 rounded-lg w-full max-w-2xl"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="">
            <div>
              <h1 className="opensans font-bold text-xl">
                Edit Tim: <span className="uppercase">{data.club_name}</span>
              </h1>
              <h4 className="font-semibold">
                Lengkapi data di bawah,jika ada ( <span className="text-[#D00D00]">* </span>) maka wajib diisi
              </h4>
            </div>

            <div className=" input_file_div mt-10 uper flex w-full lg:gap-5    max-lg:flex-col ">
              <div className="w-full">
                <div className="  flex flex-col  justify-start mt-4">
                  <label htmlFor="label" className=" opensans font-bold uppercase text-sm">
                    Nama Asli <span className="text-[#D00D00]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g Mancester United"
                    value={data.club_name}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name={"club_name"}
                    className=" bg-[#F2F3F7] h-10 border-none w-full max-w-2xl  focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                  />
                </div>

                <div className="flex flex-col justify-start mt-4">
                  <label htmlFor="label" className="opensans font-bold uppercase text-sm">
                    Nama Julukan <span className="text-[#D00D00]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g Red Devil"
                    value={data.club_shortname}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name={"club_shortname"}
                    className=" bg-[#F2F3F7] h-10 border-none w-full max-w-2xl focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                  />
                </div>
                <div className="flex flex-col justify-start mt-4">
                  <label htmlFor="label" className="opensans font-bold uppercase text-sm">
                    Nama Lain
                  </label>
                  <input
                    type="text"
                    placeholder="e.g MU "
                    value={data.club_nickname}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name={"club_nickname"}
                    className=" bg-[#F2F3F7] h-10 border-none w-full max-w-2xl focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                  />
                </div>
                <div className="flex flex-col justify-start mt-4">
                  <label htmlFor="label" className="opensans font-bold uppercase text-sm">
                    Asal <span className="text-[#D00D00]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g Manchester"
                    value={data.club_origin}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name={"club_origin"}
                    className=" bg-[#F2F3F7] h-10 border-none w-full max-w-2xl focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                  />
                </div>
              </div>
              <div className="w-full ">
                <div className="flex flex-col justify-start mt-4">
                  <label htmlFor="label" className="opensans font-bold uppercase text-sm">
                    Tanggal Berdiri <span className="text-[#D00D00]">*</span>
                  </label>
                  <input
                    type="date"
                    value={data.club_established}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name={"club_established"}
                    className=" bg-[#F2F3F7] h-10 border-none w-full max-w-2xl focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                  />
                </div>
                <div className="flex flex-col justify-start mt-4">
                  <label htmlFor="label" className="opensans font-bold uppercase text-sm">
                    season dimulai <span className="text-[#D00D00]">*</span>
                  </label>
                  <input
                    type="date"
                    value={data.start_season}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name={"start_season"}
                    className=" bg-[#F2F3F7] h-10 border-none w-full max-w-2xl focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                  />
                </div>
                <div className="flex flex-col justify-start mt-4">
                  <label htmlFor="label" className="opensans font-bold uppercase text-sm">
                    season berakhir <span className="text-[#D00D00]">*</span>
                  </label>
                  <input
                    type="date"
                    value={data.end_season}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name={"end_season"}
                    className=" bg-[#F2F3F7]  h-10 border-none w-full max-w-2xl focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                  />
                </div>
                <div className="flex flex-col justify-start mt-4">
                  <label htmlFor="label" className="opensans font-bold uppercase text-sm">
                    coach id <span className="text-[#D00D00]">*</span>
                  </label>
                  <select
                    value={data.userId}
                    onChange={(e) => {
                      handleChangeSelect(e);
                    }}
                    name={"userId"}
                    defaultValue={""}
                    className=" bg-[#F2F3F7]  h-10 border-none w-full max-w-2xl focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
                  >
                    <option value="" disabled>
                      select coach id
                    </option>
                    {coach.map((e) => {
                      return (
                        // @ts-ignore
                        <option key={e.uuid} value={e.id}>
                          {/* @ts-ignore */}
                          {e.username}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="flex flex-col justify-start mt-4">
                  <label htmlFor="label" className="opensans font-bold uppercase text-sm">
                    club image tim <span className="text-[#D00D00]">maks 2mb photo file*</span>
                  </label>
                  <input
                    type="file"
                    // @ts-ignore
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name={"club_image"}
                    className=" block w-full max-w-2xl outline-none file:h-full file:bg-[#dddddd] file:border-none file:w-[118px] h-10 mt-2 text-gray-900 border rounded-lg cursor-pointer bg-[#F2F3F7] focus:outline-none  "
                  />
                </div>
              </div>
            </div>
            {!loadingSubmit ? (
              <button type="submit" className="bg-[#D00D00] h-10 rounded-lg mt-10 text-white opensans w-full">
                Submit
              </button>
            ) : (
              <button disabled className="bg-grey h-10 rounded-lg mt-10 w-full">
                <ClipLoader color="#ffffff" size={20} />
              </button>
            )}
          </div>
        )}
      </form>
    </div>
  );
}

export default AddTeam;
