import { type Config } from 'stylelint';
import { describe, test } from 'vitest';
import useBorderWidth from '../../src/rules/use-border-width.js';
import {
	defaultConfig,
	getDefaultTest,
	getScssAllowTest,
	getVueTest
} from '../defaults.js';

const ruleName = 'db-ux/use-border-width';

const config: Config = {
	...defaultConfig,
	plugins: [useBorderWidth],
	rules: {
		[ruleName]: true
	}
};

describe(`${ruleName}`, () => {
	test('default', async () => {
		await getDefaultTest(ruleName, config, 2);
	});

	test('scss allow', async () => {
		await getScssAllowTest(ruleName, config, 1);
	});

	test('vue', async () => {
		await getVueTest(config, 2);
	});
});
