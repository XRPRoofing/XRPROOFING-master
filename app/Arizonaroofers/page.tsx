import type { Metadata } from "next";
import LandingPage from "../landing/page";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Arizona Roofers | ${SITE_NAME}`,
  description:
    "Looking for trusted Arizona roofers? Get a free roof inspection from XRP Roofing for roof repair, replacement, storm damage restoration, and insurance claim assistance.",
  alternates: { canonical: `${SITE_URL}/landing` },
  robots: { index: false, follow: true },
  openGraph: {
    title: `Arizona Roofers | ${SITE_NAME}`,
    description: "Trusted Arizona roofers offering free inspections, repairs, replacements, storm restoration, and claim assistance.",
    images: [{ url: OG_IMAGE }],
  },
};

export default LandingPage;
