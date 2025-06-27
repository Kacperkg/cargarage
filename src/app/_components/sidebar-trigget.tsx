"use client";

import { usePathname } from "next/navigation";
import { Separator } from "~/components/ui/separator";
import GetPath from "~/app/_components/get-path";
import { SidebarTrigger } from "~/components/ui/sidebar";

export default function SidebarTriggerComponent() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <div className="mt-8 flex flex-row items-center gap-2 sm:px-4 lg:px-16">
      <SidebarTrigger />
      <Separator className="my-4" orientation="vertical" />
      <GetPath />
    </div>
  );
}
