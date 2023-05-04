import TeamDetails from "@/components/client/tabBar";
import TeamCard from "@/components/server/teamcard";
import React from "react";
type PageProps = {
  children: React.ReactNode;
  params: { query: string };
};
export default function TeamLayouts(children: PageProps) {
  return (
    <div className="w-full px-8 flex-col flex gap-y-6">
      {/*@ts-ignore  */}
      <TeamCard params={children.params} />
      {/*@ts-ignore  */}
      <TeamDetails params={children.params} />
      {children.children}
    </div>
  );
}
