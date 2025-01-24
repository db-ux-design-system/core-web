import { describe, expect, test } from 'vitest';
import stylelint, { Config } from 'stylelint';
import useSpacings from '../../src/rules/use-spacings';
import { defaultConfig } from '../defaults';

const { lint } = stylelint;

const ruleName = 'db-ui/use-spacings';

const config: Config = {
	...defaultConfig,
	plugins: [useSpacings],
	rules: {
		[ruleName]: true
	}
};

describe(`${ruleName}`, () => {
	test('default', async () => {
		const {
			results: [{ warnings, parseErrors }]
		} = await lint({
			files: [`./test/fixtures/test.scss`, `./test/fixtures/ignore.css`],
			config: {
				...config,
				rules: { [ruleName]: [true, { ignore: ['ignore.css'] }] }
			}
		});

		expect(parseErrors).toHaveLength(0);
		expect(warnings).toHaveLength(6);
	});

	test('scss allow', async () => {
		const {
			results: [{ warnings, parseErrors }]
		} = await lint({
			files: [`./test/fixtures/test.scss`],
			config: {
				...config,
				rules: {
					[ruleName]: [
						true,
						{
							allowVariables: true,
							allowCalc: true,
							allow: { startsWith: ['map.get'] }
						}
					]
				}
			}
		});

		expect(parseErrors).toHaveLength(0);
		expect(warnings).toHaveLength(1);
	});

	test('vue', async () => {
		const {
			results: [{ warnings, parseErrors }]
		} = await lint({
			files: [`./test/fixtures/test.vue`],
			config
		});

		expect(parseErrors).toHaveLength(0);
		expect(warnings).toHaveLength(10);
	});
});
