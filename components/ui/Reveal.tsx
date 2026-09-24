"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

// Starts identical on server and client (visible=false) so hydration never
// mismatches; the flip to visible happens in an effect, after hydration.
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal
      className={`motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
        visible
          ? "opacity-100 translate-y-0"
          : "motion-safe:opacity-0 motion-safe:translate-y-3"
      } ${className}`}
    >
      {children}
    </div>
  );
}
