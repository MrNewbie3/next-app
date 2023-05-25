import AddExercise from "@/components/addExercise";
import TambahLatihan from "@/components/client/newSchedule";
import React from "react";
type PageProps = {
  params: {
    category: string;
    team: string;
  };
};

export default function page({ params: query }: PageProps) {
  return (
    <div>
      <TambahLatihan params={query} />
    </div>
  );
}
