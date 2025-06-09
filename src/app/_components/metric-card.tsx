"use client";

import { Car, Zap, Gauge, icons, Star } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
}

const MetricCard = ({ title, value, icon }: MetricCardProps) => {
  return (
    <div className="bg-bg2 col-span-1 mt-5 flex aspect-video items-center justify-center rounded-lg border p-4 xl:mt-0">
      <div className="flex flex-col items-start justify-start">
        <div className="flex flex-row items-center gap-4">
          <h1 className="text-xl text-white/70">{title}</h1>
          {icon}
        </div>
        <h2 className="mt-4 text-2xl">{value}</h2>
      </div>
    </div>
  );
};

const MetricCardRow = () => {
  return (
    <div className="m-auto grid w-full max-w-7xl grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
        title="Total Horsepower"
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
