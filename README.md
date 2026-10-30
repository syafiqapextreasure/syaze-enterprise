# SYAZE Enterprise

A responsive, Malay-language, 11-page website based on the approved green-and-white design. The primary service is **supply and installation of Shera plank fences and gates**. Secondary services: renovation, loteng and tiny house.

## Run locally

Node.js 22 or newer is required.

```sh
npm ci
npm run build
npm run preview
```

Open `http://localhost:4173`. The build itself uses only Node's standard library; Wrangler is the deployment dependency. For content-only work, `node scripts/build.mjs` and `node scripts/preview.mjs` also run without installing dependencies.

## Deploy to Cloudflare Workers

In Cloudflare Workers & Pages, connect this GitHub repository and select branch `main`.

| Setting | Value |
|---|---|
| Root directory | Repository root |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Worker entry | `src/worker.mjs` |
| Static assets | `dist` (configured in `wrangler.jsonc`) |

Or deploy from an authenticated local terminal:

```sh
npm ci
npm run deploy
```

The site is configured for **Workers Static Assets**, not a PHP server. Page URLs are extensionless directories such as `/pagar-shera-plank/`; legacy `.html` links redirect. The build emits HTML files internally so the site is crawlable without JavaScript.

The Worker replaces the placeholder origin in canonical URLs, structured data, robots and sitemap using the request origin. After connecting your custom domain, set the Worker variable `SITE_URL` to the preferred HTTPS origin (no path), for example `https://your-domain.example`. This keeps canonical URLs consistent if both a custom domain and a workers.dev preview are reachable. Do not publish the placeholder example domain as your business domain.

After the public domain is live, submit `/sitemap.xml` to Google Search Console and Bing Webmaster Tools. No verification tokens or analytics credentials are included.

## Pages

`/`, `/pagar-shera-plank/`, `/renovation/`, `/loteng/`, `/tiny-house/`, `/galeri-pagar/`, `/kalkulator-pagar/`, `/panduan/`, `/panduan/cara-ukur-pagar/`, `/tentang-kami/`, `/hubungi/`.

## Content and visuals

- `src/home.mjs`: homepage content and composition.
- `src/pages.mjs`: inner pages, FAQs and enquiry content.
- `src/components.mjs`: confirmed business contact details, menus, shared components and SVG icons.
- `public/styles.css`: responsive design, fluid type, hover effects and reduced-motion support.
- `public/app.js`: menu, filter/search, calculator and WhatsApp handoffs.
- `public/assets/`: generated image masters encoded as lossless WebP, plus 480/960-pixel responsive versions. Homepage service photographs are exclusive to the homepage; no shared service-page photos are used there.
- `public/fonts/`: self-hosted Roboto and Roboto Condensed; license included.
- `docs/search-research.md`: keyword mapping, competitor sources and SEO/AEO/GEO recommendations.
- `docs/asset-report.json`: generation prompts, dimensions, original/encoded sizes and pixel equality checks.

The approved design is a raster reference, not an editable design system. Roboto Condensed is the closest implemented typeface; browser typography and responsive reflow are intentional. Images were recreated using the available built-in image generator; its interface did not expose a model selector, so a specific model version is not claimed. Generated service visuals are labelled as illustrations, not proof of completed client projects. The functional SVG icons remain crisp at every screen size.

## Calculator and contact

The calculator estimates **cut vertical slats**, not stock boards or price. It rounds `length_mm / (slat_width_mm + gap_mm)` up, then applies and rounds the surplus. The sample 6 m / 150 mm / 10 mm / 10% gives 38 base slats and 42 with surplus. Height determines cut length. Actual spans, end gaps, posts, gates, stock lengths and cutting plans must be confirmed before ordering.

Forms assemble a WhatsApp draft addressed to `60189569639`; the visitor reviews and sends the message in WhatsApp. There is no database, automatic message sending, payment processing, account registration, tracker or invented price list.

## Validation

```sh
npm test
npm run build
npm run check
npx wrangler deploy --dry-run
```

Tests cover estimate rounding/limits, WhatsApp encoding, clean URL redirects, canonical origin replacement and response handling. The static audit verifies all 11 pages, unique metadata, JSON-LD, internal links/anchors, assets and contact facts. See `docs/validation.md` for the completed browser checks and any environment-specific limitations.
