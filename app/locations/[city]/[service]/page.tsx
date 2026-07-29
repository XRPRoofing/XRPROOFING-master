import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, ArrowRight, MapPin } from "lucide-react";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { cities, getCity, getNearbyCities } from "@/lib/cities";
import { services, getService, getRelatedServices } from "@/lib/services";
import { cityServiceContent } from "@/lib/contentEngine";
import { getServiceImage } from "@/lib/images";
import CTASection from "@/components/ui/CTASection";
import FAQSection from "@/components/ui/FAQSection";
import LeadForm from "@/components/ui/LeadForm";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/ui/SeoSchema";

export async function generateStaticParams() {
  const params: { city: string; service: string }[] = [];
  for (const city of cities) {
    for (const service of services) {
      params.push({ city: city.slug, service: service.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCity(citySlug);
  const service = getService(serviceSlug);
  if (!city || !service) return {};

  const title = `${service.name} in ${city.name}, AZ | Licensed Roofing Contractor | ${SITE_NAME}`;
  const description = `Professional ${service.name.toLowerCase()} in ${city.name}, AZ with local inspections, written estimates, Arizona-rated materials, and licensed roofing crews. Free inspection from XRP Roofing.`;
  const canonical = `${SITE_URL}/locations/${citySlug}/${serviceSlug}`;
  const shouldIndex = city.featuredServices.includes(serviceSlug);
  const image = getServiceImage(serviceSlug).src;

  return {
    title,
    description,
    keywords: [...service.keywords, `${service.name} ${city.name}`, `roofing contractor ${city.name} AZ`],
    alternates: { canonical },
    robots: { index: shouldIndex, follow: true },
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

export default async function CityServicePage({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCity(citySlug);
  const service = getService(serviceSlug);
  if (!city || !service) notFound();

  const content = cityServiceContent(city, service);
  const nearbyCities = getNearbyCities(citySlug);
  const relatedServices = getRelatedServices(serviceSlug);
  const serviceImage = getServiceImage(serviceSlug);

  const breadcrumbItems = [
    { label: "Locations", href: "/locations" },
    { label: `${city.name}, ${city.state}`, href: `/locations/${citySlug}` },
    { label: service.name },
  ];

  return (
    <>
      <ServiceSchema
        serviceName={service.name}
        serviceSlug={serviceSlug}
        description={service.metaDescription}
        cityName={city.name}
        citySlug={citySlug}
      />
      <FAQSchema faqs={content.faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero */}
      <section className="relative min-h-[420px] lg:min-h-[520px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={serviceImage.src}
            alt={`${service.name} in ${city.name}, AZ by XRP Roofing`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/92 via-gray-900/72 to-gray-900/30" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span className="inline-flex items-center gap-1 bg-orange-700 text-white px-3 py-1 rounded-full text-xs font-semibold">
                {service.icon} {service.shortName}
              </span>
              <span className="inline-flex items-center gap-1 bg-white/10 text-white px-3 py-1 rounded-full text-xs font-semibold">
                <MapPin className="w-3 h-3" /> {city.name}, {city.state}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
              {service.name} in {city.name}, AZ
            </h1>
            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
              {service.description} Licensed &amp; insured. Free inspections. Locally trusted throughout {city.name} and the Phoenix metro.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-orange-700 hover:bg-orange-800 text-white px-7 py-3.5 rounded-xl font-bold transition-colors"
              >
                Free Inspection in {city.name} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {["Licensed & Insured", "Free Estimates", "Same-Day Emergency", "Written Warranty"].map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-sm text-gray-300">
                  <CheckCircle className="w-3.5 h-3.5 text-green-400" /> {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">

              {/* Intro */}
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-4">
                  {service.name} in {city.name}, AZ — What to Expect
                </h2>
                <p className="text-gray-700 leading-relaxed">{content.intro}</p>
              </div>

              {/* Local Tie-In */}
              <div>
                <h2 className="text-xl font-black text-gray-900 mb-3">
                  {service.name} &amp; {city.name}&apos;s Climate
                </h2>
                <p className="text-gray-700 leading-relaxed">{content.localTieIn}</p>
                <ul className="mt-4 space-y-2">
                  {city.localRoofingNotes.slice(0, 3).map((note, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Signs You Need This Service */}
              <div className="bg-orange-50 rounded-2xl p-6">
                <h2 className="text-xl font-black text-gray-900 mb-4">
                  Signs You May Need {service.name} in {city.name}
                </h2>
                <ul className="space-y-2">
                  {content.symptoms.map((symptom, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="w-5 h-5 bg-orange-200 rounded-full flex items-center justify-center text-orange-700 font-bold text-xs flex-shrink-0 mt-0.5">{i + 1}</span>
                      {symptom}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-xl font-black text-gray-900 mb-3">
                  Our {service.name} Process
                </h2>
                <p className="text-gray-700 leading-relaxed">{content.process}</p>
              </div>

              {/* Materials */}
              <div>
                <h2 className="text-xl font-black text-gray-900 mb-3">
                  Arizona-Rated Materials &amp; Products We Use
                </h2>
                <ul className="space-y-2">
                  {content.materials.map((mat, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {mat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h2 className="text-xl font-black text-gray-900 mb-2">Timeline</h2>
                <p className="text-gray-700 text-sm leading-relaxed">{content.timeline}</p>
              </div>

              {/* Cost Factors */}
              <div>
                <h2 className="text-xl font-black text-gray-900 mb-3">
                  Cost Factors for {service.name} in {city.name}
                </h2>
                <p className="text-gray-600 text-sm mb-3">
                  Every roofing project is unique. Here are the key factors that influence the cost of {service.name.toLowerCase()} in {city.name}:
                </p>
                <ul className="space-y-2">
                  {content.costFactors.map((factor, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-orange-400 font-bold flex-shrink-0">→</span>
                      {factor}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why Choose */}
              <div className="bg-gray-900 rounded-2xl p-6 text-white">
                <h2 className="text-xl font-black text-white mb-3">
                  Why {city.name} Trusts XRP Roofing for {service.name}
                </h2>
                <p className="text-gray-400 leading-relaxed text-sm">{content.whyUs}</p>
              </div>

              {/* Nearby Cities for Same Service */}
              {nearbyCities.length > 0 && (
                <div>
                  <h2 className="text-xl font-black text-gray-900 mb-4">
                    {service.name} in Nearby Cities
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {nearbyCities.map((nearbyCity) => (
                      <Link
                        key={nearbyCity.slug}
                        href={`/locations/${nearbyCity.slug}/${serviceSlug}`}
                        className="group flex items-center gap-1.5 text-sm text-gray-600 hover:text-orange-500 bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-200 rounded-xl px-3 py-2 transition-colors"
                      >
                        <MapPin className="w-3 h-3 text-orange-400 flex-shrink-0" />
                        {nearbyCity.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Lead Form */}
              <div className="bg-orange-700 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-1">
                  Free {service.shortName} Inspection
                </h3>
                <p className="text-orange-100 text-sm mb-4">
                  In {city.name}. We respond within 1 hour.
                </p>
                <div className="bg-white rounded-xl p-4">
                  <LeadForm compact cityName={city.name} />
                </div>
              </div>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div className="bg-gray-50 rounded-2xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm">
                    Related Services in {city.name}
                  </h3>
                  <ul className="space-y-2">
                    {relatedServices.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/locations/${citySlug}/${s.slug}`}
                          className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-500 transition-colors"
                        >
                          <span>{s.icon}</span>
                          {s.name} in {city.name}
                          <ArrowRight className="w-3 h-3 ml-auto text-gray-400" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* City Overview Link */}
              <div className="bg-white rounded-2xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">All Services in {city.name}</h3>
                <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                  See all 12 roofing services available in {city.name}, AZ.
                </p>
                <Link
                  href={`/locations/${citySlug}`}
                  className="flex items-center gap-1.5 text-sm font-semibold text-orange-700 hover:text-orange-800"
                >
                  {city.name} Roofing Overview <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Global Service Link */}
              <div className="bg-white rounded-2xl p-5 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{service.name} — Phoenix Metro</h3>
                <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                  See our {service.name.toLowerCase()} service overview for the entire Phoenix metro area.
                </p>
                <Link
                  href={`/services/${serviceSlug}`}
                  className="flex items-center gap-1.5 text-sm font-semibold text-orange-700 hover:text-orange-800"
                >
                  Phoenix {service.name} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={content.faqs}
        title={`${service.name} FAQ — ${city.name}, AZ`}
        subtitle={`Common questions about ${service.name.toLowerCase()} in ${city.name} and the Phoenix metro area.`}
      />

      <CTASection
        title={`Ready for ${service.name} in ${city.name}?`}
        subtitle={`Get a free inspection and honest estimate from XRP Roofing — ${city.name}'s trusted roofing contractor. Licensed & insured.`}
      />
    </>
  );
}
