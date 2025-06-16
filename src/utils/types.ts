import type { ReactNode } from "react";
import {
  ProjectType,
  Priority,
  EngineType,
  TransmissionType,
  ProjectStatus,
} from "@prisma/client";

export type DreamCarFormData = {
  make: string;
  model: string;
  year: number;
  hp: number;
  color: string | null;
  description: string | null;
  engineType: EngineType;
  transmissionType: TransmissionType;
};

export interface User {
  id: string;
  email: string;
  name: string | null;
  projectCars: ProjectCar[];
  dreamCars: DreamCar[];
  myCars: MyCar[];
}

export interface DreamCar {
  make: string;
  model: string;
  year: number;
  hp: number;
  color: string | null;
  description: string | null;
  engineType: EngineType;
  transmissionType: TransmissionType;
  ownerId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MyCar {
  vin: string;
  make: string;
  model: string;
  year: number;
  mileage: number;
  milesBoughtAt: number;
  hp: number;
  color: string | null;
  description: string | null;
  engineType: EngineType;
  transmissionType: TransmissionType;
  purchaseDate: Date | null;
  ownerId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProjectCar {
  id: string;
  name: string;
  make: string;
  model: string;
  year: number;
  vin: string | null;
  status: ProjectStatus;
  description: string | null;
  startDate: Date;
  completionDate: Date | null;
  budget: number | null;
  createdAt: Date;
  updatedAt: Date;
  ownerId: string;
  modifications: Modification[];
  priority: Priority;
  projectType: ProjectType;
}

export interface Modification {
  id: string;
  projectCarId: string;
  name: string;
  description: string | null;
  cost: number | null;
  date: Date;
  createdAt: Date;
}

export type ProjectData = {
  name: string;
  carMake: string;
  carModel: string;
  projectType: ProjectType;
  budget: number;
  description: string;
  priority: Priority;
};

export type RoadTripData = {
  name: string;
  startLocation: string;
  endLocation: string;
  startDate: string;
  endDate: string;
  distance: number;
  carUsed: string;
  description: string;
};

export type GoalData = {
  title: string;
  category: string;
  targetDate: string;
  priority: string;
  description: string;
  targetValue?: string;
};

export type ServiceLogData = {
  carId: string;
  serviceType: string;
  description: string;
  cost: number;
  mileage: number;
  serviceDate: string;
  serviceProvider: string;
  nextServiceDue?: string;
};

export type QuickAction = {
  title: string;
  icon: ReactNode;
  color: string;
};
