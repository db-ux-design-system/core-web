import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';
import { describe, it } from 'vitest';
import rule from '../../../src/rules/header/header-burger-menu-label-required.js';

const ruleTester = new RuleTester({
	languageOptions: {
		parserOptions: {
			ecmaFeatures: { jsx: true }
		}
	}
});

const angularRuleTester = new AngularRuleTester();

describe('header-burger-menu-label-required', () => {
	it('should validate rule', () => {
		ruleTester.run('header-burger-menu-label-required', rule, {
			valid: [
				{ code: '<DBHeader burgerMenuLabel="Menu">Content</DBHeader>' },
				{
					code: '<DBHeader burgerMenuLabel="Open navigation">Content</DBHeader>'
				},
				{
					code: '<DBHeader :burgerMenuLabel="label">Content</DBHeader>'
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
				}
			]
		});
	});

	it('should validate rule (Angular)', () => {
		angularRuleTester.run('header-burger-menu-label-required', rule, {
			valid: [
				{
					code: '<db-header burgerMenuLabel="Menu">Content</db-header>'
				},
				{
					code: '<db-header [burgerMenuLabel]="menuLabel">Content</db-header>'
				}
			],
			invalid: [
				{
					code: '<db-header>Content</db-header>',
					errors: [{ messageId: 'missingBurgerMenuLabel' }]
				}
			]
		});
	});
});
