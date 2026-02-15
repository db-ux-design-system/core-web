import { readdirSync } from 'fs';
import { resolve } from 'path';
import type { GenerateOptions } from './types.js';

const FOUNDATION_IMPORTS: Record<string, string> = {
	helpers: 'helpers/classes/all.css',
	elevation: 'defaults/default-elevation.css'
};

function* resolveNodeModules(): Generator<string> {
	let currentDir = process.cwd();
	let attempts = 0;
	const maxAttempts = 10;

	while (attempts < maxAttempts) {
		yield resolve(currentDir, 'node_modules');
		const parentDir = resolve(currentDir, '..');
		if (parentDir === currentDir) break;
		currentDir = parentDir;
		attempts++;
	}
}

function detectTheme(preferredTheme?: string): string | null {
	try {
		for (const nodeModulesPath of resolveNodeModules()) {
			// Check @db-ux/* packages
			try {
				const packages = readdirSync(
					resolve(nodeModulesPath, '@db-ux')
				);
				const themePackages = packages.filter((pkg) =>
					pkg.endsWith('-theme')
				);
				if (themePackages.length > 0) {
					if (
						preferredTheme &&
						themePackages.includes(preferredTheme)
					) {
						return `@db-ux/${preferredTheme}`;
					}
					return `@db-ux/${themePackages[0]}`;
				}
			} catch {}

			// Check @db-ux-inner-source/* packages
			try {
				const packages = readdirSync(
					resolve(nodeModulesPath, '@db-ux-inner-source')
				);
				const themePackages = packages.filter((pkg) =>
					pkg.endsWith('-theme')
				);
				if (themePackages.length > 0) {
					if (
						preferredTheme &&
						themePackages.includes(preferredTheme)
					) {
						return `@db-ux-inner-source/${preferredTheme}`;
					}
					return `@db-ux-inner-source/${themePackages[0]}`;
				}
			} catch {}
		}
	} catch {}
	return null;
}



export function generateCSS(options: GenerateOptions): string {
	const {
		components,
		exclude,
		foundations,
		excludeFoundations,
		colors,
		excludeColors,
		densities,
		excludeDensities,
		fontSizes,
		excludeFontSizes,
		animations,
		icons,
		theme: preferredTheme,
		hasTailwind
	} = options;
	const imports: string[] = [];

	// Detect and use theme if available
	const theme = detectTheme(preferredTheme);
	const themeName = theme ? theme.split('/').pop() : null;

	// Layer order declaration
	if (hasTailwind) {
		if (themeName) {
			imports.push(
				`@layer theme, base, components, db-ux, utilities, ${themeName};`
			);
		} else {
			imports.push(`@layer theme, base, components, db-ux, utilities;`);
		}
	} else {
		if (themeName) {
			imports.push(`@layer db-ux, ${themeName};`);
		} else {
			imports.push(`@layer db-ux;`);
		}
	}

	if (theme) {
		imports.push(
			`@import "${theme}/build/styles/rollup.css" layer(${themeName});`
		);
	} else {
		imports.push(
			`@import "@db-ux/core-foundations/build/styles/defaults/default-theme.css" layer(db-ux);`
		);
		imports.push(
			`@import "@db-ux/core-foundations/build/styles/defaults/default-container-variables.css" layer(db-ux);`
		);
		imports.push(
			`@import "@db-ux/core-foundations/build/styles/fonts/rollup.css" layer(db-ux);`
		);
		if (icons) {
			imports.push(
				`@import "@db-ux/core-foundations/build/styles/icons/rollup.css" layer(db-ux);`
			);
		}
	}

	// Tailwind theme
	if (hasTailwind) {
		imports.push(
			`@import "@db-ux/core-foundations/build/tailwind/theme/index.css";`
		);
	}

	// Required foundation styles
	imports.push(
		`@import "@db-ux/core-foundations/build/styles/defaults/default-required.css" layer(db-ux);`
	);
	imports.push(
		`@import "@db-ux/core-foundations/build/styles/defaults/default-root.css" layer(db-ux);`
	);

	// Icons
	if (icons) {
		imports.push(
			`@import "@db-ux/core-foundations/build/styles/defaults/default-icons.css" layer(db-ux);`
		);
	}

	// Optional foundation features
	for (const [key, path] of Object.entries(FOUNDATION_IMPORTS)) {
		if (foundations.includes(key) && !excludeFoundations.includes(key)) {
			imports.push(
				`@import "@db-ux/core-foundations/build/styles/${path}" layer(db-ux);`
			);
		}
	}

	// Color schemes
	for (const color of colors) {
		if (!excludeColors.includes(color)) {
			imports.push(
				`@import "@db-ux/core-foundations/build/styles/colors/classes/${color}.css" layer(db-ux);`
			);
		}
	}

	// Densities
	for (const density of densities) {
		if (!excludeDensities.includes(density)) {
			imports.push(
				`@import "@db-ux/core-foundations/build/styles/density/classes/${density}.css" layer(db-ux);`
			);
		}
	}

	// Font sizes
	for (const fontSize of fontSizes) {
		if (!excludeFontSizes.includes(fontSize)) {
			const [category, size] = fontSize.split('-');
			imports.push(
				`@import "@db-ux/core-foundations/build/styles/fonts/classes/${category}/${size}.css" layer(db-ux);`
			);
		}
	}

	// Component animations
	if (animations) {
		imports.push(
			`@import "@db-ux/core-components/build/styles/component-animations.css" layer(db-ux);`
		);
	}

	// Component styles
	for (const component of components) {
		if (!exclude.includes(component)) {
			imports.push(
				`@import "@db-ux/core-components/build/components/${component}/${component}.css" layer(db-ux);`
			);
		}
	}

	return imports.join('\n');
}
