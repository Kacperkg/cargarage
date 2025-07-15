import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";

export default function SkeletonCard() {
  return (
    <>
      {Array.from({ length: 4 }, (_, index) => (
        <Card className="bg-bg2 col-span-1" key={index}>
          <CardHeader>
            <CardTitle className="flex flex-row items-center justify-between text-2xl">
              <div className="flex flex-row gap-2">
                <Skeleton className="h-6 w-[6ch]" />
                <Skeleton className="h-6 w-[6ch]" />
              </div>
              <Skeleton className="h-6 w-[5ch]" />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2">
            <Skeleton className="h-6 w-[5ch]" />
            <Skeleton className="h-6 w-[5ch]" />
            <Skeleton className="h-6 w-[5ch]" />
            <Skeleton className="h-6 w-[5ch]" />
          </CardContent>
        </Card>
      ))}
    </>
  );
}
