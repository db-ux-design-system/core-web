import { RuleTester } from '@typescript-eslint/rule-tester';
import { describe, it } from 'vitest';
import rule from '../../../src/rules/badge/badge-no-inline-in-interactive.js';

const ruleTester = new RuleTester({
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: { jsx: true }
	}
});

describe('badge-no-inline-in-interactive', () => {
	it('should validate rule', () => {
		ruleTester.run('badge-no-inline-in-interactive', rule, {
			valid: [
				{ code: '<DBBadge placement="inline">Badge</DBBadge>' },
				{ code: '<DBBadge>Badge</DBBadge>' },
				{
					code: '<div><DBBadge placement="inline">Badge</DBBadge></div>'
				},
				{ code: '<div><DBBadge>Badge</DBBadge></div>' },
				{
					code: '<DBButton><DBBadge placement="corner-top-right" label="New">5</DBBadge>Button</DBButton>'
				},
				{
					code: '<DBLink><DBBadge placement="corner-top-left" label="Count">3</DBBadge>Link</DBLink>'
				},
				{
					code: '<db-button><db-badge placement="corner-top-right" label="New">5</db-badge>Button</db-button>'
				}
			],
			invalid: [
				{
					code: '<DBButton><DBBadge placement="inline">Badge</DBBadge>Button</DBButton>',
					errors: [
						{ messageId: 'noInline', data: { parent: 'DBButton' } }
					],
					output: '<DBButton><DBBadge placement="corner-top-right">Badge</DBBadge>Button</DBButton>'
				},
				{
					code: '<DBLink><DBBadge placement="inline">Badge</DBBadge>Link</DBLink>',
					errors: [
						{ messageId: 'noInline', data: { parent: 'DBLink' } }
					],
					output: '<DBLink><DBBadge placement="corner-top-right">Badge</DBBadge>Link</DBLink>'
				},
				{
					code: '<button><DBBadge placement="inline">Badge</DBBadge>Button</button>',
					errors: [
						{ messageId: 'noInline', data: { parent: 'button' } }
					],
					output: '<button><DBBadge placement="corner-top-right">Badge</DBBadge>Button</button>'
				},
				{
					code: '<a href="#"><DBBadge placement="inline">Badge</DBBadge>Link</a>',
					errors: [{ messageId: 'noInline', data: { parent: 'a' } }],
					output: '<a href="#"><DBBadge placement="corner-top-right">Badge</DBBadge>Link</a>'
				},
				{
					code: '<db-button><db-badge placement="inline">Badge</db-badge>Button</db-button>',
					errors: [
						{ messageId: 'noInline', data: { parent: 'DBButton' } }
					],
					output: '<db-button><db-badge placement="corner-top-right">Badge</db-badge>Button</db-button>'
				},
				{
					code: '<DBButton><DBBadge>Badge</DBBadge>Button</DBButton>',
					errors: [
						{ messageId: 'noInline', data: { parent: 'DBButton' } }
					],
					output: '<DBButton><DBBadge placement="corner-top-right">Badge</DBBadge>Button</DBButton>'
				},
				{
					code: '<DBLink><DBBadge>Badge</DBBadge>Link</DBLink>',
					errors: [
						{ messageId: 'noInline', data: { parent: 'DBLink' } }
					],
					output: '<DBLink><DBBadge placement="corner-top-right">Badge</DBBadge>Link</DBLink>'
				}
			]
		});
	});
});
