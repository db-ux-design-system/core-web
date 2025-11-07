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

test.describe('DBBreadcrumb', () => {
	test('should render', async ({ mount }) => {
		const component = await mount(defaultBreadcrumb);
		await expect(component).toBeVisible();
	});

	test('should have accessible role', async ({ mount }) => {
		const component = await mount(defaultBreadcrumb);
		await expect(component).toHaveAttribute('aria-label', 'breadcrumb');
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
});
