/*
 * The CLI `generate` subcommand action.
 *
 * `runGenerate` resolves the committed configuration (the single source of
 * truth — via cosmiconfig discovery, or an explicit `--config <path>`), loads +
 * validates the configured `theme.json` through the core `loadTheme`, runs the
 * core `generate` with the config's optimization context, and writes the
 * adaptive material CSS to the configured `out` path.
 *
 * Kept in its own module (imported by `src/cli/index.ts`) so the `generate`
 * behaviour stays isolated from the `init` subcommand; both share `./config.ts`
 * for config resolution.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import process from 'node:process';

import { detectUsage } from '../detector/index.js';
import { generate } from '../generate/generate.js';
import { loadTheme } from '../load-theme.js';
import type { GenerateOptions } from '../types/generate.js';
import type { MaterialName } from '../types/theme.js';
import { resolveConfig } from './config.js';

/**
 * Resolve the colors/materials keep-sets `generate` should receive from the
 * config, in one of two modes:
 *
 * - **Explicit** — the config pins `colors` and/or `materials`. Those lists are
 *   used as-is (an omitted side means "keep all" for that dimension), then
 *   `exclude` is subtracted.
 * - **Detected** — neither is pinned but a `scan` is configured. The shared
 *   Detector scans those globs (component-aware: a used component contributes
 *   the colors/materials its template can emit), and `exclude` is applied by
 *   the Detector itself. This is the CLI-first flow for frameworks whose
 *   builder cannot host the bundler plugin (e.g. Angular): run `generate`
 *   before `ng build` and import the emitted CSS.
 *
 * With neither a keep-list nor a `scan`, the full matrix is emitted (minus any
 * `exclude`, which only has an effect once a dimension is narrowed).
 */
const resolveKeepSets = async (
	config: Awaited<ReturnType<typeof resolveConfig>>,
	searchFrom: string
): Promise<Pick<GenerateOptions, 'colors' | 'materials'>> => {
	const excludeColors = new Set(config.exclude?.colors);
	const excludeMaterials = new Set<MaterialName>(config.exclude?.materials);

	const hasExplicit =
		config.colors !== undefined || config.materials !== undefined;
	if (!hasExplicit && config.scan && config.scan.length > 0) {
		const detected = await detectUsage(
			searchFrom,
			config.scan,
			undefined,
			config.exclude
		);
		return {
			colors: [...detected.colors],
			materials: [...detected.materials]
		};
	}

	return {
		colors: config.colors?.filter((color) => !excludeColors.has(color)),
		materials: config.materials?.filter(
			(material) => !excludeMaterials.has(material)
		)
	};
};

/**
 * @public Resolve configuration, generate the optimized adaptive CSS, and write
 * it to the configured output path.
 *
 * The config file is the only input (no per-field flags). The keep-sets are
 * resolved by {@link resolveKeepSets} — pinned `colors`/`materials`, or
 * component-aware Detector output when only a `scan` is configured — and
 * `highContrast` is passed through. `theme` / `out` are resolved relative to
 * `searchFrom`, and the `out` path's parent directory is created if missing.
 * Returns the absolute path written, so a caller (and the tests) can report or
 * assert on it.
 *
 * @param configPath Explicit config file to load (from `--config`). Omit to discover.
 * @param searchFrom Directory cosmiconfig and relative paths resolve from (defaults to the process cwd).
 */
export const runGenerate = async (
	configPath?: string,
	searchFrom: string = process.cwd()
): Promise<string> => {
	const config = await resolveConfig(configPath, searchFrom);

	const theme = await loadTheme(resolve(searchFrom, config.theme));

	const { colors, materials } = await resolveKeepSets(config, searchFrom);
	const options: GenerateOptions = {
		colors,
		materials,
		highContrast: config.highContrast,
		layer: config.layer
	};
	const css = generate(theme, options);

	const outPath = resolve(searchFrom, config.out);
	await mkdir(dirname(outPath), { recursive: true });
	await writeFile(outPath, css, 'utf8');

	return outPath;
};
