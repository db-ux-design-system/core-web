import { create } from 'storybook/theming';
import values from './theme-values.json';

/**
 * Storybook theme in the colors and fonts of the design system, for Light
 * and Dark Mode.
 *
 * The values come from `theme-values.json`, generated from the design system
 * tokens by generate-theme.ts (do not edit the JSON by hand). Copied into
 * `.storybook/theme.ts` of every Storybook by copy-config.ts (git-ignored
 * there). Edit this file, not the copies.
 *
 * - `managerThemes`: sidebar, toolbar and title (manager.ts)
 * - `docsThemes`: the docs pages (docs-container.ts)
 *
 * Storybook derives further colors from these with polished, so they have to
 * be plain colors: one theme per mode instead of `light-dark()`.
 */
const PLATFORM = 'https://design-system.deutschebahn.com';

/** Name in the sidebar header and in the browser tab title (manager.ts). */
export const BRAND_NAME = 'DB Design System';
const BRAND_SUBTITLE = 'Storybook';

type Scheme = 'light' | 'dark';

/*
 * Storybook shows either `brandImage` or `brandTitle`. With `brandImage: null`
 * it renders `brandTitle` as HTML, so logo and name can stand side by side.
 * The logo is decorative (empty alt), the name is the link text.
 */
const brandHtml = (scheme: Scheme) =>
	[
		'<span style="display:inline-flex;align-items:center;gap:0.5rem;font-weight:700;font-size:1rem">',
		`<img src="${values[scheme].brandLogo}" alt="" width="32" height="32">`,
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

const shared = (scheme: Scheme) => {
	const colors = values[scheme];
	return {
		base: scheme,
		colorPrimary: colors.brand,
		// Brand colored text with enough contrast in both modes.
		colorSecondary: colors.brandText,
		fontBase: values.fontSans,
		fontCode: values.fontCode,
		textColor: colors.text,
		textMutedColor: colors.textMuted,
		textInverseColor: colors.onBrand,
		appBorderColor: colors.border,
		appBorderRadius: 4,
		inputBorderRadius: 4,
		brandTitle: brandHtml(scheme),
		brandUrl: PLATFORM,
		// Logo and name come from brandHtml; the logo is generated from logo.svg
		// with the color of the scheme, see generate-theme.ts.
		// `null` is supported at runtime but missing in the ThemeVars type.
		brandImage: null as unknown as string,
		brandTarget: '_top'
	} as const;
};

const managerTheme = (scheme: Scheme) => {
	const colors = values[scheme];
	return create({
		...shared(scheme),
		// Sidebar on level 1 with a border, like DBControlPanelDesktop.
		appBg: colors.background,
		appHoverBg: colors.itemHovered,
		appContentBg: colors.background,
		appPreviewBg: colors.background,
		barBg: colors.background,
		barTextColor: colors.textMuted,
		barSelectedColor: colors.brand,
		barHoverColor: colors.brand
	});
};

const docsTheme = (scheme: Scheme) =>
	create({
		...shared(scheme),
		appBg: values[scheme].background,
		appContentBg: values[scheme].background
	});

export const managerThemes = {
	light: managerTheme('light'),
	dark: managerTheme('dark')
};

export const docsThemes = {
	light: docsTheme('light'),
	dark: docsTheme('dark')
};
