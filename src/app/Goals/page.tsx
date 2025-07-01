"use client";

export default function GoalsPage() {
  return (
    <div className="flex h-screen w-full flex-col">
      <div className="mt-8 flex w-full flex-col gap-4 px-2 sm:px-4 md:mx-auto lg:px-16">
        <div className="flex h-[80svh] items-center justify-center">
          <div className="text-center">
            <h1 className="text-muted-foreground mb-4 text-4xl font-bold">
              🚧 Feature Coming Soon 🚧
            </h1>
            <p className="text-muted-foreground text-lg">
              We&apos;re working hard to bring you amazing goal tracking
              features!
            </p>
            <p className="text-muted-foreground mt-2 text-sm">
              Stay tuned for updates
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
