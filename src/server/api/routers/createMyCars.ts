import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from "zod";
import { CarStatus, EngineType, TransmissionType } from "@prisma/client";

export const createMyCarsRouter = createTRPCRouter({
  createMyCar: protectedProcedure
    .input(
      z.object({
        vin: z.string().optional(),
        make: z.string(),
        model: z.string(),
        year: z.number(),
        mileage: z.number(),
        milesBoughtAt: z.number(),
        hp: z.number(),
        color: z.string().optional(),
        description: z.string().optional(),
        engineType: z.nativeEnum(EngineType),
        transmissionType: z.nativeEnum(TransmissionType),
        purchaseDate: z.date(),
        licensePlate: z.string().optional(),
        engine: z.string().optional(),
        status: z.nativeEnum(CarStatus),
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

      const myCar = await db.myCar.create({
        data: {
          vin: input.vin,
          make: input.make,
          model: input.model,
          year: input.year,
          mileage: input.mileage,
          milesBoughtAt: input.milesBoughtAt,
          hp: input.hp,
          color: input.color ?? "",
          description: input.description ?? "",
          engineType: input.engineType,
          transmissionType: input.transmissionType,
          purchaseDate: input.purchaseDate,
          licensePlate: input.licensePlate ?? undefined,
          engine: input.engine ?? undefined,
          status: input.status,
          ownerId: userId,
        },
      });

      return myCar;
    }),

  editMyCar: protectedProcedure
    .input(
      z.object({
        id: z.number(),
        vin: z.string().optional(),
        make: z.string().optional(),
        model: z.string().optional(),
        year: z.number().optional(),
        mileage: z.number().optional(),
        milesBoughtAt: z.number().optional(),
        hp: z.number().optional(),
        color: z.string().optional(),
        description: z.string().optional(),
        engineType: z.nativeEnum(EngineType).optional(),
        transmissionType: z.nativeEnum(TransmissionType).optional(),
        purchaseDate: z.date().optional(),
        licensePlate: z.string().optional(),
        engine: z.string().optional(),
        status: z.nativeEnum(CarStatus).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { userId, db } = ctx;
      const { id, ...updateData } = input;

      if (!userId) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "User not authenticated.",
        });
      }

      const myCar = await db.myCar.findUnique({
        where: { id, ownerId: userId },
      });

      if (!myCar) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Car not be found",
        });
      }

      await db.myCar.update({
        where: { id },
        data: updateData,
      });

      return myCar;
    }),
});
