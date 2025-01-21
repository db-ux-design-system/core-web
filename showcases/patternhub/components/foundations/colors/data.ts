// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

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
	'basic-level-1',
	'basic-level-2',
	'basic-level-3',
	'basic-transparent-full',
	'basic-transparent-semi'
];

export const onBackgroundColors = [
	{ value: 'emphasis-100' },
	{ value: 'emphasis-90' },
	{ value: 'emphasis-80' },
	{ value: 'emphasis-70', appendix: ' *' },
	{ value: 'emphasis-60', appendix: ' *' },
	{ value: 'emphasis-50', appendix: ' *' }
];

export type ColorValue = string | { value: string; appendix?: string };
