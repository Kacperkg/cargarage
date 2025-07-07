"use client";

import MetricCardRow from "~/app/_components/dashboard/metrics/metric-row";
import QuickActions from "~/app/_components/dashboard/quick-actions/quick-action";
import FeaturedCards from "~/app/_components/dashboard/featured-cards";
import { useUser } from "@clerk/nextjs";
import { api } from "~/trpc/react";
import { useEffect } from "react";
import { toast } from "sonner";

export default function DashboardPage() {
  const { isSignedIn, user, isLoaded } = useUser();
  const createUserMutation = api.createUser.createUser.useMutation();

  useEffect(() => {
    if (
      isSignedIn &&
      isLoaded &&
      user &&
      !createUserMutation.isPending &&
      !createUserMutation.isSuccess &&
      !createUserMutation.isError
    ) {
      createUserMutation.mutate(undefined, {
        onError: () => {
          toast.error("Error syncing user", {
            description: "Error syncing user, please try again.",
          });
        },
      });
    }
  }, [isSignedIn, isLoaded, user, createUserMutation]);

  return (
    <div className="flex h-[80svh] w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col gap-4 px-2 sm:px-4 md:mx-auto lg:px-16">
        <MetricCardRow />
        <div className="flex flex-col justify-between gap-4 xl:flex-row">
          <FeaturedCards />
          <QuickActions />
        </div>
      </div>
    </div>
  );
}
