import type { ReactNode } from "react";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const id = slugify(title);
  return (
    <section aria-labelledby={id}>
      <h2 id={id} className="text-xl font-semibold text-foreground">
        {title}
      </h2>
      <div className="mt-3 text-base leading-7 text-foreground/90">
        {children}
      </div>
    </section>
  );
}
