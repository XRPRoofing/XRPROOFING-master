import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Frame({ children, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
      {children}
    </svg>
  );
}

function RoofRepair(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M2.5 14 12 6l9.5 8" />
      <path d="M5.5 13.2V20h8.2v-6.8" />
      <path d="M8 10.2h3.4V13H8z" stroke="var(--icon-accent, #ea580c)" />
      <path d="M15.2 8.2h6.2v2.4h-6.2z" stroke="var(--icon-accent, #ea580c)" />
      <path d="M18.3 10.6V19" stroke="var(--icon-accent, #ea580c)" />
    </Frame>
  );
}

function RoofReplacement(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M2.5 13.5 8.5 8.5l6 5" />
      <path d="M4.5 13V19h8V13" />
      <path d="M15 6.5a4.2 4.2 0 0 1 5.2 4" stroke="var(--icon-accent, #ea580c)" />
      <path d="M20.4 8.8v2.4h-2.4" stroke="var(--icon-accent, #ea580c)" />
      <path d="M20.2 17.5a4.2 4.2 0 0 1-5.2-4" stroke="var(--icon-accent, #ea580c)" />
      <path d="M14.8 15.2v-2.4h2.4" stroke="var(--icon-accent, #ea580c)" />
    </Frame>
  );
}

function NewRoof(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M2.5 20 12 4.5 21.5 20" />
      <path d="M12 4.5V20" />
      <path d="M6.8 13.5h10.4" />
      <path d="M4.8 17.2h14.4" stroke="var(--icon-accent, #ea580c)" />
      <path d="M8.6 9.2 12 13.2 15.4 9.2" />
    </Frame>
  );
}

function TileRoof(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M2 7.5c2.2-2.6 4.4-2.6 6.6 0s4.4 2.6 6.6 0 4.4-2.6 6.6 0" />
      <path d="M2 13c2.2-2.6 4.4-2.6 6.6 0s4.4 2.6 6.6 0 4.4-2.6 6.6 0" />
      <path d="M2 18.5c2.2-2.6 4.4-2.6 6.6 0s4.4 2.6 6.6 0 4.4-2.6 6.6 0" stroke="var(--icon-accent, #ea580c)" />
    </Frame>
  );
}

function ShingleRoof(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M2.5 4h8.4v5.2H2.5zM13.1 4H21.5v5.2H13.1z" />
      <path d="M7.8 9.2h8.4v5.2H7.8z" stroke="var(--icon-accent, #ea580c)" />
      <path d="M2.5 14.6h8.4V20H2.5zM13.1 14.6H21.5V20H13.1z" />
    </Frame>
  );
}

function MetalRoof(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M3 20V9l2.4-4h1.8L10 9v11" />
      <path d="M10 20V9l2.4-4h1.8L17 9v11" />
      <path d="M17 20V9l2.4-4H21" stroke="var(--icon-accent, #ea580c)" />
      <path d="M3 20h18" />
    </Frame>
  );
}

function TpoRoof(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M3 7.5h18v10H3z" />
      <path d="M3 12.5h18" stroke="var(--icon-accent, #ea580c)" />
      <path d="M9 7.5v10M15 7.5v10" />
    </Frame>
  );
}

function FlatRoof(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M3 15h18v5H3z" />
      <path d="M3 15h18" stroke="var(--icon-accent, #ea580c)" />
      <path d="M8 15V8.5" />
      <path d="M5.8 10.2c1.6-2.4 4.8-2.4 6.4 0" stroke="var(--icon-accent, #ea580c)" />
      <circle cx="14.2" cy="9.2" r="0.8" fill="var(--icon-accent, #ea580c)" stroke="none" />
      <circle cx="16.4" cy="7.2" r="0.8" fill="var(--icon-accent, #ea580c)" stroke="none" />
      <circle cx="13.2" cy="6.6" r="0.7" fill="var(--icon-accent, #ea580c)" stroke="none" />
    </Frame>
  );
}

function CommercialRoof(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M4 20.5V9.5h16v11" />
      <path d="M2.5 9.5h19" stroke="var(--icon-accent, #ea580c)" />
      <path d="M7.2 13h3v3.2h-3zM13.8 13h3v3.2h-3z" />
      <path d="M10.8 20.5V16h2.4v4.5" />
    </Frame>
  );
}

function RoofCoatings(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M3 16h18v4.5H3z" />
      <path d="M12 4.5v6.2" />
      <path d="M8.6 7.2 12 10.7l3.4-3.5" stroke="var(--icon-accent, #ea580c)" />
      <path d="M6 16c2.2-2 4.2-2 6.2 0s4 2 6.2 0 2.8-1.8 3.6-1.8" stroke="var(--icon-accent, #ea580c)" />
    </Frame>
  );
}

function EmergencyRoof(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M2 12.5 7.2 8l5.2 4.5" />
      <path d="M3.6 12.2V17h7.2v-4.8" />
      <circle cx="17" cy="14.5" r="5" />
      <path d="M17 12v2.8l1.8 1.2" stroke="var(--icon-accent, #ea580c)" />
    </Frame>
  );
}

function StormDamage(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M2 14 7 9.5l5 4.5" />
      <path d="M3.6 13.6V19h6.8v-5.4" />
      <path d="M15.5 4.5 12.2 10h3L13 16.5" stroke="var(--icon-accent, #ea580c)" />
      <path d="M18.2 9.5v2M20.4 8v2M19.2 13v2" />
    </Frame>
  );
}

function RoofOverview(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M3 12.5 12 5l9 7.5" />
      <path d="M6 12v8h12v-8" />
      <path d="M10 15.5h4V20h-4z" stroke="var(--icon-accent, #ea580c)" />
    </Frame>
  );
}

const ICONS = {
  "roof-repair": RoofRepair,
  "roof-replacement": RoofReplacement,
  "new-roof-installation": NewRoof,
  "tile-roofing": TileRoof,
  "shingle-roofing": ShingleRoof,
  "metal-roofing": MetalRoof,
  "tpo-roofing": TpoRoof,
  "flat-roofing": FlatRoof,
  "commercial-roofing": CommercialRoof,
  "roof-coatings": RoofCoatings,
  "emergency-roof-repair": EmergencyRoof,
  "storm-damage-roofing": StormDamage,
  overview: RoofOverview,
} as const;

export type ServiceIconSlug = keyof typeof ICONS;

interface ServiceIconProps {
  slug: string;
  variant?: "badge" | "inline";
  size?: "md" | "sm";
  className?: string;
}

export default function ServiceIcon({ slug, variant = "badge", size = "md", className }: ServiceIconProps) {
  const Icon = ICONS[slug as ServiceIconSlug] ?? RoofOverview;
  if (variant === "inline") {
    return (
      <Icon
        className={className ?? "h-4 w-4 shrink-0"}
        style={{ ["--icon-accent" as string]: "currentColor" }}
      />
    );
  }
  const box =
    size === "sm"
      ? "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#eef2fb] text-[#0f2156]"
      : "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eef2fb] text-[#0f2156]";
  return (
    <span aria-hidden="true" className={className ?? box}>
      <Icon className={size === "sm" ? "h-4 w-4" : "h-6 w-6"} />
    </span>
  );
}
