"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Send, CheckCircle, AlertCircle, Shield } from "lucide-react";

const RECAPTCHA_SITE_KEY = "6Le_12ksAAAAABNp1PpYbfXZP_tsb6qRIXA6WRU2";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none text-sm transition-colors bg-white text-gray-900 placeholder:text-gray-400";
const labelClass = "block text-sm font-medium text-gray-700 mb-1";
const errorClass = "text-red-500 text-xs mt-1";
const NON_MARKETING_SMS_CONSENT =
  "I consent to receive non-marketing text messages from XRP Roofing regarding appointment scheduling, project updates, service notifications, technician arrival updates, and job-related communications. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out or HELP for assistance. Consent is optional and is not a condition of purchase or service.";
const MARKETING_SMS_CONSENT =
  "I consent to receive marketing text messages from XRP Roofing, including promotions, discounts, seasonal offers, and special deals. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out or HELP for assistance. Consent is optional and is not a condition of purchase or service.";
const FORMS_VISIBLE = false;

interface LeadFormProps {
  compact?: boolean;
  cityName?: string;
}

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (key: string, opts: { action: string }) => Promise<string>;
    };
  }
}

export default function LeadForm({ compact = false, cityName }: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  if (!FORMS_VISIBLE) return null;

  const loadRecaptcha = () => {
    const id = "recaptcha-script";
    if (document.getElementById(id)) return;
    const script = document.createElement("script");
    script.id = id;
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.head.appendChild(script);
  };

  const validate = (fields: Record<string, string>) => {
    const e: Record<string, string> = {};
    if (!fields.name || fields.name.length < 2) e.name = "Full name is required";
    if (!fields.phone || fields.phone.length < 7) e.phone = "Valid phone number required";
    if (!fields.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = "Valid email required";
    if (!fields.city || fields.city.length < 2) e.city = "City is required";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const raw = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    // Honeypot check
    if (raw.website) return;

    const validationErrors = validate(raw);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitError("");
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(raw),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const result = await res.json().catch(() => null);
        setSubmitError(result?.error || "Something went wrong. Please call us directly or try again.");
        setStatus("error");
      }
    } catch {
      setSubmitError("Something went wrong. Please call us directly or try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-900 mb-2">Request Received!</h3>
        <p className="text-green-700 text-sm">
          Thank you! We&apos;ll contact you within one business hour to schedule your free roof inspection.
        </p>
      </div>
    );
  }

  const field = (name: string) => ({ name, id: name });

  if (compact) {
    return (
      <form ref={formRef} onSubmit={handleSubmit} onFocus={loadRecaptcha} className="space-y-3" noValidate>
        <input type="text" name="website" className="hidden" aria-hidden="true" tabIndex={-1} />

        <label htmlFor="name" className="sr-only">Full Name</label>
        <input
          {...field("name")}
          placeholder="Full Name *"
          className={inputClass}
          autoComplete="name"
        />
        {errors.name && <p className={errorClass}>{errors.name}</p>}

        <label htmlFor="phone" className="sr-only">Phone Number</label>
        <input
          {...field("phone")}
          type="tel"
          placeholder="Phone Number *"
          className={inputClass}
          autoComplete="tel"
        />
        {errors.phone && <p className={errorClass}>{errors.phone}</p>}

        <label htmlFor="email" className="sr-only">Email Address</label>
        <input
          {...field("email")}
          type="email"
          placeholder="Email Address *"
          className={inputClass}
          autoComplete="email"
        />
        {errors.email && <p className={errorClass}>{errors.email}</p>}

        <label htmlFor="city" className="sr-only">Your City</label>
        <input
          {...field("city")}
          placeholder="Your City *"
          className={inputClass}
          defaultValue={cityName || ""}
          autoComplete="address-level2"
        />
        {errors.city && <p className={errorClass}>{errors.city}</p>}

        <div className="space-y-3 rounded-xl border border-gray-200 bg-gray-50 px-3 py-3">
          <div className="flex items-start gap-3">
            <input
              id="nonMarketingSmsConsent-compact"
              name="nonMarketingSmsConsent"
              type="checkbox"
              value="yes"
              className="mt-1 h-4 w-4 flex-shrink-0 accent-orange-500"
            />
            <label htmlFor="nonMarketingSmsConsent-compact" className="cursor-pointer text-xs leading-snug text-gray-700">
              {NON_MARKETING_SMS_CONSENT}
            </label>
          </div>
          <div className="flex items-start gap-3">
            <input
              id="marketingSmsConsent-compact"
              name="marketingSmsConsent"
              type="checkbox"
              value="yes"
              className="mt-1 h-4 w-4 flex-shrink-0 accent-orange-500"
            />
            <label htmlFor="marketingSmsConsent-compact" className="cursor-pointer text-xs leading-snug text-gray-700">
              {MARKETING_SMS_CONSENT}
            </label>
          </div>
          <div className="min-w-0">
            <p className="mt-2 text-[11px] text-gray-500">
              <Link href="/terms" className="font-medium text-orange-600 underline underline-offset-2 hover:text-orange-700">
                Terms
              </Link>
              {" · "}
              <Link href="/privacy-policy" className="font-medium text-orange-600 underline underline-offset-2 hover:text-orange-700">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>

        {status === "error" && (
          <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl p-3">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            {submitError || "Something went wrong. Please call us directly or try again."}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-bold py-3 px-6 rounded-xl text-sm transition-colors"
        >
          <Send className="w-4 h-4" />
          {status === "submitting" ? "Sending..." : "Request Free Inspection"}
        </button>
        <p className="text-center text-xs text-gray-500 flex items-center justify-center gap-1">
          <Shield className="w-3 h-3" /> Protected by reCAPTCHA · No spam
        </p>
      </form>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} onFocus={loadRecaptcha} className="space-y-5" noValidate>
      {/* Honeypot */}
      <input type="text" name="website" className="hidden" aria-hidden="true" tabIndex={-1} />

      {/* Row 1 — Contact info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelClass}>Full Name *</label>
          <input id="name" name="name" placeholder="John Smith" className={inputClass} defaultValue="" />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone Number *</label>
          <input id="phone" name="phone" type="tel" placeholder="(623) 555-0000" className={inputClass} defaultValue="" />
          {errors.phone && <p className={errorClass}>{errors.phone}</p>}
        </div>
      </div>

      {/* Row 2 — Email + City */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className={labelClass}>Email Address *</label>
          <input id="email" name="email" type="email" placeholder="john@example.com" className={inputClass} defaultValue="" />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="city" className={labelClass}>Your City *</label>
          <input id="city" name="city" placeholder="Phoenix, AZ" className={inputClass} defaultValue={cityName || ""} />
          {errors.city && <p className={errorClass}>{errors.city}</p>}
        </div>
      </div>

      {/* Row 5 — Budget + Roof size */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="budget" className={labelClass}>Estimated Budget</label>
          <select id="budget" name="budget" className={inputClass} defaultValue="">
            <option value="">Select budget range (optional)</option>
            <option value="Under $2,000">Under $2,000</option>
            <option value="$2,000 – $5,000">$2,000 – $5,000</option>
            <option value="$5,000 – $10,000">$5,000 – $10,000</option>
            <option value="$10,000 – $20,000">$10,000 – $20,000</option>
            <option value="$20,000+">$20,000+</option>
            <option value="Not Sure">Not Sure</option>
          </select>
        </div>
        <div>
          <label htmlFor="roofSize" className={labelClass}>Approx. Roof Size</label>
          <select id="roofSize" name="roofSize" className={inputClass} defaultValue="">
            <option value="">Approximate sq. ft. (optional)</option>
            <option value="Under 1,000 sq ft">Under 1,000 sq ft</option>
            <option value="1,000 – 2,000 sq ft">1,000 – 2,000 sq ft</option>
            <option value="2,000 – 3,500 sq ft">2,000 – 3,500 sq ft</option>
            <option value="3,500 – 5,000 sq ft">3,500 – 5,000 sq ft</option>
            <option value="5,000+ sq ft">5,000+ sq ft</option>
            <option value="Not Sure">Not Sure</option>
          </select>
        </div>
      </div>

      {/* SMS consent — must match /terms and Twilio campaign */}
      <div className="space-y-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
        <div className="flex items-start gap-3">
          <input
            id="nonMarketingSmsConsent"
            name="nonMarketingSmsConsent"
            type="checkbox"
            value="yes"
            className="mt-1 h-4 w-4 flex-shrink-0 accent-orange-500"
          />
          <label htmlFor="nonMarketingSmsConsent" className="cursor-pointer text-xs leading-relaxed text-gray-700 sm:text-sm">
            {NON_MARKETING_SMS_CONSENT}
          </label>
        </div>
        <div className="flex items-start gap-3">
          <input
            id="marketingSmsConsent"
            name="marketingSmsConsent"
            type="checkbox"
            value="yes"
            className="mt-1 h-4 w-4 flex-shrink-0 accent-orange-500"
          />
          <label htmlFor="marketingSmsConsent" className="cursor-pointer text-xs leading-relaxed text-gray-700 sm:text-sm">
            {MARKETING_SMS_CONSENT}
          </label>
        </div>
        <div className="min-w-0">
          <p className="mt-2 text-xs text-gray-500">
            <Link href="/terms" className="font-medium text-orange-600 underline underline-offset-2 hover:text-orange-700">
              Terms &amp; Conditions
            </Link>
            {" · "}
            <Link href="/privacy-policy" className="font-medium text-orange-600 underline underline-offset-2 hover:text-orange-700">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>Additional Details</label>
        <textarea
          id="message"
          name="message"
          placeholder="Describe your roof issue, materials, age of roof, or anything else that will help us prepare for your inspection..."
          rows={4}
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl p-3">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          {submitError || "Something went wrong. Please call us directly or try again."}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-bold py-4 px-6 rounded-xl text-base transition-colors shadow-lg shadow-orange-200"
      >
        <Send className="w-5 h-5" />
        {status === "submitting" ? "Sending your request..." : "Request Free Roof Inspection"}
      </button>
      <p className="text-center text-xs text-gray-500 flex items-center justify-center gap-1">
        <Shield className="w-3 h-3" /> Protected by Google reCAPTCHA · No spam · We respond within 1 business hour
      </p>
    </form>
  );
}
