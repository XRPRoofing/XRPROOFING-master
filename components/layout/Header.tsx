"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, Facebook, Instagram } from "lucide-react";
import { PHONE, PHONE_HREF, SITE_NAME, SOCIAL_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import SiteNav from "@/components/layout/SiteNav";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top social bar — desktop only */}
      <div className="hidden lg:block bg-[#0f2156] text-gray-300 text-xs">
        <div className="container mx-auto px-4 flex items-center justify-end gap-1 py-1.5">
          <span className="mr-2 text-gray-400">Follow us:</span>
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg hover:bg-[#1877F2] hover:text-white transition-all duration-200 group"
          >
            <Facebook className="w-3.5 h-3.5 text-[#1877F2] group-hover:text-white transition-colors" />
            <span className="font-medium group-hover:text-white transition-colors">Facebook</span>
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:text-white transition-all duration-200 group"
          >
            <Instagram className="w-3.5 h-3.5 text-pink-400 group-hover:text-white transition-colors" />
            <span className="font-medium group-hover:text-white transition-colors">Instagram</span>
          </a>
          <a
            href={SOCIAL_LINKS.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg hover:bg-black hover:text-white transition-all duration-200 group"
          >
            <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.16 8.16 0 0 0 4.77 1.52V6.82a4.85 4.85 0 0 1-1-.13z"/>
            </svg>
            <span className="font-medium group-hover:text-white transition-colors">TikTok</span>
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between h-16 lg:h-auto lg:py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0" aria-label={SITE_NAME}>
            <Image
              src="/images/logo.png"
              alt="XRP Roofing Logo"
              width={344}
              height={140}
              className="h-12 lg:h-14 w-auto object-contain"
              sizes="(max-width: 1024px) 120px, 140px"
            />
          </Link>

          <SiteNav variant="desktop" />

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="hidden sm:flex items-center gap-2 bg-orange-700 hover:bg-orange-800 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              {PHONE}
            </a>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div id="mobile-nav" className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 bg-orange-700 text-white px-4 py-3 rounded-lg font-semibold text-sm mb-2"
            >
              <Phone className="w-4 h-4" />
              Call Now: {PHONE}
            </a>
            <SiteNav variant="mobile" onNavigate={() => setMobileOpen(false)} />
            {/* Mobile social badges */}
            <div className="flex items-center gap-2 pt-3 mt-2 border-t border-gray-100">
              <span className="text-xs text-gray-400 font-medium">Follow:</span>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center gap-1.5 bg-gray-100 hover:bg-[#1877F2] hover:text-white text-gray-600 px-2.5 py-1.5 rounded-lg transition-all duration-200 group"
              >
                <Facebook className="w-3.5 h-3.5 text-[#1877F2] group-hover:text-white" />
                <span className="text-xs font-semibold group-hover:text-white">Facebook</span>
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center gap-1.5 bg-gray-100 hover:bg-pink-600 hover:text-white text-gray-600 px-2.5 py-1.5 rounded-lg transition-all duration-200 group"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-500 group-hover:text-white" />
                <span className="text-xs font-semibold group-hover:text-white">Instagram</span>
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex items-center gap-1.5 bg-gray-100 hover:bg-black hover:text-white text-gray-600 px-2.5 py-1.5 rounded-lg transition-all duration-200 group"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.16 8.16 0 0 0 4.77 1.52V6.82a4.85 4.85 0 0 1-1-.13z"/>
                </svg>
                <span className="text-xs font-semibold group-hover:text-white">TikTok</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
