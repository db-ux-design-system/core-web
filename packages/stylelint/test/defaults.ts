// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

/* We only use this for tests, we allow no-console */
/* eslint-disable no-console */

import stylelint, { type Config } from 'stylelint';
import { expect } from 'vitest';

const { lint } = stylelint;

export const defaultConfig: Config = {
	extends: ['stylelint-config-standard'],
	overrides: [
		{
			files: ['*.scss', '**/*.scss'],
			extends: ['stylelint-config-standard-scss']
		},
		{
			files: ['*.vue', '**/*.vue'],
			extends: [
				'stylelint-config-standard-scss',
				'stylelint-config-standard-vue/scss'
			],
			rules: {
				'declaration-property-value-no-unknown': false
			}
		}
	]
};

export const getDefaultTest = async (
	ruleName: string,
	config: Config,
	length: number
) => {
	const {
		results: [{ warnings, parseErrors }]
	} = await lint({
		files: ['./test/fixtures/test.scss', './test/fixtures/ignore.css'],
		config: {
			...config,
			rules: { [ruleName]: [true, { ignore: ['ignore.css'] }] }
		}
	});

	console.log(warnings);

	expect(parseErrors).toHaveLength(0);
	expect(warnings).toHaveLength(length);
};

export const getScssAllowTest = async (
	ruleName: string,
	config: Config,
	length: number
) => {
	const {
		results: [{ warnings, parseErrors }]
	} = await lint({
		files: ['./test/fixtures/test.scss'],
		config: {
			...config,
			rules: {
				[ruleName]: [
					true,
					{
						allowCalc: true,
						allow: {
							includes: ['--test', 'custom'],
							exact: ['$default-icon-margin-end'],
							startsWith: ['map.get']
						}
					}
				]
			}
		}
	});

	console.log(warnings);

	expect(parseErrors).toHaveLength(0);
	expect(warnings).toHaveLength(length);
};

export const getVueTest = async (config: Config, length: number) => {
	const {
		results: [{ warnings, parseErrors }]
	} = await lint({
		files: ['./test/fixtures/test.vue'],
		config
	});

	console.log(warnings);

	expect(parseErrors).toHaveLength(0);
	expect(warnings).toHaveLength(length);
};
