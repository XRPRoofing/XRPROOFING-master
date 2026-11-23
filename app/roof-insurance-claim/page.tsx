import SeoLanding from "@/components/seo/SeoLanding";
import { landingMetadata, requireLanding } from "@/lib/landing";

const page = requireLanding("/roof-insurance-claim");

export const metadata = landingMetadata(page);

export default function RoofInsuranceClaimPage() {
  return <SeoLanding page={page} />;
}
