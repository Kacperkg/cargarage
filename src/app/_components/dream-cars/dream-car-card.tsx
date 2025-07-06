"use client";

import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { api } from "~/trpc/react";
import SkeletonCard from "./skeleton-card";
import { useRouter } from "next/navigation";

const DreamCarCard = () => {
  const router = useRouter();

  const {
    data: dreamCars,
    isLoading,
    isError,
  } = api.getDreamCar.getDreamCar.useQuery();

  if (isLoading || !dreamCars) {
    return <SkeletonCard />;
  }

  if (isError) {
    return (
      <div className="flex h-[80svh] items-center justify-center">
        <p className="text-red-500">Error loading dream cars</p>
      </div>
    );
  }

  if (!dreamCars || dreamCars.length === 0) {
    return (
      <div className="flex h-[80svh] items-center justify-center">
        <p className="text-muted-foreground">No dream cars found</p>
      </div>
    );
  }

  return dreamCars.map((car) => (
    <Card className="bg-bg2 col-span-1" key={car.id}>
      <CardHeader>
        <CardTitle className="flex flex-row items-center justify-between text-2xl">
          <div>
            {car.make} {car.model}
          </div>
          <Button
            variant="outline"
            className="bg-bg2"
            onClick={() => router.push(`/Dream-Cars/${car.id.toString()}`)}
          >
            View
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex gap-2">
        <p className="bg-muted-foreground/10 text-muted-foreground rounded-md px-2 py-1">
          {car.year}
        </p>
        <p className="bg-muted-foreground/10 text-muted-foreground rounded-md px-2 py-1">
          {car.hp}
          {"hp"}
        </p>
        <p className="bg-muted-foreground/10 text-muted-foreground rounded-md px-2 py-1 lowercase">
          {car.transmissionType}
        </p>
        {car.color && (
          <p className="bg-muted-foreground/10 text-muted-foreground rounded-md px-2 py-1">
            {car.color}
          </p>
        )}
      </CardContent>
    </Card>
  ));
};

export default DreamCarCard;
