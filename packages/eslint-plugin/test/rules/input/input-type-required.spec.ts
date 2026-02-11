import { RuleTester } from '@typescript-eslint/rule-tester';
import { describe, it } from 'vitest';
import rule from '../../../src/rules/input/input-type-required.js';

const ruleTester = new RuleTester({
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: { jsx: true }
	}
});

describe('input-type-required', () => {
	it('should validate rule', () => {
		ruleTester.run('input-type-required', rule, {
			valid: [
				{ code: '<DBInput label="Name" type="text" />' },
				{ code: '<DBInput label="Email" type="email" />' },
				{ code: '<DBInput label="Password" type="password" />' },
				{ code: '<db-input label="Name" type="text"></db-input>' },
				{ code: '<DBInput label="Search" :type="inputType" />' }
			],
			invalid: [
				{
					code: '<DBInput label="Name" />',
					errors: [{ messageId: 'missingType' }],
					output: '<DBInput label="Name" type="text" />'
				},
				{
					code: '<DBInput label="Name" placeholder="Enter name" />',
					errors: [{ messageId: 'missingType' }],
					output: '<DBInput label="Name" placeholder="Enter name" type="text" />'
				},
				{
					code: '<db-input label="Name"></db-input>',
					errors: [{ messageId: 'missingType' }],
					output: '<db-input label="Name" type="text"></db-input>'
				}
			]
		});
	});
});
