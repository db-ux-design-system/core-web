import { test, expect } from '@playwright/experimental-ct-react';
import AxeBuilder from '@axe-core/playwright';

import { DBDrawer } from './index';
import { DEFAULT_VIEWPORT, TESTING_VIEWPORTS } from '../../shared/constants';

const comp = <DBDrawer open={true}>Test</DBDrawer>;

const testComponent = (viewport) => {
	test(`should contain text for device ${viewport.name}`, async ({
		mount
	}) => {
		const component = await mount(comp);
		await expect(component).toContainText('Test');
	});

	test.fixme(
		`should match screenshot for device ${viewport.name}`,
		async ({ mount }) => {
			const component = await mount(comp);
			// TODO: Screenshots are not captured for top-layer
			await expect(component).toHaveScreenshot();
		}
	);
};
test.describe('DBDrawer', () => {
	TESTING_VIEWPORTS.forEach((viewport) => {
		test.use({ viewport });
		testComponent(viewport);
	});
});

test.describe('DBDrawer', () => {
	test('should not have A11y issues', async ({ page, mount }) => {
		await mount(comp);
		const accessibilityScanResults = await new AxeBuilder({ page })
			.include('.db-drawer')
			.analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});
});
