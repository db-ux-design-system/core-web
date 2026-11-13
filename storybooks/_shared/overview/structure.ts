/**
 * Structure of the components, shared by everything that links to or
 * reports on the overview pages:
 *
 * - meta.ts / generate-overviews.ts: which pages exist and which parts they
 *   document
 * - output/stencil/custom-elements-manifest.config.js: documentation links of
 *   web-types.json (IDE)
 * - ../foundations/generate-test-table.ts: one row per component folder
 *
 * Plain Node (no network, no Storybook): the manifest config imports it with
 * Node's type stripping, so only erasable TypeScript syntax.
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..', '..', '..');
export const COMPONENTS_DIR = 'packages/components/src/components';

export type Structure = {
	/** Components with an own overview page, sorted. */
	main: string[];
	/** Parts per main component, e.g. `{ tabs: ['tab-item', …] }`. */
	parts: Record<string, string[]>;
};

type Override = { partOf?: string };

const overrides = JSON.parse(
	readFileSync(join(import.meta.dirname, 'overrides.json'), 'utf8')
) as Record<string, Override>;

/** Component folders of packages/components, sorted. */
export const getFolders = (): string[] =>
	readdirSync(join(ROOT, COMPONENTS_DIR), { withFileTypes: true })
		.filter((entry) => entry.isDirectory())
		.map((entry) => entry.name)
		.toSorted();

/**
 * Main component of a folder. A part is a component whose name starts with
 * the name of another component plus `-` (longest match, e.g. `table-row` ->
 * `table`, `custom-select-list-item` -> `custom-select-list` ->
 * `custom-select`), or one with `partOf` in `overrides.json`. Chains are
 * resolved to the main component.
 */
export const getMainComponent = (
	name: string,
	folders: string[] = getFolders()
): string => {
	const known = new Set(folders);
	const directParent = (current: string): string | undefined => {
		const override = overrides[current]?.partOf;
		if (override) {
			if (!known.has(override)) {
				throw new Error(
					`[overviews] overrides.json: "${current}" is part of unknown "${override}"`
				);
			}

			return override;
		}

		return folders
			.filter((other) => current.startsWith(`${other}-`))
			.toSorted((a, b) => b.length - a.length)[0];
	};

	const seen = new Set<string>();
	let current = name;
	let parent = directParent(current);
	while (parent) {
		if (seen.has(parent)) {
			throw new Error(`[overviews] partOf cycle at "${name}"`);
		}

		seen.add(parent);
		current = parent;
		parent = directParent(current);
	}

	return current;
};

/** Main components and their parts. Works without network. */
export const getStructure = (): Structure => {
	const folders = getFolders();
	const parts: Record<string, string[]> = {};
	const main: string[] = [];
	for (const name of folders) {
		const root = getMainComponent(name, folders);
		if (root === name) {
			main.push(name);
		} else {
			(parts[root] ??= []).push(name);
		}
	}

	return { main, parts };
};

/**
 * Component folder of an element name without `db-`: the folder itself, or
 * the folder of a family member without an own folder (`heading-h-1` and
 * `custom-heading` -> `heading`). The longest matching folder wins.
 */
export const getFolderOfElement = (
	name: string,
	folders: string[] = getFolders()
): string =>
	folders
		.filter(
			(folder) =>
				name === folder ||
				name.startsWith(`${folder}-`) ||
				name.endsWith(`-${folder}`)
		)
		.toSorted((a, b) => b.length - a.length)[0] ?? name;

/** Section id of a component on an overview page: `DBTabItem` -> `dbtabitem`. */
const toId = (name: string) => `db${name.replaceAll('-', '')}`;

/**
 * Overview page of an element (name without `db-`) and, for parts and family
 * members, the section on it: `tab-item` ->
 * `components-dbtabs-overview--docs#dbtabitem`. Components without examples
 * (DBPage) have no overview page: `undefined`.
 */
export const getOverviewTarget = (name: string): string | undefined => {
	const folders = getFolders();
	const main = getMainComponent(getFolderOfElement(name, folders), folders);
	if (!existsSync(join(ROOT, COMPONENTS_DIR, main, 'examples'))) {
		return undefined;
	}

	const anchor = name === main ? '' : `#${toId(name)}`;
	return `components-${toId(main)}-overview--docs${anchor}`;
};
