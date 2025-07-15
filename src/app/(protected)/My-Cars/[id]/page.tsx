"use client";
import { use } from "react";
import { MyCarProvider } from "~/app/context/my-car-context";
import MyCarPageContent from "~/app/(protected)/My-Cars/_components/car/my-car-page-content";

export default function MyCarPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  return (
    <MyCarProvider carId={id}>
      <MyCarPageContent />
    </MyCarProvider>
  );
}
