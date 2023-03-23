import PraticeTime from "@/components/practiceTime";
import React from "react";

type PageProps = {
  params: { query: string };
};
export default function page({ params: query }: PageProps) {
  return (
    <>
      <PraticeTime params={query}/>
    </>
  );
}
