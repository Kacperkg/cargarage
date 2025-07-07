"use client";

import { createContext, useContext, type ReactNode } from "react";
import { api } from "~/trpc/react";
import type { MyCar } from "~/utils/types";

interface MyCarContextType {
  myCar: MyCar | null;
  isLoading: boolean;
}

const MyCarContext = createContext<MyCarContextType | undefined>(undefined);

export function MyCarProvider({
  children,
  carId,
}: {
  children: ReactNode;
  carId: string;
}) {
  const { data: myCar, isLoading } = api.getMyCars.getMyCarById.useQuery(carId);

  return (
    <MyCarContext.Provider value={{ myCar: myCar!, isLoading }}>
      {children}
    </MyCarContext.Provider>
  );
}

export function useMyCar() {
  const context = useContext(MyCarContext);
  if (context === undefined) {
    throw new Error("useMyCar must be used within a MyCarProvider");
  }
  return context;
}
