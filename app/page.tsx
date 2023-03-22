import AddTeam from "@/components/client/addteam";
import TeamCard from "@/components/server/teamcard";
import TabBar from "@/components/client/tabBar";
import MakePlayer from "@/components/makeplayer";
import MakeSchedule from "@/components/makeschedule";
import AddPlayer from "@/components/client/addPlayer";
import ListPlayer from "@/components/listPlayer";
import AddMatch from "@/components/addMatch";
import MakeMatch from "@/components/makeMatch";
import PlayerPick from "@/components/playerPick";
import PlayerList from "@/components/playerList";
import MatchRekap from "@/components/matchRekap";
import PraticeTime from "@/components/practiceTime";
import AddExercise from "@/components/addExercise";
import ExerciseTime from "@/components/exerciseTime";
import PlayerCard from "@/components/playerCard";
import PlayerData from "@/components/playerData";
import History from "@/components/history";
import IndividualStatistik from "@/components/IndividualStatistik";
import AddPlayerOption from "@/components/AddPlayerOption";
import EditPlayer from "@/components/editPlayer";
import PlayerStatistik from "@/components/PlayerStatistik";

export default function Home() {
  return (
    <main className="flex-col flex px-10 items-center gap-11 ">
      {/* <AddTeam /> */}
      {/* <TeamCard /> */}
      {/* <TabBar /> */}
      {/* <MakePlayer /> */}
      <MakeSchedule />
      {/* <MakeMatch /> */}
      {/* <AddPlayer /> */}
      <ListPlayer />
      <AddMatch />
      <PlayerPick />
      <PlayerList />
      {/* <MatchRekap /> */}
      <PraticeTime />
      <AddExercise />
      <ExerciseTime />
      <PlayerCard />
      <PlayerData />
      {/* <History /> */}
      <PlayerStatistik />
      <IndividualStatistik />
      <AddPlayerOption />
      <EditPlayer />
    </main>
  );
}
