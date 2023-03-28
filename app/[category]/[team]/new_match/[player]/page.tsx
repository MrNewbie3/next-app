import AddMatch from "@/components/client/addMatch";
import PlayerPick from "@/components/playerPick";
import React from "react";

type PageProps = {
  params: {
    player: string;
  };
};
export default function PlayePage({ params: player }: PageProps) {
  console.log(player);

  return (
    <div>
      {/* @ts-ignore */}
      <PlayerPick params={player} />
    </div>
  );
}
