import { RuleTester } from '@typescript-eslint/rule-tester';
import { describe, it } from 'vitest';
import rule from '../../../src/rules/select/select-requires-options.js';

const ruleTester = new RuleTester({
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: { jsx: true }
	}
});

describe('select-requires-options', () => {
	it('should validate rule', () => {
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
				},
				{
					code: '<db-select label="Country"><option value="de">Germany</option></db-select>'
				},
				{ code: '<DBSelect label="Country" :options="options" />' },
				{
					code: '<db-select label="Country" [options]="options"></db-select>'
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
					code: '<db-select label="Country"></db-select>',
					errors: [{ messageId: 'missingOptions' }]
				},
				{
					code: '<DBSelect label="Country"><div>Not an option</div></DBSelect>',
					errors: [{ messageId: 'missingOptions' }]
				}
			]
		});
	});
});
