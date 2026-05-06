import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { PHONE, PHONE_HREF, SITE_NAME, SITE_URL } from "@/lib/constants";
import CTASection from "@/components/ui/CTASection";
import TrustBadges from "@/components/ui/TrustBadges";
import { LocalBusinessSchema } from "@/components/ui/SeoSchema";

export const metadata: Metadata = {
  title: "About XRP Roofing | Licensed Roofing Contractor in Phoenix, AZ",
  description:
    "Learn about XRP Roofing — Phoenix's trusted, locally owned roofing contractor. Licensed, insured, and built for Arizona's extreme climate. Serving the Phoenix metro and 100-mile radius.",
  alternates: { canonical: `${SITE_URL}/about` },
};

const values = [
  { title: "Honesty First", description: "We never recommend more work than your roof actually needs. Our inspections are thorough, our estimates are itemized, and our pricing is transparent." },
  { title: "Arizona Expertise", description: "We've spent years studying what Arizona's climate does to roofing systems. We specify materials and techniques proven in the Sonoran Desert — not generic national standards." },
  { title: "Quality Workmanship", description: "Every project is completed by experienced Arizona roofing professionals. Not subcontracted. Not day labor. Our crew leads have years of desert roofing experience." },
  { title: "Responsive Service", description: "From your first call to the final walkthrough, we stay in communication. Real people answer our phones. We show up when scheduled and finish when we say we will." },
];

const team = [
  { name: "Operations Team", role: "Field Supervision & Quality Control", description: "Our field supervisors oversee every project from start to finish, ensuring materials are installed correctly and the job site is left clean." },
  { name: "Inspection Team", role: "Licensed Roof Inspectors", description: "Our inspectors are licensed professionals who document findings thoroughly and explain everything in plain language — no pressure, no upsell." },
  { name: "Customer Service", role: "Project Coordination", description: "Our office team handles scheduling, insurance coordination, permits, and keeps you informed throughout your project." },
];

export default function AboutPage() {
  return (
    <>
      <LocalBusinessSchema />

      {/* Hero */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/images/xrp-roofing/2025-01-26-3.jpg"
            alt="XRP Roofing team working on a project in Phoenix AZ"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            About Us
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Phoenix&apos;s Trusted Roofing Contractor
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            XRP Roofing is a locally owned and operated roofing contractor serving Phoenix and the entire 100-mile metro radius. We were built for Arizona&apos;s extreme climate — and we prove it every day.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  XRP Roofing was founded with a simple mission: bring genuine roofing expertise and honest business practices to the Phoenix market. We&apos;ve seen what happens when homeowners hire contractors who don&apos;t understand Arizona&apos;s climate — repairs that fail within a season, materials that degrade prematurely, and estimates that balloon with surprise charges.
                </p>
                <p>
                  We built XRP Roofing to be different. Every member of our team has been trained specifically for Arizona conditions. We source materials from manufacturers with proven desert performance records. We provide detailed written estimates before any work begins. And we back everything with written workmanship warranties.
                </p>
                <p>
                  Today, XRP Roofing serves homeowners, property managers, and business owners throughout the Phoenix metro and a 100-mile radius — from Wickenburg to Payson, from Buckeye to Apache Junction. Our growth has been built entirely on referrals and repeat business, which tells us everything we need to know about whether we&apos;re doing our job right.
                </p>
              </div>
            </div>
            <div className="relative h-80 lg:h-[450px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/xrp-roofing/2024-04-29.jpg"
                alt="XRP Roofing crew on a roofing project in Phoenix Arizona"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-3">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything we do at XRP Roofing is guided by these principles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <TrustBadges variant="dark" />
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-3">The XRP Roofing Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team is made up of experienced Arizona roofing professionals — not a revolving door of subcontractors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-orange-500">{member.name[0]}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-orange-500 font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-72 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/xrp-roofing/2024-07-05.jpg"
                  alt="Completed tile roofing installation by XRP Roofing in Phoenix AZ"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-6">
                  Why Phoenix Homeowners Choose XRP Roofing
                </h2>
                <ul className="space-y-4">
                  {[
                    "Licensed by the Arizona Registrar of Contractors (ROC)",
                    "Comprehensive general liability insurance",
                    "Workers' compensation coverage on every job",
                    "Free, no-obligation inspections and estimates",
                    "Written workmanship warranties",
                    "Materials specifically rated for Arizona's desert climate",
                    "Insurance claim documentation and adjuster coordination",
                    "Financing available for qualifying projects",
                    "Serving 30+ cities across the Phoenix metro and beyond",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call {PHONE}
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-orange-400 text-gray-700 hover:text-orange-600 px-6 py-3 rounded-xl font-bold text-sm transition-colors"
                  >
                    Free Inspection <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
