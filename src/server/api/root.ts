import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { createUserRouter } from "./routers/createUser";
import { createDreamCarRouter } from "./routers/createDreamCar";
import { createProjectCarRouter } from "./routers/createProjectCars";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  createUser: createUserRouter,
  createDreamCar: createDreamCarRouter,
  createProjectCar: createProjectCarRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.dreamCars.getAll();
 */
export const createCaller = createCallerFactory(appRouter);
