import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(7),
  email: z.string().email(),
  city: z.string().min(2),
  budget: z.string().optional(),
  roofSize: z.string().optional(),
  nonMarketingSmsConsent: z.string().optional(),
  marketingSmsConsent: z.string().optional(),
  message: z.string().optional(),
  website: z.string().max(0).optional(),
  recaptchaToken: z.string().optional(),
});

async function sendLeadEmail(
  apiKey: string,
  toEmail: string,
  data: z.infer<typeof schema>
) {
  const emailBody = `
New Roofing Lead from XRP Roofing Website

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
City: ${data.city}
Estimated Budget: ${data.budget || "Not provided"}
Approx. Roof Size: ${data.roofSize || "Not provided"}
Non-Marketing SMS Consent: ${data.nonMarketingSmsConsent === "yes" ? "Yes" : "No"}
Marketing SMS Consent: ${data.marketingSmsConsent === "yes" ? "Yes" : "No"}
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
      subject: `New Roofing Lead from ${data.city}`,
      text: emailBody,
      reply_to: data.email,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Resend error: ${err}`);
  }
}

function getSafeErrorMessage(err: unknown) {
  const message = err instanceof Error ? err.message : "";

  if (message.includes("RESEND_API_KEY")) {
    return "Email service is not configured";
  }

  if (message.includes("Resend error")) {
    return "Email service rejected the message. Please check Resend domain verification and API key.";
  }

  return "Internal server error";
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // Bot detection
    if (data.website) {
      return NextResponse.json({ ok: true });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL || "info@xrproofing.com";

    if (!apiKey) {
      throw new Error("RESEND_API_KEY not set");
    }

    await sendLeadEmail(apiKey, toEmail, data);

    return NextResponse.json({ ok: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data", details: err.issues }, { status: 400 });
    }
    console.error("Contact route error:", err);
    return NextResponse.json({ error: getSafeErrorMessage(err) }, { status: 500 });
  }
}
