"use client";

import { UploadButton } from "../_components/ui/uploadthing";

const ImageShowcase = () => {
  return (
    <div className="grid w-full gap-4 md:grid-cols-3">
      <div className="bg-muted/50 border-dashedaspect-video flex aspect-video w-full items-center justify-center rounded-lg border-2 bg-blue-500"></div>
      <div className="bg-muted/50 border-dashedaspect-video flex aspect-video w-full items-center justify-center rounded-lg border-2 bg-blue-200"></div>
      <div className="bg-muted/50 border-dashedaspect-video flex aspect-video w-full items-center justify-center rounded-lg border-2 bg-blue-400"></div>
      <div className="bg-muted/50 border-dashedaspect-video flex aspect-video w-full items-center justify-center rounded-lg border-2 bg-blue-600"></div>
      <div className="bg-muted/50 border-dashedaspect-video flex aspect-video w-full items-center justify-center rounded-lg border-2 bg-blue-100"></div>
      <UploadButton
        endpoint="myCarImageUploader"
        onClientUploadComplete={(res) => {
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
};

export default ImageShowcase;
