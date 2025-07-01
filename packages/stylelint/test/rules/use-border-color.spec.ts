import { describe, test } from 'vitest';
import { type Config } from 'stylelint';
import {
	defaultConfig,
	getDefaultTest,
	getScssAllowTest,
	getVueTest
} from '../defaults.js';
import useBorderColor from '../../src/rules/use-border-color.js';

const ruleName = 'db-ux/use-border-color';

const config: Config = {
	...defaultConfig,
	plugins: [useBorderColor],
	rules: {
		[ruleName]: true
	}
};

describe(`${ruleName}`, () => {
	test('default', async () => {
		await getDefaultTest(ruleName, config, 1);
	});

	test('scss allow', async () => {
		await getScssAllowTest(ruleName, config, 1);
	});

	test('vue', async () => {
		await getVueTest(config, 2);
	});
});
