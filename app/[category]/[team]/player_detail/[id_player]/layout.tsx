import PlayerCard from "@/components/playerCard";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <PlayerCard />
      {children}
    </div>
  );
}
