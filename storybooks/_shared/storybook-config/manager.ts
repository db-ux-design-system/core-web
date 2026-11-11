import { addons } from 'storybook/manager-api';
import { BRAND_NAME, managerTheme } from './theme';

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
addons.setConfig({
	theme: managerTheme
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
