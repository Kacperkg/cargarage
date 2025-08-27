import { z } from "zod";

import type { ReactNode } from "react";

import {
  type ProjectType,
  type Priority,
  EngineType,
  TransmissionType,
  type ProjectStatus,
  CarStatus,
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
  id: number;
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
  id: number;
  vin: string | null;
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
  purchaseDate: Date;
  licensePlate: string | null;
  engine: string | null;
  status: CarStatus;
  createdAt: Date;
  updatedAt: Date;
  ownerId: string;
  images: { id: number; url: string; carId: number }[];
}

export type MyCarFormData = {
  vin: string | null;
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
  purchaseDate: Date;
  licensePlate: string | null;
  engine: string | null;
  status: CarStatus;
  createdAt: Date;
  updatedAt: Date;
};

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

export const editCarSchema = z.object({
  id: z.number(),
  vin: z.string().optional(),
  make: z.string(),
  model: z.string(),
  year: z.number(),
  mileage: z.number().optional(),
  milesBoughtAt: z.number().optional(),
  hp: z.number().optional(),
  color: z.string().optional(),
  description: z.string().optional(),
  engineType: z.nativeEnum(EngineType),
  transmissionType: z.nativeEnum(TransmissionType),
  purchaseDate: z.date().optional(),
  licensePlate: z.string().optional(),
  engine: z.string().optional(),
  status: z.nativeEnum(CarStatus),
});

export const clientEditCarSchema = editCarSchema.extend({
  clientImages: z
    .array(
      z.object({
        id: z.string(),
        file: z.instanceof(File),
        preview: z.string(),
      }),
    )
    .default([]),
  existingImages: z
    .array(
      z.object({
        id: z.number(),
        url: z.string(),
      }),
    )
    .default([]),
});

export type EditCarInput = z.infer<typeof editCarSchema>;
export type ClientEditCarInput = z.infer<typeof clientEditCarSchema>;

export interface TempImage {
  id: string;
  file: File;
  preview: string;
}

export const MAX_IMAGES = 6;

export interface ImageShowcaseProps {
  clientImages: TempImage[];
  onAddImages: (files: FileList, currentCount: number) => void;
  onRemoveClientImage: (id: string) => void;
  onUpdateClientImage: (id: string, updates: Partial<TempImage>) => void;
  clientFileInputRef: React.RefObject<HTMLInputElement | null>;
  onTriggerUpload: () => void;
}
