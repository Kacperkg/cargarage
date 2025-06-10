"use client";
import Navbar from "../_components/navbar";
import { MetricCardRow } from "../_components/dashboard/metric-card";
import { mockCars } from "~/utils/data";
import QuickActions from "../_components/dashboard/quick-action";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Car } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex h-screen w-full flex-col">
      <Navbar />
      <div className="w-full px-2 sm:px-4 md:m-auto lg:px-32">
        <MetricCardRow />
        <div className="mt-10 flex flex-col justify-between gap-4 xl:flex-row">
          <FeaturedCards />
          <QuickActions />
        </div>
      </div>
    </div>
  );
}

const FeaturedCards = () => {
  return (
    <Card className="bg-bg2 w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Car className="text-accent h-6 w-6" />
          <h1 className="text-2xl text-white">Featured Cars</h1>
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
            {mockCars.map((car, index) => (
              <TableRow key={index}>
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
};
