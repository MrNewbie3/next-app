import React from "react";
import PDFView from "@/components/client/pdf_player";
import { cookies } from "next/headers";
type PageProps = {
  params: {
    category: String;
    team: String;
    detail: String;
  };
};

async function getData(params: String) {
  const cookieStore = cookies();

  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/club/` + params, {
    headers: {
      Authorization: `Bearer ${cookieStore.get("token")?.value}`,
    },
    cache: "no-store",
    next: {
      revalidate: 10,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data = " + res.statusText);
  }
  return res.json();
}
async function getDataPlayer(params: String) {
  const cookieStore = cookies();

  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/club/p/` + params, {
    headers: {
      Authorization: `Bearer ${cookieStore.get("token")?.value}`,
    },
    cache: "no-store",
    next: {
      revalidate: 10,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data = " + res.statusText);
  }
  return res.json();
}
export default async function PDFPage({ params: query }: PageProps) {
  const data = await getData(query.team);
  const player = await getDataPlayer(query.team);

  return (
    <>
      {/* @ts-ignore */}
      <PDFView data={{ team: data.data, player: player.data.players }} />
    </>
  );
}

/* @ts-ignore */
