import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from "zod";

export const deleteCarImageRouter = createTRPCRouter({
  deleteImage: protectedProcedure
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

      const carImage = await db.carImage.findUnique({
        where: { id },
      });

      if (!carImage) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Car image not found",
        });
      }

      await db.carImage.delete({
        where: { id },
      });
    }),
});
