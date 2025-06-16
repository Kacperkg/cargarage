import { createTRPCRouter, protectedProcedure } from "../trpc";

export const getDreamCarRouter = createTRPCRouter({
  getDreamCar: protectedProcedure.query(async ({ ctx }) => {
    const { db, userId } = ctx;
    const dreamCar = await db.dreamCar.findMany({
      where: {
        ownerId: userId,
      },
    });
    return dreamCar;
  }),
});
