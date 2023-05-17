import { redirect } from "next/navigation";
import React from "react";
type PageProps = {
  params: {
    team: any;
    category: any;
    query: string;
  };
};
export default function page({ params: query }: PageProps) {
  return <div className="">{redirect(`/main/${query.category}/${query.team}/player`)}</div>;
}
