export const semanticColors = [
	'neutral',
	'brand',
	'critical',
	'successful',
	'warning',
	'informational'
];

export const additionalColors = [
	'yellow',
	'orange',
	'red',
	'pink',
	'violet',
	'blue',
	'cyan',
	'turquoise',
	'green'
];

export const backgroundColors = [
	'lvl-1',
	'lvl-2',
	'lvl-3',
	'transparent-full',
	'transparent-semi'
];

export const onBackgroundColors = [
	{ value: 'default' },
	{ value: 'weak' },
	{ value: 'contrast' },
	{ value: 'contrast-weak', appendix: ' *' },
	{ value: 'border', appendix: ' *' }
];

export type ColorValue = string | { value: string; appendix?: string };
