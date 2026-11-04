/*
 * @db-ux/core-theme-tools/detector — shared detector entry barrel.
 *
 * The single import path for the source-scanning detector shared between the
 * new `@db-ux/core-theme-tools` Bundler_Plugin/CLI and the legacy
 * `@db-ux/core-vite-plugin` (Requirement 9.1). The two packages stay standalone
 * and independently published — the legacy plugin re-exports the legacy
 * functions from its own `src/detector.ts`, so its public API and default
 * behavior are unchanged (Requirements 12.1, 12.3, 12.6).
 *
 * - `./detect-legacy.ts` holds the discovery + component/color/density/font-size
 *   detection the legacy Vite plugin uses, extracted verbatim (Task 20.1).
 * - `./detect-usage.ts` holds the adaptive `UsageSignal` contract and
 *   `detectUsage`, which the CLI/unplugin consume (extended in Task 20.2).
 */

export { COMPONENT_REQUIREMENTS } from './component-requirements.js';
export type { ComponentRequirement } from './component-requirements.js';
export {
	detectColors,
	detectComponents,
	detectDensities,
	detectFontSizes,
	discoverAll,
	resolvePackagePath,
	scanComponentDependencies
} from './detect-legacy.js';
export { detectUsage } from './detect-usage.js';
export type { ExcludeSignal, UsageSignal } from './detect-usage.js';
