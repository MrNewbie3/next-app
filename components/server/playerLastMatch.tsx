import GeneralMatch from "../dataplayer/general";
import Goalkeping from "../dataplayer/goalkeping";
import Passing_ball from "../dataplayer/passing_ball";
import Saves from "../dataplayer/saves";
import Fouls from "../dataplayer/fouls";
import Defending from "../dataplayer/defending";
import { cookies } from "next/headers";
type PageProps = {
  params: {
    detail: string;
    team: string;
    category: string;
    detail_player: string;
    id_player: string;
  };
};
const general = {
  minutes: null,
  fouls: null,
  red_cards: null,
  yellow_cards: null,
};
const passing = {
  success: null,
  unsuccess: null,
  success_final: null,
  unsuccess_final: null,
};

const goalkeeping = {
  saves: null,
  punch: null,
  goals_concend: null,
};
const saves = {
  inside: null,
  outside: null,
  cought: null,
  paried: null,
  touches_opo_box: null,
  changes_created: null,
  assist: null,
  forward_pass: null,
  throught: null,
};

const defend = {
  tackle: null,
  duel: null,
  fifty_fifty: null,
  interception: null,
};

const getData = async (params: string) => {
  const cookieStore = cookies();
  const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/match/c/` + params, {
    headers: {
      Authorization: `Bearer ${cookieStore.get("token")?.value}`,
    },
    cache: "no-cache",
  });
  const res = await data.json();
  if (!res.success) {
    throw new Error("error: " + res.message);
  }
  return res;
};

const getPlayers = async (params: string) => {
  const cookieStore = cookies();
  const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/player/` + params, {
    headers: {
      Authorization: `Bearer ${cookieStore.get("token")?.value}`,
    },
    cache: "no-cache",
  });
  const res = await data.json();
  if (!res.success) {
    throw new Error("error: " + res.message);
  }
  return res;
};

export default async function PlayerLastMatch({ params: query }: PageProps) {
  const datas = await getData(query.team);
  const dataPlayer = await getPlayers(query.id_player);
  let data: any = [];

  if (datas.data.length) {
    datas.data[datas.data.length - 1].DetailMatch.filter((params: any) => {
      return params.playerId === dataPlayer.data.id ? data.push(params) : 0;
    });
  }

  if (general.minutes === null && datas.data.length > 0) {
    data.map((e: any) => {
      for (const key in e) {
        if (key.includes("minute_played")) {
          general.minutes += e[key];
        }
        if (key.includes("fouls")) {
          general.fouls += e[key];
        }
        if (key.includes("red_cards")) {
          general.red_cards += e[key];
        }
        if (key.includes("yellow_cards")) {
          general.yellow_cards += e[key];
        }
        if (key.includes("saves")) {
          goalkeeping.saves += e[key];
        }
        if (key.includes("punched")) {
          goalkeeping.punch += e[key];
        }
        if (key.includes("conceded")) {
          goalkeeping.goals_concend += e[key];
        }
        if (key.includes("success_passes")) {
          passing.success += e[key];
        }
        if (key.includes("unsuccessful_passes")) {
          passing.unsuccess += e[key];
        }
        if (key.includes("success_final")) {
          passing.success_final += e[key];
        }
        if (key.includes("unsuccessful_final")) {
          passing.unsuccess_final += e[key];
        }
        if (key.includes("insider")) {
          saves.inside += e[key];
        }
        if (key.includes("outsider")) {
          saves.outside += e[key];
        }
        if (key.includes("caught")) {
          saves.cought += e[key];
        }
        if (key.includes("parried")) {
          saves.paried += e[key];
        }
        if (key.includes("touches_in_")) {
          saves.touches_opo_box += e[key];
        }
        if (key.includes("changes")) {
          saves.changes_created += e[key];
        }
        if (key.includes("assist")) {
          saves.assist += e[key];
        }
        if (key.includes("forward")) {
          saves.forward_pass += e[key];
        }
        if (key.includes("through")) {
          saves.throught += e[key];
        }
        if (key.includes("tackle")) {
          defend.tackle += e[key];
        }
        if (key.includes("duel")) {
          defend.duel += e[key];
        }
        if (key.includes("fifty")) {
          defend.fifty_fifty += e[key];
        }
        if (key.includes("interception")) {
          defend.interception += e[key];
        }
      }
    });
  }

  return (
    <div className=" w-full">
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
          Download PDF Match
        </button>
      </div>
      <div className="lg:flex gap-6">
        <div className="w-full max-w-7xl">
          <div className="flex max-md:flex-col w-full gap-5 mt-6">
            <GeneralMatch data={general} />
            <Goalkeping data={goalkeeping} />
          </div>
          <div className="max-w-4xl w-full mt-6 bg-white  rounded-lg px-6 py-4 ">
            <div className="mb-6 text-[20px] font-semibold">Passing & Ball Position </div>
            <Passing_ball data={passing} />
          </div>
        </div>
        <div className="lg:max-w-md w-full mt-6 bg-white rounded-lg px-6 py-4 ">
          <div className="mb-6 text-[20px] font-semibold">Saves </div>
          <Saves data={saves} />
        </div>
      </div>
      <div className="lg:flex gap-6  mt-6">
        <div className="max-w-4xl w-full bg-white  rounded-lg px-6 py-4 ">
          <div className="mb-6 text-[20px] font-semibold">Defending</div>
          <Defending data={defend} />
        </div>
        <div className="lg:max-w-md w-full  bg-white rounded-lg px-6 py-4 ">
          <div className="mb-6 text-[20px] font-semibold">Saves </div>
          <Fouls data={saves} />
        </div>
      </div>
    </div>
  );
}
