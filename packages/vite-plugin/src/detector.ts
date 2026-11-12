/*
 * Detector — now shared with `@db-ux/core-theme-tools` (Requirement 9.1).
 *
 * The source-scanning detector this plugin uses was extracted into the
 * package-owned shared module `@db-ux/core-theme-tools/detector` so BOTH this
 * legacy plugin AND the new theme-tools Bundler_Plugin/CLI consume one detector
 * from a single import path (shared, NOT merged — the two packages stay
 * standalone and independently published, Requirements 12.1/12.3/12.6).
 *
 * This file stays the plugin's internal detector import surface and re-exports
 * the shared functions verbatim, so `src/index.ts` and the plugin's public API
 * and default behavior are unchanged. The logic itself is identical to what
 * previously lived here — it was moved byte-for-byte into the shared module.
 */

export {
	detectColors,
	detectComponents,
	detectDensities,
	detectFontSizes,
	discoverAll,
	scanComponentDependencies
} from '@db-ux/core-theme-tools/detector';
