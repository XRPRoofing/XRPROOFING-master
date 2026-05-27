import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle, Star } from "lucide-react";
import { PHONE, PHONE_HREF, SITE_NAME, SITE_URL, OG_IMAGE } from "@/lib/constants";
import { services } from "@/lib/services";
import TrustBadges from "@/components/ui/TrustBadges";
import ReviewSection from "@/components/ui/ReviewSection";
import CTASection from "@/components/ui/CTASection";
import ServiceGrid from "@/components/ui/ServiceGrid";
import LocationGrid from "@/components/ui/LocationGrid";
import LeadForm from "@/components/ui/LeadForm";
import { LocalBusinessSchema, FAQSchema, WebSiteSchema } from "@/components/ui/SeoSchema";
import ProjectGallery from "@/components/ui/ProjectGallery";

export const metadata: Metadata = {
  title: `${SITE_NAME} | Roofing Contractor Phoenix, AZ | Repair, Replacement & More`,
  description:
    "XRP Roofing is Phoenix's #1 trusted roofing contractor. Expert roof repair, replacement, tile, shingle, metal, flat & commercial roofing. Licensed & insured. Free inspections. Serving the entire Phoenix metro and 100-mile radius.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `${SITE_NAME} | Roofing Contractor Phoenix, AZ`,
    description: "Phoenix's trusted roofing contractor. Free inspections. Licensed & insured. Serving 30+ cities.",
    images: [{ url: OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Roofing Contractor Phoenix, AZ`,
    description: "Phoenix roofing contractor for repair, replacement, storm damage, tile, shingle, flat, and commercial roofing.",
    images: [OG_IMAGE],
  },
};

const homepageFaqs = [
  { q: "What areas do you serve?", a: "XRP Roofing serves Phoenix and a 100-mile radius including Scottsdale, Mesa, Chandler, Gilbert, Tempe, Glendale, Peoria, Surprise, Goodyear, and 20+ additional cities throughout Maricopa and Pinal counties." },
  { q: "Do you offer free roof inspections?", a: "Yes — we provide free, no-obligation roof inspections for all residential and commercial properties in our service area. Our inspectors get on the roof, document findings with photos, and provide a detailed written estimate with no pressure." },
  { q: "Are you licensed and insured?", a: "Yes. XRP Roofing holds all required Arizona contractor licenses and carries comprehensive general liability and workers' compensation insurance. We provide proof of coverage before any project begins." },
  { q: "How soon can you start my roofing project?", a: "We typically schedule non-emergency work within one to two weeks of estimate approval. Emergency repairs are prioritized and can often be scheduled same-day or next day." },
  { q: "Do you help with insurance claims?", a: "Absolutely. We provide comprehensive storm damage documentation and work directly with insurance adjusters. We can meet your adjuster on-site and advocate for a fair assessment of damage." },
  { q: "What roofing materials do you work with?", a: "We install and repair all major roofing materials including concrete and clay tile, architectural asphalt shingles, standing seam metal, TPO and EPDM membranes, modified bitumen, and elastomeric and silicone roof coatings." },
];

export default function HomePage() {
  const topServices = services.slice(0, 6);

  return (
    <>
      <LocalBusinessSchema />
      <WebSiteSchema />
      <FAQSchema faqs={homepageFaqs} />

      {/* Hero */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/xrp-roofing/2025-01-26.jpg"
            alt="XRP Roofing crew completing a roof replacement in Phoenix Arizona"
            fill
            className="object-cover"
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={50}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f2156]/90 via-[#0f2156]/70 to-[#0f2156]/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <Star className="w-3.5 h-3.5 fill-white" />
              Phoenix&apos;s Trusted Roofing Contractor
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
              Phoenix&apos;s #1 Roofing Contractor —{" "}
              <span className="text-orange-400">Licensed, Insured & Local</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              From emergency repairs to full tile replacements, XRP Roofing protects Phoenix metro homes and businesses from Arizona&apos;s brutal heat, monsoons, and storm damage. Free inspections. Written warranties. Real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call {PHONE}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border-2 border-white/40 hover:border-white text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors backdrop-blur-sm"
              >
                Free Inspection <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {["Licensed & Insured", "Free Estimates", "100-Mile Radius", "Emergency Service"].map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-sm text-gray-200">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-[#0f2156]">
        <div className="container mx-auto px-4">
          <TrustBadges variant="dark" />
        </div>
      </section>

      {/* Services */}
      <ServiceGrid
        title="Complete Roofing Services for Phoenix & Beyond"
        subtitle="From emergency repairs to full commercial installations, our licensed team handles every roofing need across the Phoenix metro."
      />

      {/* About / Why Us */}
      <section className="py-16 bg-[#eef2fb]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#dde6f7] text-[#1a3a8f] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                Why XRP Roofing
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6">
                Built for Arizona&apos;s Extreme Climate
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Arizona roofing is unlike anywhere else in the country. Rooftop surface temperatures exceed 180°F in summer. UV radiation degrades standard materials twice as fast. Monsoon season delivers sudden, violent storms that test every seam and fastener. XRP Roofing was built specifically to handle these conditions.
                </p>
                <p>
                  We specify materials rated for high-temperature desert environments, use installation techniques proven in Arizona conditions, and back every project with written workmanship warranties. Our licensed and insured team has completed hundreds of projects across the Phoenix metro — and we treat every one like our reputation depends on it.
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  "ROC Licensed & fully insured contractor",
                  "Materials selected for Arizona desert performance",
                  "Free inspections — no pressure, no obligation",
                  "Written estimates with no hidden fees",
                  "Insurance claim documentation & assistance",
                  "Financing available for qualifying projects",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors"
                >
                  About XRP Roofing <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border-2 border-gray-300 hover:border-orange-400 text-gray-700 hover:text-orange-600 px-6 py-3 rounded-xl font-bold text-sm transition-colors"
                >
                  Free Inspection
                </Link>
              </div>
            </div>
            <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/xrp-roofing/2025-01-26-2.jpg"
                alt="XRP Roofing team working on a tile roof installation in Phoenix AZ"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inline lead form */}
      <section className="py-16 bg-[#0f2156]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
                Get Your Free Roof Inspection
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Fill out the form and we&apos;ll contact you within one business hour to schedule your free, no-obligation roof inspection. No pressure, no gimmicks.
              </p>
              <ul className="space-y-3">
                {[
                  "Free on-site inspection by a licensed roofing professional",
                  "Detailed written estimate with no hidden fees",
                  "Same-day emergency response available",
                  "Insurance claim assistance included",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Request Your Inspection</h3>
              <LeadForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewSection />

      {/* Project Gallery */}
      <ProjectGallery />

      {/* Top Services Feature */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-3">Featured Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our most requested roofing services for Phoenix metro homeowners and businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/phoenix-foam-roofing"
              className="group relative overflow-hidden rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200"
            >
              <div className="relative h-48">
                <Image
                  src="/images/xrp-roofing/2025-01-26-4.jpg"
                  alt="Foam Roofing and elastomeric coatings in Phoenix AZ by XRP Roofing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg">Foam Roofing</h3>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">SPF roofing and elastomeric coatings for energy-efficient Phoenix flat roofs.</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-orange-500">
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
            {topServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative overflow-hidden rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200"
              >
                <div className="relative h-48">
                  <Image
                    src={service.heroImage}
                    alt={`${service.name} in Phoenix AZ by XRP Roofing`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg">{service.name}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">{service.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-orange-500">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <LocationGrid
        title="Serving 30+ Cities Across the Phoenix Metro"
        subtitle="From the East Valley to the West Valley, from North Scottsdale to Casa Grande — XRP Roofing covers the entire Phoenix region."
        limit={20}
      />

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-gray-900 mb-3">Frequently Asked Questions</h2>
              <p className="text-gray-600">Everything you need to know about working with XRP Roofing.</p>
            </div>
            <div className="space-y-4">
              {homepageFaqs.map((faq, i) => (
                <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-gray-900 hover:text-orange-600 transition-colors list-none">
                    {faq.q}
                    <span className="text-orange-400 group-open:rotate-45 transition-transform text-xl leading-none flex-shrink-0 ml-4">+</span>
                  </summary>
                  <div className="px-5 pb-4 text-gray-600 leading-relaxed text-sm">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </>
  );
}
