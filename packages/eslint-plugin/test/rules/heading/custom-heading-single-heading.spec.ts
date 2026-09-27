import * as angularTemplateParser from '@angular-eslint/template-parser';
import { RuleTester as AngularRuleTester } from '@angular-eslint/test-utils';
import { RuleTester } from '@typescript-eslint/rule-tester';
import * as vueParser from 'vue-eslint-parser';

import rule from '../../../src/rules/heading/custom-heading-single-heading.js';

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

describe('custom-heading-single-heading', () => {
	ruleTester.run('custom-heading-single-heading', rule, {
		valid: [
			{
				code: '<DBCustomHeading><h2>Installation</h2></DBCustomHeading>'
			},
			{
				code: '<DBCustomHeading><DBHeadingH2>Installation</DBHeadingH2></DBCustomHeading>'
			},
			{
				code: '<DBCustomHeading><DBHeadingH2>Installation</DBHeadingH2><button type="button">More options</button></DBCustomHeading>'
			},
			{
				code: '<DBCustomHeading><div><h3>Wrapped</h3></div></DBCustomHeading>'
			},
			// Slot content is a sibling of the heading, not a second heading.
			{
				code: '<DBCustomHeading endSlot={<DBBadge>3</DBBadge>}><h2>Installation</h2></DBCustomHeading>'
			},
			{
				code: '<DBCustomHeading startSlot={<DBIcon icon="x_placeholder" />} endSlot={<button type="button">More options</button>}><h2>Installation</h2></DBCustomHeading>'
			},
			// The heading may live in a slot: it still renders inside the wrapper.
			{
				code: '<DBCustomHeading endSlot={<h2>Installation</h2>} />'
			},
			// Dynamic children cannot be resolved statically.
			{ code: '<DBCustomHeading>{children}</DBCustomHeading>' },
			{
				code: '<DBCustomHeading>{items.map((item) => <h2 key={item.id}>{item.title}</h2>)}</DBCustomHeading>'
			},
			// A slot value that resolves at runtime may contain the heading.
			{ code: '<DBCustomHeading endSlot={slotContent} />' },
			{ code: '<DBCustomHeading startSlot={<MyHeading />} />' },
			// Other components are untouched.
			{
				code: '<DBCustomButton><button type="button">Go</button></DBCustomButton>'
			}
		],
		invalid: [
			{
				code: '<DBCustomHeading>Installation</DBCustomHeading>',
				errors: [
					{
						messageId: 'missingHeading',
						data: { component: 'DBCustomHeading' }
					}
				]
			},
			{
				code: '<DBCustomHeading><span>Installation</span></DBCustomHeading>',
				errors: [
					{
						messageId: 'missingHeading',
						data: { component: 'DBCustomHeading' }
					}
				]
			},
			{
				code: '<DBCustomHeading><h2>One</h2><h3>Two</h3></DBCustomHeading>',
				errors: [
					{
						messageId: 'multipleHeadings',
						data: { component: 'DBCustomHeading', count: '2' }
					}
				]
			},
			{
				code: '<DBCustomHeading><DBHeadingH2>One</DBHeadingH2><h2>Two</h2></DBCustomHeading>',
				errors: [
					{
						messageId: 'multipleHeadings',
						data: { component: 'DBCustomHeading', count: '2' }
					}
				]
			},
			// A slot must not add a second heading.
			{
				code: '<DBCustomHeading endSlot={<h3>Two</h3>}><h2>One</h2></DBCustomHeading>',
				errors: [
					{
						messageId: 'multipleHeadings',
						data: { component: 'DBCustomHeading', count: '2' }
					}
				]
			},
			{
				code: '<DBCustomHeading startSlot={<DBHeadingH3>One</DBHeadingH3>} endSlot={<h4>Two</h4>} />',
				errors: [
					{
						messageId: 'multipleHeadings',
						data: { component: 'DBCustomHeading', count: '2' }
					}
				]
			},
			// Static slot content without a heading anywhere is still a definite miss.
			{
				code: '<DBCustomHeading endSlot={<DBBadge>3</DBBadge>}><span>Installation</span></DBCustomHeading>',
				errors: [
					{
						messageId: 'missingHeading',
						data: { component: 'DBCustomHeading' }
					}
				]
			}
		]
	});

	vueRuleTester.run('custom-heading-single-heading (Vue)', rule, {
		valid: [
			{
				code: '<template><DBCustomHeading><h2>Installation</h2></DBCustomHeading></template>'
			},
			{
				code: '<template><DBCustomHeading><DBHeadingH2>Installation</DBHeadingH2><button type="button">More options</button></DBCustomHeading></template>'
			},
			{
				code: '<template><DBCustomHeading><slot /></DBCustomHeading></template>'
			},
			// Named slots are projected as regular children in Vue.
			{
				code: '<template><DBCustomHeading><h2>Installation</h2><template #end-slot><DBBadge>3</DBBadge></template></DBCustomHeading></template>'
			}
		],
		invalid: [
			{
				code: '<template><DBCustomHeading>Installation</DBCustomHeading></template>',
				errors: [
					{
						messageId: 'missingHeading',
						data: { component: 'DBCustomHeading' }
					}
				]
			},
			{
				code: '<template><DBCustomHeading><h2>One</h2><DBHeadingH3>Two</DBHeadingH3></DBCustomHeading></template>',
				errors: [
					{
						messageId: 'multipleHeadings',
						data: { component: 'DBCustomHeading', count: '2' }
					}
				]
			},
			{
				code: '<template><DBCustomHeading><h2>One</h2><template #end-slot><h3>Two</h3></template></DBCustomHeading></template>',
				errors: [
					{
						messageId: 'multipleHeadings',
						data: { component: 'DBCustomHeading', count: '2' }
					}
				]
			}
		]
	});

	angularRuleTester.run('custom-heading-single-heading (Angular)', rule, {
		valid: [
			{
				code: '<db-custom-heading><h2>Installation</h2></db-custom-heading>'
			},
			{
				code: '<db-custom-heading><db-heading-h-2>Installation</db-heading-h-2><button type="button">More options</button></db-custom-heading>'
			},
			{
				code: '<db-custom-heading><ng-content></ng-content></db-custom-heading>'
			},
			// `*ngIf` desugars to a Template node repeating the element name,
			// which must not be counted as a second heading.
			{
				code: '<db-custom-heading><h2 *ngIf="visible">Installation</h2></db-custom-heading>'
			},
			{
				code: '<db-custom-heading><db-heading-h-2 *ngIf="visible">Installation</db-heading-h-2></db-custom-heading>'
			},
			// Slot content is projected by attribute and stays a regular child.
			{
				code: '<db-custom-heading><h2>Installation</h2><db-badge end-slot>3</db-badge></db-custom-heading>'
			}
		],
		invalid: [
			{
				code: '<db-custom-heading>Installation</db-custom-heading>',
				errors: [
					{
						messageId: 'missingHeading',
						data: { component: 'db-custom-heading' }
					}
				]
			},
			{
				code: '<db-custom-heading><db-heading-h-2>One</db-heading-h-2><h3>Two</h3></db-custom-heading>',
				errors: [
					{
						messageId: 'multipleHeadings',
						data: { component: 'db-custom-heading', count: '2' }
					}
				]
			},
			{
				code: '<db-custom-heading><h2>One</h2><h3 end-slot>Two</h3></db-custom-heading>',
				errors: [
					{
						messageId: 'multipleHeadings',
						data: { component: 'db-custom-heading', count: '2' }
					}
				]
			}
		]
	});
});
