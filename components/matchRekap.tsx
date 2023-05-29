import React, { cache } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Shooting from "./datatim/shooting";
import Passing_ball from "./datatim/passing_ball";
import Fouls from "./datatim/fouls";
import Defending from "./datatim/defending";
import { cookies } from "next/headers";
type PageProps = {
  params: {
    category: string;
    team: string;
    detail: string | null;
    league: string | null;
  };
};
interface DataShots {
  totalPasses: number | null;
  Shots_on_target: number | null;
  Shots_of_target: number | null;
  Corner_kick: number | null;
}

interface DataPass {
  success: number | null;
  unsuccess: number | null;
  success_final: number | null;
  unsuccess_final: number | null;
}

interface DataDefend {
  tackle_won: number | null;
  duel_won: number | null;
  fifty_won: number | null;
  interception_won: number | null;
}

interface DataFouls {
  total_fouls: number | null;
  offside: number | null;
  red_card: number | null;
  yellow_card: number | null;
}

const dataPass: DataPass = {
  success: null,
  unsuccess: null,
  success_final: null,
  unsuccess_final: null,
};

const dataShots: DataShots = {
  totalPasses: null,
  Shots_on_target: null,
  Shots_of_target: null,
  Corner_kick: null || 0,
};

const dataDefend: DataDefend = {
  tackle_won: null,
  duel_won: null,
  fifty_won: null,
  interception_won: null,
};

const dataFouls: DataFouls = {
  total_fouls: null,
  offside: null,
  red_card: null,
  yellow_card: null,
};
const getClubData = async (params: string) => {
  const cookieStore = cookies();

  const data = await fetch("https://api-stapa-app.vercel.app/api/v1/match/c/" + params, {
    headers: {
      Authorization: `Bearer ${cookieStore.get("token")?.value}`,
    },
    cache: "reload",
  });
  const res = await data.json();
  if (!res.success) {
    throw new Error("Error: " + res.message);
  }
  return res;
};
const getClubDataPerMatch = async (params: string) => {
  const cookieStore = cookies();

  const data = await fetch("https://api-stapa-app.vercel.app/api/v1/match/" + params, {
    headers: {
      Authorization: `Bearer ${cookieStore.get("token")?.value}`,
    },
    cache: "reload",
  });
  const res = await data.json();
  if (!res.success) {
    throw new Error("Error: " + res.message);
  }
  return res;
};

async function MatchRekap({ params: query }: PageProps) {
  // @ts-ignore
  const rawData = query.league === undefined ? await getClubData(query.team) : await getClubDataPerMatch(query.league);

  const getClub = query.league === undefined ? rawData : { ...rawData, data: [rawData.data] };
  if (dataShots.totalPasses === null && getClub.data.length >= 1) {
    getClub.data.map((e: any) => {
      // @ts-ignore
      dataShots.Corner_kick += parseInt(e.corner_kick_position);
      e.DetailMatch.map((params: any) => {
        for (const key in params) {
          if (key.includes("passes")) {
            dataShots.totalPasses += params[key];
          }
          if (key.includes("unsuccessful")) {
            dataShots.Shots_of_target += params[key];
            dataPass.unsuccess += params[key];
          }
          if (key.includes("success_")) {
            dataShots.Shots_on_target += params[key];
            dataPass.success += params[key];
          }
          if (key.includes("success_final")) {
            dataPass.success_final += params[key];
          }
          if (key.includes("unsuccessful_final")) {
            dataPass.unsuccess_final += params[key];
          }
          if (key.includes("tackle_won")) {
            dataDefend.tackle_won += params[key];
          }
          if (key.includes("duel_won")) {
            dataDefend.duel_won += params[key];
          }
          if (key.includes("fifty_won")) {
            dataDefend.fifty_won += params[key];
          }
          if (key.includes("interception_won")) {
            dataDefend.interception_won += params[key];
          }
          if (key.includes("fouls")) {
            dataFouls.total_fouls += params[key];
          }
          if (key.includes("red_cards")) {
            dataFouls.red_card += params[key];
          }
          if (key.includes("yellow_cards")) {
            dataFouls.yellow_card += params[key];
          }
        }
      });
    });
  }

  return (
    <div className="">
      {getClub.data.length < 1 ? (
        <></>
      ) : (
        <div className=" pb-20 ">
          <div className="flex justify-between w-full mb-6 items-center ">
            <div className="h-16 max-w-[650px] px-10 py-2 w-[650px] rounded-lg drop-shadow-md  bg-white">
              <div className="flex text-xs font-semibold  ">
                <p>
                  {getClub.data[0].club.start_season} - {getClub.data[0].club.end_season}
                </p>
              </div>
              <h1 className="text-xl font-bold uppercase">{getClub.data[0].club.club_name}'s season stats</h1>
            </div>

            <button className="hover:bg-[#D00D00] flex items-center gap-2 bg-white ring-1 capitalize font-semibold ring-[#D00D00] text-[#D00D00] px-4 rounded-lg h-9 hover:text-white active:bg-[#D00D00] active:text-white   ">
              2023/2024 <IoMdArrowDropdown />
            </button>
          </div>
          <div className="flex max-lg:flex-col gap-5 mt-5">
            <Shooting data={dataShots} />
            {/* @ts-ignore */}
            <Passing_ball data={dataPass} />
          </div>
          <div className="lg:flex gap-5  mt-6">
            {/* @ts-ignore */}
            <Defending data={dataDefend} />
            {/* @ts-ignore */}
            <Fouls data={dataFouls} />
          </div>
        </div>
      )}
    </div>
  );
}

export default MatchRekap;
