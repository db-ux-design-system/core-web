import { readdirSync } from 'fs';
import { resolve } from 'path';
import type { GenerateOptions } from './types.js';

const FOUNDATION_IMPORTS: Record<string, string> = {
	helpers: 'helpers/classes/all.css',
	elevation: 'defaults/default-elevation.css'
};

function detectTheme(): string | null {
	try {
		let currentDir = process.cwd();
		let attempts = 0;
		const maxAttempts = 10;

		while (attempts < maxAttempts) {
			const nodeModulesPath = resolve(currentDir, 'node_modules');

			// Check @db-ux/* packages
			const dbUxPath = resolve(nodeModulesPath, '@db-ux');
			try {
				const packages = readdirSync(dbUxPath);
				const themePackage = packages.find((pkg) =>
					pkg.endsWith('-theme')
				);
				if (themePackage) return `@db-ux/${themePackage}`;
			} catch {}

			// Check @db-ux-inner-source/* packages
			const dbUxInnerPath = resolve(
				nodeModulesPath,
				'@db-ux-inner-source'
			);
			try {
				const packages = readdirSync(dbUxInnerPath);
				const themePackage = packages.find((pkg) =>
					pkg.endsWith('-theme')
				);
				if (themePackage) return `@db-ux-inner-source/${themePackage}`;
			} catch {}

			const parentDir = resolve(currentDir, '..');
			if (parentDir === currentDir) break;
			currentDir = parentDir;
			attempts++;
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
		icons
	} = options;
	const imports: string[] = [];

	// Detect and use theme if available
	const theme = detectTheme();
	const themeName = theme ? theme.split('/').pop() : null;

	// Layer order declaration
	if (themeName) {
		imports.push(
			`@layer theme, base, components, db-ux, utilities, ${themeName};`
		);
	} else {
		imports.push(`@layer theme, base, components, db-ux, utilities;`);
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
