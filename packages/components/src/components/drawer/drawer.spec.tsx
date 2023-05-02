import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBDrawer } from './index';

const comp = <DBDrawer open={true}>Test</DBDrawer>;

const testComponent = () => {
	test('DBDrawer should contain text', async ({ mount }) => {
		const component = await mount(comp);
		await expect(component).toContainText('Test');
	});

	test.fixme('DBDrawer should match screenshot', async ({ mount }) => {
		const component = await mount(comp);
		// TODO: Screenshots are not captured for top-layer
		await expect(component).toHaveScreenshot();
	});
};

test.describe('DBDrawer component on desktop', () => {
	// Old-school CRT monitor screensize
	test.use({ viewport: { width: 1024, height: 768 } });
	testComponent();
});

test.describe('DBDrawer component on mobile', () => {
	// iPhone 13 / portrait screen size
	test.use({ viewport: { width: 390, height: 884 } });
	testComponent();
});

test.describe('DBDrawer component A11y', () => {
	test('DBDrawer should not have any automatically detectable accessibility issues', async ({
		page,
		mount
	}) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-drawer')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});
