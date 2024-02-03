"use server";
import { Resend } from "resend";

import { TContactUsSchema, ContactUsSchema } from "@/lib/type";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function SubmitContactForm(formData: TContactUsSchema) {
  try {
    //validating data on the server
    const validatedData = ContactUsSchema.safeParse(formData);
    let zodErrors = {};

    if (!validatedData.success) {
      validatedData.error.issues.forEach(
        (issue) =>
          (zodErrors = { ...zodErrors, [issue.path[0]]: issue.message }),
      );
    }

    if (Object.keys(zodErrors).length > 0) {
      return { errors: true, zodErrors };
    }

    await resend.emails.send({
      from: "Gayatri Gupta <onboarding@resend.dev>",
      to: "advocategayatrigupta@gmail.com",
      subject: formData.subject,
      html: `<p><strong>Name:-</strong>${formData.name}</p><p><strong>PhoneNumber:-</strong>${formData.phoneNumber}</p><p><strong>Message:-</strong>${formData.message}</p>`,
      reply_to: formData.email,
    });

    return {
      success: true,
    };
  } catch (error: any) {
    console.log(error);
    return {
      errors: true,
      errorMessage: error.message,
    };
  }
}
