import AddPlayer from "@/components/client/addPlayer";
import React from "react";
type PageProps = {
  params: {
    query: string;
  };
};
export default function page({ params: query }: PageProps) {
  return (
    <div className="w-full">
      <AddPlayer params={query} />
    </div>
  );
}
