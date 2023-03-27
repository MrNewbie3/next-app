/* eslint-disable react/jsx-key */
import AddMatch from "@/components/client/addMatch";
import React from "react";
type PageProps = {
  params: {
    query: string;
  };
};

export default function page({ params: query }: PageProps) {
  return <AddMatch params={query} />;
}
