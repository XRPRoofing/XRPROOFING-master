import SeoLanding from "@/components/seo/SeoLanding";
import { landingMetadata, requireLanding } from "@/lib/landing";

const page = requireLanding("/shingle-roofing");

export const metadata = landingMetadata(page);

export default function ShingleRoofingPage() {
  return <SeoLanding page={page} />;
}
