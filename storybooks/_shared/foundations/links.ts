/**
 * PROTOTYPE – rewrites the links of the Foundations and Guides docs for the
 * composition Storybook (see generate-foundations.ts).
 *
 * The docs link relative to their Patternhub route. Each link is resolved
 * against that route and then mapped:
 * 1. to a Foundations page of this Storybook,
 * 2. to the Design System Platform, where the content lives there,
 * 3. otherwise to the Patternhub of the latest release – a temporary target
 *    until the content has moved (interactive examples).
 *
 * Absolute links to the unreleased Patternhub (`review/main`) point to the
 * latest release instead.
 */
import { PAGES, storybookPath } from './pages.ts';

const ORIGIN = 'https://design-system.deutschebahn.com';
const PATTERNHUB = `${ORIGIN}/core-web/version/latest`;
const PLATFORM = `${ORIGIN}/documentation`;
const REPOSITORY = 'https://github.com/db-ux-design-system/core-web/blob/main';

const storybookPage = (id: string) => storybookPath('Foundations', id);

/** Patternhub routes with another home, besides the pages in PAGES. */
const ROUTES: Record<string, string> = {
	'/foundations/test-table': storybookPage('test-table'),
	'/foundations/icons/customicons.md': storybookPage('custom-icons'),
	'/foundations/icons/overview': `${PLATFORM}/icons`,
	// No such page in the Patternhub (404); the color guidelines are on the platform.
	'/foundations/colors/color-usage-guide': `${PLATFORM}/foundation/colors`,
	'/foundations/readme.md': `${PLATFORM}/learn/foundation-setup`,
	'/foundations/readme': `${PLATFORM}/learn/foundation-setup`,
	'/components/readme': '?path=/docs/getting-started--docs'
};

/** Repository files with a page in this Storybook. */
const SOURCES: Record<string, string> = {};

for (const page of PAGES) {
	ROUTES[page.route] = storybookPath(page.group, page.id);
	SOURCES[`/${page.source}`] = storybookPath(page.group, page.id);
}

/** Relative link of a guide: resolved against its file in the repository. */
const resolveRepositoryLink = (href: string, source: string): string => {
	const { pathname, hash } = new URL(href, `${ORIGIN}/${source}`);
	return SOURCES[pathname] ?? `${REPOSITORY}${pathname}${hash}`;
};

const resolveLink = (href: string, route: string, source?: string): string => {
	if (href.startsWith('#') || href.startsWith('?')) {
		return href;
	}
	if (/^https?:\/\//.test(href)) {
		return href.replace(`${ORIGIN}/core-web/review/main`, PATTERNHUB);
	}
	if (source) {
		return resolveRepositoryLink(href, source);
	}
	const { pathname, hash } = new URL(href, `${ORIGIN}${route}`);
	const target = ROUTES[pathname.toLowerCase()];
	if (target) {
		return `${target}${target.startsWith('?') ? '' : hash}`;
	}
	return `${PATTERNHUB}${pathname}${hash}`;
};

/**
 * Rewrites Markdown links (`[text](href)`) of a docs file. Pass `source` (the
 * file path in the repository) for files whose relative links point to other
 * repository files.
 */
export const rewriteDocsLinks = (
	markdown: string,
	route: string,
	source?: string
): string =>
	markdown.replaceAll(
		/\]\(([^)\s]+)\)/g,
		(_, href: string) => `](${resolveLink(href, route, source)})`
	);
