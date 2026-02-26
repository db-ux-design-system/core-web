import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';
import { describe, it } from 'vitest';
import rule from '../../../src/rules/close-button/close-button-text-required.js';

const ruleTester = new RuleTester({
	languageOptions: {
		parserOptions: {
			ecmaFeatures: { jsx: true }
		}
	}
});

const angularRuleTester = new AngularRuleTester();

describe('close-button-text-required', () => {
	it('should validate rule', () => {
		ruleTester.run('close-button-text-required', rule, {
			valid: [
				{
					code: '<DBNotification closeable closeButtonText="Close">Message</DBNotification>'
				},
				{
					code: '<DBNotification>Message</DBNotification>'
				},
				{
					code: '<DBDrawer closeButtonText="Close drawer">Content</DBDrawer>'
				},
				{
					code: '<DBCustomSelect mobileCloseButtonText="Close" label="Select" />'
				},
				{
					code: '<DBCustomSelect :mobileCloseButtonText="closeText" label="Select" />'
				}
			],
			invalid: [
				{
					code: '<DBNotification closeable>Message</DBNotification>',
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
	});

	it('should validate rule (Angular)', () => {
		angularRuleTester.run('close-button-text-required', rule, {
			valid: [
				{
					code: '<db-notification closeable closeButtonText="Close">Message</db-notification>'
				},
				{
					code: '<db-notification>Message</db-notification>'
				},
				{
					code: '<db-drawer [closeButtonText]="closeText">Content</db-drawer>'
				}
			],
			invalid: [
				{
					code: '<db-notification closeable>Message</db-notification>',
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
					code: '<db-drawer>Content</db-drawer>',
					errors: [
						{
							messageId: 'missingCloseButtonText',
							data: {
								component: 'DBDrawer',
								attribute: 'closeButtonText'
							}
						}
					]
				}
			]
		});
	});
});
