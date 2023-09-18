export const DEFAULT_ID = 'OVERWRITE_DEFAULT_ID';
export const DEFAULT_LABEL = 'LABEL SHOULD BE SET';

export const DEFAULT_MESSAGE_ID_SUFFIX = '-message';

export const DEFAULT_BACK = 'Back';

export const DEFAULT_CLOSE_BUTTON = 'Close Button';
export const TONALITY_CONST = 'tonality';
export const COLOR_CONST = 'color';

export enum TONALITY {
	'FUNCTIONAL' = 'functional',
	'REGULAR' = 'regular',
	'EXPRESSIVE' = 'expressive'
}
export const TONALITIES: TONALITY[] = Object.entries(TONALITY).map(
	([, value]) => value
);

export enum COLOR_SIMPLE {
	'PRIMARY' = 'primary'
}

export enum COLOR {
	'NEUTRAL' = 'neutral',
	'NEUTRAL_STRONG' = 'neutral-strong',
	'NEUTRAL_TRANSPARENT_FULL' = 'neutral-transparent-full',
	'NEUTRAL_TRANSPARENT_SEMI' = 'neutral-transparent-semi',
	'PRIMARY' = 'primary',
	'PRIMARY_TRANSPARENT_FULL' = 'primary-transparent-full',
	'PRIMARY_TRANSPARENT_SEMI' = 'primary-transparent-semi',
	'SUCCESSFUL' = 'successful',
	'SUCCESSFUL_TRANSPARENT_FULL' = 'successful-transparent-full',
	'SUCCESSFUL_TRANSPARENT_SEMI' = 'successful-transparent-semi',
	'CRITICAL' = 'critical',
	'CRITICAL_TRANSPARENT_Full' = 'critical-transparent-full',
	'CRITICAL_TRANSPARENT_SEMI' = 'critical-transparent-semi',
	'WARNING' = 'warning',
	'WARNING_TRANSPARENT_FULL' = 'warning-transparent-full',
	'WARNING_TRANSPARENT_SEMI' = 'warning-transparent-semi',
	'INFORMATIONAL' = 'informational',
	'INFORMATIONAL_TRANSPARENT_FULL' = 'informational-transparent-full',
	'INFORMATIONAL_TRANSPARENT_SEMI' = 'informational-transparent-semi'
}

export const COLORS: COLOR[] = Object.entries(COLOR).map(([, value]) => value);
export const COLORS_SIMPLE: COLOR_SIMPLE[] = Object.entries(COLOR_SIMPLE).map(
	([, value]) => value
);

export enum VARIANT {
	'CRITICAL' = 'critical',
	'INFORMATIONAL' = 'informational',
	'WARNING' = 'warning',
	'SUCCESSFUL' = 'successful'
}

export const VARIANTS: VARIANT[] = Object.entries(VARIANT).map(
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
