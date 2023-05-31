"use client";
import React, { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Shooting from "./datatim/shooting";
import Passing_ball from "./datatim/passing_ball";
import Fouls from "./datatim/fouls";
import Defending from "./datatim/defending";
import { instance } from "@/config/axios";
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

function HistoryDetails({ params: query }: PageProps) {
  // @ts-ignore
  const [rawData, setRawData] = useState({ data: null });
  useEffect(() => {
    if (rawData.data === null) {
      instance
        .get(`${process.env.NEXT_PUBLIC_URL}/match/` + query.league)
        .then((result: any) => {
          setRawData(result.data.data);
        })
        .catch((err: any) => {
          throw new Error("error: " + err);
        });
    }
  }, []);

  if (rawData.data !== null) {
    const getClub = { data: [rawData] };
    if (dataShots.totalPasses === null) {
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
      <div className=" pb-20 ">
        <div className="flex justify-between w-full mb-6 items-center ">
          <div className="h-16 max-w-[650px] px-10 py-2 w-[650px] rounded-lg drop-shadow-md  bg-white">
            <div className="flex text-xs font-semibold  ">
              <p>
                {/* @ts-ignore */}
                {getClub.data[0].club.start_season} - {getClub.data[0].club.end_season}
              </p>
            </div>
            {/* @ts-ignore */}
            <h1 className="text-xl font-bold ">{getClub.data[0].club.club_name}</h1>
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
    );
  }
  return <h1>Loading</h1>;
}

export default HistoryDetails;
