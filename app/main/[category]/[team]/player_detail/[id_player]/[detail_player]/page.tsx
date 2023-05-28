import React from "react";
import HistoryPlayer from "@/components/HistoryPlayer";
import PlayerLastMatch from "@/components/server/playerLastMatch";
import PlayerSeason from "@/components/server/playerSeason";
type PageProps = {
  params: {
    detail: string;
    team: string;
    category: string;
    detail_player: string;
    id_player: string;
  };
};
export default function page({ params: query }: PageProps) {
  const navigation = ["last match", "season stats", "history", "medis", "measurement"];
  const pages = [
    // @ts-ignore
    <PlayerLastMatch params={query} key={1} />,
    // @ts-ignore
    <PlayerSeason params={query} key={2} />,
    // @ts-ignore
    <HistoryPlayer params={query} key={3} />,
    // @ts-ignore
    // <ExerciseTime params={query} key={5} />,
  ];

  return <div>{pages[navigation.indexOf(decodeURI(query.detail_player))]}</div>;
}
