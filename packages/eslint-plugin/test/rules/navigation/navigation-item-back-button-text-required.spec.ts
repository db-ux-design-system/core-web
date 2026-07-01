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
				code: '<DBControlPanelNavigationItemGroup backButtonText="Back">Item</DBControlPanelNavigationItemGroup>'
			},
			{
				code: '<DBControlPanelNavigationItemGroup backButtonText="Go back">Item</DBControlPanelNavigationItemGroup>'
			}
		],
		invalid: [
			{
				code: '<DBControlPanelNavigationItemGroup>Item</DBControlPanelNavigationItemGroup>',
				errors: [{ messageId: 'missingBackButtonText' }]
			},
			{
				code: '<DBControlPanelNavigationItemGroup icon="home">Item</DBControlPanelNavigationItemGroup>',
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
					code: '<db-control-panel-navigation-item-group backButtonText="Back">Item</db-control-panel-navigation-item-group>'
				},
				{
					code: '<db-control-panel-navigation-item-group [backButtonText]="backText">Item</db-control-panel-navigation-item-group>'
				}
			],
			invalid: [
				{
					code: '<db-control-panel-navigation-item-group>Item</db-control-panel-navigation-item-group>',
					errors: [{ messageId: 'missingBackButtonText' }]
				}
			]
		}
	);
});
