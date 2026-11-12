/*
 * @db-ux/core-theme-tools — core entry barrel.
 *
 * This is the framework-agnostic core-generator surface (package entry `.`).
 * A consumer authors the nested per-color `palette` / `origin` / `on-origin`
 * input (`ThemeInput`), `expandTheme` turns it into the internal `Theme`, and
 * `generate` emits the material CSS (`--db-bg-*`, `--db-text-*`, ...) resolved
 * to concrete `color-mix(light-dark(hex, hex))` values, optionally optimized.
 */
export { expandTheme } from './generate/expand-theme.js';
export { generate, generateThemeFromFile } from './generate/generate.js';
export {
	OpacityRef,
	OriginRef,
	materials,
	resolveMaterials
} from './generate/materials-config.js';
export type { SchemeLeaf } from './generate/materials-config.js';
export { generateMaterialsCss } from './generate/materials.js';
export { loadTheme } from './load-theme.js';
export {
	DEFAULT_LAYER,
	DYNAMIC_PREFIXES,
	ThemeValidationError
} from './types/generate.js';
export type {
	GenerateOptions,
	HighContrastMode,
	LayerOption
} from './types/generate.js';
export { requiredBaseline } from './types/theme.js';
export type {
	BackdropRoleAnchor,
	BaseColorName,
	ColorIndex,
	ColorInput,
	ColorName,
	ColorPalette,
	ContainerContrastProps,
	ContentContrastProps,
	LightDark,
	MaterialConfig,
	MaterialDefinition,
	MaterialDefinitions,
	MaterialName,
	MaterialRoleRef,
	OnOriginState,
	OriginStates,
	OverwriteColors,
	TapHighlightRoleAnchor,
	Theme,
	ThemeInput,
	ThemeRoleAnchor,
	ThemeRoleAnchors
} from './types/theme.js';
