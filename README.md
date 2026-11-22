# csgcommunity.com

Website for **Cerberus Stomping Grounds (CSG)**, a custom ARMA 3 Exile server on Chernarus Isles with custom traders, missions, locations and loot.

Live at **[csgcommunity.com](https://csgcommunity.com)**.

It's a fully static site built with [Next.js](https://nextjs.org) (App Router, static export), [Tailwind CSS v4](https://tailwindcss.com) and [shadcn/ui](https://ui.shadcn.com) components, hosted on Cloudflare Pages.

## Getting started

Requirements: Node.js 20.9 or newer, and npm.

```bash
npm install
npm run dev
```

Then open <https://localhost:3000>. The dev server uses `--experimental-https`, so the first run creates a local certificate and your browser may ask you to trust it.

### Scripts

| Command         | What it does                                                 |
| --------------- | ------------------------------------------------------------ |
| `npm run dev`   | Dev server with hot reload (Turbopack)                       |
| `npm run build` | Production build, exported as static files to `out/`         |
| `npm run start` | Not used: a static export has no Node server. Serve `out/` instead |
| `npm run lint`  | ESLint with the Next.js core-web-vitals and TypeScript rules |

To preview a production build locally:

```bash
npm run build
npx serve out
```

Some behaviour, such as link prefetching, only happens in production builds, so check performance work this way rather than in `next dev`.

## Project structure

```
app/                 Routes (one folder per page) plus site-wide metadata
  layout.tsx         Root layout: navbar, footer, font, default <head> metadata
  page.tsx           Home page (intro video and logo)
  servers/ rules/ about/ faq/ contact/
  sitemap.ts robots.ts manifest.ts opengraph-image.png
components/
  CSGNavbar.tsx      Desktop nav plus mobile slide-out menu
  CSGVideo.tsx       Hero video with an image fallback
  HoverPrefetchLink.tsx  Link that prefetches on hover/focus, not on load
  typography.tsx     Page, H1–H4, P, List and other text primitives
  ui/                shadcn/ui components
lib/media.ts         Builds cache-busted URLs for files in public/media/
public/
  media/             Images and video (AVIF / H.264 MP4)
  arma2/ arma3/      squad.xml and unit patch (.paa) for the in-game squad URL
  _headers           Cloudflare Pages caching and security headers
```

## Working on the site

### Adding a page

1. Create `app/<name>/page.tsx` and export `metadata` with a `title`, `description` and `alternates.canonical`.
2. Add the route to the `routes` array in `components/CSGNavbar.tsx`.
3. Add the path to `PAGES` in `app/sitemap.ts`.

`typedRoutes` is turned on, so a link to a page that doesn't exist fails the build.

### Media

Put files in `public/media/` and reference them with the `media()` helper (server components only):

```tsx
import { media } from "@/lib/media";

<Image src={media("map1.avif")} alt="…" width={1920} height={1080} />
```

`media()` adds a content hash (`/media/map1.avif?v=1a2b3c4d`). That lets `public/_headers` cache everything under `/media/` as immutable for a year, while visitors still get new versions as soon as a file changes.

A static export can't use Next's image optimisation (`images.unoptimized` is on), so compress files before adding them:

- **Images:** AVIF.
- **Video:** H.264 MP4 with `-movflags +faststart` so playback can start before the download finishes.

For example:

```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 26 -preset slow -an -movflags +faststart intro.mp4
```

The hero video only loads on screens 768px and wider, and not when the visitor has reduced motion or data saver turned on. Everyone else sees the still image.

### UI components

New shadcn/ui components go in `components/ui/`:

```bash
npx shadcn@latest add <component>
```

## Deployment

Cloudflare Pages builds the site on every push to `main`:

- **Build command:** `npm run build`
- **Output directory:** `out`

Response headers (HSTS, frame options, cache rules) live in `public/_headers`. Cloudflare merges headers from overlapping rules, so don't add a rule that also matches `/media/*`.

Dependabot opens monthly pull requests for npm updates.

## License

Released into the public domain under [The Unlicense](LICENSE).
