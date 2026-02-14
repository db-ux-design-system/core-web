import { RuleTester } from '@typescript-eslint/rule-tester';
import { describe, it } from 'vitest';
import rule from '../../../src/rules/accordion/no-nested-accordion.js';

const ruleTester = new RuleTester({
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: { jsx: true }
	}
});

describe('no-nested-accordion', () => {
	it('should validate rule', () => {
		ruleTester.run('no-nested-accordion', rule, {
			valid: [
				{
					code: '<DBAccordion><DBAccordionItem>Item</DBAccordionItem></DBAccordion>'
				},
				{ code: '<div><DBAccordion>Content</DBAccordion></div>' },
				{
					code: '<db-accordion><db-accordion-item>Item</db-accordion-item></db-accordion>'
				},
				{
					code: '<DBAccordion>First</DBAccordion><DBAccordion>Second</DBAccordion>'
				}
			],
			invalid: [
				{
					code: '<DBAccordion><DBAccordion>Nested</DBAccordion></DBAccordion>',
					errors: [{ messageId: 'noNested' }]
				},
				{
					code: '<DBAccordion><DBAccordionItem><DBAccordion>Deep nested</DBAccordion></DBAccordionItem></DBAccordion>',
					errors: [{ messageId: 'noNested' }]
				},
				{
					code: '<db-accordion><db-accordion>Nested</db-accordion></db-accordion>',
					errors: [{ messageId: 'noNested' }]
				},
				{
					code: '<DBAccordion><div><DBAccordion>Nested in div</DBAccordion></div></DBAccordion>',
					errors: [{ messageId: 'noNested' }]
				}
			]
		});
	});
});
