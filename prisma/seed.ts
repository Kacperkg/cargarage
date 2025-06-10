import {
  PrismaClient,
  EngineType,
  TransmissionType,
  ProjectStatus,
  ProjectType,
  Priority,
} from "@prisma/client";
import { db } from "~/server/db";

const prisma = new PrismaClient();

async function main() {
  // Create users
  const user1 = await prisma.user.create({
    data: {
      email: "john.doe@example.com",
      name: "John Doe",
    },
  });

  // Create dream cars
  await prisma.dreamCar.create({
    data: {
      make: "Porsche",
      model: "911 GT3",
      year: 2023,
      hp: 502,
      color: "Guards Red",
      description: "Dream track car",
      engineType: EngineType.V6,
      transmissionType: TransmissionType.MANUAL,
      ownerId: user1.id,
    },
  });

  // Create my cars
  await prisma.myCar.create({
    data: {
      vin: "1HGCM82633A123456",
      make: "Honda",
      model: "Accord",
      year: 2020,
      mileage: 25000,
      hp: 192,
      color: "Crystal Black Pearl",
      description: "Daily driver",
      engineType: EngineType.I4,
      transmissionType: TransmissionType.CVT,
      purchaseDate: new Date("2020-01-15"),
      ownerId: user1.id,
    },
  });

  // Create project cars
  const projectCar1 = await prisma.projectCar.create({
    data: {
      name: "Track Evo",
      make: "Mitsubishi",
      model: "Lancer Evolution IX",
      year: 2006,
      vin: "JA3AY26A46U123456",
      status: ProjectStatus.IN_PROGRESS,
      description: "Track-focused build",
      priority: Priority.High,
      projectType: ProjectType.Performance,
      ownerId: user1.id,
    },
  });

  // Create modifications
  await prisma.modification.create({
    data: {
      name: "Turbo Upgrade",
      description: "Garrett GTX3582R turbocharger",
      cost: 2500.0,
      projectCarId: projectCar1.id,
    },
  });

  await prisma.modification.create({
    data: {
      name: "Suspension Overhaul",
      description: "Full coilover setup with adjustable dampers",
      cost: 1800.0,
      projectCarId: projectCar1.id,
    },
  });
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
