import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, ArrowRight, MapPin } from "lucide-react";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { services, getService, getRelatedServices } from "@/lib/services";
import { cities } from "@/lib/cities";
import { getServiceImage } from "@/lib/images";
import CTASection from "@/components/ui/CTASection";
import FAQSection from "@/components/ui/FAQSection";
import LeadForm from "@/components/ui/LeadForm";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/ui/SeoSchema";

export async function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = getService(serviceSlug);
  if (!service) return {};

  const title = `${service.name} in Phoenix, AZ | Licensed Contractor | ${SITE_NAME}`;
  const description = `Expert ${service.name.toLowerCase()} in Phoenix, AZ and the entire 100-mile metro radius. Licensed & insured. Free inspections and estimates. ${service.metaDescription}`;
  const canonical = `${SITE_URL}/services/${serviceSlug}`;

  return {
    title,
    description,
    keywords: service.keywords,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [{ url: service.heroImage }],
    },
  };
}

const serviceDetailContent: Record<string, { intro: string; body: string[]; whyChoose: string[] }> = {
  "roof-repair": {
    intro: "Roof leaks and damage in Phoenix's extreme climate can escalate from a minor issue to a major structural problem in a single monsoon season. XRP Roofing provides fast, accurate roof repair throughout the Phoenix metro — identifying the real cause of every problem, not just the visible symptom.",
    body: [
      "Arizona's UV radiation, extreme heat cycles, and monsoon storms work together to stress every component of your roofing system. Shingles blister and crack. Underlayment dries out and becomes brittle. Flashing pulls away from penetrations. What looks like a simple leak often has multiple contributing causes — which is why accurate diagnosis is critical before any repair begins.",
      "Our repair process starts with a comprehensive inspection of the entire roof surface — not just the area showing symptoms. We use moisture detection tools, photograph all problem areas, and identify both the immediate failure and any developing issues. You receive a detailed written estimate before any work begins, with no pressure to approve a larger scope than your roof actually needs.",
      "We stock a wide inventory of common Arizona roofing materials so most repairs can be completed quickly without waiting for special orders. All repair work is backed by our written workmanship warranty and fully documented with photographs for your records and any insurance claims.",
    ],
    whyChoose: [
      "Complete roof inspection — not just the visible leak point",
      "Accurate root-cause diagnosis before any repair work",
      "In-stock matching materials for faster turnaround",
      "Written workmanship warranty on all repair work",
      "Insurance claim documentation provided if storm-related",
      "Same-day emergency response for active leaks",
    ],
  },
  "roof-replacement": {
    intro: "A full roof replacement is one of the most significant investments a Phoenix homeowner makes — and getting it right means choosing the right contractor, the right materials, and the right installation approach for Arizona's demanding climate.",
    body: [
      "In Phoenix's extreme environment, the difference between a 20-year roof and a 30-year roof comes down to three factors: material selection, installation quality, and attic ventilation. Standard products installed to generic national specifications consistently underperform in Arizona. We specify materials specifically rated for high-temperature desert environments and install them with the ventilation and flashing details that prevent premature failure.",
      "Our replacement process begins with a thorough inspection that documents not just the condition of the surface material but the underlayment, decking, flashing, and ventilation system. We identify every issue before finalizing the scope of work, so there are no surprise change orders mid-project. Your written estimate covers everything — materials, labor, disposal, permits, and cleanup.",
      "We handle all permitting, inspection coordination, and complete disposal of your old roofing material. Our magnetic sweep process removes nails from all surrounding areas, and our crews are supervised throughout the project. We conduct a final walkthrough with you before considering any project complete.",
    ],
    whyChoose: [
      "Materials specified for Arizona's high-temperature environment",
      "Full attic ventilation assessment included with every replacement",
      "Written estimate with no surprise change orders",
      "Complete permit-pulling and inspection coordination",
      "Magnetic sweep nail cleanup on all surrounding areas",
      "Manufacturer and workmanship warranty provided in writing",
    ],
  },
  "new-roof-installation": {
    intro: "New roof installation on custom homes, production builds, and additions throughout the Phoenix metro requires a contractor who understands Arizona's building codes, climate demands, and HOA requirements from day one.",
    body: [
      "XRP Roofing works directly with general contractors, custom home builders, and owner-builders to provide complete roofing packages from bare framing to final inspection. We can provide preliminary pricing from plans and firm proposals from framing, and we coordinate all required roofing inspections with local building departments throughout Maricopa and Pinal counties.",
      "Material selection for new construction in Arizona deserves careful thought. Concrete and clay tile remain the dominant choice — 40–60+ year lifespans, excellent thermal performance, and HOA acceptance across virtually all managed communities. Architectural shingles are cost-effective and perform well with the right product and ventilation specification. Standing seam metal is growing in popularity for its energy efficiency and longevity. We'll walk you through the tradeoffs based on your specific project, budget, and HOA requirements.",
      "Every new installation includes our complete ventilation system assessment — continuous ridge vents, soffit intake, and attic baffles. Adequate ventilation is the single biggest determinant of roof longevity in Arizona and is required for manufacturer warranty validity on most products. We don't cut corners here regardless of budget pressure.",
    ],
    whyChoose: [
      "New construction and addition roofing experience throughout Phoenix metro",
      "Preliminary pricing available from architectural plans",
      "Full permit-pulling and inspection coordination included",
      "HOA architectural review documentation handled",
      "Complete ventilation system — ridge, soffit, and baffles",
      "Solar-ready installation options available",
    ],
  },
  "tile-roofing": {
    intro: "Concrete and clay tile is Arizona's most popular roofing choice for good reason — exceptional durability, natural heat resistance, and a classic aesthetic that suits the desert landscape. XRP Roofing specializes in tile installation, repair, and underlayment replacement throughout the Phoenix metro.",
    body: [
      "Tile itself is extraordinarily durable in Arizona — properly maintained concrete tile can last 50+ years and clay tile even longer. But the tile is only half the system. The underlayment beneath the tile typically has a 20–30 year lifespan in Arizona's heat, and when it fails, the tile above often looks perfectly intact. Many Phoenix homeowners are surprised to discover that their 'tile leak' is actually an underlayment failure — requiring tile removal, new underlayment, and tile reinstallation rather than tile replacement.",
      "Our tile roofing services cover the full spectrum: new tile installation on new construction or replacements, tile repair and color matching for isolated damage, ridge cap remortar and refoam, underlayment-only replacement (tile off/on), and storm damage assessment with insurance documentation. We maintain distributor relationships with all major Arizona tile lines including Boral, Eagle, US Tile, and others — giving us access to current and discontinued profiles for repair matching.",
      "For HOA communities requiring specific tile profiles and colors, we handle the architectural review process from sample submission through approval. Our estimators are experienced with the specific requirements of managed communities throughout Scottsdale, Gilbert, Chandler, Peoria, and the broader metro.",
    ],
    whyChoose: [
      "Full tile system expertise — installation, repair, and underlayment",
      "Access to all major Arizona tile lines for color matching",
      "HOA architectural review documentation and material approval",
      "Ridge cap remortar and refoam specialists",
      "Underlayment-only replacement without full tile purchase",
      "Written warranty on all tile installation work",
    ],
  },
  "shingle-roofing": {
    intro: "Asphalt shingle roofing in Phoenix requires product selection and installation details that differ significantly from national standards. XRP Roofing installs and repairs shingle roofing systems specifically engineered for Arizona's heat, UV exposure, and monsoon season.",
    body: [
      "Not all shingles are appropriate for Phoenix's climate. Standard 3-tab shingles and many builder-grade architectural products are not rated for the sustained high temperatures and UV radiation that Phoenix rooftops experience. We exclusively install architectural (laminated) shingles rated for high-temperature applications — products like GAF Timberline HDZ, Owens Corning Duration, and CertainTeed Landmark Pro that are specifically tested for desert performance.",
      "Attic ventilation is the single most critical factor in shingle longevity in Arizona. An under-ventilated attic can push shingle temperatures well above 180°F, dramatically shortening the service life of even the best products. We assess your current ventilation system on every replacement estimate and include ventilation upgrades in the scope whenever needed — this is often required for the manufacturer's warranty to be valid.",
      "Our shingle replacement process includes full tear-off of existing layers, deck inspection and repair as needed, new synthetic underlayment, drip edge, and proper hip and ridge cap installation. We perform a magnetic sweep of all surrounding areas after project completion and provide all manufacturer warranty documentation in writing.",
    ],
    whyChoose: [
      "Only high-temperature rated architectural shingles — no 3-tab",
      "Complete attic ventilation assessment on every estimate",
      "GAF, Owens Corning, and CertainTeed certified installer",
      "Synthetic underlayment standard — not felt paper",
      "Full tear-off included — no layering over existing material",
      "Manufacturer warranty documentation provided at completion",
    ],
  },
  "metal-roofing": {
    intro: "Standing seam metal roofing is one of the best long-term investments a Phoenix homeowner or commercial property owner can make — 50–70 year lifespan, superior energy performance, and minimal maintenance. XRP Roofing installs complete metal roofing systems throughout the Phoenix metro.",
    body: [
      "Metal roofing's reputation in Arizona has improved dramatically with the widespread adoption of Kynar 500 PVDF-coated Galvalume panels. These products carry 40-year paint warranties, reflect significantly more solar radiation than asphalt shingles, and hold up to Arizona's thermal cycling without the cracking and delamination that plagued earlier generations of metal roofing. Many qualify for ENERGY STAR ratings.",
      "The standing seam system — where panels interlock at concealed seams rather than exposing fasteners to weather — is the appropriate specification for residential and commercial applications in Arizona. Exposed-fastener corrugated systems develop leak points as fastener gaskets degrade in the heat. We install standing seam as standard for quality residential work and specify exposed-fastener systems only for agricultural and low-occupancy commercial applications where the economics clearly support it.",
      "Metal roofing can often be installed over existing shingle systems using a batten and counter-batten method, eliminating tear-off costs and adding a thermal break layer. We assess each existing condition individually to determine whether overlay is appropriate or if tear-off would deliver better long-term performance. In either case, we provide a detailed written estimate with full material specifications.",
    ],
    whyChoose: [
      "24-gauge Galvalume standing seam — concealed fastener standard",
      "Kynar 500 PVDF factory-painted finishes for 40-year color durability",
      "ENERGY STAR qualified products available for energy rebates",
      "Overlay-over-existing-shingles option to eliminate tear-off cost",
      "Custom panel lengths roll-formed to minimize end-lap leak points",
      "50–70 year system lifespan with minimal maintenance",
    ],
  },
  "tpo-roofing": {
    intro: "TPO membrane roofing is Arizona's leading commercial flat roof system — combining a highly reflective white surface that cuts cooling loads with heat-welded seams that outperform traditional adhesive-bonded systems in Phoenix's extreme temperatures.",
    body: [
      "Thermoplastic Polyolefin (TPO) membrane has become the dominant commercial flat roofing specification in the Phoenix market for well-founded reasons. Its white reflective surface significantly reduces solar heat gain — cutting cooling energy costs in a climate where commercial buildings can represent major cooling loads. Heat-welded seams create bonds as strong as the membrane itself, eliminating the seam failures that plague EPDM tape-bonded systems in Arizona's thermal cycling environment.",
      "We specify 60-mil TPO as the minimum thickness for Arizona commercial applications — 45-mil is insufficient for the UV exposure and thermal stress present in Phoenix. We work with Carlisle SynTec, Firestone, and Johns Manville systems, all of which offer manufacturer-backed NDL warranties when installed by certified contractors. Our certifications with these manufacturers allow us to offer full system warranties up to 20 years.",
      "Our TPO installation process includes a moisture scan of any existing roof before overlay, proper polyiso insulation to meet current Arizona energy code R-value requirements, DensDeck cover board for additional protection, and perimeter edge metal and coping installation. Penetrations receive custom-fabricated flashings rather than generic boots, which are the single most common TPO leak source.",
    ],
    whyChoose: [
      "60-mil TPO minimum — not the 45-mil builder-grade specification",
      "Carlisle and Firestone certified installer — NDL warranties available",
      "Moisture scan before overlay to confirm dry substrate",
      "Custom-fabricated penetration flashings — not generic boots",
      "Polyiso insulation to current Arizona energy code R-25 requirement",
      "White reflective surface qualifies for ENERGY STAR and utility rebates",
    ],
  },
  "flat-roofing": {
    intro: "Flat and low-slope roofing is found throughout the Phoenix metro on commercial buildings, residential additions, and mid-century homes. XRP Roofing provides complete flat roofing services including installation, repair, and coating for all membrane systems.",
    body: [
      "Arizona's flat roof environment is demanding in specific ways: intense UV radiation that degrades membrane surfaces, extreme thermal cycling that stresses seams and flashings, and monsoon season downpours that test every drain and scupper. The combination creates conditions that require more frequent maintenance and more careful system selection than flat roofing in temperate climates.",
      "For new flat roof installations, we evaluate the specific application and recommend the appropriate system — TPO for energy-conscious commercial buildings, modified bitumen for residential flat sections and smaller commercial applications, and EPDM for larger simple commercial footprints where cost is the primary driver. We never recommend a single system for all applications; the right membrane depends on the building use, budget, drainage conditions, and energy requirements.",
      "Flat roof repairs require identifying whether the problem is a localized membrane failure, a seam separation, a flashing termination issue, or a drainage problem. We perform a systematic investigation rather than applying sealant to every visible defect and hoping for the best. When repair is not the appropriate solution, we provide honest recommendations for partial or full replacement with a clear cost-benefit analysis.",
    ],
    whyChoose: [
      "TPO, EPDM, modified bitumen, and BUR repair and installation",
      "Infrared moisture scanning available to locate trapped wet insulation",
      "Tapered insulation design for positive drainage on problem roofs",
      "Custom drain and scupper installation and upgrades",
      "Honest repair vs. replace assessment — no unnecessary upsells",
      "Commercial and residential flat roofing experience throughout Phoenix",
    ],
  },
  "commercial-roofing": {
    intro: "Commercial roofing in Phoenix demands contractors who understand the operational realities of active businesses, the complexity of large-format systems, and the energy performance requirements of Arizona's intense climate. XRP Roofing provides complete commercial roofing solutions throughout the Phoenix metro.",
    body: [
      "Commercial roofing projects require a fundamentally different approach than residential work. Access logistics, HVAC equipment coordination, safety requirements, phased installation to minimize business disruption, permit management across multiple jurisdictions, and energy code compliance are all variables that a residential contractor may be unprepared to manage. XRP Roofing has the equipment, certifications, and project management experience to handle commercial projects of all sizes.",
      "Our commercial work covers the full spectrum of systems in the Phoenix market: TPO and EPDM for flat commercial roofs, standing seam metal for pitched or low-slope commercial applications, spray polyurethane foam for irregular or equipment-heavy rooftops, and silicone or acrylic coating systems for restoration of existing commercial roofing that still has serviceable insulation and deck beneath a degraded surface.",
      "We hold active manufacturer certifications with Carlisle SynTec and Firestone Building Products, enabling us to offer manufacturer-backed NDL (no-dollar-limit) warranties up to 20 years on qualifying commercial installations. These warranties cover both material defects and workmanship — the most comprehensive protection available in commercial roofing.",
    ],
    whyChoose: [
      "Carlisle SynTec and Firestone NDL warranty certification",
      "Phased installation to minimize business disruption",
      "Complete permit management across all Phoenix metro jurisdictions",
      "Moisture scanning before overlay to confirm dry conditions",
      "Energy code R-value compliance included in every specification",
      "All systems: TPO, EPDM, metal, SPF, coatings",
    ],
  },
  "roof-coatings": {
    intro: "Roof coatings are one of the most cost-effective roofing investments available in Phoenix — extending the life of aging flat and low-slope roofs by 15–20 years, reducing cooling costs with reflective surfaces, and often avoiding full replacement costs entirely.",
    body: [
      "Not every aging flat roof needs replacement. If the insulation is dry and the deck is sound, a properly applied coating system can restore waterproofing, improve energy performance, and add 15–20 years of service life for a fraction of replacement cost. The key word is 'properly' — a coating applied over wet insulation, unrepaired seams, or without adequate surface preparation will fail quickly and is not a solution. We perform a moisture scan and thorough seam inspection before recommending coating as an appropriate strategy.",
      "We apply silicone coating systems as our default for Arizona flat roofs because silicone maintains its properties in standing water — which is nearly unavoidable on large flat roof sections during monsoon season. Acrylic coatings are excellent for sloped applications and have good UV reflectance but degrade under prolonged ponding. We match the coating chemistry to the specific conditions of your roof, not to what's easiest to apply.",
      "Our coating process includes pressure washing, full seam and flashing reinforcement with fiberglass fabric, primer application, and two-coat finish application measured to the manufacturer's required wet mil thickness. We don't apply coatings in a single pass below specification — this is the most common cause of premature coating failure. All work is documented with mil gauge readings and photographic records.",
    ],
    whyChoose: [
      "Moisture scan before coating recommendation — no guesswork",
      "Silicone standard for ponding-prone flat roofs",
      "Full seam and flashing reinforcement before any coating",
      "Two-coat application to manufacturer's mil specification",
      "ENERGY STAR qualified products available",
      "Written warranty on completed coating system",
    ],
  },
  "emergency-roof-repair": {
    intro: "An active roof leak in Phoenix can cause thousands of dollars in interior damage within hours. XRP Roofing provides emergency roof repair response throughout the Phoenix metro — weatherproofing your property fast and completing permanent repairs as quickly as possible.",
    body: [
      "Emergency roof situations in Phoenix most commonly follow monsoon storms — wind-displaced tiles or shingles, separated flashing, fallen debris, or sudden structural failure. The priority in every emergency is getting the building weatherproofed quickly to prevent water from reaching ceilings, insulation, drywall, and flooring. Our emergency response process starts with immediate tarp installation or emergency sealing, followed by thorough documentation of all damage for insurance purposes.",
      "We respond to emergency calls as quickly as possible and prioritize active leak situations above standard scheduling. Our crews carry emergency materials including heavy-duty tarps, emergency sealants that cure in wet conditions, peel-and-stick membrane, and OSB panels for structural gaps. Most emergency weatherproofing is completed within the day; permanent repairs typically follow within three to five business days depending on material availability.",
      "Our emergency response documentation — photographs, written damage assessment, and repair description — is prepared specifically to support insurance claim submission. We can meet your insurance adjuster on-site and provide supplemental documentation if the initial claim assessment is disputed. Getting the documentation right from the start is critical to a smooth claims process.",
    ],
    whyChoose: [
      "Priority response for active leak situations throughout Phoenix metro",
      "Emergency weatherproofing completed within hours",
      "Complete insurance documentation — photos, written assessment, repair description",
      "Adjuster meet service available for complex or disputed claims",
      "Permanent repair follow-through scheduled immediately after stabilization",
      "After-hours emergency response capability",
    ],
  },
  "storm-damage-roofing": {
    intro: "Arizona's monsoon season delivers some of the most intense storm events in North America — high winds, large hail, flash flooding, and airborne debris that test every component of your roofing system. XRP Roofing provides complete storm damage assessment, repair, and insurance claim support throughout the Phoenix metro.",
    body: [
      "Storm damage assessment requires getting on the roof — not just looking from the ground. Hail damage on shingles often appears as random impact marks that cause granule displacement, leaving exposed asphalt vulnerable to rapid UV degradation. Wind damage frequently displaces tiles or shingles in ways that look minor from the street but create significant waterproofing vulnerabilities. Our inspection documents every damage point with photographs and a written report formatted for insurance submission.",
      "One of the most important steps any Phoenix homeowner can take after a significant storm is to call a qualified contractor before calling the insurance company. A thorough inspection report from an experienced contractor is far more powerful during the claims process than a carrier's phone assessment. We provide complete storm damage documentation that carriers can use directly — in many cases eliminating the need for a separate adjuster visit.",
      "For properties where storm damage qualifies for full replacement, we manage the entire process — from insurance submission through material selection, permitting, installation, and final inspection. We work with all major carriers and have extensive experience navigating the Arizona homeowner's insurance claims process, including supplemental claims when initial estimates are inadequate.",
    ],
    whyChoose: [
      "Complete roof-level inspection with photographic documentation",
      "Insurance claim report prepared for carrier submission",
      "Adjuster meet service — we advocate for a fair assessment",
      "Experience with all major Arizona homeowner's insurance carriers",
      "Class 4 impact-resistant shingle upgrade available (potential premium discount)",
      "Full replacement management from claim to final inspection",
    ],
  },
};

const genericContent = {
  body: [
    "Arizona's climate presents roofing challenges found nowhere else in the country. Surface temperatures exceeding 180°F in summer, monsoon season wind and rain, and constant UV exposure that degrades materials twice as fast as northern climates — these are the conditions your Phoenix roof faces every day. XRP Roofing has spent years developing the expertise, material selection, and installation techniques specifically suited to this environment.",
    "Every project begins with a thorough inspection and honest assessment. We specify materials that are rated for high-temperature desert environments, install them to manufacturer specifications, and back every project with written workmanship warranties. Our licensed and insured crews are Arizona roofing professionals with the experience to handle every complexity your roof presents.",
    "From initial inspection through final cleanup, we manage every phase of your roofing project with transparency and professionalism. No surprise charges. No substandard materials. No shortcuts. Just quality roofing work that stands up to Arizona's demanding conditions.",
  ],
  whyChoose: [
    "Licensed Arizona roofing contractor",
    "Fully insured — general liability & workers' comp",
    "Materials rated for Arizona's extreme climate",
    "Written workmanship warranty included",
    "Free inspections and itemized estimates",
    "Emergency response available",
  ],
};

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service: serviceSlug } = await params;
  const service = getService(serviceSlug);
  if (!service) notFound();

  const relatedServices = getRelatedServices(serviceSlug);
  const serviceImage = getServiceImage(serviceSlug);
  const content = serviceDetailContent[serviceSlug] || genericContent;

  // Top 8 cities linking to this service
  const topCityLinks = cities.slice(0, 8);

  // Generic FAQ for this service
  const faqs = [
    { q: `How do I know if I need ${service.name} in Phoenix?`, a: `Signs you need ${service.name.toLowerCase()} include visible damage, leaks following rain events, material aging past its rated lifespan, or storm damage. A free professional inspection from XRP Roofing gives you an honest assessment of your roof's condition.` },
    { q: `How long does ${service.name} take in Phoenix, AZ?`, a: `Timeline depends on project scope, material availability, and weather. Most residential projects complete within one to three days. We provide an accurate schedule during the estimate process and communicate any changes promptly.` },
    { q: `Is ${service.name} covered by homeowner's insurance?`, a: `Storm-related damage requiring ${service.name.toLowerCase()} is typically covered. Gradual wear and deferred maintenance generally are not. We provide documentation suitable for insurance claim submission and work with all major carriers.` },
    { q: `What makes XRP Roofing the right choice for ${service.name} in Phoenix?`, a: `We're locally based, licensed, insured, and experienced with Phoenix's specific climate and HOA requirements. We provide honest assessments, written estimates, and stand behind our work with warranties.` },
    { q: `Do you offer financing for ${service.name} projects?`, a: `Yes — we work with financing partners to offer payment plans for qualifying projects. Ask about current options when you call for your free estimate.` },
    { q: `What areas do you serve for ${service.name}?`, a: `We provide ${service.name.toLowerCase()} throughout Phoenix and a 100-mile radius including Scottsdale, Mesa, Chandler, Gilbert, Tempe, Glendale, Peoria, Surprise, Goodyear, and 20+ additional cities.` },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: service.name },
  ];

  return (
    <>
      <ServiceSchema
        serviceName={service.name}
        serviceSlug={serviceSlug}
        description={service.metaDescription}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero */}
      <section className="relative min-h-[400px] lg:min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={serviceImage.src}
            alt={serviceImage.alt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/30" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
              {service.icon} {service.name}
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
              {service.name} in Phoenix, AZ
            </h1>
            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
              {service.description} Licensed & insured. Free inspections. Serving Phoenix and the 100-mile metro radius.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-xl font-bold transition-colors"
              >
                Get Free Inspection <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-black text-gray-900 mb-6">
                Expert {service.name} for Phoenix Metro Properties
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                {content.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Why Choose */}
              <div className="mt-8 bg-orange-50 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-lg mb-4">
                  Why Choose XRP Roofing for {service.name}?
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {content.whyChoose.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* City Links */}
              <div className="mt-10">
                <h2 className="text-xl font-black text-gray-900 mb-4">
                  {service.name} by City — Phoenix Metro
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {topCityLinks.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/locations/${city.slug}/${serviceSlug}`}
                      className="group flex items-center gap-1.5 text-sm text-gray-600 hover:text-orange-500 transition-colors bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-200 rounded-xl px-3 py-2"
                    >
                      <MapPin className="w-3 h-3 text-orange-400 flex-shrink-0" />
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-gray-900 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-4">Request Free Inspection</h3>
                <LeadForm compact />
              </div>

              {relatedServices.length > 0 && (
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Related Services</h3>
                  <ul className="space-y-2">
                    {relatedServices.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-500 transition-colors"
                        >
                          <span>{s.icon}</span>
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} title={`${service.name} FAQ — Phoenix, AZ`} />

      <CTASection />
    </>
  );
}
