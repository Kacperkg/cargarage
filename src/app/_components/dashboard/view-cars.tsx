import React from "react";
import { Car } from "lucide-react";

const ViewCarsDisplay = () => {
  const cars = [
    { id: 1, make: "BMW", model: "M3", year: 2023, color: "Alpine White" },
    {
      id: 2,
      make: "Porsche",
      model: "911 GT3",
      year: 2022,
      color: "GT Silver",
    },
    {
      id: 3,
      make: "Ferrari",
      model: "488 GTB",
      year: 2021,
      color: "Rosso Corsa",
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Your Garage</h3>
      <div className="space-y-3">
        {cars.map((car) => (
          <div
            key={car.id}
            className="flex items-center gap-3 rounded-lg border p-3"
          >
            <Car className="text-muted-foreground h-5 w-5" />
            <div className="flex-1">
              <div className="font-medium">
                {car.year} {car.make} {car.model}
              </div>
              <div className="text-muted-foreground text-sm">{car.color}</div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-muted-foreground text-sm">
        Manage your car collection, add new vehicles, and track modifications.
      </p>
    </div>
  );
};

export default ViewCarsDisplay;
