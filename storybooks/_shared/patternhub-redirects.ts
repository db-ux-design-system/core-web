/**
 * Writes redirect pages for the URLs of the former Patternhub into a deploy
 * directory, so bookmarks and external links keep working:
 *
 * - `/` -> the composition Storybook
 * - `/components/<category>/<name>[/<tab>]` -> the overview page of the
 *   component (parts: their section on the page of the main component),
 *   `properties` -> `#properties`, `how-to-use` -> `#usage-notes`,
 *   `migration` -> `#migration`
 * - Foundations and guides -> their Storybook page or the platform
 *   (`resolvePatternhubRoute` of foundations/links.ts)
 *
 * The Patternhub framework switch (`?current=angular`) selects the framework
 * ref of the composition Storybook. Targets are relative, so the pages work
 * below every `review/<branch>/` and `version/<name>/`.
 *
 *   node storybooks/_shared/patternhub-redirects.ts <out-dir>
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { resolvePatternhubRoute } from './foundations/links.ts';
import { getComponentMeta, getStructure } from './overview/meta.ts';

const ROOT = resolve(import.meta.dirname, '..', '..');
const [outDir] = process.argv.slice(2);
if (!outDir) {
	throw new Error('Usage: patternhub-redirects.ts <out-dir>');
}

const PLATFORM = 'https://design-system.deutschebahn.com/documentation';
const COMPOSITION = 'composition-storybook/';

type Category = {
	name: string;
	subNavigation: Array<{ name: string }>;
};
const categories = JSON.parse(
	readFileSync(
		join(ROOT, 'showcases/patternhub/data/components.json'),
		'utf8'
	)
) as Category[];

const { main, parts } = getStructure();
const mainOf = new Map(
	Object.entries(parts).flatMap(([owner, list]) =>
		list.map((part) => [part, owner])
	)
);
const idOf = (name: string) => getComponentMeta(name).title.toLowerCase();

/** Storybook `path` of a component page without the ref prefix. */
const componentPath = (name: string, tab?: string): string | undefined => {
	const owner = mainOf.get(name) ?? name;
	if (!main.includes(owner)) {
		return undefined;
	}

	const isPart = owner !== name;
	const anchor = isPart
		? `#db${name.replaceAll('-', '')}`
		: ({
				properties: '#properties',
				'how-to-use': '#usage-notes',
				migration: '#migration'
			}[tab ?? ''] ?? '');
	return `/docs/components-${idOf(owner)}-overview--docs${anchor}`;
};

/** Every page of the Patternhub and its new home. */
const redirects = new Map<string, { storybookPath?: string; url?: string }>();

for (const category of categories) {
	for (const { name } of category.subNavigation) {
		for (const tab of [
			undefined,
			'overview',
			'properties',
			'how-to-use',
			'migration'
		]) {
			const path = componentPath(name, tab);
			const route = `/components/${category.name}/${name}${tab ? `/${tab}` : ''}`;
			redirects.set(
				route,
				path
					? { storybookPath: path }
					: { storybookPath: '/docs/getting-started--docs' }
			);
		}
	}
}

const OTHER_ROUTES = [
	'/foundations',
	'/foundations/readme',
	'/foundations/colors',
	'/foundations/colors/readme',
	'/foundations/colors/color-schemes',
	'/foundations/colors/color-modes',
	'/foundations/font-sizes',
	'/foundations/font-sizes/readme',
	'/foundations/font-sizes/overview',
	'/foundations/icons',
	'/foundations/icons/readme',
	'/foundations/icons/custom-icons',
	'/foundations/icons/overview',
	'/foundations/densities',
	'/foundations/densities/readme',
	'/foundations/densities/examples',
	'/foundations/variables',
	'/foundations/variables/readme',
	'/foundations/variables/examples',
	'/foundations/test-table',
	'/foundations/ide',
	'/foundations/performance',
	'/foundations/browser-support',
	'/foundations/playgrounds',
	'/components',
	'/components/readme',
	'/components/misc',
	'/components/misc/router-usage',
	'/components/misc/custom-components',
	'/components/misc/testing',
	'/components/misc/validation',
	'/components/misc/backdrop'
];
/** Section pages of the Patternhub that only list their sub pages. */
const ALIASES: Record<string, string> = {
	'/foundations/colors': '/foundations/colors/readme',
	'/foundations/font-sizes': '/foundations/font-sizes/readme',
	'/foundations/icons': '/foundations/icons/readme',
	'/foundations/densities': '/foundations/densities/readme',
	'/foundations/variables': '/foundations/variables/readme',
	'/components': '/components/readme'
};
const FIXED: Record<string, { storybookPath?: string; url?: string }> = {
	'/foundations': { storybookPath: '/docs/foundations-colors--docs' },
	'/foundations/playgrounds': { url: `${PLATFORM}/learn/examples` },
	'/components/misc': { url: `${PLATFORM}/learn` }
};

const toTarget = (href: string): { storybookPath?: string; url?: string } =>
	href.startsWith('?path=')
		? { storybookPath: href.slice('?path='.length) }
		: { url: href };

for (const route of OTHER_ROUTES) {
	const fixed = FIXED[route];
	const href: string | undefined = fixed
		? undefined
		: resolvePatternhubRoute(ALIASES[route] ?? route);
	if (!fixed && !href) {
		throw new Error(`[patternhub-redirects] no target for ${route}`);
	}

	redirects.set(route, fixed ?? toTarget(href ?? ''));
}

/** Framework of the Patternhub switch -> ref of the composition Storybook. */
const REFS = {
	react: 'react',
	angular: 'angular',
	vue: 'vue',
	html: 'html',
	stencil: 'webcomponents'
};

const page = (
	route: string,
	target: { storybookPath?: string; url?: string }
): string => {
	const depth = route.split('/').filter(Boolean).length - 1;
	const toRoot = depth > 0 ? '../'.repeat(depth) : './';
	// Component pages live in the framework refs (`react_components-…`).
	const isComponent = target.storybookPath?.startsWith('/docs/components-');
	const fallback =
		target.url ??
		`${toRoot}${COMPOSITION}?path=${isComponent ? target.storybookPath?.replace('/docs/', '/docs/react_') : target.storybookPath}`;
	const script = isComponent
		? `<script>
const refs = ${JSON.stringify(REFS)};
const ref = refs[new URLSearchParams(location.search).get("current")] ?? "react";
location.replace(${JSON.stringify(`${toRoot}${COMPOSITION}?path=`)} + ${JSON.stringify(target.storybookPath)}.replace("/docs/", "/docs/" + ref + "_"));
</script>`
		: `<script>location.replace(${JSON.stringify(fallback)});</script>`;
	return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Moved – DB Design System</title>
<meta name="robots" content="noindex">
<meta http-equiv="refresh" content="0; url=${fallback}">
<link rel="canonical" href="${fallback}">
${script}
</head>
<body>
<p>This page has moved: <a href="${fallback}">${fallback}</a></p>
</body>
</html>
`;
};

const write = (file: string, content: string) => {
	mkdirSync(dirname(file), { recursive: true });
	writeFileSync(file, content);
};

// The start page of the deploy.
write(
	join(outDir, 'index.html'),
	page('/index', { storybookPath: '/docs/getting-started--docs' })
);
for (const [route, target] of redirects) {
	// GitHub Pages serves `/a/b` from `a/b.html` and `/a/b/` from `a/b/index.html`.
	const html = page(route, target);
	write(join(outDir, `${route}.html`), html);
	write(join(outDir, route, 'index.html'), page(`${route}/index`, target));
}

console.log(
	`[patternhub-redirects] wrote ${redirects.size + 1} redirects to ${outDir}`
);
