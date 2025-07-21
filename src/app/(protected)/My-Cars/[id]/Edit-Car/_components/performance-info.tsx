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

const PerformanceInfo = () => {
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
              placeholder={myCar.engine ?? "Not Provided"}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="engineType">Engine Type *</Label>
            <Select name="engineType" required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={myCar.engineType} />
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
            <Select name="transmissionType" required>
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
              id="hp"
              name="hp"
              type="number"
              placeholder={myCar.hp.toString()}
              min="0"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mileage">Current Mileage *</Label>
            <Input
              id="mileage"
              name="mileage"
              type="number"
              placeholder={myCar.mileage.toString()}
              min="0"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="milesBoughtAt">Miles at Purchase</Label>
            <Input
              id="milesBoughtAt"
              name="milesBoughtAt"
              type="number"
              placeholder={myCar.milesBoughtAt.toString()}
              min="0"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceInfo;
