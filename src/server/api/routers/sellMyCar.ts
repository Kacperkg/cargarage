import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from "zod";

export const sellMyCarRouter = createTRPCRouter({
    sellMyCar: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const { db, userId } = ctx;
      const { id } = input;

      if (!userId) {
        throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "User not authenticated",
        })
      }

      const myCar = await db.myCar.findUnique({
        where: {id, ownerId: userId}
      })

      if(!myCar) {
        throw new TRPCError({
            code: "NOT_FOUND",
            message: "Car not be found"
        })
      }

      await db.myCar.update({
        where: { id },
        data: {
          status: "Sold",
        },
      });

    })

});