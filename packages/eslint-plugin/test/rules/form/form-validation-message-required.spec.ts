import { RuleTester } from '@typescript-eslint/rule-tester';
import { describe, it } from 'vitest';
import rule from '../../../src/rules/form/form-validation-message-required.js';

const ruleTester = new RuleTester({
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: { jsx: true }
	}
});

describe('form-validation-message-required', () => {
	it('should validate rule', () => {
		ruleTester.run('form-validation-message-required', rule, {
			valid: [
				{ code: '<DBInput label="Name" />' },
				{
					code: '<DBInput label="Name" required invalidMessage="Required" />'
				},
				{
					code: '<DBTextarea label="Text" maxLength={100} invalidMessage="Too long" />'
				},
				{
					code: '<DBInput label="Age" min={18} invalidMessage="Must be 18+" />'
				},
				{
					code: '<DBInput label="Email" pattern=".*@.*" invalidMessage="Invalid email" />'
				},
				{
					code: '<DBSelect label="Country" required invalidMessage="Required" />'
				},
				{ code: '<DBRadio required>Option</DBRadio>' }
			],
			invalid: [
				{
					code: '<DBInput label="Name" required />',
					errors: [
						{
							messageId: 'missingInvalidMessage',
							data: {
								component: 'DBInput',
								attribute: 'required'
							}
						}
					]
				},
				{
					code: '<DBTextarea label="Text" maxLength={100} />',
					errors: [
						{
							messageId: 'missingInvalidMessage',
							data: {
								component: 'DBTextarea',
								attribute: 'maxLength'
							}
						}
					]
				},
				{
					code: '<DBInput label="Text" minLength={5} />',
					errors: [
						{
							messageId: 'missingInvalidMessage',
							data: {
								component: 'DBInput',
								attribute: 'minLength'
							}
						}
					]
				},
				{
					code: '<DBInput label="Age" min={18} />',
					errors: [
						{
							messageId: 'missingInvalidMessage',
							data: { component: 'DBInput', attribute: 'min' }
						}
					]
				},
				{
					code: '<DBInput label="Score" max={100} />',
					errors: [
						{
							messageId: 'missingInvalidMessage',
							data: { component: 'DBInput', attribute: 'max' }
						}
					]
				},
				{
					code: '<DBInput label="Email" pattern=".*@.*" />',
					errors: [
						{
							messageId: 'missingInvalidMessage',
							data: { component: 'DBInput', attribute: 'pattern' }
						}
					]
				},
				{
					code: '<DBCheckbox required>Accept</DBCheckbox>',
					errors: [
						{
							messageId: 'missingInvalidMessage',
							data: {
								component: 'DBCheckbox',
								attribute: 'required'
							}
						}
					]
				}
			]
		});
	});
});
