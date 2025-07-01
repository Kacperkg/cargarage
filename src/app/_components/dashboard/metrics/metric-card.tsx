"use client";

import { Card, CardHeader, CardTitle } from "~/components/ui/card";
import { CircleLoader } from "react-spinners";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  isLoading?: boolean;
}

export default function MetricCard({
  title,
  value,
  icon,
  isLoading,
}: MetricCardProps) {
  return (
    <Card className="animate-fade-in bg-bg2 flex aspect-square flex-col items-start justify-center md:aspect-video">
      <CardHeader className="flex w-full flex-col items-center justify-center gap-4">
        <CardTitle className="flex flex-row items-center gap-4 text-xl text-white/70">
          <h1 className="hidden text-nowrap xl:block">{title}</h1>
          {icon}
        </CardTitle>
        <h1 className="hidden text-2xl xl:block">
          {isLoading ? <CircleLoader color="#ec6d43" size={12} /> : value}
        </h1>
      </CardHeader>
    </Card>
  );
}
