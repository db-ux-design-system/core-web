import * as angularTemplateParser from '@angular-eslint/template-parser';
import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';
import * as vueParser from 'vue-eslint-parser';

import rule from '../../../src/rules/dialog/dialog-header-required.js';

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

describe('dialog-header-required', () => {
	ruleTester.run('dialog-header-required', rule, {
		valid: [
			{
				code: '<DBDialog header={<DBDialogHeader>Title</DBDialogHeader>}>Content</DBDialog>'
			},
			{
				code: '<DBDialog header={headerSlot}>Content</DBDialog>'
			},
			{
				code: '<DBDialog header={<><DBDialogHeader>Title</DBDialogHeader></>}>Content</DBDialog>'
			},
			{
				code: '<DBDialog header={<div><DBDialogHeader>Title</DBDialogHeader></div>}>Content</DBDialog>'
			}
		],
		invalid: [
			{
				code: '<DBDialog>Content</DBDialog>',
				errors: [
					{
						messageId: 'dialogHeaderRequired',
						data: { component: 'DBDialog' }
					}
				]
			},
			{
				code: '<DBDialog open={true}>Content</DBDialog>',
				errors: [
					{
						messageId: 'dialogHeaderRequired',
						data: { component: 'DBDialog' }
					}
				]
			},
			{
				code: '<DBDialog header={<div>Title</div>}>Content</DBDialog>',
				errors: [
					{
						messageId: 'dialogHeaderRequired',
						data: { component: 'DBDialog' }
					}
				]
			},
			{
				code: '<DBDialog header>Content</DBDialog>',
				errors: [
					{
						messageId: 'dialogHeaderRequired',
						data: { component: 'DBDialog' }
					}
				]
			},
			{
				code: '<DBDialog header="Title">Content</DBDialog>',
				errors: [
					{
						messageId: 'dialogHeaderRequired',
						data: { component: 'DBDialog' }
					}
				]
			}
		]
	});

	vueRuleTester.run('dialog-header-required (Vue)', rule, {
		valid: [
			{
				code: '<template><DBDialog><template v-slot:header><DBDialogHeader>Title</DBDialogHeader></template>Content</DBDialog></template>'
			},
			{
				code: '<template><DBDialog><template #header><DBDialogHeader>Title</DBDialogHeader></template>Content</DBDialog></template>'
			}
		],
		invalid: [
			{
				code: '<template><DBDialog>Content</DBDialog></template>',
				errors: [
					{
						messageId: 'dialogHeaderRequired',
						data: { component: 'DBDialog' }
					}
				]
			},
			{
				code: '<template><DBDialog><DBDialogHeader>Title</DBDialogHeader>Content</DBDialog></template>',
				errors: [
					{
						messageId: 'dialogHeaderRequired',
						data: { component: 'DBDialog' }
					}
				]
			},
			{
				code: '<template><DBDialog :header="headerSlot">Content</DBDialog></template>',
				errors: [
					{
						messageId: 'dialogHeaderRequired',
						data: { component: 'DBDialog' }
					}
				]
			}
		]
	});

	angularRuleTester.run('dialog-header-required (Angular)', rule, {
		valid: [
			{
				code: '<db-dialog><db-dialog-header header>Title</db-dialog-header>Content</db-dialog>'
			},
			{
				code: '<db-dialog><ng-container header><db-dialog-header>Title</db-dialog-header></ng-container>Content</db-dialog>'
			},
			{
				code: '<db-dialog><db-dialog-header slot="header">Title</db-dialog-header>Content</db-dialog>'
			}
		],
		invalid: [
			{
				code: '<db-dialog>Content</db-dialog>',
				errors: [
					{
						messageId: 'dialogHeaderRequired',
						data: { component: 'db-dialog' }
					}
				]
			},
			{
				code: '<db-dialog><db-dialog-header>Title</db-dialog-header>Content</db-dialog>',
				errors: [
					{
						messageId: 'dialogHeaderRequired',
						data: { component: 'db-dialog' }
					}
				]
			}
		]
	});
});

// Feature: dialog-component, Property 25: The dialog header lint rule reports offending usages exactly once
//
// The rule input space is markup, so the "generator" is a table of markup shapes per framework
// (nesting depth, wrapper element, attribute/slot form). `RuleTester` cases are declarative, so the
// table is expanded into `valid` / `invalid` cases: every offending shape asserts exactly one
// violation with the dialog message id, every valid shape asserts none.
type HeaderShape = {
	/** What the shape varies (documentation only). */
	shape: string;
	code: string;
	/** `true` when the rule has to report exactly one violation. */
	reports: boolean;
};

const expandHeaderShapes = (shapes: HeaderShape[], component: string) => ({
	valid: shapes
		.filter(({ reports }) => !reports)
		.map(({ code }) => ({ code })),
	invalid: shapes
		.filter(({ reports }) => reports)
		.map(({ code }) => ({
			code,
			// Exactly one expected error: RuleTester fails on any additional or missing report.
			errors: [
				{
					messageId: 'dialogHeaderRequired',
					data: { component }
				}
			]
		}))
});

const reactHeaderShapes: HeaderShape[] = [
	{
		shape: 'header prop holds the header component',
		code: '<DBDialog header={<DBDialogHeader>Title</DBDialogHeader>}>Content</DBDialog>',
		reports: false
	},
	{
		shape: 'header prop, self-closing header component',
		code: '<DBDialog header={<DBDialogHeader />}>Content</DBDialog>',
		reports: false
	},
	{
		shape: 'header prop, fragment wrapper',
		code: '<DBDialog header={<><DBDialogHeader>Title</DBDialogHeader></>}>Content</DBDialog>',
		reports: false
	},
	{
		shape: 'header prop, element wrapper at depth 1',
		code: '<DBDialog header={<div><DBDialogHeader>Title</DBDialogHeader></div>}>Content</DBDialog>',
		reports: false
	},
	{
		shape: 'header prop, element wrappers at depth 2',
		code: '<DBDialog header={<div><span><DBDialogHeader>Title</DBDialogHeader></span></div>}>Content</DBDialog>',
		reports: false
	},
	{
		shape: 'header prop, unresolvable identifier binding',
		code: '<DBDialog header={headerSlot}>Content</DBDialog>',
		reports: false
	},
	{
		shape: 'header prop, unresolvable member expression binding',
		code: '<DBDialog header={slots.header}>Content</DBDialog>',
		reports: false
	},
	{
		shape: 'header prop, unresolvable conditional binding',
		code: '<DBDialog header={withHeader ? a : b}>Content</DBDialog>',
		reports: false
	},
	{
		shape: 'no header prop',
		code: '<DBDialog>Content</DBDialog>',
		reports: true
	},
	{
		shape: 'no header prop, unrelated props present',
		code: '<DBDialog open={true} backdrop="strong">Content</DBDialog>',
		reports: true
	},
	{
		shape: 'header prop holds plain markup',
		code: '<DBDialog header={<div>Title</div>}>Content</DBDialog>',
		reports: true
	},
	{
		shape: 'header prop holds a foreign header component',
		code: '<DBDialog header={<DBDrawerHeader>Title</DBDrawerHeader>}>Content</DBDialog>',
		reports: true
	},
	{
		shape: 'header prop as bare boolean attribute',
		code: '<DBDialog header>Content</DBDialog>',
		reports: true
	},
	{
		shape: 'header prop as string literal',
		code: '<DBDialog header="Title">Content</DBDialog>',
		reports: true
	},
	{
		shape: 'header component in the default slot instead of the header prop',
		code: '<DBDialog><DBDialogHeader>Title</DBDialogHeader>Content</DBDialog>',
		reports: true
	}
];

const vueHeaderShapes: HeaderShape[] = [
	{
		shape: '#header template holds the header component',
		code: '<template><DBDialog><template #header><DBDialogHeader>Title</DBDialogHeader></template>Content</DBDialog></template>',
		reports: false
	},
	{
		shape: 'v-slot:header template holds the header component',
		code: '<template><DBDialog><template v-slot:header><DBDialogHeader>Title</DBDialogHeader></template>Content</DBDialog></template>',
		reports: false
	},
	{
		shape: '#header template, element wrapper at depth 1',
		code: '<template><DBDialog><template #header><div><DBDialogHeader>Title</DBDialogHeader></div></template>Content</DBDialog></template>',
		reports: false
	},
	{
		shape: '#header template, element wrappers at depth 2',
		code: '<template><DBDialog><template #header><div><span><DBDialogHeader>Title</DBDialogHeader></span></div></template>Content</DBDialog></template>',
		reports: false
	},
	{
		shape: 'no header slot',
		code: '<template><DBDialog>Content</DBDialog></template>',
		reports: true
	},
	{
		shape: '#header template holds plain markup',
		code: '<template><DBDialog><template #header><div>Title</div></template>Content</DBDialog></template>',
		reports: true
	},
	{
		shape: '#header template holds a foreign header component',
		code: '<template><DBDialog><template #header><DBDrawerHeader>Title</DBDrawerHeader></template>Content</DBDialog></template>',
		reports: true
	},
	{
		shape: 'header component in the default slot instead of a #header template',
		code: '<template><DBDialog><DBDialogHeader>Title</DBDialogHeader>Content</DBDialog></template>',
		reports: true
	},
	{
		// Vue projects slot content structurally: a bound `:header` prop never reaches the
		// `header` slot, so it cannot satisfy the slot (see the note in `shared/slot-content.ts`).
		shape: 'bound :header prop instead of a #header template',
		code: '<template><DBDialog :header="headerSlot">Content</DBDialog></template>',
		reports: true
	}
];

const angularHeaderShapes: HeaderShape[] = [
	{
		shape: 'header attribute on the header component',
		code: '<db-dialog><db-dialog-header header>Title</db-dialog-header>Content</db-dialog>',
		reports: false
	},
	{
		shape: 'slot="header" on the header component',
		code: '<db-dialog><db-dialog-header slot="header">Title</db-dialog-header>Content</db-dialog>',
		reports: false
	},
	{
		shape: 'header attribute on an ng-container wrapper',
		code: '<db-dialog><ng-container header><db-dialog-header>Title</db-dialog-header></ng-container>Content</db-dialog>',
		reports: false
	},
	{
		shape: 'header attribute on an element wrapper',
		code: '<db-dialog><div header><db-dialog-header>Title</db-dialog-header></div>Content</db-dialog>',
		reports: false
	},
	{
		shape: 'header attribute on a wrapper, header component at depth 2',
		code: '<db-dialog><ng-container header><div><db-dialog-header>Title</db-dialog-header></div></ng-container>Content</db-dialog>',
		reports: false
	},
	{
		shape: 'slot="header" on a wrapper',
		code: '<db-dialog><div slot="header"><db-dialog-header>Title</db-dialog-header></div>Content</db-dialog>',
		reports: false
	},
	{
		shape: 'no header slot',
		code: '<db-dialog>Content</db-dialog>',
		reports: true
	},
	{
		shape: 'header component without a slot attribute',
		code: '<db-dialog><db-dialog-header>Title</db-dialog-header>Content</db-dialog>',
		reports: true
	},
	{
		shape: 'header attribute on a wrapper holding plain markup',
		code: '<db-dialog><div header>Title</div>Content</db-dialog>',
		reports: true
	},
	{
		shape: 'header attribute on a foreign header component',
		code: '<db-dialog><db-drawer-header header>Title</db-drawer-header>Content</db-dialog>',
		reports: true
	},
	{
		// Same reason as Vue: Angular projects the slot via `<ng-content select="[header]">`,
		// so a bound `[header]` input supplies no slot content.
		shape: 'bound [header] input instead of projected content',
		code: '<db-dialog [header]="headerSlot">Content</db-dialog>',
		reports: true
	}
];

describe('dialog-header-required - Property 25', () => {
	ruleTester.run(
		'Property 25 (React)',
		rule,
		expandHeaderShapes(reactHeaderShapes, 'DBDialog')
	);

	vueRuleTester.run(
		'Property 25 (Vue)',
		rule,
		expandHeaderShapes(vueHeaderShapes, 'DBDialog')
	);

	angularRuleTester.run(
		'Property 25 (Angular)',
		rule,
		expandHeaderShapes(angularHeaderShapes, 'db-dialog')
	);
});
