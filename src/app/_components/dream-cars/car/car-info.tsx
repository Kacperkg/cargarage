"use client";
import { Heart, Pencil, Trash } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Skeleton } from "~/components/ui/skeleton";
import { useDreamCar } from "~/app/context/dream-car-context";

export default function CarInfo() {
  const { dreamCar, isLoading } = useDreamCar();

  if (isLoading || !dreamCar) {
    return (
      <>
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <Skeleton className="h-6 w-[10ch]" />
              <Skeleton className="h-6 w-[10ch]" />
              <Skeleton className="h-6 w-[10ch]" />
            </div>
            <div className="flex items-center gap-3">
              <Skeleton className="h-6 w-[10ch]" />
              <span className="text-muted-foreground">
                <Skeleton className="h-6 w-[20ch]" />
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <Skeleton className="h-8 w-[8ch]" />
            <Skeleton className="h-8 w-[8ch]" />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-row items-start justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">
            {dreamCar.year} {dreamCar.make} {dreamCar.model}
          </h1>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 rounded-md border-red-500/30 bg-red-500/20 px-2 text-red-400">
              <Heart className="mr-1 h-3 w-3" />
              Dream Car
            </div>
            <span className="text-muted-foreground">
              Added {new Date(dreamCar.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <Button variant="outline">
            <Pencil />
            Edit
          </Button>
          <Button variant="destructive" className="bg-red-500/20 text-red-400">
            <Trash />
            Delete
          </Button>
        </div>
      </div>
    </>
  );
}
