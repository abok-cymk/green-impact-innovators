import { z } from 'zod';

// Validate the email address provided for updates
export const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please enter your email address." })
    .email({ message: "Please provide a valid email address." }),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;