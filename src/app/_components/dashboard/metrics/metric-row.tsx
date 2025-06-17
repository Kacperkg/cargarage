"use client";

import { Car, Zap, Gauge, Star } from "lucide-react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { api } from "~/trpc/react";
import MetricCard from "./metric-card";

export default function MetricCardRow() {
  const { data: myCars } = api.getMyCars.getMyCars.useQuery();
  const { data: myHp } = api.getMyCars.getMyHp.useQuery();
  const { data: dreamCar } = api.getDreamCar.getDreamCar.useQuery();
  const { data: myMiles } = api.getMyCars.getMyMiles.useQuery();

  const metrics = [
    {
      title: "Your Garage",
      value: myCars?.length ?? 0,
      description: "Your current cars",
      icon: <Car className="h-6 w-6 text-blue-400" />,
      units: "cars",
    },
    {
      title: "Miles Logged",
      value: myMiles ?? 0,
      description: "Total miles driven",
      icon: <Gauge className="h-6 w-6 text-yellow-400" />,
      units: "miles",
    },
    {
      title: "Total HP",
      value: myHp ?? 0,
      description: "Total horsepower of your cars",
      icon: <Zap className="h-6 w-6 text-green-400" />,
      units: "hp",
    },
    {
      title: "Wishlist",
      value: dreamCar?.length ?? 0,
      description: "Your dream cars",
      icon: <Star className="h-6 w-6 text-purple-400" />,
      units: "cars",
    },
  ] as const;

  const MetricDialog = ({
    title,
    value,
    description,
    units,
  }: {
    title: string;
    value: string;
    description: string;
    units: string;
  }) => (
    <AlertDialogContent className="bg-bg2 max-h-[80vh] max-w-2xl overflow-y-auto">
      <AlertDialogHeader>
        <AlertDialogTitle className="text-2xl font-bold">
          {title}
        </AlertDialogTitle>
        <AlertDialogDescription className="flex flex-col gap-2">
          {description}
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogDescription className="flex items-end gap-1">
        <span className="text-2xl font-bold text-white">{value}</span>
        <span className="text-muted-foreground">{units}</span>
      </AlertDialogDescription>
      <AlertDialogFooter>
        <AlertDialogCancel>{"Close"}</AlertDialogCancel>
      </AlertDialogFooter>
    </AlertDialogContent>
  );

  const MetricCardWrapper = ({
    metric,
  }: {
    metric: (typeof metrics)[number];
  }) => (
    <div>
      <div className="hidden xl:block">
        <MetricCard {...metric} />
      </div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <div className="block cursor-pointer xl:hidden">
            <MetricCard {...metric} />
          </div>
        </AlertDialogTrigger>
        <MetricDialog
          title={metric.title}
          value={metric.value.toString()}
          description={metric.description}
          units={metric.units}
        />
      </AlertDialog>
    </div>
  );

  return (
    <div className="m-auto mt-4 grid w-full grid-cols-4 gap-4 lg:grid-cols-4">
      {metrics.map((metric, index) => (
        <MetricCardWrapper key={index} metric={metric} />
      ))}
    </div>
  );
}
