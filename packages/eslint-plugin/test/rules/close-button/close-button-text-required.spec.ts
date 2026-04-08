import * as angularTemplateParser from '@angular-eslint/template-parser';
import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';

import rule from '../../../src/rules/close-button/close-button-text-required.js';

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

describe('close-button-text-required', () => {
	ruleTester.run('close-button-text-required', rule, {
		valid: [
			{
				code: '<DBNotification closeButtonText="Close">Message</DBNotification>'
			},
			{
				code: '<DBDrawer closeButtonText="Close drawer">Content</DBDrawer>'
			},
			{
				code: '<DBCustomSelect mobileCloseButtonText="Close" label="Select" />'
			}
		],
		invalid: [
			{
				code: '<DBNotification>Message</DBNotification>',
				errors: [
					{
						messageId: 'missingCloseButtonText',
						data: {
							component: 'DBNotification',
							attribute: 'closeButtonText'
						}
					}
				]
			},
			{
				code: '<DBDrawer>Content</DBDrawer>',
				errors: [
					{
						messageId: 'missingCloseButtonText',
						data: {
							component: 'DBDrawer',
							attribute: 'closeButtonText'
						}
					}
				]
			},
			{
				code: '<DBCustomSelect label="Select" />',
				errors: [
					{
						messageId: 'missingCloseButtonText',
						data: {
							component: 'DBCustomSelect',
							attribute: 'mobileCloseButtonText'
						}
					}
				]
			}
		]
	});

	angularRuleTester.run('close-button-text-required (Angular)', rule, {
		valid: [
			{
				code: '<db-notification closeButtonText="Close">Message</db-notification>'
			},
			{
				code: '<db-drawer [closeButtonText]="closeText">Content</db-drawer>'
			}
		],
		invalid: []
	});
});
