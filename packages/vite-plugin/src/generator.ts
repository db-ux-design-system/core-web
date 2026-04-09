import { readdirSync } from 'fs';
import { resolve } from 'path';
import type { FoundationFeature, GenerateOptions } from './types.js';

/** Maps foundation feature names to their CSS file paths relative to build/styles/. */
const FOUNDATION_IMPORTS: Record<FoundationFeature, string> = {
	helpers: 'helpers/classes/all.css',
	elevation: 'defaults/default-elevation.css',
	animations: 'component-animations.css',
	icons: 'defaults/default-icons.css',
	code: 'defaults/default-code.css'
};

/** Theme package scopes to search for installed themes. */
const THEME_SCOPES = ['@db-ux', '@db-ux-inner-source'] as const;

/**
 * Auto-detect the installed DB UX theme package (e.g. @db-ux/db-theme).
 * Walks up from `root` checking each node_modules for *-theme packages
 * in both @db-ux/* and @db-ux-inner-source/* scopes.
 * Returns the package specifier or null if no theme is found.
 */
function detectTheme(root: string, preferredTheme?: string): string | null {
	let currentDir = root;
	for (let i = 0; i < 10; i++) {
		for (const scope of THEME_SCOPES) {
			try {
				const scopeDir = resolve(currentDir, 'node_modules', scope);
				const packages = readdirSync(scopeDir);
				const themePackages = packages.filter((pkg) =>
					pkg.endsWith('-theme')
				);
				if (themePackages.length === 0) continue;

				const match =
					preferredTheme && themePackages.includes(preferredTheme)
						? preferredTheme
						: themePackages[0];
				return `${scope}/${match}`;
			} catch {
				// Scope not found at this level
			}
		}

		const parentDir = resolve(currentDir, '..');
		if (parentDir === currentDir) break;
		currentDir = parentDir;
	}

	return null;
}

/**
 * Generate the CSS import statements based on detected/discovered values.
 * Produces @import rules for theme, foundations, colors, densities,
 * font sizes, and component styles, all wrapped in @layer declarations.
 */
export function generateCSS(options: GenerateOptions): string {
	const {
		root,
		include,
		exclude,
		theme: preferredTheme,
		hasTailwind,
		overrideLayers,
		additionalLayers
	} = options;
	const { components, foundations, colors, densities, fontSizes } = include;
	const imports: string[] = [];

	const theme = detectTheme(root, preferredTheme);
	const themeName = theme ? theme.split('/').pop() : null;

	// Layer order declaration
	if (overrideLayers?.length) {
		imports.push(`@layer ${overrideLayers.join(', ')};`);
	} else {
		let autoLayers: string[];
		if (hasTailwind) {
			autoLayers = themeName
				? [
						themeName,
						'theme',
						'base',
						'components',
						'db-ux',
						'utilities'
					]
				: ['theme', 'base', 'components', 'db-ux', 'utilities'];
		} else {
			autoLayers = themeName ? [themeName, 'db-ux'] : ['db-ux'];
		}

		if (additionalLayers?.before?.length) {
			autoLayers = [...additionalLayers.before, ...autoLayers];
		}
		if (additionalLayers?.after?.length) {
			autoLayers = [...autoLayers, ...additionalLayers.after];
		}

		imports.push(`@layer ${autoLayers.join(', ')};`);
	}

	// Theme or default fallback
	if (theme) {
		imports.push(
			`@import "${theme}/build/styles/rollup.css" layer(${themeName});`
		);
		imports.push(
			`@import "@db-ux/core-foundations/build/styles/defaults/default-container-properties.css" layer(db-ux);`
		);
	} else {
		imports.push(
			`@import "@db-ux/core-foundations/build/styles/theme/rollup.css" layer(db-ux);`
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
			imports.push(
				`@import "${basePath}/build/styles/${path}" layer(db-ux);`
			);
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
