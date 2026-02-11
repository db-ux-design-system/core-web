import { RuleTester } from '@typescript-eslint/rule-tester';
import { describe, it } from 'vitest';
import rule from '../../../src/rules/link/link-external-security.js';

const ruleTester = new RuleTester({
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: { jsx: true }
	}
});

describe('link-external-security', () => {
	it('should validate rule', () => {
		ruleTester.run('link-external-security', rule, {
			valid: [
				{ code: '<DBLink href="#">Internal link</DBLink>' },
				{
					code: '<DBLink content="external" target="_blank" referrerPolicy="no-referrer">External</DBLink>'
				},
				{
					code: '<db-link content="external" target="_blank" referrerPolicy="no-referrer">External</db-link>'
				},
				{
					code: '<DBLink :content="linkContent" target="_blank" :referrerPolicy="policy">Link</DBLink>'
				}
			],
			invalid: [
				{
					code: '<DBLink content="external">External</DBLink>',
					errors: [
						{ messageId: 'missingTargetBlank' },
						{ messageId: 'missingReferrerPolicy' }
					]
				},
				{
					code: '<DBLink content="external" target="_blank">External</DBLink>',
					errors: [{ messageId: 'missingReferrerPolicy' }]
				},
				{
					code: '<DBLink content="external" referrerPolicy="no-referrer">External</DBLink>',
					errors: [{ messageId: 'missingTargetBlank' }]
				},
				{
					code: '<DBLink target="_blank">External</DBLink>',
					errors: [{ messageId: 'missingContentExternal' }]
				},
				{
					code: '<db-link content="external" target="_self">External</db-link>',
					errors: [
						{ messageId: 'missingTargetBlank' },
						{ messageId: 'missingReferrerPolicy' }
					]
				}
			]
		});
	});
});
