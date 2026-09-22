import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBBreadcrumbItem } from '../breadcrumb-item';
import { DBBreadcrumbTruncationItem } from '../breadcrumb-truncation-item';
import { DBBreadcrumb } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

// Composition API: consumer slots DBBreadcrumbItem children.
const compositionBreadcrumb: any = (
	<DBBreadcrumb>
		<DBBreadcrumbItem>
			<a href="/">Home</a>
		</DBBreadcrumbItem>
		<DBBreadcrumbItem>
			<a href="/category">Category</a>
		</DBBreadcrumbItem>
		<DBBreadcrumbItem>
			<a href="/category/current" aria-current="page">
				Current
			</a>
		</DBBreadcrumbItem>
	</DBBreadcrumb>
);

// Options API: consumer passes an items array.
const optionsBreadcrumb: any = (
	<DBBreadcrumb
		items={[
			{ text: 'Home', href: '/' },
			{ text: 'Category', href: '/category' },
			{ text: 'Current', href: '/category/current' }
		]}
	/>
);

// Manual truncation: middle items live inside a truncation popover.
const truncationBreadcrumb: any = (
	<DBBreadcrumb>
		<DBBreadcrumbItem>
			<a href="/">Home</a>
		</DBBreadcrumbItem>
		<DBBreadcrumbTruncationItem label="Show more breadcrumbs">
			<DBBreadcrumbItem>
				<a href="/1">Level 1</a>
			</DBBreadcrumbItem>
			<DBBreadcrumbItem>
				<a href="/1/2">Level 2</a>
			</DBBreadcrumbItem>
		</DBBreadcrumbTruncationItem>
		<DBBreadcrumbItem>
			<a href="/1/2/current" aria-current="page">
				Current
			</a>
		</DBBreadcrumbItem>
	</DBBreadcrumb>
);

const testComponent = () => {
	test('should render a navigation landmark', async ({ mount }) => {
		const component = await mount(compositionBreadcrumb);
		await expect(component).toHaveRole('navigation');
	});

	test('should render an ordered list of items (composition)', async ({
		mount
	}) => {
		const component = await mount(compositionBreadcrumb);
		// The <ol> must contain real <li> items, otherwise the list is
		// semantically empty (a11y violation).
		await expect(component.locator('ol > li')).toHaveCount(3);
	});

	test('should render an ordered list of items (options API)', async ({
		mount
	}) => {
		const component = await mount(optionsBreadcrumb);
		await expect(component.locator('ol > li')).toHaveCount(3);
	});

	test('should mark the last item as the current page', async ({ mount }) => {
		const component = await mount(compositionBreadcrumb);
		const current = component.locator('[aria-current="page"]');
		await expect(current).toHaveCount(1);
		await expect(current).toHaveText('Current');
	});

	test('should default the last options-API item to aria-current="page"', async ({
		mount
	}) => {
		const component = await mount(optionsBreadcrumb);
		await expect(component.locator('[aria-current="page"]')).toHaveText(
			'Current'
		);
	});

	test('should render a truncation popover toggle when a truncation item is used', async ({
		mount
	}) => {
		const component = await mount(truncationBreadcrumb);
		await expect(
			component.locator('.db-breadcrumb-truncation-item-toggle')
		).toBeVisible();
		// All crumbs (including the truncated ones) stay in the DOM.
		await expect(component.locator('li a')).toHaveCount(4);
	});

	test('should match screenshot', async ({ mount }) => {
		const component = await mount(compositionBreadcrumb);
		await expect(component).toHaveScreenshot();
	});
};

const testA11y = () => {
	test('should not have any A11y issues (composition)', async ({
		page,
		mount
	}) => {
		await mount(compositionBreadcrumb);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-breadcrumb')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});

	test('should not have any A11y issues (options API)', async ({
		page,
		mount
	}) => {
		await mount(optionsBreadcrumb);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-breadcrumb')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

test.describe('DBBreadcrumb', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
	testA11y();
});
