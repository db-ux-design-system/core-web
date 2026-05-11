import * as angularTemplateParser from '@angular-eslint/template-parser';
import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';

import rule from '../../../src/rules/badge/badge-no-inline-in-interactive.js';

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

describe('badge-no-inline-in-interactive', () => {
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
				errors: [{ messageId: 'noInline', data: { parent: 'DBLink' } }],
				output: '<DBLink><DBBadge placement="corner-top-right">Badge</DBBadge>Link</DBLink>'
			},
			{
				code: '<button><DBBadge placement="inline">Badge</DBBadge>Button</button>',
				errors: [{ messageId: 'noInline', data: { parent: 'button' } }],
				output: '<button><DBBadge placement="corner-top-right">Badge</DBBadge>Button</button>'
			},
			{
				code: '<a href="#"><DBBadge placement="inline">Badge</DBBadge>Link</a>',
				errors: [{ messageId: 'noInline', data: { parent: 'a' } }],
				output: '<a href="#"><DBBadge placement="corner-top-right">Badge</DBBadge>Link</a>'
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
				errors: [{ messageId: 'noInline', data: { parent: 'DBLink' } }],
				output: '<DBLink><DBBadge placement="corner-top-right">Badge</DBBadge>Link</DBLink>'
			}
		]
	});

	angularRuleTester.run('badge-no-inline-in-interactive (Angular)', rule, {
		valid: [
			{
				code: '<db-button><db-badge placement="corner-top-right" label="New">5</db-badge>Button</db-button>'
			}
		],
		invalid: []
	});
});
