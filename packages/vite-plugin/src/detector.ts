import { readFileSync } from 'fs';
import type { PluginContext } from 'rollup';

const COMPONENT_PATTERNS = [
	/class="[^"]*db-(?:custom-select-list-item|custom-select-list|custom-select-dropdown|custom-select-form-field|custom-select|stack|switch|tab-panel|tabs|tab-list|tab-item|tab-bar|tooltip|popover|textarea|navigation|accordion-item|accordion|badge|navigation-item|tag|radio|select|notification|brand|button|card|checkbox|divider|drawer|header|icon|infotext|input|link|page|section|tab)[^"]*"/g,
	/className="[^"]*db-(?:custom-select-list-item|custom-select-list|custom-select-dropdown|custom-select-form-field|custom-select|stack|switch|tab-panel|tabs|tab-list|tab-item|tab-bar|tooltip|popover|textarea|navigation|accordion-item|accordion|badge|navigation-item|tag|radio|select|notification|brand|button|card|checkbox|divider|drawer|header|icon|infotext|input|link|page|section|tab)[^"]*"/g,
	/className=\{[^}]*db-(?:custom-select-list-item|custom-select-list|custom-select-dropdown|custom-select-form-field|custom-select|stack|switch|tab-panel|tabs|tab-list|tab-item|tab-bar|tooltip|popover|textarea|navigation|accordion-item|accordion|badge|navigation-item|tag|radio|select|notification|brand|button|card|checkbox|divider|drawer|header|icon|infotext|input|link|page|section|tab)[^}]*\}/g
];

const COLOR_PATTERNS = [
	/\.db-color-(neutral|brand|blue|burgundy|critical|cyan|green|informational|light-green|orange|pink|red|successful|turquoise|violet|warning|yellow)/g,
	/\[data-color=["']?(neutral|brand|blue|burgundy|critical|cyan|green|informational|light-green|orange|pink|red|successful|turquoise|violet|warning|yellow)["']?\]/g,
	/data-color=["'](neutral|brand|blue|burgundy|critical|cyan|green|informational|light-green|orange|pink|red|successful|turquoise|violet|warning|yellow)["']/g,
	/["']data-color["']:\s*["'](neutral|brand|blue|burgundy|critical|cyan|green|informational|light-green|orange|pink|red|successful|turquoise|violet|warning|yellow)["']/g
];

const DENSITY_PATTERNS = [
	/\.db-density-(regular|functional|expressive)/g,
	/\[data-density=["']?(regular|functional|expressive)["']?\]/g,
	/data-density=["'](regular|functional|expressive)["']/g,
	/["']data-density["']:\s*["'](regular|functional|expressive)["']/g
];

const FONT_SIZE_PATTERNS = [
	/\.db-font-size-(body|headline)-(3xs|2xs|xs|sm|md|lg|xl|2xl|3xl)/g,
	/\[data-font-size=["']?(body|headline)-(3xs|2xs|xs|sm|md|lg|xl|2xl|3xl)["']?\]/g,
	/data-font-size=["'](body|headline)-(3xs|2xs|xs|sm|md|lg|xl|2xl|3xl)["']/g,
	/["']data-font-size["']:\s*["'](body|headline)-(3xs|2xs|xs|sm|md|lg|xl|2xl|3xl)["']/g
];

const IMPORT_PATTERN =
	/import\s+\{[^}]*\bDB(\w+)\b[^}]*\}\s+from\s+['"]@db-ux\/(?:react|ngx|v|wc)-core-components['"]/g;
const COMPONENT_USAGE_PATTERN = /<DB(\w+)[\s>]/g;
const COMPONENT_IMPORT_ANY_PATTERN = /import\s+\{[^}]*\bDB(\w+)\b[^}]*\}/g;

const VALID_COMPONENTS = new Set([
	'custom-select-list-item',
	'custom-select-list',
	'custom-select-dropdown',
	'custom-select-form-field',
	'custom-select',
	'stack',
	'switch',
	'tab-panel',
	'tabs',
	'tab-list',
	'tab-item',
	'tab-bar',
	'tooltip',
	'popover',
	'textarea',
	'navigation',
	'accordion-item',
	'accordion',
	'badge',
	'navigation-item',
	'tag',
	'radio',
	'select',
	'notification',
	'brand',
	'button',
	'card',
	'checkbox',
	'divider',
	'drawer',
	'header',
	'icon',
	'infotext',
	'input',
	'link',
	'page',
	'section'
]);

export async function detectComponents(
	context: PluginContext,
	forceInclude: string[]
): Promise<Set<string>> {
	const components = new Set<string>(forceInclude);
	const moduleIds = Array.from(context.getModuleIds());

	for (const id of moduleIds) {
		if (!/\.(vue|jsx|tsx|ts|html)$/.test(id)) continue;
		if (id.includes('node_modules')) continue;

		try {
			const code = readFileSync(id, 'utf-8');

			// Detect from class names
			for (const pattern of COMPONENT_PATTERNS) {
				const matches = code.matchAll(pattern);
				for (const match of matches) {
					const componentMatch =
						match[0].match(/db-(\S+?)(?:[\s"]|$)/);
					if (componentMatch) {
						const componentName = componentMatch[1];
						if (VALID_COMPONENTS.has(componentName)) {
							components.add(componentName);
						}
					}
				}
			}

			// Detect from imports (official packages)
			const importMatches = code.matchAll(IMPORT_PATTERN);
			for (const match of importMatches) {
				const componentName = match[1]
					.toLowerCase()
					.replace(/([a-z])([A-Z])/g, '$1-$2')
					.toLowerCase();
				if (VALID_COMPONENTS.has(componentName)) {
					components.add(componentName);
				}
			}

			// Detect from component usage (e.g., <DBButton>, <DBInput>)
			const usageMatches = code.matchAll(COMPONENT_USAGE_PATTERN);
			for (const match of usageMatches) {
				const componentName = match[1]
					.toLowerCase()
					.replace(/([a-z])([A-Z])/g, '$1-$2')
					.toLowerCase();
				if (VALID_COMPONENTS.has(componentName)) {
					components.add(componentName);
				}
			}
		} catch {
			// Skip modules that can't be loaded
		}
	}

	return components;
}

export async function detectColors(
	context: PluginContext,
	forceInclude: string[]
): Promise<Set<string>> {
	// Always include essential colors
	const colors = new Set<string>([...forceInclude]);
	const moduleIds = Array.from(context.getModuleIds());

	for (const id of moduleIds) {
		if (!/\.(vue|jsx|tsx|ts|html|css|scss)$/.test(id)) continue;

		try {
			const code = readFileSync(id, 'utf-8');

			for (const pattern of COLOR_PATTERNS) {
				const matches = code.matchAll(pattern);
				for (const match of matches) {
					colors.add(match[1]);
				}
			}
		} catch {
			// Skip modules that can't be loaded
		}
	}

	return colors;
}

export async function detectDensities(
	context: PluginContext,
	forceInclude: string[]
): Promise<Set<string>> {
	const densities = new Set<string>(forceInclude);
	const moduleIds = Array.from(context.getModuleIds());

	for (const id of moduleIds) {
		if (!/\.(vue|jsx|tsx|ts|html|css|scss)$/.test(id)) continue;

		try {
			const code = readFileSync(id, 'utf-8');

			for (const pattern of DENSITY_PATTERNS) {
				const matches = code.matchAll(pattern);
				for (const match of matches) {
					densities.add(match[1]);
				}
			}
		} catch {
			// Skip modules that can't be loaded
		}
	}

	return densities;
}

export async function detectFontSizes(
	context: PluginContext,
	forceInclude: string[]
): Promise<Set<string>> {
	const fontSizes = new Set<string>(forceInclude);
	const moduleIds = Array.from(context.getModuleIds());

	for (const id of moduleIds) {
		if (!/\.(vue|jsx|tsx|ts|html|css|scss)$/.test(id)) continue;

		try {
			const code = readFileSync(id, 'utf-8');

			for (const pattern of FONT_SIZE_PATTERNS) {
				const matches = code.matchAll(pattern);
				for (const match of matches) {
					fontSizes.add(`${match[1]}-${match[2]}`);
				}
			}
		} catch {
			// Skip modules that can't be loaded
		}
	}

	return fontSizes;
}
