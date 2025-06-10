-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('PLANNED', 'IN_PROGRESS', 'COMPLETED', 'ON_HOLD', 'CANCELLED');

-- CreateEnum
CREATE TYPE "EngineType" AS ENUM ('GASOLINE', 'DIESEL', 'ELECTRIC', 'HYBRID', 'V4', 'V6', 'V8', 'V10', 'V12', 'I4', 'I6', 'ROTARY');

-- CreateEnum
CREATE TYPE "TransmissionType" AS ENUM ('MANUAL', 'AUTOMATIC', 'SEMI_AUTOMATIC', 'CVT', 'DCT');

-- CreateEnum
CREATE TYPE "ProjectType" AS ENUM ('Performance', 'Aesthetics', 'Restoration', 'Maintenance', 'AudioSystem', 'Suspension');

-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('Low', 'Medium', 'High', 'Urgent');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dream_cars" (
    "id" SERIAL NOT NULL,
    "make" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "hp" INTEGER NOT NULL,
    "color" TEXT,
    "description" TEXT,
    "engineType" "EngineType",
    "transmissionType" "TransmissionType",
    "ownerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "dream_cars_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "my_cars" (
    "vin" TEXT NOT NULL,
    "make" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "mileage" INTEGER NOT NULL,
    "hp" INTEGER NOT NULL,
    "color" TEXT,
    "description" TEXT,
    "engineType" "EngineType" NOT NULL,
    "transmissionType" "TransmissionType" NOT NULL,
    "purchaseDate" TIMESTAMP(3) NOT NULL,
    "ownerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "my_cars_pkey" PRIMARY KEY ("vin")
);

-- CreateTable
CREATE TABLE "ProjectCar" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "make" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "vin" TEXT,
    "status" "ProjectStatus" NOT NULL DEFAULT 'PLANNED',
    "description" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completionDate" TIMESTAMP(3),
    "budget" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "priority" "Priority" NOT NULL,
    "projectType" "ProjectType" NOT NULL,
    "ownerId" TEXT NOT NULL,

    CONSTRAINT "ProjectCar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Modification" (
    "id" TEXT NOT NULL,
    "projectCarId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "cost" DOUBLE PRECISION,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Modification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "my_cars_vin_key" ON "my_cars"("vin");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectCar_vin_key" ON "ProjectCar"("vin");

-- AddForeignKey
ALTER TABLE "dream_cars" ADD CONSTRAINT "dream_cars_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "my_cars" ADD CONSTRAINT "my_cars_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectCar" ADD CONSTRAINT "ProjectCar_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Modification" ADD CONSTRAINT "Modification_projectCarId_fkey" FOREIGN KEY ("projectCarId") REFERENCES "ProjectCar"("id") ON DELETE CASCADE ON UPDATE CASCADE;
