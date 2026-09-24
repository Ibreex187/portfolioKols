import Image from "next/image";
import type { DiagramAsset } from "@/lib/types";

export function ScreenshotGallery({
  screenshots,
  slug,
}: {
  screenshots: DiagramAsset[];
  slug: string;
}) {
  if (screenshots.length === 0) {
    return (
      <div className="mt-4 rounded-lg border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
        [TODO: add screenshots to public/projects/{slug}/]
      </div>
    );
  }

  return (
    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {screenshots.map((shot) => (
        <Image
          key={shot.src}
          src={shot.src}
          alt={shot.alt}
          width={640}
          height={400}
          className="rounded-lg border border-border"
        />
      ))}
    </div>
  );
}
