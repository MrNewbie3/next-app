import AddPlayer from "@/components/client/addPlayer";
import React from "react";
type PageProps = {
  params: {
    team: string;
    category: string;
  };
};
export default function page({ params: query }: PageProps) {
  return (
    <div className="w-full">
      <AddPlayer params={query} />
    </div>
  );
}
