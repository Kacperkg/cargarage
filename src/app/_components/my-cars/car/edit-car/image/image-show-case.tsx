"use client";

import { useMyCar } from "~/app/context/my-car-context";
import { api } from "~/trpc/react";

import { CropModal } from "./crop-modal";
import { ClientImageGallery } from "./client-image";
import { EmptyImageState } from "./empty-state";
import { SavedImages } from "./saved-images";
import { ImageUploadButton } from "./upload-button";
import { useImageCrop } from "~/hooks/use-image-crop";
import { MAX_IMAGES } from "~/utils/types";
import type { ImageShowcaseProps } from "~/utils/types";

const ImageShowcase = ({
  clientImages,
  onAddImages,
  onRemoveClientImage,
  onUpdateClientImage,
  clientFileInputRef,
  onTriggerUpload,
}: ImageShowcaseProps) => {
  const { myCar, isLoading } = useMyCar();

  // Cropping Images
  const {
    activeCrop,
    crop,
    zoom,
    setCrop,
    setZoom,
    setCroppedAreaPixels,
    startCrop,
    cropImage,
    closeCrop,
  } = useImageCrop();

  // While still getting data return skeleton //// TODO
  if (!myCar || isLoading) {
    return <div>Loading</div>;
  }

  const utils = api.useUtils();

  // Delete Car Image, change to client removce and then implement permament remove in saving /// TODO
  const { mutate: deleteCarImage, isPending } =
    api.deleteCarImage.deleteImage.useMutation({
      onSuccess: async () => {
        await utils.getMyCars.getMyCarById.invalidate();
      },
    });

  const totalImages = myCar.images.length + clientImages.length;
  const hasNoImages = myCar.images.length < 1 && clientImages.length < 1;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) onAddImages(files, myCar.images.length);
  };

  const handleCropDone = async () => {
    if (!activeCrop) return;

    const img = clientImages.find((i) => i.id === activeCrop);
    if (!img) return;

    const result = await cropImage(img.preview, img.file.name);
    if (result) onUpdateClientImage(activeCrop, result);
    closeCrop();
  };

  return (
    <section>
      {/* Controller */}
      <ImageUploadButton
        onUploadClick={onTriggerUpload}
        disabled={totalImages >= MAX_IMAGES}
        fileInputRef={clientFileInputRef}
        onFileChange={handleFileChange}
      />

      {/* Images */}
      <div className="grid w-full gap-4 md:grid-cols-3">
        {/* Show no images uploaded */}
        {hasNoImages && <EmptyImageState />}

        {/* This shows the images saved to the db already */}
        <SavedImages
          images={myCar.images}
          onDelete={(id) => deleteCarImage({ id })}
          isDeleting={isPending}
        />

        {/* This shows the client sided images that user has uploaded */}
        <ClientImageGallery
          images={clientImages}
          onRemove={onRemoveClientImage}
          onImageClick={startCrop}
        />

        {/* Cropping Client sided images */}
        {activeCrop && (
          <CropModal
            isOpen={!!activeCrop}
            imageUrl={
              clientImages.find((i) => i.id === activeCrop)?.preview ?? ""
            }
            crop={crop}
            zoom={zoom}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={(_, pixels) => setCroppedAreaPixels(pixels)}
            onDone={handleCropDone}
          />
        )}
      </div>
    </section>
  );
};

export default ImageShowcase;
