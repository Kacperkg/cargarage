"use client";
import { useMyCar } from "~/app/context/my-car-context";
import EditCarFormContent from "./form-content";
import SkeletonContent from "./skeleton-context";

export default function EditCarForm() {
  const { myCar, isLoading } = useMyCar();

  if (isLoading || !myCar) {
    return <SkeletonContent />;
  }

  return <EditCarFormContent myCar={myCar} />;
}
