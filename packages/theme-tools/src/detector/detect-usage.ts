/*
 * Adaptive usage detection — the `UsageSignal` contract and `detectUsage`
 * entry (design Component 4; Requirements 9.1-9.7).
 *
 * This is the adaptive-coloring half of the shared detector. It sits next to
 * the extracted legacy discovery/detection logic (`./detect-legacy.ts`) so both
 * the Bundler_Plugin and the CLI consume one detector from a single import
 * path (shared with, not merged into, the legacy `@db-ux/core-vite-plugin`).
 *
 * It records the adaptive `color`/`material` component props and the
 * `data-adaptive-color`/`data-material` attributes (plus their `alt-state`
 * variants) across JSX/Angular/Vue and `<DBButton>`/`<db-button>`, sets the
 * `highContrast` flag from `[data-contrast="more"]`/`prefers-contrast`, unions
 * any `forceInclude` signal, and skips unreadable files without throwing
 * (Requirements 9.2-9.7). Every detected value is deduplicated via `Set`s.
 */

import fg from 'fast-glob';
import { readFileSync } from 'node:fs';

import type { MaterialName } from '../types/theme.js';
import { COMPONENT_REQUIREMENTS } from './component-requirements.js';

/**
 * @public The signal the optimizer and the CLI `init` subcommand consume
 * (design Component 4). Sets of detected adaptive colors and materials plus a
 * high-contrast opt-in flag. Each detected value appears exactly once.
 */
export type UsageSignal = {
	/** Detected adaptive colors (each value appears once). */
	colors: Set<string>;
	/** Detected materials (each value appears once). */
	materials: Set<MaterialName>;
	/** True if `[data-contrast="more"]` or `prefers-contrast` was seen. */
	highContrast: boolean;
};

/**
 * @public The escape-hatch subtracted from the detected result: colors and/or
 * materials to drop even when detected or required by a used component. The
 * required baseline is re-added by `generate`, so excluding a baseline value is
 * a no-op.
 */
export type ExcludeSignal = {
	colors?: Iterable<string>;
	materials?: Iterable<MaterialName>;
};

/**
 * The built-in material names, used to keep `material`/`data-material`
 * detection constrained to real `MaterialName` values (anything else is
 * ignored rather than widening the typed `materials` set).
 */
const VALID_MATERIALS: ReadonlySet<string> = new Set<MaterialName>([
	'filled-1',
	'filled-2',
	'filled-3',
	'vibrant',
	'origin',
	'inverted',
	'semi-transparent',
	'transparent'
]);

/*
 * Attribute forms. Each matches BOTH the plain attribute and its `alt-state`
 * variant (e.g. `data-adaptive-color` and `data-alt-state-adaptive-color`), in
 * single- or double-quoted form, so the one pattern covers the whole family.
 */
const DATA_COLOR_PATTERN =
	/data-(?:alt-state-)?adaptive-color=["']([\w-]+)["']/g;
const DATA_MATERIAL_PATTERN = /data-(?:alt-state-)?material=["']([\w-]+)["']/g;

/*
 * Component-prop forms on `<DBButton>` / `<db-button>` across frameworks. The
 * prop value is captured regardless of how the framework wraps it:
 *   - JSX:     color="cyan"      color={"cyan"}      material="vibrant"
 *   - Angular: color="cyan"      [color]="'cyan'"
 *   - Vue:     color="cyan"      :color="'cyan'"
 * The optional leading `[`/`:` covers the Angular/Vue binding syntaxes, and the
 * value may be wrapped in `{...}`/quotes, so a single pattern per prop handles
 * every string/binding form. These are intentionally not scoped to the element
 * tag: a `color=`/`material=` attribute in a DB UX source file is an adaptive
 * declaration, and scoping to the tag would miss multi-line opening tags.
 */
const PROP_COLOR_PATTERN =
	/[[:]?color[\]]?=(?:"([\w-]+)"|'([\w-]+)'|\{\s*["']([\w-]+)["']\s*\}|"'([\w-]+)'"|'"([\w-]+)"')/g;
const PROP_MATERIAL_PATTERN =
	/[[:]?material[\]]?=(?:"([\w-]+)"|'([\w-]+)'|\{\s*["']([\w-]+)["']\s*\}|"'([\w-]+)'"|'"([\w-]+)"')/g;

/** The high-contrast opt-in markers (Requirements 9.4, 9.5). */
const HIGH_CONTRAST_PATTERN = /\[data-contrast="more"\]|prefers-contrast/;

/*
 * Component-usage forms a scan recognizes, so the colors/materials a used
 * component can emit from its own template (COMPONENT_REQUIREMENTS) get unioned
 * in even when the consumer never writes a literal `color=` / `data-*` value.
 *   - JSX / framework tag:  <DBButton>, <DBControlPanelNavigationItem ... />
 *   - web-component tag:    <db-button>, <db-navigation-item>
 *   - named import:         import { DBButton, DBCard } from '@db-ux/...'
 * All three are matched against the manifest's known component ids; anything
 * else is ignored (no filesystem discovery — the manifest is the component set).
 */
const JSX_COMPONENT_PATTERN = /<DB(\w+)[\s>/]/g;
const KEBAB_COMPONENT_PATTERN = /<db-([\w-]+)[\s>/]/g;
const IMPORT_PATTERN =
	/import\s+\{([^}]+)\}\s+from\s+['"]@db-ux\/(?:react|ngx|v|wc)-core-components['"]/g;

/**
 * Kebab-case a PascalCase component name as the component folder ids are keyed,
 * inserting a dash at every lower/number -> upper boundary AND at a
 * letter -> digit boundary (so `HeadingH1` -> `heading-h-1`, matching the
 * digit-boundary casing the component generator uses for `<db-heading-h-1>`).
 */
const toKebabCase = (name: string): string =>
	name
		.replaceAll(/(?<=[a-z0-9])(?=[A-Z])/g, '-')
		.replaceAll(/(?<=[a-zA-Z])(?=\d)/g, '-')
		.toLowerCase();

/** Glob all source files from the project root, excluding node_modules/dist/build. */
async function scanFiles(root: string, globs: string[]): Promise<string[]> {
	return fg(globs, {
		cwd: root,
		absolute: true,
		ignore: ['**/node_modules/**', '**/dist/**', '**/build/**']
	});
}

/**
 * Safely read a file's contents, returning `undefined` on failure so an
 * unreadable file is skipped rather than aborting the whole scan
 * (Requirement 9.7).
 */
function readSource(filePath: string): string | undefined {
	try {
		return readFileSync(filePath, 'utf-8');
	} catch {
		return undefined;
	}
}

/** Return the first captured group across a prop pattern's quote-form alternatives. */
function firstCapture(match: RegExpMatchArray): string | undefined {
	return match[1] ?? match[2] ?? match[3] ?? match[4] ?? match[5];
}

/**
 * @public Scan the project source for adaptive color/material usage.
 *
 * Records each color and material declared via the `data-adaptive-color` /
 * `data-material` attributes (including their `alt-state` variants) and via the
 * `color` / `material` component props in JSX, Angular, and Vue syntax on both
 * `<DBButton>` and `<db-button>` forms, deduplicating via `Set`s. Sets
 * `highContrast` true when the source contains `[data-contrast="more"]` or
 * `prefers-contrast`. Unions any `forceInclude` signal into the result with no
 * value duplicated, and skips any individual unreadable file without throwing.
 *
 * Additionally detects which DB UX components are used (by JSX tag, web-
 * component tag, or named import) and unions in the colors/materials each used
 * component can emit from its own template (see `COMPONENT_REQUIREMENTS`), so a
 * component used WITHOUT an explicit color — e.g. `<DBNotification
 * semantic="critical">`, which renders `red` — is still accounted for.
 *
 * Finally, `exclude` is subtracted from the result as an escape hatch: a
 * consumer who does not use a variant a detected component could theoretically
 * render (e.g. the informational/blue notification) can drop that color/material
 * so it is not generated. The exclusion never removes the required baseline —
 * `generate` always re-adds the theme default color and `filled-1` — so an
 * excluded baseline value is a no-op rather than a broken output.
 *
 * @param root Project root the scan starts from.
 * @param globs Source globs to scan.
 * @param forceInclude Optional usage to union into the detected result.
 * @param exclude Optional colors/materials to subtract from the final result.
 */
export const detectUsage = async (
	root: string,
	globs: string[],
	forceInclude?: Partial<UsageSignal>,
	exclude?: ExcludeSignal
): Promise<UsageSignal> => {
	const colors = new Set<string>(forceInclude?.colors);
	const materials = new Set<MaterialName>(forceInclude?.materials);
	let highContrast = forceInclude?.highContrast ?? false;
	/* Component ids seen across all files; requirements are unioned in after. */
	const components = new Set<string>();

	const files = await scanFiles(root, globs);

	for (const file of files) {
		const code = readSource(file);
		if (!code) {
			/* Unreadable file: skip it and keep scanning (Requirement 9.7). */
			continue;
		}

		for (const match of code.matchAll(DATA_COLOR_PATTERN)) {
			colors.add(match[1]);
		}

		for (const match of code.matchAll(PROP_COLOR_PATTERN)) {
			const value = firstCapture(match);
			if (value) {
				colors.add(value);
			}
		}

		for (const match of code.matchAll(DATA_MATERIAL_PATTERN)) {
			if (VALID_MATERIALS.has(match[1])) {
				materials.add(match[1] as MaterialName);
			}
		}

		for (const match of code.matchAll(PROP_MATERIAL_PATTERN)) {
			const value = firstCapture(match);
			if (value && VALID_MATERIALS.has(value)) {
				materials.add(value as MaterialName);
			}
		}

		if (!highContrast && HIGH_CONTRAST_PATTERN.test(code)) {
			highContrast = true;
		}

		/*
		 * Component usage: record every known component id, so its template's
		 * colors/materials can be unioned in below. Validated against the
		 * manifest keys — an unknown `<DBFoo>` / `<db-foo>` / import is ignored.
		 */
		for (const match of code.matchAll(JSX_COMPONENT_PATTERN)) {
			const id = toKebabCase(match[1]);
			if (id in COMPONENT_REQUIREMENTS) {
				components.add(id);
			}
		}
		for (const match of code.matchAll(KEBAB_COMPONENT_PATTERN)) {
			if (match[1] in COMPONENT_REQUIREMENTS) {
				components.add(match[1]);
			}
		}
		for (const match of code.matchAll(IMPORT_PATTERN)) {
			for (const named of match[1].matchAll(/\bDB(\w+)\b/g)) {
				const id = toKebabCase(named[1]);
				if (id in COMPONENT_REQUIREMENTS) {
					components.add(id);
				}
			}
		}
	}

	/*
	 * Union in the colors/materials each detected component can emit from its
	 * own template. This is what lets a semantic-only usage (no literal color)
	 * still pull in the colors the component renders.
	 */
	for (const id of components) {
		const requirement = COMPONENT_REQUIREMENTS[id];
		for (const color of requirement.colors) {
			colors.add(color);
		}
		for (const material of requirement.materials) {
			materials.add(material);
		}
	}

	/* Escape hatch: subtract excluded colors/materials from the final result. */
	if (exclude?.colors) {
		for (const color of exclude.colors) {
			colors.delete(color);
		}
	}
	if (exclude?.materials) {
		for (const material of exclude.materials) {
			materials.delete(material);
		}
	}

	return { colors, materials, highContrast };
};
