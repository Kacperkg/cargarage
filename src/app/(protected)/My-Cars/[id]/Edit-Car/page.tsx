import React from "react";

import { MyCarProvider } from "~/app/context/my-car-context";
import EditCarForm from "./_components/form";

export default async function EditMyCar({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  return (
    <MyCarProvider carId={id}>
      <EditCarForm />
    </MyCarProvider>
  );
}
