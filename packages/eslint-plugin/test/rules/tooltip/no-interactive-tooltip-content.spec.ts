import * as angularTemplateParser from '@angular-eslint/template-parser';
import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';

import rule from '../../../src/rules/tooltip/no-interactive-tooltip-content.js';

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

describe('no-interactive-tooltip-content', () => {
	ruleTester.run('no-interactive-tooltip-content', rule, {
		valid: [
			{ code: '<DBTooltip>Simple text</DBTooltip>' },
			{ code: '<DBTooltip><span>Text with span</span></DBTooltip>' },
			{ code: '<DBTooltip><p>Paragraph text</p></DBTooltip>' },
			{ code: '<DBTooltip><strong>Bold text</strong></DBTooltip>' },
			{ code: '<div><button>OK</button></div>' }
		],
		invalid: [
			{
				code: '<DBTooltip><button>Click</button></DBTooltip>',
				errors: [{ messageId: 'noInteractive' }]
			},
			{
				code: '<DBTooltip><a href="#">Link</a></DBTooltip>',
				errors: [{ messageId: 'noInteractive' }]
			},
			{
				code: '<DBTooltip><input type="text" /></DBTooltip>',
				errors: [{ messageId: 'noInteractive' }]
			},
			{
				code: '<DBTooltip><DBButton>Click</DBButton></DBTooltip>',
				errors: [{ messageId: 'noInteractive' }]
			},
			{
				code: '<DBTooltip><DBLink href="#">Link</DBLink></DBTooltip>',
				errors: [{ messageId: 'noInteractive' }]
			},
			{
				code: '<DBTooltip><span><button>Nested</button></span></DBTooltip>',
				errors: [{ messageId: 'noInteractive' }]
			}
		]
	});

	angularRuleTester.run('no-interactive-tooltip-content (Angular)', rule, {
		valid: [
			{ code: '<db-tooltip>Simple text</db-tooltip>' },
			{ code: '<db-tooltip><span>Text</span></db-tooltip>' }
		],
		invalid: [
			{
				code: '<db-tooltip><button>Click</button></db-tooltip>',
				errors: [{ messageId: 'noInteractive' }]
			},
			{
				code: '<db-tooltip><db-button>Click</db-button></db-tooltip>',
				errors: [{ messageId: 'noInteractive' }]
			}
		]
	});
});
