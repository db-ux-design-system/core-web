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
		await getVueTest(config, 3);
	});

	test('allows transparent value', async () => {
		const {
			results: [{ warnings, parseErrors }]
		} = await lint({
			code: `
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
		// Should only warn about the last one (1px)
		expect(warnings).toHaveLength(1);
		expect(warnings[0].line).toBe(7);
		expect(warnings[0].text).toContain('1px solid transparent');
	});

	test('allows all border properties with valid widths', async () => {
		const {
			results: [{ warnings, parseErrors }]
		} = await lint({
			code: `
.physical-borders {
	border: var(--db-border-width-sm) solid transparent;
	border-top: var(--db-border-width-md) solid transparent;
	border-right: var(--db-border-width-lg) solid transparent;
	border-bottom: var(--db-border-width-xl) solid transparent;
	border-left: var(--db-border-width-2xl) solid transparent;
}

.logical-borders {
	border-block: var(--db-border-width-sm) solid transparent;
	border-block-start: var(--db-border-width-md) solid transparent;
	border-block-end: var(--db-border-width-lg) solid transparent;
	border-inline: var(--db-border-width-xl) solid transparent;
	border-inline-start: var(--db-border-width-2xl) solid transparent;
	border-inline-end: var(--db-border-width-sm) solid transparent;
}
			`,
			config
		});

		expect(parseErrors).toHaveLength(0);
		expect(warnings).toHaveLength(0);
	});

	test('rejects invalid widths in all border properties', async () => {
		const {
			results: [{ warnings, parseErrors }]
		} = await lint({
			code: `
.physical-borders {
	border: 1px solid transparent;
	border-top: 2px solid transparent;
	border-right: 3px solid transparent;
	border-bottom: 4px solid transparent;
	border-left: 5px solid transparent;
}

.logical-borders {
	border-block: 1px solid transparent;
	border-block-start: 2px solid transparent;
	border-block-end: 3px solid transparent;
	border-inline: 4px solid transparent;
	border-inline-start: 5px solid transparent;
	border-inline-end: 6px solid transparent;
}
			`,
			config
		});

		expect(parseErrors).toHaveLength(0);
		expect(warnings).toHaveLength(11);
	});
});
