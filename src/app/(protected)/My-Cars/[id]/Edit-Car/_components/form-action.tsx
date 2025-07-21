"use client";

import React from "react";

import { Button } from "~/components/ui/button";

import { api } from "~/trpc/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const FormAction = () => {
  const router = useRouter();

  const { mutate: createMyCar, isPending } =
    api.createMyCar.createMyCar.useMutation({
      onError: (err) => {
        toast.error(err.message);
      },
    });

  return (
    <div className="flex justify-end gap-3 pt-4">
      <Button variant="outline" type="button" onClick={() => router.back()}>
        Cancel
      </Button>
      <Button
        type="submit"
        className="bg-primary hover:bg-primary/90"
        disabled={isPending}
      >
        {isPending ? "Adding Car..." : "Add Car to Garage"}
      </Button>
    </div>
  );
};

export default FormAction;
