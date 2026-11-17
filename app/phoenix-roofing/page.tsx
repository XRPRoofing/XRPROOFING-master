import type { Metadata } from "next";
import LandingPage from "../landing/page";
import { OG_IMAGE, SITE_URL } from "@/lib/constants";
import { PHOENIX_ROOFING_DESCRIPTION, PHOENIX_ROOFING_H1, PHOENIX_ROOFING_INTRO, PHOENIX_ROOFING_TITLE } from "@/lib/seo";

export const metadata: Metadata = {
  title: PHOENIX_ROOFING_TITLE,
  description: PHOENIX_ROOFING_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/phoenix-roofing` },
  robots: { index: true, follow: true },
  openGraph: {
    title: PHOENIX_ROOFING_TITLE,
    description: PHOENIX_ROOFING_DESCRIPTION,
    url: `${SITE_URL}/phoenix-roofing`,
    images: [{ url: OG_IMAGE }],
  },
};

export default function PhoenixRoofingPage() {
  return <LandingPage headline={PHOENIX_ROOFING_H1} intro={PHOENIX_ROOFING_INTRO} />;
}
