/*
 * The CLI `init` subcommand action (Component 2 of the core-theme-tools
 * design; Requirement 7.3).
 *
 * `runInit` scans the project with the shared Detector (via the
 * `./detector.js` interface — a placeholder until Task 20 ships the real
 * scanner) and writes a starter configuration the consumer can hand-tune. The
 * starter config is the `ResolvedConfig` shape (owned by `./config.ts`, shared
 * with the `generate` subcommand) recording the detected `colors`,
 * `materials`, and `highContrast` opt-in, plus placeholder `theme` / `out`
 * paths the consumer fills in before running `generate`.
 *
 * Kept in its own module (imported by `src/cli/index.ts`) so the `init`
 * behaviour stays isolated from the concurrently-developed `generate`
 * subcommand; both share `./config.ts` for the config contract.
 */
import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import process from 'node:process';
import { CONFIG_MODULE_NAME, type ResolvedConfig } from './config.js';
import { detectUsage } from './detector.js';

/**
The default source globs the `init` scan covers when no `scan` globs are
supplied — the framework file types adaptive color/material usage appears in
(mirrors the design's Bundler_Plugin default scan coverage).
*/
const DEFAULT_SCAN_GLOBS: readonly string[] = ['**/*.{vue,jsx,tsx,ts,js,html}'];

/**
The starter config filename `init` writes (a cosmiconfig search place).
*/
const STARTER_CONFIG_FILENAME = `${CONFIG_MODULE_NAME}.config.json`;

/**
Placeholder paths the consumer replaces before running `generate`.
*/
const STARTER_THEME_PATH = 'theme.json';
const STARTER_OUT_PATH = 'db-ux-theme.css';

/**
Scan the project and write a starter configuration recording the detected
colors, materials, and high-contrast opt-in (Requirement 7.3).

The scan runs through the shared Detector interface (`detectUsage`); its
`UsageSignal` is serialized into a `ResolvedConfig`-shaped
`.db-uxrc.json`. `theme` and `out` are written as placeholder paths for the
consumer to fill in, since `init` cannot know where the theme lives or where
the CSS should go. Returns the absolute path written so a caller (and the
tests) can report or assert on it.

@public
@param root Project root the scan starts from and the config is written to (defaults to the process cwd).
@param scan Optional source globs to scan; defaults to the standard framework file types.
*/
export const runInit = async (
	root: string = process.cwd(),
	scan: string[] = [...DEFAULT_SCAN_GLOBS]
): Promise<string> => {
	const usage = await detectUsage(root, scan);

	/*
	 * Record the detected usage as a hand-tunable starter config. `colors` and
	 * `materials` are the detected sets (sorted for a stable, diff-friendly
	 * file); `highContrast` is the mode implied by the detected opt-in — `"both"`
	 * when a `[data-contrast="more"]` attribute was found, else `"media-query"`
	 * (still honor `prefers-contrast: more`). `scan` is written so a later
	 * `generate` run re-detects from the same globs. `theme` and `out` are
	 * placeholders the consumer edits.
	 */
	const starter: ResolvedConfig = {
		theme: STARTER_THEME_PATH,
		out: STARTER_OUT_PATH,
		colors: [...usage.colors].toSorted(),
		materials: [...usage.materials].toSorted(),
		/*
		 * Empty escape-hatch placeholder so the consumer discovers the knob:
		 * component-aware detection keeps every color/material a used component
		 * could render (e.g. all four semantic colors for `DBNotification`), and
		 * `exclude` is how they trim a variant they never show. Left empty here
		 * since `init` cannot know which variants the app actually uses.
		 */
		exclude: { colors: [], materials: [] },
		highContrast: usage.highContrast ? 'both' : 'media-query',
		scan
	};

	const outPath = resolve(root, STARTER_CONFIG_FILENAME);
	await writeFile(
		outPath,
		`${JSON.stringify(starter, null, '\t')}\n`,
		'utf8'
	);

	return outPath;
};
