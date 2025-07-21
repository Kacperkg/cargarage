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
  Car,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import { Skeleton } from "~/components/ui/skeleton";
import { useMyCar } from "~/app/context/my-car-context";

export default function MyCarDesc() {
  const { myCar, isLoading } = useMyCar();

  if (isLoading || !myCar) {
    return (
      <section className="flex w-full flex-col gap-4 lg:flex-row">
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
    <section className="flex w-full flex-col gap-4 lg:flex-row">
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
              <div className="text-accent text-2xl font-bold">{myCar.hp}</div>
              <p className="text-md text-muted-foreground">Horsepower</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-2xl font-bold">{myCar.mileage}</div>
              <p className="text-md text-muted-foreground">Current Mileage</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-2xl font-bold text-green-400/80">
                +{myCar.mileage - myCar.milesBoughtAt}
              </div>
              <p className="text-md text-muted-foreground">Miles Driven</p>
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
            {myCar.description ? (
              <div className="text-muted-foreground">{myCar.description}</div>
            ) : (
              <div className="text-muted-foreground">
                No description provided
              </div>
            )}
          </CardContent>
        </Card>
        <Card className="bg-bg2 h-fit">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Info />
              Additional Details
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="flex items-center gap-2">
              <Palette className="text-muted-foreground" />
              Preferred Color: {myCar.color ?? "No color provided"}
            </div>
            <div className="flex items-center gap-2">
              <Bolt className="text-muted-foreground" />
              Engine Type: {myCar.engineType}
            </div>
            <div className="flex items-center gap-2">
              <Settings2 className="text-muted-foreground" />
              Transmission Type: {myCar.transmissionType}
            </div>
            <div className="flex items-center gap-2">
              <Car className="text-muted-foreground" />
              Vin:{" "}
              {myCar.vin ? (
                <div className="text-muted-foreground">{myCar.vin}</div>
              ) : (
                <div className="text-muted-foreground">Not Provided</div>
              )}
            </div>
            <div className="flex items-center gap-2">
              <Flag className="text-muted-foreground" />
              License Plate:{" "}
              {myCar.licensePlate ? (
                <div className="text-muted-foreground">
                  {myCar.licensePlate}
                </div>
              ) : (
                <div className="text-muted-foreground">Not Provided</div>
              )}
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
              Log Service
            </Button>
            <Button variant="outline" className="w-full gap-4">
              <Pencil />
              Update Mileage
            </Button>
            <Button variant="outline" className="w-full gap-4">
              <Share />
              Share Car
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-bg2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-bold">
              <Calendar />
              Ownership Timeline
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div>
              <h2 className="text-lg font-bold">Purchase Date</h2>
              <div className="text-muted-foreground">
                {new Date(myCar.purchaseDate).toLocaleDateString()}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold">Months Owned</h2>
              <div className="text-muted-foreground">
                {Math.floor(
                  (new Date().getTime() -
                    new Date(myCar.purchaseDate).getTime()) /
                    (1000 * 60 * 60 * 24 * 30),
                )}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold">Bought At</h2>
              <div className="text-muted-foreground">
                {myCar.milesBoughtAt} miles
              </div>
            </div>
          </CardContent>
        </Card>
      </aside>
    </section>
  );
}
