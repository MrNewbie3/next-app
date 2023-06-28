"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function notFound() {
  const router = useRouter();
  router.push("/main");
  return <div>not-found</div>;
}
