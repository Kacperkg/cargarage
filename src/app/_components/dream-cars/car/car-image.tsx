import { Car } from "lucide-react";

export default function CarImage() {
  return (
    <div className="my-4 flex flex-col gap-4 lg:flex-row">
      <div className="bg-muted/50 flex aspect-video basis-full items-center justify-center rounded-lg border-2 border-dashed">
        <div className="text-center">
          <Car className="text-muted-foreground mx-auto mb-4 h-24 w-24" />
          <p className="text-muted-foreground">Car image will appear here</p>
        </div>
      </div>
      <div className="flex basis-full flex-row justify-between gap-2 lg:basis-1/5 lg:flex-col">
        <div className="bg-muted/50 flex aspect-video w-full items-center justify-center rounded-lg border-2 border-dashed">
          <div className="text-center"></div>
        </div>
        <div className="bg-muted/50 flex aspect-video w-full items-center justify-center rounded-lg border-2 border-dashed">
          <div className="text-center"></div>
        </div>
        <div className="bg-muted/50 flex aspect-video w-full items-center justify-center rounded-lg border-2 border-dashed">
          <div className="text-center"></div>
        </div>
        <div className="bg-muted/50 flex aspect-video w-full items-center justify-center rounded-lg border-2 border-dashed">
          <div className="text-center"></div>
        </div>
        <div className="bg-muted/50 flex aspect-video w-full items-center justify-center rounded-lg border-2 border-dashed">
          <div className="text-center"></div>
        </div>
      </div>
    </div>
  );
}
