"use client";

import React, { useEffect, useReducer, useState, type FormEvent } from "react";
import ImageShowcase from "./image-show-case";
import BasicInfo from "./basic-info";
import PerformanceInfo from "./performance-info";
import OwnershipInfo from "./ownership-info";
import FormAction from "./form-action";
import type { EditCarInput } from "~/utils/types";

import { api } from "~/trpc/react";
import { useMyCar } from "~/app/context/my-car-context";
import formReducer from "./form-reducer";
import { FormReducerActionKind } from "./form-reducer";

export default function EditCarForm() {
  const { myCar, isLoading } = useMyCar();

  const [formData, dispatch] = useReducer(formReducer, { id: myCar?.id ?? 0 });

  useEffect(() => {
    if (myCar) {
      dispatch({
        type: FormReducerActionKind.LOAD_INITIAL_DATA,
        payload: myCar,
      });
    }
  }, [myCar]);

  const editCar = api.createMyCar.editMyCar.useMutation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ ...formData });
  };

  const updateField = (
    field: keyof EditCarInput,
    value: string | number | Date | undefined,
  ) => {
    dispatch({
      type: FormReducerActionKind.UPDATE_FIELD,
      payload: { field, value },
    });
  };

  return (
    <form
      className="mt-8 flex h-screen w-full flex-col gap-4 px-2 sm:px-4 md:mx-auto lg:px-16"
      onSubmit={handleSubmit}
    >
      <ImageShowcase />
      <BasicInfo updateField={updateField} formData={formData} />
      <PerformanceInfo updateField={updateField} formData={formData} />
      <OwnershipInfo updateField={updateField} />
      <FormAction />
    </form>
  );
}
