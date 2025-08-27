import { X } from "lucide-react";

interface ImageItem {
  id: string;
  preview: string;
}

interface ImageGalleryProps {
  images: ImageItem[];
  onRemove: (id: string) => void;
  onImageClick: (id: string) => void;
}

export function ClientImageGallery({
  images,
  onRemove,
  onImageClick,
}: ImageGalleryProps) {
  return (
    <>
      {images.map((img) => (
        <div key={img.id} className="group relative">
          <button
            className="absolute top-0 right-0 z-50 translate-x-1/3 -translate-y-1/3 scale-75 rounded-full bg-yellow-500 opacity-0 group-hover:opacity-100"
            onClick={() => onRemove(img.id)}
          >
            <X />
          </button>
          <img
            src={img.preview}
            alt="Temp preview"
            className="bg-muted/50 aspect-video w-full cursor-pointer rounded-lg object-cover opacity-80"
            onClick={() => onImageClick(img.id)}
          />
        </div>
      ))}
    </>
  );
}
