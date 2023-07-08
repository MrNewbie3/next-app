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
    const name = async () => {
      const [clubData, categoryData, userAuth] = await Promise.all([instance.get("club?quantity=50"), instance.get("category"), instance.get("user/auth")]);
      if (categoryData.status !== 200 || clubData.status !== 200) {
        throw new Error(categoryData.status + " " + clubData.status);
      }
      const { role } = dataUser.data.user;
      if (role === "ADMIN") {
        const matchingCategory = categoryData.data.data.find((data: any) => data.userId === userAuth.data.data.id);
        if (matchingCategory) {
          router.push("/main/" + matchingCategory.uuid);
        }
      }
      if (role === "COACH") {
        const matchingClub = clubData.data.data.find((data: any) => data.userId === userAuth.data.data.id);
        if (matchingClub) {
          const matchingCategory = categoryData.data.data.find((data: any) => data.id === matchingClub.categoryId);
          if (matchingCategory) {
            router.push(`/main/${matchingCategory.uuid}/${matchingClub.uuid}`);
          }
        }
      }
    };

    if (dataUser.data.user != undefined) {
      if (dataUser.data.user.role !== "SUPERADMIN") {
        name();
      }
    }
  }, []);
  return <div></div>;
}
