"use client";
import { usePathname } from "next/navigation";

export default function GetPath() {
  const router = usePathname();
  const path = router.replace(/^\//, "");

  return (
    <h1 className="text-xl">
      {path
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")}
    </h1>
  );
}
