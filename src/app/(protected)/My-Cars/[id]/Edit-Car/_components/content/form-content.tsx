"use client";

import React, { useEffect, useReducer, useState, type FormEvent } from "react";
import ImageShowcase from "../image-show-case";
import BasicInfo from "../basic/basic-info";
import PerformanceInfo from "../performance/performance-info";
import OwnershipInfo from "../ownership/ownership-info";
import FormAction from "../form-action/form-action";
import type { EditCarInput } from "~/utils/types";

import formReducer from "../util/form-reducer";
import { FormReducerActionKind } from "../util/form-reducer";
import type { MyCar } from "~/utils/types";

export default function EditCarFormContent({ myCar }: { myCar: MyCar }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, dispatch] = useReducer(formReducer, {
    id: myCar.id,
    make: myCar.make,
    model: myCar.model,
    year: myCar.year,
    engineType: myCar.engineType,
    transmissionType: myCar.transmissionType,
    status: myCar.status,
  });

  useEffect(() => {
    if (myCar) {
      dispatch({
        type: FormReducerActionKind.LOAD_INITIAL_DATA,
        payload: myCar,
      });
    }
  }, [myCar]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
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
      <OwnershipInfo updateField={updateField} formData={formData} />
      <FormAction isPending={isSubmitting} />
    </form>
  );
}
