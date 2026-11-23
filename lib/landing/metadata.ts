import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import type { LandingPage } from "./types";

export function landingMetadata(page: Pick<LandingPage, "title" | "description" | "path" | "image" | "imageAlt">): Metadata {
  const canonical = `${SITE_URL}${page.path}`;

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      title: page.title,
      description: page.description,
      url: canonical,
      images: [{ url: page.image, alt: page.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [page.image],
    },
  };
}
