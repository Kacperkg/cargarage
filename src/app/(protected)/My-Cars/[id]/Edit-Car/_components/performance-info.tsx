"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Gauge } from "lucide-react";
import { EngineType, TransmissionType } from "@prisma/client";
import { useMyCar } from "~/app/context/my-car-context";
import type { EditCarInput } from "~/utils/types";

export default function PerformanceInfo({
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
        <CardTitle className="flex items-center gap-2">
          <Gauge className="h-5 w-5" />
          Performance & Technical Specs
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="engine">Engine</Label>
            <Input
              id="engine"
              name="engine"
              value={formData.engine}
              onChange={(e) => updateField("engine", e.target.value)}
              placeholder={"Enter Engine"}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="engineType">Engine Type *</Label>
            <Select
              required
              name="engineType"
              value={formData.engineType ?? ""}
              onValueChange={(value) => updateField("engineType", value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={"Engine Type"} />
              </SelectTrigger>
              <SelectContent>
                {Object.values(EngineType).map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="transmissionType">Transmission *</Label>
            <Select
              name="transmissionType"
              value={formData.transmissionType ?? ""}
              onValueChange={(value) => updateField("transmissionType", value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={myCar.transmissionType} />
              </SelectTrigger>
              <SelectContent>
                {Object.values(TransmissionType).map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="hp">Horsepower</Label>
            <Input
              onChange={(e) => updateField("hp", e.target.value)}
              id="hp"
              name="hp"
              type="number"
              value={formData.hp}
              placeholder={"Enter HP"}
              min="0"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mileage">Current Mileage *</Label>
            <Input
              onChange={(e) => updateField("mileage", e.target.value)}
              id="mileage"
              name="mileage"
              type="number"
              value={formData.mileage}
              placeholder={"Enter Mileage"}
              min="0"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="milesBoughtAt">Miles at Purchase</Label>
            <Input
              onChange={(e) => updateField("milesBoughtAt", e.target.value)}
              id="milesBoughtAt"
              name="milesBoughtAt"
              type="number"
              value={formData.milesBoughtAt}
              placeholder={"Enter miles bought at"}
              min="0"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
