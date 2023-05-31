import AddCrew from "@/components/client/addCrew";
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
      <AddCrew params={query} />
    </div>
  );
}
