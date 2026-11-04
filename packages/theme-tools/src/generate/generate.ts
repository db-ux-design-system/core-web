/*
 * `generate(theme, options?)` — the core generator entry the CLI and bundler
 * plugin call. It:
 *
 *  1. Resolves the optimization context into concrete keep sets, always
 *     unioning in the required baseline (the theme `defaultColor` + `filled-1`).
 *  2. Emits the material matrix (and alt-state matrix) via `generateMaterialsCss`.
 *  3. Lowercases the hex output.
 *
 * The output is compact; a Prettier pass formats it afterward.
 */

import { loadTheme } from '../load-theme.js';
import {
	DEFAULT_LAYER,
	type GenerateOptions,
	type LayerOption,
	ThemeValidationError
} from '../types/generate.js';
import {
	type ColorName,
	type MaterialName,
	requiredBaseline,
	type Theme
} from '../types/theme.js';
import { generateMaterialsCss, type MaterialsFilter } from './materials.js';

/**
 * Reject any supplied color/material key the theme does not define, collecting
 * every unknown key so one error reports all typos at once.
 */
const validateOptionKeys = (
	theme: Theme,
	options: GenerateOptions | undefined
): void => {
	const problems: string[] = [];

	const validColors = Object.keys(theme.colors);
	const unknownColors = (options?.colors ?? []).filter(
		(color) => !(color in theme.colors)
	);
	if (unknownColors.length > 0) {
		problems.push(
			`Unknown color key(s): ${unknownColors.join(
				', '
			)}. Valid colors are: ${validColors.join(', ')}.`
		);
	}

	const validMaterials = Object.keys(theme.materials);
	const unknownMaterials = (options?.materials ?? []).filter(
		(material) => !(material in theme.materials)
	);
	if (unknownMaterials.length > 0) {
		problems.push(
			`Unknown material key(s): ${unknownMaterials.join(
				', '
			)}. Valid materials are: ${validMaterials.join(', ')}.`
		);
	}

	if (problems.length > 0) {
		throw new ThemeValidationError(
			`Optimization context references keys absent from the theme:\n${problems.join(
				'\n'
			)}`
		);
	}
};

/**
 * Resolve the optimization context into the keep sets the matrix generator
 * consumes, always unioning in the required baseline. An omitted list keeps
 * everything; a supplied list (even empty) is narrowed to that list plus the
 * baseline. `highContrast` defaults to `"both"`.
 */
const resolveFilter = (
	theme: Theme,
	options: GenerateOptions | undefined
): MaterialsFilter => {
	validateOptionKeys(theme, options);

	const keepColors = new Set<ColorName>(
		options?.colors ?? (Object.keys(theme.colors) as ColorName[])
	);
	const keepMaterials = new Set<MaterialName>(
		options?.materials ?? (Object.keys(theme.materials) as MaterialName[])
	);

	// The baseline is never dropped, including when the list is empty.
	keepColors.add(requiredBaseline.color);
	keepMaterials.add(requiredBaseline.material);

	return {
		colors: keepColors,
		materials: keepMaterials,
		highContrast: options?.highContrast ?? 'both'
	};
};

/**
 * Resolve the {@link LayerOption} (defaulting an omitted value to
 * {@link DEFAULT_LAYER}) and wrap the generated CSS in the named cascade layer.
 * `false` leaves the CSS un-layered. The wrapped form indents each non-empty
 * line by one tab so the output stays readable before the Prettier pass.
 */
const applyLayer = (css: string, layer: LayerOption | undefined): string => {
	const name = layer === undefined ? DEFAULT_LAYER : layer;
	if (name === false) {
		return css;
	}

	const indented = css
		.split('\n')
		.map((line) => (line.length > 0 ? `\t${line}` : line))
		.join('\n');
	return `@layer ${name} {\n${indented}}\n`;
};

/** Lowercase every hex color in the emitted CSS. */
const lowercaseHex = (css: string): string =>
	css.replaceAll(/#[0-9a-f]{6,8}\b/gi, (hex) => hex.toLowerCase());

/**
 * @public Generate the adaptive material CSS from a theme, optionally optimized.
 *
 * Emits the material matrix (`--db-bg-*`, `--db-text-*`, `--db-border-*`, ...)
 * as `color-mix(in srgb, light-dark(hex, hex) ..., transparent)`, for every kept
 * color x material x state plus the alt-state and high-contrast layers. The
 * optimization context (`options`) keeps only a subset of colors/materials while
 * the required baseline is always preserved; omitting `options` emits the full
 * matrix.
 *
 * The whole stylesheet is wrapped in the `options.layer` cascade layer
 * (default `"db-ux-adaptive"`; pass `false` for the raw, un-layered matrix) so
 * consumers can order the adaptive colors against the DB UX component bundles.
 *
 * Throws `ThemeValidationError` when `options` references a color/material key
 * the theme does not define.
 */
export const generate = (theme: Theme, options?: GenerateOptions): string => {
	const filter = resolveFilter(theme, options);
	const css = lowercaseHex(generateMaterialsCss(theme, filter));
	return applyLayer(css, options?.layer);
};

/**
 * @public Load a theme JSON from `path` and generate its adaptive material CSS.
 *
 * A convenience wrapper over {@link loadTheme} + {@link generate}: it reads and
 * validates the bare colors-map JSON at `path`, expands it, and returns the
 * generated CSS. Prefer {@link generate} directly when the theme is already
 * loaded (e.g. in the CLI, the bundler plugin, or tests).
 */
export const generateThemeFromFile = async (
	path: string,
	options?: GenerateOptions
): Promise<string> => generate(await loadTheme(path), options);
