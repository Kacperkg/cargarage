"use client";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Gauge,
  Info,
  Palette,
  Bolt,
  Settings2,
  Calendar,
  Flag,
  Pencil,
  Share,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import { useDreamCar } from "~/app/context/dream-car-context";
import { Skeleton } from "~/components/ui/skeleton";

export default function CarDesc() {
  const { dreamCar, isLoading } = useDreamCar();

  if (isLoading || !dreamCar) {
    return (
      <section className="flex w-full gap-4">
        <div className="flex basis-full flex-col gap-4">
          <Card className="bg-bg2 h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Gauge />
                Key Specifications
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-around">
              <div className="flex flex-col items-center gap-2">
                <div className="text-accent text-2xl font-bold">
                  <Skeleton className="h-6 w-[2ch]" />
                </div>
                <p className="text-md text-muted-foreground">Horsepower</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-2xl font-bold">
                  <Skeleton className="h-6 w-[2ch]" />
                </div>
                <p className="text-md text-muted-foreground">Model Year</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-2xl font-bold">
                  <Skeleton className="h-6 w-[2ch]" />
                </div>
                <p className="text-md text-muted-foreground">Engine</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-2xl font-bold">
                  <Skeleton className="h-6 w-[2ch]" />
                </div>
                <p className="text-md text-muted-foreground">Transmission</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-bg2 h-fit">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                Description
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-muted-foreground">
                <Skeleton className="h-6 w-full" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-bg2 h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Info />
                Additional Details
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Palette className="text-muted-foreground" />
                Preferred Color: <Skeleton className="h-6 w-[4ch]" />
              </div>
              <div className="flex items-center gap-2">
                <Bolt className="text-muted-foreground" />
                Engine Type: <Skeleton className="h-6 w-[4ch]" />
              </div>
              <div className="flex items-center gap-2">
                <Settings2 className="text-muted-foreground" />
                Transmission Type: <Skeleton className="h-6 w-[4ch]" />
              </div>
            </CardContent>
          </Card>
        </div>
        <aside className="flex basis-1/2 flex-col gap-4">
          <Card className="bg-bg2">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <Button variant="default" className="bg-accent w-full gap-4">
                <Flag />
                Mark As Acquired
              </Button>
              <Button variant="outline" className="w-full gap-4">
                <Pencil />
                Edit
              </Button>
              <Button variant="outline" className="w-full gap-4">
                <Share />
                Share Dream Car
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-bg2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl font-bold">
                <Calendar />
                Timeline
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div>
                <h2 className="text-lg font-bold">Added to WishList</h2>
                <div className="text-muted-foreground">
                  <Skeleton className="h-6 w-full" />
                </div>
              </div>
              <div>
                <h2 className="text-lg font-bold">Last Updated</h2>
                <div className="text-muted-foreground">
                  <Skeleton className="h-6 w-full" />
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>
      </section>
    );
  }

  return (
    <section className="flex w-full gap-4">
      <div className="flex basis-full flex-col gap-4">
        <Card className="bg-bg2 h-fit">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Gauge />
              Key Specifications
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-around">
            <div className="flex flex-col items-center gap-2">
              <div className="text-accent text-2xl font-bold">
                {dreamCar.hp}
              </div>
              <p className="text-md text-muted-foreground">Horsepower</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-2xl font-bold">{dreamCar.year}</div>
              <p className="text-md text-muted-foreground">Model Year</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-2xl font-bold">{dreamCar.engineType}</div>
              <p className="text-md text-muted-foreground">Engine</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-2xl font-bold">
                {dreamCar.transmissionType}
              </div>
              <p className="text-md text-muted-foreground">Transmission</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-bg2 h-fit">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              Description
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-muted-foreground">
              {dreamCar.description ? (
                <div className="text-muted-foreground">
                  {dreamCar.description}
                </div>
              ) : (
                <div className="text-muted-foreground">
                  No description provided
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-bg2 h-fit">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Info />
              Additional Details
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Palette className="text-muted-foreground" />
              Preferred Color: {dreamCar.color ?? "No color provided"}
            </div>
            <div className="flex items-center gap-2">
              <Bolt className="text-muted-foreground" />
              Engine Type: {dreamCar.engineType}
            </div>
            <div className="flex items-center gap-2">
              <Settings2 className="text-muted-foreground" />
              Transmission Type: {dreamCar.transmissionType}
            </div>
          </CardContent>
        </Card>
      </div>
      <aside className="flex basis-1/2 flex-col gap-4">
        <Card className="bg-bg2">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Button variant="default" className="bg-accent w-full gap-4">
              <Flag />
              Mark As Acquired
            </Button>
            <Button variant="outline" className="w-full gap-4">
              <Pencil />
              Edit
            </Button>
            <Button variant="outline" className="w-full gap-4">
              <Share />
              Share Dream Car
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-bg2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-bold">
              <Calendar />
              Timeline
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div>
              <h2 className="text-lg font-bold">Added to WishList</h2>
              <div className="text-muted-foreground">
                {new Date(dreamCar.createdAt).toLocaleDateString()}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold">Last Updated</h2>
              <div className="text-muted-foreground">
                {new Date(dreamCar.updatedAt).toLocaleDateString()}
              </div>
            </div>
          </CardContent>
        </Card>
      </aside>
    </section>
  );
}
