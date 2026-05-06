import { SITE_NAME, SITE_URL, PHONE, EMAIL, ADDRESS } from "@/lib/constants";

interface LocalBusinessSchemaProps {
  cityName?: string;
  citySlug?: string;
}

interface ServiceSchemaProps {
  serviceName: string;
  serviceSlug: string;
  description: string;
  cityName?: string;
  citySlug?: string;
}

interface FAQSchemaProps {
  faqs: Array<{ q: string; a: string }>;
}

interface BreadcrumbSchemaProps {
  items: Array<{ label: string; href?: string }>;
}

export function LocalBusinessSchema({ cityName, citySlug }: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: SITE_NAME,
    url: citySlug ? `${SITE_URL}/locations/${citySlug}` : SITE_URL,
    telephone: PHONE,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "2843 W McDowell Rd",
      addressLocality: cityName || "Phoenix",
      addressRegion: "AZ",
      postalCode: "85009",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "33.4734",
      longitude: "-112.1226",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "33.4734",
        longitude: "-112.1226",
      },
      geoRadius: "160934",
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "16:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/xrproofing",
      "https://www.instagram.com/xrproofing",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 5,
      reviewCount: 147,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({ serviceName, serviceSlug, description, cityName, citySlug }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: cityName ? `${serviceName} in ${cityName}, AZ` : `${serviceName} in Phoenix, AZ`,
    serviceType: serviceName,
    description,
    provider: {
      "@type": "RoofingContractor",
      name: SITE_NAME,
      url: SITE_URL,
      telephone: PHONE,
    },
    areaServed: {
      "@type": "State",
      name: "Arizona",
    },
    url: citySlug
      ? `${SITE_URL}/locations/${citySlug}/${serviceSlug}`
      : `${SITE_URL}/services/${serviceSlug}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
