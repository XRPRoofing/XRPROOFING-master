export interface Service {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  heroImage: string;
  metaDescription: string;
  keywords: string[];
  relatedServices: string[];
}

export const services: Service[] = [
  {
    slug: "roof-repair",
    name: "Roof Repair",
    shortName: "Roof Repair",
    description:
      "Expert roof repair services for leaks, storm damage, missing shingles, and more. Fast response, lasting results.",
    icon: "🔧",
    heroImage: "/images/xrp-roofing/2024-05-09.jpg",
    metaDescription:
      "Professional roof repair in Phoenix AZ. We fix leaks, storm damage, missing shingles, and more. Licensed & insured. Free inspections.",
    keywords: ["roof repair", "roof leak repair", "fix roof", "roofing repair Phoenix"],
    relatedServices: ["emergency-roof-repair", "storm-damage-roofing", "roof-replacement", "roof-coatings"],
  },
  {
    slug: "roof-replacement",
    name: "Roof Replacement",
    shortName: "Roof Replacement",
    description:
      "Full roof replacement with premium materials engineered for Arizona's extreme heat, UV exposure, and monsoon season.",
    icon: "🏠",
    heroImage: "/images/xrp-roofing/2025-01-26.jpg",
    metaDescription:
      "Roof replacement in Phoenix AZ by licensed contractors. Quality materials, expert installation, and warranties you can trust.",
    keywords: ["roof replacement", "new roof Phoenix", "replace roof AZ", "roof replacement contractor"],
    relatedServices: ["new-roof-installation", "roof-repair", "tile-roofing", "shingle-roofing"],
  },
  {
    slug: "new-roof-installation",
    name: "New Roof Installation",
    shortName: "New Roof",
    description:
      "New construction and new roof installations for residential and commercial properties throughout the Phoenix metro area.",
    icon: "🏗️",
    heroImage: "/images/xrp-roofing/2025-01-26-2.jpg",
    metaDescription:
      "New roof installation in Phoenix AZ. Expert installation for new construction and replacements. Residential & commercial.",
    keywords: ["new roof installation", "roof installation Phoenix", "new construction roofing", "install roof AZ"],
    relatedServices: ["roof-replacement", "tile-roofing", "shingle-roofing", "metal-roofing"],
  },
  {
    slug: "tile-roofing",
    name: "Tile Roofing",
    shortName: "Tile Roofing",
    description:
      "Clay and concrete tile roofing — Arizona's most popular choice for durability, beauty, and heat resistance.",
    icon: "🟧",
    heroImage: "/images/xrp-roofing/2024-07-05.jpg",
    metaDescription:
      "Tile roofing installation and repair in Phoenix AZ. Clay and concrete tile specialists serving the entire Phoenix metro area.",
    keywords: ["tile roofing Phoenix", "clay tile roof", "concrete tile roof AZ", "tile roof repair"],
    relatedServices: ["roof-repair", "roof-replacement", "new-roof-installation", "shingle-roofing"],
  },
  {
    slug: "shingle-roofing",
    name: "Shingle Roofing",
    shortName: "Shingle Roofing",
    description:
      "Asphalt shingle roofing installation, repair, and replacement. Cost-effective, versatile, and durable for Arizona homes.",
    icon: "🔲",
    heroImage: "/images/xrp-roofing/2024-05-13.jpg",
    metaDescription:
      "Shingle roofing services in Phoenix AZ. Asphalt shingle installation, repair, and replacement by licensed contractors.",
    keywords: ["shingle roofing Phoenix", "asphalt shingles AZ", "shingle roof repair", "shingle roof replacement"],
    relatedServices: ["tile-roofing", "metal-roofing", "roof-replacement", "roof-repair"],
  },
  {
    slug: "metal-roofing",
    name: "Metal Roofing",
    shortName: "Metal Roofing",
    description:
      "Standing seam and metal panel roofing systems — energy-efficient, long-lasting, and ideal for Arizona's intense sun.",
    icon: "⚡",
    heroImage: "/images/xrp-roofing/2024-06-27.jpg",
    metaDescription:
      "Metal roofing installation in Phoenix AZ. Energy-efficient, durable metal roofing systems for residential and commercial properties.",
    keywords: ["metal roofing Phoenix", "standing seam metal roof", "metal roof AZ", "metal roof installation"],
    relatedServices: ["tpo-roofing", "shingle-roofing", "tile-roofing", "roof-coatings"],
  },
  {
    slug: "tpo-roofing",
    name: "TPO Roofing",
    shortName: "TPO Roofing",
    description:
      "Thermoplastic Polyolefin (TPO) flat roofing systems for commercial buildings. Reflective, energy-efficient, and durable.",
    icon: "🏢",
    heroImage: "/images/xrp-roofing/2024-09-18-1.jpg",
    metaDescription:
      "TPO roofing installation in Phoenix AZ. Commercial flat roof systems that reflect heat and reduce energy costs.",
    keywords: ["TPO roofing Phoenix", "TPO flat roof", "commercial TPO roofing AZ", "TPO roof installation"],
    relatedServices: ["flat-roofing", "commercial-roofing", "metal-roofing", "roof-coatings"],
  },
  {
    slug: "flat-roofing",
    name: "Flat Roofing",
    shortName: "Flat Roofing",
    description:
      "Flat and low-slope roofing systems for commercial and residential properties. Built-up, modified bitumen, and membrane systems.",
    icon: "▬",
    heroImage: "/images/xrp-roofing/2024-07-05-1.jpg",
    metaDescription:
      "Flat roofing services in Phoenix AZ. Expert installation and repair of flat and low-slope roofing systems.",
    keywords: ["flat roofing Phoenix", "low slope roof AZ", "flat roof repair", "commercial flat roofing"],
    relatedServices: ["tpo-roofing", "commercial-roofing", "roof-coatings", "roof-repair"],
  },
  {
    slug: "commercial-roofing",
    name: "Commercial Roofing",
    shortName: "Commercial",
    description:
      "Full-service commercial roofing for warehouses, retail, office buildings, HOA communities, and industrial facilities.",
    icon: "🏭",
    heroImage: "/images/xrp-roofing/2025-01-26-3.jpg",
    metaDescription:
      "Commercial roofing services in Phoenix AZ. Flat roofs, TPO, metal, and more for businesses of all sizes.",
    keywords: ["commercial roofing Phoenix", "commercial roof contractor AZ", "business roofing Phoenix", "industrial roofing"],
    relatedServices: ["tpo-roofing", "flat-roofing", "metal-roofing", "roof-coatings"],
  },
  {
    slug: "roof-coatings",
    name: "Roof Coatings",
    shortName: "Roof Coatings",
    description:
      "Protective roof coatings to extend roof life, improve energy efficiency, and stop leaks without full replacement.",
    icon: "🎨",
    heroImage: "/images/xrp-roofing/2025-01-26-4.jpg",
    metaDescription:
      "Roof coatings in Phoenix AZ. Silicone, elastomeric, and acrylic coatings to extend roof life and cut energy costs.",
    keywords: ["roof coatings Phoenix", "elastomeric roof coating", "silicone roof coating AZ", "roof coating contractor"],
    relatedServices: ["flat-roofing", "tpo-roofing", "commercial-roofing", "roof-repair"],
  },
  {
    slug: "emergency-roof-repair",
    name: "Emergency Roof Repair",
    shortName: "Emergency Repair",
    description:
      "24/7 emergency roof repair for active leaks, storm damage, and structural failures. Fast response across the Phoenix metro.",
    icon: "🚨",
    heroImage: "/images/xrp-roofing/2024-05-09-1.jpg",
    metaDescription:
      "Emergency roof repair in Phoenix AZ. 24/7 response for leaks, storm damage, and roof failures. Call now.",
    keywords: ["emergency roof repair Phoenix", "24/7 roof repair AZ", "emergency roofer Phoenix", "urgent roof repair"],
    relatedServices: ["roof-repair", "storm-damage-roofing", "roof-replacement", "flat-roofing"],
  },
  {
    slug: "storm-damage-roofing",
    name: "Storm Damage Roofing",
    shortName: "Storm Damage",
    description:
      "Monsoon and storm damage assessment, repair, and insurance claim assistance. Protect your home after Arizona's severe weather.",
    icon: "⛈️",
    heroImage: "/images/xrp-roofing/2025-01-26-5.jpg",
    metaDescription:
      "Storm damage roofing repair in Phoenix AZ. Insurance claim help, free inspections after monsoons and high winds.",
    keywords: ["storm damage roofing Phoenix", "monsoon roof damage AZ", "hail damage roof repair", "wind damage roof Phoenix"],
    relatedServices: ["emergency-roof-repair", "roof-repair", "roof-replacement", "roof-coatings"],
  },
];

export const serviceMap = Object.fromEntries(services.map((s) => [s.slug, s]));

export function getService(slug: string): Service | undefined {
  return serviceMap[slug];
}

export function getRelatedServices(slug: string): Service[] {
  const service = getService(slug);
  if (!service) return [];
  return service.relatedServices
    .map((s) => getService(s))
    .filter(Boolean) as Service[];
}
