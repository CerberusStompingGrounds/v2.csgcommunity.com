import type { Metadata } from "next";

/**
 * Site-wide Open Graph fields. A page that sets `openGraph` replaces the
 * layout's object entirely and stops inheriting app/opengraph-image.png, so
 * the image is listed here explicitly too.
 */
export const siteOpenGraph = {
  type: "website",
  siteName: "CSG Exile",
  locale: "en_GB",
  images: [
    {
      url: "/opengraph-image.png",
      width: 1200,
      height: 630,
      alt: "Cerberus Stomping Grounds — CSG Exile",
    },
  ],
} as const satisfies Metadata["openGraph"];

/** Canonical URL + matching og:url for a page. */
export function pageMeta(path: string): Pick<Metadata, "alternates" | "openGraph"> {
  return {
    alternates: { canonical: path },
    openGraph: { ...siteOpenGraph, url: path },
  };
}
