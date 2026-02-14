import { RuleTester } from '@typescript-eslint/rule-tester';
import { describe, it } from 'vitest';
import rule from '../../../src/rules/tooltip/no-interactive-tooltip-content.js';

const ruleTester = new RuleTester({
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: { jsx: true }
	}
});

describe('no-interactive-tooltip-content', () => {
	it('should validate rule', () => {
		ruleTester.run('no-interactive-tooltip-content', rule, {
			valid: [
				{ code: '<DBTooltip>Simple text</DBTooltip>' },
				{ code: '<DBTooltip><span>Text with span</span></DBTooltip>' },
				{ code: '<DBTooltip><p>Paragraph text</p></DBTooltip>' },
				{ code: '<DBTooltip><strong>Bold text</strong></DBTooltip>' },
				{ code: '<db-tooltip>Simple text</db-tooltip>' },
				{ code: '<db-tooltip><span>Text</span></db-tooltip>' },
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
				},
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
});
