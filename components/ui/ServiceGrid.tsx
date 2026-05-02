import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";

interface ServiceGridProps {
  citySlug?: string;
  title?: string;
  subtitle?: string;
}

export default function ServiceGrid({ citySlug, title = "Our Roofing Services", subtitle }: ServiceGridProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-gray-900 mb-3">{title}</h2>
          {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service) => {
            const href = citySlug
              ? `/locations/${citySlug}/${service.slug}`
              : `/services/${service.slug}`;
            return (
              <Link
                key={service.slug}
                href={href}
                className="group bg-gray-50 hover:bg-[#eef2fb] border border-gray-200 hover:border-[#1a3a8f]/30 rounded-2xl p-5 transition-all duration-200 flex flex-col gap-3"
              >
                <span className="text-3xl">{service.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-[#1a3a8f] transition-colors text-sm leading-snug">
                    {service.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                </div>
                <span className="text-xs font-semibold text-orange-500 flex items-center gap-1 mt-auto">
                  Learn More <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
