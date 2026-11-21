import { LOGO_IMAGE, LOGO_IMAGE_WIDTH, LOGO_IMAGE_HEIGHT, OG_IMAGE, PHONE, SITE_NAME, SITE_URL } from "@/lib/constants";
import { buildBreadcrumbSchema, buildRoofingContractorSchema, serializeJsonLd } from "@/lib/roofing-schema";

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

export function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildRoofingContractorSchema()) }}
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
    name: cityName ? `${serviceName} in ${cityName}, AZ` : `${serviceName} for the Phoenix Metro`,
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
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
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
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildBreadcrumbSchema(items)) }}
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
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
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
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
    />
  );
}
