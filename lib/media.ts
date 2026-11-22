import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * URL for a file in public/media/, with a content hash appended as `?v=`.
 * Runs at build time (server components only). The query changes whenever the
 * file does, so /media/* can be cached as immutable (see public/_headers).
 */
export function media(name: string): string {
  const file = readFileSync(join(process.cwd(), "public", "media", name));
  const hash = createHash("sha256").update(file).digest("hex").slice(0, 8);
  return `/media/${name}?v=${hash}`;
}
