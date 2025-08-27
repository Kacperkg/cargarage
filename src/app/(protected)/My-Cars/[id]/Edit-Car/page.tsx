import React from "react";

import { MyCarProvider } from "~/app/context/my-car-context";
import EditCarForm from "~/app/_components/my-cars/car/edit-car/content/form";

export default async function EditMyCar(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const { id } = params;

  return (
    <MyCarProvider carId={id}>
      <EditCarForm />
    </MyCarProvider>
  );
}
