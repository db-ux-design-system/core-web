import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';
import { describe, it } from 'vitest';
import rule from '../../../src/rules/select/custom-select-tags-remove-text-required.js';

const ruleTester = new RuleTester({
	languageOptions: {
		parserOptions: {
			ecmaFeatures: { jsx: true }
		}
	}
});

const angularRuleTester = new AngularRuleTester();

describe('custom-select-tags-remove-text-required', () => {
	it('should validate rule', () => {
		ruleTester.run('custom-select-tags-remove-text-required', rule, {
			valid: [
				{ code: '<DBCustomSelect label="Select" />' },
				{
					code: '<DBCustomSelect label="Select" selectedType="text" />'
				},
				{
					code: '<DBCustomSelect label="Select" selectedType="tag" removeTagsTexts={["Remove A", "Remove B"]} />'
				},
				{
					code: '<DBCustomSelect label="Select" selectedType="tag" :removeTagsTexts="texts" />'
				}
			],
			invalid: [
				{
					code: '<DBCustomSelect label="Select" selectedType="tag" />',
					errors: [{ messageId: 'missingRemoveTagsTexts' }]
				},
				{
					code: '<DBCustomSelect label="Select" selectedType="tag" removeTagsTexts={[]} />',
					errors: [{ messageId: 'missingRemoveTagsTexts' }]
				},
				{
					code: '<DBCustomSelect label="Select" selectedType="tag" options={opts} />',
					errors: [{ messageId: 'missingRemoveTagsTexts' }]
				}
			]
		});
	});

	it('should validate rule (Angular)', () => {
		angularRuleTester.run('custom-select-tags-remove-text-required', rule, {
			valid: [
				{
					code: '<db-custom-select label="Select" selectedType="tag" removeTagsTexts="texts"></db-custom-select>'
				}
			],
			invalid: [
				{
					code: '<db-custom-select label="Select" selectedType="tag"></db-custom-select>',
					errors: [{ messageId: 'missingRemoveTagsTexts' }]
				}
			]
		});
	});
});
