import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/constants";
import { cities } from "@/lib/cities";
import CTASection from "@/components/ui/CTASection";
import { LocalBusinessSchema } from "@/components/ui/SeoSchema";

export const metadata: Metadata = {
  title: `Roofing Service Areas in Phoenix Metro, AZ | ${SITE_NAME}`,
  description:
    "XRP Roofing serves 30+ cities throughout the Phoenix metro and a 100-mile radius. Find your city and get a free roofing inspection from Arizona's trusted contractor.",
  alternates: { canonical: `${SITE_URL}/locations` },
  openGraph: {
    title: `Phoenix Metro Roofing Service Areas | XRP Roofing`,
    description: "XRP Roofing serves 30+ cities throughout the Phoenix metro and a 100-mile radius. Find your city and get a free roofing inspection from Arizona's trusted contractor.",
    url: `${SITE_URL}/locations`,
    images: [{ url: OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Phoenix Metro Roofing Service Areas | XRP Roofing`,
    description: "XRP Roofing serves 30+ cities throughout the Phoenix metro and a 100-mile radius. Find your city and get a free roofing inspection from Arizona's trusted contractor.",
    images: [OG_IMAGE],
  },
};

const counties = [
  { name: "Maricopa County", cities: cities.filter((c) => c.county === "Maricopa County") },
  { name: "Pinal County", cities: cities.filter((c) => c.county === "Pinal County") },
  { name: "Other Areas", cities: cities.filter((c) => !c.county || (c.county !== "Maricopa County" && c.county !== "Pinal County")) },
];

export default function LocationsPage() {
  return (
    <>
      <LocalBusinessSchema />

      {/* Hero */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-orange-700 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Service Areas
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Roofing Services Throughout the Phoenix Metro &amp; Beyond
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            XRP Roofing serves 30+ cities throughout Maricopa and Pinal counties and a 100-mile radius around Phoenix. Wherever you are in the desert southwest, we&apos;re your local roofing experts.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-orange-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { stat: "30+", label: "Cities Served" },
              { stat: "100mi", label: "Service Radius" },
              { stat: "2 Counties", label: "Maricopa & Pinal" },
              { stat: "Free", label: "Roof Inspections" },
            ].map((item) => (
              <div key={item.stat}>
                <div className="text-3xl font-black">{item.stat}</div>
                <div className="text-orange-100 text-sm font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities by County */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {counties.filter((c) => c.cities.length > 0).map((county) => (
            <div key={county.name} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-5 h-5 text-orange-500" />
                <h2 className="text-2xl font-black text-gray-900">{county.name}</h2>
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2.5 py-1 rounded-full">
                  {county.cities.length} cities
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {county.cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/locations/${city.slug}`}
                    className="group bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-300 rounded-2xl p-5 transition-all duration-200"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                          {city.name}, {city.state}
                        </h3>
                        <p className="text-xs text-gray-500 mt-0.5">{city.county}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-orange-400 flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-2 mb-3">
                      {city.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {city.featuredServices.slice(0, 3).map((slug) => (
                        <span key={slug} className="text-xs bg-white border border-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                          {slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Area Statement */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl font-black text-gray-900 mb-4">
            Don&apos;t See Your City?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            XRP Roofing serves the entire Phoenix metro and a 100-mile radius. If your city isn&apos;t listed, we likely still serve your area. Call us or submit a contact form and we&apos;ll confirm coverage for your location.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-orange-700 hover:bg-orange-800 text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors"
          >
            Check Your Area <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
