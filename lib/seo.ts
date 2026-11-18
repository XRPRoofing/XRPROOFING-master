import type { City } from "./cities";
import type { Service } from "./services";

/**
 * Document titles aim for 60 characters or fewer.
 * Meta descriptions aim for 155 characters or fewer.
 * Service URLs (/services/*) and city URLs (/locations/*) use different patterns
 * so Phoenix pages do not share a title.
 */

export const HOME_TITLE = "Roofers in Phoenix, AZ | XRP Roofing";
export const HOME_DESCRIPTION =
  "Roofers in Phoenix, AZ. XRP Roofing is a local roofing company for repair, replacement, tile, flat, and storm damage. Free inspections.";

export const PHOENIX_ROOFING_TITLE = "Roofing Company Phoenix AZ | XRP";
export const PHOENIX_ROOFING_DESCRIPTION =
  "Phoenix roofing company for repair, replacement, tile, and storm damage. Local roofers in Phoenix with free inspections from XRP Roofing.";

export const PHOENIX_ROOFING_H1 = "Phoenix Roofing Company for Repair and Replacement";
export const PHOENIX_ROOFING_INTRO =
  "Looking for roofers in Phoenix? XRP Roofing inspects, repairs, and replaces roofs on homes and businesses across the Valley. Free inspections, written estimates, and storm-damage documentation.";

export function cityPageTitle(city: Pick<City, "name" | "slug">): string {
  if (city.slug === "phoenix-az") return "Roofing Contractor Phoenix AZ | XRP";
  return `Roofers in ${city.name}, AZ | XRP Roofing`;
}

export function cityPageDescription(city: Pick<City, "name" | "slug">): string {
  if (city.slug === "phoenix-az") {
    return "Roofing contractor in Phoenix, AZ for repair, replacement, tile, flat, and commercial roofs. Free inspection from XRP Roofing.";
  }
  return `Roofers in ${city.name}, AZ for repair, replacement, tile, and storm damage. Free inspection from XRP Roofing.`;
}

export function servicePageTitle(service: Pick<Service, "name">): string {
  return `${service.name} | Phoenix Metro | XRP`;
}

export function servicePageDescription(service: Pick<Service, "metaDescription">): string {
  return service.metaDescription;
}

export function cityServiceTitle(city: Pick<City, "name">, service: Pick<Service, "name">): string {
  return `${service.name} in ${city.name}, AZ | XRP`;
}

export function cityServiceDescription(city: Pick<City, "name">, service: Pick<Service, "name">): string {
  return `${service.name} in ${city.name}, AZ. Free inspection and a written estimate from licensed XRP Roofing crews.`;
}

export function servicePageH1(service: Pick<Service, "name">): string {
  return `${service.name} for the Phoenix Metro`;
}

type BlogSeo = { title: string; description: string };

export const blogSeo: Record<string, BlogSeo> = {
  "phoenix-tile-roofs-fail-inside-out-underlayment-flashing-heat": {
    title: "Why Phoenix Tile Roofs Fail Inside Out | XRP",
    description:
      "Why Phoenix tile roofs leak from the inside out: underlayment, flashing, and heat, and when a lift and relay makes sense.",
  },
  "hidden-water-damage-mold-after-roof-leak-phoenix": {
    title: "Hidden Roof Leak Damage in Phoenix | XRP",
    description:
      "A ceiling stain can hide moisture after a roof leak. What Phoenix homeowners should check, and when to book a roof inspection.",
  },
  "post-monsoon-roof-checklist-phoenix": {
    title: "Phoenix Roof Monsoon Checklist | XRP",
    description:
      "A post-monsoon roof checklist for Phoenix: what to clear, reseal, and document before the next storm season.",
  },
  "how-often-roof-inspection-phoenix": {
    title: "How Often to Inspect a Phoenix Roof | XRP",
    description:
      "How often Phoenix homeowners should inspect a roof, what a visit includes, and warning signs that should not wait.",
  },
  "september-30-deadline-final-roof-inspection-phoenix": {
    title: "Final Phoenix Roof Check Before Sept 30",
    description:
      "Why a Phoenix roof deserves one more inspection before monsoon season ends, and what that visit should cover.",
  },
  "tile-roof-repair-lift-relay-or-replace-arizona": {
    title: "Tile Roof: Repair, Relay, or Replace | XRP",
    description:
      "How to tell whether an Arizona tile roof needs a repair, a lift-and-relay, or a full replacement before you approve work.",
  },
  "shingles-vs-tile-after-monsoon-season-phoenix": {
    title: "Shingles vs Tile After Monsoon | XRP",
    description:
      "Shingles vs. tile for Phoenix homes after monsoon season: heat, wind, cost, HOA rules, and why underlayment matters.",
  },
  "standing-seam-vs-corrugated-metal-roofing-arizona": {
    title: "Standing Seam vs Corrugated Metal | XRP",
    description:
      "Standing seam vs. corrugated metal roofing in Arizona: fasteners, upkeep, slope, cost, and which system fits the house.",
  },
  "september-dry-window-monsoon-damage-repair-phoenix": {
    title: "September Roof Repair Window in Phoenix",
    description:
      "Early September is a dry window to fix monsoon damage on Phoenix-area roofs before the next storm. What to repair first.",
  },
  "late-monsoon-september-roof-check-phoenix": {
    title: "Late Monsoon Roof Check for Phoenix | XRP",
    description:
      "Late-season storms can still hit Phoenix through September. What to inspect on the roof before the month ends.",
  },
  "post-monsoon-debris-settled-flashing-phoenix": {
    title: "Post-Monsoon Debris and Flashing Check",
    description:
      "After monsoon winds, check Phoenix valleys for debris and flashing that opened up. What to look for before the next rain.",
  },
  "phoenix-attic-ventilation-roof-damage": {
    title: "Phoenix Attic Heat and Roof Damage | XRP",
    description:
      "A hot Phoenix attic can age underlayment and fasteners early. Signs of poor ventilation and when a repair is enough.",
  },
  "phoenix-roof-thermal-expansion-damage": {
    title: "How Thermal Cycling Ages Phoenix Roofs",
    description:
      "Desert temperature swings expand and contract a roof every day. How that shortens roof life in Phoenix, and what to watch.",
  },
  "foam-roofing-arizona": {
    title: "Foam Roofing in Arizona: Lifespan and Cost",
    description:
      "How long foam roofing lasts in Arizona, how SPF handles Phoenix heat, and when a repair, recoat, or replacement fits.",
  },
  "post-monsoon-hidden-roof-damage-arizona": {
    title: "Hidden Roof Damage After Arizona Monsoon",
    description:
      "Monsoon damage can stay hidden for weeks. A homeowner checklist for tile, shingle, and foam roofs in Arizona.",
  },
  "roof-coatings-vs-roof-replacement-phoenix": {
    title: "Roof Coatings vs Replacement in Phoenix",
    description:
      "When a Phoenix roof coating is enough, and when replacement is the better call. What an honest assessment should cover.",
  },
  "emergency-roof-repair-arizona": {
    title: "Emergency Roof Repair in Arizona | XRP",
    description:
      "What to do during an active roof leak in Arizona, when to call a roofer, and what emergency repair usually includes.",
  },
  "roof-leak-repair-cost-arizona": {
    title: "Roof Leak Repair Cost in Arizona | XRP",
    description:
      "What affects roof leak repair cost in Arizona, common leak sources, and when replacement costs less than another patch.",
  },
  "storm-damage-roof-inspection-arizona": {
    title: "Storm Damage Roof Inspection in Arizona",
    description:
      "What a storm-damage roof inspection covers after Arizona wind, hail, and debris, including photos and written findings.",
  },
  "commercial-roofing-pricing-phoenix": {
    title: "Commercial Roofing Costs in Phoenix | XRP",
    description:
      "What drives commercial roofing cost in Phoenix: TPO, flat roofs, coatings, access, warranties, and downtime.",
  },
  "hoa-roofing-requirements-arizona": {
    title: "HOA Roofing Rules in Arizona | XRP",
    description:
      "Arizona HOA roofing rules: material approvals, colors, tile profiles, and the paperwork to gather before work starts.",
  },
  "insurance-roof-claim-guide-arizona": {
    title: "Arizona Roof Insurance Claim Guide | XRP",
    description:
      "How Arizona homeowners document storm damage, photos, and repair estimates, and which questions to ask an insurer.",
  },
  "how-to-prepare-your-roof-for-monsoon-season-arizona": {
    title: "Prepare a Phoenix Roof for Monsoon | XRP",
    description:
      "How to prepare a Phoenix roof for monsoon season: inspection points, flashing, and drainage before the first storm.",
  },
  "tile-vs-shingle-roofing-arizona": {
    title: "Tile vs Shingle Roofing in Arizona | XRP",
    description:
      "Tile vs. shingle roofing in Arizona: cost, lifespan, heat, monsoon performance, and HOA limits for Phoenix homes.",
  },
  "signs-your-arizona-roof-needs-replacement": {
    title: "7 Signs an Arizona Roof Needs Replacement",
    description:
      "Seven signs an Arizona roof needs replacement rather than another repair, and how to decide with a written inspection.",
  },
  "how-arizona-uv-damages-your-roof": {
    title: "How Arizona UV Damages Roofs | XRP",
    description:
      "How Arizona UV breaks down roofing materials, which products hold up better, and what Phoenix homeowners can do.",
  },
  "understanding-arizona-roof-insurance-claims": {
    title: "What to Expect From an AZ Roof Claim",
    description:
      "What to expect after monsoon or hail damage in Arizona: inspection, photos, a repair estimate, and the adjuster visit.",
  },
  "metal-roofing-phoenix-pros-cons": {
    title: "Is Metal Roofing Worth It in Phoenix?",
    description:
      "Pros, cons, cost, and lifespan of metal roofing in Phoenix compared with tile and shingles. A practical homeowner guide.",
  },
};
