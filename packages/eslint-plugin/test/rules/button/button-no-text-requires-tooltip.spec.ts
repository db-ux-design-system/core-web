import { RuleTester } from '@typescript-eslint/rule-tester';
import { describe, it } from 'vitest';
import rule from '../../../src/rules/button/button-no-text-requires-tooltip.js';

const ruleTester = new RuleTester({
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: { jsx: true }
	}
});

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
					code: '<db-button>Save</db-button>'
				},
				{
					code: `<db-button icon="x_placeholder" [noText]="true">
            ABC
            <db-tooltip>ABC</db-tooltip>
          </db-button>`
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
					code: '<db-button [noText]="true">ABC</db-button>',
					errors: [
						{ messageId: 'missingIcon' },
						{ messageId: 'missingTooltip' }
					]
				},
				{
					code: '<db-button icon="x" [noText]="true">ABC</db-button>',
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
});
