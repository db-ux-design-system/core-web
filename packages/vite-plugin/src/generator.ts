import { readdirSync } from 'fs';
import { resolve } from 'path';
import type { FoundationFeature, GenerateOptions } from './types.js';

const FOUNDATION_IMPORTS: Record<FoundationFeature, string> = {
	helpers: 'helpers/classes/all.css',
	elevation: 'defaults/default-elevation.css',
	animations: 'component-animations.css',
	icons: 'defaults/default-icons.css',
	code: 'defaults/default-code.css'
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
	const { include, exclude, theme: preferredTheme, hasTailwind } = options;
	const { components, foundations, colors, densities, fontSizes } = include;
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
		imports.push(
			`@import "@db-ux/core-foundations/build/styles/defaults/default-container-properties.css" layer(db-ux);`
		);
	} else {
		imports.push(
			`@import "@db-ux/core-foundations/build/styles/defaults/default-theme.css" layer(db-ux);`
		);
		imports.push(
			`@import "@db-ux/core-foundations/build/styles/fonts/rollup.css" layer(db-ux);`
		);
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

	// Optional foundation features
	for (const [key, path] of Object.entries(FOUNDATION_IMPORTS)) {
		const feature = key as FoundationFeature;
		if (
			foundations?.includes(feature) &&
			!exclude.foundations?.includes(feature)
		) {
			const basePath =
				feature === 'animations'
					? '@db-ux/core-components'
					: '@db-ux/core-foundations';
			const fullPath =
				key === 'animations'
					? `build/styles/${path}`
					: `build/styles/${path}`;
			imports.push(`@import "${basePath}/${fullPath}" layer(db-ux);`);
		}
	}

	// Color schemes
	for (const color of colors || []) {
		if (!exclude.colors?.includes(color)) {
			imports.push(
				`@import "@db-ux/core-foundations/build/styles/colors/classes/${color}.css" layer(db-ux);`
			);
		}
	}

	// Densities
	for (const density of densities || []) {
		if (!exclude.densities?.includes(density)) {
			imports.push(
				`@import "@db-ux/core-foundations/build/styles/density/classes/${density}.css" layer(db-ux);`
			);
		}
	}

	// Font sizes
	for (const fontSize of fontSizes || []) {
		if (!exclude.fontSizes?.includes(fontSize)) {
			const [category, size] = fontSize.split('-');
			imports.push(
				`@import "@db-ux/core-foundations/build/styles/fonts/classes/${category}/${size}.css" layer(db-ux);`
			);
		}
	}

	// Component styles
	for (const component of components || []) {
		if (!exclude.components?.includes(component)) {
			imports.push(
				`@import "@db-ux/core-components/build/components/${component}/${component}.css" layer(db-ux);`
			);
		}
	}

	return imports.join('\n');
}
