import type { Metadata } from "next";
import type { City } from "./cities";
import type { Service } from "./services";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "./constants";

/**
 * Document titles aim for 50–60 characters.
 * Meta descriptions aim for 140–160 characters and include a call to action.
 * Copy uses services, cities, and offers already stated on the site.
 */

export const TITLE_MIN = 50;
export const TITLE_MAX = 60;
export const DESCRIPTION_MIN = 140;
export const DESCRIPTION_MAX = 160;

export function preferInRange(options: string[], min: number, max: number): string {
  const unique = [...new Set(options.map((value) => value.replace(/\s+/g, " ").trim()))];
  const fits = unique.filter((value) => value.length >= min && value.length <= max);
  if (fits.length === 0) {
    const detail = unique.map((value) => `${value.length}:${value}`).join(" || ");
    throw new Error(`No SEO string in ${min}-${max}: ${detail}`);
  }
  const mid = (min + max) / 2;
  return fits.sort((a, b) => Math.abs(a.length - mid) - Math.abs(b.length - mid) || a.length - b.length)[0];
}

function titled(value: string): string {
  return preferInRange([value], TITLE_MIN, TITLE_MAX);
}

function described(value: string): string {
  return preferInRange([value], DESCRIPTION_MIN, DESCRIPTION_MAX);
}

function servicePhrase(name: string): string {
  if (name.startsWith("TPO ")) return `TPO ${name.slice(4).toLowerCase()}`;
  return name.toLowerCase();
}

export const HOME_TITLE = titled("Phoenix Roofing Contractor for Homes | XRP Roofing");
export const HOME_DESCRIPTION = described(
  "XRP Roofing repairs and replaces tile, shingle, foam, and flat roofs in Phoenix, Arizona. Call for a free inspection and a written estimate.",
);

export const ABOUT_TITLE = titled("About XRP Roofing | Phoenix Arizona Roofing Company");
export const ABOUT_DESCRIPTION = described(
  "Learn about XRP Roofing, a Phoenix, Arizona roofing contractor for repair, replacement, tile, and foam. Call us to schedule a free inspection.",
);

export const CONTACT_TITLE = titled("Contact XRP Roofing | Free Roof Inspection in Phoenix, AZ");
export const CONTACT_DESCRIPTION = described(
  "Contact XRP Roofing for a free roof inspection in Phoenix, Arizona. Call (623) 300-8097 or send the form. We reply within one business hour.",
);

export const BOOK_TITLE = titled("Book a Free Roof Inspection in Phoenix | XRP Roofing");
export const BOOK_DESCRIPTION = described(
  "Schedule a free roof inspection with XRP Roofing. We serve Phoenix and the metro for repair, replacement, and storm damage. Book a time today.",
);

export const SERVICES_TITLE = titled("Roofing Services in Phoenix, Arizona | XRP Roofing");
export const SERVICES_DESCRIPTION = described(
  "Browse roofing services in Phoenix, Arizona. XRP Roofing handles repair, replacement, tile, commercial, and coatings. Request a free inspection.",
);

export const LOCATIONS_TITLE = titled("Roofing Service Areas | Phoenix Metro | XRP Roofing");
export const LOCATIONS_DESCRIPTION = described(
  "XRP Roofing serves 30 cities across the Phoenix metro and a 100-mile radius. Find your city and call us to book a free roof inspection today.",
);

export const BLOG_TITLE = titled("Phoenix Roofing Blog | Tips for Arizona Homes | XRP");
export const BLOG_DESCRIPTION = described(
  "Arizona roofing articles for Phoenix homeowners. Learn about leaks, tile, coatings, and storm damage, then call XRP Roofing for an inspection.",
);

export const FOAM_TITLE = titled("Foam Roofing Contractor in Phoenix, AZ | XRP Roofing");
export const FOAM_DESCRIPTION = described(
  "Need foam roofing in Phoenix, Arizona? XRP Roofing installs SPF systems and elastomeric coatings on flat roofs. Call for a free inspection today.",
);

export const PHOENIX_ROOFING_TITLE = titled("Phoenix Roofing Company | Repair & Replacement | XRP");
export const PHOENIX_ROOFING_DESCRIPTION = described(
  "Phoenix, Arizona roofing company for repair, replacement, tile, flat, and storm damage. Call XRP Roofing to schedule a free inspection today.",
);

export const PHOENIX_ROOFING_H1 = "Phoenix Roofing Company for Repair and Replacement";
export const PHOENIX_ROOFING_INTRO =
  "Looking for roofers in Phoenix? XRP Roofing inspects, repairs, and replaces roofs on homes and businesses across the Valley. Free inspections, written estimates, and storm-damage documentation.";

export const PRIVACY_TITLE = titled("Online Privacy Policy | XRP Roofing, Phoenix, Arizona");
export const PRIVACY_DESCRIPTION = described(
  "Read how XRP Roofing in Phoenix, Arizona collects and uses information from calls, forms, and texts. Review the policy, then contact us with questions.",
);

export const TERMS_TITLE = titled("Terms and Conditions | XRP Roofing Phoenix Arizona");
export const TERMS_DESCRIPTION = described(
  "Read XRP Roofing terms for Phoenix, Arizona, including text-message rules, rates, and how to reach us. Questions about a message? Contact us.",
);

export const LANDING_TITLE = titled("Free Roof Inspection | Phoenix Arizona | XRP Roofing");
export const LANDING_DESCRIPTION = described(
  "Request a free roof inspection from XRP Roofing in Phoenix, Arizona. Repair, replacement, storm damage, and commercial roofs. Call or send the form.",
);

export const ARIZONA_ROOFERS_TITLE = titled("Arizona Roofers in the Phoenix Metro | XRP Roofing");
export const ARIZONA_ROOFERS_DESCRIPTION = described(
  "Arizona roofers for repair, replacement, tile, and storm damage in the Phoenix metro. Call XRP Roofing to book a free roof inspection today.",
);

export function cityPageTitle(city: Pick<City, "name">): string {
  const name = city.name;
  return preferInRange(
    [
      `Licensed Roofers in ${name}, Arizona | XRP Roofing`,
      `Licensed Roofers Serving ${name}, Arizona | XRP Roofing`,
      `${name}, Arizona Roofing Contractor | XRP Roofing`,
      `Roofing Contractor in ${name}, Arizona | XRP`,
      `${name} Roofing Contractor | Phoenix Metro | XRP`,
    ],
    TITLE_MIN,
    TITLE_MAX,
  );
}

export function cityPageDescription(city: Pick<City, "name">): string {
  const name = city.name;
  return preferInRange(
    [
      `Need roofers in ${name}, Arizona? XRP Roofing repairs and replaces tile, shingle, foam, and flat roofs. Call for a free inspection today.`,
      `Roofers in ${name}, Arizona for repair, replacement, tile, and storm damage. Call XRP Roofing to schedule a free inspection and written estimate.`,
      `XRP Roofing serves ${name}, Arizona with roof repair, replacement, tile, shingle, and storm-damage work. Call today for a free inspection.`,
      `Looking for roofers in ${name}, AZ? XRP Roofing handles repair, replacement, tile, shingle, foam, and flat roofs. Request a free inspection.`,
      `XRP Roofing is a roofing contractor serving ${name} and the Phoenix metro. Repair, replacement, tile, and storm damage. Call for a free inspection.`,
      `${name}, Arizona roofers for homes and businesses. XRP Roofing handles repair, replacement, and storm damage. Call to book a free inspection.`,
    ],
    DESCRIPTION_MIN,
    DESCRIPTION_MAX,
  );
}

export function servicePageTitle(service: Pick<Service, "name">): string {
  const name = service.name;
  return preferInRange(
    [
      `${name} in Phoenix, Arizona | XRP Roofing`,
      `${name} Contractor in Phoenix, Arizona | XRP Roofing`,
      `${name} Services in Phoenix, Arizona | XRP`,
      `${name} for Phoenix, Arizona | XRP Roofing`,
      `Phoenix ${name} | Arizona | XRP Roofing`,
      `${name} in Phoenix AZ | XRP Roofing Company`,
    ],
    TITLE_MIN,
    TITLE_MAX,
  );
}

export function servicePageDescription(service: Pick<Service, "name">): string {
  const name = service.name;
  const phrase = servicePhrase(name);
  return preferInRange(
    [
      `${name} in Phoenix, Arizona for homes and businesses. XRP Roofing inspects the roof and gives you a written estimate. Call for a free inspection.`,
      `Need ${phrase} in Phoenix, Arizona? XRP Roofing serves the metro with licensed crews. Call today to book a free roof inspection.`,
      `XRP Roofing provides ${phrase} across Phoenix, Arizona. Free inspections and written estimates for homes and businesses. Call to schedule.`,
      `${name} across the Phoenix metro from XRP Roofing. We inspect, explain what we find, and send a written estimate. Call for a free inspection.`,
      `Looking for ${phrase} in Phoenix, AZ? Call XRP Roofing for a free inspection and a written estimate. Serving homes and businesses.`,
    ],
    DESCRIPTION_MIN,
    DESCRIPTION_MAX,
  );
}

export function cityServiceTitle(city: Pick<City, "name">, service: Pick<Service, "name">): string {
  const cityName = city.name;
  const serviceName = service.name;
  const serviceTitle = servicePageTitle(service);
  return preferInRange(
    [
      `${serviceName} Services in ${cityName}, Arizona | XRP Roofing`,
      `${serviceName} in ${cityName}, Arizona | XRP Roofing`,
      `${serviceName} in ${cityName}, AZ | XRP Roofing`,
      `${serviceName} in ${cityName}, Arizona | XRP`,
      `${cityName} ${serviceName} | Arizona | XRP Roofing`,
      `Licensed ${serviceName} in ${cityName}, AZ | XRP`,
      `${serviceName} for ${cityName}, Arizona | XRP Roofing`,
      `${cityName}, AZ ${serviceName} Services | XRP Roofing`,
      `${cityName} ${serviceName} Contractor | XRP Roofing`,
    ].filter((title) => title !== serviceTitle),
    TITLE_MIN,
    TITLE_MAX,
  );
}

export function cityServiceDescription(city: Pick<City, "name">, service: Pick<Service, "name">): string {
  const cityName = city.name;
  const serviceName = service.name;
  const phrase = servicePhrase(serviceName);
  return preferInRange(
    [
      `${serviceName} in ${cityName}, Arizona for homes and businesses. XRP Roofing inspects the roof and sends a written estimate. Call for a free inspection.`,
      `Need ${phrase} in ${cityName}, Arizona? XRP Roofing covers the Phoenix metro. Call today to book a free inspection and written estimate.`,
      `XRP Roofing provides ${phrase} in ${cityName}, Arizona. Free inspections and a written estimate for homes and businesses. Call to schedule.`,
      `${serviceName} in ${cityName}, AZ. XRP Roofing will inspect the roof and give you a written estimate. Call today to book a free inspection.`,
      `Looking for ${phrase} in ${cityName}, Arizona? Call XRP Roofing for a free inspection and a written estimate. Serving the Phoenix metro.`,
      `${serviceName} for ${cityName} and the Phoenix metro. XRP Roofing inspects, explains the findings, and sends a written estimate. Call for a free inspection.`,
      `Schedule ${phrase} in ${cityName}, Arizona with XRP Roofing. Free roof inspections and written estimates. Call to book a visit today.`,
    ],
    DESCRIPTION_MIN,
    DESCRIPTION_MAX,
  );
}

export function servicePageH1(service: Pick<Service, "name">): string {
  return `${service.name} for the Phoenix Metro`;
}

type BlogSeo = { title: string; description: string };

export const blogSeo: Record<string, BlogSeo> = {
  "phoenix-tile-roofs-fail-inside-out-underlayment-flashing-heat": {
    title: titled("Why Phoenix Tile Roofs Fail From the Inside | XRP Roofing"),
    description: described(
      "Why Phoenix tile roofs leak from the inside: underlayment, flashing, and heat, and when a lift and relay makes sense. Call XRP Roofing for a free inspection.",
    ),
  },
  "hidden-water-damage-mold-after-roof-leak-phoenix": {
    title: titled("Hidden Water Damage After a Phoenix Roof Leak | XRP"),
    description: described(
      "A ceiling stain can hide moisture after a roof leak in Phoenix. What to check, and when to book an inspection. Call XRP Roofing for a free look.",
    ),
  },
  "post-monsoon-roof-checklist-phoenix": {
    title: titled("Phoenix Roof Checklist After Monsoon Season | XRP Roofing"),
    description: described(
      "A post-monsoon roof checklist for Phoenix: what to clear, reseal, and document before the next storm season. Call XRP Roofing to book a free inspection.",
    ),
  },
  "how-often-roof-inspection-phoenix": {
    title: titled("How Often to Inspect Your Phoenix Roof | XRP Roofing"),
    description: described(
      "How often Phoenix homeowners should inspect a roof, what a visit includes, and signs that should not wait. Call XRP Roofing for a free inspection.",
    ),
  },
  "september-30-deadline-final-roof-inspection-phoenix": {
    title: titled("Final Phoenix Roof Check Before September 30 | XRP Roofing"),
    description: described(
      "Why a Phoenix roof deserves one more inspection before monsoon season ends, and what that visit should cover. Call XRP Roofing to book a free inspection.",
    ),
  },
  "tile-roof-repair-lift-relay-or-replace-arizona": {
    title: titled("Arizona Tile Roof: Repair, Relay, or Replace | XRP Roofing"),
    description: described(
      "How to tell whether an Arizona tile roof needs a repair, a lift-and-relay, or a full replacement. Call XRP Roofing for a free inspection and a written estimate.",
    ),
  },
  "shingles-vs-tile-after-monsoon-season-phoenix": {
    title: titled("Shingles or Tile After Monsoon in Phoenix | XRP Roofing"),
    description: described(
      "Shingles vs. tile for Phoenix homes after monsoon season: heat, wind, and why underlayment matters. Call XRP Roofing to book a free inspection.",
    ),
  },
  "standing-seam-vs-corrugated-metal-roofing-arizona": {
    title: titled("Arizona Metal Roofs: Standing Seam vs Corrugated | XRP"),
    description: described(
      "Standing seam vs. corrugated metal roofing in Arizona: fasteners, upkeep, and slope. Call XRP Roofing for a free inspection and a written estimate.",
    ),
  },
  "september-dry-window-monsoon-damage-repair-phoenix": {
    title: titled("Phoenix September Window for Monsoon Roof Repair | XRP"),
    description: described(
      "Early September is a dry window to fix monsoon damage on Phoenix-area roofs before the next storm. Call XRP Roofing to schedule a free inspection.",
    ),
  },
  "late-monsoon-september-roof-check-phoenix": {
    title: titled("Phoenix Late Monsoon Roof Inspection Guide | XRP Roofing"),
    description: described(
      "Late-season storms can still hit Phoenix through September. What to inspect on the roof before the month ends. Call XRP Roofing for a free inspection.",
    ),
  },
  "post-monsoon-debris-settled-flashing-phoenix": {
    title: titled("Phoenix Roof Debris and Flashing Check After Storms | XRP"),
    description: described(
      "After monsoon winds, check Phoenix valleys for debris and flashing that opened up. Call XRP Roofing to book a free inspection before the next rain.",
    ),
  },
  "phoenix-attic-ventilation-roof-damage": {
    title: titled("Phoenix Attic Heat and Roof Damage Guide | XRP Roofing"),
    description: described(
      "A hot Phoenix attic can age underlayment and fasteners early. Signs of poor ventilation, and when a repair is enough. Call XRP Roofing for a free inspection.",
    ),
  },
  "phoenix-roof-thermal-expansion-damage": {
    title: titled("Thermal Expansion and Phoenix Roof Damage | XRP Roofing"),
    description: described(
      "Desert temperature swings expand and contract a roof every day. How that shortens roof life in Phoenix, and what to watch. Call XRP Roofing for an inspection.",
    ),
  },
  "foam-roofing-arizona": {
    title: titled("Arizona Foam Roofing Lifespan and Upkeep | XRP Roofing"),
    description: described(
      "How long foam roofing lasts in Arizona, how SPF handles Phoenix heat, and when a repair, recoat, or replacement fits. Call XRP Roofing for a free inspection.",
    ),
  },
  "post-monsoon-hidden-roof-damage-arizona": {
    title: titled("Arizona Monsoon Roof Damage You Cannot See | XRP Roofing"),
    description: described(
      "Monsoon damage can stay hidden for weeks on Arizona roofs. A homeowner checklist for tile, shingle, and foam. Call XRP Roofing for a free inspection.",
    ),
  },
  "roof-coatings-vs-roof-replacement-phoenix": {
    title: titled("Phoenix Roof Coating or Full Replacement? | XRP Roofing"),
    description: described(
      "When a Phoenix roof coating is enough, and when replacement is the better call. What an honest assessment should cover. Call XRP Roofing for a free inspection.",
    ),
  },
  "emergency-roof-repair-arizona": {
    title: titled("Arizona Emergency Roof Repair: What to Do | XRP Roofing"),
    description: described(
      "What to do during an active roof leak in Arizona, when to call a roofer, and what emergency repair usually includes. Call XRP Roofing for help now.",
    ),
  },
  "roof-leak-repair-cost-arizona": {
    title: titled("Roof Leak Repair Cost Factors in Arizona | XRP Roofing"),
    description: described(
      "What affects roof leak repair cost in Arizona, common leak sources, and when another patch is the wrong call. Call XRP Roofing for a free inspection.",
    ),
  },
  "storm-damage-roof-inspection-arizona": {
    title: titled("Arizona Storm Damage Roof Inspection Guide | XRP Roofing"),
    description: described(
      "What a storm-damage roof inspection covers after Arizona wind, hail, and debris, including photos and written findings. Call XRP Roofing to schedule one.",
    ),
  },
  "commercial-roofing-pricing-phoenix": {
    title: titled("Commercial Roofing Cost Factors in Phoenix | XRP Roofing"),
    description: described(
      "What drives commercial roofing cost in Phoenix: TPO, flat roofs, coatings, access, and downtime. Call XRP Roofing for a free inspection and a written estimate.",
    ),
  },
  "hoa-roofing-requirements-arizona": {
    title: titled("Arizona HOA Roofing Rules Homeowners Should Know | XRP"),
    description: described(
      "Arizona HOA roofing rules: material approvals, colors, tile profiles, and the paperwork to gather before work starts. Call XRP Roofing with questions.",
    ),
  },
  "insurance-roof-claim-guide-arizona": {
    title: titled("Arizona Roof Insurance Claim Guide for Homes | XRP Roofing"),
    description: described(
      "How Arizona homeowners document storm damage, photos, and repair estimates, and which questions to ask an insurer. Call XRP Roofing for a free inspection.",
    ),
  },
  "how-to-prepare-your-roof-for-monsoon-season-arizona": {
    title: titled("A Phoenix Monsoon Roof Prep Checklist | XRP Roofing"),
    description: described(
      "How to prepare a Phoenix roof for monsoon season: inspection points, flashing, and drainage before the first storm. Call XRP Roofing for a free inspection.",
    ),
  },
  "tile-vs-shingle-roofing-arizona": {
    title: titled("Tile vs Shingle Roofing Across Arizona | XRP Roofing"),
    description: described(
      "Tile vs. shingle roofing in Arizona: lifespan, heat, monsoon performance, and HOA limits for Phoenix homes. Call XRP Roofing for a free inspection.",
    ),
  },
  "signs-your-arizona-roof-needs-replacement": {
    title: titled("7 Signs an Arizona Roof Needs Replacement | XRP Roofing"),
    description: described(
      "Seven signs an Arizona roof needs replacement rather than another repair, and how to decide with a written inspection. Call XRP Roofing to schedule one.",
    ),
  },
  "how-arizona-uv-damages-your-roof": {
    title: titled("Arizona Sun Damage on Roofs: What to Watch | XRP Roofing"),
    description: described(
      "How Arizona UV breaks down roofing materials, which products hold up better, and what Phoenix homeowners can do. Call XRP Roofing for a free inspection.",
    ),
  },
  "understanding-arizona-roof-insurance-claims": {
    title: titled("What to Expect From an Arizona Roof Claim | XRP Roofing"),
    description: described(
      "What to expect after monsoon or hail damage in Arizona: an inspection, photos, a repair estimate, and the adjuster visit. Call XRP Roofing to book one.",
    ),
  },
  "metal-roofing-phoenix-pros-cons": {
    title: titled("Phoenix Metal Roofing Pros, Cons, and Fit | XRP Roofing"),
    description: described(
      "Pros, cons, and lifespan of metal roofing in Phoenix compared with tile and shingles. A practical homeowner guide. Call XRP Roofing for a free inspection.",
    ),
  },
};

export function pageMetadata(input: {
  title: string;
  description: string;
  path: string;
  image?: string;
  index?: boolean;
  ogType?: "website" | "article";
}): Metadata {
  const url = input.path === "/" ? SITE_URL : `${SITE_URL}${input.path}`;
  const image = input.image ?? OG_IMAGE;
  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: url },
    robots: input.index === false ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      type: input.ogType ?? "website",
      locale: "en_US",
      url,
      siteName: SITE_NAME,
      title: input.title,
      description: input.description,
      images: [{ url: image, alt: `${SITE_NAME} in Phoenix, Arizona` }],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [image],
    },
  };
}
