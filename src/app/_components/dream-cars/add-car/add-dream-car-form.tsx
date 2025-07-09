"use client";

import React, { useState } from "react";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";
import { type DreamCarFormData } from "~/utils/types";
import { api } from "~/trpc/react";
import { toast } from "sonner";
import { EngineType, TransmissionType } from "@prisma/client";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { useRouter } from "next/navigation";

export default function AddDreamCarForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<DreamCarFormData>({
    make: "",
    model: "",
    year: new Date().getFullYear(),
    hp: 0,
    color: "",
    description: "",
    engineType: "V8" as EngineType,
    transmissionType: "MANUAL" as TransmissionType,
  });

  const handleChange = (
    field: keyof DreamCarFormData,
    value: string | number | null,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const { mutate: createDreamCar, isPending } =
    api.createDreamCar.createDreamCar.useMutation();

  const utils = api.useUtils();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      createDreamCar({
        ...formData,
        color: formData.color ?? "",
        description: formData.description ?? "",
        engineType: formData.engineType,
        transmissionType: formData.transmissionType,
      });
      utils.getDreamCar.getDreamCar.invalidate();
      toast.success("Dream car added successfully!");
      router.push("/Dream-Cars");
    } catch (error) {
      toast.error("Failed to add dream car. Please try again.");
    }
  };

  return (
    <div className="mx-auto w-full">
      <div className="mb-6">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          Add New Dream Car
        </h2>
        <p className="text-muted-foreground mt-1">
          Fill in the details of your new dream car below
        </p>
      </div>

      <form className="space-y-8" onSubmit={handleSubmit}>
        {/* Car Model Year */}
        <Card className="bg-bg2">
          <CardHeader>
            <CardTitle>Car Model</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Make */}
            <div className="space-y-2">
              <Label htmlFor="make">Make *</Label>
              <Input
                id="make"
                value={formData.make}
                onChange={(e) => handleChange("make", e.target.value)}
                placeholder="e.g., Ferrari"
                required
              />
            </div>
            {/* Model */}
            <div className="space-y-2">
              <Label htmlFor="model">Model *</Label>
              <Input
                id="model"
                value={formData.model}
                onChange={(e) => handleChange("model", e.target.value)}
                placeholder="e.g., 488 GTB"
                required
              />
            </div>
            {/* Year */}
            <div className="space-y-2">
              <Label htmlFor="year">Year *</Label>
              <Input
                id="year"
                type="number"
                value={formData.year}
                onChange={(e) => handleChange("year", parseInt(e.target.value))}
                min="1900"
                max={new Date().getFullYear() + 5}
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* Performance - Horsepower and Engine Type and Transmission */}
        <Card className="bg-bg2">
          <CardHeader>
            <CardTitle>Performance</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Horsepower */}
            <div className="space-y-2">
              <Label htmlFor="hp">Horsepower *</Label>
              <Input
                id="hp"
                type="number"
                value={formData.hp}
                onChange={(e) => handleChange("hp", parseInt(e.target.value))}
                min="0"
                placeholder="e.g., 661"
                required
              />
            </div>
            {/* Engine Type */}
            <div className="space-y-2">
              <Label htmlFor="engineType">Engine Type</Label>
              <Select
                onValueChange={(value) => handleChange("engineType", value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select engine type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="V4">V4</SelectItem>
                  <SelectItem value="V6">V6</SelectItem>
                  <SelectItem value="V8">V8</SelectItem>
                  <SelectItem value="V10">V10</SelectItem>
                  <SelectItem value="V12">V12</SelectItem>
                  <SelectItem value="I4">Inline 4</SelectItem>
                  <SelectItem value="I6">Inline 6</SelectItem>
                  <SelectItem value="ELECTRIC">Electric</SelectItem>
                  <SelectItem value="HYBRID">Hybrid</SelectItem>
                  <SelectItem value="ROTARY">Rotary</SelectItem>
                  <SelectItem value="DIESEL">Diesel</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Transmission */}
            <div className="space-y-2">
              <Label htmlFor="transmissionType">Transmission</Label>
              <Select
                onValueChange={(value) =>
                  handleChange("transmissionType", value)
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select transmission" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MANUAL">Manual</SelectItem>
                  <SelectItem value="AUTOMATIC">Automatic</SelectItem>
                  <SelectItem value="CVT">CVT</SelectItem>
                  <SelectItem value="DCT">DCT</SelectItem>
                  <SelectItem value="SEMI_AUTO">Semi-Automatic</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Color and Description */}
        <Card className="bg-bg2">
          <CardHeader>
            <CardTitle>Color</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Color */}
            <div className="space-y-2">
              <Label htmlFor="color">Color</Label>
              <Input
                id="color"
                value={formData.color ?? ""}
                onChange={(e) => handleChange("color", e.target.value)}
                placeholder="e.g., Rosso Corsa"
              />
            </div>

            {/* Description */}
            <div className="col-span-2 space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description ?? ""}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Tell us why this is your dream car..."
                rows={3}
              />
            </div>
          </CardContent>
        </Card>
      </form>
      {/* Form Actions */}
      <div className="flex justify-end gap-3 pt-4">
        <Button variant="outline" type="button" onClick={() => router.back()}>
          Cancel
        </Button>
        <Button
          type="submit"
          className="bg-primary hover:bg-primary/90"
          disabled={isPending}
          onClick={handleSubmit}
        >
          {isPending ? "Adding Car..." : "Add Dream Car"}
        </Button>
      </div>
    </div>
  );
}
