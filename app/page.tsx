"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const queryClient = new QueryClient();
export default function Home() {
  const router = useRouter();
  router.push("/new_sport");
  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex-col flex px-10 items-center gap-11 "></main>;
    </QueryClientProvider>
  );
}
