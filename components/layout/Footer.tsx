import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Star } from "lucide-react";
import {
  PHONE,
  PHONE_HREF,
  EMAIL,
  ADDRESS,
  SITE_NAME,
  SERVICE_AREA,
  LICENSE_NOTE,
  SOCIAL_LINKS,
  GOOGLE_REVIEW_URL,
} from "@/lib/constants";
import { services } from "@/lib/services";
import { cities } from "@/lib/cities";

export default function Footer() {
  const topCities = cities.slice(0, 10);
  const topServices = services.slice(0, 6);

  return (
    <footer className="bg-[#0a1a4a] text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand + NAP */}
          <div className="space-y-4">
            <Link href="/" aria-label={SITE_NAME}>
              <div className="inline-block bg-white rounded-xl px-3 py-2">
                <Image
                  src="/images/logo.png"
                  alt="XRP Roofing Logo"
                  width={295}
                  height={120}
                  className="h-12 w-auto object-contain"
                  sizes="120px"
                  quality={90}
                />
              </div>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              Phoenix&apos;s trusted roofing contractor serving the entire 100-mile metro radius. Quality workmanship, honest pricing, lasting results.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-[#6b9af7] mt-0.5 flex-shrink-0" />
                <address className="not-italic text-gray-300">{ADDRESS}</address>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-[#6b9af7] flex-shrink-0" />
                <a href={PHONE_HREF} className="text-gray-300 hover:text-orange-400 transition-colors font-semibold">
                  {PHONE}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-[#6b9af7] flex-shrink-0" />
                <a href={`mailto:${EMAIL}`} className="text-gray-300 hover:text-orange-400 transition-colors">
                  {EMAIL}
                </a>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="XRP Roofing on Facebook"
                className="group flex items-center gap-2 bg-gray-800 hover:bg-[#1877F2] px-3 py-2 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#1877F2]/30"
              >
                <Facebook className="w-4 h-4 text-[#1877F2] group-hover:text-white transition-colors" />
                <span className="text-xs font-semibold text-gray-300 group-hover:text-white transition-colors">Facebook</span>
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="XRP Roofing on Instagram"
                className="group flex items-center gap-2 bg-gray-800 hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] px-3 py-2 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30"
              >
                <Instagram className="w-4 h-4 text-pink-400 group-hover:text-white transition-colors" />
                <span className="text-xs font-semibold text-gray-300 group-hover:text-white transition-colors">Instagram</span>
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="XRP Roofing on TikTok"
                className="group flex items-center gap-2 bg-gray-800 hover:bg-black px-3 py-2 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-white/10"
              >
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.16 8.16 0 0 0 4.77 1.52V6.82a4.85 4.85 0 0 1-1-.13z"/>
                </svg>
                <span className="text-xs font-semibold text-gray-300 group-hover:text-white transition-colors">TikTok</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/phoenix-foam-roofing"
                  className="text-sm text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Foam Roofing
                </Link>
              </li>
              <li>
                <Link
                  href="/phoenix-foam-roofing"
                  className="text-sm text-gray-300 hover:text-orange-400 transition-colors"
                >
                  SPF Roofing
                </Link>
              </li>
              <li>
                <Link
                  href="/phoenix-foam-roofing"
                  className="text-sm text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Elastomeric Coatings
                </Link>
              </li>
              {topServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm text-orange-400 hover:text-orange-300 font-semibold transition-colors">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {topCities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/locations/${c.slug}`}
                    className="text-sm text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    {c.name}, {c.state}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="text-sm text-orange-400 hover:text-orange-300 font-semibold transition-colors">
                  View All Locations →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company + Trust */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2 mb-6">
              {[
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact Us" },
                { href: "/blog", label: "Roofing Blog" },
                { href: "/locations", label: "All Locations" },
                { href: "/services", label: "All Services" },
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms & Conditions" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-300 hover:text-orange-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="bg-gray-800 rounded-xl p-4 space-y-2">
              <div className="text-xs font-semibold text-orange-400 uppercase tracking-wider">Trust & Credentials</div>
              <ul className="space-y-1">
                <li className="text-xs text-gray-300">✓ {LICENSE_NOTE}</li>
                <li className="text-xs text-gray-300">✓ {SERVICE_AREA}</li>
                <li className="text-xs text-gray-300">✓ Free Inspections & Estimates</li>
                <li className="text-xs text-gray-300">✓ Insurance Claim Assistance</li>
                <li className="text-xs text-gray-300">✓ Written Workmanship Warranty</li>
                <li className="text-xs text-gray-300">✓ Financing Available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
            {" · "}
            <Link href="/privacy-policy" className="hover:text-orange-400 transition-colors">
              Privacy
            </Link>
            {" · "}
            <Link href="/terms" className="hover:text-orange-400 transition-colors">
              Terms
            </Link>
          </p>
          {/* Google Reviews badge */}
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-gray-800 hover:bg-white px-3 py-2 rounded-xl transition-all duration-200 hover:shadow-lg"
          >
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 48 48" aria-hidden="true">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-xs font-semibold text-gray-300 group-hover:text-gray-900 transition-colors">5.0 · Leave a Review</span>
          </a>
          <p className="text-xs text-gray-500">
            Proudly serving Phoenix, AZ and the entire 100-mile metro radius.
          </p>
        </div>
      </div>
    </footer>
  );
}
