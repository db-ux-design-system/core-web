/**
 * Rewrites the links of the Foundations docs for the composition
 * Storybook (see generate-foundations.ts).
 *
 * The docs link relative to their Patternhub route. Each link is resolved
 * against that route and then mapped:
 * 1. to a Foundations page of this Storybook,
 * 2. to the Design System Platform, where the content lives there (guides,
 *    icons, setup),
 * 3. otherwise to the Patternhub of the latest release (content that has
 *    not moved).
 *
 * Absolute links to the unreleased Patternhub (`review/main`) point to the
 * latest release instead.
 */
import { PAGES, storybookPath } from './pages.ts';

const ORIGIN = 'https://design-system.deutschebahn.com';
const PATTERNHUB = `${ORIGIN}/core-web/version/latest`;
const PLATFORM = `${ORIGIN}/documentation`;

/** Patternhub routes with another home, besides the pages in PAGES. */
const ROUTES: Record<string, string> = {
	'/foundations/test-table': storybookPath('test-table'),
	'/foundations/icons/customicons.md': storybookPath('custom-icons'),
	'/foundations/icons/overview': `${PLATFORM}/icons`,
	// No such page in the Patternhub (404); the color guidelines are on the platform.
	'/foundations/colors/color-usage-guide': `${PLATFORM}/foundation/colors`,
	'/foundations/readme.md': `${PLATFORM}/learn/foundation-setup`,
	'/foundations/readme': `${PLATFORM}/learn/foundation-setup`,
	'/components/readme': '?path=/docs/getting-started--docs',
	// The "Misc" pages of the Patternhub are Learn articles on the platform.
	'/components/misc/router-usage': `${PLATFORM}/learn/router-usage`,
	'/components/misc/custom-components': `${PLATFORM}/learn/custom-components`,
	'/components/misc/testing': `${PLATFORM}/learn/testing`,
	'/components/misc/validation': `${PLATFORM}/learn/form-validation`,
	'/components/misc/backdrop': `${PLATFORM}/learn/backdrop`
};

for (const page of PAGES) {
	ROUTES[page.route] = storybookPath(page.id);
	// The Patternhub example pages are the "Examples" of the page.
	for (const route of page.examples?.routes ?? []) {
		ROUTES[route] = `${storybookPath(page.id)}#examples`;
	}
}

const resolveLink = (href: string, route: string): string => {
	if (href.startsWith('#') || href.startsWith('?')) {
		return href;
	}
	if (/^https?:\/\//.test(href)) {
		return href.replace(`${ORIGIN}/core-web/review/main`, PATTERNHUB);
	}
	const { pathname, hash } = new URL(href, `${ORIGIN}${route}`);
	const target = ROUTES[pathname.toLowerCase()];
	if (target) {
		return `${target}${target.startsWith('?') ? '' : hash}`;
	}
	return `${PATTERNHUB}${pathname}${hash}`;
};

/** Rewrites Markdown links (`[text](href)`) of a foundations docs file. */
export const rewriteDocsLinks = (markdown: string, route: string): string =>
	markdown.replaceAll(
		/\]\(([^)\s]+)\)/g,
		(_, href: string) => `](${resolveLink(href, route)})`
	);
