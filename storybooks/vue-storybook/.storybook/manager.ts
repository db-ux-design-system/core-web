import { addons } from 'storybook/manager-api';
import { BRAND_NAME, managerTheme } from './theme';
import values from './theme-values.json';

/*
 * PROTOTYPE – theme of the Storybook UI (sidebar, toolbar, title).
 * Copied into `.storybook/manager.ts` of every Storybook by sync.ts.
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
	// "Extra actions" (globe) of the framework refs: only a status popover. The
	// version dropdown next to it stays.
	'[data-action="toggle-indicator"] { display: none !important; }',
	// Settings menu (gear) in the sidebar header: about page, layout toggles and
	// the shortcut list are not needed. The shortcuts themselves keep working.
	'button[aria-label="Settings"] { display: none !important; }',
	// "Expand/collapse all" next to every section heading (Foundations,
	// Components, also inside the refs). The heading itself still toggles.
	'[data-action="expand-all"] { display: none !important; }',
	// Tag filter button in the search field. The label reads "N active tag
	// filter(s)" while filters are set.
	'button:is([aria-label="Tag filters"], [aria-label$=" active tag filter"], [aria-label$=" active tag filters"]) { display: none !important; }',
	// Section headings (FOUNDATIONS) like the framework ref headings: bold,
	// regular case, with the separator line above. The highlight colors of
	// Storybook (pink fill, red text) are replaced with the hover overlay.
	// Spacing measured on the ref headings: 20px above, 45px high (the button line is 2px taller than the ref title, hence 15px/11px).
	`.sidebar-subheading[data-nodetype="root"] { border-block-start: ${values.borderWidth} solid ${values.border}; margin-block: 20px 0 !important; padding-block: 15px 11px; background: transparent !important; }`,
	`.sidebar-subheading[data-nodetype="root"] > button[data-action="collapse-root"] { block-size: auto; min-block-size: 0; padding-block: 0; line-height: inherit; font-size: 14px; font-weight: 700; text-transform: none; letter-spacing: normal; color: ${values.text} !important; background: transparent !important; }`,
	// "Expand/collapse all" next to the section heading; the ref headings have
	// none either.
	'.sidebar-subheading[data-nodetype="root"] [data-action="expand-all"] { display: none !important; }',
	`.sidebar-subheading[data-nodetype="root"] > button[data-action="collapse-root"]:hover { background: ${values.itemHovered} !important; }`,
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
