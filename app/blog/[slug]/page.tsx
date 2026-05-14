import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/constants";
import CTASection from "@/components/ui/CTASection";
import { ArticleSchema, FAQSchema } from "@/components/ui/SeoSchema";

const allPosts: Record<string, BlogPost> = {
  "how-to-prepare-your-roof-for-monsoon-season-arizona": {
    slug: "how-to-prepare-your-roof-for-monsoon-season-arizona",
    title: "How to Prepare Your Phoenix Roof for Monsoon Season",
    excerpt: "Arizona's monsoon season runs June through September and brings some of the most intense storm conditions in the country. Here's how to make sure your roof is ready before the storms hit.",
    date: "2025-05-01",
    readTime: "6 min read",
    category: "Maintenance",
    metaDescription: "Prepare your Phoenix roof for Arizona monsoon season with this expert guide. Inspection checklist, flashing tips, and drainage advice from XRP Roofing.",
    sections: [
      {
        heading: "Why Monsoon Preparation Matters in Arizona",
        body: "Arizona's monsoon season (officially June 15 – September 30) delivers the most intense rainfall events Phoenix sees all year — often arriving with little warning after months of desert dry heat. Roofs that have dried out and settled during spring are suddenly subjected to wind gusts exceeding 60 mph and rain rates that can exceed 2 inches per hour. Flashings that have developed minor separations, cracked ridge caulk, or clogged drains that were inconsequential during dry season become active leak sources within minutes of the first major storm.",
      },
      {
        heading: "The Pre-Monsoon Roof Inspection Checklist",
        listItems: [
          "Schedule a professional inspection in May — before the first storms arrive",
          "Clear all gutters, scuppers, and roof drains of debris from the dry season",
          "Check all pipe boot flashings and penetration seals for cracking or separation",
          "Inspect valley flashings and ridge caps for lifted edges or missing mortar",
          "Trim trees overhanging the roof to reduce branch impact and debris risk",
          "Check attic ventilation — blocked soffits trap heat that damages underlayment",
          "Document your roof condition with photographs for insurance baseline purposes",
        ],
      },
      {
        heading: "What Happens If You Skip Pre-Season Preparation",
        body: "A single monsoon storm can push several thousand dollars of interior water damage through a gap that would have cost $200–$500 to seal in May. Drywall replacement, insulation removal, mold remediation, and flooring repairs consistently exceed the cost of preventive roofing maintenance by a factor of 10 or more. The most common entry points are pipe boot flashings (which dry-crack in Phoenix summers), clogged drains that cause ponding, and remortar failures at ridge tiles that let wind-driven rain underneath.",
      },
      {
        heading: "When to Call a Professional Before Monsoon Season",
        body: "Any roof over 12 years old in Arizona should receive a professional pre-monsoon inspection — not just a visual check from the ground. Our licensed inspectors get on the surface, check underlayment condition through known vulnerable points, photograph all findings, and provide a written report. XRP Roofing offers free pre-monsoon inspections throughout the Phoenix metro. Call before June — our schedule fills quickly as storm season approaches.",
      },
    ],
    faqs: [
      { q: "When should I schedule a pre-monsoon roof inspection in Phoenix?", a: "May is ideal — early enough to schedule and complete any repairs before the first storms arrive in mid-June. Our pre-monsoon schedule fills quickly, so early May is best." },
      { q: "What are the most common monsoon roof failure points?", a: "Pipe boot flashings that dry-crack in summer heat, clogged drains that cause ponding, ridge mortar failures that let wind-driven rain under tile, and aged underlayment that has lost flexibility are the four most common sources." },
      { q: "Can I inspect my own roof before monsoon season?", a: "You can do a ground-level visual check, but only a contractor on the surface can identify underlayment condition, loose fasteners, and hidden flashing failures. We recommend professional inspection for any roof over 10 years old." },
    ],
    relatedServices: [
      { label: "Roof Repair", href: "/services/roof-repair" },
      { label: "Emergency Roof Repair", href: "/services/emergency-roof-repair" },
      { label: "Storm Damage Roofing", href: "/services/storm-damage-roofing" },
    ],
  },
  "tile-vs-shingle-roofing-arizona": {
    slug: "tile-vs-shingle-roofing-arizona",
    title: "Tile vs. Shingle Roofing in Arizona: Which Is Right for Your Home?",
    excerpt: "Concrete tile and asphalt shingles are the two most common residential roofing materials in the Phoenix metro. We break down the performance, cost, and longevity differences for Arizona's climate.",
    date: "2025-04-15",
    readTime: "8 min read",
    category: "Materials",
    metaDescription: "Tile vs. shingle roofing in Arizona — a detailed comparison of cost, longevity, performance in heat and monsoons, and HOA considerations for Phoenix homeowners.",
    sections: [
      {
        heading: "The Arizona Roofing Material Decision",
        body: "Choosing between tile and shingles for an Arizona home involves tradeoffs that don't exist in other climates. Both materials perform very differently in Phoenix's extreme UV, high temperatures, and monsoon conditions than they do in the temperate climates where most national roofing guides are written. Here's the honest breakdown.",
      },
      {
        heading: "Concrete & Clay Tile: Arizona's Dominant Material",
        body: "Tile dominates the Phoenix market for good reason: 40–60+ year tile lifespan, excellent thermal mass that reduces attic heat gain, and near-universal HOA acceptance. Tile handles Arizona's UV and heat better than any other material — the tile itself will almost certainly outlast the underlayment beneath it (typically 20–30 years). The critical thing to understand is that a 'tile roof' is a two-component system. When your tile roof leaks after 20–25 years, you're almost always replacing the underlayment — not the tile. This is usually 40–60% less expensive than full tile replacement.",
      },
      {
        heading: "Architectural Shingles: The Cost-Effective Alternative",
        body: "High-quality architectural shingles (GAF Timberline HDZ, Owens Corning Duration, CertainTeed Landmark Pro) rated for high-temperature climates perform well in Arizona with proper installation and adequate attic ventilation — a 20–25 year realistic lifespan in Phoenix conditions. Shingles cost 30–50% less than a comparable tile installation, making them the right choice for many budget-conscious homeowners or where HOA rules permit both materials. The non-negotiables: only install Class A fire-rated, high-temperature architectural product — no 3-tab, no builder-grade. And get the ventilation right.",
      },
      {
        heading: "Key Comparison: Arizona-Specific Factors",
        listItems: [
          "Lifespan: Tile 40–60+ years (underlayment 20–30); Shingles 20–25 years",
          "Cost: Tile 30–50% more upfront; similar long-term cost-per-year for quality tile",
          "HOA: Nearly all Phoenix HOAs accept tile; shingles require HOA approval — verify first",
          "Heat performance: Tile superior — thermal mass reduces attic heat gain significantly",
          "Wind: Both rated for Arizona conditions if installed correctly",
          "Repair cost: Tile repairs (individual tile replacement) often cheaper than shingle patches",
          "Weight: Tile requires adequate structural support — important for additions and older homes",
        ],
      },
    ],
    faqs: [
      { q: "Which lasts longer in Arizona — tile or shingles?", a: "Tile wins on raw lifespan — 40–60+ years vs. 20–25 for quality architectural shingles in Arizona conditions. However, tile underlayment typically needs replacement at 20–30 years, which is a significant project." },
      { q: "Are shingles a good choice for Phoenix homes?", a: "Yes, with the right product. High-temperature rated architectural shingles perform well in Arizona with adequate attic ventilation. Never install 3-tab or standard builder-grade shingles in Phoenix." },
      { q: "Do I need HOA approval to choose my roofing material in Phoenix?", a: "If your home is in an HOA community, yes — most require architectural review for roofing material and color. Most Phoenix HOAs require tile. Check with your HOA before choosing a material." },
    ],
    relatedServices: [
      { label: "Tile Roofing", href: "/services/tile-roofing" },
      { label: "Shingle Roofing", href: "/services/shingle-roofing" },
      { label: "Roof Replacement", href: "/services/roof-replacement" },
    ],
  },
  "signs-your-arizona-roof-needs-replacement": {
    slug: "signs-your-arizona-roof-needs-replacement",
    title: "7 Signs Your Arizona Roof Needs Replacement (Not Just Repair)",
    excerpt: "Knowing when to repair versus replace is one of the most important — and most confusing — decisions a homeowner faces. Here are the seven clear indicators that full replacement is the right call.",
    date: "2025-03-28",
    readTime: "7 min read",
    category: "Repair & Replacement",
    metaDescription: "Learn the 7 signs an Arizona roof needs full replacement, not just repairs. Expert guidance from XRP Roofing for Phoenix homeowners facing this decision.",
    sections: [
      {
        heading: "Repair or Replace? The Right Framework",
        body: "The repair-vs-replace decision is where many Phoenix homeowners get poor advice. Some contractors push replacement when repair is sufficient; others patch failing systems that should be replaced. The right answer depends on age, extent of damage, underlayment condition, and total cost-of-ownership — not just what's easiest to sell.",
      },
      {
        heading: "7 Signs Full Replacement Is the Right Call",
        listItems: [
          "Age: Shingle roofs over 20 years old in Phoenix are typically past cost-effective repair; tile underlayment over 25 years old is in the same position",
          "Multiple simultaneous leak points: When you're patching the same roof in three different places in one season, systemic failure has begun",
          "Widespread granule loss on shingles: Bare or near-bare asphalt shingles across large areas cannot be effectively repaired — replacement is required",
          "Failed underlayment beneath intact tile: If moisture scans show wet insulation and attic staining despite intact tile surfaces, underlayment replacement is needed",
          "Sagging or soft spots: Any structural deck softness indicates long-term moisture intrusion and requires full assessment — often replacement",
          "Post-hail damage across the entire surface: If hail has impacted more than 20–30% of shingles, insurance-covered full replacement is almost always the right decision",
          "Energy bills rising without explanation: Aged or failing roofing systems lose insulating value — a new roof with proper ventilation consistently reduces cooling costs",
        ],
      },
      {
        heading: "When Repair IS the Right Answer",
        body: "Isolated flashing failures, single cracked tiles, damaged pipe boots, or localized storm damage on a roof that is otherwise sound and under 15 years old are strong repair candidates. XRP Roofing never recommends replacement when targeted repair is appropriate — our inspectors diagnose the actual condition of your entire roof system, not just the visible damage point, and give you an honest recommendation.",
      },
    ],
    faqs: [
      { q: "How do I know if my Arizona roof needs repair or full replacement?", a: "Age, extent of damage, and underlayment condition are the three key factors. Roofs under 15 years old with isolated damage are usually repair candidates. Roofs over 20 years (shingles) or with failed underlayment (tile) are typically replacement candidates. A free professional inspection gives you a definitive answer." },
      { q: "How much does a full roof replacement cost in Phoenix?", a: "Residential roof replacement in Phoenix typically ranges from $8,000–$18,000 for shingles and $15,000–$35,000+ for tile, depending on size, pitch, complexity, and material selection. We provide detailed written estimates at no charge." },
      { q: "Will my insurance cover roof replacement in Arizona?", a: "Storm-caused damage (hail, wind) that necessitates replacement is typically covered less your deductible. Age-related wear is not. We provide full documentation for storm-related claims and work with all major carriers." },
    ],
    relatedServices: [
      { label: "Roof Replacement", href: "/services/roof-replacement" },
      { label: "Roof Repair", href: "/services/roof-repair" },
      { label: "Storm Damage Roofing", href: "/services/storm-damage-roofing" },
    ],
  },
  "how-arizona-uv-damages-your-roof": {
    slug: "how-arizona-uv-damages-your-roof",
    title: "How UV Radiation Destroys Arizona Roofs (And What You Can Do About It)",
    excerpt: "Phoenix receives more UV radiation than almost any other major city in the US. We explain exactly how UV degrades different roofing materials and which products hold up best in Arizona conditions.",
    date: "2025-03-10",
    readTime: "5 min read",
    category: "Arizona Climate",
    metaDescription: "How UV radiation damages roofing materials in Arizona — and which products hold up best. Expert guide for Phoenix homeowners from XRP Roofing.",
    sections: [
      {
        heading: "Why Phoenix UV Is Uniquely Destructive to Roofing",
        body: "Phoenix receives approximately 299 sunny days per year and sits at an elevation that reduces atmospheric UV filtering. Combined with near-zero cloud cover for 8–9 months annually, this creates UV exposure levels that accelerate roofing material degradation at roughly twice the rate of northern US cities. Rooftop surface temperatures — not air temperature — drive material aging, and Phoenix rooftops regularly reach 160–180°F in summer afternoons.",
      },
      {
        heading: "How UV Degrades Each Roofing Material",
        listItems: [
          "Asphalt shingles: UV causes oxidation of the asphalt binder, making shingles brittle and causing granule loss — the granules exist specifically to block UV from reaching the asphalt beneath",
          "EPDM membrane: UV causes surface chalking, hardening, and eventual cracking — lower quality EPDM fails within 10–15 years in Arizona conditions",
          "Felt underlayment: UV destroys felt paper rapidly when exposed — the transition from felt to synthetic underlayment is partly a response to Arizona conditions",
          "Pipe boot flashings: Most are made from EPDM rubber — UV causes cracking within 7–12 years in Phoenix, making them the single most common residential roof leak source",
          "Caulks and sealants: UV causes surface hardening and adhesion loss on most polyurethane and acrylic sealants within 5–7 years",
          "Concrete and clay tile: Largely UV-resistant — tile surface color may fade but structural integrity is unaffected by UV",
        ],
      },
      {
        heading: "What You Can Do to Extend Roof Life Against UV",
        body: "Specify products with documented UV resistance ratings for Arizona: Class A architectural shingles with ceramic-coated granules, 60-mil TPO or silicone coating for flat roofs, silicone pipe boots (not EPDM), and synthetic underlayment. Attic ventilation matters significantly — an under-ventilated attic amplifies rooftop temperatures by 10–20°F, accelerating UV damage from beneath. And schedule professional inspections every 2–3 years to catch UV-degraded pipe boots, sealants, and flashing before they become active leaks.",
      },
    ],
    faqs: [
      { q: "How much faster does Arizona UV degrade asphalt shingles?", a: "Roughly 1.5–2x faster than temperate northern climates. A shingle rated for 30 years in temperate conditions will typically last 15–20 years in Phoenix without the right product specification and adequate attic ventilation." },
      { q: "What is the most UV-resistant roofing material for Phoenix?", a: "Concrete and clay tile are the most UV-resistant — the material is essentially inert to UV. For flat roofing, silicone coating systems offer excellent UV resistance. For sloped applications needing shingles, ceramic-coated architectural shingles from GAF, Owens Corning, or CertainTeed's high-temperature lines perform best." },
      { q: "How often should pipe boots be replaced in Phoenix?", a: "EPDM rubber pipe boots typically need replacement every 7–12 years in Phoenix. We recommend inspecting them at every professional inspection and replacing them proactively rather than waiting for an active leak." },
    ],
    relatedServices: [
      { label: "Roof Repair", href: "/services/roof-repair" },
      { label: "Roof Coatings", href: "/services/roof-coatings" },
      { label: "Tile Roofing", href: "/services/tile-roofing" },
    ],
  },
  "understanding-arizona-roof-insurance-claims": {
    slug: "understanding-arizona-roof-insurance-claims",
    title: "A Homeowner's Guide to Roof Insurance Claims in Arizona",
    excerpt: "Navigating a roofing insurance claim after a monsoon or hail event can be overwhelming. This guide walks you through the entire process — from initial damage assessment to final settlement.",
    date: "2025-02-20",
    readTime: "9 min read",
    category: "Insurance",
    metaDescription: "How to navigate a roof insurance claim in Arizona after monsoon or hail damage. Step-by-step guide for Phoenix homeowners from XRP Roofing.",
    sections: [
      {
        heading: "Step 1: Get a Contractor Inspection Before Calling Your Insurer",
        body: "The single most impactful thing an Arizona homeowner can do after a storm is get a licensed contractor's written inspection report before filing a claim. A detailed report with photographs, damage description, and repair scope gives your carrier everything needed to process the claim accurately — and is far more powerful than a phone report based on a satellite image. XRP Roofing provides storm damage documentation reports at no charge.",
      },
      {
        heading: "Step 2: Understanding What Is and Isn't Covered",
        listItems: [
          "Covered: Storm damage from hail, high wind, fallen trees, and other sudden weather events",
          "Covered: Damage resulting from a covered event (interior water damage from storm-caused roof failure)",
          "Not covered: Gradual wear, age-related deterioration, deferred maintenance",
          "Not covered: Pre-existing conditions that were not caused by the claimed event",
          "Gray area: Damage to a roof that had deferred maintenance — carriers may apply partial coverage or depreciation",
        ],
      },
      {
        heading: "Step 3: The Adjuster Visit",
        body: "Request that your carrier send a field adjuster rather than accepting a desk review based on satellite imagery — field inspections consistently result in more accurate assessments for complex storm damage. XRP Roofing offers to meet your adjuster on-site and walk through our damage documentation. This is the single most effective way to ensure all damage is captured in the initial assessment and reduces the need for supplemental claims.",
      },
      {
        heading: "Step 4: Supplemental Claims",
        body: "If the initial adjuster estimate is insufficient to cover the scope of work required, a supplemental claim can be filed with additional documentation. This is common for large hail events where hidden damage (underlayment, decking, flashing) is not initially assessed. We prepare supplemental documentation as a standard part of our insurance claim support service.",
      },
    ],
    faqs: [
      { q: "Should I call my insurance company or a roofer first after storm damage?", a: "Call a licensed contractor first. A professional damage report strengthens your claim significantly. Calling your carrier without documentation often results in lower initial estimates." },
      { q: "How long do I have to file a storm damage claim in Arizona?", a: "Arizona homeowner's policies typically have a 1–2 year window for storm damage claims. Check your specific policy. Document damage as soon as possible after an event regardless of when you plan to file." },
      { q: "Will my insurance rates go up if I file a roof claim?", a: "Possibly — filing a claim can affect your renewal rates. For small repairs, it may be worth weighing the claim value against potential premium increases. For major storm damage requiring full replacement, filing almost always makes financial sense given the cost offset." },
    ],
    relatedServices: [
      { label: "Storm Damage Roofing", href: "/services/storm-damage-roofing" },
      { label: "Emergency Roof Repair", href: "/services/emergency-roof-repair" },
      { label: "Roof Replacement", href: "/services/roof-replacement" },
    ],
  },
  "metal-roofing-phoenix-pros-cons": {
    slug: "metal-roofing-phoenix-pros-cons",
    title: "Is Metal Roofing Worth It in Phoenix? Pros, Cons & Costs",
    excerpt: "Metal roofing has surged in popularity across the Phoenix metro. We cover the real-world performance, energy savings, longevity, and total cost of ownership for Arizona homeowners.",
    date: "2025-02-05",
    readTime: "7 min read",
    category: "Materials",
    metaDescription: "Is metal roofing worth it in Phoenix, Arizona? Pros, cons, costs, and longevity compared to tile and shingles. Expert analysis from XRP Roofing.",
    sections: [
      {
        heading: "Why Metal Roofing Is Growing in the Phoenix Market",
        body: "Standing seam metal roofing has grown from a niche product to a mainstream choice in the Phoenix metro over the past decade. The combination of a 50–70 year lifespan, ENERGY STAR-qualified reflective coatings that meaningfully reduce cooling loads, and a modern aesthetic that works well with contemporary architecture has driven significant adoption — particularly in newer communities in Scottsdale, Gilbert, and Chandler.",
      },
      {
        heading: "The Real Pros of Metal Roofing in Arizona",
        listItems: [
          "Lifespan: 50–70 years with minimal maintenance — the best long-term cost-per-year of any roofing material",
          "Energy performance: Kynar 500 PVDF-coated panels reflect 60–70% of solar radiation vs. 25–30% for standard shingles",
          "Wind resistance: Standing seam panels rated for 140+ mph winds — exceeds Arizona building code requirements",
          "Weight: Metal is significantly lighter than tile — no structural reinforcement required in most cases",
          "Recyclability: Steel and aluminum panels are 100% recyclable at end of life",
          "Fire resistance: Class A fire rating — relevant in areas with wildland interface risk",
        ],
      },
      {
        heading: "The Real Cons — Honest Assessment",
        listItems: [
          "Upfront cost: 40–80% more expensive than quality shingles; comparable to or more than tile",
          "HOA restrictions: Many Phoenix HOAs prohibit metal roofing or limit it to specific colors and profiles — verify before purchasing",
          "Noise: Minimal for standing seam with solid sheathing beneath; more audible during hail on exposed-fastener systems",
          "Expansion/contraction: Arizona's thermal cycling is extreme — requires proper installation techniques to prevent fastener loosening over time",
          "Installer expertise: Standing seam requires specialized equipment and training — not all roofing contractors can install it correctly",
        ],
      },
      {
        heading: "Cost and Long-Term Value",
        body: "Residential standing seam metal roofing in Phoenix typically costs $18,000–$40,000+ depending on size, complexity, and gauge. Compared to a $10,000–$18,000 shingle roof that may need replacement in 20–25 years, the long-term math often favors metal for homeowners planning to stay in a property for 20+ years. ENERGY STAR rebates from APS and SRP are sometimes available and can partially offset the premium.",
      },
    ],
    faqs: [
      { q: "How much does metal roofing cost in Phoenix, AZ?", a: "Standing seam metal roofing typically costs $18,000–$40,000+ for a residential Phoenix home depending on size, complexity, gauge, and coating. We provide free detailed estimates." },
      { q: "Does metal roofing hold up to Arizona hail?", a: "Yes — properly specified 24-gauge Galvalume or steel panels handle Arizona hail very well. The finish may show impact marks from large hail, but structural integrity is typically unaffected. Many metal roofing products qualify for Class 4 impact-resistant ratings." },
      { q: "Will my Phoenix HOA allow metal roofing?", a: "Many do not — especially older established communities that require tile. Newer communities and non-HOA properties have more flexibility. Always verify with your HOA before selecting metal roofing." },
    ],
    relatedServices: [
      { label: "Metal Roofing", href: "/services/metal-roofing" },
      { label: "Roof Replacement", href: "/services/roof-replacement" },
      { label: "New Roof Installation", href: "/services/new-roof-installation" },
    ],
  },
};

interface BlogSection {
  heading: string;
  body?: string;
  listItems?: string[];
}

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  metaDescription: string;
  sections: BlogSection[];
  faqs: Array<{ q: string; a: string }>;
  relatedServices: Array<{ label: string; href: string }>;
}

export async function generateStaticParams() {
  return Object.keys(allPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts[slug];
  if (!post) return {};

  const title = `${post.title} | ${SITE_NAME}`;
  const canonical = `${SITE_URL}/blog/${slug}`;

  return {
    title,
    description: post.metaDescription,
    alternates: { canonical },
    openGraph: {
      title,
      description: post.metaDescription,
      url: canonical,
      type: "article",
      publishedTime: post.date,
      images: [{ url: OG_IMAGE }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.metaDescription,
      images: [OG_IMAGE],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = allPosts[slug];
  if (!post) notFound();

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.metaDescription}
        slug={post.slug}
        datePublished={post.date}
      />
      <FAQSchema faqs={post.faqs} />

      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-400 text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
            {post.category}
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-white mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2 prose prose-gray max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                {post.excerpt}
              </p>

              {post.sections.map((section, i) => (
                <div key={i}>
                  <h2 className="text-2xl font-black text-gray-900 mt-8 mb-4">{section.heading}</h2>
                  {section.body && (
                    <p className="text-gray-700 leading-relaxed mb-4">{section.body}</p>
                  )}
                  {section.listItems && (
                    <ul className="space-y-3 text-gray-700 mb-6">
                      {section.listItems.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xs flex-shrink-0 mt-0.5">{j + 1}</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* FAQ section in article */}
              <h2 className="text-2xl font-black text-gray-900 mt-10 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-5">
                {post.faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </article>

            <aside className="space-y-6">
              <div className="bg-orange-500 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Need a Roof Inspection?</h3>
                <p className="text-orange-100 text-sm mb-4">Free inspection by a licensed Arizona roofing professional.</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-orange-50 transition-colors w-full justify-center"
                >
                  Schedule Free Inspection <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-gray-50 rounded-2xl p-5">
                <h3 className="font-bold text-gray-900 mb-3 text-sm">Related Roofing Services</h3>
                <ul className="space-y-2">
                  {post.relatedServices.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-sm text-gray-600 hover:text-orange-500 transition-colors flex items-center gap-1">
                        <ArrowRight className="w-3 h-3 text-orange-400" /> {item.label} in Phoenix
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection variant="dark" />
    </>
  );
}
