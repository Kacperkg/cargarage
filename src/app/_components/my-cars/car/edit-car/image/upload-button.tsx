import { Button } from "~/components/ui/button";

interface ImageUploadButtonProps {
  onUploadClick: () => void;
  disabled: boolean;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ImageUploadButton = ({
  onUploadClick,
  disabled,
  fileInputRef,
  onFileChange,
}: ImageUploadButtonProps) => (
  <div className="w-full pb-4">
    <Button
      variant="default"
      type="button"
      onClick={onUploadClick}
      disabled={disabled}
    >
      Upload Images
    </Button>
    <input
      ref={fileInputRef}
      type="file"
      accept="image/*"
      multiple
      onChange={onFileChange}
      disabled={disabled}
      className="hidden"
    />
  </div>
);
