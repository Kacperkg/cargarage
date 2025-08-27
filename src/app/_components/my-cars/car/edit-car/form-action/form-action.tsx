"use client";

import React from "react";
import { Button } from "~/components/ui/button";
import { useRouter } from "next/navigation";

interface FormActionProps {
  isPending?: boolean;
}

const FormAction = ({ isPending = false }: FormActionProps) => {
  const router = useRouter();

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className="flex justify-end gap-3 pt-4">
      <Button
        variant="outline"
        type="button"
        onClick={handleCancel}
        disabled={isPending}
      >
        Cancel
      </Button>
      <Button
        type="submit"
        className="bg-primary hover:bg-primary/90"
        disabled={isPending}
      >
        {isPending ? "Editing..." : "Edit Car"}
      </Button>
    </div>
  );
};

export default FormAction;
