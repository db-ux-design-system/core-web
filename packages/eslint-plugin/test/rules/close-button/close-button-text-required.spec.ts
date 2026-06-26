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
				code: '<DBDrawer closeButtonText="Close drawer">Content</DBDrawer>'
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

	vueRuleTester.run('close-button-text-required (Vue)', rule, {
		valid: [
			{
				code: '<template><DBCustomSelect :mobileCloseButtonText="closeText" label="Select" /></template>'
			},
			{
				code: '<template><DBNotification :closeable="false">Message</DBNotification></template>'
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
							component: 'db-notification',
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
							component: 'db-drawer',
							attribute: 'closeButtonText'
						}
					}
				]
			}
		]
	});
});
