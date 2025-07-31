"use client";

import React from "react";
import { Button } from "~/components/ui/button";
import { useRouter } from "next/navigation";

interface FormActionProps {
  isPending: boolean;
}

const FormAction = () => {
  const router = useRouter();
  const isPending = false;

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
        {isPending ? "Updating Car..." : "Add Car to Garage"}
      </Button>
    </div>
  );
};

export default FormAction;
