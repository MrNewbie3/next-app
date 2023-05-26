import PlayerDetails from "@/components/client/playerDetails";
import PlayerCard from "@/components/playerCard";
import React from "react";
type PageProps = {
  children: React.ReactNode;
  params: {
    category: String;
    team: String;
    id_player: String;
    detail_player: String;
  };
};

export default function layout(children: PageProps) {
  return (
    <div>
      <PlayerDetails params={children.params} />
      {children.children}
    </div>
  );
}
