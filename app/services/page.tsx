import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/constants";
import { services } from "@/lib/services";
import CTASection from "@/components/ui/CTASection";
import { LocalBusinessSchema } from "@/components/ui/SeoSchema";

export const metadata: Metadata = {
  title: `Roofing Services in Phoenix, AZ | ${SITE_NAME}`,
  description:
    "Complete roofing services in Phoenix AZ: roof repair, replacement, tile, shingle, metal, TPO, flat, commercial, coatings, and emergency service. Licensed & insured. Free inspections.",
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: `Roofing Services in Phoenix, AZ | XRP Roofing`,
    description: "Complete roofing services in Phoenix AZ: roof repair, replacement, tile, shingle, metal, TPO, flat, commercial, coatings, and emergency service. Licensed & insured. Free inspections.",
    url: `${SITE_URL}/services`,
    images: [{ url: OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Roofing Services in Phoenix, AZ | XRP Roofing`,
    description: "Complete roofing services in Phoenix AZ: roof repair, replacement, tile, shingle, metal, TPO, flat, commercial, coatings, and emergency service. Licensed & insured. Free inspections.",
    images: [OG_IMAGE],
  },
};

export default function ServicesPage() {
  return (
    <>
      <LocalBusinessSchema />

      {/* Hero */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            All Services
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Complete Roofing Services for Phoenix &amp; the 100-Mile Radius
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From emergency repairs to full commercial replacements, XRP Roofing handles every roofing need throughout the Phoenix metro area. Licensed, insured, and built for Arizona&apos;s extreme climate.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white border border-gray-200 hover:border-orange-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
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
                  <div className="absolute top-4 left-4">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="text-white font-bold text-lg">{service.name}</h2>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-orange-500 group-hover:text-orange-600 transition-colors">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            Why Choose XRP Roofing for Every Service?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Every service we provide is delivered with the same commitment: honest assessments, proven Arizona materials, and workmanship backed by written warranties.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: "Licensed & Insured", icon: "🛡️" },
              { label: "Free Inspections", icon: "🔍" },
              { label: "Arizona Specialists", icon: "🌵" },
              { label: "Written Warranty", icon: "📋" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="font-bold text-gray-900 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
