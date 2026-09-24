import { icons } from "@/components/icons";
import type { IconKey } from "@/lib/types";

export function IconBadge({
  icon,
  className = "",
}: {
  icon: IconKey;
  className?: string;
}) {
  const Icon = icons[icon];
  return (
    <span
      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent ${className}`}
    >
      <Icon className="h-5 w-5" />
    </span>
  );
}
