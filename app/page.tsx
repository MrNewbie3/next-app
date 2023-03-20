import Popup from "@/components/popup";
import AddTeam from "@/components/addteam";
import TeamCard from "@/components/teamcard";
import TabBar from "@/components/tabBar";
import MakePlayer from "@/components/makeplayer";
import MakeSchedule from "@/components/makeschedule";
import AddPlayer from "@/components/addPlayer";
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


export default function Home() {
  return (
    <main className="flex-col flex px-10 items-center gap-11 ">
      <Popup />
      <AddTeam />
      <TeamCard />
      <TabBar />
      <MakePlayer />
      <MakeSchedule />
      <MakeMatch/>
      <AddPlayer />
      <ListPlayer/>
      <AddMatch/>
      <PlayerPick/>
      <PlayerList/>
      <MatchRekap/>
      <PraticeTime/>
      <AddExercise/>
      <ExerciseTime/>
      <PlayerCard/>
      <PlayerData/>
      <History/>

    </main>
  );
}
