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

// dialog-component: `closeButtonText` is required unless it is unresolvable
//
// The input space is markup, so the "generator" is a table of attribute shapes per framework
// (missing, bare boolean, empty string, non-empty static string in camelCase and kebab-case, bound
// expression). `RuleTester` cases are declarative, so the table is expanded into `valid` /
// `invalid` cases: every missing or empty form asserts exactly one violation with the close-button
// message id, every non-empty static value and every unresolvable binding asserts none.
type AttributeShape = {
	/** What the shape varies (documentation only). */
	shape: string;
	code: string;
	/** `true` when the rule has to report exactly one violation. */
	reports: boolean;
};

const expandAttributeShapes = (
	shapes: AttributeShape[],
	component: string
) => ({
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
					messageId: 'missingCloseButtonText',
					data: { component, attribute: 'closeButtonText' }
				}
			]
		}))
});

const reactAttributeShapes: AttributeShape[] = [
	{
		shape: 'non-empty static string',
		code: '<DBDialogHeader closeButtonText="Close dialog">Title</DBDialogHeader>',
		reports: false
	},
	{
		shape: 'non-empty string in an expression container',
		code: '<DBDialogHeader closeButtonText={"Close dialog"}>Title</DBDialogHeader>',
		reports: false
	},
	{
		shape: 'unresolvable identifier binding',
		code: '<DBDialogHeader closeButtonText={closeText}>Title</DBDialogHeader>',
		reports: false
	},
	{
		shape: 'unresolvable member expression binding',
		code: '<DBDialogHeader closeButtonText={labels.close}>Title</DBDialogHeader>',
		reports: false
	},
	{
		shape: 'unresolvable conditional binding',
		code: '<DBDialogHeader closeButtonText={isDe ? de : en}>Title</DBDialogHeader>',
		reports: false
	},
	{
		shape: 'attribute missing',
		code: '<DBDialogHeader>Title</DBDialogHeader>',
		reports: true
	},
	{
		shape: 'attribute missing, unrelated attributes present',
		code: '<DBDialogHeader text="Title" id="dialog-header" />',
		reports: true
	},
	{
		shape: 'bare boolean attribute',
		code: '<DBDialogHeader closeButtonText>Title</DBDialogHeader>',
		reports: true
	},
	{
		shape: 'empty string',
		code: '<DBDialogHeader closeButtonText="">Title</DBDialogHeader>',
		reports: true
	},
	{
		shape: 'statically empty string expression container',
		code: "<DBDialogHeader closeButtonText={''}>Title</DBDialogHeader>",
		reports: true
	},
	{
		shape: 'statically empty template literal expression container',
		code: '<DBDialogHeader closeButtonText={``}>Title</DBDialogHeader>',
		reports: true
	},
	{
		shape: 'whitespace-only string expression container',
		code: '<DBDialogHeader closeButtonText={"   "}>Title</DBDialogHeader>',
		reports: true
	},
	{
		// {null} renders no accessible label, same as an empty string.
		shape: 'statically null expression container',
		code: '<DBDialogHeader closeButtonText={null}>Title</DBDialogHeader>',
		reports: true
	},
	{
		shape: 'JSX spread may supply the label (unresolved, no explicit attribute)',
		code: '<DBDialogHeader {...headerProps} text="Title" />',
		reports: false
	},
	{
		shape: 'JSX spread with a non-empty explicit label',
		code: '<DBDialogHeader {...headerProps} closeButtonText="Close" />',
		reports: false
	},
	{
		shape: 'JSX spread with an explicit empty label still reports',
		code: "<DBDialogHeader {...headerProps} closeButtonText='' />",
		reports: true
	},
	{
		// Reverse ordering: the spread comes AFTER the empty explicit label, so
		// (React later-wins) the spread may supply a valid label - unresolved.
		shape: 'JSX spread after an explicit empty label (spread wins, unresolved)',
		code: "<DBDialogHeader closeButtonText='' {...headerProps} />",
		reports: false
	}
];

const vueAttributeShapes: AttributeShape[] = [
	{
		shape: 'non-empty static string, kebab-case attribute',
		code: '<template><DBDialogHeader close-button-text="Close dialog">Title</DBDialogHeader></template>',
		reports: false
	},
	{
		shape: 'unresolvable binding, camelCase argument',
		code: '<template><DBDialogHeader :closeButtonText="closeText">Title</DBDialogHeader></template>',
		reports: false
	},
	{
		shape: 'unresolvable binding, kebab-case argument',
		code: '<template><DBDialogHeader :close-button-text="closeText">Title</DBDialogHeader></template>',
		reports: false
	},
	{
		shape: 'unresolvable binding, v-bind long form',
		code: '<template><DBDialogHeader v-bind:close-button-text="labels.close">Title</DBDialogHeader></template>',
		reports: false
	},
	{
		shape: 'attribute missing',
		code: '<template><DBDialogHeader>Title</DBDialogHeader></template>',
		reports: true
	},
	{
		shape: 'bare boolean attribute',
		code: '<template><DBDialogHeader close-button-text>Title</DBDialogHeader></template>',
		reports: true
	},
	{
		shape: 'empty string',
		code: '<template><DBDialogHeader close-button-text="">Title</DBDialogHeader></template>',
		reports: true
	},
	{
		shape: 'statically empty string binding',
		code: `<template><DBDialogHeader :close-button-text="''">Title</DBDialogHeader></template>`,
		reports: true
	},
	{
		// A null binding renders no accessible label, same as an empty string.
		shape: 'statically null binding',
		code: '<template><DBDialogHeader :close-button-text="null">Title</DBDialogHeader></template>',
		reports: true
	},
	{
		// Pre-existing gap: vue-eslint-parser lowercases static attribute names in an SFC template,
		// so `closeButtonText="..."` never matches `closeButtonText` or `close-button-text` and is
		// treated as absent. Use the kebab-case form or a binding in Vue templates.
		shape: 'non-empty static string, camelCase attribute (lowercased by the Vue parser)',
		code: '<template><DBDialogHeader closeButtonText="Close dialog">Title</DBDialogHeader></template>',
		reports: true
	},
	{
		// Object v-bind may supply closeButtonText; its contents cannot be
		// verified statically, so treat as unresolved (matching the JSX spread).
		shape: 'object v-bind may supply the label (unresolved, no explicit attribute)',
		code: '<template><DBDialogHeader v-bind="headerProps">Title</DBDialogHeader></template>',
		reports: false
	},
	{
		shape: 'object v-bind with a non-empty explicit label',
		code: '<template><DBDialogHeader v-bind="headerProps" close-button-text="Close">Title</DBDialogHeader></template>',
		reports: false
	},
	{
		shape: 'object v-bind with an explicit empty label still reports',
		code: '<template><DBDialogHeader v-bind="headerProps" close-button-text="">Title</DBDialogHeader></template>',
		reports: true
	},
	{
		// Reverse ordering: the object v-bind comes AFTER the empty explicit label,
		// so (Vue later-wins) it may supply a valid label - unresolved.
		shape: 'object v-bind after an explicit empty label (v-bind wins, unresolved)',
		code: '<template><DBDialogHeader close-button-text="" v-bind="headerProps">Title</DBDialogHeader></template>',
		reports: false
	}
];

const angularAttributeShapes: AttributeShape[] = [
	{
		shape: 'non-empty static string, camelCase attribute',
		code: '<db-dialog-header closeButtonText="Close dialog">Title</db-dialog-header>',
		reports: false
	},
	{
		shape: 'non-empty static string, kebab-case attribute',
		code: '<db-dialog-header close-button-text="Close dialog">Title</db-dialog-header>',
		reports: false
	},
	{
		shape: 'unresolvable binding, camelCase input',
		code: '<db-dialog-header [closeButtonText]="closeText">Title</db-dialog-header>',
		reports: false
	},
	{
		shape: 'unresolvable binding, kebab-case input',
		code: '<db-dialog-header [close-button-text]="labels.close">Title</db-dialog-header>',
		reports: false
	},
	{
		shape: 'attribute missing',
		code: '<db-dialog-header>Title</db-dialog-header>',
		reports: true
	},
	{
		shape: 'bare boolean attribute',
		code: '<db-dialog-header close-button-text>Title</db-dialog-header>',
		reports: true
	},
	{
		shape: 'empty string, kebab-case attribute',
		code: '<db-dialog-header close-button-text="">Title</db-dialog-header>',
		reports: true
	},
	{
		shape: 'empty string, camelCase attribute',
		code: '<db-dialog-header closeButtonText="">Title</db-dialog-header>',
		reports: true
	},
	{
		shape: 'statically empty string binding, kebab-case input',
		code: `<db-dialog-header [close-button-text]="''">Title</db-dialog-header>`,
		reports: true
	},
	{
		// A null binding renders no accessible label, same as an empty string.
		shape: 'statically null binding, kebab-case input',
		code: '<db-dialog-header [close-button-text]="null">Title</db-dialog-header>',
		reports: true
	},
	{
		shape: 'statically empty string binding, camelCase input',
		code: `<db-dialog-header [closeButtonText]="''">Title</db-dialog-header>`,
		reports: true
	}
];

describe('close-button-text-required', () => {
	ruleTester.run(
		'React',
		rule,
		expandAttributeShapes(reactAttributeShapes, 'DBDialogHeader')
	);

	vueRuleTester.run(
		'Vue',
		rule,
		expandAttributeShapes(vueAttributeShapes, 'DBDialogHeader')
	);

	angularRuleTester.run(
		'Angular',
		rule,
		expandAttributeShapes(angularAttributeShapes, 'db-dialog-header')
	);
});
