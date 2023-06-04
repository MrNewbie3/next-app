"use client";
import { instance } from "@/config/axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  // @ts-ignore

  const dataUser = JSON.parse(localStorage.getItem("login"));
  const [timData, setTimData] = useState();
  const router = useRouter();
  useEffect(() => {
    instance
      .get("club?quantity=50")
      .then((result: any) => {
        const { data } = result.data;

        data.filter((e: any) => {
          e.userId === dataUser.data.user.id ? setTimData(e) : "";
          // @ts-ignore
          if (dataUser.data.user.role !== "SUPERADMIN" && data !== undefined) {
            // @ts-ignore
            return router.push("/main/7fe637a8-0eb7-4c32-9ce5-0f85edfe7de4/" + e.uuid);
          }
          router.push("/main/new_sport");
        });
      })
      .catch((err: any) => {
        throw new Error(err);
      });
  }, []);
  return (
    <main className="flex-col flex px-10 items-center gap-11 ">
      <h1>Hello</h1>
    </main>
  );
}
