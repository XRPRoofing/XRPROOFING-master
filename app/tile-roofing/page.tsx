import SeoLanding from "@/components/seo/SeoLanding";
import { landingMetadata, requireLanding } from "@/lib/landing";

const page = requireLanding("/tile-roofing");

export const metadata = landingMetadata(page);

export default function TileRoofingPage() {
  return <SeoLanding page={page} />;
}
