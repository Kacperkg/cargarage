import { createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from "zod";

export const getDreamCarRouter = createTRPCRouter({
  getDreamCar: protectedProcedure.query(async ({ ctx }) => {
    try {
      const { db, userId } = ctx;

      if (!userId) {
        throw new Error("User ID is required");
      }

      const dreamCar = await db.dreamCar.findMany({
        where: {
          ownerId: userId,
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      if (!dreamCar) {
        return [];
      }

      return dreamCar;
    } catch (error) {
      console.error("Error fetching dream cars:", error);
      throw new Error("Failed to fetch dream cars");
    }
  }),

  getDreamCarById: protectedProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      try {
        const { db, userId } = ctx;

        if (!userId) {
          throw new Error("User ID is required");
        }

        const dreamCar = await db.dreamCar.findUnique({
          where: {
            id: parseInt(input),
            ownerId: userId,
          },
        });

        if (!dreamCar) {
          throw new Error("Dream car not found");
        }

        return dreamCar;
      } catch (error) {
        console.error("Error fetching dream car by ID:", error);
        throw new Error("Failed to fetch dream car by ID");
      }
    }),
});
