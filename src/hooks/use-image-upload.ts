import { useState, useRef } from "react";
import type { TempImage } from "~/utils/types";

export const useImageUpload = (maxImages: number) => {
  const [images, setImages] = useState<TempImage[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addImages = (files: FileList, currentCount: number) => {
    const newImages: TempImage[] = [];
    for (const file of files) {
      if (currentCount + newImages.length >= maxImages) break;
      newImages.push({
        id: crypto.randomUUID(),
        file,
        preview: URL.createObjectURL(file),
      });
    }
    setImages((prev) => [...prev, ...newImages]);
  };

  const removeImage = (id: string) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  const updateImage = (id: string, updates: Partial<TempImage>) => {
    setImages((prev) =>
      prev.map((img) => (img.id === id ? { ...img, ...updates } : img)),
    );
  };

  const clearImages = () => setImages([]);

  const triggerUpload = () => fileInputRef.current?.click();

  return {
    images,
    fileInputRef,
    addImages,
    removeImage,
    updateImage,
    clearImages,
    triggerUpload,
  };
};
