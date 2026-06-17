import { writeFile } from 'fs/promises';
import { resolve } from 'path';
import type { Plugin } from 'vite';
import {
	detectColors,
	detectComponents,
	detectDensities,
	detectFontSizes,
	discoverAll,
	scanComponentDependencies
} from './detector.js';
import { generateCSS } from './generator.js';
import { removeUnusedStyles, type OptimizerContext } from './optimizer.js';
import type { ColorScheme, Density, FontSize, PluginConfig } from './types.js';

/** Default foundation features included unless overridden by user config. */
const DEFAULT_FOUNDATIONS = [
	'helpers',
	'icons',
	'animations',
	'code',
	'elevation'
] as const;

/**
 * Create the DB UX Vite plugin.
 * Returns two plugins: a pre-transform plugin for CSS generation and
 * a post-build plugin for optimizing the final CSS bundle.
 *
 * During dev, all available styles are included for instant HMR.
 * During build, only detected styles are included and unused ones are stripped.
 */
export default function dbUxPlugin(config: PluginConfig = {}): any[] {
	const { optimize = true, debug = false } = config;

	// Deep-merge include/exclude so partial user config doesn't lose defaults
	const include = {
		foundations: config.include?.foundations ?? [...DEFAULT_FOUNDATIONS],
		components: config.include?.components,
		colors: config.include?.colors,
		densities: config.include?.densities,
		fontSizes: config.include?.fontSizes
	};
	const exclude = config.exclude ?? {};

	let detectedComponents = new Set<string>();
	let detectedColors = new Set<string>();
	let detectedDensities = new Set<string>();
	let detectedFontSizes = new Set<string>();
	let hasDetected = false;
	let detectionPromise: Promise<void> | null = null;
	let cssModuleId: string | null = null;
	let hasTailwind = false;
	let root = process.cwd();
	let isBuild = false;
	let generatedImports: string[] = [];

	const mainPlugin: Plugin = {
		name: 'db-ux-vite-plugin',
		enforce: 'pre',

		resolveId(id) {
			if (id === '@db-ux/core-vite-plugin/index.css') {
				return id;
			}
		},

		load(id) {
			if (id === '@db-ux/core-vite-plugin/index.css') {
				return '';
			}
		},

		configResolved(resolvedConfig) {
			root = resolvedConfig.root;
			isBuild = resolvedConfig.command === 'build';
			hasTailwind = resolvedConfig.plugins.some((plugin) =>
				plugin.name.startsWith('@tailwindcss/vite')
			);

			if (debug) {
				console.log(
					`[db-ux-vite-plugin] Initialized (mode: ${resolvedConfig.command}, tailwind: ${hasTailwind})`
				);
			}
		},

		handleHotUpdate({ file, server, modules }) {
			if (/\.(vue|jsx|tsx|ts|html)$/.test(file) && cssModuleId) {
				const mod = server.moduleGraph.getModuleById(cssModuleId);
				if (mod) {
					server.moduleGraph.invalidateModule(mod);
					return [...modules, mod];
				}
			}
		},

		async transform(code, id) {
			if (!id.endsWith('.css')) return;

			const hasImport =
				code.includes('@import "@db-ux/core-vite-plugin/index.css"') ||
				code.includes("@import '@db-ux/core-vite-plugin/index.css'");

			if (hasImport) {
				cssModuleId = id;

				if (isBuild && !hasDetected && !detectionPromise) {
					detectionPromise = (async () => {
						hasDetected = true;
						detectedComponents = await detectComponents(
							root,
							include.components || []
						);
						detectedColors = await detectColors(
							root,
							include.colors || []
						);
						detectedDensities = await detectDensities(
							root,
							include.densities || []
						);
						detectedFontSizes = await detectFontSizes(
							root,
							include.fontSizes || []
						);
						scanComponentDependencies(
							root,
							detectedComponents,
							detectedColors,
							detectedDensities,
							detectedFontSizes
						);
					})();
				}

				if (detectionPromise) {
					await detectionPromise;
				}

				// During dev, include all discovered values for instant HMR.
				// During build, use only detected values for tree-shaking.
				const discovered = discoverAll(root);
				const css = generateCSS({
					root,
					include: {
						components: isBuild
							? Array.from(detectedComponents)
							: Array.from(discovered.components),
						foundations: include.foundations || [],
						colors: isBuild
							? (Array.from(detectedColors) as ColorScheme[])
							: (discovered.colors as ColorScheme[]),
						densities: isBuild
							? (Array.from(detectedDensities) as Density[])
							: (discovered.densities as Density[]),
						fontSizes: isBuild
							? (Array.from(detectedFontSizes) as FontSize[])
							: (discovered.fontSizes as FontSize[])
					},
					exclude,
					theme: config.theme,
					additionalLayers: config.additionalLayers,
					overrideLayers: config.overrideLayers,
					hasTailwind
				});

				generatedImports = css.split('\n');

				if (debug) {
					console.log(
						'\n[db-ux-vite-plugin] Generated imports:\n' +
							generatedImports
								.map((line) => `  ${line}`)
								.join('\n') +
							'\n'
					);
				}

				code = code.replace(
					/@import ["']@db-ux\/core-vite-plugin\/index\.css["'];?/g,
					css
				);
			}

			return code;
		},

		async buildEnd() {
			if (debug && hasDetected) {
				const reportPath = resolve(root, 'db-ux-detection-report.json');
				await writeFile(
					reportPath,
					JSON.stringify(
						{
							components: Array.from(detectedComponents).sort(),
							colors: Array.from(detectedColors).sort(),
							densities: Array.from(detectedDensities).sort(),
							fontSizes: Array.from(detectedFontSizes).sort(),
							generatedImports
						},
						null,
						2
					),
					'utf-8'
				);
			}
		}
	};

	const optimizerPlugin: Plugin = {
		name: 'db-ux-vite-plugin:optimizer',
		enforce: 'post',

		generateBundle(_options, bundle) {
			if (!optimize || !hasDetected) return;

			const { colors, densities, fontSizes } = discoverAll(root);
			const optimizerContext: OptimizerContext = {
				allColors: colors,
				allDensities: densities,
				allFontSizes: fontSizes
			};

			for (const [, asset] of Object.entries(bundle)) {
				if (
					asset.type === 'asset' &&
					typeof asset.fileName === 'string' &&
					asset.fileName.endsWith('.css') &&
					typeof asset.source === 'string'
				) {
					asset.source = removeUnusedStyles(
						asset.source,
						detectedColors,
						detectedDensities,
						detectedFontSizes,
						optimizerContext
					);
				}
			}
		}
	};

	return [mainPlugin, optimizerPlugin];
}

export type { PluginConfig };
