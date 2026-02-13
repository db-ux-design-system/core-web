import type { Plugin } from 'vite';
import {
	detectColors,
	detectComponents,
	detectDensities,
	detectFontSizes
} from './detector.js';
import { generateCSS } from './generator.js';
import type { PluginConfig } from './types.js';

export default function dbUxPlugin(config: PluginConfig = {}): Plugin {
	const {
		include = {},
		exclude = {},
		animations = true,
		icons = true,
		optimize = true
	} = config;

	let detectedComponents = new Set<string>();
	let detectedColors = new Set<string>();
	let detectedDensities = new Set<string>();
	let detectedFontSizes = new Set<string>();
	let hasDetected = false;
	let detectionPromise: Promise<void> | null = null;
	let outDir = 'dist';
	let cssModuleId: string | null = null;

	return {
		name: 'db-ux-vite-plugin',
		enforce: 'pre',

		configResolved(resolvedConfig) {
			outDir = resolvedConfig.build.outDir;
		},

		handleHotUpdate({ file, server }) {
			if (optimize && /\.(vue|jsx|tsx|ts|html)$/.test(file)) {
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

			// Replace @import "@db-ux/core-vite-plugin" with generated CSS
			if (
				code.includes('@import "@db-ux/core-vite-plugin"') ||
				code.includes("@import '@db-ux/core-vite-plugin'")
			) {
				cssModuleId = id;
				// Run detection once when we first encounter the plugin import
				if (optimize && !hasDetected && !detectionPromise) {
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

				const components = optimize
					? Array.from(detectedComponents)
					: include.components || [];

				const colors = optimize
					? Array.from(detectedColors)
					: include.colors || [];

				const densities = optimize
					? Array.from(detectedDensities)
					: include.densities || [];

				const fontSizes = optimize
					? Array.from(detectedFontSizes)
					: include.fontSizes || [];

				const css = generateCSS({
					components,
					exclude: exclude.components || [],
					foundations: include.foundations || [],
					excludeFoundations: exclude.foundations || [],
					colors,
					excludeColors: exclude.colors || [],
					densities,
					excludeDensities: exclude.densities || [],
					fontSizes,
					excludeFontSizes: exclude.fontSizes || [],
					animations,
					icons
				});

				code = code.replace(
					/@import ["']@db-ux\/core-vite-plugin["'];?/g,
					css
				);
			}

			// Remove empty @layer declarations
			code = code.replace(/@layer\s+\w+;/g, '');

			return code;
		},

		renderChunk(code, chunk) {
			if (optimize && hasDetected && chunk.fileName.endsWith('.css')) {
				const allColors = [
					'blue',
					'burgundy',
					'cyan',
					'green',
					'light-green',
					'orange',
					'pink',
					'red',
					'turquoise',
					'violet',
					'yellow'
				];
				const unusedColors = allColors.filter(
					(c) => !Array.from(detectedColors).includes(c)
				);

				const allDensities = ['regular', 'functional', 'expressive'];
				const unusedDensities = allDensities.filter(
					(d) => !Array.from(detectedDensities).includes(d)
				);

				// Remove unused color properties
				for (const color of unusedColors) {
					code = code.replace(
						new RegExp(`@property --db-${color}-\d+\{[^}]+\}`, 'g'),
						''
					);
				}

				// Remove unused density properties
				for (const density of unusedDensities) {
					code = code.replace(
						new RegExp(
							`@property --db-spacing-fixed-${density}-[a-z0-9-]+\{[^}]+\}`,
							'g'
						),
						''
					);
					code = code.replace(
						new RegExp(
							`@property --db-spacing-responsive-${density}-[a-z0-9-]+\{[^}]+\}`,
							'g'
						),
						''
					);
					code = code.replace(
						new RegExp(
							`@property --db-sizing-${density}-[a-z0-9-]+\{[^}]+\}`,
							'g'
						),
						''
					);
				}

				return code;
			}
		},

		generateBundle() {
			if (optimize && hasDetected) {
				this.emitFile({
					type: 'asset',
					fileName: 'db-ux-detection-report.json',
					source: JSON.stringify(
						{
							components: Array.from(detectedComponents).sort(),
							colors: Array.from(detectedColors).sort(),
							densities: Array.from(detectedDensities).sort(),
							fontSizes: Array.from(detectedFontSizes).sort()
						},
						null,
						2
					)
				});
			}
		},

		async closeBundle() {
			if (!optimize || !hasDetected) return;

			const fs = await import('fs/promises');
			const path = await import('path');

			const allColors = [
				'blue',
				'burgundy',
				'cyan',
				'green',
				'light-green',
				'orange',
				'pink',
				'red',
				'turquoise',
				'violet',
				'yellow'
			];
			const unusedColors = allColors.filter(
				(c) => !detectedColors.has(c)
			);

			const allDensities = ['functional', 'expressive'];
			const unusedDensities = allDensities.filter(
				(d) => !detectedDensities.has(d)
			);

			const allFontSizes = [
				'body-3xs',
				'body-2xs',
				'body-lg',
				'body-xl',
				'body-2xl',
				'body-3xl',
				'headline-3xs',
				'headline-2xl',
				'headline-3xl'
			];
			const unusedFontSizes = allFontSizes.filter(
				(f) => !detectedFontSizes.has(f)
			);

			// Process CSS files in dist folder
			const distDir = path.resolve(process.cwd(), outDir);
			try {
				const files = await fs.readdir(distDir, { recursive: true });
				for (const file of files) {
					if (typeof file === 'string' && file.endsWith('.css')) {
						const filePath = path.join(distDir, file);
						let css = await fs.readFile(filePath, 'utf-8');

						for (const color of unusedColors) {
							css = css.replace(
								new RegExp(
									`@property --db-${color}-[a-z0-9-]+\\{[^}]+\\}`,
									'g'
								),
								''
							);
							css = css.replace(
								new RegExp(
									`--db-${color}-[a-z0-9-]+:[^;]+;`,
									'g'
								),
								''
							);
						}

						for (const density of unusedDensities) {
							css = css.replace(
								new RegExp(
									`@property --db-[a-z-]+-${density}-[a-z0-9-]+\\{[^}]+\\}`,
									'g'
								),
								''
							);
							css = css.replace(
								new RegExp(
									`--db-[a-z-]+-${density}-[a-z0-9-]+:[^;]+;`,
									'g'
								),
								''
							);
						}

						for (const fontSize of unusedFontSizes) {
							const [type, size] = fontSize.split('-');
							css = css.replace(
								new RegExp(`--db-type-${fontSize}:[^;]+;`, 'g'),
								''
							);
							css = css.replace(
								new RegExp(
									`--db-base-${type}-icon-weight-${size}:[^;]+;`,
									'g'
								),
								''
							);
							css = css.replace(
								new RegExp(
									`--db-base-${type}-icon-font-size-${size}:[^;]+;`,
									'g'
								),
								''
							);
							css = css.replace(
								new RegExp(
									`@property --db-base-icon-weight-[a-z]+-[a-z]+-${type}-${size}\\{[^}]+\\}`,
									'g'
								),
								''
							);
							css = css.replace(
								new RegExp(
									`@property --db-base-icon-font-size-[a-z]+-[a-z]+-${type}-${size}\\{[^}]+\\}`,
									'g'
								),
								''
							);
							css = css.replace(
								new RegExp(
									`@property --db-typography-[a-z]+-[a-z]+-${type}-${size}\\{[^}]+\\}`,
									'g'
								),
								''
							);
						}

						css = css.replace(/@layer variables;/g, '');

						await fs.writeFile(filePath, css, 'utf-8');
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
