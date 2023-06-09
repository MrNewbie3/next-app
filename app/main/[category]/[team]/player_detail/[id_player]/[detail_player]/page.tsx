import React from "react";
import HistoryPlayer from "@/components/HistoryPlayer";
import PlayerLastMatch from "@/components/server/playerLastMatch";
import PlayerSeason from "@/components/server/playerSeason";
import { cookies } from "next/headers";
type PageProps = {
  params: {
    detail: string;
    team: string;
    category: string;
    detail_player: string;
    id_player: string;
  };
};
async function getUserData() {
  const cookieStore = cookies();
  const fetchData = await fetch(process.env.NEXT_PUBLIC_URL + "/user/auth", {
    headers: {
      Authorization: `Bearer ${cookieStore.get("token")?.value}`,
    },
  });
  const res = await fetchData.json();
  if (!res.success) {
    throw new Error(res.message);
  }
  return res;
}

export default async function page({ params: query }: PageProps) {
  const data = await getUserData();

  const navigation = ["last match", "season stats", "history", "medis", "measurement"];
  const pages =
    data.data.role === "SUPERADMIN"
      ? [
          // @ts-ignore
          <PlayerLastMatch params={query} key={1} />,
          // @ts-ignore
          <PlayerSeason params={query} key={2} />,
          // @ts-ignore
          <HistoryPlayer params={query} key={3} />,
          // @ts-ignore
          // <ExerciseTime params={query} key={5} />,
        ]
      : [];
  return <div>{pages[navigation.indexOf(decodeURI(query.detail_player))]}</div>;
}
