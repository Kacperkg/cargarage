"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Button } from "~/components/ui/button";
import { Calendar, Gauge } from "lucide-react";
import { CarStatus, EngineType, TransmissionType } from "@prisma/client";
import { Textarea } from "~/components/ui/textarea";
import { api } from "~/trpc/react";
import { toast } from "sonner";
import Link from "next/link";

export default function EditMyCar() {
  return (
    <section className="mt-8 flex h-screen w-full flex-col gap-4 px-2 sm:px-4 md:mx-auto lg:px-16">
      <ImageShowcase />
      <BasicInfo />
      <PerformanceInfo />
      <OwnershipInfo />
      <FormAction />
    </section>
  );
}

const ImageShowcase = () => {
  return (
    <div className="grid w-full gap-4 md:grid-cols-3">
      <div className="bg-muted/50 border-dashedaspect-video flex aspect-video w-full items-center justify-center rounded-lg border-2 bg-blue-500"></div>
      <div className="bg-muted/50 border-dashedaspect-video flex aspect-video w-full items-center justify-center rounded-lg border-2 bg-blue-200"></div>
      <div className="bg-muted/50 border-dashedaspect-video flex aspect-video w-full items-center justify-center rounded-lg border-2 bg-blue-400"></div>
      <div className="bg-muted/50 border-dashedaspect-video flex aspect-video w-full items-center justify-center rounded-lg border-2 bg-blue-600"></div>
      <div className="bg-muted/50 border-dashedaspect-video flex aspect-video w-full items-center justify-center rounded-lg border-2 bg-blue-100"></div>
    </div>
  );
};

const BasicInfo = () => {
  return (
    <Card className="bg-bg2">
      <CardHeader>
        <CardTitle>Basic Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="vin">VIN Number</Label>
            <Input id="vin" name="vin" placeholder="1HGBH41JXMN109186" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="make">Make *</Label>
            <Input
              id="make"
              name="make"
              placeholder="BMW, Mercedes, Toyota..."
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="model">Model *</Label>
            <Input
              id="model"
              name="model"
              placeholder="M3, C63, Supra..."
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="year">Year *</Label>
            <Input
              id="year"
              name="year"
              type="number"
              placeholder="2023"
              min="1900"
              max="2025"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="color">Color</Label>
            <Input
              id="color"
              name="color"
              placeholder="Alpine White, Jet Black..."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="licensePlate">License Plate</Label>
            <Input
              id="licensePlate"
              name="licensePlate"
              placeholder="ABC-1234"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const PerformanceInfo = () => {
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
          <div className="space-y-2">
            <Label htmlFor="engine">Engine</Label>
            <Input id="engine" name="engine" placeholder="3.0L Twin-Turbo I6" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="engineType">Engine Type *</Label>
            <Select name="engineType" required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select engine type" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(EngineType).map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="transmissionType">Transmission *</Label>
            <Select name="transmissionType" required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select transmission" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(TransmissionType).map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="hp">Horsepower</Label>
            <Input id="hp" name="hp" type="number" placeholder="503" min="0" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mileage">Current Mileage *</Label>
            <Input
              id="mileage"
              name="mileage"
              type="number"
              placeholder="12450"
              min="0"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="milesBoughtAt">Miles at Purchase</Label>
            <Input
              id="milesBoughtAt"
              name="milesBoughtAt"
              type="number"
              placeholder="8500"
              min="0"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const OwnershipInfo = () => {
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
          <div className="space-y-2">
            <Label htmlFor="purchaseDate">Purchase Date</Label>
            <Input type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="status">Status *</Label>
            <Select name="status" required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(CarStatus).map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2 md:col-span-3">
            <Label htmlFor="description">Description/Notes</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Special modifications, notes..."
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const FormAction = () => {
  const { mutate: createMyCar, isPending } =
    api.createMyCar.createMyCar.useMutation({
      onError: (err) => {
        toast.error(err.message);
      },
    });

  return (
    <div className="flex justify-end gap-3 pt-4">
      <Link href="/My-Cars">
        <Button variant="outline" type="button">
          Cancel
        </Button>
      </Link>
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
