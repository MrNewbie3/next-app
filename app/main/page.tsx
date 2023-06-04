"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  // @ts-ignore
  const data = JSON.parse(localStorage.getItem("login"));
  const router = useRouter();
  if (data.data.user.role !== "SUPERADMIN") {
    return router.push("/main/7fe637a8-0eb7-4c32-9ce5-0f85edfe7de4");
  }
  router.push("main/new_sport");
  return (
    <main className="flex-col flex px-10 items-center gap-11 ">
      <h1>Hello</h1>
    </main>
  );
}
