"use client"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  router.push("/login");
  return <main className="flex-col flex px-10 items-center gap-11 "></main>;
}
