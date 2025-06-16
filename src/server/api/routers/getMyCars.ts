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
      });

      if (!myCars) {
        return [];
      }

      return myCars;
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
});
