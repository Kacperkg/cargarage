export enum EngineType {
  GASOLINE = "GASOLINE",
  DIESEL = "DIESEL",
  ELECTRIC = "ELECTRIC",
  HYBRID = "HYBRID",
}

export enum TransmissionType {
  MANUAL = "MANUAL",
  AUTOMATIC = "AUTOMATIC",
  SEMI_AUTOMATIC = "SEMI_AUTOMATIC",
}

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
  id: number;
  make: string;
  model: string;
  year: number;
  hp: number;
  color: string | null;
  description: string | null;
  engineType: EngineType | null;
  transmissionType: TransmissionType | null;
  ownerId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MyCar {
  vin: string;
  make: string;
  model: string;
  year: number;
  mileage: number | null;
  hp: number | null;
  color: string | null;
  description: string | null;
  engineType: EngineType | null;
  transmissionType: TransmissionType | null;
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
