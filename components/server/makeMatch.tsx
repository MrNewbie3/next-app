import Link from "next/link";
import React from "react";
import Shooting from "../datatim/shooting";
import Passing_ball from "../datatim/passing_ball";
import Fouls from "../datatim/fouls";
import Defending from "../datatim/defending";

type PageProps = {
  params: {
    team: any;
    category: any;
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
  Corner_kick: null,
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

async function getData(params: String) {
  const res = await fetch("https://api-stapa-app.vercel.app/api/v1/match/c/" + params, {
    cache: "no-store",
    next: {
      revalidate: 10,
    },
    headers: { Authorization: `Bearer ${process.env.AUTH}` },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data = " + res.statusText);
  }
  return res.json();
}

async function MakeMatch({ params: query }: PageProps) {
  const dataTim = await getData(query.team);
  console.log();

  if (dataShots.totalPasses === null && dataTim.data.length > 0) {
    dataShots.Corner_kick = parseInt(dataTim.data[dataTim.data.length - 1].corner_kick_position);
    dataTim.data[dataTim.data.length - 1].DetailMatch.map((e: any) => {
      for (const key in e) {
        if (key.includes("passes")) {
          dataShots.totalPasses += e[key];
        }
        if (key.includes("unsuccessful")) {
          dataShots.Shots_of_target += e[key];
          dataPass.unsuccess += e[key];
        }
        if (key.includes("success_")) {
          dataShots.Shots_on_target += e[key];
          dataPass.success += e[key];
        }
        if (key.includes("success_final")) {
          dataPass.success_final += e[key];
        }
        if (key.includes("unsuccessful_final")) {
          dataPass.unsuccess_final += e[key];
        }
        if (key.includes("tackle_won")) {
          dataDefend.tackle_won += e[key];
        }
        if (key.includes("duel_won")) {
          dataDefend.duel_won += e[key];
        }
        if (key.includes("fifty_won")) {
          dataDefend.fifty_won += e[key];
        }
        if (key.includes("interception_won")) {
          dataDefend.interception_won += e[key];
        }
        if (key.includes("fouls")) {
          dataFouls.total_fouls += e[key];
        }
        if (key.includes("red_cards")) {
          dataFouls.red_card += e[key];
        }
        if (key.includes("yellow_cards")) {
          dataFouls.yellow_card += e[key];
        }
        if (key.includes("offside")) {
          dataFouls.offside += e[key];
        }
      }
    });
  }

  return (
    <>
      <div className="pb-20">
        {dataTim.data.length < 1 ? (
          <div className="flex justify-between w-full items-center  ">
            <div className="h-16 max-w-[650px] px-10 py-2 w-[650px] rounded-lg drop-shadow-md  bg-white">
              <div className="flex text-xs font-semibold  ">
                <p>{new Date().toLocaleDateString()}</p>
              </div>
              <h1 className="text-xl font-bold ">Belum pernah bertanding season ini!</h1>
            </div>
            <Link href={`/main/${query.category}/${query.team}/new_match`}>
              <button className="hover:bg-[#D00D00] bg-white ring-1 capitalize font-semibold ring-[#D00D00] text-[#D00D00] px-4 rounded-lg h-9 hover:text-white active:bg-[#D00D00] active:text-white   ">Add Match</button>
            </Link>
          </div>
        ) : (
          <>
            <div className="flex justify-between w-full items-center  ">
              <div className="h-16 max-w-[650px] px-10 py-2 w-[650px] rounded-lg drop-shadow-md  bg-white">
                <div className="flex text-xs font-semibold  ">
                  <p>{dataTim.data[dataTim.data.length - 1].match_date}</p>
                </div>
                <h1 className="text-xl font-bold uppercase ">
                  {dataTim.data[dataTim.data.length - 1].club.club_name} vs {dataTim.data[dataTim.data.length - 1].opponent_name} | {dataTim.data[dataTim.data.length - 1].score} - {dataTim.data[dataTim.data.length - 1].opponent_score}
                </h1>
              </div>
              <Link href={`/main/${query.category}/${query.team}/new_match`}>
                <button className="hover:bg-[#D00D00] bg-white ring-1 capitalize font-semibold ring-[#D00D00] text-[#D00D00] px-4 rounded-lg h-9 hover:text-white active:bg-[#D00D00] active:text-white   ">Add Match</button>
              </Link>
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
          </>
        )}
      </div>
    </>
  );
}

export default MakeMatch;
