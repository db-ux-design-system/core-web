export const DEFAULT_ID: string = 'OVERWRITE_DEFAULT_ID';
export const DEFAULT_LABEL: string = 'LABEL SHOULD BE SET';

export const DEFAULT_MESSAGE_ID_SUFFIX: string = '-message';
export const DEFAULT_VALID_MESSAGE_ID_SUFFIX: string = '-valid-message';
export const DEFAULT_INVALID_MESSAGE_ID_SUFFIX: string = '-invalid-message';
export const DEFAULT_PLACEHOLDER_ID_SUFFIX: string = '-placeholder';

export const DEFAULT_VALID_MESSAGE: string = 'TODO: Add a validMessage';
export const DEFAULT_INVALID_MESSAGE: string = 'TODO: Add a invalidMessage';

export const DEFAULT_BACK: string = 'Back';

export const DEFAULT_CLOSE_BUTTON: string = 'Close Button';
export const DENSITY_CONST: string = 'density';
export const COLOR_CONST: string = 'color';

export enum DENSITY {
	'FUNCTIONAL' = 'functional',
	'REGULAR' = 'regular',
	'EXPRESSIVE' = 'expressive'
}
export const DENSITIES: DENSITY[] = Object.entries(DENSITY).map(
	([, value]) => value
);

export enum COLOR_SIMPLE {
	'PRIMARY' = 'primary'
}

export enum COLOR {
	'NEUTRAL_BG_LEVEL_1' = 'neutral-bg-lvl-1',
	'NEUTRAL_BG_LEVEL_2' = 'neutral-bg-lvl-2',
	'NEUTRAL_BG_LEVEL_3' = 'neutral-bg-lvl-3',
	'NEUTRAL_BG_TRANSPARENT_SEMI' = 'neutral-bg-transparent-semi',
	'NEUTRAL_BG_TRANSPARENT_FULL' = 'neutral-bg-transparent-full',
	'BRAND_BG_LEVEL_1' = 'brand-bg-lvl-1',
	'BRAND_BG_LEVEL_2' = 'brand-bg-lvl-2',
	'BRAND_BG_LEVEL_3' = 'brand-bg-lvl-3',
	'BRAND_BG_TRANSPARENT_SEMI' = 'brand-bg-transparent-semi',
	'BRAND_BG_TRANSPARENT_FULL' = 'brand-bg-transparent-full',
	'SUCCESSFUL_BG_LEVEL_1' = 'successful-bg-lvl-1',
	'SUCCESSFUL_BG_LEVEL_2' = 'successful-bg-lvl-2',
	'SUCCESSFUL_BG_LEVEL_3' = 'successful-bg-lvl-3',
	'SUCCESSFUL_BG_TRANSPARENT_SEMI' = 'successful-bg-transparent-semi',
	'SUCCESSFUL_BG_TRANSPARENT_FULL' = 'successful-bg-transparent-full',
	'CRITICAL_BG_LEVEL_1' = 'critical-bg-lvl-1',
	'CRITICAL_BG_LEVEL_2' = 'critical-bg-lvl-2',
	'CRITICAL_BG_LEVEL_3' = 'critical-bg-lvl-3',
	'CRITICAL_BG_TRANSPARENT_SEMI' = 'critical-bg-transparent-semi',
	'CRITICAL_BG_TRANSPARENT_Full' = 'critical-bg-transparent-full',
	'WARNING_BG_LEVEL_1' = 'warning-bg-lvl-1',
	'WARNING_BG_LEVEL_2' = 'warning-bg-lvl-2',
	'WARNING_BG_LEVEL_3' = 'warning-bg-lvl-3',
	'WARNING_BG_TRANSPARENT_SEMI' = 'warning-bg-transparent-semi',
	'WARNING_BG_TRANSPARENT_FULL' = 'warning-bg-transparent-full',
	'INFORMATIONAL_BG_LEVEL_1' = 'informational-bg-lvl-1',
	'INFORMATIONAL_BG_LEVEL_2' = 'informational-bg-lvl-2',
	'INFORMATIONAL_BG_LEVEL_3' = 'informational-bg-lvl-3',
	'INFORMATIONAL_BG_TRANSPARENT_SEMI' = 'informational-bg-transparent-semi',
	'INFORMATIONAL_BG_TRANSPARENT_FULL' = 'informational-bg-transparent-full'
}

export const COLORS: COLOR[] = Object.entries(COLOR).map(([, value]) => value);
export const COLORS_SIMPLE: COLOR_SIMPLE[] = Object.entries(COLOR_SIMPLE).map(
	([, value]) => value
);

export enum SEMANTIC {
	'CRITICAL' = 'critical',
	'INFORMATIONAL' = 'informational',
	'WARNING' = 'warning',
	'SUCCESSFUL' = 'successful'
}

export const SEMANTICS: SEMANTIC[] = Object.entries(SEMANTIC).map(
	([, value]) => value
);

export const DEFAULT_VIEWPORT = { width: 390, height: 884 };

/**
 * Use those viewports if your component has a css media-query otherwise use the DEFAULT_VIEWPORT
 */
export const TESTING_VIEWPORTS = [
	{ name: 'desktop', width: 1920, height: 1280 },
	{ name: 'tablet', width: 768, height: 1024 },
	{ name: 'mobile', ...DEFAULT_VIEWPORT }
];
