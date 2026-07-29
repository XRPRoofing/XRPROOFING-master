import Link from "next/link";
import { Phone, Calendar, ArrowRight } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/constants";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  variant?: "orange" | "dark" | "light";
}

export default function CTASection({
  title = "Ready for a Free Roof Inspection?",
  subtitle = "Get an honest assessment and detailed estimate from Arizona's trusted roofing contractor. No pressure, no obligation.",
  variant = "orange",
}: CTASectionProps) {
  const bg =
    variant === "dark"
      ? "bg-[#0f2156]"
      : variant === "light"
      ? "bg-gray-50"
      : "bg-gradient-to-r from-orange-700 to-orange-800";

  const titleColor = variant === "light" ? "text-gray-900" : "text-white";
  const subColor = variant === "light" ? "text-gray-600" : "text-orange-100";
  const callBtn =
    variant === "light"
      ? "bg-orange-700 hover:bg-orange-800 text-white"
      : "bg-white hover:bg-orange-50 text-orange-700";
  const inspBtn =
    variant === "light"
      ? "border-2 border-gray-300 hover:border-gray-400 text-gray-700"
      : "border-2 border-white/40 hover:border-white text-white";

  return (
    <section className={`py-16 ${bg}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className={`text-3xl lg:text-4xl font-black mb-4 ${titleColor}`}>{title}</h2>
        <p className={`text-lg mb-8 max-w-2xl mx-auto ${subColor}`}>{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={PHONE_HREF}
            className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg ${callBtn}`}
          >
            <Phone className="w-5 h-5" />
            Call {PHONE}
          </a>
          <Link
            href="/contact"
            className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-colors ${inspBtn}`}
          >
            <Calendar className="w-5 h-5" />
            Schedule Inspection
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          {["Free Inspections", "No Obligation Estimates", "Licensed & Insured", "Financing Available"].map(
            (item) => (
              <span key={item} className={`flex items-center gap-1 ${variant === "light" ? "text-gray-500" : "text-orange-100"}`}>
                <span className="text-green-400 font-bold">✓</span> {item}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
