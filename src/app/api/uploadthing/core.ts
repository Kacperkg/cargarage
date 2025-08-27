import { getAuth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { z } from "zod";
import { db } from "~/server/db";

const f = createUploadthing();

export const ourFileRouter = {
  myCarImageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 6 } })
    .input(z.number())
    .middleware(async ({ req, input }) => {
      const { userId } = getAuth(req);

      if (!userId) throw new Error("Unauthorized");

      const car = await db.myCar.findFirst({
        where: { id: input, ownerId: userId },
      });

      if (!car) {
        throw new Error(
          "Car not found or you do not have permission to modify it",
        );
      }

      return { userId, carId: input };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      try {
        const image = await db.carImage.create({
          data: {
            carId: metadata.carId,
            url: file.ufsUrl,
          },
        });
        return image;
      } catch (error) {
        throw new Error("Failed to save image to database");
      }
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
