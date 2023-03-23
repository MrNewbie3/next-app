import AddExercise from "@/components/addExercise";
import React from "react";

type PageProps = {
  params: { query: string };
};
export default function page({ params: query }: PageProps) {
  return (
    <div>
      <AddExercise />
    </div>
  );
}
