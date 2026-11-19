/**
 * Metadata of a component overview page, read from the sources
 * that already exist: this repository and `/api/components.json` of the
 * Design System Platform (read from its copy `platform-components.json`,
 * see platform.ts). Only what has no source comes from `overrides.json`.
 *
 * | Field               | Source                                                  |
 * | ------------------- | ------------------------------------------------------- |
 * | title               | `export default function DB…` in `<name>.lite.tsx`      |
 * | summary, status     | platform `/api/components.json` (`description`, status) |
 * | accessibilityReview | `showcases/patternhub/data/_accessibility-review.json`  |
 * | platformUrl         | platform `/api/components.json`; without it the         |
 * |                     | convention `components/<name>`, `control-panel-<x>` →   |
 * |                     | `components/control-panel/<x>`; `overrides.json` for    |
 * |                     | other paths or `false` (no platform page)                |
 * | requires            | `overrides.json`                                        |
 */
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { readPlatformComponents } from './platform.ts';
import { COMPONENTS_DIR, getStructure } from './structure.ts';

export { getStructure, type Structure } from './structure.ts';

const ROOT = resolve(import.meta.dirname, '..', '..', '..');
const PLATFORM = 'https://design-system.deutschebahn.com/documentation';

/**
 * Main components without an overview page. Empty: every main component of
 * `getStructure()` gets one (components without examples are skipped with a
 * warning by the generator).
 */
export const EXCLUDE: string[] = [];

export type ComponentMeta = {
	/** Page title: `DBButton`, `DBHeading` for the heading family. */
	title: string;
	/** Component the page attaches to (CSF `component`): `DBHeadingH1`. */
	component: string;
	summary?: string;
	/** Platform guidelines page; missing when the platform has none. */
	platformUrl?: string;
	status?: string;
	accessibilityReview?: { status: string; date?: string };
	/**
	 * Packages the component needs beyond the framework setup on the
	 * platform. Shown as a note on the overview; most components have none.
	 */
	requires?: string[];
	/** `false`: needs JavaScript, no plain HTML version (overrides.json). */
	html?: boolean;
	/** Parts documented on this page, e.g. DBTabItem on the DBTabs page. */
	parts: Array<{ name: string; title: string }>;
};

type Override = {
	/** `false` for components that need JavaScript (custom-select). */
	html?: boolean;
	/** Main component of a part, when the name prefix rule does not apply. */
	partOf?: string;
	/** Path below `documentation/components/`, `false` for no platform page. */
	platformPath?: string | false;
	/** Full guidelines URL outside `documentation/components/` (icon). */
	platformUrl?: string;
	requires?: string[];
};

type Review = { name: string; status: string; date?: string };

// Copy of the platform endpoint in the repository, see platform.ts.
const platformComponents = readPlatformComponents();

/** Statuses shown on the overview; sub components (`sub`) have none. */
const STATUSES = new Set(['stable', 'beta', 'concept', 'deprecated']);

const read = (path: string): string => readFileSync(join(ROOT, path), 'utf8');

const overrides = JSON.parse(
	readFileSync(join(import.meta.dirname, 'overrides.json'), 'utf8')
) as Record<string, Override>;

const reviews = JSON.parse(
	read('showcases/patternhub/data/_accessibility-review.json')
) as Review[];

const REVIEW_STATUS: Record<string, string> = {
	DONE: 'done',
	REVIEW: 'in review',
	PROGRESS: 'in progress'
};

const pascal = (value: string): string =>
	value.replaceAll(/(^|-)(\w)/g, (_, __, char: string) => char.toUpperCase());

/** `DBButton` from `button.lite.tsx`; families without one (heading) by name. */
const getTitle = (name: string): string => {
	const file = `packages/components/src/components/${name}/${name}.lite.tsx`;
	if (existsSync(join(ROOT, file))) {
		const title = /export default function (DB\w+)/.exec(read(file))?.[1];
		if (title) {
			return title;
		}
	}

	return `DB${pascal(name)}`;
};

/**
 * Exported components of a folder: `DBButton`; for families without
 * `<name>.lite.tsx` all of them (`DBHeadingH1` … `DBCustomHeading`,
 * `DBControlPanelActions1`, `DBControlPanelActions2`). The first one is
 * `<name>.lite.tsx`, then the files starting with the name, then the rest.
 */
const getComponents = (name: string): string[] => {
	const dir = join(ROOT, 'packages/components/src/components', name);
	const rank = (file: string) =>
		file === `${name}.lite.tsx` ? 0 : file.startsWith(`${name}-`) ? 1 : 2;
	const titles = readdirSync(dir)
		.filter((file) => file.endsWith('.lite.tsx'))
		.toSorted((a, b) => rank(a) - rank(b) || a.localeCompare(b))
		.map(
			(file) =>
				/export default function (DB\w+)/.exec(
					read(join(COMPONENTS_DIR, name, file))
				)?.[1]
		)
		.filter((title): title is string => Boolean(title));
	return titles.length > 0 ? titles : [getTitle(name)];
};

const getPlatformUrl = (name: string): string | undefined => {
	const path = overrides[name]?.platformPath;
	if (path === false) {
		return undefined;
	}

	const conventional = name.startsWith('control-panel-')
		? `control-panel/${name.slice('control-panel-'.length)}`
		: name;
	return `${PLATFORM}/components/${path ?? conventional}`;
};

export const getComponentMeta = (name: string): ComponentMeta => {
	if (!existsSync(join(ROOT, 'packages/components/src/components', name))) {
		throw new Error(`[overviews] there is no component "${name}"`);
	}

	const override = overrides[name] ?? {};
	const review = reviews.find((entry) => entry.name === name);
	const platform = platformComponents[name];
	const platformUrl =
		override.platformPath === false
			? undefined
			: (override.platformUrl ?? platform?.url ?? getPlatformUrl(name));
	const [component, ...siblings] = getComponents(name);
	return {
		title: getTitle(name),
		component,
		summary: platform?.description,
		platformUrl,
		// Parts, plus the other components of a family (DBHeadingH2 … on the
		// DBHeading page). A part folder can hold several components.
		parts: [
			...siblings.map((title) => ({ name, title })),
			...(getStructure().parts[name] ?? []).flatMap((part) =>
				getComponents(part).map((title) => ({ name: part, title }))
			)
		],
		status:
			platform?.status && STATUSES.has(platform.status)
				? platform.status
				: undefined,
		accessibilityReview: review && {
			status: REVIEW_STATUS[review.status] ?? review.status.toLowerCase(),
			date: review.date
		},
		requires: override.requires,
		html: override.html
	};
};
