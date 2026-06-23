import * as angularTemplateParser from '@angular-eslint/template-parser';
import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';

import rule from '../../../src/rules/badge/badge-corner-placement-rules.js';

const ruleTester = new RuleTester({
	languageOptions: {
		parserOptions: {
			ecmaFeatures: { jsx: true }
		}
	}
});

const angularRuleTester = new AngularRuleTester({
	languageOptions: {
		parser: angularTemplateParser
	}
});

describe('badge-corner-placement-rules', () => {
	ruleTester.run('badge-corner-placement-rules', rule, {
		valid: [
			{ code: '<DBBadge>Long text is fine</DBBadge>' },
			{ code: '<DBBadge placement="inline">Long text</DBBadge>' },
			{
				code: '<DBBadge placement="corner-top-left" label="New items">99+</DBBadge>'
			},
			{
				code: '<DBBadge placement="corner-top-right" text="5" label="Notifications" />'
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
				output: '<DBBadge placement="corner-bottom-left" label="Count">999</DBBadge>'
			},
			{
				code: '<DBBadge placement="corner-top-left">99</DBBadge>',
				errors: [{ messageId: 'missingLabel' }]
			}
		]
	});

	angularRuleTester.run('badge-corner-placement-rules (Angular)', rule, {
		valid: [
			{
				code: '<db-badge placement="corner-top-left" label="Items">123</db-badge>'
			}
		],
		invalid: [
			{
				code: '<db-badge placement="corner-top-left">9999</db-badge>',
				errors: [
					{ messageId: 'textTooLong' },
					{ messageId: 'missingLabel' }
				],
				output: '<db-badge placement="corner-top-left" label="9999">9999</db-badge>'
			},
			{
				code: '<db-badge placement="corner-top-right">99</db-badge>',
				errors: [{ messageId: 'missingLabel' }],
				output: '<db-badge placement="corner-top-right" label="99">99</db-badge>'
			}
		]
	});
});
