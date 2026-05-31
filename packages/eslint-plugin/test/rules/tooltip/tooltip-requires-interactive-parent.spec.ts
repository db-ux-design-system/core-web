import * as angularTemplateParser from '@angular-eslint/template-parser';
import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';

import rule from '../../../src/rules/tooltip/tooltip-requires-interactive-parent.js';

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

describe('tooltip-requires-interactive-parent', () => {
	ruleTester.run('tooltip-requires-interactive-parent', rule, {
		valid: [
			{
				code: '<button>Save<DBTooltip>Save document</DBTooltip></button>'
			},
			{
				code: '<DBButton>Save<DBTooltip>Save document</DBTooltip></DBButton>'
			},
			{
				code: '<a href="#">Link<DBTooltip>More info</DBTooltip></a>'
			},
			{
				code: '<DBLink href="#">Link<DBTooltip>More info</DBTooltip></DBLink>'
			},
			{
				code: '<DBNavigationItem>Nav<DBTooltip>Info</DBTooltip></DBNavigationItem>'
			},
			{
				code: '<DBTabItem>Tab<DBTooltip>Info</DBTooltip></DBTabItem>'
			},
			{
				code: '<input type="text"><DBTooltip>Help</DBTooltip></input>'
			}
		],
		invalid: [
			{
				code: '<span>Show more<DBTooltip>XXX</DBTooltip></span>',
				errors: [{ messageId: 'requiresInteractive' }]
			},
			{
				code: '<div>Text<DBTooltip>Info</DBTooltip></div>',
				errors: [{ messageId: 'requiresInteractive' }]
			},
			{
				code: '<p>Paragraph<DBTooltip>Info</DBTooltip></p>',
				errors: [{ messageId: 'requiresInteractive' }]
			},
			{
				code: '<DBBadge>Badge<DBTooltip>Info</DBTooltip></DBBadge>',
				errors: [{ messageId: 'requiresInteractive' }]
			}
		]
	});

	angularRuleTester.run(
		'tooltip-requires-interactive-parent (Angular)',
		rule,
		{
			valid: [
				{
					code: '<db-button>Save<db-tooltip>Save document</db-tooltip></db-button>'
				}
			],
			invalid: [
				{
					code: '<span>Show more<db-tooltip>XXX</db-tooltip></span>',
					errors: [{ messageId: 'requiresInteractive' }]
				}
			]
		}
	);
});
