"use client";

import { createContext, useContext, type ReactNode } from "react";
import { api } from "~/trpc/react";
import type { DreamCar } from "~/utils/types";

interface DreamCarContextType {
  dreamCar: DreamCar | null;
  isLoading: boolean;
}

const DreamCarContext = createContext<DreamCarContextType | undefined>(
  undefined,
);

export function DreamCarProvider({
  children,
  carId,
}: {
  children: ReactNode;
  carId: string;
}) {
  const { data: dreamCar, isLoading } =
    api.getDreamCar.getDreamCarById.useQuery(carId);

  return (
    <DreamCarContext.Provider value={{ dreamCar: dreamCar!, isLoading }}>
      {children}
    </DreamCarContext.Provider>
  );
}

export function useDreamCar() {
  const context = useContext(DreamCarContext);
  if (context === undefined) {
    throw new Error("useDreamCar must be used within a DreamCarProvider");
  }
  return context;
}
