import { GLOBALS_UPDATED, SET_GLOBALS } from 'storybook/internal/core-events';
import type { Globals } from 'storybook/internal/types';
import { addons } from 'storybook/manager-api';
import { DARK_QUERY, MANAGER_MODE_ATTRIBUTE, resolveMode } from './mode';
import { BRAND_NAME, managerThemes } from './theme';

/*
 * Theme of the Storybook UI (sidebar, toolbar, title).
 * Copied into `.storybook/manager.ts` of every Storybook by copy-config.ts
 * (git-ignored there). Edit this file, not the copies.
 *
 * The sidebar styles the theme API cannot set are CSS escape hatches in
 * manager.css, inlined into the manager head by head.ts.
 */
// Storybook's default toolbar and settings menu, in the colors of the theme
// (manager.css styles the buttons like the sidebar items).
/*
 * The UI follows the "Mode" toolbar entry (mode.ts) like the stories and the
 * docs pages. On `<html>`:
 * - `data-db-sb-mode` (light/dark): the `--db-sb-*` values of manager.css
 *   (head.ts)
 * - `data-db-sb-mode-setting` (auto/light/dark): the mode for the previews of
 *   the refs, which get no globals from Storybook (mode.ts)
 * plus the theme for Storybook's own components.
 */
const SCHEME_ATTRIBUTE = 'dbSbMode';
const root = document.documentElement;
/*
 * `globals=mode:dark` in the URL. Storybook writes the selected globals there
 * and removes them for the default, so the URL wins over the globals the
 * previews report: in the composition Storybook only the host preview reports
 * globals, with its default even when a ref story is open.
 */
const getUrlMode = () =>
	new URLSearchParams(globalThis.location.search)
		.get('globals')
		?.match(/(?:^|;)mode:(\w+)/)?.[1];

const applyManagerMode = (mode: unknown): 'light' | 'dark' => {
	const setting = mode === 'light' || mode === 'dark' ? mode : 'auto';
	const scheme = resolveMode(setting);
	root.dataset[MANAGER_MODE_ATTRIBUTE] = setting;
	root.dataset[SCHEME_ATTRIBUTE] = scheme;
	return scheme;
};

addons.setConfig({
	theme: managerThemes[applyManagerMode(getUrlMode())]
});

addons.register('db-ux/mode', (api) => {
	let reportedMode: unknown = api.getGlobals?.().mode;
	const update = () => {
		const previous = root.dataset[SCHEME_ATTRIBUTE];
		const scheme = applyManagerMode(getUrlMode() ?? reportedMode);
		if (previous !== scheme) {
			api.setOptions({ theme: managerThemes[scheme] });
		}
	};

	const onGlobals = ({ globals }: { globals: Globals }) => {
		reportedMode = globals.mode;
		update();
		// Storybook updates the URL after the globals.
		setTimeout(update, 0);
	};

	api.on(SET_GLOBALS, onGlobals);
	api.on(GLOBALS_UPDATED, onGlobals);
	globalThis.matchMedia?.(DARK_QUERY).addEventListener('change', update);
	update();
});

/*
 * The highlighted item is the keyboard cursor of the sidebar (arrow keys move
 * it without moving the focus), so it has to stay visible. Storybook marks it
 * only in a generated rule, with the ids on the tree container; a static
 * stylesheet cannot know them. Mirror that rule with the hover overlay of
 * manager.css (`--db-sb-item-hovered`).
 */
const ITEM = '.sidebar-item[data-nodetype]';
const highlightStyle = document.createElement('style');
highlightStyle.dataset['dbTheme'] = 'sidebar-highlight';
document.head.append(highlightStyle);

const updateHighlight = () => {
	const container = document.querySelector('[data-highlighted-item-id]');
	const itemId =
		container instanceof HTMLElement
			? container.dataset['highlightedItemId']
			: undefined;
	const refId =
		container instanceof HTMLElement
			? container.dataset['highlightedRefId']
			: undefined;
	highlightStyle.textContent =
		itemId && refId
			? `${ITEM}[data-ref-id="${CSS.escape(refId)}"][data-item-id="${CSS.escape(itemId)}"]:not([data-selected="true"]) { background: var(--db-sb-item-hovered) !important; }`
			: '';
};

new MutationObserver(updateHighlight).observe(document.body, {
	attributes: true,
	attributeFilter: ['data-highlighted-item-id', 'data-highlighted-ref-id'],
	childList: true,
	subtree: true
});

/*
 * The mobile bar shows the story path without the framework ref, so in the
 * composition Storybook "Components/DBButton/Overview/Docs" looks the same for
 * every framework. Put the ref title of the current story into
 * `--db-sb-ref-title`, which manager.css shows before the path. A CSS
 * variable instead of changing the text, because React renders that text.
 */
type Api = Parameters<Parameters<typeof addons.register>[1]>[0];
let storybookApi: Api | undefined;
addons.register('db-ux/ref-title', (api) => {
	storybookApi = api;
});

const REF_TITLE = '--db-sb-ref-title';
const updateRefTitle = () => {
	const refId = storybookApi?.getCurrentStoryData()?.refId;
	const title = refId ? storybookApi?.getRefs()[refId]?.title : undefined;
	const value = title
		? `"${title.replaceAll('"', String.raw`\"`)} \u22C5 "`
		: '';
	if (document.documentElement.style.getPropertyValue(REF_TITLE) !== value) {
		if (value) {
			document.documentElement.style.setProperty(REF_TITLE, value);
		} else {
			document.documentElement.style.removeProperty(REF_TITLE);
		}
	}
};

// The path text changes with every story; the bar mounts on small screens.
new MutationObserver(updateRefTitle).observe(document.body, {
	characterData: true,
	childList: true,
	subtree: true
});

/*
 * Storybook ends the tab title with "Storybook" and ignores `brandTitle`
 * there. Replace the suffix whenever Storybook sets a new title.
 */
const TITLE_SUFFIX = ' ⋅ Storybook';
const replaceTitleSuffix = () => {
	if (document.title.endsWith(TITLE_SUFFIX)) {
		document.title = `${document.title.slice(0, -TITLE_SUFFIX.length)} ⋅ ${BRAND_NAME}`;
	}
};

new MutationObserver(replaceTitleSuffix).observe(
	document.querySelector('title') ?? document.head,
	{ childList: true, characterData: true, subtree: true }
);
replaceTitleSuffix();
