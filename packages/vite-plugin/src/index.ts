import type { Plugin } from 'vite';
import { readdir, readFile, writeFile } from 'fs/promises';
import { join, resolve } from 'path';
import {
	detectColors,
	detectComponents,
	detectDensities,
	detectFontSizes
} from './detector.js';
import { generateCSS } from './generator.js';
import type { PluginConfig } from './types.js';

function removeUnusedStyles(
	css: string,
	detectedColors: Set<string>,
	detectedDensities: Set<string>,
	detectedFontSizes: Set<string>
): string {
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
	const unusedColors = allColors.filter((c) => !detectedColors.has(c));

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

	for (const color of unusedColors) {
		css = css.replace(
			new RegExp(`@property --db-${color}-[a-z0-9-]+\\{[^}]+\\}`, 'g'),
			''
		);
		css = css.replace(
			new RegExp(`--db-${color}-[a-z0-9-]+:[^;]+;`, 'g'),
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
			new RegExp(`--db-[a-z-]+-${density}-[a-z0-9-]+:[^;]+;`, 'g'),
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
			new RegExp(`--db-base-${type}-icon-weight-${size}:[^;]+;`, 'g'),
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

	return css;
}

export default function dbUxPlugin(config: PluginConfig = {}): Plugin {
	const {
		include = {},
		exclude = {},
		animations = true,
		icons = true,
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
			hasTailwind = resolvedConfig.plugins.some(plugin => 
				plugin.name.startsWith('@tailwindcss/vite')
			);
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

			// Replace @import "@db-ux/core-vite-plugin/index.css" with generated CSS
			if (
				code.includes('@import "@db-ux/core-vite-plugin/index.css"') ||
				code.includes("@import '@db-ux/core-vite-plugin/index.css'")
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
					icons,
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
			if (debug && optimize && hasDetected) {
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
