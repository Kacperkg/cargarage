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
import type { ProjectData } from "~/utils/types";
import { api } from "~/trpc/react";
import { toast } from "sonner";
import type { ProjectType, Priority } from "@prisma/client";

const AddProjectForm = () => {
  const [formData, setFormData] = useState<ProjectData>({
    name: "",
    carMake: "",
    carModel: "",
    projectType: "Performance" as ProjectType,
    budget: 0,
    description: "",
    priority: "Low" as Priority,
  });

  const handleChange = (
    field: keyof ProjectData,
    value: string | number | null,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const createProjectCar = api.createProjectCar.createProjectCar.useMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createProjectCar.mutate(
      {
        ...formData,
        projectType: formData.projectType,
        priority: formData.priority,
        make: formData.carMake,
        model: formData.carModel,
        year: new Date().getFullYear(),
        status: "Planned",
        startDate: new Date(),
        completionDate: new Date(),
      },
      {
        onSuccess: () => {
          toast.success("Project created successfully");
        },
        onError: () => {
          toast.error("Failed to create project");
        },
      },
    );
  };

  return (
    <form id="project-form" onSubmit={handleSubmit} className="space-y-4">
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
              <SelectItem value="Performance">Performance</SelectItem>
              <SelectItem value="Aesthetics">Aesthetic</SelectItem>
              <SelectItem value="Restoration">Restoration</SelectItem>
              <SelectItem value="Maintenance">Maintenance</SelectItem>
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
              <SelectItem value="Low">Low</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="High">High</SelectItem>
              <SelectItem value="Urgent">Urgent</SelectItem>
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
