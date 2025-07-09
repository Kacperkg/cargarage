"use client";

import { Button } from "~/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AddCarButton() {
  const router = useRouter();
  return (
    <Button
      variant="outline"
      className="bg-bg2"
      onClick={() => {
        router.push("/Dream-Cars/Add-Car");
      }}
    >
      <Plus className="h-4 w-4" />
      Add Car
    </Button>
  );
}
