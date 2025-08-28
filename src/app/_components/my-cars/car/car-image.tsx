import { Car } from "lucide-react";
import { useMyCar } from "~/app/context/my-car-context";

export default function CarImage() {
  const { myCar, isLoading } = useMyCar();

  if (!myCar || isLoading) {
    return <div>loading...</div>;
  }

  const imgCount = myCar.images.length;

  return (
    <div className="my-4 flex flex-col gap-4 lg:flex-row">
      {imgCount > 0 ? (
        <div className="flex aspect-video basis-full items-center justify-center rounded-lg">
          <img
            src={myCar.images[0]?.url}
            alt=""
            className="w-full rounded-lg"
          />
        </div>
      ) : (
        <div className="bg-muted/50 flex aspect-video basis-full items-center justify-center rounded-lg border-2 border-dashed">
          <Car className="text-muted-foreground mx-auto mb-4 h-24 w-24" />
        </div>
      )}

      <div className="flex basis-full flex-row justify-between gap-2 lg:basis-1/5 lg:flex-col">
        {myCar.images.length < 2
          ? Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="bg-muted/50 flex aspect-video w-full items-center justify-center rounded-lg border-2 border-dashed"
              />
            ))
          : myCar.images.length > 1 &&
            myCar.images
              .slice(1)
              .map((img) => (
                <img
                  key={img.id}
                  src={img.url}
                  alt=""
                  className="aspect-video w-full items-center justify-center rounded-lg border-2 border-dashed object-cover"
                />
              ))}
      </div>
    </div>
  );
}
