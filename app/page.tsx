import Popup from "@/components/popup";
import AddTeam from "@/components/addteam";
import TeamCard from "@/components/teamcard";
import TabBar from "@/components/tabBar";




export default function Home() {
  return (
    <main>  
      <Popup/>
      <AddTeam/>
      <TeamCard/>
      <TabBar/>   
    </main>
  );
}
