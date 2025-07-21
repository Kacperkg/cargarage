"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

import { useMyCar } from "~/app/context/my-car-context";

const BasicInfo = () => {
  const { myCar, isLoading } = useMyCar();

  if (isLoading || !myCar) {
    return <div>Error loading</div>;
  }

  return (
    <Card className="bg-bg2">
      <CardHeader>
        <CardTitle>Basic Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="vin">VIN Number</Label>
            <Input
              id="vin"
              name="vin"
              placeholder={myCar.vin ?? "Not Provided"}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="make">Make *</Label>
            <Input id="make" name="make" placeholder={myCar.make} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="model">Model *</Label>
            <Input id="model" name="model" placeholder={myCar.model} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="year">Year *</Label>
            <Input
              id="year"
              name="year"
              type="number"
              placeholder={myCar.year.toString()}
              min="1900"
              max="2025"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="color">Color</Label>
            <Input
              id="color"
              name="color"
              placeholder={myCar.color ?? "Not Provided"}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="licensePlate">License Plate</Label>
            <Input
              id="licensePlate"
              name="licensePlate"
              placeholder={myCar.licensePlate ?? "Not Provided"}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BasicInfo;
