"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/contact/actions";
import { initialContactFormState } from "@/lib/validation";

const inputClasses =
  "mt-1 block w-full rounded-md border border-border bg-background px-3 py-2 text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialContactFormState
  );

  if (state.status === "success") {
    return (
      <p
        role="status"
        className="rounded-md border border-border bg-muted px-4 py-3 text-foreground"
      >
        {state.message}
      </p>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5" noValidate>
      {/* Honeypot: hidden from sighted users and unreachable by keyboard,
          left open for bots. */}
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          aria-describedby={state.fieldErrors?.name ? "name-error" : undefined}
          aria-invalid={state.fieldErrors?.name ? true : undefined}
          className={inputClasses}
        />
        {state.fieldErrors?.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
            {state.fieldErrors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          aria-describedby={state.fieldErrors?.email ? "email-error" : undefined}
          aria-invalid={state.fieldErrors?.email ? true : undefined}
          className={inputClasses}
        />
        {state.fieldErrors?.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
            {state.fieldErrors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          aria-describedby={state.fieldErrors?.message ? "message-error" : undefined}
          aria-invalid={state.fieldErrors?.message ? true : undefined}
          className={inputClasses}
        />
        {state.fieldErrors?.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600 dark:text-red-400">
            {state.fieldErrors.message}
          </p>
        )}
      </div>

      {state.status === "error" && state.message && (
        <p role="alert" className="text-sm text-red-600 dark:text-red-400">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:opacity-90 disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
