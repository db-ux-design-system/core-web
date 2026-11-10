/*
 * Single source of truth for the icon-font weights we split the font into.
 *
 * Consumed by:
 * - generate-icon-font.ts -> the `sizes` option of @db-ux/icon-font-tools
 *   (which `_<size>` font folders get generated).
 * - scss/icons/_sizes.scss -> the `@font-face` / `data-icon-weight` rules in
 *   relative.scss that actually load those folders. That partial is generated
 *   from this list by `writeIconFontSizesScss`, so the two can never drift.
 *
 * Keep this list aligned with the documented weights in docs/Icons.md.
 */
import { promises as fs } from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

/** @public */
export const ICON_FONT_SIZES = [16, 20, 24, 32, 48, 64] as const;

const scssPartialPath = path.resolve(
	path.dirname(fileURLToPath(import.meta.url)),
	'../../scss/icons/_sizes.scss'
);

/**
 * Regenerates scss/icons/_sizes.scss from {@link ICON_FONT_SIZES} so the Sass
 * side reads the exact same list the font generator used.
 */
export const writeIconFontSizesScss = async (): Promise<void> => {
	const content = `/* This file was generated from scripts/local/icon-font-sizes.ts - do not edit directly. */
$sizes: (${ICON_FONT_SIZES.join(', ')});
`;
	await fs.writeFile(scssPartialPath, content, 'utf-8');
};
