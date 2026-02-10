import { RuleTester } from '@typescript-eslint/rule-tester';
import { describe, it } from 'vitest';
import rule from '../../../src/rules/icon/prefer-icon-attribute.js';

const ruleTester = new RuleTester({
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: { jsx: true }
	}
});

describe('prefer-icon-attribute', () => {
	it('should validate rule', () => {
		ruleTester.run('prefer-icon-attribute', rule, {
			valid: [
				{ code: '<DBButton icon="save">Save</DBButton>' },
				{ code: '<DBInput icon="search" />' },
				{ code: '<db-button icon="save">Save</db-button>' },
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
					code: '<db-button><db-icon icon="save"></db-icon></db-button>',
					errors: [
						{
							messageId: 'preferAttribute',
							data: { component: 'DBButton' }
						}
					],
					output: '<db-button icon="save"></db-button>'
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
});
