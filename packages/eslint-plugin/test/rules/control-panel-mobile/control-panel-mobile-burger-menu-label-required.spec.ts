import * as angularTemplateParser from '@angular-eslint/template-parser';
import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';

import rule from '../../../src/rules/control-panel-mobile/control-panel-mobile-burger-menu-label-required.js';

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

describe('control-panel-mobile-burger-menu-label-required', () => {
	ruleTester.run('control-panel-mobile-burger-menu-label-required', rule, {
		valid: [
			{
				code: '<DBControlPanelMobile burgerMenuLabel="Menu">Content</DBControlPanelMobile>'
			},
			{
				code: '<DBControlPanelMobile burgerMenuLabel="Open navigation">Content</DBControlPanelMobile>'
			}
		],
		invalid: [
			{
				code: '<DBControlPanelMobile>Content</DBControlPanelMobile>',
				errors: [{ messageId: 'missingBurgerMenuLabel' }]
			},
			{
				code: '<DBControlPanelMobile drawerHeaderText="Nav">Content</DBControlPanelMobile>',
				errors: [{ messageId: 'missingBurgerMenuLabel' }]
			}
		]
	});

	angularRuleTester.run(
		'control-panel-mobile-burger-menu-label-required (Angular)',
		rule,
		{
			valid: [
				{
					code: '<db-control-panel-mobile burgerMenuLabel="Menu">Content</db-control-panel-mobile>'
				},
				{
					code: '<db-control-panel-mobile [burgerMenuLabel]="menuLabel">Content</db-control-panel-mobile>'
				}
			],
			invalid: [
				{
					code: '<db-control-panel-mobile>Content</db-control-panel-mobile>',
					errors: [{ messageId: 'missingBurgerMenuLabel' }]
				}
			]
		}
	);
});
