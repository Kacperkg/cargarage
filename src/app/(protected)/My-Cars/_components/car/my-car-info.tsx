"use client";
import { Pencil, Trash } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Skeleton } from "~/components/ui/skeleton";
import { useMyCar } from "~/app/context/my-car-context";
import { api } from "~/trpc/react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";

export default function MyCarInfo() {
  const { myCar, isLoading } = useMyCar();

  if (isLoading || !myCar) {
    return (
      <>
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <Skeleton className="h-6 w-[10ch]" />
              <Skeleton className="h-6 w-[10ch]" />
              <Skeleton className="h-6 w-[10ch]" />
            </div>
            <div className="flex items-center gap-3">
              <Skeleton className="h-6 w-[10ch]" />
              <span className="text-muted-foreground">
                <Skeleton className="h-6 w-[20ch]" />
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <Skeleton className="h-8 w-[8ch]" />
            <Skeleton className="h-8 w-[8ch]" />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-row items-start justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">
            {myCar.year} {myCar.make} {myCar.model}
          </h1>
          <div className="flex items-center gap-3">
            <h1
              className={`rounded-md px-2 py-1 text-sm ${
                myCar.status === "Daily"
                  ? "bg-green-500/10 text-green-500"
                  : myCar.status === "Summer"
                    ? "bg-yellow-500/10 text-yellow-500"
                    : myCar.status === "Winter"
                      ? "bg-blue-500/10 text-blue-500"
                      : myCar.status === "Track"
                        ? "bg-red-500/10 text-red-500"
                        : myCar.status === "Show"
                          ? "bg-purple-500/10 text-purple-500"
                          : myCar.status === "Garage"
                            ? "bg-gray-500/10 text-gray-500"
                            : myCar.status === "Project"
                              ? "bg-orange-500/10 text-orange-500"
                              : myCar.status === "Sold"
                                ? "bg-red-500/10 text-red-500"
                                : "bg-gray-500/10 text-gray-500"
              }`}
            >
              {myCar.status}
            </h1>
            <span className="text-muted-foreground">
              Added {new Date(myCar.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <Button variant="outline">
            <Pencil />
            Edit
          </Button>
          {myCar.status !== "Sold" && <SellCarButton id={myCar.id} />}
        </div>
      </div>
    </>
  );
}

const SellCarButton = ({ id }: { id: number }) => {
  const utils = api.useUtils();

  const { mutate: sellCar, isPending } = api.sellMyCar.sellMyCar.useMutation({
    onSuccess: async () => {
      toast.success("Car set as Sold");
      await utils.invalidate();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleSell = () => {
    sellCar({ id });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" className="bg-red-500/20 text-red-400">
          <Trash />
          Sell
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Car</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to set this as sold?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-500/20 text-red-400"
            onClick={handleSell}
            disabled={isPending}
          >
            <Trash />
            Sell
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
