"use client";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // localStorage unavailable (e.g. private browsing) — theme still applies for this load.
  }
}

const BUTTON_CLASSES =
  "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

// Renders both buttons unconditionally so server and client output are always
// identical (no hydration mismatch is possible). Which one is visible is
// decided purely by CSS keyed off the <html data-theme> attribute — the same
// attribute the pre-hydration inline script in the root layout sets — so the
// correct icon shows immediately, before React even runs.
export function ThemeToggle() {
  return (
    <>
      <button
        type="button"
        onClick={() => applyTheme("dark")}
        aria-label="Switch to dark theme"
        className={`theme-toggle-light ${BUTTON_CLASSES}`}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z"
          />
        </svg>
      </button>

      <button
        type="button"
        onClick={() => applyTheme("light")}
        aria-label="Switch to light theme"
        className={`theme-toggle-dark ${BUTTON_CLASSES}`}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          className="h-5 w-5"
        >
          <circle cx="12" cy="12" r="4" />
          <path
            strokeLinecap="round"
            d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
          />
        </svg>
      </button>
    </>
  );
}
