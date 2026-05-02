export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const images = {
  hero: {
    src: "/images/xrp-roofing/2025-01-26.jpg",
    alt: "XRP Roofing crew completing a tile roof installation in Phoenix Arizona",
    width: 1200,
    height: 800,
  },
  heroAlt: {
    src: "/images/xrp-roofing/2025-01-26-2.jpg",
    alt: "XRP Roofing team working on a residential roof replacement in Phoenix AZ",
    width: 1200,
    height: 800,
  },
  tileRoof: {
    src: "/images/xrp-roofing/2024-07-05.jpg",
    alt: "Completed concrete tile roof installation on Arizona home",
    width: 1200,
    height: 800,
  },
  tileRoofDetail: {
    src: "/images/xrp-roofing/2024-07-05-1.jpg",
    alt: "Close up of tile roofing work in progress on Phoenix area home",
    width: 1200,
    height: 800,
  },
  shingleRoof: {
    src: "/images/xrp-roofing/2024-05-13.jpg",
    alt: "Asphalt shingle roof replacement completed by XRP Roofing in Arizona",
    width: 1200,
    height: 800,
  },
  roofRepair1: {
    src: "/images/xrp-roofing/2024-05-09.jpg",
    alt: "XRP Roofing technician performing roof repair on residential property",
    width: 1200,
    height: 800,
  },
  roofRepair2: {
    src: "/images/xrp-roofing/2024-05-09-1.jpg",
    alt: "Roof repair work in progress on Phoenix home showing damaged sections",
    width: 1200,
    height: 800,
  },
  metalRoof: {
    src: "/images/xrp-roofing/2024-06-27.jpg",
    alt: "Metal roofing installation on commercial building in Phoenix Arizona",
    width: 1200,
    height: 800,
  },
  commercialRoof: {
    src: "/images/xrp-roofing/2024-06-28.jpg",
    alt: "Commercial flat roof installation by XRP Roofing in the Phoenix metro area",
    width: 1200,
    height: 800,
  },
  flatRoof: {
    src: "/images/xrp-roofing/2024-09-18-1.jpg",
    alt: "Flat roof TPO membrane installation on commercial property in Phoenix AZ",
    width: 1200,
    height: 800,
  },
  stormDamage: {
    src: "/images/xrp-roofing/2025-01-26-5.jpg",
    alt: "Storm damage roof inspection following monsoon event in Arizona",
    width: 1200,
    height: 800,
  },
  roofCoating: {
    src: "/images/xrp-roofing/2025-01-26-4.jpg",
    alt: "Roof coating application on commercial flat roof in Phoenix",
    width: 1200,
    height: 800,
  },
  projectComplete: {
    src: "/images/xrp-roofing/2025-01-26-3.jpg",
    alt: "Completed roofing project on Phoenix area home by XRP Roofing",
    width: 1200,
    height: 800,
  },
  crew1: {
    src: "/images/xrp-roofing/2024-04-29.jpg",
    alt: "XRP Roofing crew on job site in Phoenix Arizona",
    width: 1200,
    height: 800,
  },
  crew2: {
    src: "/images/xrp-roofing/2024-05-10.jpg",
    alt: "XRP Roofing team completing roofing installation in the Phoenix metro area",
    width: 1200,
    height: 800,
  },
} satisfies Record<string, ImageAsset>;

export const projectGalleryImages: ImageAsset[] = [
  { src: "/images/xrp-roofing/project-gallery-1.jpg", alt: "Completed roofing project by XRP Roofing in Phoenix AZ", width: 1200, height: 800 },
  { src: "/images/xrp-roofing/project-gallery-2.jpg", alt: "Residential roof replacement completed by XRP Roofing Phoenix", width: 1200, height: 800 },
  { src: "/images/xrp-roofing/project-gallery-3.jpg", alt: "Tile roof installation job completed by XRP Roofing Arizona", width: 1200, height: 800 },
  { src: "/images/xrp-roofing/project-gallery-4.jpg", alt: "Roof repair job finished by XRP Roofing in the Phoenix metro", width: 1200, height: 800 },
  { src: "/images/xrp-roofing/project-gallery-5.jpg", alt: "New roof installation completed by XRP Roofing Phoenix AZ", width: 1200, height: 800 },
  { src: "/images/xrp-roofing/project-gallery-6.jpg", alt: "Shingle roof replacement project by XRP Roofing Arizona", width: 1200, height: 800 },
  { src: "/images/xrp-roofing/project-gallery-7.jpg", alt: "Commercial roofing project completed by XRP Roofing Phoenix", width: 1200, height: 800 },
  { src: "/images/xrp-roofing/project-gallery-8.jpg", alt: "Flat roof installation by XRP Roofing in Phoenix Arizona", width: 1200, height: 800 },
  { src: "/images/xrp-roofing/project-gallery-9.jpg", alt: "Metal roofing project completed by XRP Roofing Phoenix AZ", width: 1200, height: 800 },
  { src: "/images/xrp-roofing/project-gallery-10.jpg", alt: "Storm damage roof repair finished by XRP Roofing Arizona", width: 1200, height: 800 },
  { src: "/images/xrp-roofing/project-gallery-11.jpg", alt: "Roof coating application completed by XRP Roofing Phoenix", width: 1200, height: 800 },
  { src: "/images/xrp-roofing/project-gallery-12.jpg", alt: "Residential roofing project by XRP Roofing in Phoenix metro", width: 1200, height: 800 },
  { src: "/images/xrp-roofing/project-gallery-13.jpg", alt: "Complete roof replacement project by XRP Roofing Phoenix AZ", width: 1200, height: 800 },
];

export const serviceImages: Record<string, ImageAsset> = {
  "roof-repair": images.roofRepair1,
  "roof-replacement": images.hero,
  "new-roof-installation": images.heroAlt,
  "tile-roofing": images.tileRoof,
  "shingle-roofing": images.shingleRoof,
  "metal-roofing": images.metalRoof,
  "tpo-roofing": images.flatRoof,
  "flat-roofing": images.commercialRoof,
  "commercial-roofing": images.projectComplete,
  "roof-coatings": images.roofCoating,
  "emergency-roof-repair": images.roofRepair2,
  "storm-damage-roofing": images.stormDamage,
};

export const cityImages: Record<string, ImageAsset> = {
  "phoenix-az": images.hero,
  "scottsdale-az": images.tileRoof,
  "mesa-az": images.shingleRoof,
  "chandler-az": images.projectComplete,
  "gilbert-az": images.heroAlt,
  "tempe-az": images.commercialRoof,
  "glendale-az": images.crew1,
  "peoria-az": images.tileRoofDetail,
  "surprise-az": images.roofRepair1,
  "goodyear-az": images.metalRoof,
  "buckeye-az": images.crew2,
  "avondale-az": images.flatRoof,
  "queen-creek-az": images.roofRepair2,
  "casa-grande-az": images.stormDamage,
  "maricopa-az": images.roofCoating,
  "apache-junction-az": images.metalRoof,
  "fountain-hills-az": images.tileRoof,
  "paradise-valley-az": images.heroAlt,
  "sun-city-az": images.shingleRoof,
  "sun-city-west-az": images.crew1,
  "litchfield-park-az": images.projectComplete,
  "tolleson-az": images.commercialRoof,
  "el-mirage-az": images.roofRepair1,
  "cave-creek-az": images.metalRoof,
  "carefree-az": images.tileRoofDetail,
  "anthem-az": images.hero,
  "florence-az": images.flatRoof,
  "coolidge-az": images.crew2,
  "wickenburg-az": images.stormDamage,
  "payson-az": images.metalRoof,
};

export function getServiceImage(serviceSlug: string): ImageAsset {
  return serviceImages[serviceSlug] || images.hero;
}

export function getCityImage(citySlug: string): ImageAsset {
  return cityImages[citySlug] || images.hero;
}
