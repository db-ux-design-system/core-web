# Fallback Icon Fonts

This directory contains fallback font files for DB UX Design System v3 Core Web icon assets.
These fonts are used when primary icon font assets are unavailable or fail to load.

## Purpose

Ensure no text would get rendered instead of icons in restricted environments or when asset downloads fail.

## Usage

Font files in this folder are automatically referenced by the design system’s CSS/SCSS.
No manual integration is required.

## Notes

- Fallback fonts may have limited glyph coverage compared to primary icon sets. They only need to include alpha-characters and `-` and `_`.
- For full icon support, ensure DB Theme assets are decoded and available (see [project setup instructions](../../../../../../docs/development.md)).

## Related Locations

- Primary icon fonts: `packages/foundations/assets/icons/fonts/`
- Icon build scripts: `node_modules/@db-ux/db-theme-icons/build/scripts/`

## Adding further glyphs to the fallback icon font

To update the fallback icon font:

1. Regenerate the icon font using the [IcoMoon Online App](https://icomoon.io/app/). Import `packages/foundations/assets/icons/fonts/fallback/selection.json`. Export the font as `icomoon.ttf`.
2. Use the asset `No_image.svg` for new entries.
3. Convert the generated TTF file to WOFF2 format using the following command:
    ```bash
    npx wawoff2 icomoon.ttf icon-font-fallback.woff2
    ```
4. Replace the old fallback font files in this directory with the new versions.
