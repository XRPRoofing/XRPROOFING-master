import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCtaBar from "@/components/layout/MobileCtaBar";
import { SITE_NAME, SITE_URL, OG_IMAGE } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
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
    default: `${SITE_NAME} | Licensed Roofing Contractor in Phoenix, AZ`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "XRP Roofing is Phoenix's trusted roofing contractor. Roof repair, replacement, tile, shingle, metal, flat & commercial roofing. Licensed & insured. Free inspections.",
  keywords: ["roofing contractor Phoenix AZ", "roof repair Phoenix", "roof replacement Arizona", "tile roofing Phoenix", "XRP Roofing"],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  robots: { index: true, follow: true },
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
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-gray-900 pb-16 lg:pb-0">
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCtaBar />
        <Script id="call-tracking" strategy="lazyOnload">{`
          (function() {
            var o = '6233008097';
            var t = '+14806372262';
            var d = '(623) 300-8097';
            document.querySelectorAll('a[href*="tel:"]').forEach(function(a) {
              a.href = a.href.replace(o, t.replace(/[^0-9]/g, ''));
            });
            var tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
            while (tw.nextNode()) {
              if (tw.currentNode.textContent.indexOf(d) !== -1) {
                tw.currentNode.textContent = tw.currentNode.textContent.replace(d, t);
              }
            }
          })();
        `}</Script>
      </body>
    </html>
  );
}
