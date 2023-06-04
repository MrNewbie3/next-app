"use client";
import Authentication from "@/components/client/authentication";

export default function Home() {
  return (
    <main className="flex-col w-full h-full justify-center flex px-10 items-center gap-11 ">
      <Authentication />
      <h1 className="text-7xl">Hello!</h1>
    </main>
  );
}
