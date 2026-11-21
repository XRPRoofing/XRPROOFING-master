import { cities } from "./cities";
import {
  ADDRESS,
  EMAIL,
  GEO_LATITUDE,
  GEO_LONGITUDE,
  GOOGLE_MAPS_URL,
  LEGAL_NAME,
  LOGO_IMAGE,
  LOGO_IMAGE_HEIGHT,
  LOGO_IMAGE_WIDTH,
  OG_IMAGE,
  PHONE,
  ROC_LICENSE_NUMBER,
  SERVICE_AREA,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from "./constants";

function postalAddress() {
  const [streetAddress, addressLocality, regionAndZip] = ADDRESS.split(",").map((part) => part.trim());
  const [addressRegion, postalCode] = regionAndZip.split(/\s+/);
  return {
    "@type": "PostalAddress",
    streetAddress,
    addressLocality,
    addressRegion,
    postalCode,
    addressCountry: "US",
  };
}

/** Sitewide RoofingContractor entity. Values come from constants and the city list already on the site. */
export function buildRoofingContractorSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    legalName: LEGAL_NAME,
    url: SITE_URL,
    image: `${SITE_URL}${OG_IMAGE}`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}${LOGO_IMAGE}`,
      width: LOGO_IMAGE_WIDTH,
      height: LOGO_IMAGE_HEIGHT,
    },
    telephone: PHONE,
    email: EMAIL,
    address: postalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO_LATITUDE,
      longitude: GEO_LONGITUDE,
    },
    hasMap: GOOGLE_MAPS_URL,
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: SERVICE_AREA,
      },
      ...cities.map((city) => ({
        "@type": "City",
        name: `${city.name}, ${city.state}`,
      })),
    ],
    identifier: {
      "@type": "PropertyValue",
      name: "Arizona Registrar of Contractors license",
      propertyID: "Arizona ROC",
      value: ROC_LICENSE_NUMBER,
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: "Arizona Registrar of Contractors license",
      identifier: ROC_LICENSE_NUMBER,
      recognizedBy: {
        "@type": "GovernmentOrganization",
        name: "Arizona Registrar of Contractors",
      },
    },
    openingHours: "Mo-Su 00:00-23:59",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: [SOCIAL_LINKS.facebook, SOCIAL_LINKS.instagram, SOCIAL_LINKS.tiktok, GOOGLE_MAPS_URL],
    description: `${SITE_NAME} is a DBA of ${LEGAL_NAME}, a roofing contractor serving the Phoenix metro. Arizona ROC #${ROC_LICENSE_NUMBER}. Roof repair, replacement, tile, shingle, foam, flat, and storm-damage work. Free inspections and written estimates.`,
  };
}

export function buildBreadcrumbSchema(items: Array<{ label: string; href?: string }>) {
  const allItems = [{ label: "Home", href: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: item.href === "/" ? SITE_URL : `${SITE_URL}${item.href}` } : {}),
    })),
  };
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
