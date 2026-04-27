import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

export const sendContactMessage = createServerFn({ method: "POST" })
  .validator((data: ContactFormData) => data)
  .handler(async ({ data }): Promise<ContactResponse> => {
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL || "delivered@resend.dev";

    if (!apiKey) {
      return { success: false, message: "Email service not configured." };
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "focusloop Contact <onboarding@resend.dev>",
      to: [contactEmail],
      replyTo: data.email,
      subject: data.subject
        ? `[focusloop Contact] ${data.subject}`
        : `[focusloop Contact] Message from ${data.name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF5A5F;">New Contact Message — focusloop</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 80px;">Name:</td>
              <td style="padding: 8px 0;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            ${data.subject ? `<tr><td style="padding: 8px 0; font-weight: bold;">Subject:</td><td style="padding: 8px 0;">${data.subject}</td></tr>` : ""}
          </table>
          <div style="background: #f9f9f9; border-left: 4px solid #FF5A5F; padding: 16px; border-radius: 4px;">
            <p style="margin: 0; white-space: pre-wrap;">${data.message}</p>
          </div>
          <p style="color: #999; font-size: 12px; margin-top: 24px;">
            Sent via focusloop contact form
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, message: "Failed to send message. Please try again." };
    }

    return { success: true, message: "Message sent! We'll get back to you within 24 hours." };
  });
