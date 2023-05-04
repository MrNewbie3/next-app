import { GrFormNext } from "react-icons/gr";
import React from "react";
import Stacked from "./polygon/Stacked";
import Polygon from "./polygon/Bentukpolygon";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";

const maxtaktik = 10;
const valuetaktik = 3;
const taktik = (valuetaktik / maxtaktik) * 100;

function AddPlayerOption() {
  return (
    <div className="w-full rounded-xl px-10 py-10">
      <div className="head flex justify-between  items-center ">
        <h1 className="capitalize font-semibold flex opensans text-xs text-gray-600">
          Futsal{" "}
          <span className="flex items-center">
            <GrFormNext />
            player <GrFormNext />
          </span>
          <span className="text-black"> agung dwi min1</span>
        </h1>
        <button className="bg-[#D00D00] rounded-lg  text-white px-6 py-1.5">Edit Pemain</button>
      </div>

      {/* ================= Picture =================================*/}
      <div className="card flex w-full  max-md:flex-col gap-20 mt-8 ">
        <div className="flex w-full  gap-4">
          <img src={"../images/team_img.png"} width={"128px"} height={"150px"} alt="" className="object-cover rounded-2xl w-[128px] h-auto " />
          <div>
            <h1 className="font-semibold mt-8 text-[#9d9d9d] text-base">agung dwi</h1>
            <h1 className="font-bold capitalize mt-1 text-2xl text-gray-900">mas cecep</h1>
            <h1 className="font-bold capitalize mt-1 text-red-600 text-2xl ">
              <span>#</span>
              23
            </h1>
          </div>
        </div>
        <div className="data_tim  uppercase grid  w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-6 ">
          <div>
            <label className="text-xs font-bold">nama asli</label>
            <p className=" capitalize bg-white h-10 w-full p-2 rounded-lg">smktelkom malang</p>
          </div>
          <div>
            <label className="text-xs font-bold">tanggal berdiri</label>
            <p className=" capitalize bg-white h-10 w-full p-2 rounded-lg">19 juni 1992 (30)</p>
          </div>
          <div>
            <label className="text-xs font-bold">asal club</label>
            <p className=" capitalize bg-white h-10 w-full p-2 rounded-lg">malang</p>
          </div>
          <div>
            <label className="text-xs font-bold">jumlah pemain</label>
            <p className=" capitalize bg-white h-10 w-full p-2 rounded-lg">0</p>
          </div>{" "}
          <div>
            <label className="text-xs font-bold">jumlah staf</label>
            <p className=" capitalize bg-white h-10 w-full p-2 rounded-lg">0</p>
          </div>
          <div>
            <label className="text-xs font-bold">jumlah trofi</label>
            <p className=" capitalize bg-white h-10 w-full p-2 rounded-lg">0</p>
          </div>
        </div>
      </div>

      {/* individual */}
      <div className="flex gap-6 mt-6 w-full">
        <div className="lg:max-w-md  w-full bg-white mt-16 lg:mt-0  rounded-lg px-6 py-4 ">
          <div className="mb-6 text-[20px]  font-semibold">Individual</div>
          <div className="flex justify-between gap-6">
            <div className="w-full">
              <div className="flex justify-between mb-4">
                <h1 className="font-semibold">SHOOT</h1>
                <p className="font-bold text-base">25</p>
              </div>
              <div className="flex justify-between mb-4">
                <h1 className="font-semibold">PASSING</h1>
                <p className="font-bold text-base">25</p>
              </div>
              <div className="flex justify-between mb-4">
                <h1 className="font-semibold">CONTROL</h1>
                <p className="font-bold text-base">25</p>
              </div>
              <div className="flex justify-between">
                <h1 className="font-semibold">TACKLE</h1>
                <p className="font-bold text-base">25</p>
              </div>
            </div>

            <div className="rounded-lg flex text-xs font-bold items-center flex-col ">
              <h1>SHO</h1>
              <div className="flex justify-between w-[170px] mt-12 -mb-16">
                {" "}
                <h1>TAC</h1>
                <h1>PAS</h1>
              </div>

              <Stacked />

              <h1>CON</h1>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg w-full px-6 py-4 ">
          <div className="mb-6 text-[20px]  font-semibold">Individual</div>

          <div className="flex gap-20 w-full">
            <div className="grid grid-cols-2 gap-6 max-w-sm w-full">
              <div className=" flex justify-between font-semibold  lg:max-w-[100px] w-full">
                <h1>PACE</h1>
                <span className="font-bold">89</span>
              </div>
              <div className=" flex justify-between font-semibold  lg:max-w-[100px] w-full">
                <h1>PACE</h1>
                <span className="font-bold">89</span>
              </div>
              <div className=" flex justify-between font-semibold  lg:max-w-[100px] w-full">
                <h1>PACE</h1>
                <span className="font-bold">89</span>
              </div>
              <div className=" flex justify-between font-semibold  lg:max-w-[100px] w-full">
                <h1>PACE</h1>
                <span className="font-bold">89</span>
              </div>
              <div className=" flex justify-between font-semibold  lg:max-w-[100px] w-full">
                <h1>PACE</h1>
                <span className="font-bold">89</span>
              </div>
              <div className=" flex justify-between font-semibold  lg:max-w-[100px] w-full">
                <h1>PACE</h1>
                <span className="font-bold">89</span>
              </div>
            </div>

            <div className="rounded-lg flex w-full font-bold text-xs justify-center items-center flex-col ">
              <h1>PAC</h1>
              <div className="flex justify-between w-[170px] mt-2 -mb-6">
                {" "}
                <h1>SHO</h1>
                <h1>DHY</h1>
              </div>

              <Polygon />

              <div className="flex justify-between w-[170px] mb-2 -mt-8">
                {" "}
                <h1>PAS</h1>
                <h1>DEV</h1>
              </div>
              <h1>DRY</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="under-datas  flex gap-6 ">
        <div className="last_match  w-full bg-white rounded-lg mt-6 px-6 py-4">
          <div className="flex justify-between    ">
            <h1 className="font-bold text-lg">Pertandingan Terakhir</h1>
            <button className="bg-red-600  flex justify-between items-center text-white gap-2 px-4 py-1 rounded-lg">
              <FaPlus />
              {" Tambah"}
            </button>
          </div>

          <table className="table-auto w-full capitalize   ">
            <thead>
              <tr className="">
                <th className="text-left py-2">No.</th>
                <th className="text-left py-2">Tanggal</th>
                <th className="text-left py-2">Tanding</th>
                <th className="text-left py-2">Rating</th>
                <th className="text-left py-2">Info</th>
              </tr>
            </thead>
            <tbody className="font-semibold capitalize">
              <tr>
                <td className=" py-2">1</td>
                <td className=" py-2">2022-01-01</td>
                <td className=" py-2">Chelsea vs. Arsenal</td>

                <td className=" py-2">2-1</td>
                <td className=" py-2">
                  <a href="#">
                    <BsThreeDotsVertical />
                  </a>
                </td>
              </tr>
              <tr>
                <td className=" py-2">2</td>
                <td className=" py-2">2022-01-02</td>
                <td className=" py-2">Real Madrid vs. Barca</td>

                <td className=" py-2">3-2</td>
                <td className=" py-2">
                  <a href="#">
                    <BsThreeDotsVertical />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="last_match  max-w-sm  w-full bg-white rounded-lg mt-6 px-6 py-4">
          <h1 className="font-bold text-lg">Taktik</h1>

          <div className="w-full flex flex-col items-center mt-12 ">
            {/* range tracking */}
            <div className="w-full mb-6">
              <label htmlFor="range" className="flex font-bold h-6 justify-between  text-red-500">
                <h1>{valuetaktik}</h1>
                <h1>{maxtaktik}</h1>
              </label>
              {/* range */}
              <div className="w-full bg-gray-200  rounded-full h-2.5  ">
                <div className="bg-red-600 h-2.5 rounded-full " style={{ width: `${taktik}%` }}></div>
              </div>
            </div>

            <h1 className="font-bold text-lg">Biasa</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddPlayerOption;
