import React from "react";
import ImageShowcase from "../image/image-show-case";

import FormAction from "../form-action/form-action";

import BasicSkeleton from "../basic/basic-skel";
import PerformanceSkeleton from "../performance/performance-skel";
import OwnerShipSkeleton from "../ownership/ownership-skel";

export default function SkeletonContent() {
  return (
    <div className="mt-8 flex h-screen w-full flex-col gap-4 px-2 sm:px-4 md:mx-auto lg:px-16">
      <ImageShowcase />
      <BasicSkeleton />
      <PerformanceSkeleton />
      <OwnerShipSkeleton />
      <FormAction />
    </div>
  );
}
