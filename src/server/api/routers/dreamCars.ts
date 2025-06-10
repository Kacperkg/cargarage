import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

// Example schema for a dream car
const dreamCarSchema = z.object({
  id: z.string(),
  make: z.string(),
  model: z.string(),
  year: z.number(),
  price: z.number(),
  description: z.string(),
});

// Example data
const dreamCars = [
  {
    id: "1",
    make: "Ferrari",
    model: "F40",
    year: 1987,
    price: 2500000,
    description: "The legendary F40, Ferrari's first 200mph supercar",
  },
  {
    id: "2",
    make: "Porsche",
    model: "911 GT3 RS",
    year: 2023,
    price: 225000,
    description: "Track-focused 911 with 525 horsepower",
  },
];

export const dreamCarsRouter = createTRPCRouter({
  // Get all dream cars
  getAll: publicProcedure.query(() => {
    return dreamCars;
  }),

  // Get a specific dream car by ID
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) => {
      return dreamCars.find((car) => car.id === input.id);
    }),

  // Add a new dream car
  add: publicProcedure
    .input(dreamCarSchema.omit({ id: true }))
    .mutation(({ input }) => {
      const newCar = {
        id: Math.random().toString(36).substring(7),
        ...input,
      };
      dreamCars.push(newCar);
      return newCar;
    }),

  // Update a dream car
  update: publicProcedure.input(dreamCarSchema).mutation(({ input }) => {
    const index = dreamCars.findIndex((car) => car.id === input.id);
    if (index !== -1) {
      dreamCars[index] = input;
      return input;
    }
    throw new Error("Car not found");
  }),

  // Delete a dream car
  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ input }) => {
      const index = dreamCars.findIndex((car) => car.id === input.id);
      if (index !== -1) {
        const deletedCar = dreamCars[index];
        dreamCars.splice(index, 1);
        return deletedCar;
      }
      throw new Error("Car not found");
    }),
});
