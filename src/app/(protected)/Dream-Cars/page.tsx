"use client";

import DreamCarCard from "~/app/_components/dream-cars/dream-car-card";
import { Button } from "~/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DreamCarsPage() {
  const router = useRouter();
  return (
    <div className="flex h-screen w-full flex-col">
      <div className="mt-8 flex w-full flex-col gap-4 px-2 sm:px-4 md:mx-auto lg:px-16">
        <div className="flex items-center justify-between">
          <h2 className="text-muted-foreground">Manage your dream cars</h2>
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
        </div>
        <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
          <DreamCarCard />
        </div>
      </div>
    </div>
  );
}
