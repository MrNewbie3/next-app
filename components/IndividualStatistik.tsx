import CardIndividual from "./CardIndividual";
function IndividualStatistik() {
  return (
    <div className="w-full flex flex-col">
      <ul className=" flex text-gray-600 font-semibold justify-around max-w-[550px] h-12 items-center bg-white drop-shadow-md rounded-lg  capitalize    ">
      <li>Statistik</li>
        <li className="bg-[#D00D00] text-white px-4 py-1 rounded-lg">Individual</li>
      
        <li>Measurement</li>
        <li>taktik</li>
      
      </ul>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 gap-6  w-full">
        <CardIndividual />
        <CardIndividual />
        <CardIndividual />
        <CardIndividual />
       
      </div>
    </div>
  );
}

export default IndividualStatistik;
