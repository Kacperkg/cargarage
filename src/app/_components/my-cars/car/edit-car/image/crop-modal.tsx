import Cropper from "react-easy-crop";
import { Button } from "~/components/ui/button";

interface CropModalProps {
  isOpen: boolean;
  imageUrl: string;
  crop: { x: number; y: number };
  zoom: number;
  aspect?: number;
  onCropChange: (crop: { x: number; y: number }) => void;
  onZoomChange: (zoom: number) => void;
  onCropComplete: (
    croppedArea: { x: number; y: number; width: number; height: number },
    croppedAreaPixels: { x: number; y: number; width: number; height: number },
  ) => void;
  onDone: () => void;
}

export function CropModal({
  isOpen,
  imageUrl,
  crop,
  zoom,
  aspect = 16 / 9,
  onCropChange,
  onZoomChange,
  onCropComplete,
  onDone,
}: CropModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70">
      <div className="bg-bg2 relative flex h-[475px] w-[356px] flex-col rounded p-4">
        <Cropper
          image={imageUrl}
          crop={crop}
          zoom={zoom}
          aspect={aspect}
          onCropChange={onCropChange}
          onZoomChange={onZoomChange}
          onCropComplete={onCropComplete}
        />
        <Button
          type="button"
          variant={"default"}
          onClick={onDone}
          className="absolute right-0 bottom-0"
        >
          Done
        </Button>
      </div>
    </div>
  );
}
