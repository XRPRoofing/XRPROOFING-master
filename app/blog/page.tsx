import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/constants";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: `Roofing Blog | Arizona Roofing Tips & Guides | ${SITE_NAME}`,
  description:
    "Expert roofing tips, guides, and advice for Arizona homeowners. Learn about roof maintenance, monsoon prep, material selection, and more from XRP Roofing.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: `Arizona Roofing Tips & Guides | XRP Roofing`,
    description: "Expert roofing tips, guides, and advice for Arizona homeowners. Learn about roof maintenance, monsoon prep, material selection, and more from XRP Roofing.",
    url: `${SITE_URL}/blog`,
    images: [{ url: OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Arizona Roofing Tips & Guides | XRP Roofing`,
    description: "Expert roofing tips, guides, and advice for Arizona homeowners. Learn about roof maintenance, monsoon prep, material selection, and more from XRP Roofing.",
    images: [OG_IMAGE],
  },
};

const posts = [
  {
    slug: "post-monsoon-hidden-roof-damage-arizona",
    title: "How to Spot (and Prevent) Hidden Roof Damage After Arizona's Monsoon Season",
    excerpt: "Most monsoon roof damage does not announce itself with a ceiling stain. It sits quietly through the dry weeks that follow and shows up on the first storm of the next season. Here is what to look for once the storms stop — and what only shows up from the roof itself.",
    date: "2026-09-01",
    readTime: "8 min read",
    category: "Storm Damage",
  },
  {
    slug: "phoenix-roof-thermal-expansion-damage",
    title: "Why Phoenix Roofs Fail Faster Than Expected: The Hidden Role of Thermal Expansion and Contraction",
    excerpt: "A Phoenix roof surface can pass 170°F in the afternoon and shed 40 degrees overnight — every single day, for months. Nothing on the roof is damaged by any one of those cycles, which is exactly why thermal movement is the most underestimated reason Arizona roofs wear out ahead of their rated life.",
    date: "2026-08-26",
    readTime: "12 min read",
    category: "Arizona Climate",
  },
  {
    slug: "foam-roofing-arizona",
    title: "Foam Roofing in Arizona: How Long Does It Last and Is It Worth It?",
    excerpt: "Spray foam is one of the best-performing flat roof systems in the Phoenix valley — as long as the coating over it is maintained. Here is how SPF roofing actually works in Arizona heat, how long it lasts, what goes wrong, and how to tell whether your foam roof needs a repair, a recoat, or a replacement.",
    date: "2026-08-26",
    readTime: "11 min read",
    category: "Foam Roofing",
  },
  {
    slug: "roof-coatings-vs-roof-replacement-phoenix",
    title: "Roof Coatings vs. Full Replacement in Phoenix: When a Coating Is Enough (and When It's Not)",
    excerpt: "A roof coating can genuinely extend the service life of a sound Phoenix roof — but applied over the wrong roof, it buys time you do not actually have. Here is how to tell which situation you are in before you spend money.",
    date: "2026-08-21",
    readTime: "7 min read",
    category: "Roof Coatings",
  },
  {
    slug: "emergency-roof-repair-arizona",
    title: "Emergency Roof Repair in Arizona: What to Do First",
    excerpt: "Active roof leaks and storm damage can escalate quickly in Arizona. Learn what to do first, when to call, what emergency repairs include, and how to document damage.",
    date: "2025-06-12",
    readTime: "7 min read",
    category: "Emergency Repair",
  },
  {
    slug: "roof-leak-repair-cost-arizona",
    title: "Roof Leak Repair Cost in Arizona: What Affects the Price?",
    excerpt: "Roof leak repair costs vary based on material, leak source, access, urgency, and hidden moisture. Here is how Arizona homeowners should think about pricing.",
    date: "2025-06-05",
    readTime: "8 min read",
    category: "Repair & Replacement",
  },
  {
    slug: "storm-damage-roof-inspection-arizona",
    title: "Storm Damage Roof Inspection in Arizona: What Contractors Look For",
    excerpt: "After monsoon wind or hail, roof damage is not always visible from the ground. Learn what a professional Arizona storm damage inspection should include.",
    date: "2025-05-29",
    readTime: "7 min read",
    category: "Storm Damage",
  },
  {
    slug: "commercial-roofing-pricing-phoenix",
    title: "Commercial Roofing Pricing in Phoenix: Cost Factors for Building Owners",
    excerpt: "Commercial roofing pricing depends on membrane type, insulation, access, roof size, moisture, warranties, and business disruption planning.",
    date: "2025-05-22",
    readTime: "8 min read",
    category: "Commercial Roofing",
  },
  {
    slug: "hoa-roofing-requirements-arizona",
    title: "HOA Roofing Requirements in Arizona: What Homeowners Need to Know",
    excerpt: "Arizona HOA communities often regulate roof material, color, profile, and approval documents. Learn how to avoid delays before repair or replacement.",
    date: "2025-05-15",
    readTime: "7 min read",
    category: "HOA Roofing",
  },
  {
    slug: "insurance-roof-claim-guide-arizona",
    title: "Insurance Roof Claim Guide for Arizona Homeowners",
    excerpt: "A practical guide to roof insurance claims in Arizona: inspections, documentation, adjusters, deductibles, supplements, and when not to file.",
    date: "2025-05-08",
    readTime: "9 min read",
    category: "Insurance",
  },
  {
    slug: "how-to-prepare-your-roof-for-monsoon-season-arizona",
    title: "How to Prepare Your Phoenix Roof for Monsoon Season",
    excerpt: "Arizona's monsoon season runs June through September and brings some of the most intense storm conditions in the country. Here's how to make sure your roof is ready before the storms hit.",
    date: "2025-05-01",
    readTime: "6 min read",
    category: "Maintenance",
  },
  {
    slug: "tile-vs-shingle-roofing-arizona",
    title: "Tile vs. Shingle Roofing in Arizona: Which Is Right for Your Home?",
    excerpt: "Concrete tile and asphalt shingles are the two most common residential roofing materials in the Phoenix metro. We break down the performance, cost, and longevity differences for Arizona's climate.",
    date: "2025-04-15",
    readTime: "8 min read",
    category: "Materials",
  },
  {
    slug: "signs-your-arizona-roof-needs-replacement",
    title: "7 Signs Your Arizona Roof Needs Replacement (Not Just Repair)",
    excerpt: "Knowing when to repair versus replace is one of the most important — and most confusing — decisions a homeowner faces. Here are the seven clear indicators that full replacement is the right call.",
    date: "2025-03-28",
    readTime: "7 min read",
    category: "Repair & Replacement",
  },
  {
    slug: "how-arizona-uv-damages-your-roof",
    title: "How UV Radiation Destroys Arizona Roofs (And What You Can Do About It)",
    excerpt: "Phoenix receives more UV radiation than almost any other major city in the US. We explain exactly how UV degrades different roofing materials and which products hold up best in Arizona conditions.",
    date: "2025-03-10",
    readTime: "5 min read",
    category: "Arizona Climate",
  },
  {
    slug: "understanding-arizona-roof-insurance-claims",
    title: "A Homeowner's Guide to Roof Insurance Claims in Arizona",
    excerpt: "Navigating a roofing insurance claim after a monsoon or hail event can be overwhelming. This guide walks you through the entire process — from initial damage assessment to final settlement.",
    date: "2025-02-20",
    readTime: "9 min read",
    category: "Insurance",
  },
  {
    slug: "metal-roofing-phoenix-pros-cons",
    title: "Is Metal Roofing Worth It in Phoenix? Pros, Cons & Costs",
    excerpt: "Metal roofing has surged in popularity across the Phoenix metro. We cover the real-world performance, energy savings, longevity, and total cost of ownership for Arizona homeowners.",
    date: "2025-02-05",
    readTime: "7 min read",
    category: "Materials",
  },
];

const categories = ["All", "Roof Coatings", "Emergency Repair", "Storm Damage", "Commercial Roofing", "HOA Roofing", "Maintenance", "Materials", "Repair & Replacement", "Arizona Climate", "Insurance"];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-orange-700 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Roofing Blog
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Arizona Roofing Tips &amp; Guides
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Expert advice for Phoenix metro homeowners on roof maintenance, materials, repairs, and navigating Arizona&apos;s extreme climate.
          </p>
        </div>
      </section>

      {/* Category Filter (visual only for now) */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                  cat === "All"
                    ? "bg-orange-700 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-orange-50 hover:text-orange-600"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200"
              >
                <div className="bg-gradient-to-br from-orange-600 to-orange-800 h-40 flex items-center justify-center">
                  <span className="text-5xl">🏠</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors leading-snug mb-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a Roofing Expert in Phoenix?"
        subtitle="Get a free inspection from XRP Roofing — Phoenix's trusted, licensed roofing contractor."
        variant="dark"
      />
    </>
  );
}
