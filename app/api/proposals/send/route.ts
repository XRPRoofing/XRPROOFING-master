import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  toName: z.string().min(1),
  toEmail: z.string().email(),
  ccRecipients: z.string().optional(),
  subject: z.string().min(1),
  message: z.string().min(1),
  proposalLink: z.string().url(),
});

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function parseCcRecipients(value?: string) {
  if (!value) return [];
  return value.split(",").map((email) => email.trim()).filter(Boolean);
}

export async function POST(req: NextRequest) {
  try {
    const data = schema.parse(await req.json());
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      throw new Error("RESEND_API_KEY not set");
    }

    const safeMessage = escapeHtml(data.message).replaceAll("\n", "<br />");
    const html = `
      <div style="margin:0;background:#f1f5f9;padding:0;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
        <div style="background:#e9eef3;padding:28px 0;text-align:center;">
          <img src="${new URL("/images/logo.jpeg", data.proposalLink).toString()}" alt="XRP Roofing" style="width:150px;height:auto;display:inline-block;background:#fff;" />
        </div>
        <div style="max-width:560px;margin:0 auto;background:#fff;padding:38px 32px 46px;line-height:1.7;font-size:16px;">
          <div>${safeMessage}</div>
          <div style="text-align:center;margin-top:30px;">
            <a href="${data.proposalLink}" style="display:inline-block;border-radius:999px;background:#1768c9;color:#fff;text-decoration:none;padding:12px 25px;font-weight:700;">View Proposal</a>
          </div>
        </div>
      </div>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "XRP Roofing <noreply@xrproofing.com>",
        to: [data.toEmail],
        cc: parseCcRecipients(data.ccRecipients),
        subject: data.subject,
        html,
      }),
    });

    if (!response.ok) {
      throw new Error(await response.text());
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid proposal email data", details: error.issues }, { status: 400 });
    }

    const message = error instanceof Error ? error.message : "Unable to send proposal email";
    return NextResponse.json({ error: message.includes("RESEND_API_KEY") ? "Email service is not configured" : "Unable to send proposal email" }, { status: 500 });
  }
}
