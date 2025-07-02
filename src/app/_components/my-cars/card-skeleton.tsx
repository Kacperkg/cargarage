import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import { Car, Gauge, Palette, Calendar } from "lucide-react";
import { Skeleton } from "~/components/ui/skeleton";

export default function CardSkeleton() {
  return (
    <>
      {Array.from({ length: 2 }, (_, index) => (
        <Card key={index} className="bg-bg2 flex flex-col gap-2">
          <CardHeader className="flex aspect-video items-center justify-center border-b-2">
            <Car className="text-accent h-10 w-10" />
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-2">
              <li className="flex flex-row gap-2 text-2xl font-semibold">
                <Skeleton className="h-6 w-[4ch]" />
                <Skeleton className="h-6 w-[4ch]" />
                <Skeleton className="h-6 w-[4ch]" />
              </li>
              <li className="text-muted-foreground flex flex-row items-center gap-2">
                <h1>
                  <Skeleton className="h-6 w-[5ch]" />
                </h1>
                <h1>
                  <Skeleton className="h-6 w-[5ch]" />
                </h1>
              </li>

              <div className="flex flex-col gap-4 border-b-2 py-4">
                <ul className="grid grid-cols-2">
                  <li className="flex w-full flex-row items-center gap-2">
                    <Palette className="text-muted-foreground h-5 w-5" />
                    <h1 className="text-sm font-semibold">
                      <Skeleton className="h-6 w-[6ch]" />
                    </h1>
                  </li>
                  <li className="flex w-full flex-row items-center gap-2">
                    <Gauge className="text-muted-foreground h-5 w-5" />
                    <h1 className="text-sm font-semibold">
                      <Skeleton className="h-6 w-[6ch]" />
                    </h1>
                  </li>
                </ul>
                <li className="flex w-full flex-row items-center gap-2">
                  <Calendar className="text-muted-foreground h-5 w-5" />
                  <h1 className="text-sm font-semibold">
                    <Skeleton className="h-6 w-[6ch]" />
                  </h1>
                </li>
              </div>
              <ul className="grid w-full grid-cols-2">
                <li className="flex w-full flex-col items-start gap-2">
                  <h1 className="text-muted-foreground text-sm font-semibold">
                    Engine
                  </h1>
                  <h1 className="text-sm font-semibold">
                    <Skeleton className="h-6 w-[10ch]" />
                  </h1>
                </li>
                <li className="flex w-full flex-col items-start gap-2">
                  <h1 className="text-muted-foreground text-sm font-semibold">
                    License Plate
                  </h1>
                  <h1 className="text-sm font-semibold">
                    <Skeleton className="h-6 w-[6ch]" />
                  </h1>
                </li>
              </ul>
            </ul>
            <CardFooter className="mt-4 grid w-full grid-cols-1 gap-4 p-0 lg:grid-cols-2">
              <div className="w-full">
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="w-full">
                <Skeleton className="h-10 w-full" />
              </div>
            </CardFooter>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
