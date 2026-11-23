import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SeoLanding from "@/components/seo/SeoLanding";
import { getLanding, landingMetadata } from "@/lib/landing";

const topics = ["replacement", "repair", "underlayment-replacement"];

export const dynamicParams = false;

export function generateStaticParams() {
  return topics.map((topic) => ({ topic }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic } = await params;
  const page = getLanding(`/tile-roofing/${topic}`);
  if (!page) return {};
  return landingMetadata(page);
}

export default async function TileTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const page = getLanding(`/tile-roofing/${topic}`);
  if (!page) notFound();
  return <SeoLanding page={page} />;
}
