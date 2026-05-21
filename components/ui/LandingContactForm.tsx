"use client";

import { useRef, useState } from "react";
import { ArrowRight, Mail, MapPin, MessageSquare, Phone, User } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export default function LandingContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = formRef.current;
    if (!form) return;

    const raw = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const messageParts = [raw.message, raw.address ? `Property Address: ${raw.address}` : ""].filter(Boolean);

    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: raw.name,
          phone: raw.phone,
          email: raw.email,
          city: "Phoenix",
          message: messageParts.join("\n\n"),
        }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error || "Something went wrong. Please call us directly or try again.");
      }

      form.reset();
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please call us directly or try again.");
      setStatus("error");
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="rounded-[2.5rem] bg-white p-6 text-slate-950 shadow-2xl shadow-black/25 sm:p-8 lg:p-10">
      <div className="mb-6 rounded-3xl bg-blue-50 p-5 text-center">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">Claim your inspection</p>
        <p className="mt-1 text-2xl font-black tracking-[-0.04em]">No pressure. Clear answers. Fast response.</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block"><span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700"><User className="h-4 w-4 text-blue-700" />Full Name</span><input name="name" type="text" autoComplete="name" required placeholder="Your full name" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100" /></label>
        <label className="block"><span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700"><Phone className="h-4 w-4 text-blue-700" />Phone Number</span><input name="phone" type="tel" autoComplete="tel" required placeholder="Your phone number" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100" /></label>
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="block"><span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700"><Mail className="h-4 w-4 text-blue-700" />Email</span><input name="email" type="email" autoComplete="email" required placeholder="you@example.com" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100" /></label>
        <label className="block"><span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700"><MapPin className="h-4 w-4 text-blue-700" />Property Address</span><input name="address" type="text" autoComplete="street-address" placeholder="Property address" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100" /></label>
      </div>
      <label className="mt-5 block"><span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700"><MessageSquare className="h-4 w-4 text-blue-700" />Message</span><textarea name="message" rows={5} placeholder="Tell us about your roofing needs." className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100" /></label>
      {status === "success" && <p className="mt-4 rounded-2xl bg-green-50 px-4 py-3 text-sm font-bold text-green-700">Request received. We&apos;ll contact you shortly.</p>}
      {status === "error" && <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm font-bold text-red-700">{error}</p>}
      <button type="submit" disabled={status === "submitting"} className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-700 px-8 py-5 text-lg font-black text-white shadow-2xl shadow-blue-700/25 transition-all hover:-translate-y-1 hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-400">{status === "submitting" ? "Sending..." : "Get Free Estimate"} <ArrowRight className="h-5 w-5" /></button>
    </form>
  );
}
