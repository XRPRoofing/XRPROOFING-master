"use client";

import { Phone, Calendar } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import Link from "next/link";

export default function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-gray-200 shadow-lg">
      <div className="grid grid-cols-2">
        <a
          href={PHONE_HREF}
          className="flex items-center justify-center gap-2 bg-orange-500 text-white py-4 font-bold text-sm"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 bg-[#0f2156] text-white py-4 font-bold text-sm"
        >
          <Calendar className="w-4 h-4" />
          Free Inspection
        </Link>
      </div>
    </div>
  );
}
