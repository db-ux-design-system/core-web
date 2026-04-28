import * as angularTemplateParser from '@angular-eslint/template-parser';
import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';

import rule from '../../../src/rules/button/button-no-text-requires-tooltip.js';

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

describe('button-no-text-requires-tooltip', () => {
	ruleTester.run('button-no-text-requires-tooltip', rule, {
		valid: [
			{
				code: '<DBButton>Save</DBButton>'
			},
			{
				code: '<DBButton icon="save">Save</DBButton>'
			},
			{
				code: `<DBButton icon="save" noText>
            Save
            <DBTooltip>Save document</DBTooltip>
          </DBButton>`
			},
			{
				code: `<DBButton iconLeading="save" noText>
            Save
            <DBTooltip>Save document</DBTooltip>
          </DBButton>`
			},
			{
				code: `<DBButton iconTrailing="save" noText>
            Save
            <DBTooltip>Save document</DBTooltip>
          </DBButton>`
			},
			{
				code: `<DBButton icon="x_placeholder" noText>
            ABC
            <DBTooltip>ABC</DBTooltip>
          </DBButton>`
			}
		],
		invalid: [
			{
				code: '<DBButton noText>Save</DBButton>',
				errors: [
					{ messageId: 'missingIcon' },
					{ messageId: 'missingTooltip' }
				],
				output: '<DBButton noText>Save\n  <DBTooltip>Describe action</DBTooltip></DBButton>'
			},
			{
				code: '<DBButton icon="save" noText>Save</DBButton>',
				errors: [{ messageId: 'missingTooltip' }],
				output: '<DBButton icon="save" noText>Save\n  <DBTooltip>Describe action</DBTooltip></DBButton>'
			},
			{
				code: '<DBButton noText>ABC</DBButton>',
				errors: [
					{ messageId: 'missingIcon' },
					{ messageId: 'missingTooltip' }
				],
				output: '<DBButton noText>ABC\n  <DBTooltip>Describe action</DBTooltip></DBButton>'
			},
			{
				code: '<DBButton icon="x" noText>ABC</DBButton>',
				errors: [{ messageId: 'missingTooltip' }],
				output: '<DBButton icon="x" noText>ABC\n  <DBTooltip>Describe action</DBTooltip></DBButton>'
			}
		]
	});

	angularRuleTester.run('button-no-text-requires-tooltip (Angular)', rule, {
		valid: [
			{
				code: '<db-button>Save</db-button>'
			}
		],
		invalid: [
			{
				code: '<db-button [noText]="true">ABC</db-button>',
				errors: [
					{ messageId: 'missingIcon' },
					{ messageId: 'missingTooltip' }
				],
				output: '<db-button [noText]="true">ABC\n  <db-tooltip>Describe action</db-tooltip></db-button>'
			},
			{
				code: '<db-button icon="x" [noText]="true">ABC</db-button>',
				errors: [{ messageId: 'missingTooltip' }],
				output: '<db-button icon="x" [noText]="true">ABC\n  <db-tooltip>Describe action</db-tooltip></db-button>'
			}
		]
	});
});
