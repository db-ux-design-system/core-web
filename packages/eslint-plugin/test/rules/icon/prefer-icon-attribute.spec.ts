import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';
import { describe, it } from 'vitest';
import rule from '../../../src/rules/icon/prefer-icon-attribute.js';

const ruleTester = new RuleTester({
	languageOptions: {
		parserOptions: {
			ecmaFeatures: { jsx: true }
		}
	}
});

const angularRuleTester = new AngularRuleTester();

describe('prefer-icon-attribute', () => {
	it('should validate rule', () => {
		ruleTester.run('prefer-icon-attribute', rule, {
			valid: [
				{ code: '<DBButton icon="save">Save</DBButton>' },
				{ code: '<DBInput icon="search" />' },
				{ code: '<DBButton :icon="iconName">Save</DBButton>' },
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
	});

	it('should validate rule (Angular)', () => {
		angularRuleTester.run('prefer-icon-attribute', rule, {
			valid: [{ code: '<db-button icon="save">Save</db-button>' }],
			invalid: [
				{
					code: '<db-button><db-icon icon="save"></db-icon></db-button>',
					errors: [
						{
							messageId: 'preferAttribute',
							data: { component: 'db-button' }
						}
					],
					output: '<db-button icon="save"></db-button>'
				}
			]
		});
	});
});
