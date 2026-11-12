/*
 * @db-ux/core-theme-tools/plugin — the shared unplugin factory (design
 * Component 3; Requirements 8.1, 8.6, 8.7).
 *
 * One plugin, every major bundler. `createUnplugin` from the `unplugin` library
 * turns a single factory into the per-bundler outputs (`.vite`, `.webpack`,
 * `.esbuild`, `.rollup`, `.rspack`, `.farm`), which the thin per-bundler entry
 * files (`./vite.ts`, `./webpack.ts`, `./esbuild.ts`) re-export so the
 * package.json `exports` map resolves `/vite`, `/webpack`, `/esbuild`
 * (Requirement 8.1). The package.json declares each bundler peer OPTIONAL via
 * `peerDependenciesMeta` (Requirement 8.6), so a consumer who uses an entry
 * whose peer is absent gets the standard module-resolution error for that peer
 * (Requirement 8.7).
 *
 * This module is the WRAPPER SHELL (Task 21.1) with the build-mode
 * optimization filled in (Task 21.2): the options type, the factory, and the
 * virtual-CSS-module plumbing (`resolveId` / `load`) now run the Detector and
 * call the core with the Required_Baseline plus the detected set, dropping
 * high-contrast unless detected/configured and honoring `include`
 * (Requirements 8.2-8.5).
 */

import { createRequire } from 'node:module';
import { resolve } from 'node:path';
import process from 'node:process';
import { createUnplugin, type UnpluginInstance } from 'unplugin';

import { detectUsage, type UsageSignal } from '../detector/detect-usage.js';
import { generate } from '../generate/generate.js';
import { loadTheme } from '../load-theme.js';
import type {
	GenerateOptions,
	HighContrastMode,
	LayerOption
} from '../types/generate.js';
import type { MaterialName } from '../types/theme.js';

/**
 * Assert the webpack/rspack consumer has a CSS loader able to handle the
 * plugin's virtual `.css` module. webpack has no built-in CSS handling, so the
 * virtual CSS import needs the project's own CSS chain (`css-loader`, usually
 * with `mini-css-extract-plugin` or `style-loader`) — the same chain any CSS
 * import in a webpack project already relies on. These are therefore NOT
 * declared as peer dependencies (Vite/Rollup/esbuild consumers do not need
 * them); instead this guard fails fast with install guidance when `css-loader`
 * cannot be resolved from the project root.
 *
 * `from` is the project directory the resolution is anchored to (the compiler
 * context), so a monorepo's hoisted or per-package `css-loader` both resolve.
 */
const assertCssLoaderAvailable = (from: string): void => {
	const requireFrom = createRequire(resolve(from, 'noop.js'));
	try {
		requireFrom.resolve('css-loader');
	} catch {
		throw new Error(
			'[@db-ux/core-theme-tools] The webpack plugin emits a virtual CSS ' +
				'module, which webpack can only bundle through a CSS loader. ' +
				'Install `css-loader` (and typically `mini-css-extract-plugin` ' +
				'or `style-loader`) and add a rule for `.css` files. See the ' +
				'webpack setup in the plugin README.'
		);
	}
};

/**
 * @public Options accepted by every per-bundler entry (`/vite`, `/webpack`,
 * `/esbuild`, ...). The same shape backs all bundlers because the factory is
 * bundler-agnostic (design Component 3).
 */
export type ThemeToolsPluginOptions = {
	/** Path to the `theme.json` carrying the color VALUES to generate from. */
	theme: string;
	/**
	 * Colors/materials to force-keep even when the Detector does not find them
	 * (e.g. runtime-only colors). Honored by the build-mode optimization in
	 * task 21.2 (Requirement 8.5).
	 */
	include?: {
		colors?: string[];
		materials?: MaterialName[];
	};
	/**
	 * Colors/materials to drop even when the Detector (or a used component)
	 * would otherwise keep them. The escape hatch for component-aware
	 * detection: a used component can pull in every color it could render (e.g.
	 * `DBNotification` -> `blue`/`red`/`yellow`/`green`), so a consumer who
	 * never shows, say, the informational (`blue`) variant excludes it here.
	 * The required baseline (theme default color + `filled-1`) is always kept,
	 * so excluding a baseline value is a no-op.
	 */
	exclude?: {
		colors?: string[];
		materials?: MaterialName[];
	};
	/**
	 * Which high-contrast branch(es) to emit (see {@link HighContrastMode}).
	 * When omitted, the mode is chosen automatically: if the Detector finds a
	 * `[data-contrast="more"]` opt-in in the project, `"both"` (attribute +
	 * media query); otherwise `"media-query"` (honor `prefers-contrast: more`
	 * without shipping the unused attribute branch).
	 */
	highContrast?: HighContrastMode;
	/**
	 * The named CSS cascade layer the generated stylesheet is wrapped in (see
	 * {@link LayerOption}). Omit => `"db-ux-adaptive"`; a string sets the layer
	 * name; `false` emits no outer layer. Declare the cross-bundle order
	 * (`@layer db-ux, db-theme, db-ux-adaptive;`) in your own entry file.
	 */
	layer?: LayerOption;
	/**
	 * Source globs the Detector scans. Defaults to the common
	 * vue/jsx/tsx/ts/html sources.
	 */
	scan?: string[];
	/** Emit verbose diagnostics about detection and generation. */
	debug?: boolean;
};

/*
 * The virtual module specifier a consumer imports to receive the generated
 * adaptive CSS.
 *
 * It is deliberately SCHEME-LESS (no `virtual:` prefix). A `virtual:` scheme
 * works in Vite/Rollup but webpack's module factory rejects it with
 * `UnhandledSchemeError` before the plugin's `resolveId` can claim it. A plain
 * specifier is claimed by `resolveId` across every bundler, and unplugin backs
 * it with a real fake file for webpack/rspack via its `FakeVirtualModulesPlugin`.
 *
 * The `.css` suffix routes the loaded module through the consumer's CSS loader
 * rule in webpack. The hooks return the specifier unchanged (no `\0` prefix,
 * which is Rollup-only and unreadable by webpack), letting unplugin encode it
 * per bundler.
 */
const VIRTUAL_MODULE_ID = 'db-ux-theme-tools.css';
const RESOLVED_VIRTUAL_MODULE_ID = VIRTUAL_MODULE_ID;

/* The default source globs the Detector scans when `scan` is omitted. */
const DEFAULT_SCAN_GLOBS: readonly string[] = [
	'**/*.vue',
	'**/*.jsx',
	'**/*.tsx',
	'**/*.ts',
	'**/*.html'
];

/**
 * @public The shared unplugin instance. Its per-bundler factory outputs
 * (`dbUxThemeToolsPlugin.vite`, `.webpack`, `.esbuild`, ...) are what the
 * per-bundler entry files re-export (Requirement 8.1).
 */
export const dbUxThemeToolsPlugin: UnpluginInstance<ThemeToolsPluginOptions> =
	createUnplugin((options: ThemeToolsPluginOptions) => {
		/*
		 * The project root the Detector scans and the `theme` path resolve
		 * against. Bundlers report the root via framework-specific hooks; it is
		 * captured there and defaults to the current working directory.
		 */
		let root = process.cwd();
		/* The resolved `scan` globs, defaulted when the option is omitted. */
		const scanGlobs = options.scan ?? [...DEFAULT_SCAN_GLOBS];

		return {
			name: '@db-ux/core-theme-tools',
			/*
			 * Resolve before the bundler's own module resolution so the virtual
			 * CSS specifier is intercepted here. Without this, webpack treats the
			 * `virtual:` import as an unknown URI scheme and errors before the
			 * `resolveId` hook runs.
			 */
			enforce: 'pre',

			/* Claim the virtual CSS module so `load()` can serve it. */
			resolveId(id: string) {
				return id === VIRTUAL_MODULE_ID
					? RESOLVED_VIRTUAL_MODULE_ID
					: undefined;
			},

			async load(id: string) {
				if (id !== RESOLVED_VIRTUAL_MODULE_ID) {
					return undefined;
				}

				const theme = await loadTheme(resolve(root, options.theme));

				/*
				 * Build-mode optimization (Requirements 8.2-8.5): scan the project
				 * for adaptive usage, forcing in the configured `include` so those
				 * colors/materials are force-kept even when the Detector does not
				 * find them (Requirement 8.5 — the union happens inside
				 * `detectUsage` via `forceInclude`). Only populate a `forceInclude`
				 * set when there is something to include, so `detectUsage`'s own
				 * empty-set fallback handles the common no-`include` case.
				 */
				const forceInclude: Partial<UsageSignal> = {
					...(options.include?.colors && {
						colors: new Set(options.include.colors)
					}),
					...(options.include?.materials && {
						materials: new Set(options.include.materials)
					})
				};
				const detected = await detectUsage(
					root,
					scanGlobs,
					forceInclude,
					options.exclude
				);

				/*
				 * Pass the detected (+ included) sets as explicit — never omitted —
				 * `colors`/`materials` arrays so the core's filter is always active:
				 * the core unions in the Required_Baseline, so a non-empty set yields
				 * baseline + detected (Requirement 8.2) and an EMPTY set yields the
				 * baseline only (Requirement 8.3). Omitting the lists would instead
				 * mean "keep all", which build mode must not do.
				 *
				 * High-contrast: an explicit `options.highContrast` mode wins.
				 * Otherwise choose automatically — if the Detector found a
				 * `[data-contrast="more"]` opt-in, emit `"both"` (attribute +
				 * media query); if not, emit `"media-query"` so
				 * `prefers-contrast: more` is still honored without shipping the
				 * unused attribute branch.
				 */
				const highContrast: HighContrastMode =
					options.highContrast ??
					(detected.highContrast ? 'both' : 'media-query');

				const generateOptions: GenerateOptions = {
					colors: [...detected.colors],
					materials: [...detected.materials],
					highContrast,
					layer: options.layer
				};

				if (options.debug) {
					console.info(
						`[@db-ux/core-theme-tools] generating from "${options.theme}" — detected colors: [${generateOptions.colors?.join(', ')}], materials: [${generateOptions.materials?.join(', ')}], highContrast: ${generateOptions.highContrast}, layer: ${generateOptions.layer ?? 'db-ux-adaptive'} (scan globs: ${scanGlobs.join(', ')})`
					);
				}

				const code = generate(theme, generateOptions);
				return { code, map: null };
			},

			/*
			 * Capture the Vite project root so the Detector and the `theme` path
			 * resolve against it rather than the bundler's cwd.
			 */
			vite: {
				configResolved(config: { root: string }) {
					root = config.root;
				}
			},

			/*
			 * webpack has no built-in CSS handling, so capture the compiler
			 * context as the project root AND fail fast if the consumer has no
			 * CSS loader to process the virtual `.css` module (Option 3: guide
			 * the user to install it rather than emit a cryptic bundler error).
			 */
			webpack(compiler: {
				context?: string;
				options?: { context?: string };
			}) {
				const context = compiler.context ?? compiler.options?.context;
				if (context) {
					root = context;
				}
				assertCssLoaderAvailable(root);
			},

			/* Same requirement for rspack (webpack-compatible, no built-in CSS). */
			rspack(compiler: {
				context?: string;
				options?: { context?: string };
			}) {
				const context = compiler.context ?? compiler.options?.context;
				if (context) {
					root = context;
				}
				assertCssLoaderAvailable(root);
			}
		};
	});
