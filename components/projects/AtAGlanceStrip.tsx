import type { Highlight } from "@/lib/types";
import { icons } from "@/components/icons";

export function AtAGlanceStrip({ items }: { items: Highlight[] }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {items.map((item) => {
        const Icon = icons[item.icon];
        return (
          <li
            key={item.label}
            className="flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-2 text-sm font-medium text-foreground"
          >
            <Icon className="h-4 w-4 shrink-0 text-accent" />
            {item.label}
          </li>
        );
      })}
    </ul>
  );
}
