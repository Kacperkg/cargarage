"use client";
import Navbar from "../_components/navbar";
import { MetricCardRow } from "../_components/dashboard/metric-card";
import { Car } from "lucide-react";
import { mockCars } from "~/utils/data";
import QuickActions from "../_components/dashboard/quick-action";

export default function DashboardPage() {
  return (
    <div className="flex h-screen w-full flex-col">
      <Navbar />
      <div className="mx-4 max-w-7xl md:m-auto">
        <MetricCardRow />
        <div className="mt-10 flex flex-col justify-between gap-4 xl:flex-row">
          <FeaturedCards />
          <QuickActions />
        </div>
      </div>
    </div>
  );
}

const FeaturedCards = () => {
  return (
    <div className="bg-bg2 max-w-7xl rounded-lg border p-8 shadow-lg">
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
