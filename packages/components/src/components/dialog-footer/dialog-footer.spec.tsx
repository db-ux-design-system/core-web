import { expect, test } from '@playwright/experimental-ct-react';

import { DBDialogFooter } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

type FooterCase = {
	name: string;
	className?: string;
	id?: string;
	children: string[];
};

/**
 * Prop table for Property 4. It covers `className` and `id` in all three shapes
 * (unset, empty string, non-empty string) as a full cross product, and pairs every
 * row with a children variant so that 0, 1, 2 and 3 children as well as two
 * different orders of the same children appear.
 */
const FOOTER_CASES: FooterCase[] = [
	{ name: 'class unset, id unset, no children', children: [] },
	{ name: 'class unset, id empty, one child', id: '', children: ['A'] },
	{
		name: 'class unset, id set, two children',
		id: 'dialog-footer-id-1',
		children: ['A', 'B']
	},
	{
		name: 'class empty, id unset, two children reversed',
		className: '',
		children: ['B', 'A']
	},
	{
		name: 'class empty, id empty, three children',
		className: '',
		id: '',
		children: ['B', 'A', 'C']
	},
	{
		name: 'class empty, id set, one child',
		className: '',
		id: 'dialog-footer-id-2',
		children: ['A']
	},
	{
		name: 'class set, id unset, three children',
		className: 'my-footer',
		children: ['C', 'A', 'B']
	},
	{
		name: 'class set, id empty, two children',
		className: 'my-footer',
		id: '',
		children: ['A', 'B']
	},
	{
		name: 'class set, id set, no children',
		className: 'my-footer',
		id: 'dialog-footer-id-3',
		children: []
	}
];

/* React consumes `className`, Vue consumes `class`; passing both keeps one prop
 * table usable for both outputs, because each output ignores the other prop. */
const renderCase = ({ className, id, children }: FooterCase): any => (
	<DBDialogFooter className={className} class={className} id={id}>
		{children.map((label) => (
			<span key={label} data-testid={`child-${label}`}>
				{label}
			</span>
		))}
	</DBDialogFooter>
);

// Feature: dialog-component, Property 4: Footer renders children in order with optional class and id
// Enumerated over the prop table above instead of sampled with fast-check, because
// one browser mount per iteration is too slow for random generation.
// **Validates: Requirements 7.1, 7.3, 7.4, 7.5**
const testProperty4 = () => {
	for (const footerCase of FOOTER_CASES) {
		test(`Property 4: ${footerCase.name}`, async ({ mount, page }) => {
			await mount(renderCase(footerCase));

			const footer = page.locator('footer.db-dialog-footer');

			// Requirement 7.1: exactly one <footer> root carrying db-dialog-footer
			await expect(footer).toHaveCount(1);
			await expect(page.locator('.db-dialog-footer')).toHaveCount(1);

			// Requirements 7.3, 7.5: className appended only when non-empty
			const classes = await footer.evaluate((element) => [
				...new Set(element.classList)
			]);
			expect(classes.sort()).toEqual(
				(footerCase.className
					? ['db-dialog-footer', footerCase.className]
					: ['db-dialog-footer']
				).sort()
			);

			// Requirements 7.4, 7.5: id attribute present only for a non-empty id
			if (footerCase.id) {
				await expect(footer).toHaveAttribute('id', footerCase.id);
			} else {
				expect(await footer.getAttribute('id')).toBeNull();
			}

			// Requirement 7.1: children in unchanged source order as the only content
			const childTexts = await footer.evaluate((element) =>
				[...element.children].map(
					(child) => child.textContent?.trim() ?? ''
				)
			);
			expect(childTexts).toEqual(footerCase.children);
		});
	}
};

test.describe('DBDialogFooter', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testProperty4();
});
