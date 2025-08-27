import { X } from "lucide-react";

interface SavedImage {
  id: number;
  url: string;
}

interface SavedImagesProps {
  images: SavedImage[];
  onDelete: (id: number) => void;
  isDeleting: boolean;
}

export const SavedImages = ({
  images,
  onDelete,
  isDeleting,
}: SavedImagesProps) => (
  <>
    {images.map((img) => (
      <div key={img.id} className="group relative">
        <button
          type="button"
          className="absolute top-0 right-0 z-50 translate-x-1/3 -translate-y-1/3 scale-75 rounded-full bg-red-500 opacity-0 group-hover:opacity-100"
          disabled={isDeleting}
          onClick={() => onDelete(img.id)}
        >
          <X />
        </button>
        <img
          src={img.url}
          alt="Car image"
          className="bg-muted/50 border-dashedaspect-video cover flex aspect-video w-full items-center justify-center rounded-lg border-2 object-cover"
        />
      </div>
    ))}
  </>
);
