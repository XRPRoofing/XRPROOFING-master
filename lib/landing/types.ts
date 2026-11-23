export type LandingLink = {
  href: string;
  label: string;
  text: string;
};

export type LinkGroup = {
  title: string;
  links: LandingLink[];
};

export type Faq = {
  q: string;
  a: string;
};

export type LandingSection = {
  heading: string;
  paragraphs: string[];
};

export type LandingPage = {
  path: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  image: string;
  imageAlt: string;
  intro: string[];
  sections: LandingSection[];
  pointsHeading?: string;
  points?: string[];
  faqs?: Faq[];
  breadcrumbs: { label: string; href?: string }[];
  /** Service name passed to the existing Service schema. */
  serviceName: string;
  /** When set, Service schema areaServed is this city. */
  cityName?: string;
  linkGroups: LinkGroup[];
};
