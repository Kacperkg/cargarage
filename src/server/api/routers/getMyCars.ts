import z from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const getMyCarsRouter = createTRPCRouter({
  getMyCars: protectedProcedure.query(async ({ ctx }) => {
    try {
      const { db, userId } = ctx;

      if (!userId) {
        throw new Error("User ID is required");
      }

      const myCars = await db.myCar.findMany({
        where: {
          ownerId: userId,
        },
        include: {
          images: true,
        },
      });

      if (!myCars) {
        return [];
      }

      // Custom status ordering
      const statusOrder = [
        "Daily",
        "Summer",
        "Winter",
        "Track",
        "Show",
        "Garage",
        "Project",
        "Sold",
      ];

      return myCars.sort((a, b) => {
        const aIndex = statusOrder.indexOf(a.status);
        const bIndex = statusOrder.indexOf(b.status);
        return aIndex - bIndex;
      });
    } catch (error) {
      console.error("Error fetching user cars:", error);
      throw new Error("Failed to fetch user cars");
    }
  }),

  getMyHp: protectedProcedure.query(async ({ ctx }) => {
    try {
      const { db, userId } = ctx;

      if (!userId) {
        throw new Error("User ID is required");
      }

      const myCars = await db.myCar.aggregate({
        where: {
          ownerId: userId,
          status: {
            not: "Sold",
          },
        },
        _sum: {
          hp: true,
        },
      });

      return myCars._sum.hp ?? 0;
    } catch (error) {
      console.error("Error calculating total horsepower:", error);
      throw new Error("Failed to calculate total horsepower");
    }
  }),

  getMyMiles: protectedProcedure.query(async ({ ctx }) => {
    try {
      const { db, userId } = ctx;

      if (!userId) {
        throw new Error("User ID is required");
      }

      const myCars = await db.myCar.findMany({
        where: {
          ownerId: userId,
        },
        select: {
          mileage: true,
          milesBoughtAt: true,
        },
      });

      if (!myCars || myCars.length === 0) {
        return 0;
      }

      const totalAdjustedMileage = myCars.reduce((sum, car) => {
        const currentMileage = car.mileage ?? 0;
        const boughtAtMileage = car.milesBoughtAt ?? 0;
        const adjustedMileage = currentMileage - boughtAtMileage;
        return sum + adjustedMileage;
      }, 0);

      return totalAdjustedMileage;
    } catch (error) {
      console.error("Error calculating total mileage:", error);
      throw new Error("Failed to calculate total mileage");
    }
  }),

  getMyCarById: protectedProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      try {
        const { db, userId } = ctx;

        if (!userId) {
          throw new Error("User ID is required");
        }

        const myCar = await db.myCar.findUnique({
          where: {
            id: parseInt(input),
            ownerId: userId,
          },
          include: {
            images: true,
          },
        });

        if (!myCar) {
          throw new Error("My car not found");
        }

        return myCar;
      } catch (error) {
        console.error("Error fetching my car by ID:", error);
        throw new Error("Failed to fetch my car by ID");
      }
    }),
});
