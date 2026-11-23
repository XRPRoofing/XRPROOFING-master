import { FOAM_HUB, INSURANCE_PATH, SERVICE_AREAS_HUB, SHINGLE_HUB, TILE_HUB, serviceAreaPath } from "@/lib/seo-routes";
import type { LandingLink, LandingPage } from "./types";

const areasCrumb = { label: "Service Areas", href: SERVICE_AREAS_HUB };

const services = {
  shingle: { href: SHINGLE_HUB, label: "Shingle roofing", text: "Repair, replacement, and inspections for asphalt shingle roofs." },
  shingleRepair: { href: `${SHINGLE_HUB}/repair`, label: "Shingle roof repair", text: "Missing tabs, open flashings, and local leaks." },
  shingleReplace: { href: `${SHINGLE_HUB}/replacement`, label: "Shingle roof replacement", text: "A tear-off when the shingle field is used up." },
  tile: { href: TILE_HUB, label: "Tile roofing", text: "Concrete and clay tile, including repairs and re-lays." },
  tileRepair: { href: `${TILE_HUB}/repair`, label: "Tile roof repair", text: "Broken tiles, ridges, and leaks that start under the tile." },
  tileReplace: { href: `${TILE_HUB}/replacement`, label: "Tile roof replacement", text: "New tile when the old tile should not go back on." },
  underlayment: {
    href: `${TILE_HUB}/underlayment-replacement`,
    label: "Tile underlayment replacement",
    text: "A lift-and-relay when the tile is sound and the sheet under it is not.",
  },
  foam: { href: FOAM_HUB, label: "Spray foam roofing", text: "Foam, repair, and coatings for flat and low-slope roofs." },
  foamRepair: { href: `${FOAM_HUB}/repair`, label: "Foam roof repair", text: "Blisters, wet foam, and open coating." },
  foamCoat: { href: `${FOAM_HUB}/recoating`, label: "Foam roof recoating", text: "Elastomeric or silicone coatings over sound foam." },
  insurance: { href: INSURANCE_PATH, label: "Insurance claim help", text: "Photos and an adjuster meeting. We do not negotiate the claim." },
  areas: { href: SERVICE_AREAS_HUB, label: "All service areas", text: "Every city page in this set, plus the roof-type hubs." },
} satisfies Record<string, LandingLink>;

function cityLink(slug: "phoenix" | "mesa" | "apache-junction" | "gilbert" | "chandler" | "scottsdale" | "tempe" | "queen-creek" | "glendale" | "peoria" | "buckeye", label: string, text: string): LandingLink {
  return { href: serviceAreaPath(slug), label, text };
}

const noOffice =
  "XRP Roofing is based in Phoenix. We do not have a separate office or a street address in this city. Jonathan comes to the property, inspects the roof, and does the work himself.";

export const serviceAreasHub: LandingPage = {
  path: SERVICE_AREAS_HUB,
  title: "Roofing Service Areas in Phoenix | XRP",
  description:
    "XRP Roofing serves Phoenix, Mesa, Gilbert, Chandler, Scottsdale, Tempe, and nearby cities. No branch offices. Call for a free estimate.",
  h1: "Roofing Service Areas Across the Phoenix Metro",
  eyebrow: "Service areas",
  image: "/images/xrp-roofing/2025-01-26-2.jpg",
  imageAlt: "XRP Roofing crew working on a residential roof in Arizona",
  serviceName: "Phoenix metro roofing",
  intro: [
    "XRP Roofing serves the Phoenix metro from our Phoenix base. These city pages cover the places we regularly inspect and roof: Phoenix, Mesa, Apache Junction, Gilbert, Chandler, Scottsdale, Tempe, Queen Creek, Glendale, Peoria, and Buckeye.",
    "We do not keep a branch office or a storefront in each city. The visit happens at your property. Jonathan inspects the roof and does the work on every project himself. The older locations directory still lists additional cities outside this set.",
  ],
  sections: [
    {
      heading: "The same climate, different roofs",
      paragraphs: [
        "Monsoon season, roughly June through September, crosses the whole valley, but the roofs it hits are not the same. Scottsdale, Gilbert, and north Peoria are heavy with HOA concrete tile. Central Mesa, Tempe near ASU, and older Glendale still have shingles and flat sections. Apache Junction sits against the Superstitions, where wind and dust matter as much as rain. Buckeye and Queen Creek are newer edges of the valley, with production tile and open lots.",
        "Commercial flat roofs and foam show up along freeway corridors in Phoenix, Chandler, and Tempe. A house can have [tile](/tile-roofing) on the street side and [spray foam](/spray-foam-roofing) on a back addition. [Shingle roofing](/shingle-roofing) is still the roof on plenty of neighborhoods the HOAs never converted to tile.",
      ],
    },
    {
      heading: "How to use these pages",
      paragraphs: [
        "Pick your city for the local roof mix, then open the service that matches the roof. After a storm, start with [roof insurance claim help](/roof-insurance-claim). We photograph damage and can meet you and your adjuster. We do not pay or waive a deductible, and we do not negotiate the claim.",
      ],
    },
  ],
  faqs: [
    {
      q: "Do you have an office in my city?",
      a: "No. We are based in Phoenix and travel to the property. None of these city pages is a second location.",
    },
    {
      q: "Do you only serve these 11 cities?",
      a: "These pages are the city guides. The locations directory lists more Phoenix-metro cities. Call if you do not see yours and we will tell you whether we can inspect it.",
    },
    {
      q: "Who comes to the inspection?",
      a: "Jonathan does. He also does the work on the project. You are not handed from a salesperson to a crew you have not met.",
    },
  ],
  breadcrumbs: [{ label: "Service Areas" }],
  linkGroups: [
    {
      title: "Roofing services",
      links: [services.shingle, services.tile, services.foam, services.insurance],
    },
    {
      title: "Cities",
      links: [
        cityLink("phoenix", "Phoenix", "Mixed tile, shingle, and flat roofs in the central city."),
        cityLink("mesa", "Mesa", "Older flat and shingle roofs, plus newer Eastmark tile."),
        cityLink("apache-junction", "Apache Junction", "Superstition wind, shingles, and manufactured homes."),
        cityLink("gilbert", "Gilbert", "HOA concrete tile in master-planned neighborhoods."),
        cityLink("chandler", "Chandler", "Sun Lakes tile, downtown shingles, and tech-corridor flat roofs."),
        cityLink("scottsdale", "Scottsdale", "HOA tile from Old Town to north Scottsdale."),
        cityLink("tempe", "Tempe", "Older university-area roofs and south Tempe tile."),
        cityLink("queen-creek", "Queen Creek", "Newer HOA tile, farms, and dusty open lots."),
        cityLink("glendale", "Glendale", "Historic central roofs and Arrowhead tile."),
        cityLink("peoria", "Peoria", "Old Town houses and Vistancia tile near Lake Pleasant."),
        cityLink("buckeye", "Buckeye", "Verrado tile and newer west-valley production roofs."),
      ],
    },
  ],
};

export const cityPages: LandingPage[] = [
  {
    path: serviceAreaPath("phoenix"),
    title: "Phoenix Roofing for Homes | XRP Roofing",
    description:
      "Phoenix roofing for shingle, tile, and foam roofs. XRP Roofing is based here and inspects every job in person. Call for a free estimate.",
    h1: "Phoenix Roofing for Houses and Flat Roofs",
    eyebrow: "Phoenix",
    image: "/images/xrp-roofing/project-gallery-1.jpg",
    imageAlt: "Arizona roofing project completed by XRP Roofing",
    serviceName: "Roofing",
    cityName: "Phoenix",
    intro: [
      "Phoenix roofs live in a hotter city than the suburbs around them. The central grid holds heat, so a shingle slope in the historic districts and a low-slope commercial roof along the freeways both cook after the sun drops. Monsoon storms then test whatever the heat has dried out.",
      "XRP Roofing is based in Phoenix. This is our city, and it is still not a promise of a second shop in every neighborhood. Jonathan inspects the property and does the work himself, from Encanto and the central neighborhoods to Ahwatukee and north Phoenix.",
    ],
    sections: [
      {
        heading: "Three roofs you actually see in Phoenix",
        paragraphs: [
          "Older central Phoenix and many mid-century houses still have asphalt shingles, often with a flat or built-up section over a rear addition. Further out, HOA subdivisions in Ahwatukee and parts of north Phoenix switched the street view to concrete tile. Downtown and the industrial corridors along I-10 and I-17 are full of low-slope commercial roofs, which is where spray foam and coatings come up.",
          "A leak on a Phoenix house is often at the joint between those systems: tile or shingles on the main slope, foam or an old flat roof behind it. We inspect both sides of that joint.",
        ],
      },
      {
        heading: "Monsoon rain on a city that was not built flat by accident",
        paragraphs: [
          "Washes and streets move water fast. Roofs have to do the same. Clogged valleys on tile, lifted shingle tabs, and ponding on flat roofs show up in the same week of storms. If you are filing a claim, we photograph the damage and can meet your adjuster. We do not negotiate the claim, and we do not pay or waive the deductible.",
          "XRP Roofing is based in Phoenix, and the published shop address is here. We still do not invent a second street address for each neighborhood. Jonathan comes to the property, inspects the roof, and does the work himself.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are you based in Phoenix?",
        a: "Yes. XRP Roofing is a Phoenix company. We travel out to the other cities on this site. We do not list a different street address for each neighborhood.",
      },
      {
        q: "Do you work on downtown flat roofs and neighborhood tile?",
        a: "Yes. Commercial low-slope roofs, house tile, and shingle roofs are all part of the work. Tell us which one you have when you request the estimate.",
      },
      {
        q: "Who does the inspection?",
        a: "Jonathan does, and he does the work on the project himself.",
      },
    ],
    breadcrumbs: [areasCrumb, { label: "Phoenix" }],
    linkGroups: [
      {
        title: "Services for Phoenix roofs",
        links: [services.shingle, services.tile, services.foam, services.insurance],
      },
      {
        title: "Nearby",
        links: [
          cityLink("glendale", "Glendale", "West of the central city, with older roofs and Arrowhead tile."),
          cityLink("tempe", "Tempe", "South of downtown, with university-area shingles and flat roofs."),
          cityLink("scottsdale", "Scottsdale", "East of Phoenix, where HOA tile takes over."),
          services.areas,
        ],
      },
    ],
  },
  {
    path: serviceAreaPath("mesa"),
    title: "Mesa Roofing Contractor | XRP Roofing",
    description:
      "Mesa roofing for older central homes and newer East Valley tile. XRP Roofing inspects in person. No Mesa office. Call for an estimate.",
    h1: "Mesa Roofing for Older Roofs and New Tile",
    eyebrow: "Mesa",
    image: "/images/xrp-roofing/2024-05-10.jpg",
    imageAlt: "Shingle roof work by XRP Roofing on an Arizona house",
    serviceName: "Roofing",
    cityName: "Mesa",
    intro: [
      "Mesa is large enough to hold two roofing markets. Central Mesa, Dobson Ranch, and the neighborhoods west of the US-60 still have shingles, built-up flat roofs, and the occasional foam section from an earlier remodel. East of the Red Mountain and out toward Eastmark and Las Sendas, the roofs are newer and the HOAs usually required concrete tile.",
      "XRP Roofing travels to Mesa from Phoenix. " + noOffice,
    ],
    sections: [
      {
        heading: "Central Mesa is not Eastmark",
        paragraphs: [
          "A 1970s house near downtown Mesa or Dobson Ranch often leaks at a flat-to-slope joint or at shingles the sun has dried out. Those roofs need a [shingle repair](/shingle-roofing/repair) or, when the field is done, a replacement. Foam comes up on the flat pieces, not as a fashion choice but because the old low-slope roof has blistered.",
          "Eastmark, Las Sendas, and the Red Mountain foothills are a different inspection. The tile can look new while the underlayment and the ridge details are what the wind is working on. A lift-and-relay is a common Arizona answer there, and it is not the same job as a central-Mesa shingle tear-off.",
        ],
      },
      {
        heading: "Storms that build over the east valley",
        paragraphs: [
          "Monsoon cells often form over the east valley and the Superstitions, then drop wind and a short, hard rain on Mesa on the way. Valleys on tile roofs fill with gravel from desert yards. Shingle tabs that survived June can lift in August. We photograph that damage if you are talking with an insurer. We do not act as a public adjuster.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you have a Mesa showroom or office?",
        a: "No. We drive to Mesa for the inspection and the work. The only shop address we publish is in Phoenix.",
      },
      {
        q: "Our Mesa house has shingles in front and a flat roof in back. Can you look at both?",
        a: "Yes. That combination is common in central Mesa. The leak is often where the two roofs meet.",
      },
      {
        q: "Is Eastmark tile treated like an older Mesa roof?",
        a: "No. Newer tile is inspected for underlayment, flashings, and storm movement. Older shingle and flat roofs are inspected for wear and blistering. We do not use one script for both.",
      },
    ],
    breadcrumbs: [areasCrumb, { label: "Mesa" }],
    linkGroups: [
      {
        title: "Services that fit Mesa",
        links: [services.shingleRepair, services.tile, services.underlayment, services.foam, services.insurance],
      },
      {
        title: "Nearby",
        links: [
          cityLink("apache-junction", "Apache Junction", "East of Mesa, against the Superstition Mountains."),
          cityLink("gilbert", "Gilbert", "South of Mesa, mostly HOA tile."),
          cityLink("tempe", "Tempe", "West of Mesa, denser and older near ASU."),
          services.areas,
        ],
      },
    ],
  },
  {
    path: serviceAreaPath("apache-junction"),
    title: "Apache Junction Roofing | XRP Roofing",
    description:
      "Apache Junction roofing near the Superstitions. Shingle and tile repairs for wind, dust, and heat. No local office. Call XRP Roofing.",
    h1: "Apache Junction Roofing on the Superstition Edge",
    eyebrow: "Apache Junction",
    image: "/images/xrp-roofing/2024-06-27.jpg",
    imageAlt: "Metal and sloped roofing work by XRP Roofing in Arizona",
    serviceName: "Roofing",
    cityName: "Apache Junction",
    intro: [
      "Apache Junction sits where the valley floor runs into the Superstition Mountains. Roofs here take more wind and dust than a Gilbert cul-de-sac, and the housing is different too: manufactured homes, older shingle houses, and retirement neighborhoods, with tile on some tracts but not as the automatic HOA rule you see farther west.",
      noOffice + " Gold Canyon is a neighboring area, not a second XRP address, and we do not treat Apache Junction as if it were Scottsdale.",
    ],
    sections: [
      {
        heading: "Wind off the mountains",
        paragraphs: [
          "Storms and outflow winds come off the Superstitions and hit roofs that are more exposed than roofs inside the built-up east valley. Shingle edges lift. Ridge caps crack. Debris from desert lots packs into valleys. A [shingle roof repair](/shingle-roofing/repair) here is often an edge and flashing problem, not a full suburban tile re-lay.",
          "Manufactured and modular homes need a careful look at how the roof was built before anyone talks about a coating or a tear-off. We inspect the roof that is there. We do not assume it matches a site-built house in Mesa.",
        ],
      },
      {
        heading: "Heat, dust, and older roofs",
        paragraphs: [
          "Pinal County sun is direct, and a lot of Apache Junction roofs have been in it for decades. Granules are gone, pipe boots are split, and flat add-on sections have alligatoring. Foam and recoating come up on those low-slope pieces when the inspection says the deck can take them. Tile roofs that do exist still get the underlayment question, just less often than in Gilbert.",
          "We photograph storm damage for you and your adjuster. We do not guarantee the claim, and we do not waive the deductible.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you have an Apache Junction office?",
        a: "No. We travel from Phoenix. Please do not use a map pin in Apache Junction as if it were ours.",
      },
      {
        q: "Can you work on a manufactured home roof?",
        a: "We inspect it first. If the roof structure is something we can repair or replace as roofers, we will say so in the estimate. If it needs a different trade, we will say that too.",
      },
      {
        q: "Is the wind here really different from Mesa?",
        a: "The mountain edge is more exposed. We look harder at ridges, eaves, and debris impact than we would on a roof surrounded by two-story houses.",
      },
    ],
    breadcrumbs: [areasCrumb, { label: "Apache Junction" }],
    linkGroups: [
      {
        title: "Services that fit Apache Junction",
        links: [services.shingle, services.shingleRepair, services.tileRepair, services.foam, services.insurance],
      },
      {
        title: "Nearby",
        links: [
          cityLink("mesa", "Mesa", "West of the Superstitions, with a wider mix of roof ages."),
          cityLink("queen-creek", "Queen Creek", "Southwest of Apache Junction, newer and more HOA tile."),
          services.areas,
        ],
      },
    ],
  },
  {
    path: serviceAreaPath("gilbert"),
    title: "Gilbert Roofing Contractor | XRP Roofing",
    description:
      "Gilbert roofing for HOA concrete tile, including underlayment re-lays. XRP Roofing has no Gilbert office. Call for a free estimate.",
    h1: "Gilbert Roofing for HOA Tile Neighborhoods",
    eyebrow: "Gilbert",
    image: "/images/xrp-roofing/2024-07-05.jpg",
    imageAlt: "Concrete tile roof on an Arizona home",
    serviceName: "Roofing",
    cityName: "Gilbert",
    intro: [
      "Gilbert's roof is usually concrete tile. Power Ranch, Val Vista Lakes, and the other master-planned neighborhoods wrote tile into the rules, and the Heritage District and Agritopia sit in an older downtown that still is not the shingle-and-flat mix of central Mesa. The houses are newer than Phoenix's historic grid, which changes the failure we look for.",
      noOffice,
    ],
    sections: [
      {
        heading: "The tile looks fine. The sheet under it may not.",
        paragraphs: [
          "On a Gilbert tile roof the field can look orderly from the sidewalk while the underlayment at the eaves and valleys is what the heat has cracked. That is the lift-and-relay, or [underlayment replacement](/tile-roofing/underlayment-replacement). It is a common Arizona scope, and it is the one we recommend only after the tiles prove they can come up and go back.",
          "Broken tiles from monsoon wind and cracked ridge mortar still happen, and those can be a [tile repair](/tile-roofing/repair) without a full re-lay. We do not sell every Gilbert leak as a new tile roof. HOAs here notice a profile change. We do not promise the board will approve one.",
        ],
      },
      {
        heading: "Southeast valley storms",
        paragraphs: [
          "Gilbert takes the same monsoon season as the rest of the east valley, with wind that moves tile on the open edges of newer subdivisions. If you are opening a claim, we document the damage with photos and can meet the adjuster. We are not a public adjuster, and we do not pay, waive, or rebate the deductible.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you re-lay our HOA tile instead of replacing it?",
        a: "Often, when the tile is still sound. That is an underlayment replacement. If too many tiles will break, we say so before we start and talk about replacement instead.",
      },
      {
        q: "Do you have a yard or office in Gilbert?",
        a: "No. We come from Phoenix for the inspection and the work.",
      },
      {
        q: "What if part of the house is flat?",
        a: "We inspect the flat section too. Patio covers and additions in Gilbert sometimes sit behind the tile. Foam or a coating is a separate scope from the tile re-lay.",
      },
    ],
    breadcrumbs: [areasCrumb, { label: "Gilbert" }],
    linkGroups: [
      {
        title: "Services that fit Gilbert",
        links: [services.tile, services.underlayment, services.tileRepair, services.insurance],
      },
      {
        title: "Nearby",
        links: [
          cityLink("chandler", "Chandler", "West of Gilbert, with Sun Lakes tile and older downtown roofs."),
          cityLink("queen-creek", "Queen Creek", "Southeast, with newer tile and more open lots."),
          cityLink("mesa", "Mesa", "North of Gilbert, older in the center and newer to the east."),
          services.areas,
        ],
      },
    ],
  },
  {
    path: serviceAreaPath("chandler"),
    title: "Chandler Roofing Company | XRP Roofing",
    description:
      "Chandler roofing for Sun Lakes tile, downtown shingles, and flat commercial roofs. No Chandler office. Call XRP Roofing for an estimate.",
    h1: "Chandler Roofing from Sun Lakes to the Price Road Corridor",
    eyebrow: "Chandler",
    image: "/images/xrp-roofing/2025-01-26-3.jpg",
    imageAlt: "Commercial roofing work by XRP Roofing in Arizona",
    serviceName: "Roofing",
    cityName: "Chandler",
    intro: [
      "Chandler is not one roof. Sun Lakes is a large active-adult community of aging concrete tile. Ocotillo and south Chandler subdivisions are HOA tile of a newer generation. Downtown and west Chandler still have older shingle houses. Along Price Road, offices and plants sit under flat commercial roofs that have more in common with Phoenix industrial buildings than with a Sun Lakes cul-de-sac.",
      noOffice,
    ],
    sections: [
      {
        heading: "Sun Lakes tile is a different age than Ocotillo tile",
        paragraphs: [
          "Sun Lakes roofs have been through decades of sun. The tile may still be the right material for the community, and the underlayment, ridges, and pipe flashings are what we expect to find tired. That points to a [tile repair](/tile-roofing/repair) or an [underlayment replacement](/tile-roofing/underlayment-replacement), depending on how widespread the sheet has failed.",
          "Newer south Chandler tile is more likely to need storm resets and flashing work than a full re-lay. We do not write both communities the same estimate.",
        ],
      },
      {
        heading: "Downtown shingles and commercial flat roofs",
        paragraphs: [
          "West of the newer tracts, shingle roofs still leak at boots and valleys the way they do in central Mesa. Those are [shingle repairs](/shingle-roofing/repair) until the field is actually used up. Commercial low-slope roofs near the employment corridor are where [spray foam](/spray-foam-roofing) and recoating belong, after we know the deck is dry.",
          "Storm claims are documented with photos. We meet adjusters when you ask. We do not negotiate the claim or touch the deductible.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you roof Sun Lakes and commercial buildings on Price Road?",
        a: "Yes. They are different systems. Tell us which one so the inspection brings the right expectation. We still do not have a Chandler office.",
      },
      {
        q: "Our downtown Chandler house has shingles. Is that unusual?",
        a: "No. Older Chandler is not all tile. We repair and replace shingles there the same way we do in other pre-HOA neighborhoods.",
      },
      {
        q: "Can foam go on a Chandler office roof?",
        a: "If the inspection shows a dry deck and a low-slope roof that fits a foam system or a recoat. We do not specify it from the parking lot.",
      },
    ],
    breadcrumbs: [areasCrumb, { label: "Chandler" }],
    linkGroups: [
      {
        title: "Services that fit Chandler",
        links: [services.underlayment, services.tileRepair, services.shingleRepair, services.foam, services.insurance],
      },
      {
        title: "Nearby",
        links: [
          cityLink("gilbert", "Gilbert", "East of Chandler, almost entirely planned-community tile."),
          cityLink("tempe", "Tempe", "North of Chandler, denser and older near the university."),
          cityLink("queen-creek", "Queen Creek", "Southeast, newer tile and agricultural edges."),
          services.areas,
        ],
      },
    ],
  },
  {
    path: serviceAreaPath("scottsdale"),
    title: "Scottsdale Roofing Contractor | XRP",
    description:
      "Scottsdale roofing for HOA tile, from Old Town to north Scottsdale. XRP Roofing inspects in person. No Scottsdale office. Call for an estimate.",
    h1: "Scottsdale Tile Roofing and HOA Roofs",
    eyebrow: "Scottsdale",
    image: "/images/xrp-roofing/project-gallery-6.jpg",
    imageAlt: "Tile roofing project photo from XRP Roofing in Arizona",
    serviceName: "Roofing",
    cityName: "Scottsdale",
    intro: [
      "Scottsdale roofs are mostly tile, and the rules around them are stricter than in a production tract on the west side. Old Town and southern Scottsdale mix older tile, some flat roofs, and tighter lots. North Scottsdale, including McCormick Ranch, Gainey Ranch, DC Ranch, and the Troon area, is concrete and clay tile under architectural committees that care about profile and color.",
      noOffice + " We do not describe ourselves as a north-Scottsdale boutique, and we do not invent awards for this work.",
    ],
    sections: [
      {
        heading: "What fails on a Scottsdale tile roof",
        paragraphs: [
          "Desert landscaping puts gravel and plant debris in the valleys. Monsoon wind moves tiles on exposed ridges. The underlayment under an otherwise handsome roof is still the layer the heat destroys first. A [re-lay](/tile-roofing/underlayment-replacement) keeps tile the committee already knows, when the tiles can be reused. A [repair](/tile-roofing/repair) covers a ridge, a valley, or a run of broken tiles.",
          "We will identify the tile that is on the house. We will not promise a discontinued profile is sitting on a shelf, and we will not promise an architectural committee will approve a substitute.",
        ],
      },
      {
        heading: "Old Town is not DC Ranch",
        paragraphs: [
          "Older Scottsdale properties are more likely to have a flat section, a patched valley, or tile that has already been repaired once. North Scottsdale estates are more likely to need underlayment and flashing work with the original tile going back. The inspection is specific to the roof. The [tile overview](/tile-roofing) explains the scopes. Claims are documented on the [insurance page](/roof-insurance-claim), without a deductible waiver and without us acting as your adjuster.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you have a Scottsdale office?",
        a: "No. We travel from Phoenix. Do not send material to a Scottsdale address for us. We do not have one.",
      },
      {
        q: "Can you keep our existing tile?",
        a: "When it is sound, a lift-and-relay is built around that. When it is not, we recommend replacement and say why, in photos, before tile comes off.",
      },
      {
        q: "Will you attend an HOA meeting for us?",
        a: "We can describe the roof work and the material we are proposing. The committee decides. We do not guarantee an approval.",
      },
    ],
    breadcrumbs: [areasCrumb, { label: "Scottsdale" }],
    linkGroups: [
      {
        title: "Services that fit Scottsdale",
        links: [services.tile, services.underlayment, services.tileRepair, services.insurance],
      },
      {
        title: "Nearby",
        links: [
          cityLink("phoenix", "Phoenix", "West of Scottsdale, with a wider mix of shingles and flat roofs."),
          cityLink("tempe", "Tempe", "South of Scottsdale, older near ASU."),
          services.areas,
        ],
      },
    ],
  },
  {
    path: serviceAreaPath("tempe"),
    title: "Tempe Roofing Contractor | XRP Roofing",
    description:
      "Tempe roofing for university-area shingles, flat roofs, and south Tempe tile. No Tempe office. XRP Roofing inspects in person. Call today.",
    h1: "Tempe Roofing for Older Houses and Flat Roofs",
    eyebrow: "Tempe",
    image: "/images/xrp-roofing/2024-05-09-1.jpg",
    imageAlt: "Roof damage reviewed during an Arizona inspection",
    serviceName: "Roofing",
    cityName: "Tempe",
    intro: [
      "Tempe packs several roof types into a short drive. Around ASU, Apache Boulevard, and the older grid, houses and rentals often still have shingles or a flat built-up roof, on small lots with tight access. South Tempe, toward Kyrene, looks more like Chandler: suburban tile under HOA rules. Mill Avenue and the freeways add real commercial flat roofs.",
      noOffice,
    ],
    sections: [
      {
        heading: "University neighborhoods leak differently than south Tempe",
        paragraphs: [
          "An older Tempe rental with shingles usually fails at pipe boots, sidewalls, and a flat section over a rear room. Landlords want photos they can keep, which is what the inspection produces. Those jobs are [shingle repairs](/shingle-roofing/repair) or, on the flat piece, [foam repair](/spray-foam-roofing/repair) or a recoat if the deck allows it.",
          "South Tempe tile is the other inspection: underlayment, ridges, and wind-moved tiles, closer to Gilbert than to the houses by the stadium. We do not send a tile crew to a flat roof, or a coating crew to a tile slope, without looking.",
        ],
      },
      {
        heading: "Tight lots and mixed roofs",
        paragraphs: [
          "Alleys, block walls, and second-story patios make some Tempe roofs harder to stage. We look at access during the inspection so the estimate is not surprised by it. Where a shingle slope dies into a flat roof, that joint gets its own photos. Storm documentation, if you need it for an insurer, follows the rules on our [claim page](/roof-insurance-claim): photos and a meeting, no deductible rebate, no guaranteed approval.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you inspect rental properties in Tempe?",
        a: "Yes. The owner or the person authorized to hire us gets the photos and the estimate. We still do not have a Tempe office.",
      },
      {
        q: "The main roof is shingles and the addition is flat. Which page fits?",
        a: "Both. Start with shingle repair for the slope and foam roofing for the flat section. One visit can cover the joint between them.",
      },
      {
        q: "Is south Tempe the same as the ASU area?",
        a: "No. South Tempe is much more tile. The neighborhoods nearest the university are older shingle and flat roofs. We inspect the roof you have.",
      },
    ],
    breadcrumbs: [areasCrumb, { label: "Tempe" }],
    linkGroups: [
      {
        title: "Services that fit Tempe",
        links: [services.shingleRepair, services.foam, services.foamRepair, services.tile, services.insurance],
      },
      {
        title: "Nearby",
        links: [
          cityLink("phoenix", "Phoenix", "North of Tempe, our home base."),
          cityLink("mesa", "Mesa", "East of Tempe, older in the center and newer toward Red Mountain."),
          cityLink("chandler", "Chandler", "South of Tempe, Sun Lakes tile and commercial flat roofs."),
          services.areas,
        ],
      },
    ],
  },
  {
    path: serviceAreaPath("queen-creek"),
    title: "Queen Creek Roofing | XRP Roofing",
    description:
      "Queen Creek roofing for newer HOA tile, dusty edges, and outbuildings. XRP Roofing has no Queen Creek office. Call for a free estimate.",
    h1: "Queen Creek Roofing for New Tile and Open Lots",
    eyebrow: "Queen Creek",
    image: "/images/xrp-roofing/project-gallery-8.jpg",
    imageAlt: "Arizona residential roofing project by XRP Roofing",
    serviceName: "Roofing",
    cityName: "Queen Creek",
    intro: [
      "Queen Creek is the southeast edge of the valley, split across Maricopa and Pinal counties, with farms still sitting next to master-planned tile roofs. Encanterra and the newer communities wrote concrete tile into the covenants. Along Rittenhouse, Ellsworth, and the remaining agricultural edges, lots are bigger, wind has a clear path, and dust settles in the valleys after every outflow.",
      noOffice,
    ],
    sections: [
      {
        heading: "New tile still needs an inspection",
        paragraphs: [
          "A young Queen Creek roof is not immune to the first hard monsoon. Ridges lift, a handful of tiles crack, and builder flashings at the walls take their first real rain. That is often a [tile repair](/tile-roofing/repair), not a re-lay. Re-lays show up later, when the underlayment has had enough summers. We do not tell a five-year-old tile roof that it needs new underlayment without photos that say so.",
          "HOA rules here are specific about tile. We work within the material the community already requires. We do not promise a design-review approval.",
        ],
      },
      {
        heading: "Farms, dust, and outbuildings",
        paragraphs: [
          "Properties on the agricultural edge pick up dust that holds moisture against tile and against whatever roof is on the barn, casita, or detached garage. Those extra buildings are often low-slope. [Spray foam](/spray-foam-roofing) is a conversation for them only after we see the deck. The house tile and the outbuilding are separate scopes on the same visit if you want them looked at together.",
          "If a storm claim is the reason for the call, we photograph the damage and can stand on the roof with you and the adjuster. We do not negotiate the claim.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you have a Queen Creek location?",
        a: "No. We drive out from Phoenix. The town does not have an XRP shop.",
      },
      {
        q: "Our community requires tile. Can you change it to shingles?",
        a: "Only if your written rules allow it. Most Queen Creek HOAs do not. We will not bid a material the covenants forbid and hope the board looks away.",
      },
      {
        q: "Can you look at the house and the detached building?",
        a: "Yes. Say so when you book. They may be different roof systems, and the estimate will keep them separate.",
      },
    ],
    breadcrumbs: [areasCrumb, { label: "Queen Creek" }],
    linkGroups: [
      {
        title: "Services that fit Queen Creek",
        links: [services.tile, services.tileRepair, services.underlayment, services.foam, services.insurance],
      },
      {
        title: "Nearby",
        links: [
          cityLink("gilbert", "Gilbert", "Northwest of Queen Creek, similar HOA tile on older tracts."),
          cityLink("apache-junction", "Apache Junction", "Northeast, windier and less uniformly tile."),
          cityLink("chandler", "Chandler", "West, mixing Sun Lakes tile and commercial roofs."),
          services.areas,
        ],
      },
    ],
  },
  {
    path: serviceAreaPath("glendale"),
    title: "Glendale Roofing Contractor | XRP",
    description:
      "Glendale roofing for historic central homes, Arrowhead tile, and Westgate commercial roofs. No Glendale office. Call XRP Roofing.",
    h1: "Glendale Roofing from Downtown to Arrowhead",
    eyebrow: "Glendale",
    image: "/images/xrp-roofing/2024-06-28.jpg",
    imageAlt: "Low-slope commercial roof work by XRP Roofing in Arizona",
    serviceName: "Roofing",
    cityName: "Glendale",
    intro: [
      "Glendale splits at about Bell Road in roofing terms. Central Glendale, Catlin Court, and the downtown antique district are older houses: shingles, the occasional flat roof, and repairs that have stacked up. Arrowhead Ranch and the northern master plans are concrete tile. The Westgate and sports corridor adds commercial low-slope roofs that do not belong in the same estimate as a bungalow.",
      noOffice,
    ],
    sections: [
      {
        heading: "Older central roofs, western sun",
        paragraphs: [
          "West-facing slopes in central Glendale take the afternoon sun without much relief. Shingles there granule-off and crack before the shaded slope does. We do not average the two slopes into one verdict. A [shingle repair](/shingle-roofing/repair) might be honest on the north side and a bad idea on the west side of the same house. The photos show that.",
          "Historic houses also hide odd joints, porch roofs, and old flashings. Access from narrow lots is part of the inspection, not a surprise on the morning the materials arrive.",
        ],
      },
      {
        heading: "Arrowhead tile and the stadium corridor",
        paragraphs: [
          "Arrowhead Ranch is HOA tile, closer in spirit to Peoria's newer north end than to downtown Glendale. Underlayment and ridge work are the usual findings. Westgate-area commercial roofs are flat, and [foam repair or recoating](/spray-foam-roofing) is the conversation when the inspection supports it. Monsoon claims, if you are filing one, stay on the [insurance page](/roof-insurance-claim) rules: we document, we do not adjust the claim, and we do not touch the deductible.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you work in both downtown Glendale and Arrowhead?",
        a: "Yes. They are different roofs, and we inspect them differently. We do not have a Glendale branch.",
      },
      {
        q: "Can you repair a historic house roof without replacing all of it?",
        a: "When the damage is local, yes. When the deck or the field is gone, we will say replacement. The age of the house is not, by itself, a reason to tear it off.",
      },
      {
        q: "Do you roof commercial buildings near Westgate?",
        a: "Yes, low-slope commercial roofs, including foam and coatings when they fit. The visit is still by Jonathan, from Phoenix.",
      },
    ],
    breadcrumbs: [areasCrumb, { label: "Glendale" }],
    linkGroups: [
      {
        title: "Services that fit Glendale",
        links: [services.shingle, services.tile, services.foam, services.insurance],
      },
      {
        title: "Nearby",
        links: [
          cityLink("peoria", "Peoria", "North of Glendale, Old Town houses and Lake Pleasant tile."),
          cityLink("phoenix", "Phoenix", "East and south, where we are based."),
          cityLink("buckeye", "Buckeye", "Farther west, newer and more exposed."),
          services.areas,
        ],
      },
    ],
  },
  {
    path: serviceAreaPath("peoria"),
    title: "Peoria Roofing Contractor | XRP Roofing",
    description:
      "Peoria roofing for Old Town houses and north Peoria HOA tile near Lake Pleasant. No Peoria office. Call XRP Roofing for an estimate.",
    h1: "Peoria Roofing from Old Town to Lake Pleasant",
    eyebrow: "Peoria",
    image: "/images/xrp-roofing/project-gallery-11.jpg",
    imageAlt: "Residential roofing project photo from XRP Roofing",
    serviceName: "Roofing",
    cityName: "Peoria",
    intro: [
      "Peoria runs from older houses along Grand Avenue in Old Town up to Vistancia and the Lake Pleasant communities, where the HOA tile is newer and the lots open toward the desert. Those are different roofs. Old Town fails like other northwest-valley houses from the middle of the last century. North Peoria fails like other new tile: details, underlayment age, and wind on the edges.",
      noOffice + " Lake Pleasant's proximity does not mean we claim a lakeside yard.",
    ],
    sections: [
      {
        heading: "Old Town along Grand Avenue",
        paragraphs: [
          "Shingles, a few flat additions, and roofs that have already been repaired once are the Old Town pattern. Western sun and monsoon wind lift tabs. A [shingle inspection](/shingle-roofing/inspection) before the next storm season is a reasonable ask on these houses. We will say if the roof is fine.",
        ],
      },
      {
        heading: "Vistancia, Lake Pleasant, and bigger temperature swings",
        paragraphs: [
          "North Peoria sits a step off the hottest part of the valley floor, which means the day-to-night drop can be sharper. Tile and flashings move. HOA rules in Vistancia and the surrounding plans expect the original tile look. A [re-lay](/tile-roofing/underlayment-replacement) is how that look stays when the sheet under the tile is the part that failed. Wind across the open desert edge also packs debris into valleys faster than in a walled Glendale subdivision.",
          "We document storm damage if you are working with an insurer. Approval is their decision. We do not waive the deductible.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you have an office near Lake Pleasant?",
        a: "No. We drive up from Phoenix. There is no XRP address in Peoria or at the lake.",
      },
      {
        q: "Is Old Town Peoria mostly tile?",
        a: "No. Old Town is the older housing, often shingles. Tile dominates the newer north end. Tell us which part of Peoria you are in.",
      },
      {
        q: "Our HOA in Vistancia requires tile. Can you re-lay it?",
        a: "If the tiles are sound, that is what an underlayment replacement is for. If they are not, we recommend replacement and explain it with photos.",
      },
    ],
    breadcrumbs: [areasCrumb, { label: "Peoria" }],
    linkGroups: [
      {
        title: "Services that fit Peoria",
        links: [services.shingle, services.tile, services.underlayment, services.insurance],
      },
      {
        title: "Nearby",
        links: [
          cityLink("glendale", "Glendale", "South of Peoria, historic roofs and Arrowhead tile."),
          cityLink("buckeye", "Buckeye", "Southwest, farther into the open west valley."),
          services.areas,
        ],
      },
    ],
  },
  {
    path: serviceAreaPath("buckeye"),
    title: "Buckeye Roofing Contractor | XRP",
    description:
      "Buckeye roofing for Verrado tile and newer west-valley homes. XRP Roofing travels from Phoenix. No Buckeye office. Call for an estimate.",
    h1: "Buckeye Roofing on the Far West Valley",
    eyebrow: "Buckeye",
    image: "/images/xrp-roofing/project-gallery-4.jpg",
    imageAlt: "Arizona roof project photo from XRP Roofing",
    serviceName: "Roofing",
    cityName: "Buckeye",
    intro: [
      "Buckeye is the far west valley: Verrado's planned streets and specific tile, Tartesso and Sundance production houses, and open desert between them. Roofs here are younger than the roofs in central Phoenix, and they still take the hardest afternoon sun and wind with very little neighboring structure to block either one. Dust from the remaining fields settles on everything.",
      noOffice + " The drive is real. We still do not keep a Buckeye shop to shorten it.",
    ],
    sections: [
      {
        heading: "Young roofs, first real monsoon",
        paragraphs: [
          "A newer Buckeye roof often meets its first serious outflow before anyone has been in the attic. Lifted ridge tiles, a flashing the builder left short, and debris in the valleys are the findings, not a 30-year underlayment failure. Those are [tile repairs](/tile-roofing/repair). We will not tell a new Verrado roof it needs a full re-lay because a ridge moved.",
          "Where the community specified tile, we stay with tile unless the written rules allow something else. Verrado's look is part of the neighborhood. We do not promise the association will accept a different profile.",
        ],
      },
      {
        heading: "Open lots and west-valley sun",
        paragraphs: [
          "Edges of subdivisions face open desert. Eaves and rakes on those lots take more wind than an interior lot. Shingle roofs, where they exist on production houses that were not required to use tile, age fast on the west slope. [Shingle replacement](/shingle-roofing/replacement) comes up when that slope is cracked across the field, not when one tab is missing.",
          "If the storm started an insurance conversation, we inspect, photograph, and meet the adjuster with you. We do not pay the deductible and we do not guarantee the carrier's decision. Flat outbuildings, if you have them, can be looked at for [foam](/spray-foam-roofing) on the same trip.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is the drive from Phoenix a problem?",
        a: "We serve Buckeye from Phoenix. There is no local office. Say where the property is when you request the estimate so we schedule the trip properly.",
      },
      {
        q: "Our Verrado roof is only a few years old and already leaked. Is that a full replacement?",
        a: "Usually no. We look for the flashing, ridge, or valley that the storm or the original detail opened. Replacement is for roofs that are used up, not for a new house with one opening.",
      },
      {
        q: "Do you waive the deductible on storm repairs out here?",
        a: "No. We do not pay, waive, rebate, or credit a deductible in Buckeye or anywhere else.",
      },
    ],
    breadcrumbs: [areasCrumb, { label: "Buckeye" }],
    linkGroups: [
      {
        title: "Services that fit Buckeye",
        links: [services.tileRepair, services.tile, services.shingleReplace, services.foam, services.insurance],
      },
      {
        title: "Nearby",
        links: [
          cityLink("glendale", "Glendale", "East of Buckeye, older in the center."),
          cityLink("peoria", "Peoria", "Northeast, Old Town and Lake Pleasant tile."),
          services.areas,
        ],
      },
    ],
  },
];
