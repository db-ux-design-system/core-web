import * as angularTemplateParser from '@angular-eslint/template-parser';
import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';

import rule from '../../../src/rules/icon/prefer-icon-attribute.js';

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

describe('prefer-icon-attribute', () => {
	ruleTester.run('prefer-icon-attribute', rule, {
		valid: [
			{ code: '<DBButton icon="save">Save</DBButton>' },
			{ code: '<DBInput icon="search" />' },
			{ code: '<div><DBIcon icon="test" /></div>' },
			{ code: '<DBButton>Save</DBButton>' }
		],
		invalid: [
			{
				code: '<DBButton><DBIcon icon="save" /></DBButton>',
				errors: [
					{
						messageId: 'preferAttribute',
						data: { component: 'DBButton' }
					}
				],
				output: '<DBButton icon="save"></DBButton>'
			},
			{
				code: '<DBInput><DBIcon icon="search" /></DBInput>',
				errors: [
					{
						messageId: 'preferAttribute',
						data: { component: 'DBInput' }
					}
				],
				output: '<DBInput icon="search"></DBInput>'
			},
			{
				code: '<DBLink><DBIcon icon="external" /></DBLink>',
				errors: [
					{
						messageId: 'preferAttribute',
						data: { component: 'DBLink' }
					}
				],
				output: '<DBLink icon="external"></DBLink>'
			},
			{
				code: '<DBTag><DBIcon icon="close" /></DBTag>',
				errors: [
					{
						messageId: 'preferAttribute',
						data: { component: 'DBTag' }
					}
				],
				output: '<DBTag icon="close"></DBTag>'
			}
		]
	});

	angularRuleTester.run('prefer-icon-attribute (Angular)', rule, {
		valid: [{ code: '<db-button icon="save">Save</db-button>' }],
		invalid: []
	});
});
