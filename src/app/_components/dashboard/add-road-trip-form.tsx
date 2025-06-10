import React, { useState } from "react";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";

interface AddRoadTripFormProps {
  onSubmit: (data: RoadTripData) => void;
}

interface RoadTripData {
  name: string;
  startLocation: string;
  endLocation: string;
  startDate: string;
  endDate: string;
  distance: number;
  carUsed: string;
  description: string;
}

const AddRoadTripForm = ({ onSubmit }: AddRoadTripFormProps) => {
  const [formData, setFormData] = useState<RoadTripData>({
    name: "",
    startLocation: "",
    endLocation: "",
    startDate: "",
    endDate: "",
    distance: 0,
    carUsed: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (field: keyof RoadTripData, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Trip Name *</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="e.g., Pacific Coast Highway Adventure"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="startLocation">Start Location *</Label>
          <Input
            id="startLocation"
            value={formData.startLocation}
            onChange={(e) => handleChange("startLocation", e.target.value)}
            placeholder="e.g., Los Angeles, CA"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="endLocation">End Location *</Label>
          <Input
            id="endLocation"
            value={formData.endLocation}
            onChange={(e) => handleChange("endLocation", e.target.value)}
            placeholder="e.g., San Francisco, CA"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="startDate">Start Date</Label>
          <Input
            id="startDate"
            type="date"
            value={formData.startDate}
            onChange={(e) => handleChange("startDate", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="endDate">End Date</Label>
          <Input
            id="endDate"
            type="date"
            value={formData.endDate}
            onChange={(e) => handleChange("endDate", e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="distance">Distance (miles)</Label>
          <Input
            id="distance"
            type="number"
            value={formData.distance}
            onChange={(e) => handleChange("distance", parseInt(e.target.value))}
            min="0"
            placeholder="e.g., 500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="carUsed">Car to Use</Label>
          <Input
            id="carUsed"
            value={formData.carUsed}
            onChange={(e) => handleChange("carUsed", e.target.value)}
            placeholder="e.g., 2023 BMW M3"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Trip Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => handleChange("description", e.target.value)}
          placeholder="Describe your planned route, stops, and experiences..."
          rows={3}
        />
      </div>
    </form>
  );
};

export default AddRoadTripForm;
