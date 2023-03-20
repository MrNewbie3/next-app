import Stacked from "./polygon/Stacked";
function CardIndividual() {
  return (
    <div className="bg-white h-full w-full  p-5   ">
      <div className="rounded-lg flex text-xs font-semibold items-center flex-col ">
        <h1>SHO</h1>
        <div className="flex justify-between w-[170px] mt-12 -mb-16">
          {" "}
          <h1>TAC</h1>
          <h1>PAS</h1>
        </div>

        <Stacked />

      
        <h1>CON</h1>
      </div>
      <h1 className=" border-y-2 py-1 uppercase border-gray-300 flex justify-center  font-semibold mt-4">
        AdI
      </h1>
      <div className="flex justify-center ">
        <div className="flex  mt-4 text-xs max-w-[140px] w-full  font-semibold justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex  gap-2">
              <h1>85</h1>
              <p>SHO</p>
            </div>
            <div className="flex gap-2">
              <h1>85</h1>
              <p>TAC</p>
            </div>
            
          </div>

          <div className="h-[5] border-[1px]  border-gray-300"></div>
          <div className="flex flex-col  gap-2">
            <div className="flex gap-2">
              <h1>85</h1>
              <p>PAS</p>
            </div>
            <div className="flex gap-2">
              <h1>85</h1>
              <p>CON</p>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardIndividual;
