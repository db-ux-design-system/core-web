import * as angularTemplateParser from '@angular-eslint/template-parser';
import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';

import rule from '../../../src/rules/input/input-type-required.js';

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

describe('input-type-required', () => {
	ruleTester.run('input-type-required', rule, {
		valid: [
			{ code: '<DBInput label="Name" type="text" />' },
			{ code: '<DBInput label="Email" type="email" />' },
			{ code: '<DBInput label="Password" type="password" />' }
		],
		invalid: [
			{
				code: '<DBInput label="Name" />',
				errors: [{ messageId: 'missingType' }],
				output: '<DBInput label="Name" type="text" />'
			},
			{
				code: '<DBInput label="Name" placeholder="Enter name" />',
				errors: [{ messageId: 'missingType' }],
				output: '<DBInput label="Name" placeholder="Enter name" type="text" />'
			}
		]
	});

	angularRuleTester.run('input-type-required (Angular)', rule, {
		valid: [{ code: '<db-input label="Name" type="text"></db-input>' }],
		invalid: [
			{
				code: '<db-input label="Name"></db-input>',
				errors: [{ messageId: 'missingType' }],
				output: '<db-input label="Name" type="text"></db-input>'
			}
		]
	});
});
