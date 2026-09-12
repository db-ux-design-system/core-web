import * as angularTemplateParser from '@angular-eslint/template-parser';
import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';
import * as vueParser from 'vue-eslint-parser';

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

const vueRuleTester = new RuleTester({
	languageOptions: {
		parser: vueParser,
		parserOptions: {
			ecmaFeatures: { jsx: true }
		}
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
			{ code: '<DBDialogHeader text="Title" />' },
			{ code: '<DBDialogHeader>Title</DBDialogHeader>' },
			{
				code: '<DBDialogHeader closeButtonText="Close">Title</DBDialogHeader>'
			},
			{ code: '<DBDrawerHeader text="Title" />' },
			{ code: '<DBDrawerHeader>Title</DBDrawerHeader>' },
			{
				// A dynamic expression child cannot be verified statically, so it
				// is treated as (possible) content and not reported.
				code: '<DBDialogHeader>{title}</DBDialogHeader>'
			},
			{ code: '<DBDialogHeader>{`Title ${suffix}`}</DBDialogHeader>' },
			{
				// A JSX spread may supply `text`; its contents are unverifiable,
				// so the header is treated as unresolved rather than reported.
				code: '<DBDialogHeader {...headerProps} />'
			},
			{
				code: '<DBDialogHeader {...headerProps} text="Title" />'
			},
			{
				// Reverse ordering: the spread comes AFTER the empty text, so
				// (React later-wins) it may supply a valid text - unresolved.
				code: '<DBDialogHeader text="" {...headerProps} />'
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
				code: '<DBControlPanelNavigationItem />',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'DBControlPanelNavigationItem' }
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
			},
			{
				// Reviewer scenario: a header with only closeButtonText has no
				// text/children, so the dialog gets an empty accessible name.
				code: '<DBDialogHeader closeButtonText="Close" />',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'DBDialogHeader' }
					}
				]
			},
			{
				code: '<DBDrawerHeader closeButtonText="Close" />',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'DBDrawerHeader' }
					}
				]
			},
			{
				// Empty text literal is not content: aria-labelledby target stays empty.
				code: '<DBDialogHeader text="" />',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'DBDialogHeader' }
					}
				]
			},
			{
				// Whitespace-only text is likewise not an accessible name.
				code: '<DBDialogHeader text="   " />',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'DBDialogHeader' }
					}
				]
			},
			{
				// {null} renders nothing, so aria-labelledby target stays empty.
				code: '<DBDialogHeader>{null}</DBDialogHeader>',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'DBDialogHeader' }
					}
				]
			},
			{
				code: '<DBDialogHeader>{false}</DBDialogHeader>',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'DBDialogHeader' }
					}
				]
			},
			{
				code: '<DBDialogHeader>{undefined}</DBDialogHeader>',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'DBDialogHeader' }
					}
				]
			},
			{
				code: "<DBDrawerHeader>{''}</DBDrawerHeader>",
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'DBDrawerHeader' }
					}
				]
			},
			{
				code: '<DBDialogHeader>{`   `}</DBDialogHeader>',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'DBDialogHeader' }
					}
				]
			},
			{
				// A spread before an explicit empty text does not determine the
				// final value (the later explicit text wins), so it still reports.
				code: '<DBDialogHeader {...headerProps} text="" />',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'DBDialogHeader' }
					}
				]
			}
		]
	});

	angularRuleTester.run('text-or-children-required (Angular)', rule, {
		valid: [
			{ code: '<db-button text="Save"></db-button>' },
			{ code: '<db-button>Save</db-button>' },
			{ code: '<db-button [text]="myText"></db-button>' },
			{ code: '<db-dialog-header text="Title"></db-dialog-header>' },
			{ code: '<db-drawer-header>Title</db-drawer-header>' },
			// Dynamic binding cannot be verified statically, so it is allowed.
			{ code: '<db-dialog-header [text]="title"></db-dialog-header>' },
			// `{{ interpolation }}` is a BoundText child - dynamic content, allowed.
			{
				code: '<db-dialog-header header>{{ title }}</db-dialog-header>'
			},
			{ code: '<db-drawer-header>{{ title }}</db-drawer-header>' }
		],
		invalid: [
			{
				code: '<db-dialog-header closeButtonText="Close"></db-dialog-header>',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'db-dialog-header' }
					}
				]
			},
			{
				// `getAttributeValue` collapses `text=""` to boolean true; the raw
				// read keeps it recognized as an empty title and reports it.
				code: '<db-dialog-header text=""></db-dialog-header>',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'db-dialog-header' }
					}
				]
			}
		]
	});

	vueRuleTester.run('text-or-children-required (Vue)', rule, {
		valid: [
			{
				code: '<template><DBDialogHeader text="Title" /></template>'
			},
			{
				code: '<template><DBDialogHeader>Title</DBDialogHeader></template>'
			},
			// Dynamic binding cannot be verified statically, so it is allowed.
			{
				code: '<template><DBDialogHeader :text="title" /></template>'
			},
			{
				// An object v-bind may supply `text`; its contents are
				// unverifiable, so the header is treated as unresolved.
				code: '<template><DBDialogHeader v-bind="headerProps" /></template>'
			}
		],
		invalid: [
			{
				code: '<template><DBDialogHeader text="" /></template>',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'DBDialogHeader' }
					}
				]
			},
			{
				// A v-bind before an explicit empty text does not determine the
				// final value (the later explicit text wins), so it still reports.
				code: '<template><DBDialogHeader v-bind="headerProps" text="" /></template>',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'DBDialogHeader' }
					}
				]
			}
		]
	});
});
