import HistoryDetails from "@/components/historyDetails";
import React from "react";
type PageProps = {
  params: {
    team: string;
    category: string;
    league: string;
  };
};

export default function page({ params: query }: PageProps) {
  return (
    <div>
      {/* @ts-ignore */}
      <HistoryDetails params={query} />
    </div>
  );
}
