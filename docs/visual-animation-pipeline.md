# Visual + Animation Pipeline

HustleQuest now has a site-wide pixel-art motion layer that combines:

- **PixiJS** for WebGL scene rendering.
- **GSAP** for timeline-driven motion and entrance animation.
- **Aseprite or Pixelorama** for sprite art creation.
- **TexturePacker** for atlas exports.
- **BMFont-compatible bitmap fonts** for crisp pixel text.

## Runtime integration

- `app/layout.tsx` loads PixiJS and GSAP CDN bundles globally.
- `components/pixel-background.tsx` creates a full-screen WebGL stage and parallax city strips.
- `components/site-animations.tsx` animates navigation and content entrances.

## Sprite workflow

1. Draw sprites in Aseprite or Pixelorama on a fixed grid (8x8 or 16x16).
2. Export PNG sprite sheets.
3. Pack with TexturePacker to `public/sprites/*.json` + `public/sprites/*.png`.
4. Load atlas metadata in PixiJS via `Assets.load`.

## Bitmap font workflow

1. Generate bitmap glyphs using BMFont/AngelCode format.
2. Export `.fnt` + texture `.png` into `public/fonts`.
3. Use Pixi bitmap text for UI labels that must stay pixel-crisp.

See the sample manifest files in `public/sprites/city-atlas.json` and `public/fonts/pixel-command.fnt`.
