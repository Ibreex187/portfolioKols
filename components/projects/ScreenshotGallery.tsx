import Image from "next/image";
import type { DiagramAsset } from "@/lib/types";

export function ScreenshotGallery({
  screenshots,
}: {
  screenshots: DiagramAsset[];
}) {
  // The hero visual at the top of the case study already covers the
  // "no screenshots yet" placeholder, so this renders nothing until
  // additional (non-hero) screenshots are supplied.
  if (screenshots.length === 0) {
    return null;
  }

  return (
    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {screenshots.map((shot) => (
        <Image
          key={shot.src}
          src={shot.src}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          className="h-auto w-full rounded-lg border border-border"
        />
      ))}
    </div>
  );
}
