"use server";

import { headers } from "next/headers";
import { contactFormSchema, type ContactFormState } from "@/lib/validation";
import { isRateLimited } from "@/lib/rate-limit";
import { sendContactEmail } from "@/lib/email";

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot: real visitors never see or fill this field. If it's filled,
  // pretend success rather than revealing that a spam check exists.
  const honeypot = formData.get("company");
  if (typeof honeypot === "string" && honeypot.length > 0) {
    return { status: "success", message: "Thanks, your message has been sent." };
  }

  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return {
      status: "error",
      message: "Too many messages sent from this connection. Please try again later.",
    };
  }

  const parsed = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    const fieldErrors: ContactFormState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (key === "name" || key === "email" || key === "message") {
        fieldErrors[key] = issue.message;
      }
    }
    return { status: "error", message: "Please fix the errors below.", fieldErrors };
  }

  try {
    await sendContactEmail(parsed.data);
  } catch {
    return {
      status: "error",
      message:
        "Something went wrong sending your message. Please email me directly instead.",
    };
  }

  return { status: "success", message: "Thanks, your message has been sent." };
}
