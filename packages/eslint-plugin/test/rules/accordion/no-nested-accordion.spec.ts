import * as angularTemplateParser from '@angular-eslint/template-parser';
import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';

import rule from '../../../src/rules/accordion/no-nested-accordion.js';

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

describe('no-nested-accordion', () => {
	ruleTester.run('no-nested-accordion', rule, {
		valid: [
			{
				code: '<DBAccordion><DBAccordionItem>Item</DBAccordionItem></DBAccordion>'
			},
			{ code: '<div><DBAccordion>Content</DBAccordion></div>' },
			{
				code: '<><DBAccordion>First</DBAccordion><DBAccordion>Second</DBAccordion></>'
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
				code: '<DBAccordion><div><DBAccordion>Nested in div</DBAccordion></div></DBAccordion>',
				errors: [{ messageId: 'noNested' }]
			}
		]
	});

	angularRuleTester.run('no-nested-accordion (Angular)', rule, {
		valid: [
			{
				code: '<db-accordion><db-accordion-item>Item</db-accordion-item></db-accordion>'
			}
		],
		invalid: []
	});
});
