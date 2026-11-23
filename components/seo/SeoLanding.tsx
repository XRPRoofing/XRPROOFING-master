import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQSection from "@/components/ui/FAQSection";
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/ui/SeoSchema";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import type { LandingPage } from "@/lib/landing";
import { ESTIMATE_PATH } from "@/lib/seo-routes";

const ROC_LINE = "XRP Roofing · Arizona ROC #350898";

function RichText({ text }: { text: string }) {
  const pattern = /\[([^\]]+)\]\((\/[^)\s]+)\)/g;
  const nodes: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(pattern)) {
    const index = match.index ?? 0;
    if (index > last) nodes.push(text.slice(last, index));
    nodes.push(
      <Link key={`${match[2]}-${index}`} href={match[2]} className="font-semibold text-orange-700 hover:text-orange-800">
        {match[1]}
      </Link>,
    );
    last = index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}

function EstimateActions({ light = false }: { light?: boolean }) {
  const callClass = light
    ? "bg-orange-700 hover:bg-orange-800 text-white"
    : "bg-white hover:bg-orange-50 text-orange-800";
  const estimateClass = light
    ? "border-2 border-gray-300 hover:border-orange-400 text-gray-800"
    : "border-2 border-white/70 hover:border-white text-white";

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a
        href={PHONE_HREF}
        className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-colors ${callClass}`}
      >
        <Phone className="w-5 h-5" aria-hidden="true" />
        Call {PHONE}
      </a>
      <Link
        href={ESTIMATE_PATH}
        className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-colors ${estimateClass}`}
      >
        Get a free estimate
      </Link>
    </div>
  );
}

export default function SeoLanding({ page }: { page: LandingPage }) {
  const serviceSlug = page.path.split("/").filter(Boolean).at(-1) ?? "roofing";

  return (
    <>
      <BreadcrumbSchema items={page.breadcrumbs} />
      <ServiceSchema
        serviceName={page.serviceName}
        serviceSlug={serviceSlug}
        description={page.description}
        cityName={page.cityName}
        pagePath={page.path}
      />
      {page.faqs && page.faqs.length > 0 ? <FAQSchema faqs={page.faqs} /> : null}

      <Breadcrumbs items={page.breadcrumbs} />

      <section className="bg-[#0f2156]">
        <div className="container mx-auto px-4 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-orange-300 font-semibold text-sm uppercase tracking-wide mb-3">{page.eyebrow}</p>
            <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-5">{page.h1}</h1>
            <div className="space-y-4 text-gray-200 leading-relaxed">
              {page.intro.map((paragraph, index) => (
                <p key={index}>
                  <RichText text={paragraph} />
                </p>
              ))}
            </div>
            <div className="mt-8">
              <EstimateActions />
            </div>
          </div>
          <div className="relative h-72 sm:h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={page.image}
              alt={page.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <article className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-3xl space-y-10">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-black text-gray-900 mb-4">{section.heading}</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index}>
                    <RichText text={paragraph} />
                  </p>
                ))}
              </div>
            </section>
          ))}
          {page.points && page.points.length > 0 ? (
            <section>
              <h2 className="text-2xl font-black text-gray-900 mb-4">{page.pointsHeading ?? "What to expect"}</h2>
              <ul className="space-y-2">
                {page.points.map((point) => (
                  <li key={point} className="flex gap-2 text-gray-700">
                    <span className="text-orange-700 font-bold" aria-hidden="true">
                      ✓
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      </article>

      {page.linkGroups.map((group) => (
        <section key={group.title} className="py-12 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-black text-gray-900 mb-6">{group.title}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block h-full bg-white border border-gray-200 hover:border-orange-300 rounded-2xl p-5 transition-colors"
                  >
                    <span className="block font-bold text-[#0f2156]">{link.label}</span>
                    <span className="block mt-2 text-sm text-gray-600 leading-relaxed">{link.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {page.faqs && page.faqs.length > 0 ? <FAQSection faqs={page.faqs} /> : null}

      <section className="py-16 bg-gradient-to-r from-orange-700 to-orange-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Get a free estimate</h2>
          <p className="text-orange-50 text-lg mb-8 max-w-2xl mx-auto">
            Call {PHONE} or send the quote form. Jonathan inspects the roof and does the work on every project himself.
          </p>
          <div className="flex justify-center">
            <EstimateActions />
          </div>
          <p className="mt-8 text-sm font-semibold text-white">{ROC_LINE}</p>
        </div>
      </section>
    </>
  );
}
