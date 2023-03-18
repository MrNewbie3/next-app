import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Popup from "@/components/popup";
import AddTeam from "@/components/addteam";
import TeamCard from "@/components/teamcard";




export default function Home() {
  return (
    <main>
      <Navbar />
      <Popup/>
      <AddTeam/>
      <TeamCard/>
   
    </main>
  );
}
