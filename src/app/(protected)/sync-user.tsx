"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import { api } from "~/trpc/react";
import { useUser } from "@clerk/nextjs";

export default function SyncUser() {
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
  }, [
    isSignedIn,
    isLoaded,
    user,
    createUserMutation.isPending,
    createUserMutation.isSuccess,
    createUserMutation.isError,
  ]);

  return null;
}
