import { RuleTester } from '@typescript-eslint/rule-tester';
import { describe, it } from 'vitest';
import rule from '../../../src/rules/button/button-single-icon-attribute.js';

const ruleTester = new RuleTester({
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: { jsx: true }
	}
});

describe('button-single-icon-attribute', () => {
	it('should validate rule', () => {
		ruleTester.run('button-single-icon-attribute', rule, {
			valid: [
				{ code: '<DBButton>Save</DBButton>' },
				{ code: '<DBButton icon="save">Save</DBButton>' },
				{ code: '<DBButton iconLeading="save">Save</DBButton>' },
				{ code: '<DBButton iconTrailing="arrow">Next</DBButton>' },
				{ code: '<db-button icon="save">Save</db-button>' },
				{
					code: '<db-button [iconLeading]="iconName">Save</db-button>'
				},
				{ code: '<DBButton :iconTrailing="icon">Next</DBButton>' }
			],
			invalid: [
				{
					code: '<DBButton icon="save" iconLeading="save">Save</DBButton>',
					errors: [{ messageId: 'multipleIcons' }]
				},
				{
					code: '<DBButton icon="save" iconTrailing="arrow">Save</DBButton>',
					errors: [{ messageId: 'multipleIcons' }]
				},
				{
					code: '<DBButton iconLeading="save" iconTrailing="arrow">Save</DBButton>',
					errors: [{ messageId: 'multipleIcons' }]
				},
				{
					code: '<DBButton icon="save" iconLeading="save" iconTrailing="arrow">Save</DBButton>',
					errors: [{ messageId: 'multipleIcons' }]
				},
				{
					code: '<db-button icon="save" [iconLeading]="iconName">Save</db-button>',
					errors: [{ messageId: 'multipleIcons' }]
				}
			]
		});
	});
});
