import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/experimental-ct-react';

import { DBBreadcrumb } from '../breadcrumb/index';
import { DBBreadcrumbItem } from './index';
// @ts-ignore - vue can only find it with .ts as file ending
import { DEFAULT_VIEWPORT } from '../../shared/constants.ts';

const comp: any = (
	<DBBreadcrumb>
		<DBBreadcrumbItem href="#">Home</DBBreadcrumbItem>
		<DBBreadcrumbItem href="#">Category</DBBreadcrumbItem>
		<DBBreadcrumbItem ariaCurrent="page">Current Page</DBBreadcrumbItem>
	</DBBreadcrumb>
);

const testComponent = () => {
	test('should contain text', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toContainText('Home');
		await expect(component).toContainText('Current Page');
	});

	test('should match screenshot', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toHaveScreenshot();
	});

	test('should not have any accessibility issues', async ({
		mount,
		page
	}) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({
			page
		}).analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
};

test.describe('DBBreadcrumbItem', () => {
	test.use({ viewport: DEFAULT_VIEWPORT });
	testComponent();
});
