import type { ReactNode } from "react";

export enum EngineType {
  GASOLINE = "GASOLINE",
  DIESEL = "DIESEL",
  ELECTRIC = "ELECTRIC",
  HYBRID = "HYBRID",
  ROTARY = "ROTARY",
  V4 = "V4",
  V6 = "V6",
  V8 = "V8",
  V10 = "V10",
  V12 = "V12",
  I4 = "I4",
  I6 = "I6",
}

export enum TransmissionType {
  MANUAL = "MANUAL",
  AUTOMATIC = "AUTOMATIC",
  SEMI_AUTOMATIC = "SEMI_AUTOMATIC",
  CVT = "CVT",
  DCT = "DCT",
}

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

export enum ProjectStatus {
  PLANNED = "PLANNED",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  ON_HOLD = "ON_HOLD",
  CANCELLED = "CANCELLED",
}

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
  projectType: string;
  budget: number;
  description: string;
  priority: string;
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
  description: string;
  icon: ReactNode;
  color: string;
};
