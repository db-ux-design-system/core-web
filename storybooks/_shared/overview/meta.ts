/**
 * PROTOTYPE – metadata of a component overview page, read from the sources
 * that already exist: this repository and `/api/components.json` of the
 * Design System Platform. Only what has no source comes from
 * `overrides.json`.
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

const ROOT = resolve(import.meta.dirname, '..', '..', '..');
const PLATFORM = 'https://design-system.deutschebahn.com/documentation';

/**
 * Components that get an overview page. The rollout adds the others once the
 * open decisions (sub components, missing docs files) are made.
 */
export const ROLLOUT = ['button'];

export type ComponentMeta = {
	title: string;
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
	/** Parts documented on this page, e.g. DBTabItem on the DBTabs page. */
	parts: Array<{ name: string; title: string }>;
};

export type Structure = {
	/** Components with an own overview page, sorted. */
	main: string[];
	/** Parts per main component, e.g. `{ tabs: ['tab-item', …] }`. */
	parts: Record<string, string[]>;
};

type Override = {
	/** Main component of a part, when the name prefix rule does not apply. */
	partOf?: string;
	/** Path below `documentation/components/`, `false` for no platform page. */
	platformPath?: string | false;
	/** Full guidelines URL outside `documentation/components/` (icon). */
	platformUrl?: string;
	requires?: string[];
};

type Review = { name: string; status: string; date?: string };

type PlatformComponent = {
	title: string;
	description?: string;
	status?: string;
	url: string;
};

/**
 * `/api/components.json` of the Design System Platform: description, status
 * and URL of every component page, maintained there only. Another origin, e.g.
 * a local platform build, via `DB_UX_PLATFORM_URL=http://localhost:4329`.
 * Without it (offline, or before the endpoint is released) the overview pages
 * show no summary and no status, and the guidelines link uses the URL
 * convention below.
 */
const PLATFORM_ORIGIN =
	process.env.DB_UX_PLATFORM_URL ?? 'https://design-system.deutschebahn.com';

const loadPlatformComponents = async (): Promise<
	Record<string, PlatformComponent>
> => {
	const url = `${PLATFORM_ORIGIN}/api/components.json`;
	try {
		const response = await fetch(url, {
			signal: AbortSignal.timeout(10_000)
		});
		if (!response.ok) {
			throw new Error(`HTTP ${response.status}`);
		}

		return (await response.json()) as Record<string, PlatformComponent>;
	} catch (error) {
		console.warn(
			`[overviews] ${url} not available (${(error as Error).message}): no summary and status`
		);
		return {};
	}
};

const platformComponents = await loadPlatformComponents();

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

const COMPONENTS_DIR = 'packages/components/src/components';

/**
 * Main components and their parts. A part is a component whose name starts
 * with the name of another component plus `-` (longest match, e.g.
 * `table-row` -> `table`, `custom-select-list-item` -> `custom-select-list`
 * -> `custom-select`), or one with `partOf` in `overrides.json`. Chains are
 * resolved to the main component. Works without network, so the structure is
 * the same offline.
 */
export const getStructure = (): Structure => {
	const names = readdirSync(join(ROOT, COMPONENTS_DIR), {
		withFileTypes: true
	})
		.filter((entry) => entry.isDirectory())
		.map((entry) => entry.name)
		.toSorted();
	const known = new Set(names);

	const directParent = (name: string): string | undefined => {
		const override = overrides[name]?.partOf;
		if (override) {
			if (!known.has(override)) {
				throw new Error(
					`[overviews] overrides.json: "${name}" is part of unknown "${override}"`
				);
			}

			return override;
		}

		return names
			.filter((other) => name.startsWith(`${other}-`))
			.toSorted((a, b) => b.length - a.length)[0];
	};

	const mainOf = (name: string): string => {
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

	const parts: Record<string, string[]> = {};
	const main: string[] = [];
	for (const name of names) {
		const root = mainOf(name);
		if (root === name) {
			main.push(name);
		} else {
			(parts[root] ??= []).push(name);
		}
	}

	return { main, parts };
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
	return {
		title: getTitle(name),
		summary: platform?.description,
		platformUrl,
		parts: (getStructure().parts[name] ?? []).map((part) => ({
			name: part,
			title: getTitle(part)
		})),
		status:
			platform?.status && STATUSES.has(platform.status)
				? platform.status
				: undefined,
		accessibilityReview: review && {
			status: REVIEW_STATUS[review.status] ?? review.status.toLowerCase(),
			date: review.date
		},
		requires: override.requires
	};
};
