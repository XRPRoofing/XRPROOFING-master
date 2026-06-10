import { ADDRESS, EMAIL, GOOGLE_MAPS_URL, LOGO_IMAGE, LOGO_IMAGE_WIDTH, LOGO_IMAGE_HEIGHT, OG_IMAGE, PHONE, SITE_NAME, SITE_URL, SOCIAL_LINKS } from "@/lib/constants";

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
  pagePath?: string;
}

interface FAQSchemaProps {
  faqs: Array<{ q: string; a: string }>;
}

interface BreadcrumbSchemaProps {
  items: Array<{ label: string; href?: string }>;
}

interface ArticleSchemaProps {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
}

interface ReviewSchemaProps {
  authorName: string;
  reviewBody: string;
  ratingValue?: number;
}

export function LocalBusinessSchema({ cityName, citySlug }: LocalBusinessSchemaProps) {
  const pageUrl = citySlug ? `${SITE_URL}/locations/${citySlug}` : SITE_URL;
  const areaServed = cityName
    ? {
        "@type": "City",
        name: `${cityName}, AZ`,
      }
    : {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: "33.4734",
          longitude: "-112.1226",
        },
        geoRadius: "160934",
      };

  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    legalName: "AZ Pro Contractors LLC",
    description: "XRP Roofing (AZ Pro Contractors LLC) is a licensed and insured roofing contractor serving Phoenix, AZ and the 100-mile metro radius. ROC #350898. Specializing in tile roofing, shingle, flat, foam, metal, commercial roofing, emergency repairs, and storm damage. Free inspections and written estimates.",
    url: pageUrl,
    image: `${SITE_URL}${OG_IMAGE}`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}${LOGO_IMAGE}`,
      width: LOGO_IMAGE_WIDTH,
      height: LOGO_IMAGE_HEIGHT,
    },
    telephone: PHONE,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.split(",")[0],
      addressLocality: "Phoenix",
      addressRegion: "AZ",
      postalCode: "85009",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "33.4734",
      longitude: "-112.1226",
    },
    hasMap: GOOGLE_MAPS_URL,
    areaServed,
    priceRange: "$$",
    openingHours: ["Mo-Fr 07:00-18:00", "Sa 08:00-16:00"],
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
    sameAs: [SOCIAL_LINKS.facebook, SOCIAL_LINKS.instagram, SOCIAL_LINKS.tiktok, GOOGLE_MAPS_URL],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
      reviewCount: "147",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({ serviceName, serviceSlug, description, cityName, citySlug, pagePath }: ServiceSchemaProps) {
  const pageUrl = pagePath
    ? `${SITE_URL}${pagePath}`
    : citySlug
    ? `${SITE_URL}/locations/${citySlug}/${serviceSlug}`
    : `${SITE_URL}/services/${serviceSlug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: cityName ? `${serviceName} in ${cityName}, AZ` : `${serviceName} in Phoenix, AZ`,
    serviceType: serviceName,
    description,
    provider: {
      "@type": "RoofingContractor",
      "@id": `${SITE_URL}/#localbusiness`,
      name: SITE_NAME,
      url: SITE_URL,
      telephone: PHONE,
    },
    areaServed: {
      "@type": cityName ? "City" : "State",
      name: cityName ? `${cityName}, AZ` : "Arizona",
    },
    url: pageUrl,
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

export function ArticleSchema({ title, description, slug, datePublished }: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified: datePublished,
    mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
    image: `${SITE_URL}${OG_IMAGE}`,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}${LOGO_IMAGE}`,
        width: LOGO_IMAGE_WIDTH,
        height: LOGO_IMAGE_HEIGHT,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ReviewSchema({ authorName, reviewBody, ratingValue = 5 }: ReviewSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "RoofingContractor",
      "@id": `${SITE_URL}/#localbusiness`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    author: {
      "@type": "Person",
      name: authorName,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: {
      "@id": `${SITE_URL}/#localbusiness`,
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
