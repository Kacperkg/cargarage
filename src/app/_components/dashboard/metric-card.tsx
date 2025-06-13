"use client";

import { Car, Zap, Gauge, Star } from "lucide-react";
import { Card, CardHeader, CardTitle } from "~/components/ui/card";

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
          <h1 className="hidden text-nowrap md:block">{title}</h1>
          {icon}
        </CardTitle>
        <h1 className="hidden text-2xl md:block">{value}</h1>
      </CardHeader>
    </Card>
  );
};

const MetricCardRow = () => {
  return (
    <div className="m-auto mt-10 grid w-full grid-cols-4 gap-4 lg:grid-cols-4">
      <MetricCard
        title="Dream Cars"
        value="8"
        icon={<Car className="h-6 w-6 text-blue-400" />}
      />
      <MetricCard
        title="Miles Logged"
        value="123,456"
        icon={<Gauge className="h-6 w-6 text-yellow-400" />}
      />
      <MetricCard
        title="Total HP"
        value="189"
        icon={<Zap className="h-6 w-6 text-green-400" />}
      />
      <MetricCard
        title="Wishlist"
        value="8"
        icon={<Star className="h-6 w-6 text-purple-400" />}
      />
    </div>
  );
};

export { MetricCardRow };
