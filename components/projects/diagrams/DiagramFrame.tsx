import type { ReactNode } from "react";

export function DiagramFrame({
  children,
  title,
  markerId,
  viewBox = "0 0 800 260",
}: {
  children: ReactNode;
  title: string;
  markerId: string;
  viewBox?: string;
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border bg-muted/40 p-4">
      <svg
        role="img"
        aria-label={title}
        viewBox={viewBox}
        className="h-auto w-full min-w-[560px]"
      >
        <defs>
          <marker
            id={markerId}
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" className="fill-muted-foreground" />
          </marker>
        </defs>
        {children}
      </svg>
    </div>
  );
}
