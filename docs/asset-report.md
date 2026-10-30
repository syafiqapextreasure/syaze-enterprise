# Website image asset report

18 distinct assets support the approved SYAZE ENTERPRISE visual direction. Four previously generated fence photos were reused, and fourteen clean assets were recreated with the built-in image generator using the approved designs and business references. This tool does not expose a model selector; a GPT-Image-2 model version cannot be verified.

The images are illustrative AI recreations, not evidence of completed customer projects. The logo is a transparent recreation of the supplied brand, not a pixel-identical extraction. Homepage service images deliberately differ from the inner service hero images.

## Encoding and validation

All full-resolution WebP masters decode to exactly the same RGB/RGBA pixels as their PNG sources (byte comparison passed for every asset). PNG originals and generation prompts remain in the local work/asset-masters directory, outside production assets. Every image also has 480px and 960px wide responsive renditions; the transparent logo additionally has 160px and 320px renditions. Responsive images are resized with Lanczos and then losslessly encoded: their resolution changes, so only the full-size masters are pixel-identical to the source. WebP files were opened and verified after compression.

Original PNGs total **44.93 MB**; full-size lossless WebP masters total **29.31 MB**, a **34.8% reduction**. Serve appropriately sized variants through srcset rather than sending every master to phones. Use the 320px logo for the sidebar. All production assets are under public/assets.

## Asset inventory

| Asset basename | Master dimensions | Master size |
|---|---:|---:|
| hero | 1536 × 1024 | 1207 KB |
| logo | 1536 × 1024 | 1047 KB |
| home-fence | 1536 × 1024 | 1767 KB |
| home-renovation | 1536 × 1024 | 1309 KB |
| home-loft | 1536 × 1024 | 1421 KB |
| home-tiny | 1536 × 1024 | 2154 KB |
| fence-black | 1536 × 1024 | 1823 KB |
| fence-white-brick | 1536 × 1024 | 1898 KB |
| fence-brown | 1536 × 1024 | 1910 KB |
| fence-white | 1536 × 1024 | 1893 KB |
| renovation | 1536 × 1024 | 1797 KB |
| loft | 1536 × 1024 | 1439 KB |
| tiny | 1536 × 1024 | 1966 KB |
| installer | 1536 × 1024 | 1512 KB |
| leaf-background | 1536 × 1024 | 773 KB |
| renovation-finishes | 1536 × 1024 | 1633 KB |
| renovation-plan | 1536 × 1024 | 1522 KB |
| tiny-interior | 1536 × 1024 | 1555 KB |

## Visual checks

- Hero: white vertical fence, tropical residential context, white/brown/charcoal narrow slat samples on the right and light negative space on the left.
- Homepage services: graphite fence, kitchen renovation, attic desk, and gabled tiny house.
- Inner services: living/dining room, double-height mezzanine, and white shallow-roof tiny house.
- Supporting imagery: material samples, architectural plan, compact tiny-house interior, worker fixing a vertical white fence, and dark green leafy CTA background.
- Fence gallery: black gate, white fence over brick base, brown pedestrian gate, and white perimeter fence.
- No house-cladding image is used to represent the Shera plank fence service.

Detailed per-asset dimensions, bytes, responsive files, source classification, validation and generation prompts are in asset-report.json.
