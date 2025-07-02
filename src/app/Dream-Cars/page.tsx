import DreamCarCard from "../_components/dream-cars/dream-car-card";

export default function DreamCarsPage() {
  return (
    <div className="flex h-screen w-full flex-col">
      <div className="mt-8 flex w-full flex-col gap-4 px-2 sm:px-4 md:mx-auto lg:px-16">
        <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
          <DreamCarCard />
        </div>
      </div>
    </div>
  );
}
