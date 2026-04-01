import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, assets, message } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Push to Google Sheets via Apps Script (non-blocking)
    const sheetsUrl = process.env.GOOGLE_SHEETS_WEBHOOK;
    if (sheetsUrl) {
      fetch(sheetsUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName, lastName, email, phone, assets, message,
          timestamp: new Date().toISOString(),
          source: "website",
        }),
      }).catch(() => {}); // Fire and forget
    }

    await resend.emails.send({
      from: "Armature Wealth Office <contact@armatureoffice.com>",
      to: ["alex@assiduouscre.com"],
      replyTo: email,
      subject: `New conversation request — ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1c3828;">
          <div style="background-color: #1c3828; padding: 32px 40px; margin-bottom: 0;">
            <p style="color: #b8913a; font-family: Arial, sans-serif; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; margin: 0 0 8px 0; font-weight: 600;">Armature Wealth Office</p>
            <h1 style="color: #f5f0eb; font-size: 22px; font-weight: 500; margin: 0; letter-spacing: -0.01em;">New Conversation Request</h1>
          </div>
          <div style="background-color: #f5f0eb; padding: 40px; border: 1px solid rgba(28,56,40,0.12);">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(28,56,40,0.08); font-family: Arial, sans-serif; font-size: 12px; color: #6a8070; text-transform: uppercase; letter-spacing: 0.1em; width: 140px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(28,56,40,0.08); font-size: 15px; color: #1c3828;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(28,56,40,0.08); font-family: Arial, sans-serif; font-size: 12px; color: #6a8070; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(28,56,40,0.08); font-size: 15px; color: #1c3828;"><a href="mailto:${email}" style="color: #1c3828;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(28,56,40,0.08); font-family: Arial, sans-serif; font-size: 12px; color: #6a8070; text-transform: uppercase; letter-spacing: 0.1em;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(28,56,40,0.08); font-size: 15px; color: #1c3828;">${phone}</td>
              </tr>` : ""}
              ${assets ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(28,56,40,0.08); font-family: Arial, sans-serif; font-size: 12px; color: #6a8070; text-transform: uppercase; letter-spacing: 0.1em;">Assets</td>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(28,56,40,0.08); font-size: 15px; color: #1c3828;">${assets}</td>
              </tr>` : ""}
              ${message ? `
              <tr>
                <td style="padding: 12px 0 4px 0; font-family: Arial, sans-serif; font-size: 12px; color: #6a8070; text-transform: uppercase; letter-spacing: 0.1em; vertical-align: top;">Message</td>
                <td style="padding: 12px 0 4px 0; font-size: 15px; color: #1c3828; line-height: 1.6;">${message}</td>
              </tr>` : ""}
            </table>
          </div>
          <div style="background-color: #ede8e0; padding: 20px 40px; border: 1px solid rgba(28,56,40,0.08); border-top: 0;">
            <p style="font-family: Arial, sans-serif; font-size: 12px; color: #6a8070; margin: 0;">Reply directly to this email to respond to ${firstName}.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
