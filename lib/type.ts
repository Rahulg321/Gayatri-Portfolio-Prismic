import z from "zod";

export const ContactUsSchema = z.object({
  name: z.string().refine((value) => value.trim() !== "", {
    message: "Name is required",
  }),
  subject: z.string().refine((value) => value.trim() !== "", {
    message: "Subject is required",
  }),
  message: z.string().refine((value) => value.trim() !== "", {
    message: "Message is required",
  }),
  phoneNumber: z.string().refine((value) => {
    const numericValue = parseInt(value, 10);
    return !isNaN(numericValue);
  }, "enter a valid number"),
  email: z.string().email(),
});

export type TContactUsSchema = z.infer<typeof ContactUsSchema>;
