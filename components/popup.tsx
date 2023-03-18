import React from "react";


function Popup() {
  return (
    <>
      <div className="h-screen w-screen bg-slate-300 bg-opacity-20   flex justify-center z-50">
        <div className="bg-white mt-20 p-8 h-64 w-[400px] rounded-xl flex flex-col">
          <h1 className="font-semibold mb-8 text-lg">Tambah kategori</h1>
          <h2 className="font-bold text-xs opensans-bold">NAMA ASLI</h2>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="e.g Sepak Bola"
            value={""}
            onChange={0}
            className=" bg-[#F2F3F7] h-10 border-none focus:outline-none  p-2 mt-2 rounded-lg font-semibold "
          />
          <button className="bg-[#D00D00] rounded-lg opensans-bold h-10  text-white mt-6 ">
            Simpan
          </button>
        </div>
      </div>
    </>
  );
}
export default Popup;
