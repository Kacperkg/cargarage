"use client";

import AddCarForm from "~/app/_components/my-cars/add-car/add-car-form";

export default function AddCarPage() {
  return (
    <div className="mt-10 flex h-screen w-full flex-col gap-4 px-2 sm:px-4 md:mx-auto lg:px-16">
      <AddCarForm />
    </div>
  );
}
