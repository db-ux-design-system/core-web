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

// Feature: dialog-component – The dialog header lint rule reports offending usages exactly once
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
		// An optional chain wraps the member access in a ChainExpression; it is
		// still an unverifiable runtime value, so it is accepted like a plain
		// member expression.
		shape: 'header prop, unresolvable optional-chain binding',
		code: '<DBDialog header={slots?.header}>Content</DBDialog>',
		reports: false
	},
	{
		// A spread inside the header array may contribute the header at runtime;
		// its contents cannot be verified, so it is accepted.
		shape: 'header prop, node array with a spread element',
		code: '<DBDialog header={[...headers]}>Content</DBDialog>',
		reports: false
	},
	{
		shape: 'header prop, unresolvable conditional binding',
		code: '<DBDialog header={withHeader ? a : b}>Content</DBDialog>',
		reports: false
	},
	{
		// A conditional header nested in a fragment wrapper: the expression
		// container inside the fragment must be unwrapped so the logical
		// expression is accepted exactly as it would be used directly.
		shape: 'header prop, conditional header inside a fragment wrapper',
		code: '<DBDialog header={<>{show && <DBDialogHeader>Title</DBDialogHeader>}</>}>Content</DBDialog>',
		reports: false
	},
	{
		shape: 'header prop, statically resolvable header inside an expression in a wrapper',
		code: '<DBDialog header={<div>{<DBDialogHeader>Title</DBDialogHeader>}</div>}>Content</DBDialog>',
		reports: false
	},
	{
		shape: 'header prop, ternary header inside an element wrapper',
		code: '<DBDialog header={<div>{show ? <DBDialogHeader>Title</DBDialogHeader> : null}</div>}>Content</DBDialog>',
		reports: false
	},
	{
		// React renders a node array, so an array holding the header resolves.
		shape: 'header prop, node array containing the header',
		code: '<DBDialog header={[<DBDialogHeader key="h">Title</DBDialogHeader>]}>Content</DBDialog>',
		reports: false
	},
	{
		// A statically empty array cannot contain the header, so it reports.
		shape: 'header prop, array of plain markup without the header',
		code: '<DBDialog header={[<div key="d">Title</div>]}>Content</DBDialog>',
		reports: true
	},
	{
		// A TypeScript `as` cast is transparent to what React renders, so the
		// inner header component must be unwrapped and recognized.
		shape: 'header prop, header wrapped in a TSAsExpression',
		code: '<DBDialog header={(<DBDialogHeader>Title</DBDialogHeader>) as ReactNode}>Content</DBDialog>',
		reports: false
	},
	{
		// `satisfies` is likewise transparent and must be unwrapped.
		shape: 'header prop, header wrapped in a TSSatisfiesExpression',
		code: '<DBDialog header={(<DBDialogHeader>Title</DBDialogHeader>) satisfies ReactNode}>Content</DBDialog>',
		reports: false
	},
	{
		// A transparent TS wrapper around plain markup still reports (no header).
		shape: 'header prop, TSAsExpression around plain markup without the header',
		code: '<DBDialog header={(<div>Title</div>) as ReactNode}>Content</DBDialog>',
		reports: true
	},
	{
		// A spread may carry the header prop; its contents cannot be verified.
		shape: 'JSX spread that may carry the header prop',
		code: '<DBDialog {...dialogProps}>Content</DBDialog>',
		reports: false
	},
	{
		shape: 'JSX spread alongside other explicit props',
		code: '<DBDialog open {...dialogProps}>Content</DBDialog>',
		reports: false
	},
	{
		// A later explicit header overrides the spread (React later-wins); the
		// explicit valid header is authoritative.
		shape: 'JSX spread followed by a valid explicit header',
		code: '<DBDialog {...dialogProps} header={<DBDialogHeader>Title</DBDialogHeader>}>Content</DBDialog>',
		reports: false
	},
	{
		// A valid header before the spread can be overridden by the spread, so
		// the final value is unresolved and must not be reported.
		shape: 'valid explicit header before a JSX spread (spread may override)',
		code: '<DBDialog header={<DBDialogHeader>Title</DBDialogHeader>} {...dialogProps}>Content</DBDialog>',
		reports: false
	},
	{
		// The later explicit header wins and is null, so the dialog renders no
		// header regardless of what the spread carries.
		shape: 'JSX spread followed by an explicit null header',
		code: '<DBDialog {...dialogProps} header={null}>Content</DBDialog>',
		reports: true
	},
	{
		shape: 'JSX spread followed by an explicit plain-markup header',
		code: '<DBDialog {...dialogProps} header={<div>Title</div>}>Content</DBDialog>',
		reports: true
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
		// `undefined` is the statically known empty value (React renders no
		// header), so it must be reported rather than accepted as dynamic.
		shape: 'header prop explicitly set to undefined',
		code: '<DBDialog header={undefined}>Content</DBDialog>',
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
		// A dynamic slot argument (#[slotName]) has an unresolvable destination,
		// but its content is statically visible - a real header inside it is
		// accepted (only where it lands is unknown).
		shape: 'dynamic #[slotName] template with the header component',
		code: '<template><DBDialog><template #[slotName]><DBDialogHeader>Title</DBDialogHeader></template>Content</DBDialog></template>',
		reports: false
	},
	{
		// The destination is unknown, but the content is not: a dynamic slot that
		// holds only plain markup contains no header anywhere, so it must report.
		shape: 'dynamic #[slotName] template holds plain markup',
		code: '<template><DBDialog><template #[slotName]><div>Title</div></template>Content</DBDialog></template>',
		reports: true
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
		// Angular projects via `<ng-content select="[header]">`, which matches the
		// `header` attribute, not a `slot="header"` value. The markup therefore does
		// not enter the header slot, so it must be reported (and stays consistent with
		// `sub-component-required-parent`, which matches the `header` attribute too).
		shape: 'slot="header" on the header component (not projected in Angular)',
		code: '<db-dialog><db-dialog-header slot="header">Title</db-dialog-header>Content</db-dialog>',
		reports: true
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
		// A structural directive (*ngIf) wraps the header in a Template node, so the
		// projected header component sits one level deeper. The rule must recurse
		// through that wrapper rather than reporting the valid header as missing.
		shape: 'header attribute on a conditional (*ngIf) header component',
		code: '<db-dialog><db-dialog-header *ngIf="show" header>Title</db-dialog-header>Content</db-dialog>',
		reports: false
	},
	{
		shape: 'header attribute on a conditional (*ngIf) wrapper',
		code: '<db-dialog><ng-container *ngIf="show" header><db-dialog-header>Title</db-dialog-header></ng-container>Content</db-dialog>',
		reports: false
	},
	{
		// Same reason: `slot="header"` on a wrapper is not the `[header]` projection
		// selector, so Angular does not project it into the header slot.
		shape: 'slot="header" on a wrapper (not projected in Angular)',
		code: '<db-dialog><div slot="header"><db-dialog-header>Title</db-dialog-header></div>Content</db-dialog>',
		reports: true
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

describe('dialog-header-required', () => {
	ruleTester.run(
		'React',
		rule,
		expandHeaderShapes(reactHeaderShapes, 'DBDialog')
	);

	vueRuleTester.run(
		'Vue',
		rule,
		expandHeaderShapes(vueHeaderShapes, 'DBDialog')
	);

	angularRuleTester.run(
		'Angular',
		rule,
		expandHeaderShapes(angularHeaderShapes, 'db-dialog')
	);
});
