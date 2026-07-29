import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, ArrowRight, MapPin } from "lucide-react";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { cities, getCity, getNearbyCities } from "@/lib/cities";
import { services, getService } from "@/lib/services";
import { cityPageContent } from "@/lib/contentEngine";
import { getCityImage } from "@/lib/images";
import CTASection from "@/components/ui/CTASection";
import FAQSection from "@/components/ui/FAQSection";
import LeadForm from "@/components/ui/LeadForm";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ReviewSection from "@/components/ui/ReviewSection";
import { LocalBusinessSchema, FAQSchema, BreadcrumbSchema } from "@/components/ui/SeoSchema";

export async function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) return {};

  const primaryServices = city.featuredServices
    .map((slug) => getService(slug)?.shortName)
    .filter(Boolean)
    .slice(0, 3)
    .join(", ");
  const title = `Roofing Company in ${city.name}, AZ | ${primaryServices} | ${SITE_NAME}`;
  const description = `Licensed roofing contractor in ${city.name}, AZ for ${primaryServices.toLowerCase()}. Local roof inspections, repair, replacement, storm damage, and HOA-ready roofing solutions.`;
  const canonical = `${SITE_URL}/locations/${citySlug}`;
  const image = getCityImage(citySlug).src;

  return {
    title,
    description,
    keywords: [
      `roofing contractor ${city.name} AZ`,
      `roof repair ${city.name}`,
      `roof replacement ${city.name} Arizona`,
      `${city.name} roofing company`,
      `tile roofing ${city.name}`,
      `licensed roofer ${city.name} AZ`,
    ],
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const city = getCity(citySlug);
  if (!city) notFound();

  const content = cityPageContent(city);
  const nearbyCities = getNearbyCities(citySlug);
  const cityImage = getCityImage(citySlug);
  const featuredServiceObjects = city.featuredServices
    .map((s) => getService(s))
    .filter(Boolean) as typeof services;

  const breadcrumbItems = [
    { label: "Locations", href: "/locations" },
    { label: `${city.name}, ${city.state}` },
  ];

  return (
    <>
      <LocalBusinessSchema cityName={city.name} citySlug={citySlug} />
      <FAQSchema faqs={content.faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero */}
      <section className="relative min-h-[450px] lg:min-h-[550px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={cityImage.src}
            alt={`XRP Roofing serving ${city.name}, AZ — roof repair and replacement`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/30" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-orange-700 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
              <MapPin className="w-3.5 h-3.5" />
              {city.name}, {city.state}
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
              Roofing Company in {city.name}, AZ — Licensed &amp; Trusted
            </h1>
            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
              {city.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-orange-700 hover:bg-orange-800 text-white px-7 py-3.5 rounded-xl font-bold transition-colors"
              >
                Free Inspection in {city.name} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border-2 border-white/40 text-white px-7 py-3.5 rounded-xl font-bold transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-4">
                  Your Trusted Roofing Contractor in {city.name}, AZ
                </h2>
                <p className="text-gray-700 leading-relaxed">{content.intro}</p>
              </div>

              {/* Local Challenges */}
              <div>
                <h2 className="text-xl font-black text-gray-900 mb-3">
                  Roofing Challenges Unique to {city.name}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">{content.localChallenges}</p>
                <ul className="space-y-2">
                  {city.localRoofingNotes.map((note, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-black text-gray-900 mb-3">Roof Inspection & Project Process in {city.name}</h2>
                <p className="text-gray-700 leading-relaxed">{content.process}</p>
              </div>

              {/* Why Us */}
              <div className="bg-orange-50 rounded-2xl p-6">
                <h2 className="text-xl font-black text-gray-900 mb-3">
                  Why {city.name} Homeowners Choose XRP Roofing
                </h2>
                <p className="text-gray-700 leading-relaxed">{content.whyUs}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-1">Free Inspection in {city.name}</h3>
                <p className="text-gray-400 text-sm mb-4">We respond within 1 business hour.</p>
                <LeadForm compact cityName={city.name} />
              </div>
              <div className="bg-gray-50 rounded-2xl p-5">
                <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Neighborhoods We Serve</h3>
                <ul className="space-y-1.5">
                  {city.neighborhoods.map((n) => (
                    <li key={n} className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-3 h-3 text-orange-400 flex-shrink-0" />
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services for this City */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-gray-900 mb-2">
              Top Roofing Services in {city.name}, AZ
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm">
              Our most requested services for {city.name} homeowners and businesses. Click any service to learn more about {city.name}-specific details.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {featuredServiceObjects.map((service) => (
              <Link
                key={service.slug}
                href={`/locations/${citySlug}/${service.slug}`}
                className="group bg-white hover:bg-orange-50 border border-gray-200 hover:border-orange-300 rounded-2xl p-5 transition-all duration-200"
              >
                <div className="text-2xl mb-2">{service.icon}</div>
                <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-1">
                  {service.name} in {city.name}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{service.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-orange-700">
                  Learn More <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
            {/* All services link */}
            {city.featuredServices.length >= 3 && (
              <Link
                href={`/locations/${citySlug}`}
                className="group bg-orange-700 hover:bg-orange-800 rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl mb-2">🏠</div>
                  <h3 className="font-bold text-white mb-1">Complete Roofing Services in {city.name}</h3>
                  <p className="text-xs text-orange-100">Compare repair, replacement, tile, shingle, flat, and commercial roofing options in {city.name}.</p>
                </div>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-white">
                  View All <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            )}
          </div>
          {/* All 12 services link grid */}
          <div className="text-center">
            <div className="inline-flex flex-wrap gap-2 justify-center">
              {services.slice(4).map((service) => (
                <Link
                  key={service.slug}
                  href={`/locations/${citySlug}/${service.slug}`}
                  className="text-sm text-gray-600 hover:text-orange-500 bg-white border border-gray-200 hover:border-orange-200 px-3 py-1.5 rounded-full transition-colors"
                >
                  {service.name} in {city.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Examples */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">
            Recent Projects in {city.name}, AZ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.projectExamples.map((project, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-orange-700 font-black text-sm">{i + 1}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{project.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      {nearbyCities.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-black text-gray-900 mb-6 text-center">
              Also Serving Nearby Communities
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {nearbyCities.map((nearbyCity) => (
                <Link
                  key={nearbyCity.slug}
                  href={`/locations/${nearbyCity.slug}`}
                  className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-orange-500 bg-white border border-gray-200 hover:border-orange-200 px-4 py-2 rounded-full transition-colors"
                >
                  <MapPin className="w-3 h-3 text-orange-400" />
                  {nearbyCity.name}, {nearbyCity.state}
                </Link>
              ))}
              <Link
                href="/locations"
                className="flex items-center gap-1.5 text-sm font-semibold text-orange-700 hover:text-orange-800 bg-orange-50 border border-orange-200 px-4 py-2 rounded-full transition-colors"
              >
                All Locations <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <ReviewSection />
      <FAQSection faqs={content.faqs} title={`Roofing FAQ — ${city.name}, AZ`} />
      <CTASection
        title={`Ready for a Free Inspection in ${city.name}?`}
        subtitle={`Get an honest assessment from Arizona's trusted roofing contractor. Serving ${city.name} and the entire Phoenix metro.`}
      />
    </>
  );
}
