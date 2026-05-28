import type { Metadata, Viewport } from "next";
import "./globals.css";
import AppChrome from "@/components/layout/AppChrome";
import { SITE_NAME, SITE_URL, OG_IMAGE, LOGO_IMAGE } from "@/lib/constants";

const interClass = "font-sans";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f2156",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Licensed Roofing Contractor in Phoenix, AZ`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "XRP Roofing is Phoenix's trusted roofing contractor. Roof repair, replacement, tile, shingle, metal, flat & commercial roofing. Licensed & insured. Free inspections.",
  keywords: ["roofing contractor Phoenix AZ", "roof repair Phoenix", "roof replacement Arizona", "tile roofing Phoenix", "XRP Roofing"],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: LOGO_IMAGE, type: "image/jpeg" }],
    shortcut: LOGO_IMAGE,
    apple: LOGO_IMAGE,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Licensed Roofing Contractor in Phoenix, AZ`,
    description:
      "XRP Roofing is Phoenix's trusted roofing contractor. Serving the Phoenix metro and 100-mile radius. Free inspections. Licensed & insured.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "XRP Roofing – Phoenix's Trusted Roofing Contractor" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Licensed Roofing Contractor in Phoenix, AZ`,
    description: "XRP Roofing – Phoenix's trusted roofing contractor. Free inspections. Licensed & insured.",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interClass} antialiased bg-white text-gray-900 pb-16 lg:pb-0`}>
        <AppChrome>{children}</AppChrome>
      </body>
    </html>
  );
}
