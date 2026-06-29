import * as angularTemplateParser from '@angular-eslint/template-parser';
import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';

import rule from '../../../src/rules/select/select-requires-options.js';

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

describe('select-requires-options', () => {
	ruleTester.run('select-requires-options', rule, {
		valid: [
			{
				code: `<DBSelect label="Country">
            <option value="de">Germany</option>
            <option value="us">USA</option>
          </DBSelect>`
			},
			{
				code: '<DBSelect label="Country" options={countryOptions} />'
			}
		],
		invalid: [
			{
				code: '<DBSelect label="Country" />',
				errors: [{ messageId: 'missingOptions' }]
			},
			{
				code: '<DBSelect label="Country"></DBSelect>',
				errors: [{ messageId: 'missingOptions' }]
			},
			{
				code: '<DBSelect label="Country"><div>Not an option</div></DBSelect>',
				errors: [{ messageId: 'missingOptions' }]
			}
		]
	});

	angularRuleTester.run('select-requires-options (Angular)', rule, {
		valid: [
			{
				code: '<db-select label="Country"><option value="de">Germany</option></db-select>'
			},
			{
				code: '<db-select label="Country" [options]="options"></db-select>'
			}
		],
		invalid: [
			{
				code: '<db-select label="Country"></db-select>',
				errors: [{ messageId: 'missingOptions' }]
			}
		]
	});
});
