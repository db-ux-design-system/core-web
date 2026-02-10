import { RuleTester } from '@typescript-eslint/rule-tester';
import { describe, it } from 'vitest';
import rule from '../../../src/rules/form/form-label-required.js';

const ruleTester = new RuleTester({
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: { jsx: true }
	}
});

describe('form-label-required', () => {
	it('should validate rule', () => {
		ruleTester.run('form-label-required', rule, {
			valid: [
				{ code: '<DBInput label="Name" />' },
				{ code: '<DBTextarea label="Description" />' },
				{ code: '<DBSelect label="Country" />' },
				{ code: '<DBCustomSelect label="Options" />' },
				{ code: '<DBCheckbox label="Accept" />' },
				{ code: '<DBCheckbox>Accept terms</DBCheckbox>' },
				{ code: '<DBRadio label="Choice" />' },
				{ code: '<DBRadio>Option A</DBRadio>' },
				{ code: '<DBSwitch label="Enable" />' },
				{ code: '<DBSwitch>Enable feature</DBSwitch>' },
				{ code: '<db-input label="Name"></db-input>' },
				{ code: '<db-textarea [label]="labelText"></db-textarea>' },
				{ code: '<db-checkbox>Accept</db-checkbox>' },
				{ code: '<DBInput :label="dynamicLabel" />' },
				{ code: '<div>Not a form component</div>' }
			],
			invalid: [
				{
					code: '<DBInput />',
					errors: [
						{
							messageId: 'missingLabel',
							data: { component: 'DBInput' }
						}
					]
				},
				{
					code: '<DBTextarea />',
					errors: [
						{
							messageId: 'missingLabel',
							data: { component: 'DBTextarea' }
						}
					]
				},
				{
					code: '<DBSelect />',
					errors: [
						{
							messageId: 'missingLabel',
							data: { component: 'DBSelect' }
						}
					]
				},
				{
					code: '<DBCustomSelect />',
					errors: [
						{
							messageId: 'missingLabel',
							data: { component: 'DBCustomSelect' }
						}
					]
				},
				{
					code: '<DBCheckbox />',
					errors: [
						{
							messageId: 'missingLabel',
							data: { component: 'DBCheckbox' }
						}
					]
				},
				{
					code: '<DBRadio />',
					errors: [
						{
							messageId: 'missingLabel',
							data: { component: 'DBRadio' }
						}
					]
				},
				{
					code: '<DBSwitch />',
					errors: [
						{
							messageId: 'missingLabel',
							data: { component: 'DBSwitch' }
						}
					]
				},
				{
					code: '<db-input></db-input>',
					errors: [
						{
							messageId: 'missingLabel',
							data: { component: 'DBInput' }
						}
					]
				},
				{
					code: '<db-checkbox></db-checkbox>',
					errors: [
						{
							messageId: 'missingLabel',
							data: { component: 'DBCheckbox' }
						}
					]
				}
			]
		});
	});
});
