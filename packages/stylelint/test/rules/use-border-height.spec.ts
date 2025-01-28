import { describe, test } from 'vitest';
import { Config } from 'stylelint';
import {
	defaultConfig,
	getDefaultTest,
	getScssAllowTest,
	getVueTest
} from '../defaults';
import useBorderHeight from '../../src/rules/use-border-height';

const ruleName = 'db-ui/use-border-height';

const config: Config = {
	...defaultConfig,
	plugins: [useBorderHeight],
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
