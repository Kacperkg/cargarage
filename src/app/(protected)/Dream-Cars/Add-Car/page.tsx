import BackButton from "~/app/_components/dream-cars/car/back-button";

export default function AddDreamCarPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h2 className="text-muted-foreground text-2xl">
        Go to dashboard to add a dream car this part is still under development
        😅
      </h2>
      <BackButton />
    </div>
  );
}
