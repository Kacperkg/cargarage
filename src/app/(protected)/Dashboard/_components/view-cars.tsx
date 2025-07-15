import React from "react";
import { Car } from "lucide-react";
import { api } from "~/trpc/react";
import { type MyCar } from "~/utils/types";

const ViewCarsDisplay = () => {
  const { data: cars } = api.getMyCars.getMyCars.useQuery();

  if (!cars || cars.length === 0) {
    return (
      <div className="space-y-4">
        <div className="space-y-3">No cars found</div>
        <p className="text-muted-foreground text-sm">
          Manage your car collection, add new vehicles, and track modifications.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        {cars.slice(0, 8).map((car: MyCar) => (
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
