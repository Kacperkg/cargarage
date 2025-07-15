"use client";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { api } from "~/trpc/react";
import { Skeleton } from "~/components/ui/skeleton";

export default function FeaturedCards() {
  const {
    data: cars,
    isLoading,
    isError,
  } = api.getMyCars.getMyCars?.useQuery();

  return (
    <Card className="bg-bg2 w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <h1 className="text-2xl text-white">My Cars</h1>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table className="text-lg">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Make</TableHead>
              <TableHead>Model</TableHead>
              <TableHead>Year</TableHead>
              <TableHead className="hidden md:table-cell">HP</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading && (
              <>
                {Array.from({ length: 4 }).map((_, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-center">
                      <Skeleton className="h-6 w-[9ch]" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Skeleton className="h-6 w-[5ch]" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Skeleton className="h-6 w-[4ch]" />
                    </TableCell>
                    <TableCell className="text-center">
                      <Skeleton className="h-6 w-[3ch]" />
                    </TableCell>
                  </TableRow>
                ))}
              </>
            )}
            {isError && (
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  Error loading cars
                </TableCell>
              </TableRow>
            )}
            {cars?.map((car) => (
              <TableRow key={car.id}>
                <TableCell className="font-medium">{car.make}</TableCell>
                <TableCell>{car.model}</TableCell>
                <TableCell>{car.year}</TableCell>
                <TableCell className="hidden md:table-cell">{car.hp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
