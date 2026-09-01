import * as angularTemplateParser from '@angular-eslint/template-parser';
import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';

import rule from '../../../src/rules/button/button-single-icon-attribute.js';

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

describe('button-single-icon-attribute', () => {
	ruleTester.run('button-single-icon-attribute', rule, {
		valid: [
			{ code: '<DBButton>Save</DBButton>' },
			{ code: '<DBButton icon="save">Save</DBButton>' },
			{ code: '<DBButton iconLeading="save">Save</DBButton>' },
			{ code: '<DBButton iconTrailing="arrow">Next</DBButton>' }
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
			}
		]
	});

	angularRuleTester.run('button-single-icon-attribute (Angular)', rule, {
		valid: [
			{ code: '<db-button icon="save">Save</db-button>' },
			{
				code: '<db-button [iconLeading]="iconName">Save</db-button>'
			}
		],
		invalid: [
			{
				code: '<db-button icon="save" [iconLeading]="iconName">Save</db-button>',
				errors: [{ messageId: 'multipleIcons' }]
			}
		]
	});
});
