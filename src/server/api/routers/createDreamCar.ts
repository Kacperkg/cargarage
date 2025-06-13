import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from "zod";
import { EngineType, TransmissionType } from "@prisma/client";

export const createDreamCarRouter = createTRPCRouter({
  createDreamCar: protectedProcedure
    .input(
      z.object({
        make: z.string(),
        model: z.string(),
        year: z.number(),
        hp: z.number(),
        color: z.string(),
        description: z.string(),
        engineType: z.nativeEnum(EngineType),
        transmissionType: z.nativeEnum(TransmissionType),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { userId, db } = ctx;

      if (!userId) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "User not authenticated.",
        });
      }

      const user = await db.user.findUnique({
        where: { clerkId: userId },
      });

      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "User not found.",
        });
      }

      const dreamCar = await db.dreamCar.create({
        data: {
          ownerId: user.clerkId,
          make: input.make,
          model: input.model,
          year: input.year,
          hp: input.hp,
          color: input.color,
          description: input.description,
          engineType: input.engineType,
          transmissionType: input.transmissionType,
        },
      });

      return dreamCar;
    }),
});
