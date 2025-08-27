"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "~/components/ui/button";
import { useRouter } from "next/navigation";

export default function DashboardButton() {
  const router = useRouter();

  return (
    <Button
      variant="outline"
      className="bg-bg2 mt-8 w-fit"
      onClick={() => router.push("/My-Cars")}
    >
      <ArrowLeft />
      Back to Dashboard
    </Button>
  );
}
