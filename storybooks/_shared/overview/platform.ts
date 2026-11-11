/**
 * Summary, status and guidelines URL of the components, from
 * `/api/components.json` of the Design System Platform (maintained there only).
 *
 * The build reads the copy `platform-components.json` next to this file, not
 * the endpoint: a build gives the same result every time, also offline, and a
 * slow or failing endpoint cannot silently drop summaries and statuses.
 * `update-platform-components.ts` refreshes the copy.
 */
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

export type PlatformComponent = {
	title: string;
	description?: string;
	status?: string;
	/** Only a URL of the published platform, see `toPlatformUrl`. */
	url?: string;
};

/** The copy of the endpoint that the build reads. */
export const PLATFORM_COMPONENTS_FILE = join(
	import.meta.dirname,
	'platform-components.json'
);

/** Origin every guidelines link must have, also from a local platform build. */
const PUBLISHED_ORIGIN = 'https://design-system.deutschebahn.com';

/**
 * Origin of the endpoint for the update; another one, e.g. a local platform
 * build, via `DB_UX_PLATFORM_URL=http://localhost:4329`.
 */
export const PLATFORM_ORIGIN =
	process.env['DB_UX_PLATFORM_URL'] ?? PUBLISHED_ORIGIN;

/** A URL of the published platform, otherwise `undefined`. */
const toPlatformUrl = (value: unknown): string | undefined => {
	if (typeof value !== 'string') {
		return undefined;
	}

	try {
		const url = new URL(value);
		return url.origin === PUBLISHED_ORIGIN ? url.href : undefined;
	} catch {
		return undefined;
	}
};

/**
 * Keeps only the fields of the expected type, sorted by name: the response is
 * remote data. Texts are embedded as strings into the MDX
 * (generate-overviews.ts), URLs only when they point to the published platform.
 */
export const sanitize = (data: unknown): Record<string, PlatformComponent> => {
	if (!data || typeof data !== 'object' || Array.isArray(data)) {
		throw new Error('expected an object of components');
	}

	const text = (value: unknown) =>
		typeof value === 'string' ? value : undefined;
	return Object.fromEntries(
		Object.entries(data as Record<string, Record<string, unknown>>)
			.toSorted(([a], [b]) => a.localeCompare(b))
			.map(([name, entry]) => [
				name,
				{
					title: text(entry?.['title']) ?? name,
					description: text(entry?.['description']),
					status: text(entry?.['status']),
					url: toPlatformUrl(entry?.['url'])
				}
			])
	);
};

/**
 * The components of the copy. Fails when it is missing or invalid, so a
 * Storybook is never built without summaries and statuses.
 */
export const readPlatformComponents = (): Record<string, PlatformComponent> => {
	const hint =
		'Run `node storybooks/_shared/overview/update-platform-components.ts`.';
	if (!existsSync(PLATFORM_COMPONENTS_FILE)) {
		throw new Error(
			`[overviews] ${PLATFORM_COMPONENTS_FILE} is missing. ${hint}`
		);
	}

	try {
		const components = sanitize(
			JSON.parse(readFileSync(PLATFORM_COMPONENTS_FILE, 'utf8'))
		);
		if (Object.keys(components).length === 0) {
			throw new Error('no components');
		}

		return components;
	} catch (error) {
		throw new Error(
			`[overviews] ${PLATFORM_COMPONENTS_FILE} is invalid (${(error as Error).message}). ${hint}`,
			{ cause: error }
		);
	}
};
