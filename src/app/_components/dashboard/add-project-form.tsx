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

interface AddProjectFormProps {
  onSubmit: (data: ProjectData) => void;
}

interface ProjectData {
  name: string;
  carMake: string;
  carModel: string;
  projectType: string;
  budget: number;
  description: string;
  priority: string;
}

const AddProjectForm = ({ onSubmit }: AddProjectFormProps) => {
  const [formData, setFormData] = useState<ProjectData>({
    name: "",
    carMake: "",
    carModel: "",
    projectType: "",
    budget: 0,
    description: "",
    priority: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (field: keyof ProjectData, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Project Name *</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="e.g., Turbo Upgrade"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="carMake">Car Make *</Label>
          <Input
            id="carMake"
            value={formData.carMake}
            onChange={(e) => handleChange("carMake", e.target.value)}
            placeholder="e.g., BMW"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="carModel">Car Model *</Label>
          <Input
            id="carModel"
            value={formData.carModel}
            onChange={(e) => handleChange("carModel", e.target.value)}
            placeholder="e.g., M3"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="projectType">Project Type *</Label>
          <Select onValueChange={(value) => handleChange("projectType", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="PERFORMANCE">Performance</SelectItem>
              <SelectItem value="AESTHETIC">Aesthetic</SelectItem>
              <SelectItem value="RESTORATION">Restoration</SelectItem>
              <SelectItem value="MAINTENANCE">Maintenance</SelectItem>
              <SelectItem value="AUDIO">Audio System</SelectItem>
              <SelectItem value="SUSPENSION">Suspension</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="priority">Priority</Label>
          <Select onValueChange={(value) => handleChange("priority", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="LOW">Low</SelectItem>
              <SelectItem value="MEDIUM">Medium</SelectItem>
              <SelectItem value="HIGH">High</SelectItem>
              <SelectItem value="URGENT">Urgent</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="budget">Budget ($)</Label>
        <Input
          id="budget"
          type="number"
          value={formData.budget}
          onChange={(e) => handleChange("budget", parseInt(e.target.value))}
          min="0"
          placeholder="e.g., 5000"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => handleChange("description", e.target.value)}
          placeholder="Describe your project goals and plans..."
          rows={3}
        />
      </div>
    </form>
  );
};

export default AddProjectForm;
