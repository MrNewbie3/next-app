import TeamDetail from "@/components/client/tabBar";
import TeamCard from "@/components/server/teamcard";
import React from "react";
type PageProps = {
  params: { query: string };
};
export default function page({ params: query }: PageProps) {
  return (
    <div className="w-full px-8 flex-col flex gap-y-6">
      <TeamCard />
      <TeamDetail params={query} />
    </div>
  );
}
