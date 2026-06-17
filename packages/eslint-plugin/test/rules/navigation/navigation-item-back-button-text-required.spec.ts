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
				code: '<DBControlPanelNavigationItem backButtonText="Back">Item</DBControlPanelNavigationItem>'
			},
			{
				code: '<DBControlPanelNavigationItem backButtonText="Go back">Item</DBControlPanelNavigationItem>'
			}
		],
		invalid: [
			{
				code: '<DBControlPanelNavigationItem>Item</DBControlPanelNavigationItem>',
				errors: [{ messageId: 'missingBackButtonText' }]
			},
			{
				code: '<DBControlPanelNavigationItem icon="home">Item</DBControlPanelNavigationItem>',
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
					code: '<db-control-panel-navigation-item backButtonText="Back">Item</db-control-panel-navigation-item>'
				},
				{
					code: '<db-control-panel-navigation-item [backButtonText]="backText">Item</db-control-panel-navigation-item>'
				}
			],
			invalid: [
				{
					code: '<db-control-panel-navigation-item>Item</db-control-panel-navigation-item>',
					errors: [{ messageId: 'missingBackButtonText' }]
				}
			]
		}
	);
});
