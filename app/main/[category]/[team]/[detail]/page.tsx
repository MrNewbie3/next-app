import PlayerVer from "@/components/client/player_ver";
import Crew from "@/components/crew";
import ExerciseTime from "@/components/exerciseTime";
import History from "@/components/history";
import MakePlayer from "@/components/makeplayer";
import MatchRekap from "@/components/matchRekap";
import MakeMatch from "@/components/server/makeMatch";
import React from "react";

type PageProps = {
  params: {
    detail: string;
    team: string;
    category: string;
  };
};
export default function page({ params: query }: PageProps) {
  const navigation = ["player", "last match", "season stats", "history", "periodisasi", "staff", "verification"];
  const pages = [
    // @ts-ignore
    <MakePlayer params={query} key={1} />,
    // @ts-ignore
    <MakeMatch params={query} key={2} />,
    // @ts-ignore
    <MatchRekap params={query} key={3} />,
    // @ts-ignore
    <History params={query} key={4} />,
    <ExerciseTime params={query} key={5} />,
    // @ts-ignore
    <Crew params={query} key={6} />,
    <PlayerVer params={query} />,
  ];
  return <div>{pages[navigation.indexOf(decodeURI(query.detail))]}</div>;
}
