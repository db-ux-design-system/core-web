import * as angularTemplateParser from '@angular-eslint/template-parser';
import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';

import rule from '../../../src/rules/tag/tag-removable-remove-button-required.js';

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

describe('tag-removable-remove-button-required', () => {
	ruleTester.run('tag-removable-remove-button-required', rule, {
		valid: [
			{ code: '<DBTag>Tag</DBTag>' },
			{ code: '<DBTag behavior="static">Tag</DBTag>' },
			{
				code: '<DBTag behavior="removable" removeButton="Remove">Tag</DBTag>'
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
			}
		]
	});

	angularRuleTester.run(
		'tag-removable-remove-button-required (Angular)',
		rule,
		{
			valid: [
				{
					code: '<db-tag behavior="removable" removeButton="Remove">Tag</db-tag>'
				}
			],
			invalid: [
				{
					code: '<db-tag behavior="removable">Tag</db-tag>',
					errors: [{ messageId: 'missingRemoveButton' }]
				}
			]
		}
	);
});
