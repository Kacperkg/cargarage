import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { SkeletonField } from "../ui/skeleton-field";
import { Skeleton } from "~/components/ui/skeleton";
import { Calendar } from "lucide-react";

export default function OwnerShipSkeleton() {
  return (
    <Card className="bg-bg2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Ownership & Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <SkeletonField label="Purchase Date" />
          <SkeletonField label="Status" required />
          <div className="space-y-2 md:col-span-3">
            <Label htmlFor="description">Description/Notes</Label>
            <Skeleton className="h-[50px] w-full" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
