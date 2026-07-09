import * as angularTemplateParser from '@angular-eslint/template-parser';
import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';
import * as vueParser from 'vue-eslint-parser';

import rule from '../../../src/rules/sub-component/sub-component-required-parent.js';

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

describe('sub-component-required-parent', () => {
	describe('DBDrawerHeader', () => {
		ruleTester.run(
			'sub-component-required-parent (React - DrawerHeader)',
			rule,
			{
				valid: [
					{
						code: '<DBDrawer><DBDrawerHeader>Title</DBDrawerHeader></DBDrawer>'
					}
				],
				invalid: [
					{
						code: '<div><DBDrawerHeader>Title</DBDrawerHeader></div>',
						errors: [
							{
								messageId: 'subComponentRequiredParent',
								data: {
									component: 'DBDrawerHeader',
									parent: 'DBDrawer (in slot "header")',
									slot: ''
								}
							}
						]
					}
				]
			}
		);

		vueRuleTester.run(
			'sub-component-required-parent (Vue - DrawerHeader)',
			rule,
			{
				valid: [
					{
						code: '<template><DBDrawer><template v-slot:header><DBDrawerHeader>Title</DBDrawerHeader></template></DBDrawer></template>'
					},
					{
						code: '<template><DBDrawer><template #header><DBDrawerHeader>Title</DBDrawerHeader></template></DBDrawer></template>'
					}
				],
				invalid: [
					{
						code: '<template><DBDrawer><DBDrawerHeader>Title</DBDrawerHeader></DBDrawer></template>',
						errors: [
							{
								messageId: 'subComponentRequiredParent',
								data: {
									component: 'DBDrawerHeader',
									parent: 'DBDrawer (in slot "header")',
									slot: ''
								}
							}
						]
					},
					{
						code: '<template><div><DBDrawerHeader>Title</DBDrawerHeader></div></template>',
						errors: [
							{
								messageId: 'subComponentRequiredParent',
								data: {
									component: 'DBDrawerHeader',
									parent: 'DBDrawer (in slot "header")',
									slot: ''
								}
							}
						]
					}
				]
			}
		);

		angularRuleTester.run(
			'sub-component-required-parent (Angular - DrawerHeader)',
			rule,
			{
				valid: [
					{
						code: '<db-drawer><db-drawer-header header>Title</db-drawer-header></db-drawer>'
					},
					{
						code: '<db-drawer><ng-container header><db-drawer-header>Title</db-drawer-header></ng-container></db-drawer>'
					}
				],
				invalid: [
					{
						code: '<db-drawer><db-drawer-header>Title</db-drawer-header></db-drawer>',
						errors: [
							{
								messageId: 'subComponentRequiredParent',
								data: {
									component: 'db-drawer-header',
									parent: 'db-drawer (in slot "header")',
									slot: ''
								}
							}
						]
					},
					{
						code: '<div><db-drawer-header header>Title</db-drawer-header></div>',
						errors: [
							{
								messageId: 'subComponentRequiredParent',
								data: {
									component: 'db-drawer-header',
									parent: 'db-drawer (in slot "header")',
									slot: ''
								}
							}
						]
					}
				]
			}
		);
	});

	describe('DBAccordionItem', () => {
		ruleTester.run(
			'sub-component-required-parent (React - AccordionItem)',
			rule,
			{
				valid: [
					{
						code: '<DBAccordion><DBAccordionItem headlinePlain="Test">Content</DBAccordionItem></DBAccordion>'
					}
				],
				invalid: [
					{
						code: '<div><DBAccordionItem headlinePlain="Test">Content</DBAccordionItem></div>',
						errors: [
							{
								messageId: 'subComponentRequiredParent',
								data: {
									component: 'DBAccordionItem',
									parent: 'DBAccordion',
									slot: ''
								}
							}
						]
					}
				]
			}
		);

		vueRuleTester.run(
			'sub-component-required-parent (Vue - AccordionItem)',
			rule,
			{
				valid: [
					{
						code: '<template><DBAccordion><DBAccordionItem headlinePlain="Test">Content</DBAccordionItem></DBAccordion></template>'
					}
				],
				invalid: [
					{
						code: '<template><div><DBAccordionItem headlinePlain="Test">Content</DBAccordionItem></div></template>',
						errors: [
							{
								messageId: 'subComponentRequiredParent',
								data: {
									component: 'DBAccordionItem',
									parent: 'DBAccordion',
									slot: ''
								}
							}
						]
					}
				]
			}
		);

		angularRuleTester.run(
			'sub-component-required-parent (Angular - AccordionItem)',
			rule,
			{
				valid: [
					{
						code: '<db-accordion><db-accordion-item headlinePlain="Test">Content</db-accordion-item></db-accordion>'
					}
				],
				invalid: [
					{
						code: '<div><db-accordion-item headlinePlain="Test">Content</db-accordion-item></div>',
						errors: [
							{
								messageId: 'subComponentRequiredParent',
								data: {
									component: 'db-accordion-item',
									parent: 'db-accordion',
									slot: ''
								}
							}
						]
					}
				]
			}
		);
	});

	describe('DBTabList and DBTabItem', () => {
		ruleTester.run('sub-component-required-parent (React - Tabs)', rule, {
			valid: [
				{
					code: '<DBTabs><DBTabList><DBTabItem>Tab 1</DBTabItem></DBTabList><DBTabPanel>Panel</DBTabPanel></DBTabs>'
				}
			],
			invalid: [
				{
					code: '<div><DBTabList><DBTabItem>Tab 1</DBTabItem></DBTabList></div>',
					errors: [
						{
							messageId: 'subComponentRequiredParent',
							data: {
								component: 'DBTabList',
								parent: 'DBTabs',
								slot: ''
							}
						}
					]
				},
				{
					code: '<div><DBTabItem>Tab 1</DBTabItem></div>',
					errors: [
						{
							messageId: 'subComponentRequiredParent',
							data: {
								component: 'DBTabItem',
								parent: 'DBTabList',
								slot: ''
							}
						}
					]
				}
			]
		});

		angularRuleTester.run(
			'sub-component-required-parent (Angular - Tabs)',
			rule,
			{
				valid: [
					{
						code: '<db-tabs><db-tab-list><db-tab-item>Tab 1</db-tab-item></db-tab-list><db-tab-panel>Panel</db-tab-panel></db-tabs>'
					}
				],
				invalid: [
					{
						code: '<div><db-tab-list><db-tab-item>Tab</db-tab-item></db-tab-list></div>',
						errors: [
							{
								messageId: 'subComponentRequiredParent',
								data: {
									component: 'db-tab-list',
									parent: 'db-tabs',
									slot: ''
								}
							}
						]
					}
				]
			}
		);
	});

	describe('DBNavigationItem', () => {
		ruleTester.run(
			'sub-component-required-parent (React - NavigationItem)',
			rule,
			{
				valid: [
					{
						code: '<DBNavigation><DBNavigationItem>Item</DBNavigationItem></DBNavigation>'
					},
					{
						// NavigationItem can also be nested inside another NavigationItem
						code: '<DBNavigation><DBNavigationItem subNavigation={<DBNavigationItem>Sub</DBNavigationItem>}>Item</DBNavigationItem></DBNavigation>'
					}
				],
				invalid: [
					{
						code: '<div><DBNavigationItem>Item</DBNavigationItem></div>',
						errors: [
							{
								messageId: 'subComponentRequiredParent',
								data: {
									component: 'DBNavigationItem',
									parent: 'DBNavigation or DBNavigationItem (in slot "subNavigation")',
									slot: ''
								}
							}
						]
					}
				]
			}
		);

		vueRuleTester.run(
			'sub-component-required-parent (Vue - NavigationItem with kebab-case slot)',
			rule,
			{
				valid: [
					{
						code: '<template><DBNavigation><DBNavigationItem>Item</DBNavigationItem></DBNavigation></template>'
					},
					{
						// Vue uses kebab-case slot names: #sub-navigation
						code: '<template><DBNavigation><DBNavigationItem><template #sub-navigation><DBNavigationItem>Sub</DBNavigationItem></template></DBNavigationItem></DBNavigation></template>'
					},
					{
						// Vue also accepts camelCase slot names: #subNavigation
						code: '<template><DBNavigation><DBNavigationItem><template v-slot:subNavigation><DBNavigationItem>Sub</DBNavigationItem></template></DBNavigationItem></DBNavigation></template>'
					}
				],
				invalid: [
					{
						code: '<template><div><DBNavigationItem>Item</DBNavigationItem></div></template>',
						errors: [
							{
								messageId: 'subComponentRequiredParent',
								data: {
									component: 'DBNavigationItem',
									parent: 'DBNavigation or DBNavigationItem (in slot "subNavigation")',
									slot: ''
								}
							}
						]
					}
				]
			}
		);
	});

	describe('DBTableRow', () => {
		ruleTester.run(
			'sub-component-required-parent (React - TableRow)',
			rule,
			{
				valid: [
					{
						code: '<DBTable><DBTableHead><DBTableRow><DBTableHeaderCell>H</DBTableHeaderCell></DBTableRow></DBTableHead></DBTable>'
					},
					{
						code: '<DBTable><DBTableBody><DBTableRow><DBTableDataCell>D</DBTableDataCell></DBTableRow></DBTableBody></DBTable>'
					}
				],
				invalid: [
					{
						code: '<div><DBTableRow><DBTableDataCell>D</DBTableDataCell></DBTableRow></div>',
						errors: [
							{
								messageId: 'subComponentRequiredParent',
								data: {
									component: 'DBTableRow',
									parent: 'DBTableHead or DBTableBody or DBTableFooter',
									slot: ''
								}
							}
						]
					}
				]
			}
		);
	});
});
