import { FOAM_HUB, INSURANCE_PATH, SERVICE_AREAS_HUB, SHINGLE_HUB, TILE_HUB } from "@/lib/seo-routes";
import type { LandingPage } from "./types";

export const insurancePage: LandingPage = {
  path: INSURANCE_PATH,
  title: "Roof Insurance Claim Phoenix | XRP",
  description:
    "Roof insurance claim help in Phoenix. XRP Roofing inspects storm damage, takes photos, and meets with you and your adjuster. Call to schedule.",
  h1: "Roof Insurance Claim Help in Phoenix",
  eyebrow: "Storm damage documentation",
  image: "/images/xrp-roofing/2025-01-26-5.jpg",
  imageAlt: "Roof inspected after storm damage in Arizona",
  serviceName: "Roof insurance claim documentation",
  intro: [
    "A roof insurance claim in Phoenix usually starts after monsoon wind, a downburst, or debris strikes the roof. Shingles lift, tiles slide, and foam coatings split. The ceiling stain shows up later, sometimes after the storm has already left the valley.",
    "XRP Roofing inspects the damage, documents it with photos, and works with you and your adjuster so the physical damage and the repair are clear. Your insurance company decides what the policy covers. We are a roofing contractor. We are not a public adjuster, we do not negotiate the claim for you, and we do not guarantee that a claim will be approved.",
  ],
  sections: [
    {
      heading: "What we do on a storm-damage roof",
      paragraphs: [
        "Jonathan gets on the roof and photographs what the storm did: missing shingles, broken or slid tile, open flashings, damaged foam coating, and debris impact. You get a plain explanation of the repair or replacement the roof needs. With your permission, we meet your adjuster on site and walk through those photos and the damaged areas.",
        "The roof type changes what we document. A [shingle roof inspection](/shingle-roofing/inspection) focuses on tabs and flashings. A [tile roof repair](/tile-roofing/repair) visit looks under the obvious broken tiles, because Arizona leaks often start in the underlayment. A [foam roof repair](/spray-foam-roofing/repair) looks for coating that opened up and foam that got wet.",
      ],
    },
    {
      heading: "What we will not do",
      paragraphs: [
        "Arizona rules are clear, and we follow them. XRP Roofing does not pay, waive, rebate, or credit your deductible. The deductible is your responsibility under your policy. We also do not offer to absorb it inside a bid.",
        "We do not tell you to file a claim, and we do not tell you a claim will be paid. Coverage, depreciation, and the amount of the loss are between you and your insurer. If you want someone whose job is to negotiate the claim, that person is a public adjuster, which we are not. Our job is the roof: inspect it, photograph it, explain the work, and do the work you approve.",
      ],
    },
    {
      heading: "After the insurer has made a decision",
      paragraphs: [
        "If you hire us to repair or replace the roof, the scope is the one we inspected, written in the estimate. It may or may not match every line an adjuster wrote. We will tell you where they differ so you can decide, with your insurer, how you want to proceed. We still do not negotiate the claim on your behalf.",
        "The same visit covers homes and commercial buildings across the Phoenix metro. See [service areas](/service-areas) for the cities we travel to. We do not keep a branch office in each city.",
      ],
    },
  ],
  pointsHeading: "A claim-related visit includes",
  points: [
    "An on-roof inspection by Jonathan, who also does the work",
    "Photos of the damage",
    "A written repair or replacement estimate if you want one",
    "A meeting with you and your adjuster when you ask for it",
    "No deductible payment, waiver, or rebate",
    "No promise that the claim will be approved",
  ],
  faqs: [
    {
      q: "Will you pay or waive my deductible?",
      a: "No. XRP Roofing does not pay, waive, rebate, or credit the deductible. You are responsible for the deductible in your policy.",
    },
    {
      q: "Do you negotiate the claim or act as a public adjuster?",
      a: "No. We inspect and photograph the roof and we can explain that damage to you and your adjuster. We do not negotiate the claim, interpret your policy, or act as a public adjuster.",
    },
    {
      q: "Can you guarantee the insurance company will approve the claim?",
      a: "No. Approval, denial, and the amount paid are your insurer's decision. Our photos document the roof. They are not an approval letter.",
    },
    {
      q: "Do you meet the adjuster?",
      a: "Yes, when you want us there. We walk the roof with you and the adjuster and point out the damage we photographed. The adjuster still works for the insurance company.",
    },
  ],
  breadcrumbs: [{ label: "Insurance Claims" }],
  linkGroups: [
    {
      title: "Roof types we document",
      links: [
        { href: SHINGLE_HUB, label: "Shingle roofing", text: "Lifted tabs, missing shingles, and open flashings." },
        { href: TILE_HUB, label: "Tile roofing", text: "Slid tile, broken ridges, and underlayment leaks." },
        { href: FOAM_HUB, label: "Spray foam roofing", text: "Split coatings and damaged foam on flat roofs." },
        { href: `${SHINGLE_HUB}/inspection`, label: "Shingle roof inspection", text: "A photo inspection before or after a storm." },
      ],
    },
    {
      title: "Where we work",
      links: [
        { href: SERVICE_AREAS_HUB, label: "Service areas", text: "Phoenix-metro cities, without a branch office in each one." },
        { href: "/service-areas/phoenix", label: "Phoenix", text: "Central city roofs after monsoon wind." },
        { href: "/service-areas/mesa", label: "Mesa", text: "East Valley storms that cross Mesa on the way to the Superstitions." },
        { href: "/services/storm-damage-roofing", label: "Storm damage roofing", text: "Repair work after the roof has been documented." },
      ],
    },
  ],
};
