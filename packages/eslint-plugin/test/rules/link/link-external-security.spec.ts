import * as angularTemplateParser from '@angular-eslint/template-parser';
import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';

import rule from '../../../src/rules/link/link-external-security.js';

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

describe('link-external-security', () => {
	ruleTester.run('link-external-security', rule, {
		valid: [
			{ code: '<DBLink href="#">Internal link</DBLink>' },
			{
				code: '<DBLink content="external" target="_blank" referrerPolicy="no-referrer">External</DBLink>'
			}
		],
		invalid: [
			{
				code: '<DBLink content="external">External</DBLink>',
				errors: [
					{ messageId: 'missingTargetBlank' },
					{ messageId: 'missingReferrerPolicy' }
				],
				output: [
					'<DBLink content="external" target="_blank">External</DBLink>',
					'<DBLink content="external" target="_blank" referrerPolicy="no-referrer">External</DBLink>'
				]
			},
			{
				code: '<DBLink content="external" target="_blank">External</DBLink>',
				errors: [{ messageId: 'missingReferrerPolicy' }],
				output: '<DBLink content="external" target="_blank" referrerPolicy="no-referrer">External</DBLink>'
			},
			{
				code: '<DBLink content="external" referrerPolicy="no-referrer">External</DBLink>',
				errors: [{ messageId: 'missingTargetBlank' }],
				output: '<DBLink content="external" referrerPolicy="no-referrer" target="_blank">External</DBLink>'
			},
			{
				code: '<DBLink target="_blank">External</DBLink>',
				errors: [{ messageId: 'missingContentExternal' }],
				output: [
					'<DBLink target="_blank" content="external">External</DBLink>',
					'<DBLink target="_blank" content="external" referrerPolicy="no-referrer">External</DBLink>'
				]
			}
		]
	});

	angularRuleTester.run('link-external-security (Angular)', rule, {
		valid: [
			{
				code: '<db-link content="external" target="_blank" referrerPolicy="no-referrer">External</db-link>'
			}
		],
		invalid: []
	});
});
