/*
 * Component -> required adaptive colors/materials manifest (design Component 4,
 * component-aware optimization).
 *
 * The bundler plugin and CLI detector scan source for DB UX components in use
 * (by tag, kebab tag, or import) and union in the colors/materials each used
 * component can emit from its own template — even when the consumer never
 * writes a literal `color=` / `data-adaptive-color=` value. That closes the gap
 * where, e.g., `<DBNotification semantic="critical">` needs `red` but no color
 * attribute appears anywhere in the source for the detector to find.
 *
 * WHY A MANIFEST (and not reading the component sources at scan time): the
 * component templates are not available to a consumer's build (only the
 * compiled framework packages are), and parsing `.lite.tsx` at runtime would be
 * brittle. The mapping is therefore captured here as data.
 *
 * HOW IT IS KEPT HONEST: this map is EXTRACTED from the component `.lite.tsx`
 * sources, not authored by hand. Run
 * `node scripts/extract-component-requirements.ts` from the package root to
 * re-derive it after a component changes which colors/materials its template
 * hard-codes (literal `data-adaptive-color=` / `data-material=`, `props.x ??
 * 'literal'` defaults, and `_getColor` / `_getMaterial` semantic branches). The
 * `component-requirements.spec.ts` test fails if this map drifts from the
 * sources, so a stale entry is caught in CI rather than shipping silently.
 *
 * Keys are the kebab component id (the folder name under
 * `packages/components/src/components`, which is also the `<db-…>` tag and the
 * kebab of the `<DB…>` JSX tag). Only components that emit at least one adaptive
 * color or material appear; a component absent from the map contributes nothing.
 */

import type { MaterialName } from '../types/theme.js';

/** The colors and materials a single component's template can emit. */
export type ComponentRequirement = {
	/** Adaptive colors the component can set on itself (built-in color names). */
	readonly colors: readonly string[];
	/** Materials the component can set on itself. */
	readonly materials: readonly MaterialName[];
};

/**
 * @public Map of component kebab id -> the adaptive colors/materials its
 * template can emit. Extracted from the component `.lite.tsx` sources; see the
 * file header for how to regenerate and how drift is guarded.
 */
export const COMPONENT_REQUIREMENTS: Readonly<
	Record<string, ComponentRequirement>
> = {
	accordion: { colors: [], materials: ['filled-1', 'transparent'] },
	badge: {
		colors: ['blue', 'green', 'grey', 'red', 'yellow'],
		materials: ['filled-1', 'vibrant']
	},
	breadcrumb: { colors: [], materials: ['transparent'] },
	'breadcrumb-item': { colors: [], materials: ['transparent'] },
	'breadcrumb-popover-item': { colors: [], materials: ['transparent'] },
	button: {
		colors: ['brand'],
		materials: ['filled-1', 'origin', 'semi-transparent', 'transparent']
	},
	card: { colors: [], materials: ['filled-1', 'filled-2', 'filled-3'] },
	checkbox: { colors: ['green', 'red'], materials: ['filled-1', 'inverted'] },
	'control-panel-desktop': { colors: [], materials: ['transparent'] },
	'control-panel-meta': { colors: [], materials: ['filled-2'] },
	'control-panel-navigation-item': { colors: [], materials: ['transparent'] },
	'control-panel-navigation-item-group': {
		colors: [],
		materials: ['filled-1', 'transparent']
	},
	'custom-button': { colors: [], materials: ['inverted'] },
	'custom-select': { colors: ['green', 'red'], materials: ['transparent'] },
	'custom-select-list-item': { colors: [], materials: ['filled-1'] },
	'footer-meta': { colors: [], materials: ['filled-2'] },
	header: { colors: [], materials: ['filled-2'] },
	infotext: {
		colors: ['blue', 'green', 'grey', 'red', 'yellow'],
		materials: []
	},
	input: { colors: ['green', 'red'], materials: ['inverted'] },
	link: { colors: ['brand', 'cyan'], materials: [] },
	'loading-indicator': { colors: ['green', 'red'], materials: [] },
	'navigation-item': { colors: [], materials: ['transparent'] },
	notification: {
		colors: ['blue', 'green', 'red', 'yellow'],
		materials: ['filled-2']
	},
	radio: { colors: ['green', 'red'], materials: ['filled-1'] },
	select: { colors: ['green', 'red'], materials: [] },
	'shell-sub-navigation': { colors: [], materials: ['transparent'] },
	switch: { colors: ['green', 'red'], materials: ['filled-1', 'inverted'] },
	'tab-list': { colors: [], materials: ['transparent'] },
	table: { colors: [], materials: ['filled-2'] },
	'table-row': { colors: ['cyan'], materials: ['filled-2', 'filled-3'] },
	tag: {
		colors: ['blue', 'green', 'red', 'yellow'],
		materials: ['transparent']
	},
	textarea: { colors: ['green', 'red'], materials: ['inverted'] },
	tooltip: { colors: [], materials: ['filled-1', 'vibrant'] }
};
