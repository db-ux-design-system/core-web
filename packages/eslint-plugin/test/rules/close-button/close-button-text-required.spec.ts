import { RuleTester } from '@typescript-eslint/rule-tester';
import { describe, it } from 'vitest';
import rule from '../../../src/rules/close-button/close-button-text-required.js';

const ruleTester = new RuleTester({
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: { jsx: true }
	}
});

describe('close-button-text-required', () => {
	it('should validate rule', () => {
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
				},
				{
					code: '<db-notification closeButtonText="Close">Message</db-notification>'
				},
				{
					code: '<db-drawer [closeButtonText]="closeText">Content</db-drawer>'
				},
				{
					code: '<DBCustomSelect :mobileCloseButtonText="closeText" label="Select" />'
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
				},
				{
					code: '<db-notification>Message</db-notification>',
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
