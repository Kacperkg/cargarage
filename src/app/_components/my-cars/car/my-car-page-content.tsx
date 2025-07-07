import BackButton from "../../dream-cars/car/back-button";
import MyCarInfo from "./my-car-info";
import CarImage from "../../dream-cars/car/car-image";
import MyCarDesc from "./my-car-desc";
import { useMyCar } from "~/app/context/my-car-context";
import { useUser } from "@clerk/nextjs";

export default function MyCarPageContent() {
  const { user, isLoaded } = useUser();
  const { myCar } = useMyCar();

  if (isLoaded && myCar?.ownerId !== user?.id) {
    return (
      <section className="flex h-screen w-full max-w-screen-2xl flex-col items-center justify-center gap-4 px-2 sm:px-4 md:mx-auto lg:px-16">
        <BackButton />
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold">
            The car you are looking for does not exist
          </h1>
          <p className="text-muted-foreground text-sm">
            Please check the URL and try again.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="flex w-full max-w-screen-2xl flex-col gap-4 px-2 sm:px-4 md:mx-auto lg:px-16">
      <BackButton />

      {/* HERO SECTION */}

      {/* CAR INFO */}
      <MyCarInfo />

      {/* CAR IMAGE */}
      <CarImage />

      {/* CAR DESCRIPTION */}
      <MyCarDesc />
    </section>
  );
}
