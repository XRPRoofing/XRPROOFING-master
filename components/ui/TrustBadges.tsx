import { Shield, Star, Clock, Award, DollarSign, FileCheck } from "lucide-react";

const badges = [
  { icon: Shield, label: "Licensed & Insured", sub: "ROC Licensed Contractor" },
  { icon: Star, label: "5-Star Rated", sub: "Hundreds of Reviews" },
  { icon: Clock, label: "Fast Response", sub: "Same-Day Emergency Service" },
  { icon: Award, label: "10+ Years Experience", sub: "Arizona Roofing Experts" },
  { icon: DollarSign, label: "Financing Available", sub: "Flexible Payment Plans" },
  { icon: FileCheck, label: "Insurance Claims", sub: "We Handle the Paperwork" },
];

interface TrustBadgesProps {
  variant?: "light" | "dark" | "orange";
  cols?: 3 | 6;
}

export default function TrustBadges({ variant = "light", cols = 6 }: TrustBadgesProps) {
  const bg =
    variant === "dark"
      ? "bg-[#1a3a8f]/60 text-white"
      : variant === "orange"
      ? "bg-orange-600 text-white"
      : "bg-white text-gray-800 border border-gray-100 shadow-sm";

  const sub =
    variant === "dark"
      ? "text-gray-400"
      : variant === "orange"
      ? "text-orange-100"
      : "text-gray-500";

  const iconColor =
    variant === "dark" ? "text-[#6b9af7]" : variant === "orange" ? "text-white" : "text-orange-500";

  const gridClass = cols === 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6";

  return (
    <div className={`grid ${gridClass} gap-3`}>
      {badges.map((badge) => (
        <div key={badge.label} className={`rounded-xl p-3 flex items-center gap-3 ${bg}`}>
          <badge.icon className={`w-6 h-6 flex-shrink-0 ${iconColor}`} />
          <div>
            <div className="font-bold text-sm leading-tight">{badge.label}</div>
            <div className={`text-xs leading-tight ${sub}`}>{badge.sub}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
