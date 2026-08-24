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
						code: '<DBDrawer header={<DBDrawerHeader>Title</DBDrawerHeader>}>Content</DBDrawer>'
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
					},
					{
						// Direct child without slot prop is invalid
						code: '<DBDrawer><DBDrawerHeader>Title</DBDrawerHeader></DBDrawer>',
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

	describe('DBDialogHeader and DBDialogFooter', () => {
		ruleTester.run('sub-component-required-parent (React - Dialog)', rule, {
			valid: [
				{
					code: '<DBDialog header={<DBDialogHeader>Title</DBDialogHeader>} footer={<DBDialogFooter>Actions</DBDialogFooter>}>Content</DBDialog>'
				}
			],
			invalid: [
				{
					code: '<div><DBDialogHeader>Title</DBDialogHeader></div>',
					errors: [
						{
							messageId: 'subComponentRequiredParent',
							data: {
								component: 'DBDialogHeader',
								parent: 'DBDialog (in slot "header")',
								slot: ''
							}
						}
					]
				},
				{
					// Direct child without slot prop is invalid
					code: '<DBDialog><DBDialogFooter>Actions</DBDialogFooter></DBDialog>',
					errors: [
						{
							messageId: 'subComponentRequiredParent',
							data: {
								component: 'DBDialogFooter',
								parent: 'DBDialog (in slot "footer")',
								slot: ''
							}
						}
					]
				}
			]
		});

		vueRuleTester.run(
			'sub-component-required-parent (Vue - Dialog)',
			rule,
			{
				valid: [
					{
						code: '<template><DBDialog><template #header><DBDialogHeader>Title</DBDialogHeader></template><template v-slot:footer><DBDialogFooter>Actions</DBDialogFooter></template></DBDialog></template>'
					}
				],
				invalid: [
					{
						code: '<template><DBDialog><DBDialogHeader>Title</DBDialogHeader></DBDialog></template>',
						errors: [
							{
								messageId: 'subComponentRequiredParent',
								data: {
									component: 'DBDialogHeader',
									parent: 'DBDialog (in slot "header")',
									slot: ''
								}
							}
						]
					},
					{
						code: '<template><div><DBDialogFooter>Actions</DBDialogFooter></div></template>',
						errors: [
							{
								messageId: 'subComponentRequiredParent',
								data: {
									component: 'DBDialogFooter',
									parent: 'DBDialog (in slot "footer")',
									slot: ''
								}
							}
						]
					}
				]
			}
		);

		angularRuleTester.run(
			'sub-component-required-parent (Angular - Dialog)',
			rule,
			{
				valid: [
					{
						code: '<db-dialog><db-dialog-header header>Title</db-dialog-header><db-dialog-footer footer>Actions</db-dialog-footer></db-dialog>'
					},
					{
						code: '<db-dialog><ng-container header><db-dialog-header>Title</db-dialog-header></ng-container></db-dialog>'
					}
				],
				invalid: [
					{
						code: '<db-dialog><db-dialog-header>Title</db-dialog-header></db-dialog>',
						errors: [
							{
								messageId: 'subComponentRequiredParent',
								data: {
									component: 'db-dialog-header',
									parent: 'db-dialog (in slot "header")',
									slot: ''
								}
							}
						]
					},
					{
						code: '<div><db-dialog-footer footer>Actions</db-dialog-footer></div>',
						errors: [
							{
								messageId: 'subComponentRequiredParent',
								data: {
									component: 'db-dialog-footer',
									parent: 'db-dialog (in slot "footer")',
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
					},
					{
						// NavigationItem can also be a direct child of DBHeader
						code: '<DBHeader><DBNavigationItem>Item</DBNavigationItem></DBHeader>'
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
									parent: 'DBNavigation or DBNavigationItem (in slot "subNavigation") or DBHeader',
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
					},
					{
						// NavigationItem can be a direct child of DBHeader
						code: '<template><DBHeader><DBNavigationItem>Item</DBNavigationItem></DBHeader></template>'
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
									parent: 'DBNavigation or DBNavigationItem (in slot "subNavigation") or DBHeader',
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

// Feature: dialog-component, Property 26: Dialog sub-components require a `DBDialog` ancestor
//
// The input space is markup, so the "generator" is a table of placement shapes per framework
// (sub-component, slot form, wrapper element, nesting depth, presence of the `DBDialog` ancestor).
// `RuleTester` cases are declarative, so the table is expanded into `valid` / `invalid` cases:
// every placement without a resolvable `DBDialog` slot ancestor asserts exactly one violation at
// the opening element, every resolvable placement asserts none.
//
// The ancestor has to be reached through the framework slot form (`header`/`footer` prop in React,
// `header`/`footer` attribute in Angular, `#header`/`#footer` template in Vue) - a bare child of
// `DBDialog` would not be projected into the slot and is therefore reported.
type PlacementShape = {
	/** What the shape varies (documentation only). */
	shape: string;
	code: string;
	/** Sub-component as the rule reports it. */
	component: string;
	slot: 'header' | 'footer';
	/** `true` when the rule has to report exactly one violation. */
	reports: boolean;
};

const expandPlacementShapes = (shapes: PlacementShape[]) => ({
	valid: shapes
		.filter(({ reports }) => !reports)
		.map(({ code }) => ({ code })),
	invalid: shapes
		.filter(({ reports }) => reports)
		.map(({ code, component, slot }) => ({
			code,
			// Exactly one expected error: RuleTester fails on any additional or missing report.
			errors: [
				{
					messageId: 'subComponentRequiredParent',
					data: {
						component,
						parent: `${
							component.startsWith('db-')
								? 'db-dialog'
								: 'DBDialog'
						} (in slot "${slot}")`,
						slot: ''
					}
				}
			]
		}))
});

const reactPlacementShapes: PlacementShape[] = [
	{
		shape: 'header prop holds the sub-component',
		code: '<DBDialog header={<DBDialogHeader>Title</DBDialogHeader>}>Content</DBDialog>',
		component: 'DBDialogHeader',
		slot: 'header',
		reports: false
	},
	{
		shape: 'footer prop holds the sub-component',
		code: '<DBDialog footer={<DBDialogFooter>Actions</DBDialogFooter>}>Content</DBDialog>',
		component: 'DBDialogFooter',
		slot: 'footer',
		reports: false
	},
	{
		shape: 'header prop, fragment wrapper',
		code: '<DBDialog header={<><DBDialogHeader>Title</DBDialogHeader></>}>Content</DBDialog>',
		component: 'DBDialogHeader',
		slot: 'header',
		reports: false
	},
	{
		shape: 'header prop, element wrapper at depth 1',
		code: '<DBDialog header={<div><DBDialogHeader>Title</DBDialogHeader></div>}>Content</DBDialog>',
		component: 'DBDialogHeader',
		slot: 'header',
		reports: false
	},
	{
		shape: 'footer prop, element wrappers at depth 2',
		code: '<DBDialog footer={<div><span><DBDialogFooter>Actions</DBDialogFooter></span></div>}>Content</DBDialog>',
		component: 'DBDialogFooter',
		slot: 'footer',
		reports: false
	},
	{
		shape: 'sub-component nested inside a wrapper element around the dialog',
		code: '<div><section><DBDialog header={<DBDialogHeader>Title</DBDialogHeader>}>Content</DBDialog></section></div>',
		component: 'DBDialogHeader',
		slot: 'header',
		reports: false
	},
	{
		shape: 'no dialog ancestor at all',
		code: '<div><DBDialogHeader>Title</DBDialogHeader></div>',
		component: 'DBDialogHeader',
		slot: 'header',
		reports: true
	},
	{
		shape: 'no dialog ancestor, footer sub-component',
		code: '<div><DBDialogFooter>Actions</DBDialogFooter></div>',
		component: 'DBDialogFooter',
		slot: 'footer',
		reports: true
	},
	{
		shape: 'dialog ancestor but no slot prop (default slot child)',
		code: '<DBDialog><DBDialogHeader>Title</DBDialogHeader></DBDialog>',
		component: 'DBDialogHeader',
		slot: 'header',
		reports: true
	},
	{
		shape: 'dialog ancestor but no slot prop, footer sub-component',
		code: '<DBDialog><DBDialogFooter>Actions</DBDialogFooter></DBDialog>',
		component: 'DBDialogFooter',
		slot: 'footer',
		reports: true
	},
	{
		shape: 'sub-component in the wrong slot prop of the dialog',
		code: '<DBDialog footer={<DBDialogHeader>Title</DBDialogHeader>}>Content</DBDialog>',
		component: 'DBDialogHeader',
		slot: 'header',
		reports: true
	},
	{
		shape: 'slot prop of a foreign parent component',
		code: '<DBDrawer header={<DBDialogHeader>Title</DBDialogHeader>}>Content</DBDrawer>',
		component: 'DBDialogHeader',
		slot: 'header',
		reports: true
	}
];

const vuePlacementShapes: PlacementShape[] = [
	{
		shape: '#header template holds the sub-component',
		code: '<template><DBDialog><template #header><DBDialogHeader>Title</DBDialogHeader></template></DBDialog></template>',
		component: 'DBDialogHeader',
		slot: 'header',
		reports: false
	},
	{
		shape: 'v-slot:footer template holds the sub-component',
		code: '<template><DBDialog><template v-slot:footer><DBDialogFooter>Actions</DBDialogFooter></template></DBDialog></template>',
		component: 'DBDialogFooter',
		slot: 'footer',
		reports: false
	},
	{
		shape: '#header template, element wrapper at depth 1',
		code: '<template><DBDialog><template #header><div><DBDialogHeader>Title</DBDialogHeader></div></template></DBDialog></template>',
		component: 'DBDialogHeader',
		slot: 'header',
		reports: false
	},
	{
		shape: '#footer template, element wrappers at depth 2',
		code: '<template><DBDialog><template #footer><div><span><DBDialogFooter>Actions</DBDialogFooter></span></div></template></DBDialog></template>',
		component: 'DBDialogFooter',
		slot: 'footer',
		reports: false
	},
	{
		shape: 'no dialog ancestor at all',
		code: '<template><div><DBDialogHeader>Title</DBDialogHeader></div></template>',
		component: 'DBDialogHeader',
		slot: 'header',
		reports: true
	},
	{
		shape: 'dialog ancestor but no slot template (default slot child)',
		code: '<template><DBDialog><DBDialogHeader>Title</DBDialogHeader></DBDialog></template>',
		component: 'DBDialogHeader',
		slot: 'header',
		reports: true
	},
	{
		shape: 'dialog ancestor but no slot template, footer sub-component',
		code: '<template><DBDialog><DBDialogFooter>Actions</DBDialogFooter></DBDialog></template>',
		component: 'DBDialogFooter',
		slot: 'footer',
		reports: true
	},
	{
		shape: 'sub-component in the wrong slot template',
		code: '<template><DBDialog><template #footer><DBDialogHeader>Title</DBDialogHeader></template></DBDialog></template>',
		component: 'DBDialogHeader',
		slot: 'header',
		reports: true
	}
];

const angularPlacementShapes: PlacementShape[] = [
	{
		shape: 'header attribute on the sub-component',
		code: '<db-dialog><db-dialog-header header>Title</db-dialog-header></db-dialog>',
		component: 'db-dialog-header',
		slot: 'header',
		reports: false
	},
	{
		shape: 'footer attribute on the sub-component',
		code: '<db-dialog><db-dialog-footer footer>Actions</db-dialog-footer></db-dialog>',
		component: 'db-dialog-footer',
		slot: 'footer',
		reports: false
	},
	{
		shape: 'header attribute on an ng-container wrapper',
		code: '<db-dialog><ng-container header><db-dialog-header>Title</db-dialog-header></ng-container></db-dialog>',
		component: 'db-dialog-header',
		slot: 'header',
		reports: false
	},
	{
		shape: 'footer attribute on a wrapper, sub-component at depth 2',
		code: '<db-dialog><ng-container footer><div><db-dialog-footer>Actions</db-dialog-footer></div></ng-container></db-dialog>',
		component: 'db-dialog-footer',
		slot: 'footer',
		reports: false
	},
	{
		shape: 'no dialog ancestor at all',
		code: '<div><db-dialog-header header>Title</db-dialog-header></div>',
		component: 'db-dialog-header',
		slot: 'header',
		reports: true
	},
	{
		shape: 'no dialog ancestor, footer sub-component',
		code: '<div><db-dialog-footer footer>Actions</db-dialog-footer></div>',
		component: 'db-dialog-footer',
		slot: 'footer',
		reports: true
	},
	{
		shape: 'dialog ancestor but no slot attribute',
		code: '<db-dialog><db-dialog-header>Title</db-dialog-header></db-dialog>',
		component: 'db-dialog-header',
		slot: 'header',
		reports: true
	},
	{
		shape: 'dialog ancestor but wrong slot attribute',
		code: '<db-dialog><db-dialog-header footer>Title</db-dialog-header></db-dialog>',
		component: 'db-dialog-header',
		slot: 'header',
		reports: true
	},
	{
		shape: 'slot attribute inside a foreign parent component',
		code: '<db-drawer><db-dialog-footer footer>Actions</db-dialog-footer></db-drawer>',
		component: 'db-dialog-footer',
		slot: 'footer',
		reports: true
	}
];

describe('sub-component-required-parent - Property 26', () => {
	ruleTester.run(
		'Property 26 (React)',
		rule,
		expandPlacementShapes(reactPlacementShapes)
	);

	vueRuleTester.run(
		'Property 26 (Vue)',
		rule,
		expandPlacementShapes(vuePlacementShapes)
	);

	angularRuleTester.run(
		'Property 26 (Angular)',
		rule,
		expandPlacementShapes(angularPlacementShapes)
	);
});
