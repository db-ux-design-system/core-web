import * as angularTemplateParser from '@angular-eslint/template-parser';
import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';

import rule from '../../../src/rules/form/form-label-required.js';

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

describe('form-label-required', () => {
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
			}
		]
	});

	angularRuleTester.run('form-label-required (Angular)', rule, {
		valid: [
			{ code: '<db-input label="Name"></db-input>' },
			{ code: '<db-textarea [label]="labelText"></db-textarea>' },
			{ code: '<db-checkbox>Accept</db-checkbox>' }
		],
		invalid: []
	});
});
