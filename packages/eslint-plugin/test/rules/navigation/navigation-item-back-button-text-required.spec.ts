import { RuleTester } from '@typescript-eslint/rule-tester';
import { describe, it } from 'vitest';
import rule from '../../../src/rules/navigation/navigation-item-back-button-text-required.js';

const ruleTester = new RuleTester({
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: { jsx: true }
	}
});

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
					code: '<db-navigation-item backButtonText="Back">Item</db-navigation-item>'
				},
				{
					code: '<db-navigation-item [backButtonText]="backText">Item</db-navigation-item>'
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
				},
				{
					code: '<db-navigation-item>Item</db-navigation-item>',
					errors: [{ messageId: 'missingBackButtonText' }]
				}
			]
		});
	});
});
