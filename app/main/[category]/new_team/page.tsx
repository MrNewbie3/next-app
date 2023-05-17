import AddTeam from "@/components/client/addteam";
import React from "react";

type Props = {
  params: string;
};

export default function page({ params }: Props) {
  // @ts-ignore
  const { category } = params;
  return (
    <div className="w-full px-8">
      <AddTeam params={category} />
    </div>
  );
}
