import { foamHub, foamSubpages } from "./foam";
import { cityPages, serviceAreasHub } from "./cities";
import { insurancePage } from "./insurance";
import { shingleHub, shingleSubpages } from "./shingle";
import { tileHub, tileSubpages } from "./tile";
import type { LandingPage } from "./types";

export const landingPages: LandingPage[] = [
  shingleHub,
  ...shingleSubpages,
  tileHub,
  ...tileSubpages,
  foamHub,
  ...foamSubpages,
  insurancePage,
  serviceAreasHub,
  ...cityPages,
];

const landingPageMap = new Map(landingPages.map((page) => [page.path, page]));

export function getLanding(path: string): LandingPage | undefined {
  return landingPageMap.get(path);
}

export function requireLanding(path: string): LandingPage {
  const page = landingPageMap.get(path);
  if (!page) throw new Error(`Missing landing page: ${path}`);
  return page;
}

function assertLandingPages(pages: LandingPage[]) {
  const titles = new Set<string>();
  const paths = new Set<string>();
  const h1s = new Set<string>();

  for (const page of pages) {
    if (page.title.length > 60) {
      throw new Error(`Title is ${page.title.length} characters: ${page.title}`);
    }
    if (page.description.length > 155) {
      throw new Error(`Description is ${page.description.length} characters: ${page.description}`);
    }
    if (!page.h1.trim()) throw new Error(`Missing H1 for ${page.path}`);
    if (titles.has(page.title)) throw new Error(`Duplicate title: ${page.title}`);
    if (paths.has(page.path)) throw new Error(`Duplicate path: ${page.path}`);
    if (h1s.has(page.h1)) throw new Error(`Duplicate H1: ${page.h1}`);
    titles.add(page.title);
    paths.add(page.path);
    h1s.add(page.h1);
  }

  for (const page of pages) {
    for (const group of page.linkGroups) {
      for (const link of group.links) {
        const path = link.href.split("#")[0];
        const isLanding =
          path.startsWith("/shingle-roofing") ||
          path.startsWith("/tile-roofing") ||
          path.startsWith("/spray-foam-roofing") ||
          path.startsWith("/service-areas") ||
          path === "/roof-insurance-claim";
        if (isLanding && !paths.has(path)) {
          throw new Error(`${page.path} links to missing landing page ${path}`);
        }
      }
    }
  }
}

assertLandingPages(landingPages);

export { landingMetadata } from "./metadata";
export type { LandingPage } from "./types";
