import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-foreground hover:opacity-90",
  secondary:
    "border border-border text-foreground hover:bg-muted",
};

const BASE_CLASSES =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  download?: boolean;
  external?: boolean;
  className?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  download = false,
  external = false,
  className = "",
}: ButtonProps) {
  const classes = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`;

  if (download || external || href.startsWith("http")) {
    return (
      <a
        href={href}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer noopener" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
