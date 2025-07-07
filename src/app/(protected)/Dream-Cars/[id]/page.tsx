import { DreamCarProvider } from "~/app/context/dream-car-context";
import { use } from "react";
import DreamPageContent from "~/app/_components/dream-cars/car/dream-page-content";

export default function DreamCarPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  return (
    <DreamCarProvider carId={id}>
      <DreamPageContent />
    </DreamCarProvider>
  );
}
