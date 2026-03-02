import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';
import { describe, it } from 'vitest';
import rule from '../../../src/rules/navigation/navigation-item-back-button-text-required.js';

const ruleTester = new RuleTester({
	languageOptions: {
		parserOptions: {
			ecmaFeatures: { jsx: true }
		}
	}
});

const angularRuleTester = new AngularRuleTester();

describe('navigation-item-back-button-text-required', () => {
	it('should validate rule', () => {
		ruleTester.run('navigation-item-back-button-text-required', rule, {
			valid: [
				{
					code: '<DBNavigationItem backButtonText="Back">Item</DBNavigationItem>'
				},
				{
					code: '<DBNavigationItem backButtonText="Go back">Item</DBNavigationItem>'
				},
				{
					code: '<DBNavigationItem :backButtonText="text">Item</DBNavigationItem>'
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
	});

	it('should validate rule (Angular)', () => {
		angularRuleTester.run(
			'navigation-item-back-button-text-required',
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
});
