"use client";
import { instance } from "../../config/axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";

export default function Authentication() {
  const router = useRouter();
  // @ts-ignore
  const dataUser = JSON.parse(localStorage.getItem("login"));
  useEffect(() => {
    instance
      .get("club?quantity=50")
      .then((result: any) => {
        const { data } = result.data;

        data.filter((e: any) => {
          // @ts-ignore
          if (dataUser.data.user.role === "COACH" && dataUser.data.user.id === e.userId) {
            // @ts-ignore
            return router.push("/main/7fe637a8-0eb7-4c32-9ce5-0f85edfe7de4/" + e.uuid);
          }
          if (dataUser.data.user.role === "ADMIN") {
            // @ts-ignore
            return router.push("/main/3b2ae5bb-736c-43d1-86ef-4119aec586d4/");
          }
        });
      })
      .catch((err: any) => {
        throw new Error(err);
      });
  }, []);
  return <div></div>;
}
