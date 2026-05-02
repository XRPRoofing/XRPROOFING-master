import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(7),
  email: z.string().email(),
  city: z.string().min(2),
  serviceNeeded: z.string().min(1),
  message: z.string().optional(),
  honeypot: z.string().max(0).optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // Bot detection
    if (data.honeypot) {
      return NextResponse.json({ ok: true });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL || "info@xrproofing.com";

    if (!apiKey) {
      console.error("RESEND_API_KEY not set");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const emailBody = `
New Roofing Lead from XRP Roofing Website

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
City: ${data.city}
Service Needed: ${data.serviceNeeded}
Message: ${data.message || "None provided"}

---
Submitted via xrproofing.com
    `.trim();

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "XRP Roofing Website <noreply@xrproofing.com>",
        to: [toEmail],
        subject: `New Roofing Lead: ${data.serviceNeeded} in ${data.city}`,
        text: emailBody,
        reply_to: data.email,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Email delivery failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data", details: err.issues }, { status: 400 });
    }
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
