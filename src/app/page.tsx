import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { HydrateClient } from "~/trpc/server";
import Landing from "./_components/landing";

export default async function Home() {
  const user = await currentUser();

  if (user) {
    redirect("/Dashboard");
  }

  return (
    <HydrateClient>
      <Landing />
    </HydrateClient>
  );
}
