import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import SyncUser from "./sync-user";

type Props = { children: ReactNode };

export default async function ProtectedLayout({ children }: Props) {
  const { userId } = await auth();
  if (!userId) {
    redirect("/");
  }
  return (
    <>
      <SyncUser />
      {children}
    </>
  );
}
