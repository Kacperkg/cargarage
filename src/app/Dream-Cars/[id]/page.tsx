import { Car } from "lucide-react";
import CarInfo from "~/app/_components/dream-cars/car/car-info";
import CarDesc from "~/app/_components/dream-cars/car/car-desc";
import { DreamCarProvider } from "~/app/context/dream-car-context";
import { use } from "react";
import BackButton from "~/app/_components/dream-cars/car/back-button";

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

        {/* ADD IMAGE */}
        <div className="mb-8">
          <div className="bg-muted/50 mb-6 flex aspect-video items-center justify-center rounded-lg border-2 border-dashed">
            <div className="text-center">
              <Car className="text-muted-foreground mx-auto mb-4 h-24 w-24" />
              <p className="text-muted-foreground">
                Car image will appear here
              </p>
            </div>
          </div>
        </div>

        {/* CAR INFO */}
        <CarInfo />

        {/* CAR DESCRIPTION */}
        <CarDesc />
      </section>
    </DreamCarProvider>
  );
}
