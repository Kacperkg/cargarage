import { createTRPCRouter, protectedProcedure } from "../trpc";
import { clerkClient } from "@clerk/nextjs/server";
import { TRPCError } from "@trpc/server";

export const createUserRouter = createTRPCRouter({
  createUser: protectedProcedure.mutation(async ({ ctx }) => {
    const { userId, db } = ctx;

    if (!userId) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "User not authenticated with Clerk.",
      });
    }

    const clerkUser = await (await clerkClient()).users.getUser(userId);

    if (!clerkUser) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "Clerk user not found.",
      });
    }

    const primaryEmail = clerkUser.emailAddresses.find(
      (email) => email.id === clerkUser.primaryEmailAddressId,
    )?.emailAddress;

    if (!primaryEmail) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "Primary email not found for Clerk user.",
      });
    }

    const user = await db.user.upsert({
      where: { clerkId: userId },
      update: {
        email: primaryEmail,
        name:
          clerkUser.firstName || clerkUser.lastName
            ? `${clerkUser.firstName ?? ""} ${clerkUser.lastName ?? ""}`.trim()
            : null,
      },
      create: {
        clerkId: userId,
        email: primaryEmail,
        name:
          clerkUser.firstName || clerkUser.lastName
            ? `${clerkUser.firstName ?? ""} ${clerkUser.lastName ?? ""}`.trim()
            : null,
      },
    });

    return user;
  }),
});
