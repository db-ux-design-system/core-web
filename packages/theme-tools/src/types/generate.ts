/*
 * Core-generator option, dynamic-prefix, and error types.
 *
 * `GenerateOptions` is the optimization context the generator accepts;
 * `DYNAMIC_PREFIXES` enumerates the runtime-dynamic token prefixes that stay as
 * `var()` references; and `ThemeValidationError` is the error the generator
 * raises when a theme fails validation.
 */

import type { MaterialName } from './theme.js';

/**
 * @public The Optimization_Context passed to `generate`.
 *
 * Omitting a field keeps everything for that dimension; the Required_Baseline
 * (the theme `defaultColor` and the `filled-1` material) is always kept
 * regardless of the values supplied here.
 */
export interface GenerateOptions {
	/** Colors to keep. Omit => all colors in the theme. The required baseline is always kept. */
	colors?: string[];
	/** Materials to keep. Omit => all materials. `filled-1` is always kept (baseline). */
	materials?: MaterialName[];
	/**
	 * Which high-contrast branch(es) to emit. Omit => `"both"`.
	 * See {@link HighContrastMode}.
	 */
	highContrast?: HighContrastMode;
	/**
	 * The named CSS cascade layer the whole generated stylesheet is wrapped in,
	 * so a consumer can order the adaptive colors relative to the DB UX
	 * component bundles (compare the `db-ux-adaptive` layer in the showcases and
	 * the `db-ux` layer of `@db-ux/core-vite-plugin`). See {@link LayerOption}.
	 *
	 * - Omit => the default layer `"db-ux-adaptive"`.
	 * - A string => wrap in `@layer <name> { ... }`.
	 * - `false` => emit no outer layer (the raw matrix, un-layered).
	 *
	 * The generator only wraps its OWN output in this one layer; the cross-bundle
	 * order (`@layer db-ux, db-theme, db-ux-adaptive;`) is declared by the
	 * consumer in the entry file that imports every bundle, since only they know
	 * which other bundles exist.
	 */
	layer?: LayerOption;
}

/**
 * @public The outer cascade-layer wrapper for the generated stylesheet: a layer
 * name, or `false` to emit no outer layer. The {@link DEFAULT_LAYER} applies
 * when omitted.
 */
export type LayerOption = string | false;

/** @public The default outer cascade layer the generated stylesheet is wrapped in. */
export const DEFAULT_LAYER = 'db-ux-adaptive';

/**
 * @public Which high-contrast output to emit. The high-contrast layer has two
 * independent delivery branches — an opt-in `[data-contrast="more"]` attribute
 * selector and a `@media (prefers-contrast: more)` query:
 *
 * - `"both"` — emit both branches.
 * - `"media-query"` — emit only the `@media (prefers-contrast: more)` branch.
 * - `"data-attribute"` — emit only the `[data-contrast="more"]` branch.
 * - `"none"` — emit no high-contrast layer.
 */
export type HighContrastMode =
	'both' | 'media-query' | 'data-attribute' | 'none';

/**
 * @public Runtime-dynamic token prefixes the generator leaves as `var()` and
 * the flatten plugin must skip.
 *
 * A token whose name starts with any of these prefixes is driven at runtime
 * (by `[data-adaptive-color]`, `[data-emphasis]` / `%disabled`, or
 * `[data-pride="true"]`) and must never be substituted for a literal value.
 */
export const DYNAMIC_PREFIXES: readonly string[] = [
	'--db-adaptive-', // whole adaptive family (incl. --db-adaptive-transparency)
	'--db-emphasis-transparency', // driven by [data-emphasis] / %disabled
	'--db-pride-' // driven by [data-pride="true"]
];

/**
 * @public The error the generator raises when a theme fails validation.
 *
 * The message names the offending color and the missing key(s), so an
 * incomplete palette is reported at its exact gap rather than surfacing as an
 * empty `color-mix()` deep in the generated CSS.
 */
export class ThemeValidationError extends Error {
	constructor(message: string, options?: ErrorOptions) {
		super(message, options);
		this.name = 'ThemeValidationError';
		/*
		 * Restore the prototype chain so `instanceof ThemeValidationError`
		 * holds when the class is transpiled to an ES5 target.
		 */
		Object.setPrototypeOf(this, ThemeValidationError.prototype);
	}
}
