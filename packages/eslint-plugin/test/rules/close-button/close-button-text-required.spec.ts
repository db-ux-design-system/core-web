import * as angularTemplateParser from '@angular-eslint/template-parser';
import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';
import * as vueParser from 'vue-eslint-parser';

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

const vueRuleTester = new RuleTester({
	languageOptions: {
		parser: vueParser,
		parserOptions: {
			ecmaFeatures: { jsx: true }
		}
	}
});

describe('close-button-text-required', () => {
	ruleTester.run('close-button-text-required', rule, {
		valid: [
			{
				code: '<DBNotification closeable closeButtonText="Close">Message</DBNotification>'
			},
			{
				code: '<DBNotification>Message</DBNotification>'
			},
			{
				code: '<DBNotification closeable={false}>Message</DBNotification>'
			},
			{
				code: '<DBDrawerHeader closeButtonText="Close drawer">Title</DBDrawerHeader>'
			},
			{
				code: '<DBCustomSelect mobileCloseButtonText="Close" label="Select" />'
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
				code: '<DBDrawerHeader>Title</DBDrawerHeader>',
				errors: [
					{
						messageId: 'missingCloseButtonText',
						data: {
							component: 'DBDrawerHeader',
							attribute: 'closeButtonText'
						}
					}
				]
			},
			{
				code: '<DBDrawerHeader closeButtonText>Title</DBDrawerHeader>',
				errors: [
					{
						messageId: 'missingCloseButtonText',
						data: {
							component: 'DBDrawerHeader',
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

	vueRuleTester.run('close-button-text-required (Vue)', rule, {
		valid: [
			{
				code: '<template><DBCustomSelect :mobileCloseButtonText="closeText" label="Select" /></template>'
			},
			{
				code: '<template><DBNotification :closeable="false">Message</DBNotification></template>'
			},
			{
				code: '<template><DBDrawerHeader :closeButtonText="closeText">Title</DBDrawerHeader></template>'
			}
		],
		invalid: [
			{
				code: '<template><DBNotification :closeable="true">Message</DBNotification></template>',
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
				code: '<template><DBDrawerHeader>Title</DBDrawerHeader></template>',
				errors: [
					{
						messageId: 'missingCloseButtonText',
						data: {
							component: 'DBDrawerHeader',
							attribute: 'closeButtonText'
						}
					}
				]
			}
		]
	});

	angularRuleTester.run('close-button-text-required (Angular)', rule, {
		valid: [
			{
				code: '<db-notification closeable closeButtonText="Close">Message</db-notification>'
			},
			{
				code: '<db-notification>Message</db-notification>'
			},
			{
				code: '<db-notification [closeable]="false">Message</db-notification>'
			},
			{
				code: '<db-drawer-header [closeButtonText]="closeText">Title</db-drawer-header>'
			}
		],
		invalid: [
			{
				code: '<db-notification closeable>Message</db-notification>',
				errors: [
					{
						messageId: 'missingCloseButtonText',
						data: {
							component: 'db-notification',
							attribute: 'closeButtonText'
						}
					}
				]
			},
			{
				code: '<db-drawer-header>Title</db-drawer-header>',
				errors: [
					{
						messageId: 'missingCloseButtonText',
						data: {
							component: 'db-drawer-header',
							attribute: 'closeButtonText'
						}
					}
				]
			}
		]
	});
});
