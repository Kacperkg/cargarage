"use client";
import Navbar from "../_components/navbar";
import { MetricCardRow } from "../_components/dashboard/metric-card";
import QuickActions from "../_components/dashboard/quick-action";
import FeaturedCards from "../_components/dashboard/featured-cards";
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
    <div className="flex h-screen w-full flex-col">
      <div className="w-full px-2 sm:px-4 md:mx-auto lg:px-16">
        <MetricCardRow />
        <div className="mt-10 flex flex-col justify-between gap-4 xl:flex-row">
          <FeaturedCards />
          <QuickActions />
        </div>
      </div>
    </div>
  );
}
