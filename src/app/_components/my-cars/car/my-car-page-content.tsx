import BackButton from "../../dream-cars/car/back-button";
import MyCarInfo from "./my-car-info";
import CarImage from "../../dream-cars/car/car-image";
import MyCarDesc from "./my-car-desc";

export default function MyCarPageContent() {
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
