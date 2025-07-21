"use client";

import React, { use } from "react";

import { MyCarProvider } from "~/app/context/my-car-context";
import ImageShowcase from "./_components/image-show-case";
import BasicInfo from "./_components/basic-info";
import PerformanceInfo from "./_components/performance-info";
import OwnershipInfo from "./_components/ownership-info";
import FormAction from "./_components/form-action";

export default function EditMyCar({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  return (
    <MyCarProvider carId={id}>
      <section className="mt-8 flex h-screen w-full flex-col gap-4 px-2 sm:px-4 md:mx-auto lg:px-16">
        <ImageShowcase />
        <BasicInfo />
        <PerformanceInfo />
        <OwnershipInfo />
        <FormAction />
      </section>
    </MyCarProvider>
  );
}
