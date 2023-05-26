import React from "react";
import PlayerPage from "../playerPage";
type PageProps = {
  params: {
    detail: string;
    team: string;
    category: string;
    detail_player: string;
    id_player: string;
  };
};
export default function PlayerLastMatch({ params: query }: PageProps) {
  return <PlayerPage params={query} key={1} />;
}
