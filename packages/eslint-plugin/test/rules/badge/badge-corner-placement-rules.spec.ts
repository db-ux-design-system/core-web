import { RuleTester } from '@typescript-eslint/rule-tester';
import { describe, it } from 'vitest';
import rule from '../../../src/rules/badge/badge-corner-placement-rules.js';

const ruleTester = new RuleTester({
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: { jsx: true }
	}
});

describe('badge-corner-placement-rules', () => {
	it('should validate rule', () => {
		ruleTester.run('badge-corner-placement-rules', rule, {
			valid: [
				{ code: '<DBBadge>Long text is fine</DBBadge>' },
				{ code: '<DBBadge placement="inline">Long text</DBBadge>' },
				{
					code: '<DBBadge placement="corner-top-left" label="New items">99+</DBBadge>'
				},
				{
					code: '<DBBadge placement="corner-top-right" text="5" label="Notifications" />'
				},
				{
					code: '<db-badge placement="corner-top-left" label="Items">123</db-badge>'
				}
			],
			invalid: [
				{
					code: '<DBBadge placement="corner-top-left">9999</DBBadge>',
					errors: [
						{ messageId: 'textTooLong' },
						{ messageId: 'missingLabel' }
					],
					output: '<DBBadge placement="corner-top-left" label="9999">999</DBBadge>'
				},
				{
					code: '<DBBadge placement="corner-top-right" text="1234" />',
					errors: [
						{ messageId: 'textTooLong' },
						{ messageId: 'missingLabel' }
					],
					output: '<DBBadge placement="corner-top-right" text="123" label="1234" />'
				},
				{
					code: '<DBBadge placement="corner-bottom-left" label="Count">9999</DBBadge>',
					errors: [{ messageId: 'textTooLong' }],
					output: '<DBBadge placement="corner-bottom-left" label="9999">999</DBBadge>'
				},
				{
					code: '<DBBadge placement="corner-top-left">99</DBBadge>',
					errors: [{ messageId: 'missingLabel' }]
				}
			]
		});
	});
});
