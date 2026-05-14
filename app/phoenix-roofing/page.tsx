import type { Metadata } from "next";
import LandingPage from "../landing/page";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Phoenix Roofing | ${SITE_NAME}`,
  description:
    "Need Phoenix roofing services? Get a free roof inspection from XRP Roofing for roof repair, replacement, storm damage restoration, and insurance claim assistance.",
  alternates: { canonical: `${SITE_URL}/landing` },
  robots: { index: false, follow: true },
  openGraph: {
    title: `Phoenix Roofing | ${SITE_NAME}`,
    description: "Phoenix roofing services with free inspections, roof repairs, replacements, storm restoration, and claim assistance.",
    images: [{ url: OG_IMAGE }],
  },
};

export default LandingPage;
