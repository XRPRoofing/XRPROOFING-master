import { FOAM_HUB, INSURANCE_PATH, SHINGLE_HUB, TILE_HUB } from "@/lib/seo-routes";
import type { LandingPage } from "./types";

const crumb = { label: "Tile Roofing", href: TILE_HUB };
const underlayment = `${TILE_HUB}/underlayment-replacement`;

export const tileHub: LandingPage = {
  path: TILE_HUB,
  title: "Tile Roofing in Phoenix | XRP Roofing",
  description:
    "Tile roofing in Phoenix for repair, replacement, and underlayment re-lays. XRP Roofing inspects the roof in person. Call for an estimate.",
  h1: "Tile Roofing for Phoenix and the East Valley",
  eyebrow: "Tile roofing",
  image: "/images/xrp-roofing/2024-07-05.jpg",
  imageAlt: "Concrete tile roof on an Arizona home serviced by XRP Roofing",
  serviceName: "Tile roofing",
  intro: [
    "Concrete and clay tile covers a large share of Phoenix-metro houses, especially in HOA neighborhoods in Scottsdale, Gilbert, Chandler, and north Phoenix. The tile can look fine from the street while the underlayment underneath is the part that has given up.",
    "XRP Roofing repairs tile, replaces tile roofs, and does the lift-and-relay work Arizona houses need when the tile is still usable and the felt or synthetic sheet under it is not. Jonathan inspects every roof and does the work himself.",
  ],
  sections: [
    {
      heading: "Tile is only half of the roof",
      paragraphs: [
        "Tile sheds most of the rain. The underlayment is the waterproof layer. In this heat that layer dries, cracks, and shrinks years before the tile above it breaks. Water then shows up at a wall or a valley even though the tiles still look orderly from the sidewalk.",
        "Monsoon wind adds a second problem. It slides tiles, cracks hips and ridges, and dumps debris into the valleys. A roof can need a few tiles reset, a ridge repaired, or a full [underlayment replacement](/tile-roofing/underlayment-replacement). Those are different jobs.",
      ],
    },
    {
      heading: "Repair, replacement, or a re-lay",
      paragraphs: [
        "A [tile roof repair](/tile-roofing/repair) covers broken tiles, open ridges, and local leaks. A [tile roof replacement](/tile-roofing/replacement) is for roofs whose tile and underlayment both need to come off. A re-lay, also called a lift-and-relay, saves sound tile and replaces what is under it.",
        "HOA rules often require the same tile profile and color. We do not promise a board will approve a material change. If your community is shingle instead, see [shingle roofing](/shingle-roofing). Flat roofs and patio covers are on the [spray foam](/spray-foam-roofing) page.",
      ],
    },
  ],
  pointsHeading: "How a tile visit works",
  points: [
    "Jonathan on the roof for the inspection and the work",
    "Photos of broken tile, ridges, valleys, and underlayment when it is exposed",
    "A written estimate before tiles are pulled",
    "Residential and commercial tile roofs",
    "No separate office claimed in each HOA community",
  ],
  faqs: [
    {
      q: "My tile looks new. Why is it leaking?",
      a: "On many Arizona tile roofs the leak is under the tile. The underlayment can fail while the tile on top still looks intact. An inspection shows whether you need a repair or a re-lay.",
    },
    {
      q: "What is a lift-and-relay?",
      a: "Tiles are removed, the underlayment is replaced, and sound tiles are set back. It is common here because tile often outlasts the sheet under it. Details are on the underlayment replacement page.",
    },
    {
      q: "Do you handle clay tile and concrete tile?",
      a: "Yes. Both are used across the metro. The inspection notes which one you have, because the weight, the profile, and how the tiles lock together change the repair.",
    },
  ],
  breadcrumbs: [{ label: "Tile Roofing" }],
  linkGroups: [
    {
      title: "Tile roofing services",
      links: [
        { href: `${TILE_HUB}/replacement`, label: "Tile roof replacement", text: "A new tile roof when the tile and the underlayment are both done." },
        { href: `${TILE_HUB}/repair`, label: "Tile roof repair", text: "Broken tiles, ridges, and local leaks." },
        { href: underlayment, label: "Tile underlayment replacement", text: "Lift-and-relay when the tile can be reused." },
      ],
    },
    {
      title: "Related pages",
      links: [
        { href: SHINGLE_HUB, label: "Shingle roofing", text: "For neighborhoods where the roof is asphalt shingle." },
        { href: FOAM_HUB, label: "Spray foam roofing", text: "Flat and low-slope roofs, including foam recoats." },
        { href: INSURANCE_PATH, label: "Insurance claims", text: "Photos and an adjuster meeting after storm damage." },
        { href: "/service-areas/scottsdale", label: "Scottsdale tile roofs", text: "HOA tile is the usual roof north of the city." },
        { href: "/service-areas/gilbert", label: "Gilbert tile roofs", text: "Master-planned communities with concrete tile." },
      ],
    },
  ],
};

export const tileSubpages: LandingPage[] = [
  {
    path: `${TILE_HUB}/replacement`,
    title: "Tile Roof Replacement Phoenix | XRP",
    description:
      "Tile roof replacement in Phoenix when tile and underlayment are both worn out. XRP Roofing inspects and writes the estimate. Call today.",
    h1: "Tile Roof Replacement in Phoenix",
    eyebrow: "Tile roof replacement",
    image: "/images/xrp-roofing/2025-01-26.jpg",
    imageAlt: "Tile roof installation work by an XRP Roofing crew in Arizona",
    serviceName: "Tile roof replacement",
    intro: [
      "A full tile roof replacement removes the old tile and the underlayment and builds the roof back up. It is the right scope when the tile is broken across the slopes, the underlayment is gone, or the deck has been wet long enough that a re-lay would put sound-looking tile back on a bad roof.",
      "XRP Roofing replaces tile roofs across the Phoenix metro. Jonathan inspects the roof and does the work. If the tile can be saved, we will say so and point you to an [underlayment replacement](/tile-roofing/underlayment-replacement) instead of selling you new tile you do not need.",
    ],
    sections: [
      {
        heading: "Why some Valley tile roofs are replaced",
        paragraphs: [
          "Older concrete tile can spall, crack at the nails, or no longer match because the profile was discontinued. Clay tile can last longer and still need a new roof when the deck and the flashings under it have failed. HOA communities often care about the profile and the color. We identify what is on the house. We do not promise a specific brand or an HOA approval.",
          "Flashings at walls, pans at headwalls, and the way hips and ridges are mortared or foamed are part of the replacement, not a later punch list. Monsoon rain finds any of those details that were skipped.",
        ],
      },
      {
        heading: "Replacement compared with a repair",
        paragraphs: [
          "A [tile roof repair](/tile-roofing/repair) resets or replaces a limited area. Replacement is the whole roof. The [tile roofing overview](/tile-roofing) explains how we choose. Storm photos and an adjuster meeting are described on the [insurance claim page](/roof-insurance-claim). We do not negotiate the claim.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you always recommend new tile?",
        a: "No. If the tile is sound and the leak is the underlayment, a lift-and-relay is the more direct repair. We only recommend new tile when the existing tile should not go back on the roof.",
      },
      {
        q: "Can you match my HOA tile?",
        a: "We look for a profile and color that fit the house and the written rules you already have. Approval is the HOA's decision. We do not guarantee it.",
      },
      {
        q: "Is this the same as a shingle replacement?",
        a: "No. Tile is heavier, it is installed over battens or directly on underlayment depending on the system, and the waterproof layer is hidden. See shingle roof replacement if your roof is shingles.",
      },
    ],
    breadcrumbs: [crumb, { label: "Tile Roof Replacement" }],
    linkGroups: [
      {
        title: "Tile pages",
        links: [
          { href: TILE_HUB, label: "Tile roofing overview", text: "Repair, replacement, and re-lays for Valley tile roofs." },
          { href: `${TILE_HUB}/repair`, label: "Tile roof repair", text: "Broken tiles and local leaks." },
          { href: underlayment, label: "Underlayment replacement", text: "Keep the tile, replace the sheet under it." },
          { href: "/service-areas/gilbert", label: "Gilbert service area", text: "HOA tile is the common roof in Gilbert." },
        ],
      },
    ],
  },
  {
    path: `${TILE_HUB}/repair`,
    title: "Tile Roof Repair in Phoenix | XRP",
    description:
      "Tile roof repair in Phoenix for broken tiles, slipped ridges, and leaks. XRP Roofing photographs the cause before any repair. Call for an estimate.",
    h1: "Tile Roof Repair in the Phoenix Metro",
    eyebrow: "Tile roof repair",
    image: "/images/xrp-roofing/2024-07-05-1.jpg",
    imageAlt: "Close view of tile roofing work on an Arizona house",
    serviceName: "Tile roof repair",
    intro: [
      "A tile roof repair puts back what wind or a footstep broke, and it closes the opening that is actually letting water in. On Arizona tile, that opening is often a cracked pipe flashing, a valley, or a ridge, not the one broken tile a homeowner can see from the yard.",
      "Jonathan inspects the roof, photographs the failure, and does the repair. If tiles slide because the underlayment no longer holds the fasteners, we will tell you the honest scope is an [underlayment replacement](/tile-roofing/underlayment-replacement), not another tube of sealant.",
    ],
    sections: [
      {
        heading: "Repairs we see after monsoon season",
        paragraphs: [
          "Outflow winds slide tiles down the slope and crack field tiles at the nails. Hips and ridges mortared years ago crack and drop pieces into the gutters, or what is left of the gutters. Foam ridges can split in the sun. We repair the detail that failed and check the courses next to it.",
          "Walking a tile roof the wrong way breaks more tile than the storm did. We walk the roof the way the tiles were meant to be walked, and we replace tiles we break.",
        ],
      },
      {
        heading: "What a repair will not pretend to be",
        paragraphs: [
          "Sealant smeared over tired underlayment is not a repair. If the sheet under the tile is cracked at the eaves and in the valleys, the water path is under the tile. Read the [tile overview](/tile-roofing) and the [replacement](/tile-roofing/replacement) page if the field tile itself is failing. Storm documentation is on the [insurance claim page](/roof-insurance-claim).",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you replace a few broken tiles?",
        a: "Yes, when matching tile is available and the underlayment under them is still doing its job. Discontinued profiles are not always available. We will tell you if a clean match is not realistic.",
      },
      {
        q: "A ceiling stain showed up, but the tile looks fine. Can you still find it?",
        a: "That is common. We trace the stain to the slope above it and look at flashings, valleys, and underlayment, not only at cracked tiles.",
      },
      {
        q: "Do you repair foam roofs on the same visit?",
        a: "If the house has a tile slope and a flat foam section, we can inspect both. Foam repairs are described on the foam roof repair page.",
      },
    ],
    breadcrumbs: [crumb, { label: "Tile Roof Repair" }],
    linkGroups: [
      {
        title: "Related tile pages",
        links: [
          { href: TILE_HUB, label: "Tile roofing overview", text: "How tile roofs in the Valley actually fail." },
          { href: underlayment, label: "Underlayment replacement", text: "The re-lay when the tile is fine and the sheet under it is not." },
          { href: `${TILE_HUB}/replacement`, label: "Tile roof replacement", text: "When the tile should not be reused." },
          { href: INSURANCE_PATH, label: "Insurance claim help", text: "Photos and a meeting with your adjuster after wind damage." },
        ],
      },
    ],
  },
  {
    path: underlayment,
    title: "Tile Underlayment Replacement | XRP",
    description:
      "Tile underlayment replacement in Phoenix, also called a re-lay or lift-and-relay. XRP Roofing inspects before tiles come off. Call for an estimate.",
    h1: "Tile Underlayment Replacement and Re-Lays",
    eyebrow: "Tile underlayment replacement",
    image: "/images/xrp-roofing/project-gallery-3.jpg",
    imageAlt: "Arizona roofing project photo from XRP Roofing",
    serviceName: "Tile underlayment replacement",
    intro: [
      "Tile underlayment replacement is the Arizona job people call a re-lay or a lift-and-relay. The tiles come off, the old underlayment comes off, a new waterproof layer goes down, and the sound tiles go back. It is common because desert heat wears out the sheet under the tile long before the tile itself is finished.",
      "It is not automatic. If the tiles are cracked, spalled, or a discontinued profile you cannot afford to lose more of, a [tile roof replacement](/tile-roofing/replacement) may be the clearer scope. Jonathan inspects first and does the work himself. We do not pull tile until you have photos and a written estimate.",
    ],
    sections: [
      {
        heading: "Why HOA tile roofs end up here",
        paragraphs: [
          "In Gilbert, Scottsdale, Chandler, and north Phoenix, the HOA often requires the original concrete or clay tile. Homeowners want to keep that tile, and often they can. The leak is the underlayment, the flashings, and the battens or nails that no longer hold. A re-lay keeps the look the community already approved, when the tile is still sound enough to reset.",
          "Eaves and valleys usually show the failure first. The underlayment cracks where it wraps the edge and where water concentrates. From the yard the field still looks even. From the attic there may be stains with no broken tile above them.",
        ],
      },
      {
        heading: "What the re-lay is, and what it is not",
        paragraphs: [
          "Tiles are staged so they can go back on the same slope. Broken tiles are replaced when a match exists. New underlayment, new flashings at the penetrations, and a reset of hips and ridges are the job. We do not describe it as a brand-new tile roof, and we do not describe a smear of roof cement as a re-lay.",
          "A limited leak can still be a [tile roof repair](/tile-roofing/repair). Start at the [tile roofing overview](/tile-roofing) if you are not sure which scope fits. Cities with a lot of this work include [Scottsdale](/service-areas/scottsdale) and [Gilbert](/service-areas/gilbert).",
        ],
      },
    ],
    pointsHeading: "A re-lay visit includes",
    points: [
      "An inspection before any tile is removed",
      "Photos of the underlayment once the tile is up, so you can see why it was replaced",
      "Sound tiles set back, with broken ones called out",
      "Flashings and ridges included in the written scope",
      "Jonathan on the job, not a handoff to a crew you have not met",
    ],
    faqs: [
      {
        q: "Is a lift-and-relay the same as a new tile roof?",
        a: "No. A re-lay reuses your tile and replaces the underlayment and the details under it. A replacement uses new tile. We recommend the one the inspection supports.",
      },
      {
        q: "Will every tile survive being removed?",
        a: "No. Some tiles crack when they come up, especially older concrete tile. We account for breakage in the inspection notes. If too many will break to make a re-lay sensible, we say that before the job starts.",
      },
      {
        q: "Do you pay the deductible if insurance is involved?",
        a: "No. We do not pay, waive, rebate, or credit a deductible. See the insurance claim page for how documentation works. Your insurer decides the claim.",
      },
    ],
    breadcrumbs: [crumb, { label: "Tile Underlayment Replacement" }],
    linkGroups: [
      {
        title: "Related pages",
        links: [
          { href: TILE_HUB, label: "Tile roofing overview", text: "Tile repair, replacement, and re-lays." },
          { href: `${TILE_HUB}/repair`, label: "Tile roof repair", text: "When only a small area has failed." },
          { href: `${TILE_HUB}/replacement`, label: "Tile roof replacement", text: "When the tile itself should be replaced." },
          { href: "/service-areas/chandler", label: "Chandler service area", text: "Sun Lakes and south Chandler have a lot of aging tile." },
        ],
      },
    ],
  },
];
