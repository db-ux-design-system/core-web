export const DEFAULT_ID =
	'ID_WILL_BE_OVERWRITTEN_ON_MOUNT_AND_THIS_CONSTANT_WONT_SHOW_UP_ONLY_IF_YOU_ARENT_INITIALIZING_IT_IN_THE_FRONTEND';

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

export enum COLOR {
	'NEUTRAL_0' = 'neutral-0',
	'NEUTRAL_1' = 'neutral-1',
	'NEUTRAL_2' = 'neutral-2',
	'NEUTRAL_3' = 'neutral-3',
	'NEUTRAL_4' = 'neutral-4',
	'NEUTRAL_TRANSPARENT_FULL' = 'neutral-transparent-full',
	'NEUTRAL_TRANSPARENT_SEMI' = 'neutral-transparent-semi',
	'PRIMARY_LIGHT' = 'primary-light',
	'PRIMARY_TRANSPARENT_FULL' = 'primary-transparent-full',
	'PRIMARY_TRANSPARENT_SEMI' = 'primary-transparent-semi',
	'SECONDARY_LIGHT' = 'secondary-light',
	'SECONDARY_TRANSPARENT_FULL' = 'secondary-transparent-full',
	'SECONDARY_TRANSPARENT_SEMI' = 'secondary-transparent-semi',
	'SUCCESS_LIGHT' = 'success-light',
	'SUCCESS_TRANSPARENT_FULL' = 'success-transparent-full',
	'SUCCESS_TRANSPARENT_SEMI' = 'success-transparent-semi',
	'CRITICAL_LIGHT' = 'critical-light',
	'CRITICAL_TRANSPARENT_Full' = 'critical-transparent-full',
	'CRITICAL_TRANSPARENT_SEMI' = 'critical-transparent-semi',
	'WARNING_LIGHT' = 'warning-light',
	'WARNING_TRANSPARENT_FULL' = 'warning-transparent-full',
	'WARNING_TRANSPARENT_SEMI' = 'warning-transparent-semi',
	'INFORMATION_LIGHT' = 'information-light',
	'INFORMATION_TRANSPARENT_FULL' = 'information-transparent-full',
	'INFORMATION_TRANSPARENT_SEMI' = 'information-transparent-semi'
}

export const COLORS: COLOR[] = Object.entries(COLOR).map(([, value]) => value);

export enum VARIANT {
	'CRITICAL' = 'critical',
	'INFORMATION' = 'information',
	'WARNING' = 'warning',
	'SUCCESS' = 'success'
}

export const VARIANTS: VARIANT[] = Object.entries(VARIANT).map(
	([, value]) => value
);

export const TESTING_VIEWPORTS = [
	{ name: 'desktop', width: 1920, height: 1280 },
	{ name: 'tablet', width: 768, height: 1024 },
	{ name: 'mobile', width: 390, height: 884 }
];
