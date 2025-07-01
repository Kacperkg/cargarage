import { createTRPCRouter, protectedProcedure } from "../trpc";

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
});
