import { addons } from 'storybook/manager-api';
import { BRAND_NAME, managerTheme } from './theme';

/*
 * PROTOTYPE – theme of the Storybook UI (sidebar, toolbar, title).
 * Copied into `.storybook/manager.ts` of every Storybook by sync.ts.
 *
 * The sidebar styles the theme API cannot set are CSS escape hatches in
 * manager.css, inlined into manager-head.html by sync.ts.
 */
// No toolbar: its tools (backgrounds, grid, outline, zoom) are not needed for
// the docs pages. The mode of the stories stays available via the
// `globals=mode:dark` URL parameter (mode.ts).
// `showToolbar` alone is only the initial value; the customisation keeps the
// toolbar hidden also when a stored layout or the shortcut would show it.
addons.setConfig({
	theme: managerTheme,
	showToolbar: false,
	layoutCustomisations: { showToolbar: () => false }
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
highlightStyle.dataset.dbTheme = 'sidebar-highlight';
document.head.append(highlightStyle);

const updateHighlight = () => {
	const container = document.querySelector('[data-highlighted-item-id]');
	const itemId =
		container instanceof HTMLElement
			? container.dataset.highlightedItemId
			: undefined;
	const refId =
		container instanceof HTMLElement
			? container.dataset.highlightedRefId
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
