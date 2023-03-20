import Polygon from "./polygon/Bentukpolygon";
function CardTaktik() {
  return (
    <div className="bg-white h-full w-full  p-5   ">
      <div className="rounded-lg flex text-xs font-semibold items-center flex-col ">
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
      <h1 className=" border-y-2 py-1 uppercase border-gray-300 flex justify-center  font-semibold mt-4">
        AdI
      </h1>
      <div className="flex justify-center ">
        <div className="flex  mt-4 text-xs max-w-[140px] w-full  font-semibold justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex  gap-2">
              <h1>85</h1>
              <p>PAC</p>
            </div>
            <div className="flex gap-2">
              <h1>85</h1>
              <p>SHO</p>
            </div>
            <div className="flex gap-2">
              <h1>85</h1>
              <p>PAS</p>
            </div>
          </div>

          <div className="h-[5] border-[1px]  border-gray-300"></div>
          <div className="flex flex-col  gap-2">
            <div className="flex gap-2">
              <h1>85</h1>
              <p>DRI</p>
            </div>
            <div className="flex gap-2">
              <h1>85</h1>
              <p>DEF</p>
            </div>
            <div className="flex gap-2">
              <h1>85</h1>
              <p>PHY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardTaktik;
