import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppChrome from "@/components/layout/AppChrome";
import { LocalBusinessSchema } from "@/components/ui/SeoSchema";
import { SITE_NAME, SITE_URL, OG_IMAGE } from "@/lib/constants";
import { HOME_DESCRIPTION, HOME_TITLE } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  fallback: ["Arial", "Helvetica Neue", "Helvetica", "sans-serif"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f2156",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: "%s",
  },
  description: HOME_DESCRIPTION,
  keywords: ["roofers in Phoenix AZ", "roofing company Phoenix", "roofing contractor Phoenix AZ", "roof repair Phoenix", "XRP Roofing"],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/images/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "XRP Roofing, a Phoenix roofing contractor" }],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-gray-900 pb-16 lg:pb-0">
        <LocalBusinessSchema />
        <AppChrome>{children}</AppChrome>
      </body>
    </html>
  );
}
