/*
 * Shared CLI configuration resolution (Component 2 of the core-theme-tools
 * design; Requirements 7.2, 7.4).
 *
 * This module owns the `ResolvedConfig` contract and the cosmiconfig-backed
 * `resolveConfig` helper. It is deliberately a standalone module so BOTH the
 * `generate` subcommand and the `init` subcommand import their config handling
 * from one place rather than each wiring cosmiconfig independently.
 *
 * The committed config file is the SINGLE source of truth — there are no
 * per-field CLI flags. cosmiconfig searches a `db-ux-theme-tools` key in
 * `package.json` and `db-ux-theme-tools.config.*` files (project root or a
 * `.config/` folder), or loads one explicit file when the CLI is given
 * `--config <path>`. `.json` / `.yaml` / `.js` / `.cjs` / `.mjs` / `.ts` are all
 * supported.
 */
import process from 'node:process';

import { cosmiconfig } from 'cosmiconfig';

import type { HighContrastMode, LayerOption } from '../types/generate.js';
import type { MaterialName } from '../types/theme.js';

/**
 * @public The cosmiconfig module name the CLI searches for. The `db-ux-theme-tools`
 * key in `package.json` and the `db-ux-theme-tools.config.*` files are derived
 * from this name (see {@link CONFIG_SEARCH_PLACES}).
 */
export const CONFIG_MODULE_NAME = 'db-ux-theme-tools';

/**
 * @public The cosmiconfig search places, in priority order. A
 * `db-ux-theme-tools` key in `package.json`, then a `db-ux-theme-tools.config.*`
 * file in the project root, then the same under a `.config/` folder.
 *
 * Every extension here (including `.ts`) is handled by cosmiconfig's built-in
 * default loaders, so only `searchPlaces` is customized.
 */
export const CONFIG_SEARCH_PLACES: readonly string[] = [
	'package.json',
	`${CONFIG_MODULE_NAME}.config.json`,
	`${CONFIG_MODULE_NAME}.config.yaml`,
	`${CONFIG_MODULE_NAME}.config.yml`,
	`${CONFIG_MODULE_NAME}.config.js`,
	`${CONFIG_MODULE_NAME}.config.ts`,
	`${CONFIG_MODULE_NAME}.config.mjs`,
	`${CONFIG_MODULE_NAME}.config.cjs`,
	`.config/${CONFIG_MODULE_NAME}.config.json`,
	`.config/${CONFIG_MODULE_NAME}.config.yaml`,
	`.config/${CONFIG_MODULE_NAME}.config.yml`,
	`.config/${CONFIG_MODULE_NAME}.config.js`,
	`.config/${CONFIG_MODULE_NAME}.config.ts`,
	`.config/${CONFIG_MODULE_NAME}.config.mjs`,
	`.config/${CONFIG_MODULE_NAME}.config.cjs`
];

/**
 * @public The resolved CLI configuration (design Component 2).
 *
 * cosmiconfig sources: a `db-ux-theme-tools` key in `package.json`, a
 * `db-ux-theme-tools.config.*` file (project root or `.config/`), or an
 * explicit file via `--config <path>`. The config file is the single source of
 * truth; there are no per-field CLI flags.
 */
export type ResolvedConfig = {
	/** Path to the `theme.json` the Core_Generator loads. */
	theme: string;
	/** Output `.css` path the generated adaptive CSS is written to. */
	out: string;
	/** Colors to keep. Omit => all colors in the theme (baseline always kept). */
	colors?: string[];
	/** Materials to keep. Omit => all materials (`filled-1` always kept). */
	materials?: MaterialName[];
	/**
	 * Colors/materials to drop even when detected or required by a used
	 * component. The escape hatch for component-aware detection (e.g. exclude
	 * the informational `blue` a `DBNotification` could render but this app
	 * never shows). The required baseline is always kept regardless.
	 */
	exclude?: {
		colors?: string[];
		materials?: MaterialName[];
	};
	/**
	 * Which high-contrast branch(es) to emit (see {@link HighContrastMode}).
	 * Defaults to `"both"`.
	 */
	highContrast: HighContrastMode;
	/**
	 * The named CSS cascade layer the generated stylesheet is wrapped in (see
	 * {@link LayerOption}). Omit => `"db-ux-adaptive"`; a string sets the name;
	 * `false` emits no outer layer.
	 */
	layer?: LayerOption;
	/** Optional source globs for point-in-time usage detection. */
	scan?: string[];
};

/** The valid {@link HighContrastMode} values, for narrowing raw config input. */
const HIGH_CONTRAST_MODES: ReadonlySet<HighContrastMode> = new Set([
	'both',
	'media-query',
	'data-attribute',
	'none'
]);

const isRecord = (value: unknown): value is Record<string, unknown> =>
	typeof value === 'object' && value !== null && !Array.isArray(value);

const asStringArray = (value: unknown): string[] | undefined =>
	Array.isArray(value)
		? value.filter((item): item is string => typeof item === 'string')
		: undefined;

/**
 * Narrow a raw `exclude` value into `{ colors?, materials? }`, dropping any
 * mistyped field. Returns `undefined` when nothing usable is present, so the
 * common no-`exclude` case contributes nothing.
 */
const narrowExclude = (
	value: unknown
): ResolvedConfig['exclude'] | undefined => {
	if (!isRecord(value)) {
		return undefined;
	}
	const colors = asStringArray(value.colors);
	const materials = asStringArray(value.materials) as
		MaterialName[] | undefined;
	return colors || materials ? { colors, materials } : undefined;
};

/**
 * Narrow a raw `layer` value into a {@link LayerOption}: a non-empty string
 * (the layer name) or `false` (no outer layer). Anything else (including `true`
 * or an empty string) is dropped, so `resolveConfig` falls back to the default.
 */
const narrowLayer = (value: unknown): LayerOption | undefined => {
	if (value === false) {
		return false;
	}
	if (typeof value === 'string' && value.length > 0) {
		return value;
	}
	return undefined;
};

/**
 * Narrow a raw cosmiconfig result into the subset of {@link ResolvedConfig}
 * fields it defines. Unknown or mistyped fields are dropped rather than
 * trusted, so a malformed config contributes nothing instead of corrupting the
 * run; the required `theme`/`out` are enforced by {@link resolveConfig}.
 */
const narrowConfig = (raw: unknown): Partial<ResolvedConfig> => {
	if (!isRecord(raw)) {
		return {};
	}

	const materials = asStringArray(raw.materials);

	return {
		theme: typeof raw.theme === 'string' ? raw.theme : undefined,
		out: typeof raw.out === 'string' ? raw.out : undefined,
		colors: asStringArray(raw.colors),
		materials: materials as MaterialName[] | undefined,
		exclude: narrowExclude(raw.exclude),
		highContrast: HIGH_CONTRAST_MODES.has(
			raw.highContrast as HighContrastMode
		)
			? (raw.highContrast as HighContrastMode)
			: undefined,
		layer: narrowLayer(raw.layer),
		scan: asStringArray(raw.scan)
	};
};

/**
 * @public Resolve the CLI configuration from a committed config file — the
 * single source of truth for the CLI (and plugins).
 *
 * The config file is the ONLY input: there are no per-field CLI flags. When
 * `configPath` is given, that exact file is loaded; otherwise cosmiconfig
 * discovers the sources in {@link CONFIG_SEARCH_PLACES} (a `db-ux-theme-tools`
 * key in `package.json`, or a `db-ux-theme-tools.config.*` file in the project
 * root or `.config/`) upward from `searchFrom`.
 *
 * `highContrast` defaults to true when the config omits it. Throws when no
 * config is found, or when the config is missing the required `theme` / `out`.
 *
 * @param configPath Explicit config file to load (from `--config`). Omit to discover.
 * @param searchFrom Directory cosmiconfig searches upward from (defaults to the process cwd).
 */
export const resolveConfig = async (
	configPath?: string,
	searchFrom: string = process.cwd()
): Promise<ResolvedConfig> => {
	const explorer = cosmiconfig(CONFIG_MODULE_NAME, {
		searchPlaces: [...CONFIG_SEARCH_PLACES]
	});
	const result = configPath
		? await explorer.load(configPath)
		: await explorer.search(searchFrom);

	if (!result) {
		throw new Error(
			configPath
				? `No db-ux-theme-tools configuration found at "${configPath}".`
				: `No db-ux-theme-tools configuration found. Create a ${CONFIG_MODULE_NAME}.config.json (or a "${CONFIG_MODULE_NAME}" key in package.json), or pass --config <path>.`
		);
	}

	const config = narrowConfig(result.config);

	const isMissing = (value: string | undefined): boolean =>
		typeof value !== 'string' || value.length === 0;
	const missing = [
		isMissing(config.theme) ? 'theme' : undefined,
		isMissing(config.out) ? 'out' : undefined
	].filter((field): field is string => field !== undefined);
	if (missing.length > 0) {
		throw new Error(
			`Missing required configuration: ${missing.join(
				', '
			)}. Set ${missing.join(' / ')} in your db-ux config (${
				result.filepath
			}).`
		);
	}

	return {
		theme: config.theme!,
		out: config.out!,
		colors: config.colors,
		materials: config.materials,
		exclude: config.exclude,
		// Default to "both" when the config omits it.
		highContrast: config.highContrast ?? 'both',
		// Omit (undefined) => the core `generate` applies the default layer.
		layer: config.layer,
		scan: config.scan
	};
};
