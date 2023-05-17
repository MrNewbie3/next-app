import PlayerCard from "@/components/playerCard";
import React from "react";
type PageProps = {
  children: React.ReactNode;
  params: {
    category: String;
    team: String;
    id_player: String;
  };
};

export default function layout(children: PageProps) {
  return (
    <div>
      {/* @ts-ignore */}
      <PlayerCard params={children.params} />
      {children.children}
    </div>
  );
}
