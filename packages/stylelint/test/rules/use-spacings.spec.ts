import { type Config } from 'stylelint';
import { describe, test } from 'vitest';
import useSpacings from '../../src/rules/use-spacings.js';
import {
	defaultConfig,
	getDefaultTest,
	getScssAllowTest,
	getVueTest
} from '../defaults.js';

const ruleName = 'db-ux/use-spacings';

const config: Config = {
	...defaultConfig,
	plugins: [useSpacings],
	rules: {
		[ruleName]: true
	}
};

describe(`${ruleName}`, () => {
	test('default', async () => {
		await getDefaultTest(ruleName, config, 6);
	});

	test('scss allow', async () => {
		await getScssAllowTest(ruleName, config, 1);
	});

	test('vue', async () => {
		await getVueTest(config, 9);
	});
});
