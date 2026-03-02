import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';
import { describe, it } from 'vitest';
import rule from '../../../src/rules/content/text-or-children-required.js';

const ruleTester = new RuleTester({
	languageOptions: {
		parserOptions: {
			ecmaFeatures: { jsx: true }
		}
	}
});

const angularRuleTester = new AngularRuleTester();

describe('text-or-children-required', () => {
	it('should validate rule', () => {
		ruleTester.run('text-or-children-required', rule, {
			valid: [
				{ code: '<DBButton text="Save" />' },
				{ code: '<DBButton>Save</DBButton>' },
				{ code: '<DBLink text="Click here" />' },
				{ code: '<DBLink>Click here</DBLink>' },
				{ code: '<DBBadge>New</DBBadge>' },
				{ code: '<DBIcon icon="test">Label</DBIcon>' },
				{ code: '<DBButton :text="buttonText" />' },
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
	});

	it('should validate rule (Angular)', () => {
		angularRuleTester.run('text-or-children-required', rule, {
			valid: [
				{ code: '<db-button text="Save"></db-button>' },
				{ code: '<db-button>Save</db-button>' },
				{ code: '<db-button [text]="myText"></db-button>' }
			],
			invalid: [
				{
					code: '<db-button></db-button>',
					errors: [
						{
							messageId: 'missingContent',
							data: { component: 'DBButton' }
						}
					]
				}
			]
		});
	});
});
