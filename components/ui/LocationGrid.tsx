import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { cities } from "@/lib/cities";

interface LocationGridProps {
  title?: string;
  subtitle?: string;
  limit?: number;
}

export default function LocationGrid({
  title = "Roofing Services Throughout the Phoenix Metro",
  subtitle = "We serve 30+ cities across the Phoenix metro and a 100-mile radius. Find your city below.",
  limit,
}: LocationGridProps) {
  const displayCities = limit ? cities.slice(0, limit) : cities;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-gray-900 mb-3">{title}</h2>
          {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {displayCities.map((city) => (
            <Link
              key={city.slug}
              href={`/locations/${city.slug}`}
              className="group bg-white hover:bg-[#eef2fb] border border-gray-200 hover:border-[#1a3a8f]/30 rounded-xl p-3 transition-all duration-200 flex items-center gap-2"
            >
              <MapPin className="w-3.5 h-3.5 text-[#1a3a8f] flex-shrink-0" />
              <span className="text-sm font-medium text-gray-700 group-hover:text-[#1a3a8f] transition-colors truncate">
                {city.name}
              </span>
            </Link>
          ))}
        </div>
        {limit && limit < cities.length && (
          <div className="text-center mt-8">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 bg-orange-700 hover:bg-orange-800 text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors"
            >
              View All Service Areas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
