import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { SkeletonField } from "../ui/skeleton-field";

export default function BasicSkeleton() {
  return (
    <Card className="bg-bg2">
      <CardHeader>
        <CardTitle>Basic Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <SkeletonField label="Vin" />
          <SkeletonField label="Make" required />
          <SkeletonField label="Model" required />
          <SkeletonField label="Year" required />
          <SkeletonField label="Color" />
          <SkeletonField label="License Plate" />
        </div>
      </CardContent>
    </Card>
  );
}
