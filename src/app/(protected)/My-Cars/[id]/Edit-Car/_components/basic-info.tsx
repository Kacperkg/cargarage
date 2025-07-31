"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { useMyCar } from "~/app/context/my-car-context";
import type { EditCarInput } from "~/utils/types";

export default function BasicInfo({
  formData,
  updateField,
}: {
  formData: EditCarInput;
  updateField: (
    field: keyof EditCarInput,
    value: string | number | Date | undefined,
  ) => void;
}) {
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
              value={formData.vin}
              onChange={(e) => updateField("vin", e.target.value)}
              placeholder={"Enter Vin"}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="make">Make *</Label>
            <Input
              id="make"
              name="make"
              value={formData.make}
              placeholder={myCar.make}
              required
              onChange={(e) => updateField("make", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="model">Model *</Label>
            <Input
              id="model"
              name="model"
              value={formData.model}
              placeholder={myCar.model}
              required
              onChange={(e) => updateField("model", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="year">Year *</Label>
            <Input
              id="year"
              name="year"
              type="number"
              value={formData.year}
              placeholder={myCar.year.toString()}
              required
              min="1900"
              max="2025"
              onChange={(e) => updateField("year", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="color">Color</Label>
            <Input
              id="color"
              name="color"
              value={formData.color}
              placeholder={"Enter Car Color"}
              onChange={(e) => updateField("color", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="licensePlate">License Plate</Label>
            <Input
              id="licensePlate"
              name="licensePlate"
              value={formData.licensePlate}
              onChange={(e) => updateField("licensePlate", e.target.value)}
              placeholder={"Enter License Plate"}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
