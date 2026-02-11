import { RuleTester } from '@typescript-eslint/rule-tester';
import { describe, it } from 'vitest';
import rule from '../../../src/rules/tag/tag-removable-remove-button-required.js';

const ruleTester = new RuleTester({
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: { jsx: true }
	}
});

describe('tag-removable-remove-button-required', () => {
	it('should validate rule', () => {
		ruleTester.run('tag-removable-remove-button-required', rule, {
			valid: [
				{ code: '<DBTag>Tag</DBTag>' },
				{ code: '<DBTag behavior="static">Tag</DBTag>' },
				{
					code: '<DBTag behavior="removable" removeButton="Remove">Tag</DBTag>'
				},
				{
					code: '<db-tag behavior="removable" removeButton="Remove">Tag</db-tag>'
				},
				{
					code: '<DBTag behavior="removable" :removeButton="removeText">Tag</DBTag>'
				}
			],
			invalid: [
				{
					code: '<DBTag behavior="removable">Tag</DBTag>',
					errors: [{ messageId: 'missingRemoveButton' }]
				},
				{
					code: '<DBTag behavior="removable" semantic="successful">Tag</DBTag>',
					errors: [{ messageId: 'missingRemoveButton' }]
				},
				{
					code: '<db-tag behavior="removable">Tag</db-tag>',
					errors: [{ messageId: 'missingRemoveButton' }]
				}
			]
		});
	});
});
