import General from "./dataplayer/general";
import Goalkeping from "./dataplayer/goalkeping";
import Passing_ball from "./dataplayer/passing_ball";
import Saves from "./dataplayer/saves";
import Fouls from "./dataplayer/fouls";
import Defending from "./dataplayer/defending";

type PageProps = {
  params: {
    category: String;
    team: String;
    id_player: String;
  };
};

function PlayerData({ params: query }: PageProps) {
  return (
    <>
      <div className="px-10 w-full">
        <ul className=" flex text-gray-600 font-semibold justify-around max-w-[550px] h-12  items-center bg-white drop-shadow-md rounded-lg  capitalize    ">
          <li className="bg-[#D00D00] text-white px-4 py-1 rounded-lg">last match</li>
          <li>season stats</li>
          <li>history</li>
          <li>medis</li>
          <li>measurement</li>
        </ul>
        <div className="flex justify-between w-full mt-6 items-center ">
          <div className="h-16 max-w-[650px] px-10 py-2 w-[650px] rounded-lg drop-shadow-md  bg-white">
            <div className="flex text-xs font-semibold  ">
              <p> 16 juni 2023 -</p>
              <p>18 juni 2023</p>
            </div>
            <h1 className="text-xl font-bold ">
              MOKLET <span>VS</span> Telkom Purwokerto
            </h1>
          </div>
          <button className="hover:bg-[#D00D00] transition-all duration-200 bg-white ring-1 capitalize font-semibold ring-[#D00D00] text-[#D00D00] px-4 rounded-lg h-9 hover:text-white active:bg-[#D00D00] active:text-white   ">
            Edit Match
          </button>
        </div>
        <div className="lg:flex gap-6">
          <div className="w-full max-w-7xl">
            <div className="flex max-md:flex-col w-full gap-5 mt-6">
              <General />
              <Goalkeping />
            </div>
            <div className="max-w-4xl w-full mt-6 bg-white  rounded-lg px-6 py-4 ">
              <div className="mb-6 text-[20px] font-semibold">Passing & Ball Position </div>
              <Passing_ball />
            </div>
          </div>
          <div className="lg:max-w-md w-full mt-6 bg-white rounded-lg px-6 py-4 ">
            <div className="mb-6 text-[20px] font-semibold">Saves </div>
            <Saves />
          </div>
        </div>
        <div className="lg:flex gap-6  mt-6">
          <div className="max-w-4xl w-full bg-white  rounded-lg px-6 py-4 ">
            <div className="mb-6 text-[20px] font-semibold">Defending</div>
            <Defending />
          </div>
          <div className="lg:max-w-md w-full  bg-white rounded-lg px-6 py-4 ">
            <div className="mb-6 text-[20px] font-semibold">Saves </div>
            <Fouls />
          </div>
        </div>
      </div>
    </>
  );
}
export default PlayerData;
