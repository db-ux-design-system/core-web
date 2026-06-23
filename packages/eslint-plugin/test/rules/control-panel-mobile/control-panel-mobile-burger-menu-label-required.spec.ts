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
			{ code: '<DBHeader burgerMenuLabel="Menu">Content</DBHeader>' },
			{
				code: '<DBHeader burgerMenuLabel="Open navigation">Content</DBHeader>'
			},
			{
				code: '<DBControlPanelMobile burgerMenuLabel="Menu">Content</DBControlPanelMobile>'
			},
			{
				code: '<DBControlPanelMobile burgerMenuLabel="Open navigation">Content</DBControlPanelMobile>'
			}
		],
		invalid: [
			{
				code: '<DBHeader>Content</DBHeader>',
				errors: [{ messageId: 'missingBurgerMenuLabel' }]
			},
			{
				code: '<DBHeader closeButtonText="Close">Content</DBHeader>',
				errors: [{ messageId: 'missingBurgerMenuLabel' }]
			},
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
					code: '<db-header burgerMenuLabel="Menu">Content</db-header>'
				},
				{
					code: '<db-header [burgerMenuLabel]="menuLabel">Content</db-header>'
				},
				{
					code: '<db-control-panel-mobile burgerMenuLabel="Menu">Content</db-control-panel-mobile>'
				},
				{
					code: '<db-control-panel-mobile [burgerMenuLabel]="menuLabel">Content</db-control-panel-mobile>'
				}
			],
			invalid: [
				{
					code: '<db-header>Content</db-header>',
					errors: [{ messageId: 'missingBurgerMenuLabel' }]
				},
				{
					code: '<db-control-panel-mobile>Content</db-control-panel-mobile>',
					errors: [{ messageId: 'missingBurgerMenuLabel' }]
				}
			]
		}
	);
});
