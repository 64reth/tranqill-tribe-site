import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, type, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const from = process.env.CONTACT_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL;
    const enquiryType = type || "General";

    if (!from || !to || !process.env.RESEND_API_KEY) {
      throw new Error("Missing contact email configuration.");
    }

    const { error } = await resend.emails.send({
      from,
      to,
      subject: `Tranqill Tribe enquiry: ${enquiryType}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Type: ${enquiryType}

Message:
${message}
      `,
    });

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Message failed to send." },
      { status: 500 }
    );
  }
}
