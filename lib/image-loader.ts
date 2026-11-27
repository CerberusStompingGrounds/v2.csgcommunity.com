import variants from "./media-variants.json";

type Variants = Record<string, Record<string, string>>;

/**
 * next/image loader for the static export. For /media/ images it picks the
 * smallest pre-generated variant (scripts/media-variants.mjs) that is at least
 * `width` wide, falling back to the original. Each variant URL carries its own
 * content hash, so /media/* can stay cached as immutable.
 */
export default function mediaLoader({ src, width }: { src: string; width: number }) {
  const match = /^\/media\/([^?]+)/.exec(src);
  const sizes = match && (variants as Variants)[match[1]];
  if (!sizes) return src;

  const best = Object.keys(sizes)
    .map(Number)
    .sort((a, b) => a - b)
    .find((w) => w >= width);

  // Original: add `w` so Next doesn't warn that the loader ignores width.
  // It's the same file at every width, so browsers fetch it only once per srcset.
  if (best === undefined) return `${src}${src.includes("?") ? "&" : "?"}w=${width}`;

  const name = match[1].replace(/\.avif$/, `.${best}w.avif`);
  return `/media/${name}?v=${sizes[best]}`;
}
