import PlayerSingleMatch from "@/components/server/playerSingleMatch";
import React from "react";

type PageProps = {
  params: {
    category: string;
    team: string;
    id_player: string;
    detail_player: string;
    detail_match: string;
  };
};

export default function page({ params: query }: PageProps) {
  // @ts-ignore
  return <PlayerSingleMatch params={query} />;
}
