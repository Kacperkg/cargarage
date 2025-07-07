import CarInfo from "~/app/_components/dream-cars/car/car-info";
import CarDesc from "~/app/_components/dream-cars/car/car-desc";
import { DreamCarProvider } from "~/app/context/dream-car-context";
import { use } from "react";
import BackButton from "~/app/_components/dream-cars/car/back-button";
import CarImage from "~/app/_components/dream-cars/car/car-image";

export default function DreamCarPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  return (
    <DreamCarProvider carId={id}>
      <section className="flex w-full max-w-screen-2xl flex-col gap-4 px-2 sm:px-4 md:mx-auto lg:px-16">
        <BackButton />

        {/* HERO SECTION */}

        {/* CAR INFO */}
        <CarInfo />

        {/* ADD IMAGE */}
        <CarImage />

        {/* CAR DESCRIPTION */}
        <CarDesc />
      </section>
    </DreamCarProvider>
  );
}
