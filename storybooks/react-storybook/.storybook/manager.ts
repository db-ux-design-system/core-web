import { addons } from 'storybook/manager-api';
import { BRAND_NAME, managerTheme } from './theme';
import values from './theme-values.json';

/*
 * PROTOTYPE – theme of the Storybook UI (sidebar, toolbar, title).
 * Copied into `.storybook/manager.ts` of every Storybook by sync.ts.
 */
addons.setConfig({ theme: managerTheme });

/*
 * Sidebar in the style of the control panel navigation
 * (packages/components/src/styles/internal/_navigation-item.scss and
 * _indicator.scss):
 * - level 1 background with a border to the content
 * - items with a transparent background, the hover and pressed overlay
 * - the active item in bold with the vertical brand indicator, no fill
 * - icons in the text color (icon passing uses currentcolor)
 *
 * The theme API cannot set these: Storybook fills the selected item with
 * `colorSecondary` and hard-codes the icon colors per node type. The values
 * come from the design system tokens (theme-values.json). `!important`
 * overrides the generated Storybook styles, whose specificity varies.
 */
const ITEM = '.sidebar-item[data-nodetype]';
const sidebarStyles = [
	`.sidebar-container { border-inline-end: ${values.borderWidth} solid ${values.border}; }`,
	`${ITEM} { position: relative; border-radius: ${values.radius} !important; }`,
	`${ITEM}:not([data-selected="true"]):hover { background: ${values.itemHovered} !important; }`,
	`${ITEM}:not([data-selected="true"]):active { background: ${values.itemPressed} !important; }`,
	`${ITEM}[data-selected="true"] { background: transparent !important; color: ${values.text} !important; }`,
	`${ITEM}[data-selected="true"]:hover { background: ${values.itemHovered} !important; }`,
	// The control panel places the indicator outside the item; the sidebar
	// scroll container would clip it there, so it sits on the inner edge.
	`${ITEM}[data-selected="true"]::after { content: ""; position: absolute; inset-block: 0; inset-inline-start: 0; inline-size: ${values.indicatorWidth}; border-radius: ${values.radius}; background: ${values.indicator}; }`,
	`${ITEM} svg[type] { color: currentcolor !important; }`,
	// Forced colors: the indicator background disappears, draw a border.
	`@media (forced-colors: active) { ${ITEM}[data-selected="true"]::after { border: ${values.indicatorWidth} solid CanvasText; } }`
].join('\n');

const style = document.createElement('style');
style.dataset.dbTheme = 'sidebar';
style.textContent = sidebarStyles;
document.head.append(style);

/*
 * The highlighted item is the keyboard cursor of the sidebar (arrow keys move
 * it without moving the focus), so it has to stay visible. Storybook marks it
 * only in a generated rule, with the ids on the tree container. Mirror that
 * rule with the hover overlay.
 */
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
			? `${ITEM}[data-ref-id="${CSS.escape(refId)}"][data-item-id="${CSS.escape(itemId)}"]:not([data-selected="true"]) { background: ${values.itemHovered} !important; }`
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
