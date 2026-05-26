import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Calendar,
  CheckCircle,
  Clock,
  Droplets,
  Factory,
  Flame,
  Gauge,
  Home,
  Phone,
  Shield,
  Sparkles,
  Star,
  Sun,
  ThermometerSun,
  Wrench,
} from "lucide-react";
import { PHONE, PHONE_HREF, SITE_NAME, SITE_URL } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CTASection from "@/components/ui/CTASection";
import FAQSection from "@/components/ui/FAQSection";
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema, ServiceSchema } from "@/components/ui/SeoSchema";

const pagePath = "/phoenix-foam-roofing";
const heroImage = "/images/xrp-roofing/2025-01-26-4.jpg";

export const metadata: Metadata = {
  title: "Phoenix Foam Roofing & Elastomeric Coatings | XRP Roofing",
  description:
    "Professional foam roofing and elastomeric roof coating services in Phoenix, Arizona. Energy-efficient SPF roofing systems for residential and commercial properties.",
  keywords: [
    "Phoenix Foam Roofing",
    "Foam Roofing Contractor Phoenix AZ",
    "Elastomeric Roof Coatings Phoenix",
    "SPF Roofing Systems Arizona",
    "Flat Roof Coatings Phoenix",
    "Commercial Foam Roofing",
  ],
  alternates: { canonical: `${SITE_URL}${pagePath}` },
  openGraph: {
    title: "Phoenix Foam Roofing & Elastomeric Coatings | XRP Roofing",
    description:
      "Energy-efficient SPF foam roofing and elastomeric coating systems for Phoenix residential and commercial flat roofs.",
    url: `${SITE_URL}${pagePath}`,
    images: [{ url: heroImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phoenix Foam Roofing & Elastomeric Coatings | XRP Roofing",
    description:
      "Professional foam roofing and elastomeric roof coating services in Phoenix, Arizona.",
    images: [heroImage],
  },
};

const trustItems = [
  { label: "Licensed Arizona Roofing Contractor", icon: BadgeCheck },
  { label: "Free Inspections", icon: Calendar },
  { label: "Fast Response", icon: Clock },
  { label: "Commercial & Residential", icon: Building2 },
  { label: "Energy Efficient Roofing", icon: Gauge },
];

const foamReasons = [
  { title: "Reflects Heat", text: "Bright coating surfaces reduce heat absorption on Phoenix flat roofs.", icon: Sun },
  { title: "Reduces Cooling Costs", text: "SPF and reflective coatings can help reduce rooftop heat transfer.", icon: ThermometerSun },
  { title: "Waterproof Protection", text: "A seamless foam system helps protect against monsoon rain and ponding-prone areas.", icon: Droplets },
  { title: "UV Resistant", text: "Elastomeric top coats shield the roof surface from Arizona UV exposure.", icon: Shield },
  { title: "Seamless Roofing System", text: "Spray foam conforms around penetrations, drains, curbs, and rooftop equipment.", icon: Sparkles },
  { title: "Ideal for Flat Roofs", text: "Foam and coating systems are well suited for low-slope commercial and residential roofs.", icon: Home },
];

const services = [
  { title: "SPF Foam Roofing", text: "Spray polyurethane foam roof systems built for insulation, slope correction, and seamless protection.", icon: Factory },
  { title: "Elastomeric Roof Coatings", text: "Reflective coating applications that restore weather protection and improve roof performance.", icon: Shield },
  { title: "Silicone Roof Coatings", text: "High-performance coating options for flat roofs with ponding water concerns.", icon: Droplets },
  { title: "Flat Roof Repair", text: "Leak diagnosis, surface prep, flashing reinforcement, and repair before coating work begins.", icon: Wrench },
  { title: "Commercial Foam Roofing", text: "Foam and coating systems for offices, warehouses, retail centers, and multifamily buildings.", icon: Building2 },
  { title: "Foam Roof Recoating", text: "Maintenance recoats that renew reflectivity and extend foam roof service life.", icon: Sparkles },
];

const benefits = [
  "Energy savings from reflective roof surfaces",
  "Long roof lifespan with proper maintenance",
  "Seamless waterproof barrier over low-slope areas",
  "Reflective surface designed for intense Arizona sun",
  "Low maintenance compared with aging flat roof systems",
  "Excellent fit for Phoenix residential and commercial properties",
];

const galleryImages = [
  { src: "/images/xrp-roofing/2025-01-26-4.jpg", alt: "Reflective flat roof coating completed by XRP Roofing in Phoenix AZ" },
  { src: "/images/xrp-roofing/2024-09-18-1.jpg", alt: "Commercial flat roof prepared for foam roofing and coating in Arizona" },
  { src: "/images/xrp-roofing/2024-07-05-1.jpg", alt: "Phoenix low slope roof repaired before elastomeric coating application" },
  { src: "/images/xrp-roofing/project-gallery-8.jpg", alt: "XRP Roofing project showing flat roof transformation in Phoenix" },
];

const processSteps = [
  { title: "Free Roof Inspection", text: "We inspect the roof surface, drainage, penetrations, existing coating, and leak-prone areas." },
  { title: "Roof Evaluation", text: "You receive a clear recommendation for foam, elastomeric coating, repair, or replacement." },
  { title: "Foam/Coating Application", text: "Our team prepares the surface, reinforces details, and applies the specified roofing system." },
  { title: "Final Inspection", text: "We verify coverage, seams, details, and cleanup before closing out the project." },
];

const xrpReasons = [
  "Experienced roofing team",
  "Honest inspections",
  "High-quality materials",
  "Commercial & residential service",
  "Customer-focused communication",
  "Arizona roofing experts",
];

const faqs = [
  {
    q: "What is foam roofing?",
    a: "Foam roofing, also called SPF roofing, uses spray polyurethane foam applied to a roof surface to create a seamless insulated layer. It is typically protected with an elastomeric or silicone coating for UV and weather resistance.",
  },
  {
    q: "How long does foam roofing last?",
    a: "A properly installed and maintained foam roof can last for decades with scheduled inspections and recoating. The exact lifespan depends on surface preparation, coating thickness, drainage, roof traffic, and maintenance.",
  },
  {
    q: "Is elastomeric coating good for Arizona?",
    a: "Yes. Elastomeric roof coatings are commonly used in Arizona because they create a reflective surface that helps resist UV exposure and reduce rooftop heat absorption on low-slope roofs.",
  },
  {
    q: "Can foam roofing stop leaks?",
    a: "Foam roofing can help stop leaks when the roof is properly inspected, repaired, prepared, and coated. XRP Roofing evaluates the existing roof first so hidden moisture, failed seams, or drainage issues are addressed before application.",
  },
  {
    q: "Is SPF roofing energy efficient?",
    a: "Yes. SPF roofing adds insulation value and is usually finished with a reflective coating, making it a strong option for reducing heat transfer on Phoenix flat and low-slope roofs.",
  },
];

const breadcrumbItems = [
  { label: "Services", href: "/services" },
  { label: "Phoenix Foam Roofing" },
];

export default function PhoenixFoamRoofingPage() {
  return (
    <>
      <LocalBusinessSchema />
      <ServiceSchema
        serviceName="Foam Roofing & Elastomeric Coatings"
        serviceSlug="phoenix-foam-roofing"
        description="Professional foam roofing, SPF roofing, elastomeric coatings, and flat roof coating services in Phoenix, Arizona."
        pagePath={pagePath}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumbs items={breadcrumbItems} />

      <section className="relative min-h-[620px] lg:min-h-[720px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Phoenix foam roofing and reflective elastomeric roof coating by XRP Roofing"
            fill
            className="object-cover"
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={60}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/95 via-[#0B1F3A]/78 to-[#0B1F3A]/35" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-3xl animate-in fade-in duration-700">
            <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <Flame className="w-4 h-4" />
              Phoenix SPF Roofing & Coatings
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
              Phoenix Foam Roofing &amp; Elastomeric Coating Experts
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              Protect your Arizona property with energy-efficient foam roofing and seamless elastomeric coating systems built for extreme desert heat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:scale-105"
              >
                Get Free Inspection <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white text-white hover:text-[#0B1F3A] border-2 border-white/40 hover:border-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 backdrop-blur-sm"
              >
                Request Estimate <Phone className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {["Licensed & Insured", "ROC #350898", "Residential & Commercial"].map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm text-gray-100">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-3 rounded-2xl bg-[#F5F7FA] px-4 py-4 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-orange-500 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-bold text-gray-900 leading-snug">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Built for Desert Heat
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-4">Why Foam Roofing Is Perfect For Arizona</h2>
            <p className="text-gray-600 leading-relaxed">
              Phoenix flat roofs need systems that resist UV exposure, reduce heat transfer, and protect against sudden monsoon rain.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {foamReasons.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-4">Foam Roofing &amp; Coating Services</h2>
            <p className="text-gray-600 leading-relaxed">
              Complete SPF foam roofing, flat roof coating, restoration, repair, and maintenance options for Phoenix properties.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="group rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-[#F5F7FA] p-6 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-1">
                  <Icon className="w-9 h-9 text-orange-500 mb-5" />
                  <h3 className="text-xl font-black text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/xrp-roofing/2024-09-18-1.jpg"
                alt="Commercial flat roof in Phoenix prepared for SPF foam roofing and roof coating"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="inline-block bg-[#dde6f7] text-[#1a3a8f] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                Roof Performance Benefits
              </div>
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6">Energy-Efficient Protection For Phoenix Flat Roofs</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Foam roofing and elastomeric coating systems help restore aging low-slope roofs, improve reflectivity, and create a seamless barrier over areas that are vulnerable to Arizona heat and monsoon storms.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/services/roof-coatings" className="inline-flex items-center justify-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700">
                  Learn about roof coatings <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/services/flat-roofing" className="inline-flex items-center justify-center gap-2 text-sm font-bold text-[#1a3a8f] hover:text-orange-600">
                  Explore flat roofing <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-4">Foam Roofing Project Gallery</h2>
            <p className="text-gray-600 leading-relaxed">
              Examples of flat roof restoration, reflective roof surfaces, commercial roofing, and coating-ready roof systems.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {galleryImages.map((image) => (
              <div key={image.src} className="group relative h-72 overflow-hidden rounded-2xl shadow-sm border border-gray-100">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/70 to-transparent opacity-80" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-4">Our Foam Roofing Process</h2>
            <p className="text-gray-600 leading-relaxed">
              A clear, inspection-first process designed to protect your property and prevent coating failures.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#0B1F3A] text-white font-black">
                  {index + 1}
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#0B1F3A] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-orange-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
                <Star className="w-4 h-4 fill-orange-300" />
                Why Choose XRP Roofing
              </div>
              <h2 className="text-3xl lg:text-5xl font-black mb-6">Arizona Roofing Experts For Foam &amp; Coating Systems</h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                XRP Roofing brings professional service, honest recommendations, and Arizona-specific roofing knowledge to every foam roofing and coating project.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {xrpReasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-2 text-sm text-gray-200">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "500+", label: "Projects Completed" },
                { value: "30+", label: "Service Areas" },
                { value: "5.0", label: "Customer Satisfaction" },
                { value: "ROC", label: "Licensed Contractor" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white/10 border border-white/10 p-6 text-center backdrop-blur-sm">
                  <div className="text-3xl lg:text-4xl font-black text-orange-400 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-300 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        faqs={faqs}
        title="Phoenix Foam Roofing FAQ"
        subtitle="Answers to common questions about SPF roofing, elastomeric coatings, and flat roof coatings in Arizona."
      />

      <CTASection
        title="Protect Your Roof Before Arizona Heat Causes Damage"
        subtitle="Schedule a free Phoenix foam roofing and elastomeric coating inspection with XRP Roofing today."
        variant="dark"
      />
    </>
  );
}
