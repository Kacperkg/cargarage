"use client";
import Navbar from "../_components/navbar";
import { MetricCardRow } from "../_components/metric-card";
import { Car, Heart, Wrench, Map, Target, FileText } from "lucide-react";
import { mockCars } from "~/utils/data";

export default function DashboardPage() {
  return (
    <div className="flex h-screen w-full flex-col">
      <Navbar />
      <div className="mx-4 max-w-7xl md:m-auto">
        <MetricCardRow />
        <div className="flex flex-col justify-between gap-4 xl:flex-row">
          <FeaturedCards />
          <QuickActions />
        </div>
      </div>
    </div>
  );
}

const FeaturedCards = () => {
  return (
    <div className="bg-bg2 mt-10 max-w-7xl rounded-lg border p-8 shadow-lg">
      <div className="mb-4 flex items-center gap-4 py-4">
        <Car className="text-accent h-8 w-8" />
        <h1 className="text-3xl font-bold text-white">Dream Garage</h1>
      </div>
      <div>
        <div className="grid grid-cols-4 gap-x-4 border-b border-white/20 py-2 text-lg font-semibold text-white/70">
          <h1>Make</h1>
          <h1>Model</h1>
          <h1>Year</h1>
          <h1>HP</h1>
        </div>
        {mockCars.map((car, index) => (
          <div
            key={index}
            className="grid grid-cols-4 gap-x-4 border-b border-white/5 py-3 text-xl last:border-b-0"
          >
            <div className="text-white">{car.make}</div>
            <div className="text-white">{car.model}</div>
            <div className="text-white">{car.year}</div>
            <div className="text-white">{car.hp}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const QuickActions = () => {
  return (
    <aside className="bg-bg2 mt-10 rounded-lg border p-8 shadow-lg">
      <h1 className="mb-2 text-2xl">Quick Actions</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-2">
        <QuickActionButtons
          title="Dream Car"
          desc="Add to wishlist"
          icon={<Heart />}
          color="red"
        />
        <QuickActionButtons
          title="Projects"
          desc="Start Modifying"
          icon={<Wrench />}
          color="orange"
        />
        <QuickActionButtons
          title="Road Trips"
          desc="Track/Add Road Trips"
          icon={<Map />}
          color="blue"
        />
        <QuickActionButtons
          title="My Cars"
          desc="View Your Cars"
          icon={<Car />}
          color="green"
        />
        <QuickActionButtons
          title="Goals"
          desc="Track Your Goals"
          icon={<Target />}
          color="pink"
        />
        <QuickActionButtons
          title="Service Log"
          desc="Track maintenance"
          icon={<FileText className="h-6 w-6" />}
          color="purple"
        />
      </div>
    </aside>
  );
};

interface QuickActionButtonsProps {
  title: string;
  desc: string;
  color?: string;
  icon?: React.ReactNode;
}

const QuickActionButtons = ({
  title,
  desc,
  icon,
  color,
}: QuickActionButtonsProps) => {
  return (
    <button
      className="flex aspect-video cursor-pointer flex-col items-center justify-center rounded-lg bg-gray-900 p-4 transition-all duration-150 hover:scale-103"
      style={{ backgroundColor: color }}
    >
      {icon}
      <h1 className="bold mt-[8px]">{title}</h1>
      <h2 className="text-sm text-white/70">{desc}</h2>
    </button>
  );
};
