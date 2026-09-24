import type { ReactNode } from "react";

export function Timeline({ children }: { children: ReactNode }) {
  return (
    <ol className="flex flex-col gap-10 border-l border-border pl-6">
      {children}
    </ol>
  );
}

export function TimelineItem({
  title,
  subtitle,
  dateRange,
  children,
}: {
  title: string;
  subtitle: string;
  dateRange: string;
  children?: ReactNode;
}) {
  return (
    <li className="relative">
      <span
        aria-hidden="true"
        className="absolute top-1.5 -left-[1.65rem] h-3 w-3 rounded-full border-2 border-accent bg-background"
      />
      <p className="text-sm font-medium text-muted-foreground">{dateRange}</p>
      <h3 className="mt-1 text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
      {children && <div className="mt-3 text-foreground/90">{children}</div>}
    </li>
  );
}
