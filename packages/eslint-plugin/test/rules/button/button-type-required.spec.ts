import * as angularTemplateParser from '@angular-eslint/template-parser';
import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';

import rule from '../../../src/rules/button/button-type-required.js';

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

describe('button-type-required', () => {
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
				code: '<div>Not a button</div>'
			}
		],
		invalid: [
			{
				code: '<DBButton>Save</DBButton>',
				errors: [{ messageId: 'missingType' }],
				output: '<DBButton type="submit">Save</DBButton>'
			},
			{
				code: '<DBButton icon="save">Save</DBButton>',
				errors: [{ messageId: 'missingType' }],
				output: '<DBButton icon="save" type="submit">Save</DBButton>'
			}
		]
	});

	angularRuleTester.run('button-type-required (Angular)', rule, {
		valid: [
			{
				code: '<db-button type="button">Save</db-button>'
			},
			{
				code: '<db-button [type]="buttonType">Dynamic</db-button>'
			}
		],
		invalid: [
			{
				code: '<db-button>Save</db-button>',
				errors: [{ messageId: 'missingType' }],
				output: '<db-button type="submit">Save</db-button>'
			}
		]
	});
});
