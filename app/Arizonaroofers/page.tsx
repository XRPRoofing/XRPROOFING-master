import type { Metadata } from "next";
import LandingPage from "../landing/page";
import { ARIZONA_ROOFERS_DESCRIPTION, ARIZONA_ROOFERS_TITLE, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: ARIZONA_ROOFERS_TITLE,
  description: ARIZONA_ROOFERS_DESCRIPTION,
  path: "/landing",
  index: false,
});

export default LandingPage;
