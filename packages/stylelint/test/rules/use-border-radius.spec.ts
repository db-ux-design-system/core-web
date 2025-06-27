import { type Config } from 'stylelint';
import { describe, test } from 'vitest';
import useBorderRadius from '../../src/rules/use-border-radius.js';
import {
	defaultConfig,
	getDefaultTest,
	getScssAllowTest,
	getVueTest
} from '../defaults.js';

const ruleName = 'db-ux/use-border-radius';

const config: Config = {
	...defaultConfig,
	plugins: [useBorderRadius],
	rules: {
		[ruleName]: true
	}
};

describe(`${ruleName}`, () => {
	test('default', async () => {
		await getDefaultTest(ruleName, config, 3);
	});

	test('scss allow', async () => {
		await getScssAllowTest(ruleName, config, 1);
	});

	test('vue', async () => {
		await getVueTest(config, 1);
	});
});
