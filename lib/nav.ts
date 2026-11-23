import { services } from "@/lib/services";
import {
  FOAM_HUB,
  INSURANCE_PATH,
  SERVICE_AREAS_HUB,
  SHINGLE_HUB,
  TILE_HUB,
  serviceAreaCities,
  serviceAreaPath,
  servicePath,
} from "@/lib/seo-routes";

export type NavLink = { label: string; href: string };
export type NavEntry =
  | { kind: "link"; label: string; href: string }
  | { kind: "group"; id: string; label: string; links: NavLink[] };

const shingleLinks: NavLink[] = [
  { label: "Shingle Roofing", href: SHINGLE_HUB },
  { label: "Shingle Roof Replacement", href: `${SHINGLE_HUB}/replacement` },
  { label: "Shingle Roof Repair", href: `${SHINGLE_HUB}/repair` },
  { label: "Shingle Roof Inspection", href: `${SHINGLE_HUB}/inspection` },
];

const tileLinks: NavLink[] = [
  { label: "Tile Roofing", href: TILE_HUB },
  { label: "Tile Roof Replacement", href: `${TILE_HUB}/replacement` },
  { label: "Tile Roof Repair", href: `${TILE_HUB}/repair` },
  { label: "Tile Underlayment Replacement", href: `${TILE_HUB}/underlayment-replacement` },
];

const foamLinks: NavLink[] = [
  { label: "Spray Foam Roofing Phoenix", href: FOAM_HUB },
  { label: "Spray Foam Roof Installation", href: `${FOAM_HUB}/installation` },
  { label: "Foam Roof Repair", href: `${FOAM_HUB}/repair` },
  { label: "Foam Roof Recoating", href: `${FOAM_HUB}/recoating` },
];

const areaLinks: NavLink[] = [
  { label: "All Service Areas", href: SERVICE_AREAS_HUB },
  ...serviceAreaCities.map((city) => ({
    label: city.name,
    href: serviceAreaPath(city.slug),
  })),
];

export const primaryNav: NavEntry[] = [
  {
    kind: "group",
    id: "services",
    label: "Services",
    links: services.map((service) => ({
      label: service.name,
      href: servicePath(service.slug),
    })),
  },
  { kind: "group", id: "shingle", label: "Shingle Roofing", links: shingleLinks },
  { kind: "group", id: "tile", label: "Tile Roofing", links: tileLinks },
  { kind: "group", id: "foam", label: "Foam Roofing", links: foamLinks },
  { kind: "link", label: "Insurance Claims", href: INSURANCE_PATH },
  { kind: "group", id: "areas", label: "Service Areas", links: areaLinks },
  { kind: "link", label: "Locations", href: "/locations" },
  { kind: "link", label: "About", href: "/about" },
  { kind: "link", label: "Blog", href: "/blog" },
  { kind: "link", label: "Contact", href: "/contact" },
  { kind: "link", label: "Book Online", href: "/book" },
];
