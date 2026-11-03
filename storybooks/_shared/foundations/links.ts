/**
 * PROTOTYPE – rewrites the links of `packages/foundations/docs/*.md` for the
 * composition Storybook (see generate-foundations.ts).
 *
 * The docs link relative to their Patternhub route. Each link is resolved
 * against that route and then mapped:
 * 1. to a Foundations page of this Storybook,
 * 2. to the Design System Platform, where the content lives there,
 * 3. otherwise to the Patternhub of the latest release – a temporary target
 *    until the content has moved (interactive examples, test table).
 *
 * Absolute links to the unreleased Patternhub (`review/main`) point to the
 * latest release instead.
 */
import { PAGES } from './pages.ts';

const ORIGIN = 'https://design-system.deutschebahn.com';
const PATTERNHUB = `${ORIGIN}/core-web/version/latest`;
const PLATFORM = `${ORIGIN}/documentation`;

const storybookPage = (id: string) => `?path=/docs/foundations-${id}--docs`;

/** Patternhub routes with another home, besides the pages in PAGES. */
const ROUTES: Record<string, string> = {
	'/foundations/icons/customicons.md': storybookPage('custom-icons'),
	'/foundations/icons/overview': `${PLATFORM}/icons`,
	// No such page in the Patternhub (404); the color guidelines are on the platform.
	'/foundations/colors/color-usage-guide': `${PLATFORM}/foundation/colors`,
	'/foundations/readme.md': `${PLATFORM}/learn/foundation-setup`,
	'/foundations/readme': `${PLATFORM}/learn/foundation-setup`,
	'/components/readme': '?path=/docs/getting-started--docs'
};

for (const page of PAGES) {
	ROUTES[page.route] = storybookPage(page.id);
}

const resolveLink = (href: string, route: string): string => {
	if (href.startsWith('#') || href.startsWith('?')) return href;
	if (/^https?:\/\//.test(href)) {
		return href.replace(`${ORIGIN}/core-web/review/main`, PATTERNHUB);
	}
	const { pathname, hash } = new URL(href, `${ORIGIN}${route}`);
	const target = ROUTES[pathname.toLowerCase()];
	if (target) return `${target}${target.startsWith('?') ? '' : hash}`;
	return `${PATTERNHUB}${pathname}${hash}`;
};

/** Rewrites Markdown links (`[text](href)`) of a foundations docs file. */
export const rewriteDocsLinks = (markdown: string, route: string): string =>
	markdown.replace(
		/\]\(([^)\s]+)\)/g,
		(_, href: string) => `](${resolveLink(href, route)})`
	);
