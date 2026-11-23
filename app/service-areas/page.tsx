import SeoLanding from "@/components/seo/SeoLanding";
import { landingMetadata, requireLanding } from "@/lib/landing";

const page = requireLanding("/service-areas");

export const metadata = landingMetadata(page);

export default function ServiceAreasPage() {
  return <SeoLanding page={page} />;
}
