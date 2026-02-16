import stylelint, { type Config } from 'stylelint';
import { describe, expect, test } from 'vitest';
import useBorderWidth from '../../src/rules/use-border-width.js';
import {
	defaultConfig,
	getDefaultTest,
	getScssAllowTest,
	getVueTest
} from '../defaults.js';

const { lint } = stylelint;

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

	test('allows transparent value', async () => {
		const {
			results: [{ warnings, parseErrors }]
		} = await lint({
			code: `
.transparent-border {
	border: transparent;
}

.transparent-with-db-width {
	border: var(--db-border-width-sm) solid transparent;
}

.transparent-shorthand {
	border: 1px solid transparent;
}
			`,
			config
		});

		expect(parseErrors).toHaveLength(0);
		// Should only warn about the last one (1px) but allow transparent
		expect(warnings).toHaveLength(1);
		expect(warnings[0].line).toBe(11);
		expect(warnings[0].text).toContain('1px solid transparent');
	});
});
