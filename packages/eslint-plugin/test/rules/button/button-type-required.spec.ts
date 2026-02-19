import { RuleTester } from '@typescript-eslint/rule-tester';
import { describe, it } from 'vitest';
import rule from '../../../src/rules/button/button-type-required.js';

const ruleTester = new RuleTester({
	languageOptions: {
		parserOptions: {
			ecmaFeatures: { jsx: true }
		}
	}
});

describe('button-type-required', () => {
	it('should validate rule', () => {
		ruleTester.run('button-type-required', rule, {
			valid: [
				{
					code: '<DBButton type="button">Save</DBButton>'
				},
				{
					code: '<DBButton type="submit">Submit</DBButton>'
				},
				{
					code: '<DBButton type="reset">Reset</DBButton>'
				},
				{
					code: '<DBButton type="">Empty</DBButton>'
				},
				{
					code: '<db-button type="button">Save</db-button>'
				},
				{
					code: '<db-button [type]="buttonType">Dynamic</db-button>'
				},
				{
					code: '<DBButton :type="buttonType">Dynamic</DBButton>'
				},
				{
					code: '<div>Not a button</div>'
				}
			],
			invalid: [
				{
					code: '<DBButton>Save</DBButton>',
					errors: [{ messageId: 'missingType' }]
				},
				{
					code: '<DBButton icon="save">Save</DBButton>',
					errors: [{ messageId: 'missingType' }]
				},
				{
					code: '<db-button>Save</db-button>',
					errors: [{ messageId: 'missingType' }]
				}
			]
		});
	});
});

