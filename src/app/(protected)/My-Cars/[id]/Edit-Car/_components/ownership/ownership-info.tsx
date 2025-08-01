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
import { Calendar } from "lucide-react";
import { CarStatus } from "@prisma/client";
import { Textarea } from "~/components/ui/textarea";
import { useMyCar } from "~/app/context/my-car-context";
import type { EditCarInput } from "~/utils/types";

export default function OwnershipInfo({
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
          <Calendar className="h-5 w-5" />
          Ownership & Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="purchaseDate">Purchase Date</Label>
            <Input
              type="date"
              value={
                formData.purchaseDate instanceof Date
                  ? formData.purchaseDate.toISOString().split("T")[0]
                  : formData.purchaseDate
              }
              onChange={(e) =>
                updateField(
                  "purchaseDate",
                  e.target.value ? new Date(e.target.value) : undefined,
                )
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="status">Status *</Label>
            <Select
              name="status"
              value={formData.status}
              onValueChange={(value) => updateField("status", value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={myCar.status} />
              </SelectTrigger>
              <SelectContent>
                {Object.values(CarStatus).map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2 md:col-span-3">
            <Label htmlFor="description">Description/Notes</Label>
            <Textarea
              value={formData.description}
              id="description"
              name="description"
              placeholder="Special modifications, notes..."
              onChange={(e) => updateField("description", e.target.value)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
