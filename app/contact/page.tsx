import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { OG_IMAGE, PHONE, PHONE_HREF, EMAIL, ADDRESS, SITE_NAME, SITE_URL } from "@/lib/constants";
import LeadForm from "@/components/ui/LeadForm";
import { LocalBusinessSchema } from "@/components/ui/SeoSchema";

export const metadata: Metadata = {
  title: "Contact XRP Roofing | Free Roof Inspection in Phoenix, AZ",
  description:
    "Contact XRP Roofing for a free roof inspection and estimate in Phoenix, AZ. Call us or fill out the form. We respond within 1 business hour. Serving the entire Phoenix metro.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: `Contact XRP Roofing | Free Roof Inspection`,
    description: "Contact XRP Roofing for a free roof inspection and estimate in Phoenix, AZ. Call us or fill out the form. We respond within 1 business hour. Serving the entire Phoenix metro.",
    url: `${SITE_URL}/contact`,
    images: [{ url: OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact XRP Roofing | Free Roof Inspection`,
    description: "Contact XRP Roofing for a free roof inspection and estimate in Phoenix, AZ. Call us or fill out the form. We respond within 1 business hour. Serving the entire Phoenix metro.",
    images: [OG_IMAGE],
  },
};

export default function ContactPage() {
  return (
    <>
      <LocalBusinessSchema />

      {/* Hero */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-orange-700 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Free Inspection
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Contact {SITE_NAME}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready for a free roof inspection? Fill out the form below or call us directly. We respond within one business hour.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-black text-gray-900 mb-2">Request a Free Inspection</h2>
                <p className="text-gray-600 mb-8 text-sm">
                  Describe your roofing needs and we&apos;ll contact you within one business hour to schedule your free, no-obligation inspection.
                </p>
                <LeadForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-orange-500" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-0.5">Phone</div>
                      <a href={PHONE_HREF} className="font-bold text-gray-900 hover:text-orange-500 transition-colors">
                        {PHONE}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-orange-500" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-0.5">Email</div>
                      <a href={`mailto:${EMAIL}`} className="text-gray-700 hover:text-orange-500 transition-colors text-sm">
                        {EMAIL}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-orange-500" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-0.5">Address</div>
                      <address className="not-italic text-gray-700 text-sm leading-relaxed">{ADDRESS}</address>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-orange-500" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-0.5">Hours</div>
                      <div className="text-gray-700 text-sm leading-relaxed">
                        Mon–Fri: 7:00 AM – 6:00 PM<br />
                        Saturday: 8:00 AM – 4:00 PM<br />
                        <span className="text-orange-700 font-semibold">Emergency: 24/7</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-700 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Emergency Roof Repair?</h3>
                <p className="text-orange-100 text-sm mb-4 leading-relaxed">
                  Active leak or storm damage? We respond 24/7 for emergencies. Call now for immediate assistance.
                </p>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 bg-white text-orange-700 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-orange-50 transition-colors w-full justify-center"
                >
                  <Phone className="w-4 h-4" />
                  Call Now: {PHONE}
                </a>
              </div>

              <div className="bg-gray-800 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-3">Service Area</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  We serve Phoenix and a 100-mile radius including:
                </p>
                <div className="grid grid-cols-2 gap-1 text-xs text-gray-400">
                  {["Scottsdale", "Mesa", "Chandler", "Gilbert", "Tempe", "Glendale", "Peoria", "Surprise", "Goodyear", "Buckeye"].map((city) => (
                    <span key={city} className="flex items-center gap-1">
                      <span className="text-orange-400">•</span> {city}
                    </span>
                  ))}
                </div>
                <p className="text-orange-700 text-xs font-semibold mt-3">+ 20 more cities →</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
