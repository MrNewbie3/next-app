import Popup from "@/components/popup";
import AddTeam from "@/components/addteam";
import TeamCard from "@/components/teamcard";
import TabBar from "@/components/tabBar";
import MakePlayer from "@/components/makeplayer";
import MakeSchedule from "@/components/makeschedule";
import AddPlayer from "@/components/addPlayer";
import ListPlayer from "@/components/listPlayer";

export default function Home() {
  return (
    <main className="flex-col flex gap-12 container">
      <Popup />
      <AddTeam />
      <TeamCard />
      <TabBar />
      <MakePlayer />
      <MakeSchedule />
      <AddPlayer />
      <ListPlayer/>
    </main>
  );
}
