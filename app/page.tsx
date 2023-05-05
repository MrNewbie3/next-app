import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  router.push("/new_sport");
  return (
    <main className="flex-col flex px-10 items-center gap-11 ">
      <h2>Hello</h2>
    </main>
  );
}
