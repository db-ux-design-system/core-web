/** [light, dark] value pair */
export type LightDark = [string, string];

export type ColorIndex =
	0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;

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

export type ColorName =
	| 'red'
	| 'neutral'
	| 'brand'
	| 'green'
	| 'yellow'
	| 'orange'
	| 'burgundy'
	| 'pink'
	| 'violet'
	| 'blue'
	| 'cyan'
	| 'turquoise';

export const DEFAULT_COLOR: ColorName = 'neutral';

export const FOCUS_OUTLINE_COLOR: { color: ColorName; index: ColorIndex } = {
	color: 'cyan',
	index: 7
};

export const colors: Record<ColorName, ColorPalette> = {
	red: {
		0: ['#280001', '#FFF8F8'],
		1: ['#390001', '#FFE9E9'],
		2: ['#490002', '#FEDADA'],
		3: ['#600004', '#FECBCB'],
		4: ['#790006', '#FDACAD'],
		5: ['#9C000A', '#FF888A'],
		6: ['#C00010', '#FF5357'],
		7: ['#EF0016', '#EF0016'],
		8: ['#FF5357', '#C00010'],
		9: ['#FF888A', '#9C000A'],
		10: ['#FDACAD', '#790006'],
		11: ['#FECBCB', '#600004'],
		12: ['#FEDADA', '#490002'],
		13: ['#FFE9E9', '#390001'],
		14: ['#FFF8F8', '#280001'],
		'origin-default': ['#EC0016', '#EC0016'],
		'origin-hovered': ['#CB0011', '#CB0011'],
		'origin-pressed': ['#AF000D', '#AF000D'],
		'on-origin-default': ['#FFFFFF', '#FFFFFF'],
		'on-origin-hovered': ['#FFFFFF', '#FFFFFF'],
		'on-origin-pressed': ['#FFFFFF', '#FFFFFF'],
		'transparent-full-default': [
			'rgba(192, 0, 16, 0)',
			'rgba(255, 136, 138, 0)'
		],
		'transparent-full-hovered': [
			'rgba(192, 0, 16, 0.16)',
			'rgba(255, 136, 138, 0.16)'
		],
		'transparent-full-pressed': [
			'rgba(192, 0, 16, 0.32)',
			'rgba(255, 136, 138, 0.32)'
		],
		'transparent-semi-default': [
			'rgba(192, 0, 16, 0.08)',
			'rgba(255, 136, 138, 0.16)'
		],
		'transparent-semi-hovered': [
			'rgba(192, 0, 16, 0.16)',
			'rgba(255, 136, 138, 0.24)'
		],
		'transparent-semi-pressed': [
			'rgba(192, 0, 16, 0.24)',
			'rgba(255, 136, 138, 0.32)'
		]
	},
	neutral: {
		0: ['#000000', '#FFFFFF'],
		1: ['#16181B', '#EDEEF0'],
		2: ['#1E2023', '#E1E2E6'],
		3: ['#2A2C31', '#D5D7DC'],
		4: ['#36393F', '#BDC1C9'],
		5: ['#484B53', '#A6ABB6'],
		6: ['#5A5E68', '#8A919E'],
		7: ['#727782', '#727782'],
		8: ['#8A919E', '#5A5E68'],
		9: ['#A6ABB6', '#484B53'],
		10: ['#BDC1C9', '#36393F'],
		11: ['#D5D7DC', '#2A2C31'],
		12: ['#E1E2E6', '#1E2023'],
		13: ['#EDEEF0', '#16181B'],
		14: ['#FFFFFF', '#000000'],
		'origin-default': ['#646973', '#646973'],
		'origin-hovered': ['#545861', '#545861'],
		'origin-pressed': ['#464A51', '#464A51'],
		'on-origin-default': ['#F9F9FA', '#F9F9FA'],
		'on-origin-hovered': ['#F9F9FA', '#F9F9FA'],
		'on-origin-pressed': ['#F9F9FA', '#F9F9FA'],
		'transparent-full-default': [
			'rgba(90, 94, 104, 0)',
			'rgba(166, 171, 182, 0)'
		],
		'transparent-full-hovered': [
			'rgba(90, 94, 104, 0.16)',
			'rgba(166, 171, 182, 0.16)'
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
			'rgba(90, 94, 104, 0.16)',
			'rgba(166, 171, 182, 0.24)'
		],
		'transparent-semi-pressed': [
			'rgba(90, 94, 104, 0.24)',
			'rgba(166, 171, 182, 0.32)'
		]
	},
	brand: {
		0: ['#280001', '#FFF8F8'],
		1: ['#390001', '#FFE9E9'],
		2: ['#490002', '#FEDADA'],
		3: ['#600004', '#FECBCB'],
		4: ['#790006', '#FDACAD'],
		5: ['#9C000A', '#FF888A'],
		6: ['#C00010', '#FF5357'],
		7: ['#EF0016', '#EF0016'],
		8: ['#FF5357', '#C00010'],
		9: ['#FF888A', '#9C000A'],
		10: ['#FDACAD', '#790006'],
		11: ['#FECBCB', '#600004'],
		12: ['#FEDADA', '#490002'],
		13: ['#FFE9E9', '#390001'],
		14: ['#FFF8F8', '#280001'],
		'origin-default': ['#EC0016', '#EC0016'],
		'origin-hovered': ['#CB0011', '#CB0011'],
		'origin-pressed': ['#AF000D', '#AF000D'],
		'on-origin-default': ['#FFFFFF', '#FFFFFF'],
		'on-origin-hovered': ['#FFFFFF', '#FFFFFF'],
		'on-origin-pressed': ['#FFFFFF', '#FFFFFF'],
		'transparent-full-default': [
			'rgba(192, 0, 16, 0)',
			'rgba(255, 136, 138, 0)'
		],
		'transparent-full-hovered': [
			'rgba(192, 0, 16, 0.16)',
			'rgba(255, 136, 138, 0.16)'
		],
		'transparent-full-pressed': [
			'rgba(192, 0, 16, 0.32)',
			'rgba(255, 136, 138, 0.32)'
		],
		'transparent-semi-default': [
			'rgba(192, 0, 16, 0.08)',
			'rgba(255, 136, 138, 0.16)'
		],
		'transparent-semi-hovered': [
			'rgba(192, 0, 16, 0.16)',
			'rgba(255, 136, 138, 0.24)'
		],
		'transparent-semi-pressed': [
			'rgba(192, 0, 16, 0.24)',
			'rgba(255, 136, 138, 0.32)'
		]
	},
	green: {
		0: ['#041103', '#F6FBF5'],
		1: ['#091C06', '#E3F2E2'],
		2: ['#0D2509', '#D0E9CE'],
		3: ['#153310', '#BCE1B9'],
		4: ['#1D4116', '#92D08B'],
		5: ['#275520', '#61C051'],
		6: ['#336A2A', '#51A243'],
		7: ['#428636', '#428636'],
		8: ['#51A243', '#336A2A'],
		9: ['#61C051', '#275520'],
		10: ['#92D08B', '#1D4116'],
		11: ['#BCE1B9', '#153310'],
		12: ['#D0E9CE', '#0D2509'],
		13: ['#E3F2E2', '#091C06'],
		14: ['#F6FBF5', '#041103'],
		'origin-default': ['#408335', '#408335'],
		'origin-hovered': ['#36702C', '#36702C'],
		'origin-pressed': ['#2D5F24', '#2D5F24'],
		'on-origin-default': ['#F7FEF6', '#F7FEF6'],
		'on-origin-hovered': ['#F7FEF6', '#F7FEF6'],
		'on-origin-pressed': ['#F7FEF6', '#F7FEF6'],
		'transparent-full-default': [
			'rgba(51, 106, 42, 0)',
			'rgba(97, 192, 81, 0)'
		],
		'transparent-full-hovered': [
			'rgba(51, 106, 42, 0.16)',
			'rgba(97, 192, 81, 0.16)'
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
			'rgba(51, 106, 42, 0.16)',
			'rgba(97, 192, 81, 0.24)'
		],
		'transparent-semi-pressed': [
			'rgba(51, 106, 42, 0.24)',
			'rgba(97, 192, 81, 0.32)'
		]
	},
	yellow: {
		0: ['#130E00', '#FBF9F4'],
		1: ['#1D1700', '#F4EDDE'],
		2: ['#271F00', '#ECE2C8'],
		3: ['#352B00', '#E5D6AF'],
		4: ['#443800', '#D7BF77'],
		5: ['#594A00', '#C8A900'],
		6: ['#6F5D00', '#AA8F00'],
		7: ['#8C7600', '#8C7600'],
		8: ['#AA8F00', '#6F5D00'],
		9: ['#C8A900', '#594A00'],
		10: ['#D7BF77', '#443800'],
		11: ['#E5D6AF', '#352B00'],
		12: ['#ECE2C8', '#271F00'],
		13: ['#F4EDDE', '#1D1700'],
		14: ['#FBF9F4', '#130E00'],
		'origin-default': ['#FFD800', '#FFD800'],
		'origin-hovered': ['#E2BF00', '#E2BF00'],
		'origin-pressed': ['#C9AB00', '#C9AB00'],
		'on-origin-default': ['#0A0700', '#0A0700'],
		'on-origin-hovered': ['#0A0700', '#0A0700'],
		'on-origin-pressed': ['#0A0700', '#0A0700'],
		'transparent-full-default': [
			'rgba(111, 93, 0, 0)',
			'rgba(200, 169, 0, 0)'
		],
		'transparent-full-hovered': [
			'rgba(111, 93, 0, 0.16)',
			'rgba(200, 169, 0, 0.16)'
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
			'rgba(111, 93, 0, 0.16)',
			'rgba(200, 169, 0, 0.24)'
		],
		'transparent-semi-pressed': [
			'rgba(111, 93, 0, 0.24)',
			'rgba(200, 169, 0, 0.32)'
		]
	},
	orange: {
		0: ['#190B00', '#FEF8F6'],
		1: ['#271300', '#FBEBE3'],
		2: ['#321A00', '#F8DDCF'],
		3: ['#432500', '#F5D0BA'],
		4: ['#563000', '#EFB58D'],
		5: ['#6F4000', '#F69400'],
		6: ['#8A5100', '#D17D00'],
		7: ['#AD6600', '#AD6600'],
		8: ['#D17D00', '#8A5100'],
		9: ['#F69400', '#6F4000'],
		10: ['#EFB58D', '#563000'],
		11: ['#F5D0BA', '#432500'],
		12: ['#F8DDCF', '#321A00'],
		13: ['#FBEBE3', '#271300'],
		14: ['#FEF8F6', '#190B00'],
		'origin-default': ['#F69400', '#F69400'],
		'origin-hovered': ['#FFAF6F', '#FFAF6F'],
		'origin-pressed': ['#FFCBAB', '#FFCBAB'],
		'on-origin-default': ['#190B00', '#190B00'],
		'on-origin-hovered': ['#190B00', '#190B00'],
		'on-origin-pressed': ['#190B00', '#190B00'],
		'transparent-full-default': [
			'rgba(138, 81, 0, 0)',
			'rgba(246, 148, 0, 0)'
		],
		'transparent-full-hovered': [
			'rgba(138, 81, 0, 0.16)',
			'rgba(246, 148, 0, 0.16)'
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
			'rgba(138, 81, 0, 0.16)',
			'rgba(246, 148, 0, 0.24)'
		],
		'transparent-semi-pressed': [
			'rgba(138, 81, 0, 0.24)',
			'rgba(246, 148, 0, 0.32)'
		]
	},
	burgundy: {
		0: ['#1E060C', '#FFF8F9'],
		1: ['#2D0D14', '#FFE8EC'],
		2: ['#39121C', '#FFD9DF'],
		3: ['#4D1B27', '#FFCAD3'],
		4: ['#612533', '#FFA9B9'],
		5: ['#7E3144', '#DF98A5'],
		6: ['#9C3F55', '#D77187'],
		7: ['#C2516C', '#C2516C'],
		8: ['#D77187', '#9C3F55'],
		9: ['#DF98A5', '#7E3144'],
		10: ['#FFA9B9', '#612533'],
		11: ['#FFCAD3', '#4D1B27'],
		12: ['#FFD9DF', '#39121C'],
		13: ['#FFE8EC', '#2D0D14'],
		14: ['#FFF8F9', '#1E060C'],
		'origin-default': ['#A9455D', '#A9455D'],
		'origin-hovered': ['#8F394E', '#8F394E'],
		'origin-pressed': ['#782F40', '#782F40'],
		'on-origin-default': ['#FCF8F9', '#FCF8F9'],
		'on-origin-hovered': ['#FCF8F9', '#FCF8F9'],
		'on-origin-pressed': ['#FCF8F9', '#FCF8F9'],
		'transparent-full-default': [
			'rgba(156, 63, 85, 0)',
			'rgba(223, 152, 165, 0)'
		],
		'transparent-full-hovered': [
			'rgba(156, 63, 85, 0.16)',
			'rgba(223, 152, 165, 0.16)'
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
			'rgba(156, 63, 85, 0.16)',
			'rgba(223, 152, 165, 0.24)'
		],
		'transparent-semi-pressed': [
			'rgba(156, 63, 85, 0.24)',
			'rgba(223, 152, 165, 0.32)'
		]
	},
	pink: {
		0: ['#220310', '#FFF7FA'],
		1: ['#32061B', '#FFE8EF'],
		2: ['#3F0A23', '#FFD9E5'],
		3: ['#551031', '#FFC9DB'],
		4: ['#6B173F', '#FFA8C7'],
		5: ['#8A2153', '#F18CB2'],
		6: ['#AA2B67', '#ED5C9B'],
		7: ['#D43882', '#D43882'],
		8: ['#ED5C9B', '#AA2B67'],
		9: ['#F18CB2', '#8A2153'],
		10: ['#FFA8C7', '#6B173F'],
		11: ['#FFC9DB', '#551031'],
		12: ['#FFD9E5', '#3F0A23'],
		13: ['#FFE8EF', '#32061B'],
		14: ['#FFF7FA', '#220310'],
		'origin-default': ['#E93E8F', '#E93E8F'],
		'origin-hovered': ['#ED69A4', '#ED69A4'],
		'origin-pressed': ['#F18AB3', '#F18AB3'],
		'on-origin-default': ['#160209', '#160209'],
		'on-origin-hovered': ['#160209', '#160209'],
		'on-origin-pressed': ['#160209', '#160209'],
		'transparent-full-default': [
			'rgba(170, 43, 103, 0)',
			'rgba(241, 140, 178, 0)'
		],
		'transparent-full-hovered': [
			'rgba(170, 43, 103, 0.16)',
			'rgba(241, 140, 178, 0.16)'
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
			'rgba(170, 43, 103, 0.16)',
			'rgba(241, 140, 178, 0.24)'
		],
		'transparent-semi-pressed': [
			'rgba(170, 43, 103, 0.24)',
			'rgba(241, 140, 178, 0.32)'
		]
	},
	violet: {
		0: ['#17081C', '#FCF8FE'],
		1: ['#23102A', '#F5EAFB'],
		2: ['#2D1636', '#EFDCF9'],
		3: ['#3D2049', '#E9CEF7'],
		4: ['#4E2A5D', '#DFB0F6'],
		5: ['#663978', '#C69CDA'],
		6: ['#7F4895', '#B47ACE'],
		7: ['#9F5BBA', '#9F5BBA'],
		8: ['#B47ACE', '#7F4895'],
		9: ['#C69CDA', '#663978'],
		10: ['#DFB0F6', '#4E2A5D'],
		11: ['#E9CEF7', '#3D2049'],
		12: ['#EFDCF9', '#2D1636'],
		13: ['#F5EAFB', '#23102A'],
		14: ['#FCF8FE', '#17081C'],
		'origin-default': ['#814997', '#814997'],
		'origin-hovered': ['#6C3C7E', '#6C3C7E'],
		'origin-pressed': ['#593169', '#593169'],
		'on-origin-default': ['#FBF8FC', '#FBF8FC'],
		'on-origin-hovered': ['#FBF8FC', '#FBF8FC'],
		'on-origin-pressed': ['#FBF8FC', '#FBF8FC'],
		'transparent-full-default': [
			'rgba(127, 72, 149, 0)',
			'rgba(198, 156, 218, 0)'
		],
		'transparent-full-hovered': [
			'rgba(127, 72, 149, 0.16)',
			'rgba(198, 156, 218, 0.16)'
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
			'rgba(127, 72, 149, 0.16)',
			'rgba(198, 156, 218, 0.24)'
		],
		'transparent-semi-pressed': [
			'rgba(127, 72, 149, 0.24)',
			'rgba(198, 156, 218, 0.32)'
		]
	},
	blue: {
		0: ['#010D29', '#F8F9FE'],
		1: ['#02153C', '#EAEDFD'],
		2: ['#031D4B', '#DCE1FC'],
		3: ['#052964', '#CDD6FB'],
		4: ['#09357D', '#AFBEFC'],
		5: ['#0F46A1', '#90A8FC'],
		6: ['#1558C6', '#638BFA'],
		7: ['#1D6FF7', '#1D6FF7'],
		8: ['#638BFA', '#1558C6'],
		9: ['#90A8FC', '#0F46A1'],
		10: ['#AFBEFC', '#09357D'],
		11: ['#CDD6FB', '#052964'],
		12: ['#DCE1FC', '#031D4B'],
		13: ['#EAEDFD', '#02153C'],
		14: ['#F8F9FE', '#010D29'],
		'origin-default': ['#1455C0', '#1455C0'],
		'origin-hovered': ['#0F46A0', '#0F46A0'],
		'origin-pressed': ['#0B3883', '#0B3883'],
		'on-origin-default': ['#F8F9FF', '#F8F9FF'],
		'on-origin-hovered': ['#F8F9FF', '#F8F9FF'],
		'on-origin-pressed': ['#F8F9FF', '#F8F9FF'],
		'transparent-full-default': [
			'rgba(21, 88, 198, 0)',
			'rgba(144, 168, 252, 0)'
		],
		'transparent-full-hovered': [
			'rgba(21, 88, 198, 0.16)',
			'rgba(144, 168, 252, 0.16)'
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
			'rgba(21, 88, 198, 0.16)',
			'rgba(144, 168, 252, 0.24)'
		],
		'transparent-semi-pressed': [
			'rgba(21, 88, 198, 0.24)',
			'rgba(144, 168, 252, 0.32)'
		]
	},
	cyan: {
		0: ['#011018', '#F6FAFD'],
		1: ['#031A25', '#E3F0FB'],
		2: ['#052230', '#CEE6F8'],
		3: ['#083041', '#B8DCF7'],
		4: ['#0D3D53', '#84C9F4'],
		5: ['#14516C', '#38B6EF'],
		6: ['#1B6586', '#2E9ACB'],
		7: ['#257FA8', '#257FA8'],
		8: ['#2E9ACB', '#1B6586'],
		9: ['#38B6EF', '#14516C'],
		10: ['#84C9F4', '#0D3D53'],
		11: ['#B8DCF7', '#083041'],
		12: ['#CEE6F8', '#052230'],
		13: ['#E3F0FB', '#031A25'],
		14: ['#F6FAFD', '#011018'],
		'origin-default': ['#309FD1', '#309FD1'],
		'origin-hovered': ['#5AB4E2', '#5AB4E2'],
		'origin-pressed': ['#80C7F2', '#80C7F2'],
		'on-origin-default': ['#01080F', '#01080F'],
		'on-origin-hovered': ['#01080F', '#01080F'],
		'on-origin-pressed': ['#01080F', '#01080F'],
		'transparent-full-default': [
			'rgba(27, 101, 134, 0)',
			'rgba(56, 182, 239, 0)'
		],
		'transparent-full-hovered': [
			'rgba(27, 101, 134, 0.16)',
			'rgba(56, 182, 239, 0.16)'
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
			'rgba(27, 101, 134, 0.16)',
			'rgba(56, 182, 239, 0.24)'
		],
		'transparent-semi-pressed': [
			'rgba(27, 101, 134, 0.24)',
			'rgba(56, 182, 239, 0.32)'
		]
	},
	turquoise: {
		0: ['#001110', '#F3FBFA'],
		1: ['#001C1A', '#DBF3F1'],
		2: ['#002422', '#C0EBE7'],
		3: ['#003230', '#A2E3DE'],
		4: ['#00413E', '#47D5CD'],
		5: ['#005551', '#00BFB7'],
		6: ['#006A65', '#00A29B'],
		7: ['#00857F', '#00857F'],
		8: ['#00A29B', '#006A65'],
		9: ['#00BFB7', '#005551'],
		10: ['#47D5CD', '#00413E'],
		11: ['#A2E3DE', '#003230'],
		12: ['#C0EBE7', '#002422'],
		13: ['#DBF3F1', '#001C1A'],
		14: ['#F3FBFA', '#001110'],
		'origin-default': ['#00A099', '#00A099'],
		'origin-hovered': ['#00B7AF', '#00B7AF'],
		'origin-pressed': ['#00CDC4', '#00CDC4'],
		'on-origin-default': ['#000908', '#000908'],
		'on-origin-hovered': ['#000908', '#000908'],
		'on-origin-pressed': ['#000908', '#000908'],
		'transparent-full-default': [
			'rgba(0, 106, 101, 0)',
			'rgba(0, 191, 183, 0)'
		],
		'transparent-full-hovered': [
			'rgba(0, 106, 101, 0.16)',
			'rgba(0, 191, 183, 0.16)'
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
			'rgba(0, 106, 101, 0.16)',
			'rgba(0, 191, 183, 0.24)'
		],
		'transparent-semi-pressed': [
			'rgba(0, 106, 101, 0.24)',
			'rgba(0, 191, 183, 0.32)'
		]
	}
};
