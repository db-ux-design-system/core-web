import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';
import { describe, it } from 'vitest';
import rule from '../../../src/rules/input/input-type-required.js';

const ruleTester = new RuleTester({
	languageOptions: {
		parserOptions: {
			ecmaFeatures: { jsx: true }
		}
	}
});

const angularRuleTester = new AngularRuleTester();

describe('input-type-required', () => {
	it('should validate rule', () => {
		ruleTester.run('input-type-required', rule, {
			valid: [
				{ code: '<DBInput label="Name" type="text" />' },
				{ code: '<DBInput label="Email" type="email" />' },
				{ code: '<DBInput label="Password" type="password" />' },
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
				}
			]
		});
	});

	it('should validate rule (Angular)', () => {
		angularRuleTester.run('input-type-required', rule, {
			valid: [{ code: '<db-input label="Name" type="text"></db-input>' }],
			invalid: [
				{
					code: '<db-input label="Name"></db-input>',
					errors: [{ messageId: 'missingType' }],
					output: '<db-input label="Name" type="text"></db-input>'
				}
			]
		});
	});
});
