"use client";

import React, { useState, useEffect } from "react";
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
import { Button } from "~/components/ui/button";
import { Calendar, Gauge, Hash } from "lucide-react";
import { CarStatus, EngineType, TransmissionType } from "@prisma/client";
import { Textarea } from "~/components/ui/textarea";
import { type MyCar } from "~/utils/types";
import { api } from "~/trpc/react";
import { toast } from "sonner";
import { redirect } from "next/navigation";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

export default function AddCarForm() {
  const [formData, setFormData] = useState<MyCar>({
    vin: "",
    make: "",
    model: "",
    year: 0,
    mileage: 0,
    milesBoughtAt: 0,
    hp: 0,
    color: "",
    description: "",
    engineType: EngineType.GASOLINE,
    transmissionType: TransmissionType.MANUAL,
    purchaseDate: new Date(),
    licensePlate: "",
    engine: "",
    status: CarStatus.Daily,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  const {
    mutate: createMyCar,
    isError,
    isPending,
    isSuccess,
    error,
  } = api.createMyCar.createMyCar.useMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      createMyCar({
        vin: formData.vin,
        make: formData.make,
        model: formData.model,
        year: formData.year,
        mileage: formData.mileage,
        milesBoughtAt: formData.milesBoughtAt,
        hp: formData.hp,
        color: formData.color ?? "",
        description: formData.description ?? "",
        engineType: formData.engineType,
        transmissionType: formData.transmissionType,
        licensePlate: formData.licensePlate ?? "",
        engine: formData.engine ?? "",
        status: formData.status,
        purchaseDate: new Date(formData.purchaseDate),
      });
    } catch (e) {
      toast.error("Error adding car");
      console.error(e);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Car added successfully");
      redirect("/My-Cars");
    }
    if (isError) {
      toast.error("Error adding car");
      console.error(error?.message);
    }
  }, [isSuccess, isError, error]);

  return (
    <div className="mx-auto w-full">
      <div className="mb-6">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          Add New Car to Your Garage
        </h2>
        <p className="text-muted-foreground mt-1">
          Fill in the details of your new vehicle below
        </p>
      </div>

      <form className="space-y-8" onSubmit={handleSubmit}>
        {/* Basic Information */}
        <Card className="bg-bg2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Hash className="h-5 w-5" />
              Basic Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="vin">VIN Number *</Label>
                <Input
                  id="vin"
                  name="vin"
                  placeholder="1HGBH41JXMN109186"
                  required
                  value={formData.vin}
                  onChange={(e) =>
                    setFormData({ ...formData, vin: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="make">Make *</Label>
                <Input
                  id="make"
                  name="make"
                  placeholder="BMW, Mercedes, Toyota..."
                  required
                  value={formData.make}
                  onChange={(e) =>
                    setFormData({ ...formData, make: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="model">Model *</Label>
                <Input
                  id="model"
                  name="model"
                  placeholder="M3, C63, Supra..."
                  required
                  value={formData.model}
                  onChange={(e) =>
                    setFormData({ ...formData, model: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Year *</Label>
                <Input
                  id="year"
                  name="year"
                  type="number"
                  placeholder="2023"
                  min="1900"
                  max="2025"
                  required
                  value={formData.year}
                  onChange={(e) =>
                    setFormData({ ...formData, year: parseInt(e.target.value) })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="color">Color</Label>
                <Input
                  id="color"
                  name="color"
                  placeholder="Alpine White, Jet Black..."
                  value={formData.color ?? ""}
                  onChange={(e) =>
                    setFormData({ ...formData, color: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="licensePlate">License Plate</Label>
                <Input
                  id="licensePlate"
                  name="licensePlate"
                  placeholder="ABC-1234"
                  value={formData.licensePlate ?? ""}
                  onChange={(e) =>
                    setFormData({ ...formData, licensePlate: e.target.value })
                  }
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance & Technical */}
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
                  placeholder="3.0L Twin-Turbo I6"
                  value={formData.engine ?? ""}
                  onChange={(e) =>
                    setFormData({ ...formData, engine: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="engineType">Engine Type *</Label>
                <Select
                  name="engineType"
                  required
                  value={formData.engineType}
                  onValueChange={(value) =>
                    setFormData({
                      ...formData,
                      engineType: value as EngineType,
                    })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select engine type" />
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
                  required
                  value={formData.transmissionType}
                  onValueChange={(value) =>
                    setFormData({
                      ...formData,
                      transmissionType: value as TransmissionType,
                    })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select transmission" />
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
                  placeholder="503"
                  min="0"
                  value={formData.hp}
                  onChange={(e) =>
                    setFormData({ ...formData, hp: parseInt(e.target.value) })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mileage">Current Mileage *</Label>
                <Input
                  id="mileage"
                  name="mileage"
                  type="number"
                  placeholder="12450"
                  min="0"
                  required
                  value={formData.mileage}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      mileage: parseInt(e.target.value),
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="milesBoughtAt">Miles at Purchase</Label>
                <Input
                  id="milesBoughtAt"
                  name="milesBoughtAt"
                  type="number"
                  placeholder="8500"
                  min="0"
                  value={formData.milesBoughtAt}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      milesBoughtAt: parseInt(e.target.value),
                    })
                  }
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ownership & Status */}
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
                    formData.purchaseDate instanceof Date &&
                    !isNaN(formData.purchaseDate.getTime())
                      ? formData.purchaseDate.toISOString().split("T")[0]
                      : ""
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      purchaseDate: e.target.value
                        ? new Date(e.target.value)
                        : new Date(),
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status *</Label>
                <Select
                  name="status"
                  required
                  value={formData.status}
                  onValueChange={(value) =>
                    setFormData({
                      ...formData,
                      status: value as CarStatus,
                    })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select status" />
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
                  id="description"
                  name="description"
                  placeholder="Special modifications, notes..."
                  value={formData.description ?? ""}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Form Actions */}
        <div className="flex justify-end gap-3 pt-4">
          <Link href="/My-Cars">
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </Link>
          <Button
            type="submit"
            className="bg-primary hover:bg-primary/90"
            disabled={isPending}
          >
            {isPending ? "Adding Car..." : "Add Car to Garage"}
          </Button>
        </div>
      </form>
    </div>
  );
}
