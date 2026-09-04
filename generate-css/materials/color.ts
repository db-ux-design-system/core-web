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

export type ColorName = 'neutral' | 'red' | 'brand' | 'green' | 'yellow' | 'orange' | 'burgundy' | 'pink' | 'violet' | 'blue' | 'cyan' | 'turquoise' | 'light-green';

export const DEFAULT_COLOR: ColorName = 'neutral';

export const FOCUS_OUTLINE_COLOR: { color: ColorName; index: ColorIndex } = {
	color: 'cyan',
	index: 7
};

export const DIVIDER_BG_COLOR: { color: ColorName; index: ColorIndex } = {
	color: 'neutral',
	index: 6
};

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
	},
	'light-green': {
		0: ['#061100', '#EDFFE4'],
		1: ['#0C1B01', '#D9FFC4'],
		2: ['#142901', '#C3FF9D'],
		3: ['#1D3702', '#99FC26'],
		4: ['#264604', '#85DD20'],
		5: ['#305506', '#72BF1A'],
		6: ['#3D6A09', '#60A114'],
		7: ['#4E850F', '#4E850F'],
		8: ['#60A114', '#3D6A09'],
		9: ['#72BF1A', '#305506'],
		10: ['#85DD20', '#264604'],
		11: ['#99FC26', '#1D3702'],
		12: ['#C3FF9D', '#142901'],
		13: ['#D9FFC4', '#0C1B01'],
		14: ['#EDFFE4', '#061100'],
		'origin-default': ['#63A615', '#63A615'],
		'origin-hovered': ['#88E221', '#88E221'],
		'origin-pressed': ['#75C31B', '#75C31B'],
		'on-origin-default': ['#030900', '#030900'],
		'on-origin-hovered': ['#030900', '#030900'],
		'on-origin-pressed': ['#030900', '#030900'],
		'transparent-full-default': [
			'rgba(61, 106, 9, 0)',
			'rgba(114, 191, 26, 0)'
		],
		'transparent-full-hovered': [
			'rgba(61, 106, 9, 0.24)',
			'rgba(114, 191, 26, 0.24)'
		],
		'transparent-full-pressed': [
			'rgba(61, 106, 9, 0.32)',
			'rgba(114, 191, 26, 0.32)'
		],
		'transparent-semi-default': [
			'rgba(61, 106, 9, 0.08)',
			'rgba(114, 191, 26, 0.16)'
		],
		'transparent-semi-hovered': [
			'rgba(61, 106, 9, 0.24)',
			'rgba(114, 191, 26, 0.24)'
		],
		'transparent-semi-pressed': [
			'rgba(61, 106, 9, 0.32)',
			'rgba(114, 191, 26, 0.32)'
		]
	},
	turquoise: {
		0: ['#001110', '#E3FFFD'],
		1: ['#001C1A', '#C3FFFA'],
		2: ['#002927', '#9BFFF8'],
		3: ['#003734', '#00FCF2'],
		4: ['#004642', '#00DDD4'],
		5: ['#005551', '#00BFB7'],
		6: ['#006A65', '#00A29B'],
		7: ['#00857F', '#00857F'],
		8: ['#00A29B', '#006A65'],
		9: ['#00BFB7', '#005551'],
		10: ['#00DDD4', '#004642'],
		11: ['#00FCF2', '#003734'],
		12: ['#9BFFF8', '#002927'],
		13: ['#C3FFFA', '#001C1A'],
		14: ['#E3FFFD', '#001110'],
		'origin-default': ['#00A099', '#00A099'],
		'origin-hovered': ['#00DCD2', '#00DCD2'],
		'origin-pressed': ['#00BDB5', '#00BDB5'],
		'on-origin-default': ['#000908', '#000908'],
		'on-origin-hovered': ['#000908', '#000908'],
		'on-origin-pressed': ['#000908', '#000908'],
		'transparent-full-default': [
			'rgba(0, 106, 101, 0)',
			'rgba(0, 191, 183, 0)'
		],
		'transparent-full-hovered': [
			'rgba(0, 106, 101, 0.24)',
			'rgba(0, 191, 183, 0.24)'
		],
		'transparent-full-pressed': [
			'rgba(0, 106, 101, 0.32)',
			'rgba(0, 191, 183, 0.32)'
		],
		'transparent-semi-default': [
			'rgba(0, 106, 101, 0.08)',
			'rgba(0, 191, 183, 0.16)'
		],
		'transparent-semi-hovered': [
			'rgba(0, 106, 101, 0.24)',
			'rgba(0, 191, 183, 0.24)'
		],
		'transparent-semi-pressed': [
			'rgba(0, 106, 101, 0.32)',
			'rgba(0, 191, 183, 0.32)'
		]
	},
	cyan: {
		0: ['#011018', '#F5FAFF'],
		1: ['#031A25', '#EBF5FE'],
		2: ['#062736', '#E0F0FE'],
		3: ['#0A3447', '#CAE6FD'],
		4: ['#0F4259', '#89CFFA'],
		5: ['#14516C', '#38B6EF'],
		6: ['#1B6586', '#2E9ACB'],
		7: ['#257FA8', '#257FA8'],
		8: ['#2E9ACB', '#1B6586'],
		9: ['#38B6EF', '#14516C'],
		10: ['#89CFFA', '#0F4259'],
		11: ['#CAE6FD', '#0A3447'],
		12: ['#E0F0FE', '#062736'],
		13: ['#EBF5FE', '#031A25'],
		14: ['#F5FAFF', '#011018'],
		'origin-default': ['#309FD1', '#309FD1'],
		'origin-hovered': ['#96D2FB', '#96D2FB'],
		'origin-pressed': ['#3ABBF5', '#3ABBF5'],
		'on-origin-default': ['#01080F', '#01080F'],
		'on-origin-hovered': ['#01080F', '#01080F'],
		'on-origin-pressed': ['#01080F', '#01080F'],
		'transparent-full-default': [
			'rgba(27, 101, 134, 0)',
			'rgba(56, 182, 239, 0)'
		],
		'transparent-full-hovered': [
			'rgba(27, 101, 134, 0.24)',
			'rgba(56, 182, 239, 0.24)'
		],
		'transparent-full-pressed': [
			'rgba(27, 101, 134, 0.32)',
			'rgba(56, 182, 239, 0.32)'
		],
		'transparent-semi-default': [
			'rgba(27, 101, 134, 0.08)',
			'rgba(56, 182, 239, 0.16)'
		],
		'transparent-semi-hovered': [
			'rgba(27, 101, 134, 0.24)',
			'rgba(56, 182, 239, 0.24)'
		],
		'transparent-semi-pressed': [
			'rgba(27, 101, 134, 0.32)',
			'rgba(56, 182, 239, 0.32)'
		]
	},
	blue: {
		0: ['#010D29', '#F8F9FF'],
		1: ['#02153C', '#F1F3FF'],
		2: ['#042153', '#EAEDFE'],
		3: ['#072D6C', '#DBE1FE'],
		4: ['#0A3986', '#B7C4FD'],
		5: ['#0F46A1', '#90A8FC'],
		6: ['#1558C6', '#638BFA'],
		7: ['#1D6FF7', '#1D6FF7'],
		8: ['#638BFA', '#1558C6'],
		9: ['#90A8FC', '#0F46A1'],
		10: ['#B7C4FD', '#0A3986'],
		11: ['#DBE1FE', '#072D6C'],
		12: ['#EAEDFE', '#042153'],
		13: ['#F1F3FF', '#02153C'],
		14: ['#F8F9FF', '#010D29'],
		'origin-default': ['#1455C0', '#1455C0'],
		'origin-hovered': ['#042052', '#042052'],
		'origin-pressed': ['#0C3F92', '#0C3F92'],
		'on-origin-default': ['#F8F9FF', '#F8F9FF'],
		'on-origin-hovered': ['#F8F9FF', '#F8F9FF'],
		'on-origin-pressed': ['#F8F9FF', '#F8F9FF'],
		'transparent-full-default': [
			'rgba(21, 88, 198, 0)',
			'rgba(144, 168, 252, 0)'
		],
		'transparent-full-hovered': [
			'rgba(21, 88, 198, 0.24)',
			'rgba(144, 168, 252, 0.24)'
		],
		'transparent-full-pressed': [
			'rgba(21, 88, 198, 0.32)',
			'rgba(144, 168, 252, 0.32)'
		],
		'transparent-semi-default': [
			'rgba(21, 88, 198, 0.08)',
			'rgba(144, 168, 252, 0.16)'
		],
		'transparent-semi-hovered': [
			'rgba(21, 88, 198, 0.24)',
			'rgba(144, 168, 252, 0.24)'
		],
		'transparent-semi-pressed': [
			'rgba(21, 88, 198, 0.32)',
			'rgba(144, 168, 252, 0.32)'
		]
	},
	violet: {
		0: ['#17081C', '#FBF8FC'],
		1: ['#23102A', '#F7F2FA'],
		2: ['#33193C', '#F3EBF7'],
		3: ['#432350', '#EBDEF2'],
		4: ['#542E63', '#D8BDE6'],
		5: ['#663978', '#C69CDA'],
		6: ['#7F4895', '#B47ACE'],
		7: ['#9F5BBA', '#9F5BBA'],
		8: ['#B47ACE', '#7F4895'],
		9: ['#C69CDA', '#663978'],
		10: ['#D8BDE6', '#542E63'],
		11: ['#EBDEF2', '#432350'],
		12: ['#F3EBF7', '#33193C'],
		13: ['#F7F2FA', '#23102A'],
		14: ['#FBF8FC', '#17081C'],
		'origin-default': ['#814997', '#814997'],
		'origin-hovered': ['#371C42', '#371C42'],
		'origin-pressed': ['#623673', '#623673'],
		'on-origin-default': ['#FBF8FC', '#FBF8FC'],
		'on-origin-hovered': ['#FBF8FC', '#FBF8FC'],
		'on-origin-pressed': ['#FBF8FC', '#FBF8FC'],
		'transparent-full-default': [
			'rgba(127, 72, 149, 0)',
			'rgba(198, 156, 218, 0)'
		],
		'transparent-full-hovered': [
			'rgba(127, 72, 149, 0.24)',
			'rgba(198, 156, 218, 0.24)'
		],
		'transparent-full-pressed': [
			'rgba(127, 72, 149, 0.32)',
			'rgba(198, 156, 218, 0.32)'
		],
		'transparent-semi-default': [
			'rgba(127, 72, 149, 0.08)',
			'rgba(198, 156, 218, 0.16)'
		],
		'transparent-semi-hovered': [
			'rgba(127, 72, 149, 0.24)',
			'rgba(198, 156, 218, 0.24)'
		],
		'transparent-semi-pressed': [
			'rgba(127, 72, 149, 0.32)',
			'rgba(198, 156, 218, 0.32)'
		]
	},
	pink: {
		0: ['#220310', '#FEF8FA'],
		1: ['#32061B', '#FDF1F4'],
		2: ['#460C28', '#FCE9EF'],
		3: ['#5C1335', '#FADBE4'],
		4: ['#731A44', '#F5B5CB'],
		5: ['#8A2153', '#F18CB2'],
		6: ['#AA2B67', '#ED5C9B'],
		7: ['#D43882', '#D43882'],
		8: ['#ED5C9B', '#AA2B67'],
		9: ['#F18CB2', '#8A2153'],
		10: ['#F5B5CB', '#731A44'],
		11: ['#FADBE4', '#5C1335'],
		12: ['#FCE9EF', '#460C28'],
		13: ['#FDF1F4', '#32061B'],
		14: ['#FEF8FA', '#220310'],
		'origin-default': ['#E93E8F', '#E93E8F'],
		'origin-hovered': ['#F3A0BE', '#F3A0BE'],
		'origin-pressed': ['#EF75A6', '#EF75A6'],
		'on-origin-default': ['#160209', '#160209'],
		'on-origin-hovered': ['#160209', '#160209'],
		'on-origin-pressed': ['#160209', '#160209'],
		'transparent-full-default': [
			'rgba(170, 43, 103, 0)',
			'rgba(241, 140, 178, 0)'
		],
		'transparent-full-hovered': [
			'rgba(170, 43, 103, 0.24)',
			'rgba(241, 140, 178, 0.24)'
		],
		'transparent-full-pressed': [
			'rgba(170, 43, 103, 0.32)',
			'rgba(241, 140, 178, 0.32)'
		],
		'transparent-semi-default': [
			'rgba(170, 43, 103, 0.08)',
			'rgba(241, 140, 178, 0.16)'
		],
		'transparent-semi-hovered': [
			'rgba(170, 43, 103, 0.24)',
			'rgba(241, 140, 178, 0.24)'
		],
		'transparent-semi-pressed': [
			'rgba(170, 43, 103, 0.32)',
			'rgba(241, 140, 178, 0.32)'
		]
	},
	burgundy: {
		0: ['#1E060C', '#FCF8F9'],
		1: ['#2D0D14', '#FAF2F3'],
		2: ['#40151F', '#F8EBED'],
		3: ['#541E2B', '#F3DDE1'],
		4: ['#682837', '#E8BBC3'],
		5: ['#7E3144', '#DF98A5'],
		6: ['#9C3F55', '#D77187'],
		7: ['#C2516C', '#C2516C'],
		8: ['#D77187', '#9C3F55'],
		9: ['#DF98A5', '#7E3144'],
		10: ['#E8BBC3', '#682837'],
		11: ['#F3DDE1', '#541E2B'],
		12: ['#F8EBED', '#40151F'],
		13: ['#FAF2F3', '#2D0D14'],
		14: ['#FCF8F9', '#1E060C'],
		'origin-default': ['#A9455D', '#A9455D'],
		'origin-hovered': ['#4F1C28', '#4F1C28'],
		'origin-pressed': ['#833447', '#833447'],
		'on-origin-default': ['#FCF8F9', '#FCF8F9'],
		'on-origin-hovered': ['#FCF8F9', '#FCF8F9'],
		'on-origin-pressed': ['#FCF8F9', '#FCF8F9'],
		'transparent-full-default': [
			'rgba(156, 63, 85, 0)',
			'rgba(223, 152, 165, 0)'
		],
		'transparent-full-hovered': [
			'rgba(156, 63, 85, 0.24)',
			'rgba(223, 152, 165, 0.24)'
		],
		'transparent-full-pressed': [
			'rgba(156, 63, 85, 0.32)',
			'rgba(223, 152, 165, 0.32)'
		],
		'transparent-semi-default': [
			'rgba(156, 63, 85, 0.08)',
			'rgba(223, 152, 165, 0.16)'
		],
		'transparent-semi-hovered': [
			'rgba(156, 63, 85, 0.24)',
			'rgba(223, 152, 165, 0.24)'
		],
		'transparent-semi-pressed': [
			'rgba(156, 63, 85, 0.32)',
			'rgba(223, 152, 165, 0.32)'
		]
	},
	orange: {
		0: ['#190B00', '#FFF8F5'],
		1: ['#271300', '#FFF1EA'],
		2: ['#381D00', '#FFEADF'],
		3: ['#4A2800', '#FFDBC8'],
		4: ['#5C3400', '#FFB782'],
		5: ['#6F4000', '#F69400'],
		6: ['#8A5100', '#D17D00'],
		7: ['#AD6600', '#AD6600'],
		8: ['#D17D00', '#8A5100'],
		9: ['#F69400', '#6F4000'],
		10: ['#FFB782', '#5C3400'],
		11: ['#FFDBC8', '#4A2800'],
		12: ['#FFEADF', '#381D00'],
		13: ['#FFF1EA', '#271300'],
		14: ['#FFF8F5', '#190B00'],
		'origin-default': ['#F39200', '#F39200'],
		'origin-hovered': ['#FFD9C3', '#FFD9C3'],
		'origin-pressed': ['#FFB47B', '#FFB47B'],
		'on-origin-default': ['#100500', '#100500'],
		'on-origin-hovered': ['#100500', '#100500'],
		'on-origin-pressed': ['#100500', '#100500'],
		'transparent-full-default': [
			'rgba(138, 81, 0, 0)',
			'rgba(246, 148, 0, 0)'
		],
		'transparent-full-hovered': [
			'rgba(138, 81, 0, 0.24)',
			'rgba(246, 148, 0, 0.24)'
		],
		'transparent-full-pressed': [
			'rgba(138, 81, 0, 0.32)',
			'rgba(246, 148, 0, 0.32)'
		],
		'transparent-semi-default': [
			'rgba(138, 81, 0, 0.08)',
			'rgba(246, 148, 0, 0.16)'
		],
		'transparent-semi-hovered': [
			'rgba(138, 81, 0, 0.24)',
			'rgba(246, 148, 0, 0.24)'
		],
		'transparent-semi-pressed': [
			'rgba(138, 81, 0, 0.32)',
			'rgba(246, 148, 0, 0.32)'
		]
	},
	yellow: {
		0: ['#130E00', '#FFF9EB'],
		1: ['#1D1700', '#FFF3D5'],
		2: ['#2B2300', '#FFEDBC'],
		3: ['#3A3000', '#FFE17C'],
		4: ['#493D00', '#E8C400'],
		5: ['#594A00', '#C8A900'],
		6: ['#6F5D00', '#AA8F00'],
		7: ['#8C7600', '#8C7600'],
		8: ['#AA8F00', '#6F5D00'],
		9: ['#C8A900', '#594A00'],
		10: ['#E8C400', '#493D00'],
		11: ['#FFE17C', '#3A3000'],
		12: ['#FFEDBC', '#2B2300'],
		13: ['#FFF3D5', '#1D1700'],
		14: ['#FFF9EB', '#130E00'],
		'origin-default': ['#FFD800', '#FFD800'],
		'origin-hovered': ['#BFA200', '#BFA200'],
		'origin-pressed': ['#DFBC00', '#DFBC00'],
		'on-origin-default': ['#0A0700', '#0A0700'],
		'on-origin-hovered': ['#0A0700', '#0A0700'],
		'on-origin-pressed': ['#0A0700', '#0A0700'],
		'transparent-full-default': [
			'rgba(111, 93, 0, 0)',
			'rgba(200, 169, 0, 0)'
		],
		'transparent-full-hovered': [
			'rgba(111, 93, 0, 0.24)',
			'rgba(200, 169, 0, 0.24)'
		],
		'transparent-full-pressed': [
			'rgba(111, 93, 0, 0.32)',
			'rgba(200, 169, 0, 0.32)'
		],
		'transparent-semi-default': [
			'rgba(111, 93, 0, 0.08)',
			'rgba(200, 169, 0, 0.16)'
		],
		'transparent-semi-hovered': [
			'rgba(111, 93, 0, 0.24)',
			'rgba(200, 169, 0, 0.24)'
		],
		'transparent-semi-pressed': [
			'rgba(111, 93, 0, 0.32)',
			'rgba(200, 169, 0, 0.32)'
		]
	},
	green: {
		0: ['#041103', '#EEFEEC'],
		1: ['#091C06', '#DBFCD8'],
		2: ['#10290B', '#C7FBC2'],
		3: ['#173712', '#96F989'],
		4: ['#1F4619', '#71DE5F'],
		5: ['#275520', '#61C051'],
		6: ['#336A2A', '#51A243'],
		7: ['#428636', '#428636'],
		8: ['#51A243', '#336A2A'],
		9: ['#61C051', '#275520'],
		10: ['#71DE5F', '#1F4619'],
		11: ['#96F989', '#173712'],
		12: ['#C7FBC2', '#10290B'],
		13: ['#DBFCD8', '#091C06'],
		14: ['#EEFEEC', '#041103'],
		'origin-default': ['#408335', '#408335'],
		'origin-hovered': ['#1C4116', '#1C4116'],
		'origin-pressed': ['#316828', '#316828'],
		'on-origin-default': ['#F7FEF6', '#F7FEF6'],
		'on-origin-hovered': ['#F7FEF6', '#F7FEF6'],
		'on-origin-pressed': ['#F7FEF6', '#F7FEF6'],
		'transparent-full-default': [
			'rgba(51, 106, 42, 0)',
			'rgba(97, 192, 81, 0)'
		],
		'transparent-full-hovered': [
			'rgba(51, 106, 42, 0.24)',
			'rgba(97, 192, 81, 0.24)'
		],
		'transparent-full-pressed': [
			'rgba(51, 106, 42, 0.32)',
			'rgba(97, 192, 81, 0.32)'
		],
		'transparent-semi-default': [
			'rgba(51, 106, 42, 0.08)',
			'rgba(97, 192, 81, 0.16)'
		],
		'transparent-semi-hovered': [
			'rgba(51, 106, 42, 0.24)',
			'rgba(97, 192, 81, 0.24)'
		],
		'transparent-semi-pressed': [
			'rgba(51, 106, 42, 0.32)',
			'rgba(97, 192, 81, 0.32)'
		]
	}
};
