/**
 * Type-safe migration mappings — Single Source of Truth.
 *
 * Generated from the Markdown migration guides
 * (component-migration.md, color-migration.md, icon-migration.md).
 *
 * DO NOT EDIT MANUALLY. Re-generate when the source .md files change.
 */

// ---------------------------------------------------------------------------
// Interfaces
// ---------------------------------------------------------------------------

/** Maps a v2 CSS class (cmp-*, elm-*, rea-*) to its v3 CSS class (db-*). */
export interface ComponentMigrationEntry {
	readonly old: string;
	readonly new: string;
}

/** Maps a legacy db-color-* token to its v3 background and foreground tokens. */
export interface ColorMigrationEntry {
	readonly old: string;
	readonly bg: string;
	readonly fg: string;
}

/** Maps a legacy icon name to its v3 replacement. */
export interface IconMigrationEntry {
	readonly old: string;
	readonly new: string;
}

export interface MigrationData {
	readonly components: Record<string, string>;
	readonly colors: Record<
		string,
		{ readonly bg: string; readonly fg: string }
	>;
	readonly icons: Record<string, string>;
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

export const migrationData: MigrationData = {
	components: {
		'cmp-accordion': 'db-accordion-item',
		'cmp-brand': 'db-brand',
		'elm-button': 'db-button',
		'cmp-card': 'db-card',
		'elm-checkbox': 'db-checkbox',
		'rea-header': 'db-header',
		'elm-input': 'db-input',
		'elm-link': 'db-link',
		'cmp-mainnavigation': 'db-navigation',
		'elm-notification': 'db-notification',
		'rea-page': 'db-page',
		'elm-radio': 'db-radio',
		'elm-select': 'db-select',
		'elm-toggle': 'db-switch',
		'cmp-db-tab': 'db-tab-item',
		'cmp-tab-bar': 'db-tabs',
		'elm-tag': 'db-tag',
		'elm-textarea': 'db-textarea'
	},
	colors: {
		'db-color-yellow-100': {
			bg: '--db-yellow-bg-basic-level-2-default',
			fg: '--db-successful-on-bg-inverted-default'
		},
		'db-color-yellow-200': {
			bg: '--db-yellow-bg-basic-level-3-default',
			fg: '--db-successful-on-bg-inverted-default'
		},
		'db-color-yellow-300': {
			bg: '--db-yellow-bg-basic-level-3-default',
			fg: '--db-yellow-on-bg-basic-emphasis-60-default'
		},
		'db-color-yellow-400': {
			bg: '--db-yellow-bg-vibrant-default',
			fg: '--db-yellow-on-bg-basic-emphasis-60-default'
		},
		'db-color-yellow-500': {
			bg: '--db-yellow-bg-vibrant-default',
			fg: '--db-yellow-on-bg-basic-emphasis-60-default'
		},
		'db-color-yellow-600': {
			bg: '--db-yellow-bg-vibrant-default',
			fg: '--db-yellow-on-bg-basic-emphasis-60-default'
		},
		'db-color-yellow-700': {
			bg: '--db-warning-bg-vibrant-default',
			fg: '--db-warning-on-bg-basic-emphasis-50-default'
		},
		'db-color-yellow-800': {
			bg: '--db-warning-bg-vibrant-default',
			fg: '--db-warning-on-bg-basic-emphasis-50-default'
		},
		'db-color-yellow-900': {
			bg: '--db-brand-bg-inverted-contrast-low-default',
			fg: '--db-brand-on-bg-basic-emphasis-70-default'
		},
		'db-color-orange-100': {
			bg: '--db-yellow-bg-basic-level-2-default',
			fg: '--db-yellow-on-bg-inverted-default'
		},
		'db-color-orange-200': {
			bg: '--db-yellow-bg-basic-level-3-default',
			fg: '--db-yellow-on-bg-inverted-default'
		},
		'db-color-orange-300': {
			bg: '--db-yellow-bg-basic-level-3-default',
			fg: '--db-warning-on-bg-basic-emphasis-60-default'
		},
		'db-color-orange-400': {
			bg: '--db-warning-bg-vibrant-default',
			fg: '--db-warning-on-bg-basic-emphasis-50-default'
		},
		'db-color-orange-500': {
			bg: '--db-warning-bg-vibrant-default',
			fg: '--db-warning-on-bg-basic-emphasis-50-default'
		},
		'db-color-orange-600': {
			bg: '--db-warning-bg-vibrant-default',
			fg: '--db-warning-on-bg-basic-emphasis-50-default'
		},
		'db-color-orange-700': {
			bg: '--db-warning-bg-inverted-contrast-low-default',
			fg: '--db-warning-on-bg-basic-emphasis-70-default'
		},
		'db-color-orange-800': {
			bg: '--db-warning-bg-inverted-contrast-high-default',
			fg: '--db-warning-on-bg-basic-emphasis-80-default'
		},
		'db-color-red-100': {
			bg: '--db-brand-bg-basic-level-3-default',
			fg: '--db-brand-on-bg-inverted-default'
		},
		'db-color-red-200': {
			bg: '--db-brand-bg-basic-level-3-default',
			fg: '--db-burgundy-on-bg-basic-emphasis-60-default'
		},
		'db-color-red-300': {
			bg: '--db-brand-bg-vibrant-default',
			fg: '--db-brand-on-bg-basic-emphasis-50-default'
		},
		'db-color-red-400': {
			bg: '--db-brand-bg-inverted-contrast-low-default',
			fg: '--db-brand-on-bg-basic-emphasis-70-default'
		},
		'db-color-red-500': {
			bg: '--db-brand-bg-inverted-contrast-low-default',
			fg: '--db-brand-on-bg-basic-emphasis-70-default'
		},
		'db-color-red-600': {
			bg: '--db-brand-bg-inverted-contrast-high-default',
			fg: '--db-brand-on-bg-basic-emphasis-80-default'
		},
		'db-color-red-700': {
			bg: '--db-brand-bg-inverted-contrast-high-default',
			fg: '--db-brand-on-bg-basic-emphasis-90-default'
		},
		'db-color-red-800': {
			bg: '--db-brand-bg-inverted-contrast-max-default',
			fg: '--db-brand-on-bg-basic-emphasis-90-default'
		},
		'db-color-burgundy-100': {
			bg: '--db-burgundy-bg-basic-level-3-default',
			fg: '--db-pink-on-bg-inverted-default'
		},
		'db-color-burgundy-200': {
			bg: '--db-pink-bg-basic-level-3-default',
			fg: '--db-burgundy-on-bg-basic-emphasis-60-default'
		},
		'db-color-burgundy-300': {
			bg: '--db-burgundy-bg-vibrant-default',
			fg: '--db-burgundy-on-bg-basic-emphasis-50-default'
		},
		'db-color-burgundy-400': {
			bg: '--db-burgundy-bg-inverted-contrast-low-default',
			fg: '--db-burgundy-on-bg-basic-emphasis-70-default'
		},
		'db-color-burgundy-500': {
			bg: '--db-burgundy-bg-inverted-contrast-high-default',
			fg: '--db-burgundy-on-bg-basic-emphasis-80-default'
		},
		'db-color-burgundy-600': {
			bg: '--db-burgundy-bg-inverted-contrast-high-default',
			fg: '--db-burgundy-on-bg-basic-emphasis-80-default'
		},
		'db-color-burgundy-700': {
			bg: '--db-pink-bg-inverted-contrast-max-default',
			fg: '--db-burgundy-on-bg-basic-emphasis-90-default'
		},
		'db-color-burgundy-800': {
			bg: '--db-pink-bg-inverted-contrast-max-default',
			fg: '--db-pink-on-bg-basic-emphasis-100-default'
		},
		'db-color-pink-100': {
			bg: '--db-pink-bg-basic-level-3-default',
			fg: '--db-pink-on-bg-inverted-default'
		},
		'db-color-pink-200': {
			bg: '--db-pink-bg-basic-level-3-default',
			fg: '--db-burgundy-on-bg-basic-emphasis-60-default'
		},
		'db-color-pink-300': {
			bg: '--db-pink-bg-vibrant-default',
			fg: '--db-pink-on-bg-basic-emphasis-60-default'
		},
		'db-color-pink-400': {
			bg: '--db-pink-bg-vibrant-default',
			fg: '--db-pink-on-bg-basic-emphasis-50-default'
		},
		'db-color-pink-500': {
			bg: '--db-pink-bg-inverted-contrast-low-default',
			fg: '--db-pink-on-bg-basic-emphasis-70-default'
		},
		'db-color-pink-600': {
			bg: '--db-pink-bg-inverted-contrast-low-default',
			fg: '--db-pink-on-bg-basic-emphasis-70-default'
		},
		'db-color-pink-700': {
			bg: '--db-pink-bg-inverted-contrast-high-default',
			fg: '--db-pink-on-bg-basic-emphasis-80-default'
		},
		'db-color-pink-800': {
			bg: '--db-pink-bg-inverted-contrast-high-default',
			fg: '--db-pink-on-bg-basic-emphasis-80-default'
		},
		'db-color-violett-100': {
			bg: '--db-violet-bg-basic-level-3-default',
			fg: '--db-violet-on-bg-inverted-default'
		},
		'db-color-violett-200': {
			bg: '--db-violet-bg-basic-level-3-default',
			fg: '--db-violet-on-bg-basic-emphasis-60-default'
		},
		'db-color-violett-300': {
			bg: '--db-violet-bg-vibrant-default',
			fg: '--db-violet-on-bg-basic-emphasis-50-default'
		},
		'db-color-violett-400': {
			bg: '--db-violet-bg-inverted-contrast-low-default',
			fg: '--db-violet-on-bg-basic-emphasis-70-default'
		},
		'db-color-violett-500': {
			bg: '--db-violet-bg-inverted-contrast-high-default',
			fg: '--db-violet-on-bg-basic-emphasis-80-default'
		},
		'db-color-violett-600': {
			bg: '--db-violet-bg-inverted-contrast-high-default',
			fg: '--db-violet-on-bg-basic-emphasis-80-default'
		},
		'db-color-violett-700': {
			bg: '--db-violet-bg-inverted-contrast-high-default',
			fg: '--db-violet-on-bg-basic-emphasis-90-default'
		},
		'db-color-violett-800': {
			bg: '--db-violet-bg-inverted-contrast-max-default',
			fg: '--db-violet-on-bg-basic-emphasis-90-default'
		},
		'db-color-blue-100': {
			bg: '--db-informational-bg-basic-level-3-default',
			fg: '--db-informational-on-bg-inverted-default'
		},
		'db-color-blue-200': {
			bg: '--db-informational-bg-basic-level-3-default',
			fg: '--db-informational-on-bg-basic-emphasis-60-default'
		},
		'db-color-blue-300': {
			bg: '--db-blue-bg-vibrant-default',
			fg: '--db-blue-on-bg-basic-emphasis-50-default'
		},
		'db-color-blue-400': {
			bg: '--db-blue-bg-inverted-contrast-low-default',
			fg: '--db-blue-on-bg-basic-emphasis-70-default'
		},
		'db-color-blue-500': {
			bg: '--db-blue-bg-inverted-contrast-high-default',
			fg: '--db-blue-on-bg-basic-emphasis-80-default'
		},
		'db-color-blue-600': {
			bg: '--db-blue-bg-inverted-contrast-high-default',
			fg: '--db-blue-on-bg-basic-emphasis-90-default'
		},
		'db-color-blue-700': {
			bg: '--db-blue-bg-inverted-contrast-max-default',
			fg: '--db-blue-on-bg-basic-emphasis-90-default'
		},
		'db-color-blue-800': {
			bg: '--db-blue-bg-inverted-contrast-max-default',
			fg: '--db-blue-on-bg-basic-emphasis-100-default'
		},
		'db-color-cyan-100': {
			bg: '--db-turquoise-bg-basic-level-1-default',
			fg: '--db-turquoise-on-bg-inverted-default'
		},
		'db-color-cyan-200': {
			bg: '--db-informational-bg-basic-level-3-default',
			fg: '--db-informational-on-bg-basic-emphasis-60-default'
		},
		'db-color-cyan-300': {
			bg: '--db-informational-bg-vibrant-default',
			fg: '--db-informational-on-bg-basic-emphasis-60-default'
		},
		'db-color-cyan-400': {
			bg: '--db-informational-bg-vibrant-default',
			fg: '--db-informational-on-bg-basic-emphasis-50-default'
		},
		'db-color-cyan-500': {
			bg: '--db-informational-bg-vibrant-default',
			fg: '--db-informational-on-bg-basic-emphasis-50-default'
		},
		'db-color-cyan-600': {
			bg: '--db-informational-bg-inverted-contrast-low-default',
			fg: '--db-informational-on-bg-basic-emphasis-70-default'
		},
		'db-color-cyan-700': {
			bg: '--db-informational-bg-inverted-contrast-high-default',
			fg: '--db-informational-on-bg-basic-emphasis-80-default'
		},
		'db-color-cyan-800': {
			bg: '--db-informational-bg-inverted-contrast-high-default',
			fg: '--db-informational-on-bg-basic-emphasis-90-default'
		},
		'db-color-turquoise-100': {
			bg: '--db-turquoise-bg-basic-level-1-default',
			fg: '--db-turquoise-on-bg-inverted-default'
		},
		'db-color-turquoise-200': {
			bg: '--db-turquoise-bg-basic-level-1-default',
			fg: '--db-turquoise-on-bg-inverted-default'
		},
		'db-color-turquoise-300': {
			bg: '--db-turquoise-bg-vibrant-default',
			fg: '--db-turquoise-on-bg-basic-emphasis-50-default'
		},
		'db-color-turquoise-400': {
			bg: '--db-turquoise-bg-vibrant-default',
			fg: '--db-turquoise-on-bg-basic-emphasis-50-default'
		},
		'db-color-turquoise-500': {
			bg: '--db-turquoise-bg-vibrant-default',
			fg: '--db-turquoise-on-bg-basic-emphasis-50-default'
		},
		'db-color-turquoise-600': {
			bg: '--db-turquoise-bg-inverted-contrast-low-default',
			fg: '--db-turquoise-on-bg-basic-emphasis-70-default'
		},
		'db-color-turquoise-700': {
			bg: '--db-turquoise-bg-inverted-contrast-high-default',
			fg: '--db-turquoise-on-bg-basic-emphasis-80-default'
		},
		'db-color-turquoise-800': {
			bg: '--db-turquoise-bg-inverted-contrast-high-default',
			fg: '--db-turquoise-on-bg-basic-emphasis-90-default'
		},
		'db-color-green-100': {
			bg: '--db-green-bg-basic-level-1-default',
			fg: '--db-green-on-bg-inverted-default'
		},
		'db-color-green-200': {
			bg: '--db-green-bg-basic-level-2-default',
			fg: '--db-successful-on-bg-inverted-default'
		},
		'db-color-green-300': {
			bg: '--db-green-bg-vibrant-default',
			fg: '--db-green-on-bg-basic-emphasis-50-default'
		},
		'db-color-green-400': {
			bg: '--db-green-bg-vibrant-default',
			fg: '--db-green-on-bg-basic-emphasis-50-default'
		},
		'db-color-green-500': {
			bg: '--db-green-bg-inverted-contrast-low-default',
			fg: '--db-green-on-bg-basic-emphasis-70-default'
		},
		'db-color-green-600': {
			bg: '--db-green-bg-inverted-contrast-high-default',
			fg: '--db-green-on-bg-basic-emphasis-80-default'
		},
		'db-color-green-700': {
			bg: '--db-green-bg-inverted-contrast-high-default',
			fg: '--db-green-on-bg-basic-emphasis-80-default'
		},
		'db-color-green-800': {
			bg: '--db-green-bg-inverted-contrast-high-default',
			fg: '--db-green-on-bg-basic-emphasis-90-default'
		},
		'db-color-light-green-100': {
			bg: '--db-successful-bg-basic-level-1-default',
			fg: '--db-successful-on-bg-inverted-default'
		},
		'db-color-light-green-200': {
			bg: '--db-successful-bg-basic-level-3-default',
			fg: '--db-green-on-bg-basic-emphasis-60-default'
		},
		'db-color-light-green-300': {
			bg: '--db-successful-bg-vibrant-default',
			fg: '--db-successful-on-bg-basic-emphasis-60-default'
		},
		'db-color-light-green-400': {
			bg: '--db-successful-bg-vibrant-default',
			fg: '--db-successful-on-bg-basic-emphasis-50-default'
		},
		'db-color-light-green-500': {
			bg: '--db-successful-bg-vibrant-default',
			fg: '--db-successful-on-bg-basic-emphasis-50-default'
		},
		'db-color-light-green-600': {
			bg: '--db-successful-bg-inverted-contrast-low-default',
			fg: '--db-successful-on-bg-basic-emphasis-70-default'
		},
		'db-color-light-green-700': {
			bg: '--db-successful-bg-inverted-contrast-high-default',
			fg: '--db-successful-on-bg-basic-emphasis-80-default'
		},
		'db-color-light-green-800': {
			bg: '--db-successful-bg-inverted-contrast-high-default',
			fg: '--db-successful-on-bg-basic-emphasis-80-default'
		},
		'db-color-warm-gray-100': {
			bg: '--db-adaptive-bg-basic-level-2-default',
			fg: '--db-adaptive-on-bg-inverted-default'
		},
		'db-color-warm-gray-200': {
			bg: '--db-adaptive-bg-basic-level-3-default',
			fg: '--db-yellow-on-bg-inverted-default'
		},
		'db-color-warm-gray-300': {
			bg: '--db-adaptive-bg-vibrant-default',
			fg: '--db-adaptive-on-bg-basic-emphasis-60-default'
		},
		'db-color-warm-gray-400': {
			bg: '--db-adaptive-bg-vibrant-default',
			fg: '--db-adaptive-on-bg-basic-emphasis-50-default'
		},
		'db-color-warm-gray-500': {
			bg: '--db-adaptive-bg-inverted-contrast-low-default',
			fg: '--db-adaptive-on-bg-basic-emphasis-70-default'
		},
		'db-color-warm-gray-600': {
			bg: '--db-adaptive-bg-inverted-contrast-low-default',
			fg: '--db-adaptive-on-bg-basic-emphasis-70-default'
		},
		'db-color-warm-gray-700': {
			bg: '--db-adaptive-bg-inverted-contrast-high-default',
			fg: '--db-adaptive-on-bg-basic-emphasis-90-default'
		},
		'db-color-warm-gray-800': {
			bg: '--db-adaptive-bg-inverted-contrast-max-default',
			fg: '--db-adaptive-on-bg-basic-emphasis-90-default'
		},
		'db-color-cool-gray-100': {
			bg: '--db-adaptive-bg-basic-level-3-default',
			fg: '--db-informational-on-bg-inverted-default'
		},
		'db-color-cool-gray-200': {
			bg: '--db-adaptive-bg-basic-level-3-default',
			fg: '--db-adaptive-on-bg-basic-emphasis-60-default'
		},
		'db-color-cool-gray-300': {
			bg: '--db-adaptive-bg-vibrant-default',
			fg: '--db-adaptive-on-bg-basic-emphasis-50-default'
		},
		'db-color-cool-gray-400': {
			bg: '--db-adaptive-bg-inverted-contrast-low-default',
			fg: '--db-adaptive-on-bg-basic-emphasis-70-default'
		},
		'db-color-cool-gray-500': {
			bg: '--db-adaptive-bg-inverted-contrast-high-default',
			fg: '--db-adaptive-on-bg-basic-emphasis-80-default'
		},
		'db-color-cool-gray-600': {
			bg: '--db-adaptive-bg-inverted-contrast-high-default',
			fg: '--db-adaptive-on-bg-basic-emphasis-90-default'
		},
		'db-color-cool-gray-700': {
			bg: '--db-adaptive-bg-inverted-contrast-max-default',
			fg: '--db-adaptive-on-bg-basic-emphasis-90-default'
		},
		'db-color-cool-gray-800': {
			bg: '--db-adaptive-bg-inverted-contrast-max-default',
			fg: '--db-adaptive-on-bg-basic-emphasis-100-default'
		},
		'db-color-red': {
			bg: '--db-brand-bg-inverted-contrast-low-default',
			fg: '--db-brand-on-bg-basic-emphasis-70-default'
		},
		'db-color-white': {
			bg: '--db-adaptive-bg-basic-level-1-default',
			fg: '--db-adaptive-on-bg-inverted-default'
		},
		'db-color-black': {
			bg: '--db-adaptive-bg-inverted-contrast-max-default',
			fg: '--db-adaptive-on-bg-basic-emphasis-100-default'
		},
		'db-color-success': {
			bg: '--db-successful-bg-inverted-contrast-low-default',
			fg: '--db-successful-on-bg-basic-emphasis-70-default'
		},
		'db-color-success-small-font': {
			bg: '--db-successful-bg-inverted-contrast-low-default',
			fg: '--db-successful-on-bg-basic-emphasis-70-default'
		},
		'db-color-error': {
			bg: '--db-brand-bg-inverted-contrast-low-default',
			fg: '--db-brand-on-bg-basic-emphasis-70-default'
		},
		'db-color-error-small-font': {
			bg: '--db-brand-bg-inverted-contrast-low-default',
			fg: '--db-brand-on-bg-basic-emphasis-70-default'
		},
		'db-color-warning': {
			bg: '--db-brand-bg-inverted-contrast-low-default',
			fg: '--db-brand-on-bg-basic-emphasis-70-default'
		},
		'db-color-warning-small-font': {
			bg: '--db-brand-bg-inverted-contrast-low-default',
			fg: '--db-brand-on-bg-basic-emphasis-70-default'
		},
		'db-color-informative': {
			bg: '--db-informational-bg-inverted-contrast-low-default',
			fg: '--db-informational-on-bg-basic-emphasis-70-default'
		},
		'db-color-informative-small-font': {
			bg: '--db-informational-bg-inverted-contrast-high-default',
			fg: '--db-informational-on-bg-basic-emphasis-80-default'
		},
		'db-color-food-drink': {
			bg: '--db-warning-bg-vibrant-default',
			fg: '--db-warning-on-bg-basic-emphasis-50-default'
		},
		'db-color-health': {
			bg: '--db-burgundy-bg-inverted-contrast-high-default',
			fg: '--db-burgundy-on-bg-basic-emphasis-80-default'
		},
		'db-color-things-to-know': {
			bg: '--db-adaptive-bg-inverted-contrast-low-default',
			fg: '--db-adaptive-on-bg-basic-emphasis-70-default'
		},
		'db-color-community-facilities': {
			bg: '--db-turquoise-bg-vibrant-default',
			fg: '--db-turquoise-on-bg-basic-emphasis-50-default'
		},
		'db-color-db-services-facilities': {
			bg: '--db-blue-bg-inverted-contrast-high-default',
			fg: '--db-blue-on-bg-basic-emphasis-90-default'
		},
		'db-color-shopping': {
			bg: '--db-violet-bg-inverted-contrast-high-default',
			fg: '--db-violet-on-bg-basic-emphasis-80-default'
		},
		'db-color-arts-culture': {
			bg: '--db-pink-bg-inverted-contrast-low-default',
			fg: '--db-pink-on-bg-basic-emphasis-70-default'
		},
		'db-color-leisure': {
			bg: '--db-green-bg-inverted-contrast-low-default',
			fg: '--db-green-on-bg-basic-emphasis-70-default'
		},
		'db-color-services': {
			bg: '--db-informational-bg-vibrant-default',
			fg: '--db-informational-on-bg-basic-emphasis-50-default'
		},
		'db-color-guidance': {
			bg: '--db-adaptive-bg-inverted-contrast-high-default',
			fg: '--db-adaptive-on-bg-basic-emphasis-90-default'
		},
		'db-color-ice': {
			bg: '--db-adaptive-bg-inverted-contrast-max-default',
			fg: '--db-adaptive-on-bg-basic-emphasis-90-default'
		},
		'db-color-ic': {
			bg: '--db-adaptive-bg-inverted-contrast-high-default',
			fg: '--db-adaptive-on-bg-basic-emphasis-80-default'
		},
		'db-color-ec': {
			bg: '--db-adaptive-bg-inverted-contrast-high-default',
			fg: '--db-adaptive-on-bg-basic-emphasis-80-default'
		},
		'db-color-re': {
			bg: '--db-adaptive-bg-inverted-contrast-low-default',
			fg: '--db-adaptive-on-bg-basic-emphasis-70-default'
		},
		'db-color-rb': {
			bg: '--db-adaptive-bg-inverted-contrast-low-default',
			fg: '--db-adaptive-on-bg-basic-emphasis-70-default'
		},
		'db-color-s-bahn': {
			bg: '--db-green-bg-inverted-contrast-low-default',
			fg: '--db-green-on-bg-basic-emphasis-70-default'
		},
		'db-color-u-bahn': {
			bg: '--db-blue-bg-inverted-contrast-high-default',
			fg: '--db-blue-on-bg-basic-emphasis-80-default'
		},
		'db-color-tram': {
			bg: '--db-burgundy-bg-inverted-contrast-high-default',
			fg: '--db-burgundy-on-bg-basic-emphasis-80-default'
		},
		'db-color-bus': {
			bg: '--db-violet-bg-inverted-contrast-high-default',
			fg: '--db-violet-on-bg-basic-emphasis-80-default'
		},
		'db-color-intercity-bus': {
			bg: '--db-pink-bg-inverted-contrast-low-default',
			fg: '--db-pink-on-bg-basic-emphasis-70-default'
		},
		'db-color-call-bus': {
			bg: '--db-violet-bg-inverted-contrast-high-default',
			fg: '--db-violet-on-bg-basic-emphasis-80-default'
		},
		'db-color-ev-bus': {
			bg: '--db-pink-bg-inverted-contrast-high-default',
			fg: '--db-pink-on-bg-basic-emphasis-80-default'
		},
		'db-color-ship': {
			bg: '--db-informational-bg-vibrant-default',
			fg: '--db-informational-on-bg-basic-emphasis-50-default'
		},
		'db-color-airplane': {
			bg: '--db-turquoise-bg-vibrant-default',
			fg: '--db-turquoise-on-bg-basic-emphasis-50-default'
		},
		'db-color-carsharing': {
			bg: '--db-warning-bg-vibrant-default',
			fg: '--db-warning-on-bg-basic-emphasis-50-default'
		},
		'db-color-taxi': {
			bg: '--db-yellow-bg-vibrant-default',
			fg: '--db-yellow-on-bg-basic-emphasis-60-default'
		},
		'db-color-bikesharing': {
			bg: '--db-brand-bg-inverted-contrast-high-default',
			fg: '--db-brand-on-bg-basic-emphasis-80-default'
		},
		'db-color-walk': {
			bg: '--db-adaptive-bg-basic-level-3-default',
			fg: '--db-adaptive-on-bg-basic-emphasis-60-default'
		}
	},
	icons: {
		account: 'person',
		add: 'plus',
		add_circle: 'plus',
		add_link: 'link_chain',
		alarm: 'alarm_clock',
		alarm_add: 'alarm_clock_plus',
		alert: 'bell',
		alert_off: 'bell_disabled',
		artificial_intelligence: 'artificial_intelligence',
		attachment: 'paper_clip',
		augmented_reality: 'augmented_reality',
		block: 'block',
		bookmark: 'bookmark',
		bug: 'bug',
		build: 'wrench',
		calendar: 'calendar',
		camera: 'camera',
		cash: 'cash',
		check_circle: 'check_circle',
		cloud: 'cloud',
		cloud_download: 'cloud_download',
		cloud_upload: 'cloud_upload',
		copy: 'copy',
		credit_card: 'credit_card',
		dashboard: 'speedometer',
		delete: 'bin',
		discount: 'discount',
		document: 'document',
		document_check: 'document_check',
		document_cross: 'document_cross',
		done: 'check',
		download: 'download',
		drag_and_drop: 'dots_drag_and_drop',
		edit: 'pen',
		euro_sign: 'euro_sign',
		face_delighted: 'face_delighted',
		face_disappointed: 'face_disappointed',
		face_neutral: 'face_neutral',
		face_sad: 'face_sad',
		face_smiling: 'face_smiling',
		filter: 'funnel',
		fingerprint: 'fingerprint',
		folder: 'folder',
		folder_open: 'folder_open',
		generic_card: 'generic_card',
		giftcard: 'gift',
		hearing: 'ear',
		hearing_disabled: 'ear_disabled',
		heart: 'heart',
		help: 'question_mark_circle',
		id_card: 'id_card',
		image: 'image',
		info: 'information_circle',
		key: 'key',
		legal: 'paragraph_mark',
		lightbulb: 'light_bulb',
		lock_close: 'lock_closed',
		lock_open: 'lock_open',
		log_out: 'log_out',
		logbook: 'notebook',
		minus: 'minus',
		piggybank: 'piggy_bank',
		pin: 'pin',
		print: 'printer',
		pulse_wave: 'pulse_wave',
		push_button: 'finger_pushing_button',
		remove: 'minus',
		resize: 'resize',
		resize_handle_corner: 'resize_handle_corner',
		save: 'save',
		schedule: 'clock',
		search: 'magnifying_glass',
		send: 'paper_plane',
		sepa: 'sepa',
		settings: 'gear_wheel',
		share: 'share',
		shopping_bag: 'shopping_bag',
		shopping_basket: 'shopping_basket',
		shopping_basket_disabled: 'shopping_basket_disabled',
		shopping_cart: 'shopping_cart',
		shopping_cart_disabled: 'shopping_cart_disabled',
		sort_down: 'sort_down',
		sort_up: 'sort_up',
		star: 'star',
		swap_horizontal: 'arrows_horizontal',
		swap_vertical: 'arrows_vertical',
		thumb_up: 'thumbs_up',
		thumb_up_down: 'thumbs_up',
		translation: 'translation',
		undo: 'undo',
		upload: 'upload',
		visibility_off: 'eye_disabled',
		visibility: 'eye',
		voucher: 'voucher',
		website: 'globe',
		zoom_in: 'zoom_in',
		zoom_out: 'zoom_out',
		clapperboard: 'play',
		fast_backward: 'fast_backward',
		fast_backward_10: 'fast_backward_10',
		fast_backward_30: 'fast_backward_30',
		fast_backward_empty: 'fast_backward_empty',
		fast_forward: 'fast_forward',
		fast_forward_10: 'fast_forward_10',
		fast_forward_30: 'fast_forward_30',
		fast_forward_empty: 'fast_forward_empty',
		microphone: 'microphone',
		pause: 'pause',
		play: 'play',
		skip_backward: 'skip_backward',
		skip_forward: 'skip_forward',
		stop: 'stop',
		subtitles: 'subtitles',
		volume_down: 'volume_down',
		volume_mute: 'volume_silent',
		volume_off: 'volume_disabled',
		volume_up: 'volume_up',
		logo: 'db',
		call: 'telephone',
		chat: 'speech_bubbles',
		conversation: 'speech_bubbles',
		fax: 'fax_machine',
		feedback: 'speech_bubble_exclamation_mark',
		mail: 'envelope',
		mobile_off: 'mobile_phone_disabled',
		mobile_phone: 'mobile_phone',
		question: 'question_mark_circle',
		receive_item: 'receive_item',
		share_item: 'share_item',
		wifi: 'wifi',
		wifi_off: 'wifi_disabled',
		mask: 'mask',
		playground: 'toys',
		restricted_mobility_toilet: 'restricted_mobility_toilet',
		shower: 'shower',
		shower_men: 'shower_men',
		shower_women: 'shower_women',
		sink: 'hand_washing',
		wc: 'toilets',
		wc_men: 'toilet_men',
		wc_sign: 'wc_sign',
		wc_women: 'toilet_women',
		air_condition: 'air_condition',
		buggy: 'stroller',
		clothing_hanger: 'clothes_hanger',
		day: 'sun',
		dog: 'dog',
		entry_aid: 'vehicle_entry_aid',
		environmental_mobility_check: 'leaf',
		hydrogen: 'water_drop',
		iceportal: 'ice_portal',
		luggage_compartment: 'luggage_compartment',
		luggage_rack: 'luggage_rack',
		marketplace: 'market',
		medical: 'medical_cross',
		night: 'moon',
		no_smoking: 'cigarette_disabled',
		person_with_cane: 'person_with_blind_cane',
		person_with_rollator: 'person_with_rollator',
		platform: 'platform',
		power_outlet: 'power_socket',
		regioguide: 'regio_guide',
		reservation: 'reservation',
		standing_room: 'standing_room',
		steppless_entry: 'stepless_entry',
		support_dog: 'support_dog',
		breakfast: 'breakfast',
		coffee_cup: 'cup',
		drink: 'beverage',
		restaurant: 'knife_and_fork',
		database: 'database',
		'1st_class': 'first_class',
		'2nd_class': 'second_class',
		alternative_connection: 'alternative_connection',
		booking: 'booking',
		capacity_indicator: 'capacity_indicator_moderate',
		capacity_indicator_fully_booked: 'capacity_indicator_fully_booked',
		capacity_indicator_high: 'capacity_indicator_high',
		capacity_indicator_low: 'capacity_indicator_low',
		destination: 'map_pin',
		intermediary_stop: 'circle_small',
		mixed_class: 'mixed_class',
		monochrome_capacity_indicator_high: 'capacity_indicator_high',
		monochrome_capacity_indicator_low: 'capacity_indicator_low',
		monochrome_capacity_indicator_moderate: 'capacity_indicator_moderate',
		round_trip: 'round_trip',
		single_trip: 'single_trip',
		start: 'start',
		compass: 'compass',
		gps: 'location_arrow',
		gps_north: 'location_arrow_north',
		home: 'house',
		map: 'map',
		navigation_straight: 'navigation_straight',
		navigation_to_left: 'navigation_to_left',
		navigation_to_right: 'navigation_to_right',
		'navigation_u-turn': 'navigation_u_turn',
		parking: 'parking',
		place: 'location_pin',
		set_position: 'location_crosshairs',
		station: 'station',
		stop_sign: 'road_sign',
		train_station: 'train_station',
		arrow_back: 'arrow_left',
		arrow_down: 'arrow_down',
		arrow_forward: 'arrow_right',
		arrow_up: 'arrow_up',
		cancel: 'cross',
		chevron_left: 'chevron_left',
		chevron_right: 'chevron_right',
		close: 'cross',
		expand_less: 'chevron_up',
		expand_more: 'chevron_down',
		fullscreen: 'fullscreen',
		fullscreen_exit: 'fullscreen_exit',
		grid_view: 'grid',
		link: 'link_chain',
		link_external: 'arrow_up_right',
		list: 'list',
		menu: 'menu',
		more_horizontal: 'more_horizontal',
		more_vertical: 'more_vertical',
		refresh: 'circular_arrows',
		error: 'cross_circle',
		notify: 'bell',
		notify_cutoff: 'bell',
		warning: 'exclamation_mark_triangle',
		aisle: 'aisle',
		aisle_not_available: 'aisle_not_available',
		bed: 'bed',
		childrens_compartment: 'childrens_compartment',
		couchette: 'couchette',
		elderly: 'person_with_wheelchair',
		handicapped: 'person_with_wheelchair',
		parent_child_compartment: 'family_compartment',
		priority: 'traveler_with_reduced_mobility',
		quiet_zone: 'quiet_zone',
		table: 'seat_table',
		traveler_with_reduced_mobility: 'traveler_with_reduced_mobility',
		window: 'seat_window',
		bahnbonus: 'bahnbonus',
		bahnbonus_card: 'bahnbonus_card',
		bahncard: 'bahncard',
		best_price: 'discount',
		commuter_ticket: 'ticket_commuter',
		komfort_check_in: 'komfort_check_in',
		komfort_check_in_check: 'komfort_check_in_check',
		komfort_check_in_circle: 'komfort_check_in_circle',
		multiple_cards: 'discount_cards',
		multiple_passenger: 'persons',
		my_travel: 'my_journey',
		outward_journey: 'outward_journey',
		qr_code: 'qr_code',
		qr_code_scan: 'qr_code_scan',
		return_journey: 'return_journey',
		ticket: 'ticket',
		ticket_discount: 'ticket_discount',
		ticket_subscription: 'ticket_subscription',
		ticket_multiple: 'tickets',
		time_outward_journey: 'time_outward_journey',
		time_return_journey: 'time_return_journey',
		timetable: 'timetable',
		travel_insurance: 'shield_check',
		airplane: 'airplane',
		bicycle: 'bike',
		bicycle_trailer: 'bike_trailer',
		call_a_bike: 'call_a_bike',
		car: 'car',
		car_sequence: 'coach_sequence',
		carsharing: 'car_sharing',
		electric_locomotive: 'electric_locomotive',
		electric_scooter: 'electric_scooter',
		ev_bus: 'bus',
		ev_car: 'electric_car',
		ev_train: 'train',
		ferry: 'boat',
		handcart: 'handcart',
		ice: 'train',
		ice_side_view: 'ice_side_view',
		intercity_train: 'ic_and_ec',
		local_bus: 'bus',
		local_train: 'local_train',
		long_distance_bus: 'long_distance_bus',
		rail_and_fly: 'rail_and_fly',
		railroad_car: 'coach',
		s_bahn: 's_bahn',
		scooter: 'scooter',
		sev: 'replacement_service',
		speedboat: 'ship',
		sprinter: 'sprinter',
		subway: 'subway',
		taxi: 'taxi',
		train_and_car: 'train_and_car',
		tram: 'tram',
		walking: 'pedestrian',
		walking_fast: 'walking_fast'
	}
} as const;
