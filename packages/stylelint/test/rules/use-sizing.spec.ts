import { type Config } from 'stylelint';
import { describe, test } from 'vitest';
import useSizing from '../../src/rules/use-sizing.js';
import {
	defaultConfig,
	getDefaultTest,
	getScssAllowTest,
	getVueTest
} from '../defaults.js';

const ruleName = 'db-ux/use-sizing';

const config: Config = {
	...defaultConfig,
	plugins: [useSizing],
	rules: {
		[ruleName]: true
	}
};

describe(`${ruleName}`, () => {
	test('default', async () => {
		await getDefaultTest(ruleName, config, 5);
	});

	test('scss allow', async () => {
		await getScssAllowTest(ruleName, config, 4);
	});

	test('vue', async () => {
		await getVueTest(config, 1);
	});
});
