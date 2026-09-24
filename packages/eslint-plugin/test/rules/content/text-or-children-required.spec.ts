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
				// A node array with a rendering element is content.
				code: '<DBDialogHeader>{[<span key="t">Title</span>]}</DBDialogHeader>'
			},
			{
				// A dynamic element in the array cannot be verified statically,
				// so the array is treated as (possible) content.
				code: '<DBDialogHeader>{[title]}</DBDialogHeader>'
			},
			{
				// A fragment renders its descendants directly, so a fragment with
				// text is content (React shows "Title").
				code: '<DBDialogHeader><>Title</></DBDialogHeader>'
			},
			{
				// A fragment with a rendering element descendant is content too.
				code: '<DBDialogHeader><><span>Title</span></></DBDialogHeader>'
			},
			{
				// A native element wrapping text renders an accessible name.
				code: '<DBDialogHeader><span>Title</span></DBDialogHeader>'
			},
			{
				// A native element nesting another that renders text is content.
				code: '<DBDialogHeader><span><b>Title</b></span></DBDialogHeader>'
			},
			{
				// A DB/custom component child renders opaque content we cannot
				// inspect, so it counts even when it looks empty. (DBBrand is not
				// itself a content-required component, so only the header is checked.)
				code: '<DBDialogHeader><DBBrand /></DBDialogHeader>'
			},
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
			{
				// React accepts `children` as an explicit prop; a non-empty
				// static string renders as the header content.
				code: '<DBDialogHeader children="Title" closeButtonText="Close" />'
			},
			{
				// A dynamic `children` binding is unverifiable, so it counts as
				// (possible) content.
				code: '<DBDialogHeader children={title} />'
			},
			{
				code: '<DBDrawerHeader children="Title" />'
			},
			{
				// A spread after an empty explicit `children` may still supply a
				// valid one (React later-wins), so it is unresolved, not reported.
				code: '<DBDialogHeader children="" {...headerProps} />'
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
				// A bare valueless `text` renders no text in React, so the header
				// has no accessible name and must be reported.
				code: '<DBDialogHeader text />',
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
				// An empty explicit `children` prop renders no content.
				code: '<DBDialogHeader children="" closeButtonText="Close" />',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'DBDialogHeader' }
					}
				]
			},
			{
				// A statically empty `children` expression renders nothing.
				code: "<DBDialogHeader children={''} />",
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'DBDialogHeader' }
					}
				]
			},
			{
				// A bare valueless `children` attribute renders no content.
				code: '<DBDrawerHeader children />',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'DBDrawerHeader' }
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
				// An empty array renders nothing, so it is not content.
				code: '<DBDialogHeader>{[]}</DBDialogHeader>',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'DBDialogHeader' }
					}
				]
			},
			{
				// An array of only non-rendering values renders nothing either.
				code: '<DBDialogHeader>{[null, false]}</DBDialogHeader>',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'DBDialogHeader' }
					}
				]
			},
			{
				// An empty fragment renders nothing, so the header still has no
				// accessible name.
				code: '<DBDialogHeader><></></DBDialogHeader>',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'DBDialogHeader' }
					}
				]
			},
			{
				// A fragment whose only child renders nothing is likewise empty.
				code: '<DBDialogHeader><>{null}</></DBDialogHeader>',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'DBDialogHeader' }
					}
				]
			},
			{
				// An empty native element renders no accessible text, so the
				// aria-labelledby target stays empty.
				code: '<DBDialogHeader><span /></DBDialogHeader>',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'DBDialogHeader' }
					}
				]
			},
			{
				// Nested native elements that all render nothing are empty too.
				code: '<DBDrawerHeader><span><i /></span></DBDrawerHeader>',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'DBDrawerHeader' }
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
			// A native element wrapping text renders an accessible name; the rule
			// recurses into it rather than counting the element unconditionally.
			{
				code: '<db-dialog-header><span>Title</span></db-dialog-header>'
			},
			// A DB/custom component child renders opaque content, so it counts.
			// (db-brand is not itself content-required, so only the header is checked.)
			{
				code: '<db-dialog-header><db-brand></db-brand></db-dialog-header>'
			},
			// `{{ interpolation }}` is a BoundText child - dynamic content, allowed.
			{
				code: '<db-dialog-header header>{{ title }}</db-dialog-header>'
			},
			{ code: '<db-drawer-header>{{ title }}</db-drawer-header>' },
			// Angular renders {{ false }} as the text "false" (like Vue, unlike
			// React), so it is a real accessible name and must not be reported.
			{ code: '<db-dialog-header>{{ false }}</db-dialog-header>' },
			// A heading nested in a structural directive (*ngIf) sits under a
			// Template node; the rule must recurse into it rather than report empty.
			{
				code: '<db-dialog-header><h2 *ngIf="show">Title</h2></db-dialog-header>'
			},
			// Built-in control flow (@if / @for) wraps the heading in block nodes.
			{
				code: '<db-dialog-header>@if (show) { <h2>Title</h2> }</db-dialog-header>'
			},
			{
				code: '<db-drawer-header>@for (item of items; track item) { <h2>{{ item }}</h2> }</db-drawer-header>'
			}
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
			},
			{
				// A bare valueless `text` supplies an empty string at runtime in
				// Angular, so the header has no accessible name and is reported.
				// (A dynamic `[text]="title"` binding is unverifiable and allowed.)
				code: '<db-dialog-header text></db-dialog-header>',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'db-dialog-header' }
					}
				]
			},
			{
				// An empty native element renders no accessible text, so the
				// header's heading container stays empty and is reported.
				code: '<db-dialog-header><span></span></db-dialog-header>',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'db-dialog-header' }
					}
				]
			},
			{
				// {{ null }} renders no text, so the heading container stays empty.
				code: '<db-dialog-header closeButtonText="Close">{{ null }}</db-dialog-header>',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'db-dialog-header' }
					}
				]
			},
			{
				// {{ '' }} likewise renders no accessible text.
				code: `<db-drawer-header>{{ '' }}</db-drawer-header>`,
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'db-drawer-header' }
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
			},
			{
				// A dynamic interpolation cannot be verified statically, so it
				// counts as (possible) content.
				code: '<template><DBDialogHeader>{{ title }}</DBDialogHeader></template>'
			},
			{
				// Vue renders {{ false }} as the text "false" (unlike React),
				// so it is a real accessible name and must not be reported.
				code: '<template><DBDialogHeader>{{ false }}</DBDialogHeader></template>'
			},
			{
				// A native element wrapping text renders an accessible name. The
				// Vue parser may expose the <span> as an Element fallback node.
				code: '<template><DBDialogHeader><span>Title</span></DBDialogHeader></template>'
			},
			{
				// A DB/custom component child renders opaque content, so it counts.
				code: '<template><DBDialogHeader><DBBrand /></DBDialogHeader></template>'
			}
		],
		invalid: [
			{
				// An empty native element renders no accessible text.
				code: '<template><DBDialogHeader><span /></DBDialogHeader></template>',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'DBDialogHeader' }
					}
				]
			},
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
				// A bare valueless `text` yields an empty string in Vue, so the
				// header has no accessible name and is reported. (A dynamic
				// `:text="title"` binding is unverifiable and allowed.)
				code: '<template><DBDialogHeader text /></template>',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'DBDialogHeader' }
					}
				]
			},
			{
				// {{ null }} renders no text, so the aria-labelledby target stays empty.
				code: '<template><DBDialogHeader>{{ null }}</DBDialogHeader></template>',
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'DBDialogHeader' }
					}
				]
			},
			{
				// {{ '' }} likewise renders no accessible name.
				code: "<template><DBDrawerHeader>{{ '' }}</DBDrawerHeader></template>",
				errors: [
					{
						messageId: 'missingContent',
						data: { component: 'DBDrawerHeader' }
					}
				]
			},
			{
				// A whitespace-only template literal interpolation is not content.
				code: '<template><DBDialogHeader>{{ `   ` }}</DBDialogHeader></template>',
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
