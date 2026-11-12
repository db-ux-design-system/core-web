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

	test('allows adaptive-coloring border role tokens', async () => {
		const {
			results: [{ warnings, parseErrors }]
		} = await lint({
			code: `
.adaptive-scss-alias {
	border-color: adaptive.$db-border-default;
	border-inline-start-color: adaptive.$db-border-vibrant;
	border-block-end-color: adaptive.$db-border-decorative;
}

.adaptive-alt-state {
	border-color: adaptive.$db-alt-state-border-default;
	border-color: adaptive.$db-alt-state-bg-default;
}

.adaptive-custom-property {
	border-color: var(--db-border-default);
	border-inline-end-color: var(--db-border-vibrant);
}
			`,
			config
		});

		expect(parseErrors).toHaveLength(0);
		expect(warnings).toHaveLength(0);
	});

	test('allows a border shorthand that declares width and style but no color', async () => {
		const {
			results: [{ warnings, parseErrors }]
		} = await lint({
			code: `
.width-and-style-only {
	border-block-start: variables.$db-border-width-3xs solid;
	border: variables.$db-border-width-sm solid;
	border-inline-end: variables.$db-border-width-3xs dashed;
}
			`,
			config
		});

		expect(parseErrors).toHaveLength(0);
		expect(warnings).toHaveLength(0);
	});

	test('still rejects a real color in a width/style border shorthand', async () => {
		const {
			results: [{ warnings, parseErrors }]
		} = await lint({
			code: `
.bad-color-in-shorthand {
	border-block-start: variables.$db-border-width-3xs solid red;
	border-color: red;
}
			`,
			config
		});

		expect(parseErrors).toHaveLength(0);
		expect(warnings).toHaveLength(2);
	});

	test('rejects invalid colors in all border properties', async () => {
		const {
			results: [{ warnings, parseErrors }]
		} = await lint({
			code: `
.physical-borders {
	border: 1px solid red;
	border-top: 1px solid #ff0;
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
		expect(warnings).toHaveLength(11);
	});
});
