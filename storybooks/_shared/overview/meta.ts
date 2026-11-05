/**
 * PROTOTYPE – metadata of a component overview page, read from the sources
 * that already exist in this repository. Only what has no source here comes
 * from `overrides.json`.
 *
 * | Field               | Source                                                  |
 * | ------------------- | ------------------------------------------------------- |
 * | title               | `export default function DB…` in `<name>.lite.tsx`      |
 * | accessibilityReview | `showcases/patternhub/data/_accessibility-review.json`  |
 * | platformUrl         | convention `components/<name>`, `control-panel-<x>` →   |
 * |                     | `components/control-panel/<x>`; `overrides.json` for    |
 * |                     | other paths or `false` (no platform page)                |
 * | summary, status     | `overrides.json` (they are maintained on the platform,  |
 * |                     | see the open decision in README.md)                     |
 * | requires            | `overrides.json`                                        |
 */
import { existsSync, readFileSync } from 'node:fs';
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
};

type Override = {
	summary?: string;
	status?: string;
	/** Path below `documentation/components/`, `false` for no platform page. */
	platformPath?: string | false;
	requires?: string[];
};

type Review = { name: string; status: string; date?: string };

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
	return {
		title: getTitle(name),
		summary: override.summary,
		platformUrl: getPlatformUrl(name),
		status: override.status,
		accessibilityReview: review && {
			status: REVIEW_STATUS[review.status] ?? review.status.toLowerCase(),
			date: review.date
		},
		requires: override.requires
	};
};
