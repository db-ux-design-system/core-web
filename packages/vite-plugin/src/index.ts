import { readdir, readFile, writeFile } from 'fs/promises';
import { join, resolve } from 'path';
import type { Plugin } from 'vite';
import {
	detectColors,
	detectComponents,
	detectDensities,
	detectFontSizes
} from './detector.js';
import { generateCSS } from './generator.js';
import { removeUnusedStyles } from './optimizer.js';
import type {
	ColorScheme,
	Component,
	Density,
	FontSize,
	PluginConfig
} from './types.js';

export default function dbUxPlugin(config: PluginConfig = {}): Plugin {
	const {
		include = {
			foundations: ['helpers', 'icons', 'animations', 'code', 'elevation']
		},
		exclude = {},
		optimize = true,
		debug = false
	} = config;

	let detectedComponents = new Set<string>();
	let detectedColors = new Set<string>();
	let detectedDensities = new Set<string>();
	let detectedFontSizes = new Set<string>();
	let hasDetected = false;
	let detectionPromise: Promise<void> | null = null;
	let outDir = 'dist';
	let cssModuleId: string | null = null;
	let hasTailwind = false;

	return {
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
			outDir = resolvedConfig.build.outDir;
			hasTailwind = resolvedConfig.plugins.some((plugin) =>
				plugin.name.startsWith('@tailwindcss/vite')
			);
		},

		handleHotUpdate({ file, server }) {
			if (/\.(vue|jsx|tsx|ts|html)$/.test(file)) {
				hasDetected = false;
				detectionPromise = null;
				if (cssModuleId) {
					const mod = server.moduleGraph.getModuleById(cssModuleId);
					if (mod) {
						server.moduleGraph.invalidateModule(mod);
						server.ws.send({ type: 'full-reload' });
						return [];
					}
				}
			}
		},

		async transform(code, id) {
			if (!id.endsWith('.css')) return;

			// Replace @import "@db-ux/core-vite-plugin/index.css" with generated CSS
			if (
				code.includes('@import "@db-ux/core-vite-plugin/index.css"') ||
				code.includes("@import '@db-ux/core-vite-plugin/index.css'")
			) {
				cssModuleId = id;
				// Run detection once when we first encounter the plugin import
				if (!hasDetected && !detectionPromise) {
					detectionPromise = (async () => {
						hasDetected = true;
						detectedComponents = await detectComponents(
							this,
							include.components || []
						);
						detectedColors = await detectColors(
							this,
							include.colors || []
						);
						detectedDensities = await detectDensities(
							this,
							include.densities || []
						);
						detectedFontSizes = await detectFontSizes(
							this,
							include.fontSizes || []
						);
					})();
				}

				// Wait for detection to complete
				if (detectionPromise) {
					await detectionPromise;
				}

				const css = generateCSS({
					include: {
						components: Array.from(
							detectedComponents
						) as Component[],
						foundations: include.foundations || [],
						colors: Array.from(detectedColors) as ColorScheme[],
						densities: Array.from(detectedDensities) as Density[],
						fontSizes: Array.from(detectedFontSizes) as FontSize[]
					},
					exclude,
					theme: config.theme,
					hasTailwind
				});

				code = code.replace(
					/@import ["']@db-ux\/core-vite-plugin\/index\.css["'];?/g,
					css
				);
			}

			return code;
		},

		async buildEnd() {
			if (debug && hasDetected) {
				const reportPath = resolve(
					process.cwd(),
					'db-ux-detection-report.json'
				);
				await writeFile(
					reportPath,
					JSON.stringify(
						{
							components: Array.from(detectedComponents).sort(),
							colors: Array.from(detectedColors).sort(),
							densities: Array.from(detectedDensities).sort(),
							fontSizes: Array.from(detectedFontSizes).sort()
						},
						null,
						2
					),
					'utf-8'
				);
			}
		},

		async closeBundle() {
			if (!optimize || !hasDetected) return;

			const distDir = resolve(process.cwd(), outDir);
			try {
				const files = await readdir(distDir, { recursive: true });
				for (const file of files) {
					if (file.endsWith('.css')) {
						const filePath = join(distDir, file);
						let css = await readFile(filePath, 'utf-8');

						css = removeUnusedStyles(
							css,
							detectedColors,
							detectedDensities,
							detectedFontSizes
						);

						await writeFile(filePath, css, 'utf-8');
					}
				}
			} catch (error) {
				console.warn(
					'[db-ux-vite-plugin] Could not process dist CSS files:',
					error
				);
			}
		}
	};
}

export type { PluginConfig };
