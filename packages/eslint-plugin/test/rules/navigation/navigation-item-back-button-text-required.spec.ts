import * as angularTemplateParser from '@angular-eslint/template-parser';
import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';

import rule from '../../../src/rules/navigation/navigation-item-back-button-text-required.js';

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

describe('navigation-item-back-button-text-required', () => {
	ruleTester.run('navigation-item-back-button-text-required', rule, {
		valid: [
			{
				code: '<DBNavigationItem backButtonText="Back">Item</DBNavigationItem>'
			},
			{
				code: '<DBNavigationItem backButtonText="Go back">Item</DBNavigationItem>'
			}
		],
		invalid: [
			{
				code: '<DBNavigationItem>Item</DBNavigationItem>',
				errors: [{ messageId: 'missingBackButtonText' }]
			},
			{
				code: '<DBNavigationItem icon="home">Item</DBNavigationItem>',
				errors: [{ messageId: 'missingBackButtonText' }]
			}
		]
	});

	angularRuleTester.run(
		'navigation-item-back-button-text-required (Angular)',
		rule,
		{
			valid: [
				{
					code: '<db-navigation-item backButtonText="Back">Item</db-navigation-item>'
				},
				{
					code: '<db-navigation-item [backButtonText]="backText">Item</db-navigation-item>'
				}
			],
			invalid: [
				{
					code: '<db-navigation-item>Item</db-navigation-item>',
					errors: [{ messageId: 'missingBackButtonText' }]
				}
			]
		}
	);
});
