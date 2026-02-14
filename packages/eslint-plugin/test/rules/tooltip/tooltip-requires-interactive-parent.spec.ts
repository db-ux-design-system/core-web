import { RuleTester } from '@typescript-eslint/rule-tester';
import { describe, it } from 'vitest';
import rule from '../../../src/rules/tooltip/tooltip-requires-interactive-parent.js';

const ruleTester = new RuleTester({
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: { jsx: true }
	}
});

describe('tooltip-requires-interactive-parent', () => {
	it('should validate rule', () => {
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
					code: '<db-button>Save<db-tooltip>Save document</db-tooltip></db-button>'
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
					code: '<span>Show more<db-tooltip>XXX</db-tooltip></span>',
					errors: [{ messageId: 'requiresInteractive' }]
				},
				{
					code: '<DBBadge>Badge<DBTooltip>Info</DBTooltip></DBBadge>',
					errors: [{ messageId: 'requiresInteractive' }]
				}
			]
		});
	});
});
