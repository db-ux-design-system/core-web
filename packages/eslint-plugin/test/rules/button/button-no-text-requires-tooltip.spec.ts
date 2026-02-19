import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';
import { describe, it } from 'vitest';
import rule from '../../../src/rules/button/button-no-text-requires-tooltip.js';

const ruleTester = new RuleTester({
	languageOptions: {
		parserOptions: {
			ecmaFeatures: { jsx: true }
		}
	}
});

const angularRuleTester = new AngularRuleTester();

describe('button-no-text-requires-tooltip', () => {
	it('should validate rule', () => {
		ruleTester.run('button-no-text-requires-tooltip', rule, {
			valid: [
				{
					code: '<DBButton>Save</DBButton>'
				},
				{
					code: '<DBButton icon="save">Save</DBButton>'
				},
				{
					code: `<DBButton icon="save" noText>
            Save
            <DBTooltip>Save document</DBTooltip>
          </DBButton>`
				},
				{
					code: `<DBButton iconLeading="save" noText>
            Save
            <DBTooltip>Save document</DBTooltip>
          </DBButton>`
				},
				{
					code: `<DBButton iconTrailing="save" noText>
            Save
            <DBTooltip>Save document</DBTooltip>
          </DBButton>`
				},
				{
					code: `<DBButton icon="x_placeholder" :noText="true">
            ABC
            <DBTooltip>ABC</DBTooltip>
          </DBButton>`
				}
			],
			invalid: [
				{
					code: '<DBButton noText>Save</DBButton>',
					errors: [
						{ messageId: 'missingIcon' },
						{ messageId: 'missingTooltip' }
					]
				},
				{
					code: '<DBButton icon="save" noText>Save</DBButton>',
					errors: [{ messageId: 'missingTooltip' }]
				},
				{
					code: '<DBButton :noText="true">ABC</DBButton>',
					errors: [
						{ messageId: 'missingIcon' },
						{ messageId: 'missingTooltip' }
					]
				},
				{
					code: '<DBButton icon="x" :noText="true">ABC</DBButton>',
					errors: [{ messageId: 'missingTooltip' }]
				}
			]
		});
	});

	it('should validate rule (Angular)', () => {
		angularRuleTester.run('button-no-text-requires-tooltip', rule, {
			valid: [
				{
					code: '<db-button>Save</db-button>'
				},
				{
					code: `<db-button icon="x_placeholder" [noText]="true">
            ABC
            <db-tooltip>ABC</db-tooltip>
          </db-button>`
				},
				{
					code: `<db-button type="submit" noText icon="search">Test<db-tooltip>Test</db-tooltip></db-button>`
				}
			],
			invalid: [
				{
					code: '<db-button [noText]="true">ABC</db-button>',
					errors: [
						{ messageId: 'missingIcon' },
						{ messageId: 'missingTooltip' }
					]
				},
				{
					code: '<db-button icon="x" [noText]="true">ABC</db-button>',
					errors: [{ messageId: 'missingTooltip' }]
				}
			]
		});
	});
});
