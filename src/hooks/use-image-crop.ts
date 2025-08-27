import { useState } from "react";
import getCroppedImg from "~/utils/get-cropped-img";

export const useImageCrop = () => {
  const [activeCrop, setActiveCrop] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<{
    width: number;
    height: number;
    x: number;
    y: number;
  } | null>(null);

  const startCrop = (imageId: string) => {
    setActiveCrop(imageId);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setCroppedAreaPixels(null);
  };

  const cropImage = async (imagePreview: string, fileName: string) => {
    if (!croppedAreaPixels) return null;

    try {
      const croppedBlob = await getCroppedImg(imagePreview, croppedAreaPixels);
      const croppedFile = new File([croppedBlob], fileName, {
        type: "image/jpeg",
      });
      const croppedPreview = URL.createObjectURL(croppedBlob);

      return { file: croppedFile, preview: croppedPreview };
    } catch (err) {
      console.error("Crop failed", err);
      return null;
    }
  };

  const closeCrop = () => setActiveCrop(null);

  return {
    activeCrop,
    crop,
    zoom,
    croppedAreaPixels,
    setCrop,
    setZoom,
    setCroppedAreaPixels,
    startCrop,
    cropImage,
    closeCrop,
  };
};
