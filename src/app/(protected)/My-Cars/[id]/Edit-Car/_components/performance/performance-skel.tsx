import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Gauge } from "lucide-react";
import { SkeletonField } from "../ui/skeleton-field";

export default function PerformanceSkeleton() {
  return (
    <Card className="bg-bg2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Gauge className="h-5 w-5" />
          Performance & Technical Specs
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <SkeletonField label="Engine" />
          <SkeletonField label="Engine Type" required />
          <SkeletonField label="Transmission" required />
          <SkeletonField label="Horsepower" />
          <SkeletonField label="Current Mileage" required />
          <SkeletonField label="Miles at Purchase" />
        </div>
      </CardContent>
    </Card>
  );
}
