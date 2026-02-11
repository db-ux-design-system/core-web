import { RuleTester } from '@typescript-eslint/rule-tester';
import { describe, it } from 'vitest';
import rule from '../../../src/rules/input/input-file-type-validation.js';

const ruleTester = new RuleTester({
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: { jsx: true }
	}
});

describe('input-file-type-validation', () => {
	it('should validate rule', () => {
		ruleTester.run('input-file-type-validation', rule, {
			valid: [
				{ code: '<DBInput label="Name" type="text" />' },
				{ code: '<DBInput label="File" type="file" accept=".pdf" />' },
				{
					code: '<DBInput label="Files" type="file" accept="image/*" multiple />'
				},
				{
					code: '<db-input label="File" type="file" accept=".jpg"></db-input>'
				}
			],
			invalid: [
				{
					code: '<DBInput label="File" type="file" />',
					errors: [{ messageId: 'missingAccept' }]
				},
				{
					code: '<DBInput label="Name" type="text" multiple />',
					errors: [{ messageId: 'invalidMultiple' }]
				},
				{
					code: '<DBInput label="Name" type="text" accept=".pdf" />',
					errors: [{ messageId: 'invalidAccept' }]
				},
				{
					code: '<DBInput label="Email" type="email" accept=".pdf" multiple />',
					errors: [
						{ messageId: 'invalidMultiple' },
						{ messageId: 'invalidAccept' }
					]
				}
			]
		});
	});
});
