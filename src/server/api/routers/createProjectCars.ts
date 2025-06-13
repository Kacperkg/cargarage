import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from "zod";
import { Priority, ProjectType, ProjectStatus } from "@prisma/client";

export const createProjectCarRouter = createTRPCRouter({
  createProjectCar: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        make: z.string(),
        model: z.string(),
        year: z.number(),
        vin: z.string().optional(),
        status: z.nativeEnum(ProjectStatus),
        description: z.string().optional(),
        startDate: z.date(),
        completionDate: z.date().optional(),
        budget: z.number().optional(),
        priority: z.nativeEnum(Priority),
        projectType: z.nativeEnum(ProjectType),
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

      const projectCar = await db.projectCar.create({
        data: {
          name: input.name,
          make: input.make,
          model: input.model,
          year: input.year,
          vin: input.vin,
          status: input.status,
          description: input.description,
          startDate: input.startDate,
          completionDate: input.completionDate,
          budget: input.budget,
          priority: input.priority,
          projectType: input.projectType,
          ownerId: user.clerkId,
        },
      });

      return projectCar;
    }),
});
