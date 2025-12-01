/**
 * Unit and integration tests for DBBreadcrumb component
 *
 * Test Coverage:
 * - Basic rendering and accessibility
 * - Collapse/Expand functionality with maxItems
 * - Ellipsis button interaction and state management
 * - ARIA attributes (aria-expanded, aria-controls, aria-current, aria-label)
 * - Size variants (small, medium)
 * - Separator variants (chevron, slash)
 * - Icon support in breadcrumb items
 * - Screenshot regression testing
 */
import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBBreadcrumb } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

const defaultBreadcrumb: any = (
	<DBBreadcrumb>
		<li>
			<a href="#">Home</a>
		</li>
		<li>
			<a href="#">Category</a>
		</li>
		<li aria-current="page">Current Page</li>
	</DBBreadcrumb>
);

const breadcrumbItems = [
	{ href: '#', text: 'Home' },
	{ href: '#', text: 'Products' },
	{ href: '#', text: 'Category' },
	{ href: '#', text: 'Subcategory' },
	{ text: 'Current Page', ariaCurrent: 'page' as const }
];

test.describe('DBBreadcrumb', () => {
	test('should render', async ({ mount }) => {
		const component = await mount(defaultBreadcrumb);
		await expect(component).toBeVisible();
	});

	test('should have accessible role', async ({ mount }) => {
		const component = await mount(defaultBreadcrumb);
		await expect(component).toHaveAttribute('aria-label', 'Breadcrumb');
	});

	test('should not have basic accessibility issues', async ({ mount }) => {
		const component = await mount(defaultBreadcrumb);
		const accessibilityScanResults = await new AxeBuilder({
			page: component.page()
		})
			.include('.db-breadcrumb')
			.analyze();
		expect(accessibilityScanResults.violations).toEqual([]);
	});

	test('should match screenshot', async ({ mount }) => {
		const component = await mount(defaultBreadcrumb);
		await component.page().setViewportSize(DEFAULT_VIEWPORT);
		await expect(component).toHaveScreenshot();
	});

	test.describe('Collapse/Expand Functionality', () => {
		test('should display all items when maxItems is not set', async ({
			mount
		}) => {
			const component = await mount(
				(<DBBreadcrumb items={breadcrumbItems} />) as any
			);
			const listItems = component.locator('li');
			await expect(listItems).toHaveCount(5);
			await expect(
				component.locator('.db-breadcrumb-ellipsis')
			).not.toBeVisible();
		});

		test('should display all items when items count is less than maxItems', async ({
			mount
		}) => {
			const component = await mount(
				(<DBBreadcrumb items={breadcrumbItems} maxItems={10} />) as any
			);
			const listItems = component.locator('li');
			await expect(listItems).toHaveCount(5);
			await expect(
				component.locator('.db-breadcrumb-ellipsis')
			).not.toBeVisible();
		});

		test('should collapse items when maxItems is set and exceeded', async ({
			mount
		}) => {
			const component = await mount(
				(<DBBreadcrumb items={breadcrumbItems} maxItems={3} />) as any
			);

			// Should show: first item + ellipsis + last 2 items = 4 list items
			const listItems = component.locator('li');
			await expect(listItems).toHaveCount(4);

			// Ellipsis button should be visible
			const ellipsisButton = component.locator('.db-breadcrumb-ellipsis');
			await expect(ellipsisButton).toBeVisible();

			// First item should be visible
			await expect(
				component.getByRole('link', { name: 'Home', exact: true })
			).toBeVisible();

			// Middle items should not be visible in collapsed state
			await expect(
				component.getByRole('link', { name: 'Products', exact: true })
			).not.toBeVisible();
			await expect(
				component.getByRole('link', { name: 'Category', exact: true })
			).not.toBeVisible();

			// Last items should be visible
			await expect(
				component.getByRole('link', {
					name: 'Subcategory',
					exact: true
				})
			).toBeVisible();
			await expect(
				component.getByText('Current Page', { exact: true })
			).toBeVisible();
		});

		test('should expand all items when ellipsis button is clicked', async ({
			mount
		}) => {
			const component = await mount(
				(<DBBreadcrumb items={breadcrumbItems} maxItems={3} />) as any
			);

			// Initially collapsed
			let listItems = component.locator('li');
			await expect(listItems).toHaveCount(4);

			// Click the ellipsis button
			const ellipsisButton = component.locator('.db-breadcrumb-ellipsis');
			await ellipsisButton.click();

			// Should now show all 5 items
			listItems = component.locator('li');
			await expect(listItems).toHaveCount(5);

			// All items should now be visible
			await expect(
				component.getByRole('link', { name: 'Home', exact: true })
			).toBeVisible();
			await expect(
				component.getByRole('link', { name: 'Products', exact: true })
			).toBeVisible();
			await expect(
				component.getByRole('link', { name: 'Category', exact: true })
			).toBeVisible();
			await expect(
				component.getByRole('link', {
					name: 'Subcategory',
					exact: true
				})
			).toBeVisible();
			await expect(
				component.getByText('Current Page', { exact: true })
			).toBeVisible();

			// Ellipsis button should not be visible anymore
			await expect(ellipsisButton).not.toBeVisible();
		});

		test('should have correct aria-expanded attribute', async ({
			mount
		}) => {
			const component = await mount(
				(<DBBreadcrumb items={breadcrumbItems} maxItems={3} />) as any
			);

			const ellipsisButton = component.locator('.db-breadcrumb-ellipsis');

			// Initially should be false
			await expect(ellipsisButton).toHaveAttribute(
				'aria-expanded',
				'false'
			);

			// After clicking should be true
			await ellipsisButton.click();
			// Button is no longer visible after expansion, which is correct
			await expect(ellipsisButton).not.toBeVisible();
		});

		test('should have correct aria-controls attribute', async ({
			mount
		}) => {
			const component = await mount(
				(
					<DBBreadcrumb
						items={breadcrumbItems}
						maxItems={3}
						id="test-breadcrumb"
					/>
				) as any
			);

			const ellipsisButton = component.locator('.db-breadcrumb-ellipsis');
			await expect(ellipsisButton).toHaveAttribute(
				'aria-controls',
				'test-breadcrumb-list'
			);
		});

		test('should use default ellipsisAriaLabel', async ({ mount }) => {
			const component = await mount(
				(<DBBreadcrumb items={breadcrumbItems} maxItems={3} />) as any
			);

			const ellipsisButton = component.locator('.db-breadcrumb-ellipsis');
			await expect(ellipsisButton).toHaveAttribute(
				'aria-label',
				'Expand to show all breadcrumb items'
			);
		});

		test('should use custom ellipsisAriaLabel', async ({ mount }) => {
			const customLabel = 'Show hidden items';
			const component = await mount(
				(
					<DBBreadcrumb
						items={breadcrumbItems}
						maxItems={3}
						ellipsisAriaLabel={customLabel}
					/>
				) as any
			);

			const ellipsisButton = component.locator('.db-breadcrumb-ellipsis');
			await expect(ellipsisButton).toHaveAttribute(
				'aria-label',
				customLabel
			);
		});

		test('should show correct items count for maxItems=2', async ({
			mount
		}) => {
			const component2 = await mount(
				(<DBBreadcrumb items={breadcrumbItems} maxItems={2} />) as any
			);
			await expect(component2.locator('li')).toHaveCount(3);
		});

		test('should show correct items count for maxItems=4', async ({
			mount
		}) => {
			const component4 = await mount(
				(<DBBreadcrumb items={breadcrumbItems} maxItems={4} />) as any
			);
			await expect(component4.locator('li')).toHaveCount(5);
		});

		test('should mark current page with aria-current', async ({
			mount
		}) => {
			const component = await mount(
				(<DBBreadcrumb items={breadcrumbItems} maxItems={3} />) as any
			);

			const currentPage = component.locator('[aria-current="page"]');
			await expect(currentPage).toBeVisible();
			await expect(currentPage).toHaveText('Current Page');
		});

		test('should handle items with icons', async ({ mount }) => {
			const itemsWithIcons = [
				{ href: '#', text: 'Home', icon: 'house' },
				{ href: '#', text: 'Settings', icon: 'gear_wheel' },
				{ href: '#', text: 'Profile', icon: 'person' },
				{ text: 'Current', ariaCurrent: 'page' as const, icon: 'dot' }
			];

			const component = await mount(
				(<DBBreadcrumb items={itemsWithIcons} maxItems={2} />) as any
			);

			// In collapsed state: first item (Home) + ellipsis + last 1 item (Current)
			// Both visible items have icons, so we expect 2 icons
			const icons = component.locator('.db-icon');
			await expect(icons).toHaveCount(2);
			await expect(icons.first()).toBeVisible();
		});
	});

	test.describe('Size and Separator Variants', () => {
		test('should apply small size attribute', async ({ mount }) => {
			const component = await mount(
				(<DBBreadcrumb items={breadcrumbItems} size="small" />) as any
			);
			await expect(component).toHaveAttribute('data-size', 'small');
		});

		test('should apply medium size attribute', async ({ mount }) => {
			const component = await mount(
				(<DBBreadcrumb items={breadcrumbItems} size="medium" />) as any
			);
			await expect(component).toHaveAttribute('data-size', 'medium');
		});

		test('should apply chevron separator attribute', async ({ mount }) => {
			const component = await mount(
				(
					<DBBreadcrumb items={breadcrumbItems} separator="chevron" />
				) as any
			);
			await expect(component).toHaveAttribute(
				'data-separator',
				'chevron'
			);
		});

		test('should apply slash separator attribute', async ({ mount }) => {
			const component = await mount(
				(
					<DBBreadcrumb items={breadcrumbItems} separator="slash" />
				) as any
			);
			await expect(component).toHaveAttribute('data-separator', 'slash');
		});
	});
});
