import { FOAM_HUB, INSURANCE_PATH, SERVICE_AREAS_HUB, SHINGLE_HUB, TILE_HUB } from "@/lib/seo-routes";
import type { LandingPage } from "./types";

const crumb = { label: "Shingle Roofing", href: SHINGLE_HUB };

export const shingleHub: LandingPage = {
  path: SHINGLE_HUB,
  title: "Shingle Roofing Phoenix | XRP Roofing",
  description:
    "Shingle roofing in Phoenix for repair, replacement, and inspections. XRP Roofing serves the metro. Call for a free estimate.",
  h1: "Shingle Roofing for Phoenix-Area Homes",
  eyebrow: "Shingle roofing",
  image: "/images/xrp-roofing/2024-05-13.jpg",
  imageAlt: "Asphalt shingle roof worked on by XRP Roofing in Arizona",
  serviceName: "Shingle roofing",
  intro: [
    "Asphalt shingle roofs are common across the Phoenix metro, especially in older neighborhoods and in subdivisions where the HOA still allows shingles. Desert sun, rooftop heat, and monsoon wind age them differently than they age in milder parts of the country.",
    "XRP Roofing repairs, replaces, and inspects shingle roofs on houses and commercial buildings. Jonathan inspects every roof and does the work on the project himself. We photograph what we find and write an estimate before any work starts.",
  ],
  sections: [
    {
      heading: "What Phoenix heat does to a shingle roof",
      paragraphs: [
        "South and west slopes take the worst of the sun. Granules loosen, tabs crack, and the strips that seal one shingle to the next can dry out. Monsoon wind then lifts whatever the heat has already weakened. A leak in July often started as a brittle tab or an open pipe flashing earlier in the year.",
        "Valleys collect palm debris and gravel. That debris holds water against the shingles during a fast storm. We look at the field, the edges, the penetrations, and the valleys, not only the stain on the ceiling.",
      ],
    },
    {
      heading: "Repair, replacement, or an inspection first",
      paragraphs: [
        "A few missing tabs or one failed flashing can be a repair. Widespread cracking, curling, and soft decking is a replacement conversation. The inspection is how we tell those apart, with photos, before anyone agrees to a scope of work.",
        "Read the pages for [shingle roof replacement](/shingle-roofing/replacement), [shingle roof repair](/shingle-roofing/repair), and a [shingle roof inspection](/shingle-roofing/inspection). If the damage followed a storm, see how we [document a roof insurance claim](/roof-insurance-claim).",
      ],
    },
  ],
  pointsHeading: "What you can expect",
  points: [
    "Jonathan inspects the roof and does the work himself",
    "Photos of the conditions we find",
    "A written estimate from the quote form or a phone call",
    "Residential and commercial shingle roofs",
    "Service across the Phoenix metro, with no branch office in each city",
  ],
  faqs: [
    {
      q: "Do you repair shingle roofs, or only replace them?",
      a: "Both. We repair a shingle roof when the rest of it still has useful life, and we replace it when the field, the underlayment, or the deck no longer does. The inspection decides which one is honest.",
    },
    {
      q: "Can you look at a shingle roof before monsoon season?",
      a: "Yes. A shingle roof inspection checks loose tabs, open flashings, and debris in the valleys before the next storm. Call or request a free estimate and we will schedule the visit.",
    },
    {
      q: "Do you work on commercial buildings with shingles?",
      a: "Yes. We roof houses and commercial buildings. Plenty of smaller commercial properties in the valley still have shingle slopes, sometimes next to a flat section.",
    },
  ],
  breadcrumbs: [{ label: "Shingle Roofing" }],
  linkGroups: [
    {
      title: "Shingle roofing services",
      links: [
        {
          href: `${SHINGLE_HUB}/replacement`,
          label: "Shingle roof replacement",
          text: "Tear-off and a new shingle roof when the field is used up.",
        },
        {
          href: `${SHINGLE_HUB}/repair`,
          label: "Shingle roof repair",
          text: "Missing tabs, open flashings, and leak repairs.",
        },
        {
          href: `${SHINGLE_HUB}/inspection`,
          label: "Shingle roof inspection",
          text: "Photos and a written look at the roof before you decide.",
        },
      ],
    },
    {
      title: "Related pages",
      links: [
        { href: TILE_HUB, label: "Tile roofing", text: "Concrete and clay tile, including underlayment re-lays." },
        { href: FOAM_HUB, label: "Spray foam roofing", text: "Foam and coatings for flat and low-slope roofs." },
        { href: INSURANCE_PATH, label: "Insurance claims", text: "How we document storm damage for you and your adjuster." },
        { href: SERVICE_AREAS_HUB, label: "Service areas", text: "Phoenix-metro cities we travel to." },
      ],
    },
  ],
};

export const shingleSubpages: LandingPage[] = [
  {
    path: `${SHINGLE_HUB}/replacement`,
    title: "Shingle Roof Replacement Phoenix | XRP",
    description:
      "Shingle roof replacement in Phoenix when the roof is worn out. XRP Roofing inspects, photographs, and writes an estimate. Call today.",
    h1: "Shingle Roof Replacement in the Phoenix Metro",
    eyebrow: "Shingle roof replacement",
    image: "/images/xrp-roofing/2024-05-10.jpg",
    imageAlt: "Residential roof replacement work by XRP Roofing in Arizona",
    serviceName: "Shingle roof replacement",
    intro: [
      "A shingle roof replacement is the right conversation when the shingles are cracked or curled across the slopes, the underlayment is brittle, or the deck has stayed wet. Patching one more leak on that roof only moves the water.",
      "XRP Roofing replaces shingle roofs for Phoenix-area homes and commercial buildings. Jonathan inspects the roof and does the work himself. You get photos and a written estimate before the tear-off.",
    ],
    sections: [
      {
        heading: "What a Phoenix shingle replacement includes",
        paragraphs: [
          "We remove the old shingles rather than nailing a new layer over a cooked one. The deck gets a look while it is open. Soft or broken wood is called out before new material goes down. Edges, valleys, and pipe flashings are part of the roof, not extras we hope you will not notice.",
          "Attic heat matters here. A shingle roof over a closed-up attic cooks from above and below. During the inspection we note ventilation we can see, such as blocked soffits or a ridge that cannot exhaust, so the replacement is not set up to fail the same way.",
        ],
      },
      {
        heading: "How this differs from a repair",
        paragraphs: [
          "Choose a [shingle roof repair](/shingle-roofing/repair) when the damage is local: a few tabs, one flashing, a valley full of debris. Choose replacement when the slope is failing in many places. If you are not sure, start with a [shingle roof inspection](/shingle-roofing/inspection).",
          "Storm-torn shingles are documented on our [roof insurance claim](/roof-insurance-claim) page. We photograph the damage and can meet your adjuster. We do not decide what the policy pays.",
        ],
      },
    ],
    pointsHeading: "Before work starts",
    points: [
      "On-roof inspection and photos",
      "A written estimate you can review",
      "Tear-off so the deck can be seen",
      "Residential and commercial shingle roofs",
      "Jonathan on the inspection and on the work",
    ],
    faqs: [
      {
        q: "Can you put new shingles over the old ones?",
        a: "We tear off. A second layer hides the deck and adds weight to a roof the sun has already aged. If you want overlay pricing from someone else, that is a different scope than the one we write.",
      },
      {
        q: "Will you tell me if a repair is enough?",
        a: "Yes. If the field is still sound and the leak has a local cause, we say so and point you to a repair instead of a full replacement.",
      },
      {
        q: "Do HOAs allow shingles in every neighborhood?",
        a: "No. Many Valley HOAs require tile. If your community allows shingles, we follow the material the rules already name. We do not promise an HOA will approve a change of material.",
      },
    ],
    breadcrumbs: [crumb, { label: "Shingle Roof Replacement" }],
    linkGroups: [
      {
        title: "Back to shingle roofing",
        links: [
          { href: SHINGLE_HUB, label: "Shingle roofing overview", text: "How we handle shingle roofs across the Phoenix metro." },
          { href: `${SHINGLE_HUB}/repair`, label: "Shingle roof repair", text: "When a local fix is the honest scope." },
          { href: `${SHINGLE_HUB}/inspection`, label: "Shingle roof inspection", text: "Photos before you choose repair or replacement." },
          { href: INSURANCE_PATH, label: "Insurance claim help", text: "Documentation after wind or storm damage." },
        ],
      },
    ],
  },
  {
    path: `${SHINGLE_HUB}/repair`,
    title: "Shingle Roof Repair in Phoenix | XRP",
    description:
      "Shingle roof repair in Phoenix for leaks, missing tabs, and open flashings. XRP Roofing inspects and photographs the roof first. Call for an estimate.",
    h1: "Shingle Roof Repair for Phoenix Leaks",
    eyebrow: "Shingle roof repair",
    image: "/images/xrp-roofing/2024-05-09.jpg",
    imageAlt: "Roof repair underway on an Arizona home by XRP Roofing",
    serviceName: "Shingle roof repair",
    intro: [
      "Most shingle leaks we see in the Phoenix area start at a detail: a pipe boot, a wall flashing, a valley packed with debris, or a run of tabs the wind lifted. The ceiling stain is rarely sitting under the actual opening.",
      "XRP Roofing repairs shingle roofs after an on-site inspection. Jonathan finds the opening, photographs it, and writes the repair. If the rest of the roof is used up, we say that a [replacement](/shingle-roofing/replacement) is the clearer fix.",
    ],
    sections: [
      {
        heading: "Repairs that come up after heat and monsoon wind",
        paragraphs: [
          "Heat dries the sealant strips. The first strong outflow then folds tabs back or breaks them off. We replace the damaged shingles and check the courses around them so the repair is not surrounded by tabs that will lift next week.",
          "Flashings around pipes, skylights, and sidewalls crack in the sun. A new shingle will not stop water that is entering beside the pipe. The repair includes the metal and the seal at that opening.",
        ],
      },
      {
        heading: "When a repair is the wrong promise",
        paragraphs: [
          "If shingles are cracked across both slopes, or the deck is soft underfoot, a repair can stop today's drip and leave next month's. We will not sell a patch as a new roof. The [inspection](/shingle-roofing/inspection) is the short visit that sorts this out.",
          "After a storm, photos from the repair visit are the same kind of record described on our [insurance claim page](/roof-insurance-claim). Your insurer still decides the claim. We do not.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you match my existing shingles?",
        a: "Sometimes. Sun-faded shingles rarely match a new bundle exactly, even from the same product line. We will tell you when a repair will be visible and when the slope is better replaced.",
      },
      {
        q: "Do you repair one leak and leave the rest?",
        a: "We repair the opening that is leaking and we point out other failures we can see. You decide whether those are part of this visit or a later scope.",
      },
      {
        q: "Is a shingle repair the same as a tile repair?",
        a: "No. Tile leaks are often in the underlayment under the tile. Shingle leaks are usually in the shingle, the flashing, or the valley. See [tile roof repair](/tile-roofing/repair) if your roof is tile.",
      },
    ],
    breadcrumbs: [crumb, { label: "Shingle Roof Repair" }],
    linkGroups: [
      {
        title: "Related shingle pages",
        links: [
          { href: SHINGLE_HUB, label: "Shingle roofing overview", text: "Repair, replacement, and inspections in one place." },
          { href: `${SHINGLE_HUB}/replacement`, label: "Shingle roof replacement", text: "When the field is worn out, not just one detail." },
          { href: `${SHINGLE_HUB}/inspection`, label: "Shingle roof inspection", text: "A documented look before you approve a repair." },
          { href: TILE_HUB, label: "Tile roofing", text: "A different system, common on HOA homes nearby." },
        ],
      },
    ],
  },
  {
    path: `${SHINGLE_HUB}/inspection`,
    title: "Shingle Roof Inspection Phoenix | XRP",
    description:
      "Shingle roof inspections in Phoenix with photos of tabs, flashings, and valleys. XRP Roofing writes what we find. Call to schedule.",
    h1: "Shingle Roof Inspection in Phoenix",
    eyebrow: "Shingle roof inspection",
    image: "/images/xrp-roofing/2024-05-09-1.jpg",
    imageAlt: "Close look at roof damage during an Arizona roof inspection",
    serviceName: "Shingle roof inspection",
    intro: [
      "A shingle roof inspection tells you what the roof is doing now: which slopes are losing granules, which flashings are open, and whether a leak is a repair or the start of a replacement. It is a look at the roof, not a guess from the driveway.",
      "Jonathan gets on the roof, takes photos, and walks through what they show. You can use that record to plan work, or to show an adjuster after a storm. We do not guarantee that an insurer will approve a claim.",
    ],
    sections: [
      {
        heading: "What we look at on a shingle roof",
        paragraphs: [
          "We check the field for cracked, cupped, and missing tabs, then the hips, ridges, and eaves. Valleys are opened up enough to see whether debris is holding water. Pipe boots, skylight curbs, and wall flashings get their own photos because that is where Phoenix shingle leaks usually start.",
          "From the attic, when access is safe, we look for daylight, stained decking, and wet insulation under the slopes that showed damage outside. Not every house has a walkable attic. If we cannot see it, we say so.",
        ],
      },
      {
        heading: "What the inspection is for",
        paragraphs: [
          "Use it before monsoon season, after a wind event, or when you are buying or selling and want the roof described in photos. The next step might be a [repair](/shingle-roofing/repair) or a [replacement](/shingle-roofing/replacement). The [shingle roofing overview](/shingle-roofing) explains both.",
          "If you are filing a claim, read [roof insurance claim help](/roof-insurance-claim). We can meet you and your adjuster. We are not a public adjuster, and we do not negotiate the claim.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is the inspection a sales visit?",
        a: "It is an inspection. You get photos and a plain explanation. If the roof needs work, we can write an estimate. If it does not, we say that.",
      },
      {
        q: "Do you inspect tile and foam roofs too?",
        a: "Yes. This page is about shingles. Tile inspections focus on underlayment and broken tiles. Foam inspections focus on the coating and wet foam. Call and tell us which roof you have.",
      },
      {
        q: "Can I use the photos with my insurance company?",
        a: "Yes. They are photos of the roof we inspected. Your insurer decides what they mean for coverage. We do not promise an approval.",
      },
    ],
    breadcrumbs: [crumb, { label: "Shingle Roof Inspection" }],
    linkGroups: [
      {
        title: "After the inspection",
        links: [
          { href: SHINGLE_HUB, label: "Shingle roofing overview", text: "The full shingle service, from repair to replacement." },
          { href: `${SHINGLE_HUB}/repair`, label: "Shingle roof repair", text: "Local fixes when the inspection shows a limited failure." },
          { href: `${SHINGLE_HUB}/replacement`, label: "Shingle roof replacement", text: "A new roof when the inspection shows the field is done." },
          { href: INSURANCE_PATH, label: "Storm damage documentation", text: "How a claim visit works with you and your adjuster." },
        ],
      },
    ],
  },
];
