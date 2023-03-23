import AddTeam from "@/components/client/addteam";
import TeamCard from "@/components/server/teamcard";
import TabBar from "@/components/client/tabBar";
import MakePlayer from "@/components/makeplayer";
import MakeSchedule from "@/components/makeschedule";
import AddPlayer from "@/components/client/addPlayer";
import ListPlayer from "@/components/server/listPlayer";
import AddMatch from "@/components/client/addMatch";
import MakeMatch from "@/components/server/makeMatch";
import PlayerPick from "@/components/playerPick";
import PlayerList from "@/components/client/match/playerList";
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
      {/* <MakeMatch /> */}
      {/* <AddPlayer /> */}
      {/* make schedule
      <MakeSchedule /> */}
      {/* list player
      <ListPlayer /> */}
      {/* add match
      <AddMatch /> */}
      {/* player pick
      <PlayerPick /> */}
      {/* player list
      <PlayerList /> */}
      {/* match rekap
      <MatchRekap /> */}
      {/* practice time
      <PraticeTime
        params={{
          query: "",
        }}
      /> */}
      {/* add exercise
      <AddExercise /> */}
      {/* exercise time
      <ExerciseTime /> */}
      {/* history
      <History /> */}
      player card
      <PlayerCard />
      palyer data
      <PlayerData />
      player stats
      <PlayerStatistik />
      individual stats
      <IndividualStatistik />
      player option
      <AddPlayerOption />
      edit player
      <EditPlayer />
    </main>
  );
}
