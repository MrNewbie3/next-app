import PlayerData from "@/components/playerData";
import React from "react";

type PageProps = {
  params: {
    category: String;
    team: String;
    id_player: String;
  };
};

export default function page({ params: query }: PageProps) {
  return (
    <div className="">
      <PlayerData params={query} />
    </div>
  );
}
