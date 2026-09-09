import * as angularTemplateParser from '@angular-eslint/template-parser';
import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';
import * as vueParser from 'vue-eslint-parser';

import rule from '../../../src/rules/drawer/drawer-header-required.js';

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

describe('drawer-header-required', () => {
	ruleTester.run('drawer-header-required', rule, {
		valid: [
			{
				code: '<DBDrawer header={<DBDrawerHeader>Title</DBDrawerHeader>}>Content</DBDrawer>'
			},
			{
				code: '<DBDrawer header={headerSlot}>Content</DBDrawer>'
			},
			{
				code: '<DBDrawer header={<><DBDrawerHeader>Title</DBDrawerHeader></>}>Content</DBDrawer>'
			},
			{
				code: '<DBDrawer header={<div><DBDrawerHeader>Title</DBDrawerHeader></div>}>Content</DBDrawer>'
			},
			{
				// A JSX spread may carry the header prop; contents are unverifiable.
				code: '<DBDrawer {...drawerProps}>Content</DBDrawer>'
			},
			{
				// A later explicit valid header overrides the spread (later-wins).
				code: '<DBDrawer {...drawerProps} header={<DBDrawerHeader>Title</DBDrawerHeader>}>Content</DBDrawer>'
			},
			{
				// A valid header before the spread may be overridden; unresolved.
				code: '<DBDrawer header={<DBDrawerHeader>Title</DBDrawerHeader>} {...drawerProps}>Content</DBDrawer>'
			}
		],
		invalid: [
			{
				// The later explicit header wins and is null, so no header renders.
				code: '<DBDrawer {...drawerProps} header={null}>Content</DBDrawer>',
				errors: [
					{
						messageId: 'drawerHeaderRequired',
						data: { component: 'DBDrawer' }
					}
				]
			},
			{
				code: '<DBDrawer>Content</DBDrawer>',
				errors: [
					{
						messageId: 'drawerHeaderRequired',
						data: { component: 'DBDrawer' }
					}
				]
			},
			{
				code: '<DBDrawer open={true}>Content</DBDrawer>',
				errors: [
					{
						messageId: 'drawerHeaderRequired',
						data: { component: 'DBDrawer' }
					}
				]
			},
			{
				code: '<DBDrawer header={<div>Title</div>}>Content</DBDrawer>',
				errors: [
					{
						messageId: 'drawerHeaderRequired',
						data: { component: 'DBDrawer' }
					}
				]
			},
			{
				code: '<DBDrawer header>Content</DBDrawer>',
				errors: [
					{
						messageId: 'drawerHeaderRequired',
						data: { component: 'DBDrawer' }
					}
				]
			},
			{
				code: '<DBDrawer header="Title">Content</DBDrawer>',
				errors: [
					{
						messageId: 'drawerHeaderRequired',
						data: { component: 'DBDrawer' }
					}
				]
			},
			{
				code: '<DBDrawer header={<><div>Title</div></>}>Content</DBDrawer>',
				errors: [
					{
						messageId: 'drawerHeaderRequired',
						data: { component: 'DBDrawer' }
					}
				]
			}
		]
	});

	vueRuleTester.run('drawer-header-required (Vue)', rule, {
		valid: [
			{
				code: '<template><DBDrawer><template v-slot:header><DBDrawerHeader>Title</DBDrawerHeader></template>Content</DBDrawer></template>'
			},
			{
				code: '<template><DBDrawer><template #header><DBDrawerHeader>Title</DBDrawerHeader></template>Content</DBDrawer></template>'
			}
		],
		invalid: [
			{
				code: '<template><DBDrawer>Content</DBDrawer></template>',
				errors: [
					{
						messageId: 'drawerHeaderRequired',
						data: { component: 'DBDrawer' }
					}
				]
			},
			{
				code: '<template><DBDrawer><DBDrawerHeader>Title</DBDrawerHeader>Content</DBDrawer></template>',
				errors: [
					{
						messageId: 'drawerHeaderRequired',
						data: { component: 'DBDrawer' }
					}
				]
			},
			{
				code: '<template><DBDrawer :header="headerSlot">Content</DBDrawer></template>',
				errors: [
					{
						messageId: 'drawerHeaderRequired',
						data: { component: 'DBDrawer' }
					}
				]
			}
		]
	});

	angularRuleTester.run('drawer-header-required (Angular)', rule, {
		valid: [
			{
				code: '<db-drawer><db-drawer-header header>Title</db-drawer-header>Content</db-drawer>'
			},
			{
				code: '<db-drawer><ng-container header><db-drawer-header>Title</db-drawer-header></ng-container>Content</db-drawer>'
			},
			{
				// A structural directive (*ngIf) wraps the header in a Template node;
				// the rule must recurse through it rather than reporting a missing header.
				code: '<db-drawer><db-drawer-header *ngIf="show" header>Title</db-drawer-header>Content</db-drawer>'
			}
		],
		invalid: [
			{
				code: '<db-drawer>Content</db-drawer>',
				errors: [
					{
						messageId: 'drawerHeaderRequired',
						data: { component: 'db-drawer' }
					}
				]
			},
			{
				code: '<db-drawer><db-drawer-header>Title</db-drawer-header>Content</db-drawer>',
				errors: [
					{
						messageId: 'drawerHeaderRequired',
						data: { component: 'db-drawer' }
					}
				]
			}
		]
	});
});
