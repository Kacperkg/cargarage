import React, { useState } from "react";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { toast } from "sonner";
import type { DreamCarFormData } from "~/utils/types";
import type { EngineType, TransmissionType } from "@prisma/client";
import { api } from "~/trpc/react";

const AddDreamCarForm = () => {
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

  const createDreamCar = api.createDreamCar.createDreamCar.useMutation({
    onSuccess: () => {
      toast.success("Dream car added successfully!");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createDreamCar.mutate({
      ...formData,
      color: formData.color ?? "",
      description: formData.description ?? "",
      engineType: formData.engineType,
      transmissionType: formData.transmissionType,
    });
  };

  return (
    <form id="dream-car-form" onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
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
      </div>

      <div className="grid grid-cols-2 gap-4">
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
      </div>

      <div className="space-y-2">
        <Label htmlFor="color">Color</Label>
        <Input
          id="color"
          value={formData.color ?? ""}
          onChange={(e) => handleChange("color", e.target.value)}
          placeholder="e.g., Rosso Corsa"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="engineType">Engine Type</Label>
          <Select onValueChange={(value) => handleChange("engineType", value)}>
            <SelectTrigger>
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
        <div className="space-y-2">
          <Label htmlFor="transmissionType">Transmission</Label>
          <Select
            onValueChange={(value) => handleChange("transmissionType", value)}
          >
            <SelectTrigger>
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
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description ?? ""}
          onChange={(e) => handleChange("description", e.target.value)}
          placeholder="Tell us why this is your dream car..."
          rows={3}
        />
      </div>
    </form>
  );
};

export default AddDreamCarForm;
