import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from "zod";

export const deleteDreamCarRouter = createTRPCRouter({
  deleteDreamCar: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const { db, userId } = ctx;
      const { id } = input;

      if (!userId) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "User not authenticated",
        });
      }

      const dreamCar = await db.dreamCar.findUnique({
        where: { id, ownerId: userId },
      });

      if (!dreamCar) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Dream car not found",
        });
      }

      await db.dreamCar.delete({
        where: { id, ownerId: userId },
      });
    }),
});
