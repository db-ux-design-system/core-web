import { describe, test } from 'vitest';
import { Config } from 'stylelint';
import {
	defaultConfig,
	getDefaultTest,
	getScssAllowTest,
	getVueTest
} from '../defaults';
import useBorderColor from '../../src/rules/use-border-color';

const ruleName = 'db-ui/use-border-color';

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
