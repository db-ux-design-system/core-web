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
	brandTitle: 'DB UX Design System',
	brandUrl: PLATFORM,
	brandImage: './brand/images/logo.svg',
	brandTarget: '_top'
} as const;

export const managerTheme = create({
	...shared,
	appBg: values.backgroundLevel2,
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
