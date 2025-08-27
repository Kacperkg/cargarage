import MyCarsCard from "~/app/_components/my-cars/my-car-card";
import { Button } from "~/components/ui/button";
import { Plus } from "lucide-react";

import Link from "next/link";

export default function MyCarsPage() {
  return (
    <section className="mt-8 flex h-screen w-full flex-col gap-4 px-2 sm:px-4 md:mx-auto lg:px-16">
      <div className="flex flex-row items-end justify-between">
        <h2 className="text-muted-foreground">Manage your car collection</h2>
        <AddCarDialogButton />
      </div>
      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
        <MyCarsCard />
      </div>
    </section>
  );
}

const AddCarDialogButton = () => {
  return (
    <Link href="/My-Cars/Add-Car">
      <Button variant="outline" className="bg-bg2">
        <Plus className="h-4 w-4" />
        Add Car
      </Button>
    </Link>
  );
};
