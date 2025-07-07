"use client";

import { Palette, Car, Gauge, Calendar, Settings } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import { api } from "~/trpc/react";

import CardSkeleton from "./card-skeleton";

export default function MyCarsCard() {
  const {
    data: myCars,
    isLoading,
    isError,
  } = api.getMyCars?.getMyCars.useQuery();

  if (isLoading || !myCars) {
    return <CardSkeleton />;
  }

  if (!isError) {
    return myCars.map((car) => (
      <Card key={car.id} className="bg-bg2 flex flex-col gap-2">
        <CardHeader className="flex aspect-video items-center justify-center border-b-2">
          <Car className="text-accent h-10 w-10" />
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-2">
            <li className="flex flex-row gap-2 text-2xl font-semibold">
              <h1>{car.year}</h1>
              <h1>{car.make}</h1>
              <h1>{car.model}</h1>
            </li>
            <li className="text-muted-foreground flex flex-row items-center gap-2">
              <h1
                className={`rounded-md px-2 py-1 text-sm ${
                  car.status === "Daily"
                    ? "bg-green-500/10 text-green-500"
                    : car.status === "Summer"
                      ? "bg-yellow-500/10 text-yellow-500"
                      : car.status === "Winter"
                        ? "bg-blue-500/10 text-blue-500"
                        : car.status === "Track"
                          ? "bg-red-500/10 text-red-500"
                          : car.status === "Show"
                            ? "bg-purple-500/10 text-purple-500"
                            : car.status === "Garage"
                              ? "bg-gray-500/10 text-gray-500"
                              : car.status === "Project"
                                ? "bg-orange-500/10 text-orange-500"
                                : car.status === "Sold"
                                  ? "bg-red-500/10 text-red-500"
                                  : "bg-gray-500/10 text-gray-500"
                }`}
              >
                {car.status}
              </h1>
              <h1>{car.mileage}</h1>
            </li>

            <div className="flex flex-col gap-4 border-b-2 py-4">
              <ul className="grid grid-cols-2">
                <li className="flex w-full flex-row items-center gap-2">
                  <Palette className="text-muted-foreground h-5 w-5" />
                  <h1 className="text-sm font-semibold">{car.color}</h1>
                </li>
                <li className="flex w-full flex-row items-center gap-2">
                  <Gauge className="text-muted-foreground h-5 w-5" />
                  <h1 className="text-sm font-semibold">{car.hp} HP</h1>
                </li>
              </ul>
              <li className="flex w-full flex-row items-center gap-2">
                <Calendar className="text-muted-foreground h-5 w-5" />
                <h1 className="text-sm font-semibold">
                  Owned since {car.purchaseDate?.toLocaleDateString()}
                </h1>
              </li>
            </div>
            <ul className="grid w-full grid-cols-2">
              <li className="flex w-full flex-col items-start gap-2">
                <h1 className="text-muted-foreground text-sm font-semibold">
                  Engine
                </h1>
                <h1 className="text-sm font-semibold">{car.engine}</h1>
              </li>
              <li className="flex w-full flex-col items-start gap-2">
                <h1 className="text-muted-foreground text-sm font-semibold">
                  License Plate
                </h1>
                <h1 className="text-sm font-semibold">{car.licensePlate}</h1>
              </li>
            </ul>
          </ul>
          <CardFooter className="mt-4 grid w-full grid-cols-1 gap-4 p-0 lg:grid-cols-2">
            <div className="w-full">
              <Button
                variant="outline"
                className="w-full border-2 hover:bg-black/10"
              >
                <div className="flex flex-row items-center gap-2">
                  <Settings className="h-4 w-4" />
                  <h1 className="font-bold">Manage</h1>
                </div>
              </Button>
            </div>
            <div className="w-full">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/50 w-full font-bold">
                View
              </Button>
            </div>
          </CardFooter>
        </CardContent>
      </Card>
    ));
  }
}
