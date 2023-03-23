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
  const navigation = ["player", "last match", "season stats", "history", "periodisasi"];
  // eslint-disable-next-line react/jsx-key
  const pages = [<MakePlayer params={query} />, <MakeMatch params={query} />, <MatchRekap />, <History params={query} />, <ExerciseTime params={query} />];
  return <div>{pages[navigation.indexOf(decodeURI(query.detail))]}</div>;
}
