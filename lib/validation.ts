import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Enter your name.").max(100, "Keep your name under 100 characters."),
  email: z.string().trim().email("Enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(10, "Say a little more, at least 10 characters.")
    .max(2000, "Keep your message under 2000 characters."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<keyof ContactFormValues, string>>;
};

export const initialContactFormState: ContactFormState = { status: "idle" };
