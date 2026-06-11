import * as angularTemplateParser from '@angular-eslint/template-parser';
import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';

import rule from '../../../src/rules/input/input-file-type-validation.js';

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

describe('input-file-type-validation', () => {
	ruleTester.run('input-file-type-validation', rule, {
		valid: [
			{ code: '<DBInput label="Name" type="text" />' },
			{ code: '<DBInput label="File" type="file" accept=".pdf" />' },
			{
				code: '<DBInput label="Files" type="file" accept="image/*" multiple />'
			}
		],
		invalid: [
			{
				code: '<DBInput label="File" type="file" />',
				errors: [{ messageId: 'missingAccept' }]
			},
			{
				code: '<DBInput label="Name" type="text" multiple />',
				errors: [{ messageId: 'invalidMultiple' }]
			},
			{
				code: '<DBInput label="Name" type="text" accept=".pdf" />',
				errors: [{ messageId: 'invalidAccept' }]
			},
			{
				code: '<DBInput label="Email" type="email" accept=".pdf" multiple />',
				errors: [
					{ messageId: 'invalidMultiple' },
					{ messageId: 'invalidAccept' }
				]
			}
		]
	});

	angularRuleTester.run('input-file-type-validation (Angular)', rule, {
		valid: [
			{
				code: '<db-input label="File" type="file" accept=".jpg"></db-input>'
			}
		],
		invalid: []
	});
});
