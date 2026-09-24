export function ImagePlaceholder({
  className = "",
  iconClassName = "h-8 w-8",
}: {
  className?: string;
  iconClassName?: string;
}) {
  return (
    <div className={`flex items-center justify-center text-accent/60 ${className}`}>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className={iconClassName}
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="9" cy="10" r="1.5" />
        <path d="m5 17 4-4 3 3 4-5 3 3" />
      </svg>
    </div>
  );
}
