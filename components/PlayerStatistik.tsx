import CardTaktik from "./CardTaktik";
function PlayerStatistik() {
  return (
    <div className="w-full flex flex-col">
      <ul className=" flex text-gray-600 font-semibold justify-around max-w-[550px] h-12 items-center bg-white drop-shadow-md rounded-lg  capitalize    ">
        <li className="bg-[#D00D00] text-white px-4 py-1 rounded-lg">statistik</li>
        <li>Individual</li>
        <li>Measurement</li>
        <li>taktik</li>
      
      </ul>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 gap-6  w-full">
        <CardTaktik />
        <CardTaktik />
        <CardTaktik />
        <CardTaktik />
      </div>
    </div>
  );
}

export default PlayerStatistik;
