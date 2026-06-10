import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  experimental: {
    optimizeCss: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 2592000,
    dangerouslyAllowSVG: false,
  },
  compress: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/images/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // ─── Old WordPress service pages → new /services/[slug] ───────────────
      {
        source: "/new-roof-installation",
        destination: "/services/new-roof-installation",
        permanent: true,
      },
      {
        source: "/new-roof-installation/",
        destination: "/services/new-roof-installation",
        permanent: true,
      },
      {
        source: "/roof-replacement",
        destination: "/services/roof-replacement",
        permanent: true,
      },
      {
        source: "/roof-replacement/",
        destination: "/services/roof-replacement",
        permanent: true,
      },
      {
        source: "/repairs-and-maintenance",
        destination: "/services/roof-repair",
        permanent: true,
      },
      {
        source: "/repairs-and-maintenance/",
        destination: "/services/roof-repair",
        permanent: true,
      },
      {
        source: "/shingle-roofing",
        destination: "/services/shingle-roofing",
        permanent: true,
      },
      {
        source: "/shingle-roofing/",
        destination: "/services/shingle-roofing",
        permanent: true,
      },
      {
        source: "/tile-roofing",
        destination: "/services/tile-roofing",
        permanent: true,
      },
      {
        source: "/tile-roofing/",
        destination: "/services/tile-roofing",
        permanent: true,
      },
      {
        source: "/metal-roofing",
        destination: "/services/metal-roofing",
        permanent: true,
      },
      {
        source: "/metal-roofing/",
        destination: "/services/metal-roofing",
        permanent: true,
      },
      {
        source: "/metal-tpo-roofing",
        destination: "/services/metal-roofing",
        permanent: true,
      },
      {
        source: "/metal-tpo-roofing/",
        destination: "/services/metal-roofing",
        permanent: true,
      },
      {
        source: "/flat-low-slope-roofing",
        destination: "/services/flat-roofing",
        permanent: true,
      },
      {
        source: "/flat-low-slope-roofing/",
        destination: "/services/flat-roofing",
        permanent: true,
      },
      {
        source: "/roof-coatings",
        destination: "/services/roof-coatings",
        permanent: true,
      },
      {
        source: "/roof-coatings/",
        destination: "/services/roof-coatings",
        permanent: true,
      },
      {
        source: "/commercial-roofing",
        destination: "/services/commercial-roofing",
        permanent: true,
      },
      {
        source: "/commercial-roofing/",
        destination: "/services/commercial-roofing",
        permanent: true,
      },
      {
        source: "/residential-roofing",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/residential-roofing/",
        destination: "/services",
        permanent: true,
      },

      // ─── Old WordPress blog posts at root → /blog ─────────────────────────
      // (WordPress stored posts at /<slug>/ not /blog/<slug>/)
      {
        source: "/how-a-new-roof-can-increase-your-homes-value",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/how-a-new-roof-can-increase-your-homes-value/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/how-often-should-you-get-a-roof-inspection-a-guide-for-phoenix-homeowners",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/how-often-should-you-get-a-roof-inspection-a-guide-for-phoenix-homeowners/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/the-true-cost-of-ignoring-roof-problems-why-delaying-repairs-can-cost-you-thousands",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/the-true-cost-of-ignoring-roof-problems-why-delaying-repairs-can-cost-you-thousands/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/how-extreme-arizona-weather-affects-your-roof-and-how-to-protect-it",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/how-extreme-arizona-weather-affects-your-roof-and-how-to-protect-it/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/signs-your-roof-needs-immediate-attention-dont-ignore-these-warning-signs",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/signs-your-roof-needs-immediate-attention-dont-ignore-these-warning-signs/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/the-best-roofing-materials-for-homes-in-phoenix-az",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/the-best-roofing-materials-for-homes-in-phoenix-az/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/how-to-know-if-you-need-a-roof-repair-or-a-full-replacement",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/how-to-know-if-you-need-a-roof-repair-or-a-full-replacement/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/why-regular-roof-inspections-save-you-money-in-the-long-run",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/why-regular-roof-inspections-save-you-money-in-the-long-run/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/common-roofing-problems-and-how-professionals-fix-them",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/common-roofing-problems-and-how-professionals-fix-them/",
        destination: "/blog",
        permanent: true,
      },

      // ─── WordPress admin / wp-content / feed trap pages → home ───────────
      {
        source: "/wp-admin",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-login.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/feed/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-content/:path*",
        destination: "/",
        permanent: true,
      },

      // ─── Trailing slash normalisation (catch-all for core pages) ──────────
      {
        source: "/services/",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/locations/",
        destination: "/locations",
        permanent: true,
      },
      {
        source: "/blog/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/phoenix-roofing/",
        destination: "/phoenix-roofing",
        permanent: true,
      },
      {
        source: "/about/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact/",
        destination: "/contact",
        permanent: true,
      },

      // Short URL for compliance / bookmarks → canonical privacy page
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/privacy/",
        destination: "/privacy-policy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

