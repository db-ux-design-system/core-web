/** [light, dark] value pair */
export type LightDark = [string, string];

export type ColorIndex =
	| 0
	| 1
	| 2
	| 3
	| 4
	| 5
	| 6
	| 7
	| 8
	| 9
	| 10
	| 11
	| 12
	| 13
	| 14;

export type ColorPalette = {
	[K in ColorIndex]: LightDark;
} & {
	'origin-default': LightDark;
	'origin-hovered': LightDark;
	'origin-pressed': LightDark;
	'on-origin-default': LightDark;
	'on-origin-hovered': LightDark;
	'on-origin-pressed': LightDark;
	'transparent-full-default': LightDark;
	'transparent-full-hovered': LightDark;
	'transparent-full-pressed': LightDark;
	'transparent-semi-default': LightDark;
	'transparent-semi-hovered': LightDark;
	'transparent-semi-pressed': LightDark;
};

export type ColorName = 'neutral' | 'red' | 'brand';

export const DEFAULT_COLOR: ColorName = 'neutral';

export const colors: Record<ColorName, ColorPalette> = {
	red: {
		0: ['#1a0000', '#fff5f5'],
		1: ['#330000', '#ffe6e6'],
		2: ['#4d0000', '#ffcccc'],
		3: ['#660000', '#ff9999'],
		4: ['#800000', '#ff8080'],
		5: ['#990000', '#ff4d4d'],
		6: ['#cc0000', '#ff3333'],
		7: ['#ff0000', '#ff0000'],
		8: ['#ff3333', '#cc0000'],
		9: ['#ff4d4d', '#990000'],
		10: ['#ff8080', '#800000'],
		11: ['#ff9999', '#660000'],
		12: ['#ffcccc', '#4d0000'],
		13: ['#ffe6e6', '#330000'],
		14: ['#fff5f5', '#1a0000'],
		'origin-default': ['#ff0000', '#ff0000'],
		'origin-hovered': ['#cc0000', '#cc0000'],
		'origin-pressed': ['#990000', '#990000'],
		'on-origin-default': ['#fff5f5', '#fff5f5'],
		'on-origin-hovered': ['#fff5f5', '#fff5f5'],
		'on-origin-pressed': ['#fff5f5', '#fff5f5'],
		'transparent-full-default': ['transparent', 'transparent'],
		'transparent-full-hovered': [
			'rgba(255, 0, 0, 0.24)',
			'rgba(255, 0, 0, 0.24)'
		],
		'transparent-full-pressed': [
			'rgba(255, 0, 0, 0.32)',
			'rgba(255, 0, 0, 0.32)'
		],
		'transparent-semi-default': [
			'rgba(255, 0, 0, 0.08)',
			'rgba(255, 0, 0, 0.16)'
		],
		'transparent-semi-hovered': [
			'rgba(255, 0, 0, 0.24)',
			'rgba(255, 0, 0, 0.24)'
		],
		'transparent-semi-pressed': [
			'rgba(255, 0, 0, 0.32)',
			'rgba(255, 0, 0, 0.32)'
		]
	},
	brand: {
		0: ['#1a0000', '#fff5f5'],
		1: ['#330000', '#ffe6e6'],
		2: ['#4d0000', '#ffcccc'],
		3: ['#660000', '#ff9999'],
		4: ['#800000', '#ff8080'],
		5: ['#990000', '#ff4d4d'],
		6: ['#cc0000', '#ff3333'],
		7: ['#ff0000', '#ff0000'],
		8: ['#ff3333', '#cc0000'],
		9: ['#ff4d4d', '#990000'],
		10: ['#ff8080', '#800000'],
		11: ['#ff9999', '#660000'],
		12: ['#ffcccc', '#4d0000'],
		13: ['#ffe6e6', '#330000'],
		14: ['#fff5f5', '#1a0000'],
		'origin-default': ['#ff0000', '#ff0000'],
		'origin-hovered': ['#cc0000', '#cc0000'],
		'origin-pressed': ['#990000', '#990000'],
		'on-origin-default': ['#fff5f5', '#fff5f5'],
		'on-origin-hovered': ['#fff5f5', '#fff5f5'],
		'on-origin-pressed': ['#fff5f5', '#fff5f5'],
		'transparent-full-default': ['transparent', 'transparent'],
		'transparent-full-hovered': [
			'rgba(255, 0, 0, 0.24)',
			'rgba(255, 0, 0, 0.24)'
		],
		'transparent-full-pressed': [
			'rgba(255, 0, 0, 0.32)',
			'rgba(255, 0, 0, 0.32)'
		],
		'transparent-semi-default': [
			'rgba(255, 0, 0, 0.08)',
			'rgba(255, 0, 0, 0.16)'
		],
		'transparent-semi-hovered': [
			'rgba(255, 0, 0, 0.24)',
			'rgba(255, 0, 0, 0.24)'
		],
		'transparent-semi-pressed': [
			'rgba(255, 0, 0, 0.32)',
			'rgba(255, 0, 0, 0.32)'
		]
	},
	neutral: {
		0: ['#000000', '#ffffff'],
		1: ['#111111', '#f5f5f5'],
		2: ['#1f1f1f', '#ececec'],
		3: ['#2a2a2a', '#d8d8d8'],
		4: ['#3f3f3f', '#bbbbbb'],
		5: ['#555555', '#999999'],
		6: ['#666666', '#888888'],
		7: ['#777777', '#777777'],
		8: ['#888888', '#666666'],
		9: ['#999999', '#555555'],
		10: ['#bbbbbb', '#3f3f3f'],
		11: ['#d8d8d8', '#2a2a2a'],
		12: ['#ececec', '#1f1f1f'],
		13: ['#f5f5f5', '#111111'],
		14: ['#ffffff', '#000000'],
		'origin-default': ['#646973', '#646973'],
		'origin-hovered': ['#2C2F34', '#2C2F34'],
		'origin-pressed': ['#4D5159', '#4D5159'],
		'on-origin-default': ['#F9F9FA', '#F9F9FA'],
		'on-origin-hovered': ['#F9F9FA', '#F9F9FA'],
		'on-origin-pressed': ['#F9F9FA', '#F9F9FA'],
		'transparent-full-default': [
			'rgba(90, 94, 104, 0)',
			'rgba(166, 171, 182, 0)'
		],
		'transparent-full-hovered': [
			'rgba(90, 94, 104, 0.24)',
			'rgba(166, 171, 182, 0.24)'
		],
		'transparent-full-pressed': [
			'rgba(90, 94, 104, 0.32)',
			'rgba(166, 171, 182, 0.32)'
		],
		'transparent-semi-default': [
			'rgba(90, 94, 104, 0.08)',
			'rgba(166, 171, 182, 0.16)'
		],
		'transparent-semi-hovered': [
			'rgba(90, 94, 104, 0.24)',
			'rgba(166, 171, 182, 0.24)'
		],
		'transparent-semi-pressed': [
			'rgba(90, 94, 104, 0.32)',
			'rgba(166, 171, 182, 0.32)'
		]
	}
};
