"use client";

const ImageShowcase = () => {
  return (
    <div className="grid w-full gap-4 md:grid-cols-3">
      <div className="bg-muted/50 border-dashedaspect-video flex aspect-video w-full items-center justify-center rounded-lg border-2 bg-blue-500"></div>
      <div className="bg-muted/50 border-dashedaspect-video flex aspect-video w-full items-center justify-center rounded-lg border-2 bg-blue-200"></div>
      <div className="bg-muted/50 border-dashedaspect-video flex aspect-video w-full items-center justify-center rounded-lg border-2 bg-blue-400"></div>
      <div className="bg-muted/50 border-dashedaspect-video flex aspect-video w-full items-center justify-center rounded-lg border-2 bg-blue-600"></div>
      <div className="bg-muted/50 border-dashedaspect-video flex aspect-video w-full items-center justify-center rounded-lg border-2 bg-blue-100"></div>
    </div>
  );
};

export default ImageShowcase;
