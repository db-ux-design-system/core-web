import { create } from 'storybook/theming';
import values from './theme-values.json';

/**
 * PROTOTYPE – Storybook theme in the colors and fonts of the design system.
 *
 * The values come from `theme-values.json`, generated from the design system
 * tokens by generate-theme.ts (do not edit the JSON by hand). Copied into
 * `.storybook/theme.ts` of every Storybook by sync.ts. Edit this file, not the
 * copies.
 *
 * - `managerTheme`: sidebar, toolbar and title (manager.ts)
 * - `docsTheme`: the docs pages (preview.ts, `parameters.docs.theme`)
 */
const PLATFORM = 'https://design-system.deutschebahn.com';

/** Name in the sidebar header and in the browser tab title (manager.ts). */
export const BRAND_NAME = 'DB Design System';
const BRAND_SUBTITLE = 'Storybook';

/*
 * Storybook shows either `brandImage` or `brandTitle`. With `brandImage: null`
 * it renders `brandTitle` as HTML, so logo and name can stand side by side.
 * The logo is decorative (empty alt), the name is the link text.
 */
const BRAND_HTML = [
	'<span style="display:inline-flex;align-items:center;gap:0.5rem;font-weight:700;font-size:1rem">',
	`<img src="${values.brandLogo}" alt="" width="32" height="32">`,
	// Name on the first line, "Storybook" thin below. DB Neo Screen Sans has
	// no light weight, so the subtitle uses DB Neo Screen Head Light
	// (manager-head.html). The space between the lines keeps the link text
	// "DB Design System Storybook".
	'<span style="line-height:1.2;white-space:nowrap">',
	`<span style="display:block">${BRAND_NAME}</span> `,
	`<span style="display:block;margin-block-start:0.25rem;font-family:&quot;DB Neo Screen Head&quot;,${values.fontSans.replaceAll('"', '&quot;')};font-size:0.875rem;font-weight:300">${BRAND_SUBTITLE}</span>`,
	'</span>',
	'</span>'
].join('');

const shared = {
	base: 'light',
	colorPrimary: values.brand,
	colorSecondary: values.brand,
	fontBase: values.fontSans,
	fontCode: values.fontCode,
	textColor: values.text,
	textMutedColor: values.textMuted,
	textInverseColor: values.onBrand,
	appBorderColor: values.border,
	appBorderRadius: 4,
	inputBorderRadius: 4,
	brandTitle: BRAND_HTML,
	brandUrl: PLATFORM,
	// Logo and name come from BRAND_HTML; the logo is generated from logo.svg
	// with a fixed Light Mode color, see generate-theme.ts.
	// `null` is supported at runtime but missing in the ThemeVars type.
	brandImage: null as unknown as string,
	brandTarget: '_top'
} as const;

export const managerTheme = create({
	...shared,
	// Sidebar on level 1 with a border, like DBControlPanelDesktop.
	appBg: values.background,
	appHoverBg: values.itemHovered,
	appContentBg: values.background,
	appPreviewBg: values.background,
	barBg: values.background,
	barTextColor: values.textMuted,
	barSelectedColor: values.brand,
	barHoverColor: values.brand
});

export const docsTheme = create({
	...shared,
	appBg: values.background,
	appContentBg: values.background
});
