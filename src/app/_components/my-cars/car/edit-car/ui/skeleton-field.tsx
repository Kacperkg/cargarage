import React from "react";
import { Label } from "~/components/ui/label";
import { Skeleton } from "~/components/ui/skeleton";

export const SkeletonField = ({
  label,
  required = false,
}: {
  label: string;
  required?: boolean;
}) => (
  <div className="space-y-2">
    <Label>
      {label}
      {required && " *"}
    </Label>
    <Skeleton className="h-[35px] w-full" />
  </div>
);
