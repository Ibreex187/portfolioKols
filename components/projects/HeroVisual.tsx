import Image from "next/image";
import type { DiagramAsset, VideoAsset } from "@/lib/types";
import { ImagePlaceholder } from "./ImagePlaceholder";

export function HeroVisual({
  image,
  video,
  projectName,
}: {
  image?: DiagramAsset;
  video?: VideoAsset;
  projectName: string;
}) {
  if (video) {
    return (
      <figure className="overflow-hidden rounded-xl border border-border">
        {/* No autoplay: WCAG 2.2.2 requires a way to stop moving content
            that starts on its own, so playback only starts when the
            visitor presses the native controls. */}
        <video
          controls
          muted
          loop
          playsInline
          poster={video.poster ?? image?.src}
          className="h-auto w-full"
        >
          <source src={video.src} type="video/mp4" />
        </video>
        <figcaption className="sr-only">{video.caption}</figcaption>
      </figure>
    );
  }

  if (image) {
    return (
      <div className="overflow-hidden rounded-xl border border-border">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="h-auto w-full"
          priority
        />
      </div>
    );
  }

  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-accent/40 bg-accent/5 px-6 text-center">
      <ImagePlaceholder iconClassName="h-8 w-8" />
      <p className="text-sm text-muted-foreground">
        [TODO: hero screenshot of {projectName} — add to
        public/projects/&lt;slug&gt;/]
      </p>
    </div>
  );
}
