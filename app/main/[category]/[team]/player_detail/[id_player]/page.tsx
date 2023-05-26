import PlayerData from "@/components/playerData";
import { redirect } from "next/navigation";
import React from "react";

type PageProps = {
  params: {
    category: String;
    team: String;
    id_player: String;
    detail: string;
  };
};

export default function page({ params: query }: PageProps) {
  return redirect(`/main/${query.category}/${query.team}/player_detail/${query.id_player}/last%20match`);
}
