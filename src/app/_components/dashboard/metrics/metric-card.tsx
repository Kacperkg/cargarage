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
import { Card, CardHeader, CardTitle } from "~/components/ui/card";
import { api } from "~/trpc/react";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
}

const MetricCard = ({ title, value, icon }: MetricCardProps) => {
  return (
    <Card className="animate-fade-in bg-bg2 flex aspect-square flex-col items-start justify-center md:aspect-video">
      <CardHeader className="flex w-full flex-col items-center justify-center gap-4">
        <CardTitle className="flex flex-row items-center gap-4 text-xl text-white/70">
          <h1 className="hidden text-nowrap xl:block">{title}</h1>
          {icon}
        </CardTitle>
        <h1 className="hidden text-2xl xl:block">{value}</h1>
      </CardHeader>
    </Card>
  );
};

const MetricCardRow = () => {
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
    },
    {
      title: "Miles Logged",
      value: myMiles ?? 0,
      description: "Total miles driven",
      icon: <Gauge className="h-6 w-6 text-yellow-400" />,
    },
    {
      title: "Total HP",
      value: myHp ?? 0,
      description: "Total horsepower of your cars",
      icon: <Zap className="h-6 w-6 text-green-400" />,
    },
    {
      title: "Wishlist",
      value: dreamCar?.length ?? 0,
      description: "Your dream cars",
      icon: <Star className="h-6 w-6 text-purple-400" />,
    },
  ] as const;

  const MetricDialog = ({
    title,
    value,
    description,
  }: {
    title: string;
    value: string;
    description: string;
  }) => (
    <AlertDialogContent className="max-h-[80vh] max-w-2xl overflow-y-auto">
      <AlertDialogHeader>
        <AlertDialogTitle className="text-2xl font-bold">
          {title}
        </AlertDialogTitle>
      </AlertDialogHeader>
      <AlertDialogDescription>
        <p className="text-muted-foreground mb-4">{description}</p>
        <h1 className="text-2xl font-bold">{value}</h1>
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
};

export { MetricCardRow };
