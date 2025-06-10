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

interface AddServiceLogFormProps {
  onSubmit: (data: ServiceLogData) => void;
}

interface ServiceLogData {
  carId: string;
  serviceType: string;
  description: string;
  cost: number;
  mileage: number;
  serviceDate: string;
  serviceProvider: string;
  nextServiceDue?: string;
}

const AddServiceLogForm = ({ onSubmit }: AddServiceLogFormProps) => {
  const [formData, setFormData] = useState<ServiceLogData>({
    carId: "",
    serviceType: "",
    description: "",
    cost: 0,
    mileage: 0,
    serviceDate: "",
    serviceProvider: "",
    nextServiceDue: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (
    field: keyof ServiceLogData,
    value: string | number,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="carId">Car *</Label>
          <Input
            id="carId"
            value={formData.carId}
            onChange={(e) => handleChange("carId", e.target.value)}
            placeholder="e.g., 2023 BMW M3"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="serviceType">Service Type *</Label>
          <Select onValueChange={(value) => handleChange("serviceType", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="OIL_CHANGE">Oil Change</SelectItem>
              <SelectItem value="TIRE_ROTATION">Tire Rotation</SelectItem>
              <SelectItem value="BRAKE_SERVICE">Brake Service</SelectItem>
              <SelectItem value="TRANSMISSION">Transmission Service</SelectItem>
              <SelectItem value="ENGINE_TUNE">Engine Tune-up</SelectItem>
              <SelectItem value="INSPECTION">Inspection</SelectItem>
              <SelectItem value="REPAIR">Repair</SelectItem>
              <SelectItem value="OTHER">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="serviceDate">Service Date *</Label>
          <Input
            id="serviceDate"
            type="date"
            value={formData.serviceDate}
            onChange={(e) => handleChange("serviceDate", e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="mileage">Mileage</Label>
          <Input
            id="mileage"
            type="number"
            value={formData.mileage}
            onChange={(e) => handleChange("mileage", parseInt(e.target.value))}
            min="0"
            placeholder="e.g., 45000"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="cost">Cost ($)</Label>
          <Input
            id="cost"
            type="number"
            value={formData.cost}
            onChange={(e) => handleChange("cost", parseFloat(e.target.value))}
            min="0"
            step="0.01"
            placeholder="e.g., 89.99"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="serviceProvider">Service Provider</Label>
          <Input
            id="serviceProvider"
            value={formData.serviceProvider}
            onChange={(e) => handleChange("serviceProvider", e.target.value)}
            placeholder="e.g., BMW Dealership"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="nextServiceDue">Next Service Due</Label>
        <Input
          id="nextServiceDue"
          type="date"
          value={formData.nextServiceDue}
          onChange={(e) => handleChange("nextServiceDue", e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Service Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => handleChange("description", e.target.value)}
          placeholder="Describe the work performed, parts replaced, etc..."
          rows={3}
        />
      </div>
    </form>
  );
};

export default AddServiceLogForm;
