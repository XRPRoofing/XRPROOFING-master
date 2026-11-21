import type { Metadata } from "next";
import LandingPage from "../landing/page";
import { pageMetadata, PHOENIX_ROOFING_DESCRIPTION, PHOENIX_ROOFING_H1, PHOENIX_ROOFING_INTRO, PHOENIX_ROOFING_TITLE } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: PHOENIX_ROOFING_TITLE,
  description: PHOENIX_ROOFING_DESCRIPTION,
  path: "/phoenix-roofing",
});

export default function PhoenixRoofingPage() {
  return (
    <LandingPage
      headline={PHOENIX_ROOFING_H1}
      intro={PHOENIX_ROOFING_INTRO}
      breadcrumbLabel="Phoenix Roofing"
    />
  );
}
