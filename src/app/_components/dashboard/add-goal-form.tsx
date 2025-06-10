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

interface AddGoalFormProps {
  onSubmit: (data: GoalData) => void;
}

interface GoalData {
  title: string;
  category: string;
  targetDate: string;
  priority: string;
  description: string;
  targetValue?: string;
}

const AddGoalForm = ({ onSubmit }: AddGoalFormProps) => {
  const [formData, setFormData] = useState<GoalData>({
    title: "",
    category: "",
    targetDate: "",
    priority: "",
    description: "",
    targetValue: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (field: keyof GoalData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Goal Title *</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => handleChange("title", e.target.value)}
          placeholder="e.g., Buy a Porsche 911"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="category">Category *</Label>
          <Select onValueChange={(value) => handleChange("category", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="PURCHASE">Car Purchase</SelectItem>
              <SelectItem value="MODIFICATION">Modification</SelectItem>
              <SelectItem value="PERFORMANCE">Performance</SelectItem>
              <SelectItem value="MAINTENANCE">Maintenance</SelectItem>
              <SelectItem value="EXPERIENCE">Experience</SelectItem>
              <SelectItem value="LEARNING">Learning</SelectItem>
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
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="targetDate">Target Date</Label>
          <Input
            id="targetDate"
            type="date"
            value={formData.targetDate}
            onChange={(e) => handleChange("targetDate", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="targetValue">Target Value</Label>
          <Input
            id="targetValue"
            value={formData.targetValue}
            onChange={(e) => handleChange("targetValue", e.target.value)}
            placeholder="e.g., $80,000 or 300hp"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => handleChange("description", e.target.value)}
          placeholder="Describe your goal and how you plan to achieve it..."
          rows={3}
        />
      </div>
    </form>
  );
};

export default AddGoalForm;
