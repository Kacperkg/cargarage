"use client";

import { Plus } from "lucide-react";
import { PropagateLoader } from "react-spinners";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { api } from "~/trpc/react";

export default function DreamCarsPage() {
  return (
    <div className="flex h-screen w-full flex-col">
      <div className="mt-8 flex w-full flex-col gap-4 px-2 sm:px-4 md:mx-auto lg:px-16">
        <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
          <DreamCarCard />
        </div>
      </div>
    </div>
  );
}

const DreamCarCard = () => {
  const {
    data: dreamCars,
    isLoading,
    isError,
  } = api.getDreamCar.getDreamCar.useQuery();

  if (isLoading || !dreamCars) {
    return (
      <div className="flex h-[80svh] items-center justify-center">
        <PropagateLoader color="#ec6d43" size={8} />
      </div>
    );
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
          <Button variant="outline" className="bg-bg2">
            View
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex">
        <p className="text-muted-foreground p-2">{car.year}</p>
        <p className="text-muted-foreground p-2">
          {car.hp}
          {"hp"}
        </p>
        <p className="text-muted-foreground p-2 lowercase">
          {car.transmissionType}
        </p>
        <p className="text-muted-foreground p-2">{car.color}</p>
      </CardContent>
    </Card>
  ));
};
