import stylelint, { type Config } from 'stylelint';
import { describe, expect, test } from 'vitest';
import useBorderColor from '../../src/rules/use-border-color.js';
import {
	defaultConfig,
	getDefaultTest,
	getScssAllowTest,
	getVueTest
} from '../defaults.js';

const { lint } = stylelint;

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

	test('allows all border properties with valid colors', async () => {
		const {
			results: [{ warnings, parseErrors }]
		} = await lint({
			code: `
.physical-borders {
	border: var(--db-border-width-sm) solid var(--db-adaptive-on-bg-basic-emphasis-100);
	border-top: 1px solid var(--db-adaptive-on-bg-basic-emphasis-90);
	border-right: 1px solid var(--db-adaptive-on-bg-basic-emphasis-80);
	border-bottom: 1px solid var(--db-adaptive-on-bg-basic-emphasis-70);
	border-left: 1px solid var(--db-adaptive-on-bg-basic-emphasis-60);
}

.logical-borders {
	border-block: 1px solid var(--db-adaptive-on-bg-basic-emphasis-50);
	border-block-start: 1px solid var(--db-adaptive-on-bg-inverted);
	border-block-end: 1px solid transparent;
	border-inline: 1px solid currentcolor;
	border-inline-start: 1px solid var(--db-adaptive-on-bg-basic-emphasis-100);
	border-inline-end: 1px solid var(--db-adaptive-on-bg-inverted);
}
			`,
			config
		});

		expect(parseErrors).toHaveLength(0);
		expect(warnings).toHaveLength(0);
	});

	test('rejects invalid colors in all border properties', async () => {
		const {
			results: [{ warnings, parseErrors }]
		} = await lint({
			code: `
.physical-borders {
	border: 1px solid red;
	border-top: 1px solid #ff0000;
	border-right: 1px solid blue;
	border-bottom: 1px solid green;
	border-left: 1px solid yellow;
}

.logical-borders {
	border-block: 1px solid red;
	border-block-start: 1px solid blue;
	border-block-end: 1px solid green;
	border-inline: 1px solid yellow;
	border-inline-start: 1px solid red;
	border-inline-end: 1px solid blue;
}
			`,
			config
		});

		expect(parseErrors).toHaveLength(0);
		expect(warnings).toHaveLength(12);
	});
});
