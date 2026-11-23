import { INSURANCE_PATH, SHINGLE_HUB, TILE_HUB, FOAM_HUB } from "@/lib/seo-routes";
import type { LandingPage } from "./types";

const crumb = { label: "Spray Foam Roofing", href: FOAM_HUB };

export const foamHub: LandingPage = {
  path: FOAM_HUB,
  title: "Spray Foam Roofing Phoenix | XRP Roofing",
  description:
    "Spray foam roofing in Phoenix for flat and low-slope roofs, plus repair and recoating. XRP Roofing inspects first. Call for an estimate.",
  h1: "Spray Foam Roofing in Phoenix",
  eyebrow: "Spray foam roofing",
  image: "/images/xrp-roofing/foam-roofing-coated-flat-roof.jpeg",
  imageAlt: "Coated foam roof on a low-slope Arizona building",
  serviceName: "Spray foam roofing",
  intro: [
    "Spray polyurethane foam, usually called SPF or spray foam, is a roofing system for flat and low-slope roofs. The foam is sprayed in place, then a coating protects it from the sun. In Phoenix that coating is doing real work: an uncoated foam roof breaks down quickly in desert UV.",
    "XRP Roofing installs spray foam roofs, repairs damaged foam, and recoats foam with elastomeric or silicone coatings. Jonathan inspects every roof and does the work himself.",
  ],
  sections: [
    {
      heading: "Where foam roofs show up in the Valley",
      paragraphs: [
        "You will see foam on commercial buildings, on flat-roofed houses, and on the low-slope pieces behind a tile or shingle main roof. Patio covers and additions often sit almost flat. Built-up and rolled roofing on those sections blister, pond, and leak at the seams. Foam is one system people use because it can be sprayed around pipes, curbs, and drains without a long list of lap joints.",
        "A foam roof is not maintenance-free. The coating is the UV shield. When it wears thin, the foam underneath is exposed. That is a [foam roof repair](/spray-foam-roofing/repair) or a [recoating](/spray-foam-roofing/recoating), not always a brand-new roof. A new system is an [installation](/spray-foam-roofing/installation).",
      ],
    },
    {
      heading: "Foam, tile, and shingles on the same property",
      paragraphs: [
        "A lot of Valley houses are mixed. The street slope is [tile](/tile-roofing) or [shingles](/shingle-roofing), and the back is flat. Leaks often start where those systems meet. We inspect both instead of coating the flat roof and ignoring the wall flashing above it.",
        "After wind or hail scuffs a coating, photos matter. Our [roof insurance claim](/roof-insurance-claim) page explains what we document and what we do not do. We do not negotiate the claim, and we do not pay or waive a deductible.",
      ],
    },
  ],
  pointsHeading: "Foam work we actually do",
  points: [
    "Spray foam installation on flat and low-slope roofs",
    "Foam roof repair where the foam or coating has failed",
    "Recoating with elastomeric or silicone coatings",
    "Residential and commercial roofs",
    "An inspection and photos before any foam is sprayed",
  ],
  faqs: [
    {
      q: "Is spray foam only for commercial buildings?",
      a: "No. Commercial buildings use it, and so do houses with flat or low-slope sections. If your main roof is tile or shingle, we still look at the flat parts.",
    },
    {
      q: "What protects the foam from the sun?",
      a: "A coating. Elastomeric and silicone coatings are the ones we use on foam roofs. Recoating renews that layer when the foam underneath is still sound.",
    },
    {
      q: "Do you promise lower electric bills?",
      a: "No. Reflective coatings are used because Phoenix sun is hard on flat roofs. We do not quote a dollar savings or a payback period.",
    },
  ],
  breadcrumbs: [{ label: "Spray Foam Roofing" }],
  linkGroups: [
    {
      title: "Foam roofing services",
      links: [
        { href: `${FOAM_HUB}/installation`, label: "Spray foam installation", text: "A new SPF roof and coating on a prepared low-slope deck." },
        { href: `${FOAM_HUB}/repair`, label: "Foam roof repair", text: "Cut out damaged foam, fill it, and restore the coating." },
        { href: `${FOAM_HUB}/recoating`, label: "Foam roof recoating", text: "Elastomeric or silicone coatings over sound foam." },
      ],
    },
    {
      title: "Related pages",
      links: [
        { href: TILE_HUB, label: "Tile roofing", text: "For the sloped tile roof next to a flat section." },
        { href: SHINGLE_HUB, label: "Shingle roofing", text: "Shingle slopes that meet a low-slope roof." },
        { href: INSURANCE_PATH, label: "Insurance claims", text: "How storm damage on a roof gets documented." },
        { href: "/service-areas/phoenix", label: "Phoenix service area", text: "Flat roofs are common on commercial Phoenix buildings." },
        { href: "/service-areas/tempe", label: "Tempe service area", text: "Older Tempe houses often mix shingles and flat sections." },
      ],
    },
  ],
};

export const foamSubpages: LandingPage[] = [
  {
    path: `${FOAM_HUB}/installation`,
    title: "Spray Foam Roof Installation | XRP",
    description:
      "Spray foam roof installation in Phoenix for flat and low-slope roofs, with a UV coating. XRP Roofing inspects the deck first. Call for an estimate.",
    h1: "Spray Foam Roof Installation in Phoenix",
    eyebrow: "Spray foam installation",
    image: "/images/xrp-roofing/Foam.jpeg",
    imageAlt: "Light-colored foam roof surface on an Arizona low-slope roof",
    serviceName: "Spray foam roof installation",
    intro: [
      "A spray foam roof installation puts SPF on a flat or low-slope roof and finishes it with a coating. The foam can build thickness and fill around penetrations. The coating is what stands between that foam and the Phoenix sun.",
      "XRP Roofing installs these systems on houses and commercial buildings. Jonathan inspects the roof and does the work. We do not spray foam over a wet, rotten, or unknown deck and call it finished.",
    ],
    sections: [
      {
        heading: "What has to be true before foam goes down",
        paragraphs: [
          "The deck needs to be dry enough to cover, and drains need a path for monsoon rain. Ponding that never leaves a roof is a drainage problem first. Foam can add slope in some conditions, and it cannot invent a drain that the building does not have. The inspection says which one you have.",
          "Pipes, scuppers, parapet walls, and equipment curbs are detailed before the coating, because those are the places flat roofs leak. A smooth field with a raw curb is not a finished installation.",
        ],
      },
      {
        heading: "Installation, repair, or a recoat",
        paragraphs: [
          "Choose installation when the roof needs a foam system, not a touch-up. Choose a [foam roof repair](/spray-foam-roofing/repair) when an area is damaged and the rest of the foam is sound. Choose [recoating](/spray-foam-roofing/recoating) when the foam is intact and the coating is what wore out. The [spray foam overview](/spray-foam-roofing) compares all three.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can foam go over my old flat roof?",
        a: "Sometimes, after the inspection shows the deck and the old roof are dry and attached. If the old roof is wet or loose, it comes off or it gets repaired first. We will not bury a wet roof.",
      },
      {
        q: "Do you install foam on houses and businesses?",
        a: "Yes. Both. Tell us whether the roof is a house, a patio addition, or a commercial building when you request the estimate.",
      },
      {
        q: "Is the coating part of the installation?",
        a: "Yes. Foam left bare in this climate is not a complete roof. The installation includes the protective coating.",
      },
    ],
    breadcrumbs: [crumb, { label: "Spray Foam Roof Installation" }],
    linkGroups: [
      {
        title: "Foam pages",
        links: [
          { href: FOAM_HUB, label: "Spray foam roofing overview", text: "Foam installation, repair, and recoating in Phoenix." },
          { href: `${FOAM_HUB}/repair`, label: "Foam roof repair", text: "Local foam damage instead of a full new system." },
          { href: `${FOAM_HUB}/recoating`, label: "Foam roof recoating", text: "A new coating when the foam is still sound." },
          { href: "/service-areas/mesa", label: "Mesa service area", text: "Central Mesa still has older flat roofs." },
        ],
      },
    ],
  },
  {
    path: `${FOAM_HUB}/repair`,
    title: "Foam Roof Repair in Phoenix | XRP",
    description:
      "Foam roof repair in Phoenix for blisters, wet foam, and coating cracks. XRP Roofing inspects and photographs the area first. Call for an estimate.",
    h1: "Foam Roof Repair in Phoenix",
    eyebrow: "Foam roof repair",
    image: "/images/xrp-roofing/foam-roofing-before-1.jpeg",
    imageAlt: "Aerial view of a flat roof before foam coating work in Arizona",
    serviceName: "Foam roof repair",
    intro: [
      "Foam roof repair fixes a failed area of spray foam or coating: a blister, a split, a puncture, or foam that got wet because the coating opened up. The repair cuts out what is damaged, fills it, and brings the coating back over that area.",
      "Jonathan inspects the roof and does the repair. If the coating is thin across the whole roof and the foam is still dry, a [recoat](/spray-foam-roofing/recoating) may be the better scope. If the deck is wet or the foam is loose over a large area, we talk about [installation](/spray-foam-roofing/installation) instead of a patch.",
    ],
    sections: [
      {
        heading: "How foam roofs fail in the desert",
        paragraphs: [
          "UV thins the coating. Monsoon water then sits in low spots and works into any crack. Foot traffic from HVAC techs, and debris blown across a commercial roof, puncture the coating. Once foam is exposed, it does not sit and wait. It breaks down in the sun.",
          "We photograph the open coating, the wet foam, and the drains around it. A repair that ignores a clogged scupper will leak again on the next storm, even if the foam fill looks neat.",
        ],
      },
      {
        heading: "Repair versus a new coating",
        paragraphs: [
          "A local repair is for local damage. Recoating is for a roof whose foam is still attached and dry, with a coating that has reached the end of its film. The [spray foam overview](/spray-foam-roofing) explains both. If a storm opened the roof, the [insurance claim page](/roof-insurance-claim) explains the photos and the adjuster meeting. We do not guarantee a claim will be approved.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you repair one leak in a foam roof?",
        a: "Yes, when the damage is limited and the surrounding foam is dry and stuck. We will not call a widespread failure a one-leak repair.",
      },
      {
        q: "What if the foam feels soft?",
        a: "Soft foam is often wet foam. Wet foam gets cut out. Coating over it traps the water. The inspection shows how far the soft area goes.",
      },
      {
        q: "Do you also repair the tile or shingle roof attached to the flat section?",
        a: "Yes, if that is part of the leak. Mixed roofs are common. We inspect the joint between the systems, not only the foam.",
      },
    ],
    breadcrumbs: [crumb, { label: "Foam Roof Repair" }],
    linkGroups: [
      {
        title: "Related foam pages",
        links: [
          { href: FOAM_HUB, label: "Spray foam roofing overview", text: "Installation, repair, and recoating." },
          { href: `${FOAM_HUB}/recoating`, label: "Foam roof recoating", text: "When the whole coating needs to be renewed." },
          { href: `${FOAM_HUB}/installation`, label: "Spray foam installation", text: "A new foam roof when repair is not enough." },
          { href: INSURANCE_PATH, label: "Insurance claim help", text: "Documentation for you and your adjuster." },
        ],
      },
    ],
  },
  {
    path: `${FOAM_HUB}/recoating`,
    title: "Foam Roof Recoating Phoenix | XRP",
    description:
      "Foam roof recoating in Phoenix with elastomeric or silicone coatings. XRP Roofing checks the foam before coating it. Call for a free estimate.",
    h1: "Foam Roof Recoating with Elastomeric and Silicone",
    eyebrow: "Foam roof recoating",
    image: "/images/xrp-roofing/2025-01-26-4.jpg",
    imageAlt: "Roof coating work on a low-slope roof in Arizona",
    serviceName: "Foam roof recoating",
    intro: [
      "Foam roof recoating puts a new elastomeric or silicone coating over a spray foam roof whose foam is still in place. The coating is the sunscreen and the weather skin. When it chalks, cracks, or wears thin, the foam underneath is one season away from UV damage.",
      "XRP Roofing recoats foam roofs in the Phoenix metro after an inspection. Jonathan looks at the foam and does the coating work. We do not coat over wet foam, loose foam, or a roof that actually needs a [repair](/spray-foam-roofing/repair) first.",
    ],
    sections: [
      {
        heading: "Elastomeric and silicone coatings",
        paragraphs: [
          "Elastomeric coatings are the acrylic and similar coatings long used on desert foam roofs. Silicone coatings are used where water ponds and stays, because silicone tolerates standing water better than a standard acrylic. The inspection, the drains, and how long water sits on your roof decide which one we write into the estimate. We do not pick a coating from a brochure without seeing the roof.",
          "Either coating needs a clean, dry, attached surface. Blisters are cut out and filled. Dirt and failed coating that will peel are removed. A pretty topcoat over peeling material comes off with the next heat cycle.",
        ],
      },
      {
        heading: "When recoating is the wrong job",
        paragraphs: [
          "If the foam is saturated, if the deck is soft, or if the foam has come loose over large areas, a recoat is a cover-up. Those roofs need repair or a new [installation](/spray-foam-roofing/installation). The [foam overview](/spray-foam-roofing) walks through the three choices. We also do not promise a utility rebate or a specific energy savings number.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do you choose silicone versus elastomeric?",
        a: "We look at ponding, the existing coating, and the condition of the foam. Silicone is the usual conversation where water stands. Elastomeric coatings fit many dry, well-drained foam roofs. The estimate names the one we are proposing.",
      },
      {
        q: "Can you recoat if there are a few blisters?",
        a: "Yes. Those spots are repaired first, then the roof is coated. A blister left in place becomes a bubble in the new coating.",
      },
      {
        q: "Is recoating a warranty that the roof will never leak?",
        a: "No. A coating renews the surface we inspected. Drains still have to work, and new damage can still happen. We do not sell a leak-proof promise.",
      },
    ],
    breadcrumbs: [crumb, { label: "Foam Roof Recoating" }],
    linkGroups: [
      {
        title: "Related pages",
        links: [
          { href: FOAM_HUB, label: "Spray foam roofing overview", text: "Foam systems for Phoenix flat and low-slope roofs." },
          { href: `${FOAM_HUB}/repair`, label: "Foam roof repair", text: "Fix damaged foam before a coating goes on." },
          { href: `${FOAM_HUB}/installation`, label: "Spray foam installation", text: "A new foam roof when the old one is finished." },
          { href: "/services/roof-coatings", label: "Roof coatings", text: "Coatings on other flat roof systems, not only foam." },
        ],
      },
    ],
  },
];
