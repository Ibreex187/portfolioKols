import { Resend } from "resend";
import { siteConfig } from "@/content/site-config";
import type { ContactFormValues } from "@/lib/validation";

export async function sendContactEmail({ name, email, message }: ContactFormValues) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  // TODO: verify a custom domain in Resend and switch the "from" address to
  // it if you want branded emails; the sandbox sender works for delivery to
  // your own inbox in the meantime.
  await resend.emails.send({
    from: "Portfolio contact form <onboarding@resend.dev>",
    to: siteConfig.email,
    replyTo: email,
    subject: `New message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });
}
