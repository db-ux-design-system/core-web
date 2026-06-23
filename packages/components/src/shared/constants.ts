export const DEFAULT_ID: string = 'OVERWRITE_DEFAULT_ID';
export const DEFAULT_LABEL: string = 'LABEL SHOULD BE SET';
export const DEFAULT_PLACEHOLDER: string = ' ';
export const DEFAULT_MESSAGE: string = 'MESSAGE SHOULD BE SET';

export const DEFAULT_LABEL_ID_SUFFIX: string = '-label';
export const DEFAULT_SELECT_ID_SUFFIX: string = '-select';
export const DEFAULT_MESSAGE_ID_SUFFIX: string = '-message';
export const DEFAULT_VALID_MESSAGE_ID_SUFFIX: string = '-valid-message';
export const DEFAULT_INVALID_MESSAGE_ID_SUFFIX: string = '-invalid-message';
export const DEFAULT_PLACEHOLDER_ID_SUFFIX: string = '-placeholder';
export const DEFAULT_DATALIST_ID_SUFFIX: string = '-datalist';

export const DEFAULT_VALID_MESSAGE: string = 'TODO: Add a validMessage';
export const DEFAULT_INVALID_MESSAGE: string = 'TODO: Add an invalidMessage';

export const DEFAULT_REMOVE: string = 'Remove';
export const DEFAULT_BACK: string = 'Back';
export const DEFAULT_SELECTED: string = 'Selected';

export const DEFAULT_BURGER_MENU: string = 'BurgerMenu';
export const DEFAULT_ICON: string = 'brand';
export const DEFAULT_ROWS: number = 4;

export const DEFAULT_CLOSE_BUTTON: string = 'Close';
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
	'NEUTRAL_BG_LEVEL_1' = 'neutral-bg-basic-level-1',
	'NEUTRAL_BG_LEVEL_2' = 'neutral-bg-basic-level-2',
	'NEUTRAL_BG_LEVEL_3' = 'neutral-bg-basic-level-3',
	'NEUTRAL_BG_TRANSPARENT_SEMI' = 'neutral-bg-basic-transparent-semi',
	'NEUTRAL_BG_TRANSPARENT_FULL' = 'neutral-bg-basic-transparent-full',
	'BRAND_BG_LEVEL_1' = 'brand-bg-basic-level-1',
	'BRAND_BG_LEVEL_2' = 'brand-bg-basic-level-2',
	'BRAND_BG_LEVEL_3' = 'brand-bg-basic-level-3',
	'BRAND_BG_TRANSPARENT_SEMI' = 'brand-bg-basic-transparent-semi',
	'BRAND_BG_TRANSPARENT_FULL' = 'brand-bg-basic-transparent-full',
	'SUCCESSFUL_BG_LEVEL_1' = 'successful-bg-basic-level-1',
	'SUCCESSFUL_BG_LEVEL_2' = 'successful-bg-basic-level-2',
	'SUCCESSFUL_BG_LEVEL_3' = 'successful-bg-basic-level-3',
	'SUCCESSFUL_BG_TRANSPARENT_SEMI' = 'successful-bg-basic-transparent-semi',
	'SUCCESSFUL_BG_TRANSPARENT_FULL' = 'successful-bg-basic-transparent-full',
	'CRITICAL_BG_LEVEL_1' = 'critical-bg-basic-level-1',
	'CRITICAL_BG_LEVEL_2' = 'critical-bg-basic-level-2',
	'CRITICAL_BG_LEVEL_3' = 'critical-bg-basic-level-3',
	'CRITICAL_BG_TRANSPARENT_SEMI' = 'critical-bg-basic-transparent-semi',
	'CRITICAL_BG_TRANSPARENT_Full' = 'critical-bg-basic-transparent-full',
	'WARNING_BG_LEVEL_1' = 'warning-bg-basic-level-1',
	'WARNING_BG_LEVEL_2' = 'warning-bg-basic-level-2',
	'WARNING_BG_LEVEL_3' = 'warning-bg-basic-level-3',
	'WARNING_BG_TRANSPARENT_SEMI' = 'warning-bg-basic-transparent-semi',
	'WARNING_BG_TRANSPARENT_FULL' = 'warning-bg-basic-transparent-full',
	'INFORMATIONAL_BG_LEVEL_1' = 'informational-bg-basic-level-1',
	'INFORMATIONAL_BG_LEVEL_2' = 'informational-bg-basic-level-2',
	'INFORMATIONAL_BG_LEVEL_3' = 'informational-bg-basic-level-3',
	'INFORMATIONAL_BG_TRANSPARENT_SEMI' = 'informational-bg-basic-transparent-semi',
	'INFORMATIONAL_BG_TRANSPARENT_FULL' = 'informational-bg-basic-transparent-full'
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
export const DESKTOP_VIEWPORT = { width: 1920, height: 1280 };

/**
 * Use those viewports if your component has a css media-query otherwise use the DEFAULT_VIEWPORT
 */
export const TESTING_VIEWPORTS = [
	{ name: 'desktop', ...DESKTOP_VIEWPORT },
	{ name: 'tablet', width: 768, height: 1024 },
	{ name: 'mobile', ...DEFAULT_VIEWPORT }
];

export const DB_UX_LOCAL_STORAGE_FRAMEWORK = 'db-ux-framework';
export const DB_UX_LOCAL_STORAGE_MODE = 'db-ux-mode';
