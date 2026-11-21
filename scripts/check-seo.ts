import { readFileSync } from "node:fs";
import { cities } from "../lib/cities";
import { services } from "../lib/services";
import { buildBreadcrumbSchema, buildRoofingContractorSchema } from "../lib/roofing-schema";
import {
  ABOUT_DESCRIPTION,
  ABOUT_TITLE,
  ARIZONA_ROOFERS_DESCRIPTION,
  ARIZONA_ROOFERS_TITLE,
  BLOG_DESCRIPTION,
  BLOG_TITLE,
  BOOK_DESCRIPTION,
  BOOK_TITLE,
  CONTACT_DESCRIPTION,
  CONTACT_TITLE,
  DESCRIPTION_MAX,
  DESCRIPTION_MIN,
  FOAM_DESCRIPTION,
  FOAM_TITLE,
  HOME_DESCRIPTION,
  HOME_TITLE,
  LANDING_DESCRIPTION,
  LANDING_TITLE,
  LOCATIONS_DESCRIPTION,
  LOCATIONS_TITLE,
  PHOENIX_ROOFING_DESCRIPTION,
  PHOENIX_ROOFING_TITLE,
  PRIVACY_DESCRIPTION,
  PRIVACY_TITLE,
  SERVICES_DESCRIPTION,
  SERVICES_TITLE,
  TERMS_DESCRIPTION,
  TERMS_TITLE,
  TITLE_MAX,
  TITLE_MIN,
  blogSeo,
  cityPageDescription,
  cityPageTitle,
  cityServiceDescription,
  cityServiceTitle,
  servicePageDescription,
  servicePageTitle,
} from "../lib/seo";

const failures: string[] = [];

function checkLength(label: string, value: string, min: number, max: number) {
  if (value.length < min || value.length > max) {
    failures.push(`${label} is ${value.length} characters (wanted ${min}-${max}): ${value}`);
  }
}

const staticPages: Array<[string, string, string]> = [
  ["Home", HOME_TITLE, HOME_DESCRIPTION],
  ["About", ABOUT_TITLE, ABOUT_DESCRIPTION],
  ["Contact", CONTACT_TITLE, CONTACT_DESCRIPTION],
  ["Book", BOOK_TITLE, BOOK_DESCRIPTION],
  ["Services", SERVICES_TITLE, SERVICES_DESCRIPTION],
  ["Locations", LOCATIONS_TITLE, LOCATIONS_DESCRIPTION],
  ["Blog", BLOG_TITLE, BLOG_DESCRIPTION],
  ["Phoenix roofing", PHOENIX_ROOFING_TITLE, PHOENIX_ROOFING_DESCRIPTION],
  ["Foam", FOAM_TITLE, FOAM_DESCRIPTION],
  ["Privacy", PRIVACY_TITLE, PRIVACY_DESCRIPTION],
  ["Terms", TERMS_TITLE, TERMS_DESCRIPTION],
  ["Landing", LANDING_TITLE, LANDING_DESCRIPTION],
  ["Arizona roofers", ARIZONA_ROOFERS_TITLE, ARIZONA_ROOFERS_DESCRIPTION],
];

const titles = new Map<string, string>();
function rememberTitle(label: string, title: string) {
  const previous = titles.get(title);
  if (previous) failures.push(`Duplicate title "${title}" on ${previous} and ${label}`);
  titles.set(title, label);
}

for (const [label, title, description] of staticPages) {
  checkLength(`${label} title`, title, TITLE_MIN, TITLE_MAX);
  checkLength(`${label} description`, description, DESCRIPTION_MIN, DESCRIPTION_MAX);
  rememberTitle(label, title);
}

for (const service of services) {
  const title = servicePageTitle(service);
  const description = servicePageDescription(service);
  checkLength(`Service ${service.slug} title`, title, TITLE_MIN, TITLE_MAX);
  checkLength(`Service ${service.slug} description`, description, DESCRIPTION_MIN, DESCRIPTION_MAX);
  rememberTitle(`service:${service.slug}`, title);
}

for (const city of cities) {
  const title = cityPageTitle(city);
  const description = cityPageDescription(city);
  checkLength(`City ${city.slug} title`, title, TITLE_MIN, TITLE_MAX);
  checkLength(`City ${city.slug} description`, description, DESCRIPTION_MIN, DESCRIPTION_MAX);
  rememberTitle(`city:${city.slug}`, title);
  for (const service of services) {
    const comboTitle = cityServiceTitle(city, service);
    const comboDescription = cityServiceDescription(city, service);
    checkLength(`${city.slug}/${service.slug} title`, comboTitle, TITLE_MIN, TITLE_MAX);
    checkLength(`${city.slug}/${service.slug} description`, comboDescription, DESCRIPTION_MIN, DESCRIPTION_MAX);
    rememberTitle(`${city.slug}/${service.slug}`, comboTitle);
  }
}

const blogSource = readFileSync("app/blog/[slug]/page.tsx", "utf8");
const postSlugs = [...blogSource.matchAll(/slug: "([^"]+)"/g)].map((match) => match[1]);
const uniquePostSlugs = [...new Set(postSlugs)];
for (const slug of uniquePostSlugs) {
  const seo = blogSeo[slug];
  if (!seo) {
    failures.push(`Missing blog SEO for ${slug}`);
    continue;
  }
  checkLength(`Blog ${slug} title`, seo.title, TITLE_MIN, TITLE_MAX);
  checkLength(`Blog ${slug} description`, seo.description, DESCRIPTION_MIN, DESCRIPTION_MAX);
  rememberTitle(`blog:${slug}`, seo.title);
}
for (const slug of Object.keys(blogSeo)) {
  if (!uniquePostSlugs.includes(slug)) failures.push(`blogSeo has unknown slug ${slug}`);
}

const schema = buildRoofingContractorSchema();
const json = JSON.stringify(schema);
const parsed = JSON.parse(json) as Record<string, unknown>;
if (parsed["@type"] !== "RoofingContractor") failures.push("Schema type is not RoofingContractor");
if ("aggregateRating" in parsed) failures.push("Schema includes aggregateRating");
if (parsed.name !== "XRP Roofing") failures.push(`Schema name ${parsed.name}`);
if ("legalName" in parsed) failures.push("Schema should not include legalName");
if (/AZ Pro|AZPRO|\bDBA\b/i.test(String(parsed.description))) failures.push(`Schema description mentions the legal entity: ${parsed.description}`);
if (parsed.telephone !== "(623) 300-8097") failures.push(`Schema telephone ${parsed.telephone}`);
if (parsed.url !== "https://www.xrproofing.com") failures.push(`Schema url ${parsed.url}`);
const address = parsed.address as Record<string, string>;
if (address.streetAddress !== "2843 W McDowell Rd") failures.push(`street ${address.streetAddress}`);
if (address.addressLocality !== "Phoenix") failures.push(`city ${address.addressLocality}`);
if (address.addressRegion !== "AZ") failures.push(`region ${address.addressRegion}`);
if (address.postalCode !== "85009") failures.push(`zip ${address.postalCode}`);
const geo = parsed.geo as Record<string, string>;
if (geo.latitude !== "33.4655056" || geo.longitude !== "-112.1211085") {
  failures.push(`geo ${geo.latitude}, ${geo.longitude}`);
}
const maps =
  "https://www.google.com/maps/place/XRP+Roofing/@33.4655056,-112.1211085,17z/data=!3m1!4b1!4m6!3m5!1s0x872b1316932e7b7d:0xc5cb99bb930025b7!8m2!3d33.4655056!4d-112.1211085!16s%2Fg%2F11vz4gzx7z";
if (parsed.hasMap !== maps) failures.push("hasMap does not match the Google Business Profile URL");
if (!Array.isArray(parsed.sameAs) || !parsed.sameAs.includes(maps)) failures.push("sameAs is missing the Google Maps URL");
if (parsed.openingHours !== "Mo-Su 00:00-23:59") failures.push(`openingHours ${parsed.openingHours}`);
const hours = parsed.openingHoursSpecification as Array<Record<string, unknown>>;
const days = hours?.[0]?.dayOfWeek as string[] | undefined;
if (!days || days.length !== 7 || hours[0].opens !== "00:00" || hours[0].closes !== "23:59") {
  failures.push("openingHoursSpecification is not 24 hours, 7 days");
}
const credential = parsed.hasCredential as Record<string, unknown>;
const identifier = parsed.identifier as Record<string, unknown>;
if (credential?.identifier !== "350898") failures.push("hasCredential is missing ROC 350898");
if (identifier?.value !== "350898") failures.push("identifier is missing ROC 350898");
JSON.parse(JSON.stringify(buildBreadcrumbSchema([{ label: "Contact", href: "/contact" }])));

const robots = readFileSync("app/robots.ts", "utf8");
for (const path of ["/api/", "/crm/", "/login", "/signup", "/forgot-password", "/reset-password", "/proposal/", "/invoice/"]) {
  if (!robots.includes(`"${path}"`)) failures.push(`robots.ts does not disallow ${path}`);
}
const sitemap = readFileSync("app/sitemap.ts", "utf8");
for (const path of ["/crm", "/login", "/signup", "/proposal", "/invoice", "/api/"]) {
  if (sitemap.includes(path)) failures.push(`sitemap.ts mentions ${path}`);
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`OK ${titles.size} unique titles, schema parsed, no aggregateRating`);
for (const [label, title, description] of staticPages) {
  console.log(`${label}\t${title.length}\t${description.length}\t${title}\t${description}`);
}
