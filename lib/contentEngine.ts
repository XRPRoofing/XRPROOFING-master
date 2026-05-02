import type { City } from "./cities";
import type { Service } from "./services";

export function hashToIndex(seed: string, max: number): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash) % max;
}

export function pickVariant<T>(seed: string, variants: T[]): T {
  return variants[hashToIndex(seed, variants.length)];
}

// ─── Per-service rich content ─────────────────────────────────────────────────

interface ServiceRichContent {
  symptoms: string[];
  materials: string[];
  timeline: string;
  costFactors: string[];
  faqSets: Array<Array<{ q: string; a: string }>>;
}

const serviceRichContent: Record<string, ServiceRichContent> = {
  "roof-repair": {
    symptoms: [
      "Water stains on ceilings or walls after rain events",
      "Visible cracked, curled, or missing shingles or displaced tile",
      "Granules accumulating in gutters (sign of advanced shingle wear)",
      "Soft or spongy spots when walking on the roof — indicating decking damage",
      "Daylight visible through rafters when inspecting from the attic",
      "Flashing separating from chimneys, vents, or skylights",
      "Algae or moss growth that can trap moisture and accelerate decay",
    ],
    materials: [
      "OC Duration or GAF Timberline shingles (Class A, high-temp rated) for shingle repairs",
      "Boral or Eagle concrete tile for color-matched tile repairs",
      "Ice & Water Shield underlayment in critical repair zones",
      "Galvanized or stainless step and counter flashing",
      "Geocel 2315 or Karnak sealants rated for 250°F+ surface temperatures",
      "Proper-sized roofing nails with ring shanks for wind resistance",
    ],
    timeline: "Minor repairs (1–3 flashing points, a few tiles or shingles) are typically completed the same day or within 24–48 hours. Mid-size repairs involving 50–200 sq ft take one to two days. Large repair sections may take two to four days depending on material availability and access.",
    costFactors: [
      "Roof pitch and access difficulty (steeper = more labor and safety equipment)",
      "Number of penetrations (chimneys, skylights, vents) requiring flashing work",
      "Whether decking or structural components need replacement",
      "Tile or shingle matching difficulty for older or discontinued products",
      "Whether interior damage (drywall, insulation) is included in scope",
      "Emergency or after-hours response premium",
    ],
    faqSets: [
      [
        { q: "Can you match my existing tile or shingles for a repair?", a: "In most cases, yes. We maintain relationships with major Arizona tile and shingle distributors and can usually source matching materials. For discontinued products, we can recommend close color and profile matches or source salvaged tile. We always bring a sample for your approval before proceeding." },
        { q: "How long will a roof repair last in Arizona?", a: "A quality repair performed with the right materials and techniques should last 10–20 years or the remaining life of the surrounding roofing system. Repairs that fail prematurely are usually the result of treating symptoms rather than root causes — we always identify and fix the actual failure point, not just the visible damage." },
        { q: "Should I repair or replace my roof?", a: "If your roof is under 15 years old and damage is isolated, repair is usually the right call. If your roof is over 20 years old, has widespread granule loss, or has had multiple leaks in recent years, replacement may be more cost-effective long-term. Our inspection report will give you an honest assessment of both options." },
        { q: "Do you repair flat roofs as well as pitched roofs?", a: "Yes — we repair all roof types including TPO, modified bitumen, built-up roofing, tile, shingle, and metal. Each system requires different materials and techniques, and our crews are experienced with all of them." },
      ],
      [
        { q: "Will my homeowner's insurance cover roof repairs in Arizona?", a: "Insurance covers sudden and accidental damage (storm, wind, hail, falling objects) but not gradual deterioration or lack of maintenance. After a monsoon or wind event, call us before your insurance company — our documented inspection report is far more useful during claim negotiation than a phone assessment." },
        { q: "How do I know if a roofer found the actual leak source?", a: "Legitimate roof contractors test their repair by using water simulation or waiting for rain — and provide you with photos of both the problem area and the completed repair. Be skeptical of any contractor who won't show you exactly what they found and why they repaired it. We photograph every step." },
        { q: "Is it safe to walk on my roof?", a: "Generally, we don't recommend homeowners walk on their roofs. Tile can crack under improper weight distribution, shingles can be damaged by foot traffic, and the risk of falls is significant. Our inspectors are trained to access roofs safely and carry proper safety equipment." },
        { q: "Can a roof repair be done during monsoon season?", a: "Yes — and active leak situations during monsoon season are exactly when we respond fastest. We waterproof emergency repair areas first and complete permanent repairs once conditions allow. We never leave a roof open to additional rainfall overnight." },
      ],
    ],
  },

  "roof-replacement": {
    symptoms: [
      "Roof is 20+ years old with no recent professional inspection",
      "Multiple active leaks or repeat leaks in the same areas",
      "Widespread granule loss leaving shingles bald and brittle",
      "Sagging roof sections indicating structural or decking failure",
      "Underlayment failure visible during inspection (tile roofs over 25 years old)",
      "Energy bills increasing — failing roofs allow significant heat transfer into attics",
      "Storm adjusters or inspectors recommend replacement rather than repair",
    ],
    materials: [
      "GAF Timberline HDZ or OC Duration architectural shingles — 50-year rated, algae-resistant",
      "Boral TileSeal or Eagle Capistrano concrete tile for tile replacement",
      "TAMKO Heritage or CertainTeed Landmark Pro as cost-effective shingle alternatives",
      "DeckArmor or RoofAquaGuard synthetic underlayment — breathable and heat-stable",
      "Continuous ridge vents and soffit baffles for full attic ventilation system",
      "Grace Ice & Water Shield self-adhering membrane in all valleys and eaves",
    ],
    timeline: "A standard 2,000–2,500 sq ft residential shingle replacement takes two to three days. Tile replacement takes four to six days for the same size. Larger homes or those with multiple stories, complex pitches, or multiple penetrations take longer. We provide a detailed project schedule in the written estimate.",
    costFactors: [
      "Total roof square footage and pitch (steeper roofs cost more per square)",
      "Material selection — tile costs 2–3× more than shingles but lasts significantly longer",
      "Number of layers being removed (tear-off cost increases with each layer)",
      "Decking replacement — damaged OSB or plywood adds cost but is structurally critical",
      "Ventilation upgrades (often required by code when replacing the full system)",
      "HOA material requirements and architectural review processing",
    ],
    faqSets: [
      [
        { q: "How long does a roof replacement take from start to finish?", a: "Typically 2–5 business days for residential replacement once materials arrive. Tile projects run longer than shingle. The full process from initial estimate to project completion is usually 2–4 weeks depending on material lead times and scheduling. Emergency situations can be expedited." },
        { q: "What happens to my old roof materials?", a: "We handle full tear-off and disposal. Shingles and old underlayment are loaded into roll-off containers and taken to approved disposal facilities. In some cases, reclaimed tile can be salvaged for repair inventory. Clean-up includes magnetic sweeps for nails in all surrounding areas." },
        { q: "Do I need to be home during the replacement?", a: "Not necessarily. Many homeowners are at work during their replacement. We do recommend being available by phone in case decisions need to be made, particularly if hidden decking damage is found during tear-off. We always communicate scope changes before proceeding." },
        { q: "Will a new roof lower my homeowner's insurance premiums?", a: "Often, yes — particularly if you're replacing an older roof with a Class 4 impact-resistant shingle or a Class A fire-rated tile system. Many Arizona insurers offer credits for newer roofs. Ask your insurance agent about premium changes before finalizing your material selection." },
      ],
      [
        { q: "What warranty comes with a roof replacement?", a: "Material warranties depend on the manufacturer and product tier — ranging from 25-year standard to lifetime transferable warranties on premium shingles. Tile typically carries 50-year warranties. Our workmanship warranty covers installation-related issues separate from material defects. We provide all warranty documentation in writing at project completion." },
        { q: "Can I stay in my home during a roof replacement?", a: "Yes — most homeowners remain in their home throughout the replacement. Expect noise during working hours (typically 6am–4pm in summer). We take precautions to protect windows, HVAC equipment, and landscaping. Dust and minor debris entry is possible; covering attic-accessible furniture is recommended." },
        { q: "Is the cheapest bid on a roof replacement always the worst choice?", a: "Not always, but low bids often reflect reduced material quality, unlicensed labor, inadequate ventilation, or omitted line items (like decking replacement allowances). Get itemized estimates and compare material specifications — not just total price. The roof that fails in 8 years costs far more than one done right." },
        { q: "What is the ROI on a roof replacement in Arizona?", a: "According to national remodeling data, roof replacement returns 60–70% of cost in home value. In Arizona's competitive real estate market, a new roof can be a decisive buyer influence factor — particularly for buyers using FHA or VA financing, which have minimum roof condition standards." },
      ],
    ],
  },

  "new-roof-installation": {
    symptoms: [
      "New construction requiring complete roofing system from bare framing",
      "Home addition or room addition requiring new roof section",
      "Structural rebuild following fire, flood, or major storm loss",
      "Converting a flat roof section to pitched — or vice versa",
      "Owner-builder projects requiring permit-compliant roofing installation",
    ],
    materials: [
      "Structural ridge beam and rafter system coordination (framing verification before installation)",
      "DeckArmor or RoofAquaGuard synthetic underlayment as base layer",
      "Boral TileSeal or Eagle concrete/clay tile for high-end residential",
      "GAF Timberline HDZ or Owens Corning Duration for architectural shingle installations",
      "24-gauge Galvalume standing seam metal for energy-forward or modern designs",
      "Continuous ridge vent systems with matching soffit intake for balanced ventilation",
      "All required flashings: step, counter, valley, chimney, and pipe boot",
    ],
    timeline: "New roof installation on new construction typically follows the framing and rough-in schedule. We work with your GC's timeline. A standalone residential installation (2,000–3,000 sq ft) takes three to five days. We coordinate inspections with the municipality to ensure the roof passes all required stages.",
    costFactors: [
      "Design complexity — hips, valleys, dormers, and multiple pitches increase labor",
      "Material selection — tile, shingle, metal, or flat roofing carry different cost profiles",
      "Permit fees and inspection coordination with the local municipality",
      "Coordination requirements with other trades (HVAC penetrations, solar prep, skylights)",
      "Decking specification (5/8\" CDX or OSB — structural requirements vary by municipality)",
      "HOA or architectural review requirements for material and color approval",
    ],
    faqSets: [
      [
        { q: "Do you install roofs on new construction projects?", a: "Yes — we work directly with homeowners building custom homes, production builders, and general contractors. We can provide preliminary pricing from plans and final proposals from framing. We coordinate all required roofing inspections with the local building department." },
        { q: "What roofing material is best for a new home in Arizona?", a: "Concrete or clay tile is Arizona's most popular choice for good reason — it lasts 40–50+ years, handles heat well, and is HOA-approved in most communities. Architectural shingles are cost-effective and perform well with the right product selection. Metal is growing in popularity for energy efficiency and contemporary aesthetics. We'll walk you through the tradeoffs for your specific project." },
        { q: "How do I plan for solar panel installation with a new roof?", a: "Tell us upfront if solar is in your plans. We can install solar-ready conduit pathways, reinforce racking zones, and select roofing materials (metal, concrete tile) that are compatible with most solar mounting systems without voiding roofing warranties. Retrofitting solar after a standard installation can create warranty complications." },
        { q: "What permits are required for a new roof installation in Arizona?", a: "All new residential and commercial roofing requires a permit in virtually every Arizona municipality. We pull all required permits, manage the inspection schedule, and ensure the completed roof passes all required inspections. Never hire a contractor who proposes skipping the permit process." },
      ],
    ],
  },

  "tile-roofing": {
    symptoms: [
      "Cracked, chipped, or broken tile visible from the ground or during inspection",
      "Leaks in an older tile roof — often underlayment failure, not tile damage",
      "Tile slipping out of position due to failed mortar or fastener corrosion",
      "Ridge cap mortar cracking or separating after freeze-thaw or monsoon events",
      "Moss or algae growth between tiles trapping moisture against underlayment",
      "A tile roof over 25 years old that has never had an underlayment inspection",
    ],
    materials: [
      "Boral TileSeal — 50-year concrete tile, available in S-tile, flat, and barrel profiles",
      "Eagle Roofing Capistrano — classic California barrel tile for traditional aesthetics",
      "US Tile Espana or Montecito — high-end clay tile for premium applications",
      "Polyglass Polystick MTS or GAF StormGuard underlayment — heat-stable to 265°F",
      "Polyfoam or mortar set ridge cap system with factory-matched color",
      "Stainless steel or hot-dipped galvanized tile battens for coastal or high-humidity zones",
      "Eave closure and bird stop components for complete system integrity",
    ],
    timeline: "Tile repair (5–25 tiles) typically takes one day. Ridge cap remortar work takes one to two days depending on linear footage. Full tile removal and underlayment replacement on a 2,000 sq ft roof takes four to six days — tile is carefully removed, inspected, and reinstalled over new underlayment. New tile installation on comparable square footage takes three to five days.",
    costFactors: [
      "Tile profile and manufacturer — barrel/S-tile costs more than flat tile; clay more than concrete",
      "Whether underlayment replacement is needed (most common cost surprise in older tile roofs)",
      "Extent of broken or unmatched tile that requires new material purchase",
      "Ridge cap system — mortar set vs. foam set, and linear footage of ridges and hips",
      "Deck inspection and any wood replacement required",
      "Pitch and access — two-story or steep-pitch tile work requires additional safety equipment",
    ],
    faqSets: [
      [
        { q: "How long does tile roofing last in Arizona?", a: "The tile itself typically lasts 40–60+ years and can outlast the building it covers. The weak link in most Arizona tile roofs is the underlayment, which typically lasts 20–30 years. When your tile roof leaks, the tile is often intact — the underlayment beneath it has failed. This is why age-based underlayment inspections are so important." },
        { q: "Can broken tiles be replaced without replacing the whole roof?", a: "Usually yes — if the surrounding tile profile and color can be reasonably matched. We maintain tile samples and distributor relationships across all major Arizona tile lines. For discontinued tiles, we often find salvaged material. Some color fade over time may make perfect matching difficult on very old roofs." },
        { q: "Is a tile roof worth the additional cost over shingles?", a: "In Arizona, tile is often the better long-term value. A quality tile roof lasts 40–60 years vs. 20–25 for shingles in Arizona heat. Tile has better fire resistance, higher thermal mass that keeps attics cooler, and stronger curb appeal. Many HOAs also require tile. The higher upfront cost is typically offset by fewer replacements over a property's life." },
        { q: "Do tile roofs require special maintenance?", a: "Tile roofs need less frequent maintenance than shingles but are not maintenance-free. Annual debris clearing from valleys and gutters is important — debris accumulation dams drainage and forces water under tiles. Ridge cap mortar should be inspected every 10 years and repointed as needed. Underlayment should be professionally inspected on any tile roof over 20 years old." },
      ],
    ],
  },

  "shingle-roofing": {
    symptoms: [
      "Shingles curling at edges or cupping (concave center) indicating heat/moisture damage",
      "Bald patches where granules have washed away, exposing asphalt substrate",
      "Shingles cracking, splitting, or becoming brittle from UV degradation",
      "Multiple granule deposits in gutters following rain",
      "Visible shingle blow-offs or displacement after high-wind events",
      "Dark streaking from algae growth (Gloeocapsa magma) on north-facing slopes",
      "Roof is approaching or past 20 years — near end of service life in Arizona",
    ],
    materials: [
      "GAF Timberline HDZ — Owens Corning's top-rated architectural shingle with WindProven warranty",
      "Owens Corning Duration Flex — polymer-modified shingle with enhanced impact resistance",
      "CertainTeed Landmark Pro — good aesthetic options and strong temperature performance",
      "TAMKO Heritage — excellent value-tier architectural shingle with AZ-appropriate specs",
      "Synthetic underlayment (DeckArmor or RoofAquaGuard) — superior to felt in Arizona heat",
      "Hip and ridge cap matching manufacturer (required for full system warranty)",
      "Galvanized ring-shank nails — not staples — for wind resistance compliance",
    ],
    timeline: "A standard 2,000 sq ft shingle tear-off and replacement takes two to three days. Larger homes (3,000–4,000 sq ft) take three to four days. Complex rooflines with multiple hips, valleys, and penetrations add time. Material delivery typically occurs the day before installation begins.",
    costFactors: [
      "Shingle product tier — standard 3-tab vs. architectural vs. premium designer shingles",
      "Roof pitch and complexity — steep or complex roofs take more labor hours",
      "Number of layers being torn off (double layer tear-off costs significantly more)",
      "Decking replacement (damaged OSB/plywood discovered during tear-off)",
      "Number and complexity of penetrations (skylights, chimneys, HVAC curbs, vent pipes)",
      "Ventilation upgrades required for code compliance or system warranty",
    ],
    faqSets: [
      [
        { q: "How long do asphalt shingles last in Phoenix, AZ?", a: "Standard architectural shingles rated for 30 years nationally typically last 20–25 years in Phoenix. High-temperature rated products with SBS-modified asphalt can extend that to 25–30 years when properly installed with adequate attic ventilation. Standard 3-tab shingles should be avoided entirely in Arizona — they don't perform well in extreme heat." },
        { q: "What's the difference between architectural and standard shingles?", a: "Architectural (laminated) shingles have two asphalt layers bonded together for a dimensional appearance and significantly better durability. Standard 3-tab shingles are single-layer, flatter, and considerably less durable in Arizona's heat. The price difference is relatively small; the performance difference is substantial. We only install architectural or better for Arizona applications." },
        { q: "Do I need to upgrade my attic ventilation when replacing shingles?", a: "Frequently, yes — and often it's required for the manufacturer's warranty to be valid. Inadequate attic ventilation is the single biggest cause of premature shingle failure in Arizona. Heat trapped in an under-ventilated attic can push rooftop temperatures to 180°F+, dramatically accelerating shingle degradation. We assess your current ventilation on every replacement estimate." },
        { q: "What color shingle should I choose for an Arizona home?", a: "Lighter shingles (weathered wood, light gray, tan) reflect more solar heat and are the most popular choice in Arizona. Darker shingles absorb significantly more heat — this can matter for both shingle longevity and cooling costs. That said, HOA requirements often dictate color selection in managed communities. We can provide color samples and HOA compatibility guidance." },
      ],
    ],
  },

  "metal-roofing": {
    symptoms: [
      "Existing metal roof showing rust, delamination, or coating failure",
      "Fastener backs pulling through metal panels (common in older screw-down systems)",
      "Oil-canning (visible waviness) in flat panel areas indicating improper installation",
      "Standing water pooling in low areas of a metal flat roof",
      "Existing shingle or tile roof failing and homeowner seeking longer-lasting solution",
      "Commercial or residential project requiring maximum lifespan and energy efficiency",
    ],
    materials: [
      "24-gauge Galvalume standing seam — industry standard for residential and commercial",
      "Kynar 500 PVDF factory-painted finish — UV-stable and warranted for 40 years",
      "Snap-lock vs. mechanically seamed panels — mechanically seamed for high-wind zones",
      "MBCI, McElroy Metal, or AEP Span panel systems — all stocked by Arizona distributors",
      "Foam closure strips and proper butyl tape at all seams",
      "R-panel or PBR-panel for agricultural and commercial low-slope applications",
      "Concealed fastener systems — eliminates the #1 long-term leak source in metal roofing",
    ],
    timeline: "Residential standing seam installation (2,000 sq ft) typically takes three to five days. The panels are roll-formed to exact length, minimizing end laps and potential leak points. Larger commercial metal projects are scoped and scheduled individually. Panel lead time from the mill is typically 2–3 weeks for custom colors.",
    costFactors: [
      "Panel profile — standing seam costs significantly more than exposed-fastener corrugated",
      "Gauge — 24-gauge standard; 22-gauge for high-wind or commercial applications adds cost",
      "Panel finish — standard Galvalume vs. Kynar 500 PVDF painted finish",
      "Substrate — direct deck application vs. over-purlin framing on commercial",
      "Insulation requirements — commercial metal usually includes spray foam or rigid insulation",
      "Flashings and trim work — complex rooflines with hips, valleys, and many penetrations increase labor",
    ],
    faqSets: [
      [
        { q: "Is metal roofing loud in the rain or hail in Arizona?", a: "On a properly installed residential metal roof with solid sheathing beneath, noise is comparable to a tile or shingle roof. The key is solid decking — not open purlins. With insulation and drywall, interior sound is negligible. Many homeowners actually find rain on a metal roof pleasant." },
        { q: "Will metal roofing make my home hotter in Arizona?", a: "Actually the opposite. Metal roofing with a proper cool-roof Kynar finish reflects significantly more solar radiation than asphalt shingles. Many metal roofs qualify for ENERGY STAR ratings. Combined with a proper attic ventilation system, metal roofing can meaningfully reduce cooling costs." },
        { q: "How long does metal roofing last?", a: "Properly installed 24-gauge Galvalume standing seam with a Kynar finish carries a 40-year paint warranty and the system itself lasts 50–70 years with minimal maintenance. Metal outlasts every other common roofing material in Arizona and is frequently the final roof a homeowner ever needs." },
        { q: "Can metal roofing be installed over my existing roof?", a: "In many cases, yes — metal can be installed over existing shingles (typically limited to one layer) using a batten and counter-batten system. This eliminates tear-off costs and adds a thermal break. We assess existing conditions to determine if overlay is appropriate or if tear-off is the better long-term decision." },
      ],
    ],
  },

  "tpo-roofing": {
    symptoms: [
      "Visible blistering, cracking, or splitting of existing TPO membrane",
      "Seam separations — the most common TPO failure point",
      "Ponding water areas indicating inadequate slope or blocked drainage",
      "Membrane pulling away from walls, curbs, or penetrations",
      "Interior ceiling stains in commercial or industrial buildings after rain",
      "Existing flat roof approaching 20+ years and showing surface deterioration",
    ],
    materials: [
      "Carlisle SynTec 60-mil TPO — industry standard, 20-year warranted system",
      "Firestone UltraPly TPO 60-mil — excellent heat-weld seam performance",
      "Johns Manville TPO 60-mil with energy-efficient white reflective surface",
      "ISO insulation board (polyisocyanurate) for required R-value compliance",
      "Cover board (DensDeck or HD polyiso) to protect insulation from installation damage",
      "Perimeter edge metal and coping systems for proper termination",
      "Roof drains, overflow scuppers, and walkway protection pads",
    ],
    timeline: "TPO installation is typically completed at a rate of 2,000–3,000 sq ft per day for experienced crews. A 10,000 sq ft commercial roof takes approximately four to five days for installation, plus time for insulation, edge metal, and penetration work. Tear-off of existing systems adds one to two days.",
    costFactors: [
      "Membrane thickness — 45-mil, 60-mil, and 80-mil are standard tiers; 60-mil recommended minimum in Arizona",
      "Insulation R-value requirements — Arizona commercial code requires minimum R-25",
      "Attachment method — mechanically attached vs. fully adhered (adhered costs more but performs better)",
      "Tear-off of existing membrane and insulation",
      "Number and complexity of penetrations (HVAC curbs, pipes, drains, skylights)",
      "Edge metal and coping system replacement",
    ],
    faqSets: [
      [
        { q: "How long does TPO roofing last in Arizona's heat?", a: "Quality 60-mil TPO with proper installation and annual maintenance typically lasts 20–25 years in Arizona. The white reflective surface that makes TPO energy-efficient also helps it resist UV degradation better than darker membrane systems. Heat-welded seams are the most durable aspect of the system." },
        { q: "What's the difference between TPO and EPDM roofing?", a: "TPO is a white thermoplastic membrane heat-welded at seams — it's highly reflective and energy-efficient, and seams are chemically bonded (very strong). EPDM is a black rubber membrane adhered with tape or adhesive at seams — seams are less durable but the material itself is flexible and UV-resistant. TPO has become dominant in Arizona's commercial market due to its energy performance." },
        { q: "Can TPO be repaired instead of replaced?", a: "Yes — localized seam separations, punctures, and membrane splits can be repaired using matching TPO patch material heat-welded in place. If the membrane is still adhered firmly to the substrate across most of the roof, targeted repairs can extend life significantly. We provide a condition assessment to help you decide between repair and replacement." },
        { q: "Does a TPO roof require maintenance?", a: "Annual inspections and occasional seam inspections are recommended. Clear all drains and scuppers of debris before monsoon season. Inspect flashing terminations and penetration seals annually. TPO is lower-maintenance than built-up roofing or modified bitumen, but regular attention dramatically extends system life." },
      ],
    ],
  },

  "flat-roofing": {
    symptoms: [
      "Ponding water that doesn't drain within 48 hours of rainfall",
      "Visible surface bubbling or blistering across the membrane",
      "Cracks in built-up roofing (BUR) surface or alligatoring surface pattern",
      "Modified bitumen membrane splits or seam failures",
      "Active leaks following rain in commercial or residential flat roof areas",
      "Flashing failures at walls, curbs, parapets, or penetrations",
    ],
    materials: [
      "Modified bitumen — SBS (cold-applied or torch-applied) or APP membrane, 2-ply minimum",
      "TPO 60-mil membrane for energy-conscious commercial applications",
      "EPDM 60-mil rubber membrane for cost-effective commercial flat roofing",
      "Built-up roofing (BUR) with fiberglass reinforced plies and hot asphalt",
      "Polyisocyanurate insulation board for R-value compliance",
      "Pre-formed drain sumps and internal roof drains with overflow scuppers",
      "Sheet metal coping and base flashing with proper counter-flashing",
    ],
    timeline: "Modified bitumen replacement on residential flat sections (500–2,000 sq ft) typically takes one to two days. Commercial flat roof projects are sized individually — most 5,000–15,000 sq ft jobs take three to seven days. Tear-off adds one to two days to any project.",
    costFactors: [
      "System type — TPO, EPDM, BUR, and modified bitumen carry different material and labor costs",
      "Roof area and number of drains or scuppers",
      "Insulation requirements — commercial energy codes require minimum R-25 in Arizona",
      "Parapet height and flashing complexity",
      "Number of HVAC curbs, pipes, and penetrations requiring custom flashing",
      "Whether existing wet insulation requires removal and replacement",
    ],
    faqSets: [
      [
        { q: "What is the best flat roofing system for Arizona's climate?", a: "For commercial buildings, TPO 60-mil is the most popular choice — energy-efficient, durable, and weldable seams provide excellent leak resistance. For residential flat areas, modified bitumen (torch-applied) is proven and cost-effective. The 'best' system depends on budget, building use, and whether energy performance is a priority." },
        { q: "Why does my flat roof have standing water and what can I do about it?", a: "Standing water (ponding) on flat roofs results from inadequate slope, blocked drains, or structural deflection. Some ponding is nearly unavoidable on large flat roof sections, but water standing more than 48 hours accelerates membrane degradation significantly. We address ponding with additional drain installation, tapered insulation to create positive slope, or in some cases roof coating to seal the existing surface." },
        { q: "How much maintenance does a flat roof need in Arizona?", a: "Flat roofs in Arizona require biannual drain clearing (at minimum before and after monsoon season), annual seam inspections, and periodic surface inspections. The combination of UV exposure, thermal cycling, and intense monsoon rainfall creates specific stress points — drains and flashings — that should be checked regularly." },
        { q: "What is modified bitumen roofing?", a: "Modified bitumen is an asphalt-based membrane reinforced with polyester or fiberglass mat and modified with SBS (rubber-like) or APP (plastomeric) compounds for flexibility. It's applied in two or more plies, either torch-applied or cold-applied with adhesive. It's been a proven flat roofing system for 40+ years and is particularly effective for residential flat areas." },
      ],
    ],
  },

  "commercial-roofing": {
    symptoms: [
      "Interior ceiling stains or active leaks impacting business operations",
      "Aging commercial roof approaching end of expected service life",
      "Repeated repair costs that are approaching replacement cost over time",
      "Tenant complaints about leaks, temperature control, or odors from failing roofing",
      "Pre-purchase inspection revealing undisclosed roofing deficiencies",
      "Energy audit identifying roofing system as a major heat gain source",
    ],
    materials: [
      "Carlisle, Firestone, or Johns Manville TPO 60-mil for commercial flat roofing",
      "EPDM for large, simple commercial applications requiring cost-effectiveness",
      "24-gauge standing seam metal for commercial pitched or low-slope applications",
      "Spray polyurethane foam (SPF) for irregular surfaces or existing built-up roofs",
      "Silicone or acrylic coating systems for restoration of existing commercial roofing",
      "Polyiso insulation with tapered sections for positive drainage design",
      "Mechanically attached or fully adhered systems based on wind uplift requirements",
    ],
    timeline: "Commercial roofing projects are scoped individually based on building size, system type, and operational constraints. Most commercial projects run one to three weeks. We schedule work around business operations, often completing sections in phases to minimize business disruption. Emergency tarping and weatherproofing is available for active leak situations.",
    costFactors: [
      "Building footprint — commercial roofing is priced per square (100 sq ft)",
      "System type and specification — TPO, metal, EPDM, SPF carry different cost profiles",
      "Access logistics — equipment access, working around HVAC units, safety requirements",
      "Insulation requirements and current thermal performance deficiencies",
      "Warranty tier — standard 10-year vs. manufacturer-backed 20-year NDL warranty",
      "Phased installation to minimize business disruption — may increase total cost",
    ],
    faqSets: [
      [
        { q: "How do you minimize business disruption during commercial roofing?", a: "We conduct all operations from the roof level where possible. Material lifts and equipment are staged in agreed areas to minimize parking and entry impacts. Noisy tear-off work can often be scheduled in early morning hours or weekends. We communicate daily on schedule and any access needs. Most businesses operate normally throughout the project." },
        { q: "Do you handle commercial roofing permits and inspections?", a: "Yes — we pull all required permits, manage the inspection schedule with the AHJ (authority having jurisdiction), and ensure the completed system meets all applicable codes including energy code R-value requirements. All documentation is provided to the building owner at project completion." },
        { q: "What commercial roofing warranty options do you offer?", a: "Standard workmanship warranties cover 2–5 years. Manufacturer-backed NDL (no-dollar-limit) warranties cover both material and labor for 10–20 years depending on manufacturer and membrane specification. NDL warranties require manufacturer-certified installers — we hold active certifications with Carlisle and Firestone." },
        { q: "Can you re-roof over our existing commercial roof without full tear-off?", a: "Often, yes — particularly if the existing insulation is dry and the deck is sound. A moisture scan (infrared or nuclear gauge) confirms whether the insulation can be recovered. A recover installation (overlay) eliminates tear-off costs and landfill fees, often saving 20–30% of total project cost while providing a full new warranted system." },
      ],
    ],
  },

  "roof-coatings": {
    symptoms: [
      "Existing flat or low-slope roof showing surface oxidation but structurally sound",
      "Commercial or residential TPO, BUR, or modified bitumen roof that is 10–15 years old",
      "Multiple small leaks that are candidates for surface-sealing rather than full replacement",
      "High cooling bills — existing dark-surface roof absorbing excessive solar heat",
      "Pre-sell condition improvement — adding 5–10 years of life before a property transaction",
      "Roof system past its primary warranty but with serviceable deck and insulation",
    ],
    materials: [
      "Dow Corning or GE Momentive silicone coating — best ponding water resistance, lasts 15+ years",
      "Henry 887 or Karnak 97 elastomeric acrylic — excellent UV reflection, easy application",
      "Tremco AlphaGuard BIO silicone — premium ENERGY STAR rated reflective coating",
      "Fiberglass reinforcing fabric for seam and flashing reinforcement before coating",
      "Primer coat specific to substrate (TPO, EPDM, modified bitumen, or BUR)",
      "Second topcoat application for full mil thickness compliance",
    ],
    timeline: "Surface preparation (cleaning, seam reinforcement, primer) takes one to two days. Coating application takes one to two additional days for most residential and light commercial flat areas. Full cure time is 24–72 hours depending on temperature and humidity. Avoid coating application if rain is expected within 24 hours.",
    costFactors: [
      "Roof area — coatings are priced per square (100 sq ft)",
      "Coating system selected — acrylic vs. silicone (silicone costs more but lasts longer)",
      "Extent of seam reinforcement required before coating",
      "Number of penetrations requiring base flashing repair before coating",
      "Surface preparation requirements — pressure washing, priming, repairs",
      "Application method — spray vs. squeegee for different surface geometries",
    ],
    faqSets: [
      [
        { q: "What is the difference between silicone and acrylic roof coatings?", a: "Silicone coating holds up in standing water without softening or degrading — making it superior for flat roofs where ponding is common. It's also the most UV-stable option. Acrylic coating is more cost-effective, excellent for sloped roofs, and reflective — but it degrades under extended ponding water. For truly flat commercial roofs in Arizona, silicone is the better choice." },
        { q: "How long does a roof coating last in Arizona's heat?", a: "Quality silicone coatings last 15–20 years in Arizona conditions. Acrylic coatings last 10–15 years on sloped applications. Longevity is heavily influenced by initial coat thickness — thin applications fail prematurely. We apply coatings to the manufacturer's required wet mil thickness and verify with a mil gauge during application." },
        { q: "Can a roof coating stop leaks?", a: "A coating can seal minor surface cracks and small penetrations in the membrane, but it is not a substitute for repairing active structural leaks. Our process always includes repairing identified leak points and reinforcing suspect seams before applying coating. A coating over an unrepaired leak will fail at that location." },
        { q: "Will a roof coating qualify for energy rebates in Arizona?", a: "ENERGY STAR-qualified roof coatings with Solar Reflectance Index (SRI) ≥ 78 may qualify for utility rebates through APS, SRP, or TEP. Commercial properties can also benefit from federal energy efficiency tax incentives. We can provide product specifications for rebate eligibility review." },
      ],
    ],
  },

  "emergency-roof-repair": {
    symptoms: [
      "Active water intrusion during or immediately following a rain or storm event",
      "Sudden structural damage from fallen tree limbs, branches, or debris",
      "Wind-driven tile or shingle displacement exposing underlayment or decking",
      "Flashing completely separated from chimney, wall, or vent during storm",
      "Rapid interior water damage accumulation requiring immediate roof weatherproofing",
      "Post-monsoon visible damage that creates imminent leak risk before next rain",
    ],
    materials: [
      "Heavy-duty polyethylene tarps (10-mil or heavier) for immediate weatherproofing",
      "2×4 lumber and screws for securing emergency tarp systems without further damage",
      "Karnak or Geocel emergency sealant — sets in wet conditions",
      "Peel-and-stick membrane for rapid temporary patching of small exposed areas",
      "OSB panels for emergency decking coverage on structural gaps",
      "Matching tile, shingle, or metal materials from local distributor emergency stock",
    ],
    timeline: "We prioritize emergency calls and target response within 2–4 hours for active leak situations during business hours, and same-day response for after-hours emergencies when practical. Initial emergency weatherproofing (tarp installation or emergency seal) is typically completed within the day. Permanent repairs are scheduled as soon as materials arrive — usually within three to five business days.",
    costFactors: [
      "Emergency response premium for after-hours, weekend, or holiday calls",
      "Extent of temporary weatherproofing required (tarp area, complexity)",
      "Scope of permanent repair following emergency stabilization",
      "Interior damage documentation for insurance purposes (additional time)",
      "Material sourcing — emergency stock availability vs. special order",
      "Structural damage requiring engineering assessment or permit",
    ],
    faqSets: [
      [
        { q: "What should I do immediately when I have an active roof leak?", a: "First, move valuables and place buckets to catch water — interior water damage escalates quickly. Do not go on the roof yourself during active rain or wind. Call XRP Roofing immediately — we respond to emergencies and can provide guidance by phone while en route. Document the damage with photos for insurance purposes but prioritize safety." },
        { q: "Do you respond to emergencies at night or on weekends?", a: "Yes — we have emergency response capability for urgent situations. Call our main line and follow prompts for emergency service. After-hours response carries a premium but prevents the interior damage costs that accumulate when leaks go unaddressed for days." },
        { q: "Will insurance cover emergency roof repair after a storm?", a: "Storm-caused emergency roof damage is typically covered under standard homeowner's insurance policies. We provide complete emergency response documentation including photos, damage assessment, and temporary repair description — everything needed for your claim. We also offer adjuster meet services." },
        { q: "Is emergency tarp installation a permanent fix?", a: "No — a tarp installation is weatherproofing only, intended to prevent further interior damage until permanent repairs can be completed. Tarps can shift in wind and are not a long-term solution. We always schedule permanent repairs as quickly as possible following emergency weatherproofing." },
      ],
    ],
  },

  "storm-damage-roofing": {
    symptoms: [
      "Visible impact marks on shingles or tile following hail or heavy debris",
      "Wind-displaced or completely missing shingles, tiles, or metal panels",
      "Tree branches or debris causing punctures or structural damage",
      "Bent, separated, or pulled-off flashing at roof edges, walls, or penetrations",
      "Granule loss concentrated in one area following large hail",
      "Dented, punctured, or displaced metal components (ridge caps, vents, gutters)",
    ],
    materials: [
      "Class 4 Impact Resistant (IR) shingles for hail-prone re-roofing (insurance premium discount eligible)",
      "Matching Boral or Eagle tile for storm damage repairs",
      "New-generation underlayment products with enhanced wind resistance ratings",
      "Stainless steel or aluminum replacement flashings for long-term performance",
      "Drip edge and rake metal as needed for edge damage",
      "FEMA-compliant hurricane strap installation where required",
    ],
    timeline: "Emergency weatherproofing is completed same-day. Insurance assessment documentation (photos, written report) is provided within 24–48 hours. Permanent repair timeline depends on insurance claim processing and material availability — typically one to four weeks from claim approval. We can expedite for documented active leaks.",
    costFactors: [
      "Storm damage scope — isolated vs. widespread impact across the full roof",
      "Insurance deductible (homeowner's responsibility) vs. insurance-covered portion",
      "Material matching difficulty for older or discontinued roofing products",
      "Whether storm damage qualifies for full replacement vs. repair under the policy",
      "Supplemental documentation requirements from your insurance carrier",
      "Code compliance upgrades required when permitted work exceeds 50% of roof value",
    ],
    faqSets: [
      [
        { q: "How do I know if my roof has hail damage?", a: "Hail damage on shingles typically appears as random impact marks causing granule displacement — creating circular dark spots with exposed asphalt beneath. On tile, look for cracks or chips, especially on the leading edge of tiles. Metal shows visible dents. The full extent of damage often requires roof-level inspection — ground-level assessment can miss significant damage." },
        { q: "Should I call my insurance company or a roofer first?", a: "Call a roofer first. A thorough, documented inspection report from a qualified contractor is far more useful in the claims process than a phone report to your carrier. We provide complete photographic documentation with a written damage assessment that your carrier can use directly. Some carriers will accept our report in lieu of sending their own adjuster." },
        { q: "What are public adjusters and should I use one?", a: "Public adjusters represent policyholders (not the insurance company) and advocate for maximum claim value on your behalf, typically for a percentage of the claim. For large, complex claims, they can be valuable. For straightforward storm damage claims, an experienced roofing contractor with good documentation often achieves comparable results without the adjuster's fee." },
        { q: "My neighbor got a free roof after the last monsoon — can I get the same?", a: "Be very cautious of 'storm chasers' who promise free roofs or offer to waive your deductible. Deductible waiver is insurance fraud in Arizona. Legitimate insurance claims cover documented storm damage after your deductible. If your neighbor got a full replacement covered by insurance, they had documented damage that met their carrier's threshold — which may or may not apply to your roof." },
      ],
    ],
  },
};

const introVariants = [
  (city: string) => `When Arizona's punishing sun, violent monsoon storms, and relentless heat cycles threaten your roof, ${city} homeowners and business owners trust XRP Roofing to deliver lasting solutions. With years of hands-on experience throughout the Phoenix metro and beyond, our licensed and insured team understands exactly what it takes to keep roofs performing in one of the harshest climates on earth.`,
  (city: string) => `Your roof is the single most important protective barrier between your family and Arizona's extreme weather. In ${city}, that means preparing for UV radiation that degrades materials twice as fast as northern climates, monsoon season downpours that expose every weak flashing and cracked seal, and summer heat that causes constant expansion and contraction. XRP Roofing has built its reputation solving all of these challenges.`,
  (city: string) => `Finding a roofing contractor you can trust in ${city} is harder than it should be. That's why XRP Roofing has focused on building long-term relationships with homeowners and businesses throughout the Phoenix region — through honest assessments, fair pricing, and workmanship that lasts. From minor repairs to complete roof replacements, we handle every project with the same commitment to quality.`,
  (city: string) => `${city} properties face a unique combination of roofing challenges: intense UV exposure that bakes and cracks roofing materials, monsoon-season wind and rain that test every seam and fastener, and daily thermal cycling that silently degrades your roof year after year. XRP Roofing was founded specifically to address these Arizona-specific demands with the right materials, techniques, and local expertise.`,
  (city: string) => `Not all roofing contractors understand Arizona. At XRP Roofing, we've spent years learning the specific conditions that affect roofs in ${city} and throughout the Phoenix metro — from the way UV radiation breaks down asphalt faster than anywhere in the country, to how monsoon storm drainage behaves on different roof pitches. That local knowledge makes every project we complete more durable.`,
];

const localChallengeVariants = [
  (city: string, notes: string[]) => `${city} presents some of Arizona's most demanding roofing conditions. ${notes[0] || "The intense desert heat is relentless"}, while ${(notes[1] || "monsoon storms deliver sudden, heavy rainfall").toLowerCase()}. Property owners in this area also deal with ${(notes[2] || "unique local environmental factors").toLowerCase()} that require specialized knowledge to address correctly.`,
  (city: string, notes: string[]) => `Every roofing contractor claims to understand Arizona, but the specific conditions in ${city} require experience that only comes from actually working here. ${notes[0] || "Heat exposure is extreme"}, and ${(notes[1] || "storm season brings its own set of hazards").toLowerCase()}. Add to that ${(notes[2] || "local construction patterns and HOA requirements").toLowerCase()}, and you have a market that demands a contractor who truly knows the territory.`,
  (city: string, notes: string[]) => `The roofing challenges in ${city} go beyond what most national roofing guides describe. Here, ${(notes[0] || "the sun works relentlessly against your roofing materials").toLowerCase()} while ${(notes[1] || "seasonal storms test every component").toLowerCase()}. ${notes[2] ? `Additionally, ${notes[2].toLowerCase()} is a factor that ${city} property owners frequently overlook until damage has already occurred.` : `Local environmental factors add complexity that requires a contractor with genuine local experience.`}`,
  (city: string, notes: string[]) => `What makes ${city} roofing uniquely challenging is the combination of extreme conditions that hit from multiple directions. Daytime temperatures regularly exceed 110°F, causing roofing materials to expand significantly before cooling overnight. ${notes[0] || "This thermal cycling alone causes premature aging"}, and when you add ${(notes[1] || "seasonal storm exposure").toLowerCase()}, the cumulative wear accelerates dramatically.`,
  (city: string, notes: string[]) => `Protecting a roof in ${city} means understanding that Arizona's climate doesn't follow national roofing standards. The combination of ${(notes[0] || "intense UV radiation").toLowerCase()}, ${(notes[1] || "monsoon wind and rain").toLowerCase()}, and ${(notes[2] || "local environmental factors").toLowerCase()} creates conditions that demand materials and installation techniques specifically chosen for the Arizona desert.`,
];

const processVariants = [
  () => `Our process begins with a thorough roof inspection — we check every flashing, slope, and potential weak point before recommending a single dollar of work. From there, we provide a detailed written estimate with no hidden fees and no pressure. Once you approve the scope, we schedule at your convenience, source materials from trusted suppliers, and complete the work with experienced crews who clean up completely when finished.`,
  () => `Every XRP Roofing project follows the same disciplined process: comprehensive inspection first, honest diagnosis second, detailed estimate third. We never recommend more work than your roof actually needs, and we never cut corners on what it does need. Our crews are experienced Arizona roofing professionals — not day labor — and we stand behind every project with a written workmanship warranty.`,
  () => `We start every project with a free, no-obligation roof inspection that gives us — and you — a clear picture of your roof's actual condition. We photograph problem areas, explain findings in plain language, and provide a written estimate before any work begins. Our scheduling is flexible, our crews are punctual, and our job sites are left clean.`,
  () => `The XRP Roofing process is built around transparency. Step one: inspection — a thorough documented assessment. Step two: estimate — a clear breakdown of materials, labor, and timeline with no surprises. Step three: scheduling that works around your life. Step four: professional installation by experienced crews. Step five: final walkthrough and cleanup. No games, no gimmicks.`,
  () => `From first call to final cleanup, XRP Roofing manages every phase of your roofing project with professionalism and precision. We begin with a comprehensive inspection identifying both current damage and developing issues. Our estimates are detailed, itemized, and firm — no change orders without your explicit approval. Our crews arrive when scheduled, work efficiently, and leave your property cleaner than they found it.`,
];

const whyUsVariants = [
  (city: string) => `Choosing the right roofing contractor in ${city} means looking beyond the lowest bid. XRP Roofing is fully licensed and insured, carries comprehensive liability coverage, and employs experienced Arizona roofing professionals on every project. We source materials from manufacturers with proven track records in desert climates, and we back our work with written warranties.`,
  (city: string) => `XRP Roofing has earned its reputation in ${city} and throughout the Phoenix metro through consistent quality workmanship and honest business practices. We're locally owned and operated — not a franchise or lead-generation service — which means we treat every project like our reputation depends on it, because it does.`,
  (city: string) => `What separates XRP Roofing from other contractors serving ${city}? Experience with Arizona's specific roofing demands. Transparent pricing with no hidden fees. Crews that show up when scheduled. Materials selected for desert performance. And a genuine commitment to customer satisfaction that goes beyond the final invoice.`,
  (city: string) => `${city} homeowners and business owners choose XRP Roofing because we've proven ourselves in Arizona's demanding environment. Our team understands local building codes, HOA requirements, and the specific weather challenges that test every roofing system. We bring that knowledge to every project combined with the personal service you can't get from a national chain.`,
  (city: string) => `When you hire XRP Roofing for your ${city} property, you're working directly with experienced Arizona roofing professionals — not a sales team that subcontracts the work. We're licensed, insured, and committed to quality that generates referrals. Our estimators give honest assessments, our crew leads have years of Arizona experience, and our customer service stays responsive from first contact through final payment.`,
];

export const cityFaqSets: Array<Array<{ q: string; a: string }>> = [
  [
    { q: "How often should I have my roof inspected in Arizona?", a: "We recommend inspections every 2–3 years for roofs in good condition, and annually for roofs over 15 years old. Always schedule an inspection after a major monsoon storm event, even if you don't see obvious damage — many issues are only visible from the roof surface." },
    { q: "Does extreme Arizona heat void roofing warranties?", a: "No — major manufacturers design products specifically for high-temperature climates and their warranties account for desert conditions. What can void warranties is improper installation, inadequate ventilation, or use of products not rated for high-temperature environments. We always specify materials appropriate for Arizona." },
    { q: "How long does a typical roof last in the Phoenix area?", a: "Concrete tile lasts 30–50+ years (underlayment may need replacement earlier). Architectural shingles last 20–25 years in Arizona conditions. Metal roofing lasts 40–70 years. Flat roofing systems last 20–30 years. Proper installation and periodic maintenance extend these estimates." },
    { q: "Do you offer financing for roofing projects?", a: "Yes — we work with financing partners to offer payment plans that fit your budget. Options range from short-term no-interest plans to longer-term installment financing. Ask us about current financing offers when you call for your free estimate." },
    { q: "Can you help with my insurance claim?", a: "Absolutely. XRP Roofing provides comprehensive storm damage documentation including photographs, written damage reports, and detailed repair estimates suitable for insurance submission. We work with all major carriers and can meet with your adjuster on-site." },
    { q: "What is the best time of year to replace a roof in Arizona?", a: "Fall and spring are ideal — cooler temperatures make installation safer for workers and reduce the thermal stress on materials during installation. However, we complete roofing projects year-round and take precautions in extreme summer heat to protect both our crews and materials." },
  ],
  [
    { q: "What roofing materials work best in Arizona's extreme climate?", a: "Concrete and clay tile offer the best combination of longevity and heat performance. Architectural shingles rated for high temperatures are cost-effective. Metal roofing provides maximum durability and reflectivity. The right choice depends on your budget, HOA requirements, and the structural capacity of your home." },
    { q: "How do I spot early signs of roof damage?", a: "From the ground: look for missing or displaced tiles/shingles, granule accumulation in gutters, visible sagging, or staining on exterior walls below roof edges. From the attic: water stains, daylight visible through decking, or mold growth indicate a problem. When in doubt, call for a professional inspection." },
    { q: "Will a new roof increase my home's value?", a: "Yes — a new roof is one of the highest-ROI home improvements in Arizona. Buyers and appraisers view roof age and condition as major factors. A recently replaced roof can directly increase appraised value and significantly improve a home's marketability." },
    { q: "Do you work with HOA communities?", a: "Yes — we're experienced navigating HOA architectural review processes throughout the Phoenix metro. We identify approved materials and colors, provide samples for committee review, and handle all required documentation. HOA compliance is a standard part of our process." },
    { q: "How do I prevent monsoon damage to my roof?", a: "Pre-season inspection in May or June is the single most effective step. We check flashing integrity, fastener tightness, and drainage clearance — the three most common sources of monsoon damage. Trees overhanging the roof should be trimmed, and gutters should be clear before storm season." },
    { q: "What does a roofing estimate include?", a: "Our written estimates include a material specification (brand, product, color), labor scope, project timeline, payment terms, and warranty information. We never provide verbal estimates only. Everything is documented in writing so there are no surprises." },
  ],
  [
    { q: "Are you licensed and insured to work in Arizona?", a: "Yes. XRP Roofing holds all required Arizona contractor licenses and carries comprehensive general liability and workers' compensation insurance. We're happy to provide proof of coverage before any project begins. Never hire a roofer who can't immediately provide license and insurance verification." },
    { q: "What happens if it rains during my roofing project?", a: "We monitor weather closely and schedule projects to avoid expected rain. If unexpected rain occurs during installation, we immediately waterproof exposed areas with temporary protection. No home is left open to the elements overnight. We communicate any weather-related schedule changes promptly." },
    { q: "How do I maintain my roof between professional inspections?", a: "Keep gutters and downspouts clear, trim trees that overhang or drop debris on the roof, watch for animals or birds nesting under tile edges, and take a ground-level look at your roof after every significant storm. These simple steps help you catch developing issues before they become expensive problems." },
    { q: "What is underlayment and why does it matter?", a: "Underlayment is the waterproofing layer installed between the roof deck and the finish material (tile, shingle, metal). In Arizona's extreme heat, standard underlayment degrades faster than in cooler climates. Many Arizona tile roof leaks are actually underlayment failures — the tile looks fine but the waterproofing beneath has failed. We inspect both layers on every service call." },
    { q: "Do you offer emergency roofing services?", a: "Yes — we respond to emergency calls for active leaks and storm damage. We prioritize emergency situations and provide temporary weatherproofing to prevent further interior damage while permanent repairs are scheduled. Call our main line for emergency response." },
    { q: "Can I stay in my home during a roof replacement?", a: "Yes — in most cases you can remain in the home during a replacement, though expect noise during working hours. We take precautions to protect your landscaping, windows, and outdoor furniture from falling debris. HVAC systems are typically not affected unless ductwork runs through the attic." },
  ],
];

export interface CityPageContent {
  intro: string;
  localChallenges: string;
  process: string;
  whyUs: string;
  projectExamples: Array<{ title: string; description: string }>;
  faqs: Array<{ q: string; a: string }>;
}

export function cityPageContent(city: City): CityPageContent {
  const seed = city.slug;
  const intro = pickVariant(seed + "intro", introVariants)(city.name);
  const localChallenges = pickVariant(seed + "challenges", localChallengeVariants)(city.name, city.localRoofingNotes);
  const process = pickVariant(seed + "process", processVariants)();
  const whyUs = pickVariant(seed + "whyus", whyUsVariants)(city.name);

  const projectExampleSets = [
    [
      { title: `Tile Re-Roof in ${city.neighborhoods[0] || city.name}`, description: `A ${city.name} homeowner contacted us after discovering active leaks following a monsoon storm. Our inspection revealed 25-year-old underlayment had failed across both south-facing slopes while the concrete tile remained largely intact. We completed full tile removal, underlayment replacement, and tile reinstallation over four days, restoring complete weatherproofing.` },
      { title: `Commercial Flat Roof Restoration in ${city.name}`, description: `A retail property in the ${city.neighborhoods[1] || "commercial"} area of ${city.name} was experiencing multiple leak points across its aging built-up roof. Our assessment confirmed the deck was sound and dry, making it an ideal coating candidate. We applied a full silicone coating system with reinforced seams, extending the roof's life by an estimated 15+ years at a fraction of replacement cost.` },
      { title: `Emergency Storm Repair in ${city.name}`, description: `A ${city.name} family called us after a monsoon storm displaced a section of roofing on their home near the ${city.neighborhoods[2] || "north"} area. We arrived the same day, installed temporary weatherproofing, documented the damage for their insurance claim, and completed permanent repairs within the week. The entire process was covered under their homeowner's policy.` },
    ],
    [
      { title: `Shingle Replacement near ${city.neighborhoods[0] || city.name}`, description: `After a ${city.name} homeowner noticed extensive granule loss and blistering on their 18-year-old asphalt shingle roof, we recommended full replacement. We installed 30-year architectural shingles rated for high-temperature climates and upgraded the attic ventilation — a critical step that would have reduced the new roof's lifespan if left unaddressed.` },
      { title: `HOA-Compliant Tile Replacement in ${city.name}`, description: `A homeowner in a managed community in ${city.name} needed a complete tile replacement but faced strict HOA requirements for color and profile matching. We worked with the architectural review committee, sourced approved materials, and completed the project without a single HOA violation notice. The homeowner received approval on first submission.` },
      { title: `Metal Roofing Installation in ${city.name}`, description: `A property owner in ${city.neighborhoods[1] || "the area"} chose standing seam metal roofing for its combination of longevity, energy efficiency, and modern aesthetic. We installed a 24-gauge Galvalume system with factory-applied cool-roof coating. The owner reported a noticeable reduction in summer cooling costs compared to the previous shingle roof.` },
    ],
    [
      { title: `Leak Investigation and Repair in ${city.name}`, description: `A ${city.name} homeowner had received three different diagnoses from other contractors for a persistent leak near a skylight. Our investigation identified the actual failure point — a deteriorated secondary flashing concealed beneath intact-looking primary flashing. One targeted repair resolved an issue that had been misdiagnosed twice.` },
      { title: `New Construction Roofing in ${city.neighborhoods[0] || city.name}`, description: `We partnered with a general contractor building a custom home in ${city.name} to provide a complete tile roofing package including underlayment, installation, all flashings, and final inspection. Coordination with the framing and HVAC crews was seamless, and the roof passed final inspection on first submittal.` },
      { title: `Roof Coating Project for ${city.name} Office Building`, description: `A small office building in ${city.name} was facing an aging TPO roof showing early surface deterioration but with a structurally sound deck. We performed a moisture scan, confirmed dry conditions, and applied a silicone restoration coating system. The building owner avoided a costly full replacement while gaining a 15-year manufacturer warranty.` },
    ],
  ];

  const projectExamples = pickVariant(seed + "projects", projectExampleSets);
  const faqs = pickVariant(seed + "faqs", cityFaqSets);

  return { intro, localChallenges, process, whyUs, projectExamples, faqs };
}

export interface CityServiceContent {
  intro: string;
  localTieIn: string;
  process: string;
  whyUs: string;
  symptoms: string[];
  materials: string[];
  timeline: string;
  costFactors: string[];
  faqs: Array<{ q: string; a: string }>;
}

export function cityServiceContent(city: City, service: Service): CityServiceContent {
  const seed = city.slug + service.slug;
  const svc = service;

  const intro = pickVariant(seed + "intro", introVariants)(city.name);

  const localTieInVariants = [
    `${city.name}'s specific climate conditions directly affect how ${svc.name.toLowerCase()} projects are planned and executed. ${city.localRoofingNotes[0] || "The extreme desert heat"}  means we select materials and installation methods specifically rated for Arizona's demands — not generic national specifications.`,
    `When it comes to ${svc.name.toLowerCase()} in ${city.name}, local knowledge matters. ${city.localRoofingNotes[1] || "Monsoon season creates specific challenges"} that contractors without Arizona experience routinely underestimate. Our team has worked throughout ${city.name} and understands the micro-climate conditions that affect your roof's performance.`,
    `${city.name} presents unique considerations for ${svc.name.toLowerCase()} projects. ${city.localRoofingNotes[0] || "Heat exposure is significant"}, and ${(city.localRoofingNotes[2] || "local HOA and permit requirements add complexity").toLowerCase()} that our team navigates routinely. We bring the right approach for your specific location.`,
    `The demand for quality ${svc.name.toLowerCase()} in ${city.name} reflects the real pressures this climate places on every roofing system. ${city.localRoofingNotes[Math.min(2, city.localRoofingNotes.length - 1)] || "Local conditions accelerate wear"} — which is why getting the right contractor matters even more here than in gentler climates.`,
    `Our experience completing ${svc.name.toLowerCase()} projects throughout ${city.name} has given us deep insight into the factors that matter most here. ${city.localRoofingNotes[0] || "The environment is demanding"}, and the communities here — ${city.neighborhoods.slice(0, 2).join(" and ")} among others — have specific standards and expectations we consistently meet.`,
  ];

  const localTieIn = pickVariant(seed + "local", localTieInVariants);
  const process = pickVariant(seed + "process", processVariants)();
  const whyUs = pickVariant(seed + "whyus", whyUsVariants)(city.name);

  // Pull rich per-service content, with generic fallback
  const rich = serviceRichContent[service.slug];

  const symptoms = rich?.symptoms ?? [
    "Visible damage or deterioration requiring professional assessment",
    "Leaks or water infiltration during or after rain events",
    "Roofing material past its rated service life for Arizona's climate",
    "Storm or high-wind damage causing displaced or missing materials",
    "Energy bills rising — roof system no longer providing adequate insulation",
  ];

  const materials = rich?.materials ?? [
    "High-temperature rated materials appropriate for Arizona's desert climate",
    "Manufacturer-backed products with proven desert performance track records",
    "HOA-compliant colors and profiles where architectural review applies",
    "Properly gauged fasteners and flashings for Arizona wind uplift requirements",
  ];

  const timeline = rich?.timeline ?? "Timeline varies based on project scope, material availability, and site conditions. We provide a detailed schedule in our written estimate and communicate any changes promptly.";

  const costFactors = rich?.costFactors ?? [
    "Project size, roof pitch, and accessibility",
    "Material selection and current supplier availability",
    "Existing conditions discovered during inspection",
    "Permit fees and inspection requirements",
    "Any ventilation or structural upgrades needed",
  ];

  // Pick FAQ set deterministically from service's faqSets, append two city-specific FAQs
  const baseFaqs = rich?.faqSets
    ? pickVariant(seed + "faqs", rich.faqSets)
    : [
        { q: `How do I know if I need ${svc.shortName} in ${city.name}?`, a: `Signs include visible material damage, active leaks, or a roof past its rated Arizona lifespan. A free professional inspection from XRP Roofing will give you a clear, honest assessment.` },
        { q: `How long does ${svc.shortName} take in ${city.name}?`, a: `Timeline depends on project scope and material availability. We provide an accurate schedule during the estimate process. Most residential projects complete within one to five days.` },
        { q: `Is ${svc.shortName} covered by homeowner's insurance in ${city.name}?`, a: `Storm-caused damage is typically covered after your deductible. Gradual wear is not. We provide documentation for insurance submission and work with all major carriers.` },
        { q: `What makes XRP Roofing the right choice for ${svc.shortName} in ${city.name}?`, a: `We're locally based, licensed, insured, and experienced with ${city.name}'s specific climate and HOA requirements. Honest assessments, written estimates, backed by warranty.` },
      ];

  // Append two city-personalised FAQs unique to the city+service combo
  const countyLabel = city.county ?? "Maricopa";
  const cityFaqs = [
    { q: `Do you provide free ${svc.shortName} estimates in ${city.name}?`, a: `Yes — every XRP Roofing estimate is free and comes with a full written scope of work. We serve ${city.name} and nearby communities throughout ${countyLabel}. Call or submit our online form and we'll schedule at your convenience.` },
    { q: `How quickly can you respond to ${svc.shortName} requests in ${city.name}?`, a: `We typically respond to inquiries from ${city.name} within one business day for standard projects, and same-day for emergencies. Our crews are based in the Phoenix metro and regularly work throughout ${countyLabel}.` },
  ];

  return {
    intro,
    localTieIn,
    process,
    whyUs,
    symptoms,
    materials,
    timeline,
    costFactors,
    faqs: [...baseFaqs, ...cityFaqs],
  };
}
