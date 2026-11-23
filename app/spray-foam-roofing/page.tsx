import SeoLanding from "@/components/seo/SeoLanding";
import { landingMetadata, requireLanding } from "@/lib/landing";

const page = requireLanding("/spray-foam-roofing");

export const metadata = landingMetadata(page);

export default function SprayFoamRoofingPage() {
  return <SeoLanding page={page} />;
}
