import React from "react";
import MakeSchedule from "./makeschedule";
import DatePicker from "./client/dates";

type PageProps = {
  params: { category: string; team: string };
};

function ExerciseTime({ params: query }: PageProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* @ts-ignore */}
      <MakeSchedule params={query} />
      <DatePicker />
    </div>
  );
}
export default ExerciseTime;
