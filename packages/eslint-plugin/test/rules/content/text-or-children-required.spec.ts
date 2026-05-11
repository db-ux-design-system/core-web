import * as angularTemplateParser from '@angular-eslint/template-parser';
import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';

import rule from '../../../src/rules/content/text-or-children-required.js';

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

describe('text-or-children-required', () => {
	ruleTester.run('text-or-children-required', rule, {
		valid: [
			{ code: '<DBButton text="Save" />' },
			{ code: '<DBButton>Save</DBButton>' },
			{ code: '<DBLink text="Click here" />' },
			{ code: '<DBLink>Click here</DBLink>' },
			{ code: '<DBBadge>New</DBBadge>' },
			{ code: '<DBIcon icon="test">Label</DBIcon>' },
			{
				code: '<DBNotification><span>Message</span></DBNotification>'
			},
			{ code: '<div />' }
		],
		invalid: [
			{
				code: '<DBButton />',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'DBButton' }
					}
				]
			},
			{
				code: '<DBLink />',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'DBLink' }
					}
				]
			},
			{
				code: '<DBBadge />',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'DBBadge' }
					}
				]
			},
			{
				code: '<DBIcon icon="test" />',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'DBIcon' }
					}
				]
			},
			{
				code: '<DBInfotext />',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'DBInfotext' }
					}
				]
			},
			{
				code: '<DBNavigationItem />',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'DBNavigationItem' }
					}
				]
			},
			{
				code: '<DBNotification />',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'DBNotification' }
					}
				]
			},
			{
				code: '<DBAccordionItem />',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'DBAccordionItem' }
					}
				]
			}
		]
	});

	angularRuleTester.run('text-or-children-required (Angular)', rule, {
		valid: [
			{ code: '<db-button text="Save"></db-button>' },
			{ code: '<db-button>Save</db-button>' },
			{ code: '<db-button [text]="myText"></db-button>' }
		],
		invalid: []
	});
});
