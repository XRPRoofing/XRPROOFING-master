/** Canonical paths for the SEO landing pages. Safe to import from next.config.ts. */

export const SHINGLE_HUB = "/shingle-roofing";
export const TILE_HUB = "/tile-roofing";
export const FOAM_HUB = "/spray-foam-roofing";
export const INSURANCE_PATH = "/roof-insurance-claim";
export const SERVICE_AREAS_HUB = "/service-areas";
export const ESTIMATE_PATH = "/contact#estimate";

export const serviceAreaCities = [
  { slug: "phoenix", name: "Phoenix", legacySlug: "phoenix-az" },
  { slug: "mesa", name: "Mesa", legacySlug: "mesa-az" },
  { slug: "apache-junction", name: "Apache Junction", legacySlug: "apache-junction-az" },
  { slug: "gilbert", name: "Gilbert", legacySlug: "gilbert-az" },
  { slug: "chandler", name: "Chandler", legacySlug: "chandler-az" },
  { slug: "scottsdale", name: "Scottsdale", legacySlug: "scottsdale-az" },
  { slug: "tempe", name: "Tempe", legacySlug: "tempe-az" },
  { slug: "queen-creek", name: "Queen Creek", legacySlug: "queen-creek-az" },
  { slug: "glendale", name: "Glendale", legacySlug: "glendale-az" },
  { slug: "peoria", name: "Peoria", legacySlug: "peoria-az" },
  { slug: "buckeye", name: "Buckeye", legacySlug: "buckeye-az" },
] as const;

export type ServiceAreaSlug = (typeof serviceAreaCities)[number]["slug"];

const legacyCityToArea = new Map(serviceAreaCities.map((city) => [city.legacySlug, city.slug]));

/** Public URL for a service. Shingle and tile hubs replace the older /services pages. */
export function servicePath(slug: string): string {
  if (slug === "shingle-roofing") return SHINGLE_HUB;
  if (slug === "tile-roofing") return TILE_HUB;
  return `/services/${slug}`;
}

/** Public URL for a city. The 11 service-area pages replace the matching /locations overviews. */
export function cityPath(slug: string): string {
  const areaSlug = legacyCityToArea.get(slug as (typeof serviceAreaCities)[number]["legacySlug"]);
  if (areaSlug) return `${SERVICE_AREAS_HUB}/${areaSlug}`;
  if (serviceAreaCities.some((city) => city.slug === slug)) return `${SERVICE_AREAS_HUB}/${slug}`;
  return `/locations/${slug}`;
}

export function serviceAreaPath(slug: ServiceAreaSlug): string {
  return `${SERVICE_AREAS_HUB}/${slug}`;
}

type Redirect = { source: string; destination: string };

function bothSlashes(source: string, destination: string): Redirect[] {
  return [
    { source, destination },
    { source: source.endsWith("/") ? source : `${source}/`, destination },
  ];
}

/** Old URLs that duplicate the new landing pages. */
export const landingRedirects: Redirect[] = [
  ...bothSlashes("/services/shingle-roofing", SHINGLE_HUB),
  ...bothSlashes("/services/tile-roofing", TILE_HUB),
  ...bothSlashes("/phoenix-foam-roofing", FOAM_HUB),
  ...serviceAreaCities.flatMap((city) =>
    bothSlashes(`/locations/${city.legacySlug}`, serviceAreaPath(city.slug)),
  ),
];
