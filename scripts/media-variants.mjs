// Generates smaller AVIF copies of images in public/media/ for responsive
// srcsets, plus lib/media-variants.json which the image loader reads.
//
//   npm run media
//
// Re-run whenever an image in public/media/ changes or WIDTHS is edited.
import { createHash } from "node:crypto";
import { readFile, writeFile, readdir, unlink } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const MEDIA = join(import.meta.dirname, "..", "public", "media");
const MANIFEST = join(import.meta.dirname, "..", "lib", "media-variants.json");

/** Widths to generate per source image (only those smaller than the source). */
const WIDTHS = {
  "intro.avif": [640, 828, 1200],
  "logo-large.avif": [384],
  "map1.avif": [640, 828],
  "map2.avif": [640, 828],
  "map3.avif": [640, 828],
};

const VARIANT = /\.\d+w\.avif$/;
const hash = (buf) => createHash("sha256").update(buf).digest("hex").slice(0, 8);

// Remove old variants so renamed/removed widths don't linger.
for (const f of await readdir(MEDIA)) {
  if (VARIANT.test(f)) await unlink(join(MEDIA, f));
}

const manifest = {};
for (const [name, widths] of Object.entries(WIDTHS)) {
  const src = await readFile(join(MEDIA, name));
  const { width: srcWidth } = await sharp(src).metadata();
  manifest[name] = {};

  for (const width of widths.filter((w) => w < srcWidth)) {
    const out = await sharp(src)
      .resize({ width })
      .avif({ quality: 55, effort: 6 })
      .toBuffer();
    const file = name.replace(/\.avif$/, `.${width}w.avif`);
    await writeFile(join(MEDIA, file), out);
    manifest[name][width] = hash(out);
    console.log(`${file}  ${(out.length / 1024).toFixed(0)} KiB`);
  }
}

await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + "\r\n");
console.log(`wrote ${MANIFEST}`);
