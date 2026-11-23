import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoLanding from "@/components/seo/SeoLanding";
import { getLanding, landingMetadata } from "@/lib/landing";
import { serviceAreaCities, serviceAreaPath } from "@/lib/seo-routes";

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceAreaCities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const page = getLanding(serviceAreaPath(city as (typeof serviceAreaCities)[number]["slug"]));
  if (!page) return {};
  return landingMetadata(page);
}

export default async function ServiceAreaCityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const known = serviceAreaCities.find((entry) => entry.slug === city);
  if (!known) notFound();
  const page = getLanding(serviceAreaPath(known.slug));
  if (!page) notFound();
  return <SeoLanding page={page} />;
}
