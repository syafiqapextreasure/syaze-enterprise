# Completed validation

Date: 31 October 2026. See design-corrections.md for the visual restoration.

## Functional checks

- 11 unit tests passed: slat rounding, zero gap, surplus, cut height, invalid input, WhatsApp encoding, `.html` redirects, canonical origin substitution, security headers, configured domain and image/304 handling.
- Static build passed for 11 pages. Audit confirmed unique title/description, one H1, valid JSON-LD, unique HTML IDs, valid internal routes and anchors, image files/alt text and confirmed business contact details.
- Browser calculator: 6 m returns 42 slats with sample values; 10 m returns 70. Empty length displays an error and disables the WhatsApp handoff. Height 2.5 m updates cut length while retaining the slat count.
- Gallery: selecting Putih displays exactly two matching visuals.
- Guide search: a matching query returns results; an unknown query returns a clear zero-result message.
- Mobile menu: opens, focuses navigation, closes with Escape and keeps hidden/offscreen navigation out of the focus order. Background content is inert while the drawer is open.
- Contact forms require name, location and project details. They create a visitor-reviewed WhatsApp draft; no messages were sent during testing.
- No browser console errors observed in the tested flows.

## Responsive checks

All 11 pages were checked at 390, 820, 1440 and 2560 CSS-pixel widths: **44 layout checks**, no document horizontal overflow and no broken loaded images. Main body font sizes were 18, 18, 22.4 and 30 px respectively. Forms and controls have large touch targets; reduced-motion preference disables animation/parallax.

Full-page desktop screenshots were captured for the homepage and all ten inner pages. Phone/tablet homepage previews and a comparison package accompany the delivery.

## Design comparison

The implemented site follows the approved green/white palette, dark sidebar, stacked Shera-fence hero, four exclusive homepage service photographs, resource cards, coverage strip and botanical enquiry background. Inner pages use the approved distinct hero compositions, imagery, structured sections and enquiry flows.

This is not a pixel-identical extraction of the raster mockups. Explicit differences: responsive reflow and readable live text; Roboto body text with Roboto Condensed section headings; recreated logo/photo details; scalable SVG icons; consistent business details; functional controls; and slightly different section heights/copy wrapping. Unsupported guarantees and fictional project claims were not transferred from image-generated text.

## Asset checks

18 distinct assets, 56 WebP files including responsive sizes. Full-resolution masters preserve decoded RGB/RGBA pixels exactly relative to the generated/source PNG. Combined masters reduced from 44.93 MB to 29.31 MB (34.8%). Smaller variants intentionally reduce resolution for smaller rendered sizes; they are also encoded losslessly. See `asset-report.md` and `asset-report.json` for provenance and per-file evidence.

## Cloudflare

Workers Static Assets configuration, extensionless routing and origin-aware SEO URLs are included. Local Wrangler dry-run was blocked by this Windows environment's `spawn EPERM` restriction; it did not reach a deployment. The GitHub workflow runs dependency installation, tests, build, static audit and Wrangler dry-run on Ubuntu. Cloudflare account deployment and custom-domain connection are left to the owner, as requested.

SEO/AEO/GEO implementation includes visible factual content, semantic headings, internal links, FAQ answers, unique metadata, canonical URLs, sitemap, robots, LocalBusiness/Service/Breadcrumb/Article/FAQ structured data as applicable, local business identity and keyword mapping. Search positions and AI citations are not measured or guaranteed; submit the sitemap after deployment and monitor Search Console/Bing Webmaster Tools.
